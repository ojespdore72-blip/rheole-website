"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus, Minus } from "lucide-react";

// --- REUSABLE COMPONENTS ---

function ChapterSection({ number, title, children, isLast = false }: { number: string, title: string, children: React.ReactNode, isLast?: boolean }) {
  return (
    <section className="w-full relative pt-16 md:pt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[120px] shrink-0 sticky top-32 z-10 hidden md:block bg-[#080808] pb-4">
          <div className="flex flex-col gap-4">
            <span className="text-[32px] md:text-[48px] font-light text-[#4F6EF7]/80 leading-none">
              {number}
            </span>
            <h2 className="text-[14px] md:text-[16px] text-[#F2F2F0] font-medium tracking-wide">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="w-full md:hidden flex items-baseline gap-4 mb-8">
          <span className="text-[32px] font-light text-[#4F6EF7]/80 leading-none">
            {number}
          </span>
          <h2 className="text-[20px] text-[#F2F2F0] font-medium tracking-wide">
            {title}
          </h2>
        </div>

        <div className="flex-1 w-full pb-16 md:pb-20">
          {children}
        </div>
      </div>
      {!isLast && (
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent absolute bottom-0 left-0" />
      )}
    </section>
  );
}

function ScenarioCard({ intent, reason }: { intent: string, reason: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#0A0A0A] flex flex-col gap-6 relative overflow-hidden group hover:border-white/[0.12] transition-colors">
      <span className="text-[20px] font-serif-editorial text-[#F2F2F0]">{intent}</span>
      <div className="w-8 h-[1px] bg-[#4F6EF7]/50" />
      <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{reason}</p>
    </div>
  );
}

function ComparisonBlock({ leftTitle, leftItems, rightTitle, rightItems }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/[0.05] overflow-hidden my-12">
      <div className="p-8 md:p-12 bg-white/[0.01] flex flex-col gap-8">
        <h4 className="text-[14px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">{leftTitle}</h4>
        <ul className="flex flex-col gap-6">
          {leftItems.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3A3A3A] mt-2 shrink-0" />
              <span className="text-[15px] text-[#A0A0A0] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 md:p-12 bg-[#4F6EF7]/[0.03] border-t md:border-t-0 md:border-l border-white/[0.05] flex flex-col gap-8">
        <h4 className="text-[14px] uppercase tracking-[0.2em] text-[#4F6EF7] font-medium">{rightTitle}</h4>
        <ul className="flex flex-col gap-6">
          {rightItems.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7] mt-2 shrink-0" />
              <span className="text-[15px] text-[#F2F2F0] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GridCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] flex flex-col gap-3 hover:border-white/[0.1] transition-colors">
      <h4 className="text-[16px] text-[#F2F2F0] font-medium">{title}</h4>
      <p className="text-[13px] text-[#A0A0A0] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function EventIntelligenceDropdowns() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Time & Location",
      descTechnical: "Rheole continuously streams live geospatial mapping and temporal event data, parsing temporal metadata against a localized spatial grid to cross-reference event existence with the user's live telemetry.",
      descEndUser: "The system ensures you are only shown events happening exactly when you are available, precisely where you are willing to go, saving you from navigating across town for something that's already ended."
    },
    {
      title: "Current Weather",
      descTechnical: "Real-time API integrations with localized micro-climate meteorological services provide instant weather state updates, acting as a dynamic weighting coefficient on outdoor versus indoor node prioritization.",
      descEndUser: "If a sudden thunderstorm rolls in, Rheole instantly shifts its recommendations away from outdoor markets or park festivals, seamlessly pivoting to nearby indoor gallery openings or covered acoustic sets."
    },
    {
      title: "Popularity Trajectory",
      descTechnical: "By analyzing the velocity of incoming social signals, micro-mobility drop-off density, and real-time footfall telemetry, the algorithm generates a predictive momentum curve to forecast peak engagement windows.",
      descEndUser: "Rheole can tell you if an event is just starting to warm up, currently at its absolute peak, or slowly dying down, ensuring you arrive at the exact moment the atmosphere is perfect."
    },
    {
      title: "Crowd Density",
      descTechnical: "Utilizing aggregate, anonymized cell tower triangulation and optical density approximations from public transit nodes, the system creates a live heatmap of spatial capacity.",
      descEndUser: "You'll never walk into an uncomfortably overcrowded venue again. The app guides you to spaces with the exact crowd size you are looking for—whether that's a packed, energetic club or a quiet, half-empty workshop."
    },
    {
      title: "Travel Effort",
      descTechnical: "Route optimization algorithms calculate multi-modal transit friction, factoring in live traffic delays, ride-sharing surge pricing, and pedestrian accessibility scores, rendering an 'effort' metric.",
      descEndUser: "We don't just calculate distance; we calculate how hard it is to get there right now. If a nearby event requires crossing a massive traffic jam, Rheole suggests a slightly farther event that is actually much easier to reach."
    },
    {
      title: "Social Graph",
      descTechnical: "Encrypted, opt-in relationship graphs match your connections against clustered event attendees, using probabilistic matching to determine the likelihood of encountering strong or weak ties.",
      descEndUser: "Whether you want to unexpectedly bump into friends at a local music festival or find an entirely new scene where nobody knows you, Rheole calibrates its suggestions based on your desired social overlap."
    },
    {
      title: "Past Behaviour",
      descTechnical: "Long-term historical telemetry is fed into a recurrent neural network (RNN) to model individual interaction habits, generating a latent space representation of user preferences across hundreds of event sub-genres.",
      descEndUser: "The more you explore, the more the app understands your unique taste. It learns that you prefer quiet jazz on Thursdays and high-energy tech meetups on Tuesdays, adapting automatically."
    },
    {
      title: "Current Mood",
      descTechnical: "Implicit intent deduction measures session variables—such as interaction speed, filter toggling, and time of day—to infer immediate psychological state, adjusting the exploration vs. exploitation recommendation balance.",
      descEndUser: "Sometimes you want to discover something entirely new and chaotic, other times you want something familiar and calm. The system adapts its suggestions instantly based on how you are interacting with it today."
    },
    {
      title: "Availability",
      descTechnical: "Dynamic scheduling analysis computes strict temporal bounding boxes around the user's available window, filtering out nodes whose core durations exceed the remaining time delta.",
      descEndUser: "If you only have two hours to spare between meetings, Rheole will never suggest an immersive three-hour workshop. It only surfaces experiences you can fully enjoy within your exact free time."
    },
    {
      title: "Nearby Opportunities",
      descTechnical: "A secondary spatial querying pass identifies high-value complementary nodes (like 24/7 diners or late-night transit hubs) within a strict radius of the primary event coordinate, bundling them into cohesive itineraries.",
      descEndUser: "An event isn't an isolated experience. When suggesting a late-night concert, Rheole simultaneously ensures there's a great place to grab food right afterward and an easy way to get home."
    },
    {
      title: "Community Overlap",
      descTechnical: "Natural language processing on user profiles and event descriptions creates semantic similarity vectors, aligning the user's micro-community affiliations with the predicted audience demographic of the event.",
      descEndUser: "It ensures you are surrounded by your kind of people. If you are deeply integrated into the local indie-game development scene, Rheole connects you with the fringe events where that specific community gathers."
    },
    {
      title: "Venue Ambience",
      descTechnical: "Acoustic fingerprinting, lighting telemetry (where available), and historical user-submitted tags are aggregated to assign persistent structural and atmospheric metadata to the spatial node housing the event.",
      descEndUser: "It understands the literal feel of a room. Whether you need a brightly lit, high-energy environment for a brainstorming session or a dark, intimate corner for a quiet conversation, the system matches the physical vibe to your intent."
    }
  ];

  return (
    <div className="flex flex-col gap-3 mt-6 w-full max-w-[900px] relative">
      {items.map((item, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div 
            key={idx} 
            className={`flex flex-col rounded-xl border transition-all overflow-hidden ${
              isActive 
                ? 'border-[#4F6EF7]/40 bg-[#0A0A0A]' 
                : 'border-[#4F6EF7]/10 bg-[#4F6EF7]/[0.02] hover:border-[#4F6EF7]/30 hover:bg-[#4F6EF7]/5'
            }`}
          >
            <div 
              className="flex items-center justify-between p-5 md:px-6 cursor-pointer"
              onClick={() => setActiveIndex(isActive ? null : idx)}
            >
              <span className="text-[15px] md:text-[16px] text-[#F2F2F0] font-medium">{item.title}</span>
              {isActive ? (
                <Minus className="w-5 h-5 text-[#4F6EF7] shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-[#A0A0A0] shrink-0" />
              )}
            </div>
            
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 md:p-8 pt-2 md:pt-4 border-t border-white/[0.05] relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#4F6EF7]/50" />
                    <div className="flex flex-col gap-6 pl-4 md:pl-6">
                      <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
                        <span className="block text-[#F2F2F0] font-medium mb-2 opacity-80">Technical Observation</span>
                        {item.descTechnical}
                      </p>
                      <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
                        <span className="block text-[#F2F2F0] font-medium mb-2 opacity-80">End-User Experience</span>
                        {item.descEndUser}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// --- MAIN ARTICLE ---

export default function EventsContentArticle() {
  return (
    <article className="w-full bg-[#080808] flex flex-col pt-32 pb-24">
      
      {/* Chapter 1: What is an Event? */}
      <ChapterSection number="01" title="What Is An Event?">
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Events are not merely activities on a calendar. They are living moments where people, communities, businesses, ideas, and opportunities intersect.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            For decades, digital platforms have treated events as static entries—a date, a time, and a location. This reductive approach ignores their real value. An event is not just something you attend; it is human interaction, culture, learning, commerce, entertainment, opportunity, belonging, and memory. It is a catalyst for movement within a city. By treating events simply as calendar entries, we strip them of the profound, spontaneous magic that makes them matter in the first place.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center text-[14px] text-[#F2F2F0]">Human Interaction</div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center text-[14px] text-[#F2F2F0]">Culture & Learning</div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center text-[14px] text-[#F2F2F0]">Commerce</div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center text-[14px] text-[#F2F2F0]">Opportunity</div>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 2: The City Never Stops Moving */}
      <ChapterSection number="02" title="The City Never Stops Moving">
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Every city produces thousands of temporary experiences every day. Timing becomes intelligence.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Right now, a startup meetup is forming in a downtown café. Across the street, an open mic night is starting. A night market is setting up its stalls, a volunteer drive is concluding, and a book launch is welcoming its first guests. Every event exists for a limited time, flashing into existence and fading away. Understanding a city requires understanding this constant, overlapping tempo.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {["Startup meetups", "Music performances", "Food festivals", "Art exhibitions", "Sports screenings", "Farmer markets", "Volunteer drives", "Workshops", "Religious gatherings", "Neighbourhood celebrations", "Night markets", "College festivals", "Book launches", "Tech conferences", "Open mic nights", "Fitness sessions"].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/[0.06] text-[13px] text-[#A0A0A0] bg-[#0A0A0A] hover:text-[#F2F2F0] transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 3: Why Events Matter */}
      <ChapterSection number="03" title="Why Events Matter">
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Discovering the right event can change someone's day—or even their life.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Events shape the very fabric of daily life. They are the crucibles where careers are built and founders meet investors. Businesses find loyal customers, artists discover passionate audiences, and students weave networks that last a lifetime. Families create irreplaceable memories, travellers experience authentic local culture, and communities strengthen their bonds. These are not trivial outings; they are the milestones of human connection.
          </p>
          
          <div className="p-8 rounded-2xl bg-[#4F6EF7]/5 border border-[#4F6EF7]/20 mt-4">
            <h4 className="text-[12px] uppercase tracking-widest text-[#4F6EF7] mb-4">Did You Know?</h4>
            <p className="text-[15px] text-[#F2F2F0] font-light leading-relaxed italic">
              "Over 70% of vital professional networking and profound cultural discoveries happen outside of structured, permanent venues. They happen in the ephemeral, temporary spaces of events."
            </p>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 4: Event Context */}
      <ChapterSection number="04" title="Event Context">
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            The same event is valuable to different people for entirely different reasons. Context determines relevance.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-6">
            Consider a local food festival. To a parent, it is a weekend family outing. To an influencer, it is a photography and content creation opportunity. To an entrepreneur, it represents networking possibilities. To a couple, it serves as a unique date destination. Rheole observes the intent behind the user and contextualizes the event accordingly.
          </p>

          <div className="flex flex-col md:flex-row items-stretch gap-4">
            <div className="flex-1 p-6 rounded-xl border border-white/[0.05] bg-[#0A0A0A] flex flex-col justify-center text-center">
              <span className="text-[18px] text-[#F2F2F0] font-medium">A Food Festival</span>
            </div>
            <div className="hidden md:flex flex-col justify-center text-[#4F6EF7]/50">
              <span className="text-2xl">→</span>
            </div>
            <div className="flex-2 grid grid-cols-2 gap-2">
              {["Family outing", "Photography opportunity", "Networking", "Date destination", "Content creation", "Weekend leisure"].map((ctx, i) => (
                <div key={i} className="px-4 py-3 rounded-lg border border-white/[0.03] bg-white/[0.02] text-[13px] text-[#A0A0A0] flex items-center justify-center text-center">
                  {ctx}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 5: Event Intelligence */}
      <ChapterSection number="05" title="Event Intelligence">
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Recommendations are generated from relationships, not keywords.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole's AI does not match text strings; it reasons about the environment. When evaluating an event, the system calculates a multi-dimensional matrix of signals. It weighs your current location, weather conditions, projected crowd density, travel effort, intersecting community interests, and even your current availability.
          </p>
          
          <EventIntelligenceDropdowns />
        </div>
      </ChapterSection>

      {/* Chapter 6: Event Types */}
      <ChapterSection number="06" title="Event Types">
        <div className="flex flex-col gap-12 max-w-[1200px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[900px]">
            Every category requires a distinct discovery paradigm. Rheole tailors its understanding to why you seek these experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <GridCard title="Technology & Startup" desc="For founders seeking co-founders, investors tracking trends, or developers hunting for hackathons." />
            <GridCard title="Music & Culture" desc="For those looking to discover underground indie gigs, classical recitals, or massive outdoor festivals." />
            <GridCard title="Food & Nightlife" desc="For culinary explorers tracking secret pop-up dinners, weekend markets, or exclusive tasting menus." />
            <GridCard title="Wellness & Fitness" desc="For communities engaging in outdoor yoga, neighborhood marathons, or mindful meditation retreats." />
            <GridCard title="Family & Children" desc="For parents seeking educational workshops, safe community celebrations, and weekend interactive science fairs." />
            <GridCard title="Art & Photography" desc="For creatives wanting to capture golden-hour photo walks, gallery openings, and street art tours." />
            <GridCard title="Literature & Education" desc="For lifelong learners attending intimate book readings, poetry slams, and expert panel discussions." />
            <GridCard title="Volunteering & Local" desc="For civic-minded individuals participating in neighborhood cleanups, charity drives, and local town halls." />
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 7: From Event to Opportunity */}
      <ChapterSection number="07" title="From Event To Opportunity">
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Rheole maps relationships, not isolated destinations. One event connects to many experiences.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            An event is a catalyst. When you attend a Founder Meetup, the experience doesn't end when the presentation finishes. Rheole understands the gravity of the event and connects you to the nearby ecosystem: quiet cafés for post-meetup networking, co-working spaces for the next day, and communities of investors congregating in the vicinity.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] mt-6">
            <div className="text-[16px] text-[#F2F2F0] font-medium">Founder Meetup</div>
            <div className="text-[#4F6EF7] text-2xl rotate-90 md:rotate-0">→</div>
            <div className="text-[16px] text-[#A0A0A0]">Nearby Cafés</div>
            <div className="text-[#4F6EF7] text-2xl rotate-90 md:rotate-0">→</div>
            <div className="text-[16px] text-[#A0A0A0]">Co-working Spaces</div>
            <div className="text-[#4F6EF7] text-2xl rotate-90 md:rotate-0">→</div>
            <div className="text-[16px] text-[#F2F2F0] font-medium">Future Collaborations</div>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 8: Discovering the Unexpected */}
      <ChapterSection number="08" title="Discovering the Unexpected">
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Many memorable experiences are never searched for. We architect serendipity.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            You cannot search for an event you don't know exists. Walking past a live jazz performance, stumbling upon an unexpected street market, or encountering a community cycling ride—these are the moments that make city life enchanting. Rheole leverages ambient awareness to gently surface these hidden gems as you move through your day, ensuring you encounter the unexpected.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 9: Real Life Scenarios */}
      <ChapterSection number="09" title="Real Life Scenarios">
        <div className="flex flex-col gap-12 max-w-[1200px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[900px]">
            How contextual intelligence translates into perfect recommendations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScenarioCard intent="I'm new in Bengaluru." reason="Rheole highlights introductory cultural events, expat mixers, and safe neighborhood tours to help establish a social anchor." />
            <ScenarioCard intent="I'm travelling alone." reason="Surfaces high-engagement, welcoming environments like group photography walks or interactive workshops where solo attendees naturally mingle." />
            <ScenarioCard intent="I'm free for two hours." reason="Calculates exact travel times and event durations, suggesting a nearby art exhibition that fits perfectly within the strict temporal window." />
            <ScenarioCard intent="I'm looking for founders." reason="Analyzes professional community signals to guide you toward informal networking breakfasts and tech pitch nights happening in the vicinity." />
            <ScenarioCard intent="I want live music." reason="Bypasses static venue lists to find acoustic sets and underground gigs happening right now, matching your acoustic preferences." />
            <ScenarioCard intent="My children are bored." reason="Instantly filters for family-friendly weekend events, prioritizing those with interactive elements like science fairs or outdoor storytelling." />
            <ScenarioCard intent="I'm interested in AI." reason="Tracks deep-tech meetups, university guest lectures, and hacker spaces, connecting you with communities driving technological discourse." />
            <ScenarioCard intent="I want to volunteer." reason="Maps local civic initiatives, charity marathons, and neighborhood cleanups, aligning them with your available weekend hours." />
            <ScenarioCard intent="I'm visiting for one weekend." reason="Curates a highly dense, culturally significant itinerary of flagship city events and temporary markets that maximize your short stay." />
          </div>
        </div>
      </ChapterSection>

      {/* Comparison Section */}
      <ChapterSection number="10" title="The Future of Events" isLast={true}>
        <div className="flex flex-col gap-12 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            The future of event discovery is not searching. It is anticipation, awareness, and personal relevance.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            We are moving away from manual keyword searches and scrolling through endless lists. The future relies on ambient recommendations where events become a seamless part of an intelligent daily experience. Rheole understands your context and proactively brings the city to you.
          </p>

          <ComparisonBlock 
            leftTitle="Traditional Event Platforms"
            leftItems={[
              "Manual search and rigid keyword matching",
              "Fixed, unyielding categories",
              "Static, date-based calendars",
              "Generic recommendations for everyone",
              "Isolated points on a digital map"
            ]}
            rightTitle="Rheole Intelligence"
            rightItems={[
              "Context-aware ambient discovery",
              "Fluid categorizations based on intent",
              "Living, real-time spatial intelligence",
              "Personal timing and community signals",
              "Dynamic relationship and opportunity mapping"
            ]}
          />
        </div>
      </ChapterSection>
      
    </article>
  );
}
