/**
 * Rheole Enterprise Authentication configuration interface definitions.
 * Designed to support multi-factor auth, OAuth (Google/Apple), Passkeys (WebAuthn),
 * and session rotation flows without modifications to core schemas.
 */

export interface AuthSession {
  sessionId: string;
  userId: string;
  deviceFingerprint: string;
  ipAddress: string;
  expiresAt: number;
  rotationToken: string; // Token used for session rotation security
  isMfaVerified: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName?: string;
  roles: string[];
  mfaEnabled: boolean;
  passkeysRegistered: boolean;
}

export const AUTH_ROUTES = {
  login: "/api/auth/login",
  logout: "/api/auth/logout",
  refresh: "/api/auth/refresh",
  mfaVerify: "/api/auth/mfa/verify",
  passkeyRegister: "/api/auth/passkey/register",
  passkeyVerify: "/api/auth/passkey/verify",
};

/**
 * Validates session age and issues a rotated session context token.
 * Mitigates replay attacks by checking the single-use rotationToken.
 */
export function rotateSession(
  session: AuthSession,
  clientRotationToken: string
): { session: AuthSession; error?: string } {
  const now = Date.now();

  if (session.expiresAt < now) {
    return { session, error: "Session has expired" };
  }

  if (session.rotationToken !== clientRotationToken) {
    // SECURITY WARNING: Possible token theft or replay attempt
    return { session, error: "Invalid rotation sequence token" };
  }

  // Issue new session parameters
  const newRotationToken = crypto.randomUUID();
  const newExpiry = now + 15 * 60000; // Extend by 15 mins

  return {
    session: {
      ...session,
      rotationToken: newRotationToken,
      expiresAt: newExpiry,
    },
  };
}

/**
 * Returns WebAuthn registration credentials configuration for Passkeys initialization.
 */
export function getPasskeyRegistrationOptions(email: string) {
  return {
    challenge: Array.from(crypto.getRandomValues(new Uint8Array(32))),
    rp: {
      name: "Rheole",
      id: typeof window !== "undefined" ? window.location.hostname : "rheole.com",
    },
    user: {
      id: Array.from(new TextEncoder().encode(email)),
      name: email,
      displayName: email,
    },
    pubKeyCredParams: [
      { alg: -7, type: "public-key" as const }, // ES256
      { alg: -257, type: "public-key" as const }, // RS256
    ],
    timeout: 60000,
    attestation: "none" as const,
    authenticatorSelection: {
      residentKey: "required" as const,
      userVerification: "required" as const,
    },
  };
}
