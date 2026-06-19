-- Create founding_members table
CREATE TABLE public.founding_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    full_name TEXT,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    date_of_birth DATE,
    city TEXT,
    country TEXT,
    experience_text TEXT,
    why_rheole TEXT,
    email_verified BOOLEAN DEFAULT FALSE,
    otp_verified_at TIMESTAMP WITH TIME ZONE,
    referral_code TEXT UNIQUE,
    referred_by TEXT,
    referral_count INTEGER DEFAULT 0,
    application_status TEXT DEFAULT 'approved',
    founding_status TEXT DEFAULT 'active',
    benefit_tier INTEGER DEFAULT 1,
    ai_access_months INTEGER DEFAULT 3,
    app_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    redeemed BOOLEAN DEFAULT FALSE,
    redeemed_at TIMESTAMP WITH TIME ZONE
);

-- Create user_entitlements table
CREATE TABLE public.user_entitlements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    feature_key TEXT NOT NULL,
    entitlement_type TEXT NOT NULL,
    starts_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create Indexes
CREATE INDEX idx_founding_members_email ON public.founding_members(email);
CREATE INDEX idx_founding_members_referral_code ON public.founding_members(referral_code);
CREATE INDEX idx_founding_members_app_user_id ON public.founding_members(app_user_id);
CREATE INDEX idx_founding_members_founding_status ON public.founding_members(founding_status);
CREATE INDEX idx_user_entitlements_user_id ON public.user_entitlements(user_id);

-- Function to generate RHE-XXXXXX code
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS TRIGGER AS $$
DECLARE
    new_code TEXT;
    done BOOLEAN := FALSE;
BEGIN
    IF NEW.referral_code IS NULL THEN
        WHILE NOT done LOOP
            -- Generate a 6-character random alphanumeric string
            new_code := 'RHE-' || upper(substr(md5(random()::text), 1, 6));
            
            -- Check for uniqueness
            IF NOT EXISTS (SELECT 1 FROM public.founding_members WHERE referral_code = new_code) THEN
                NEW.referral_code := new_code;
                done := TRUE;
            END IF;
        END LOOP;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically generate code before insert
CREATE TRIGGER trigger_generate_referral_code
    BEFORE INSERT ON public.founding_members
    FOR EACH ROW
    EXECUTE FUNCTION generate_referral_code();

-- RPC Function to Redeem Founding Access Code
-- This runs as SECURITY DEFINER so it can bypass RLS for updating referral_counts and entitlements
CREATE OR REPLACE FUNCTION redeem_founding_access(
    p_referral_code TEXT
) RETURNS JSONB AS $$
DECLARE
    v_founding_record RECORD;
    v_user_id UUID;
    v_result JSONB;
BEGIN
    -- Get current authenticated user
    v_user_id := auth.uid();
    IF v_user_id IS NULL THEN
        RAISE EXCEPTION 'Not authenticated';
    END IF;

    -- Look up the code
    SELECT * INTO v_founding_record 
    FROM public.founding_members 
    WHERE referral_code = p_referral_code 
      AND founding_status = 'active'
      AND redeemed = false
    FOR UPDATE;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('success', false, 'message', 'Invalid, expired, or already redeemed referral code.');
    END IF;

    -- 1. Mark as redeemed
    UPDATE public.founding_members
    SET redeemed = true,
        redeemed_at = timezone('utc'::text, now()),
        app_user_id = v_user_id
    WHERE id = v_founding_record.id;

    -- 2. Grant AI Entitlement
    INSERT INTO public.user_entitlements (user_id, feature_key, entitlement_type, starts_at, expires_at)
    VALUES (
        v_user_id, 
        'premium_ai', 
        'founding_access', 
        timezone('utc'::text, now()), 
        timezone('utc'::text, now()) + (v_founding_record.ai_access_months || ' months')::INTERVAL
    );

    -- 3. Increment referrer's count if applicable
    IF v_founding_record.referred_by IS NOT NULL THEN
        UPDATE public.founding_members
        SET referral_count = referral_count + 1
        WHERE referral_code = v_founding_record.referred_by;
    END IF;

    RETURN jsonb_build_object(
        'success', true, 
        'message', 'Founding Access redeemed successfully. Premium AI unlocked.',
        'ai_access_months', v_founding_record.ai_access_months
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- Row Level Security (RLS) Configuration

ALTER TABLE public.founding_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_entitlements ENABLE ROW LEVEL SECURITY;

-- founding_members RLS:
CREATE POLICY "Users can view their own founding member record" 
    ON public.founding_members
    FOR SELECT 
    USING (auth.uid() = app_user_id);

CREATE POLICY "Anon can insert founding applications" 
    ON public.founding_members
    FOR INSERT 
    WITH CHECK (true);

-- user_entitlements RLS:
CREATE POLICY "Users can view their own entitlements" 
    ON public.user_entitlements
    FOR SELECT 
    USING (auth.uid() = user_id);

-- Updates to both tables are strictly handled by the SECURITY DEFINER functions
