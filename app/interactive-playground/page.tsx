import React from 'react';

export default function InteractivePlayground() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">

      {/* 1. EXPERIMENT */}
      <section className="relative pt-40 pb-32 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-7xl md:text-9xl font-light tracking-tighter mb-8 bg-gradient-to-br from-white via-neutral-200 to-neutral-600 bg-clip-text text-transparent">
          Explore.<br />Build.<br />Understand.
        </h1>
        <p className="text-2xl md:text-3xl text-neutral-400 font-light max-w-4xl leading-relaxed mb-16">
          The Interactive Playground allows anyone to experience Ambient Spatial Intelligence in real time through visual experimentation.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-neutral-500 font-medium">
          <div className="flex flex-col items-center">
            <span className="text-neutral-700 mb-2">Platform Version</span>
            <span className="text-white">v4.2.0-beta</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-neutral-700 mb-2">Latest Dataset</span>
            <span className="text-white">Global Realtime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-neutral-700 mb-2">Sandbox Status</span>
            <span className="text-green-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Active</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-neutral-700 mb-2">Active Experiments</span>
            <span className="text-white">12,482</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-neutral-700 mb-2">Featured Demo</span>
            <span className="text-white hover:underline cursor-pointer">Find the Perfect Lunch</span>
          </div>
        </div>
        <p className="mt-12 text-neutral-500 tracking-wide uppercase text-xs">No setup required.</p>
      </section>

      {/* 2. WHAT IS THE PLAYGROUND? */}
      <section className="py-32 px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-white">What is the Playground?</h2>
          <div className="space-y-8 text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            <p>
              The Playground is a safe environment. There is no production impact. Visual experimentation is the core of this space, where no coding is required to observe immediate results. It is the living laboratory for Ambient Spatial Intelligence, designed for instant feedback. 
            </p>
            <p>
              This is guided learning for Developers. Designers. Researchers. Students. Businesses. Everyone can explore. The abstract concepts of spatial intelligence are transformed into living demonstrations, reinforcing the philosophy that understanding grows through exploration, and people learn best when they experiment. Developers should experience intelligence before integrating it.
            </p>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE BLOCK */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-10 md:p-16 backdrop-blur-xl">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">Playground Tips</h3>
          <p className="text-xl text-neutral-300 font-light leading-relaxed">
            While exploring, notice how subtle changes in the environment ripple across the entire system. Ambient Spatial Intelligence is non-linear.
          </p>
        </div>
      </section>

      {/* 3. LIVE SANDBOX */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">Live Sandbox</h2>
        <p className="text-2xl text-neutral-400 font-light max-w-3xl mb-16 leading-relaxed">
          Simulate platform behavior instantly. Visualize reasoning. Never expose raw APIs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Search Places", desc: "Discover locations based on semantic meaning and context." },
            { title: "Generate Routes", desc: "Create dynamic paths that adapt to traffic and weather." },
            { title: "Nearby Events", desc: "Surface temporal occurrences happening right now." },
            { title: "Communities", desc: "Identify pockets of shared interest mapped geographically." },
            { title: "Businesses", desc: "Analyze commercial density and local economic context." },
            { title: "Traffic & Transit", desc: "Visualize real-time movement flows." },
            { title: "Context & Intent", desc: "Model how a user's current situation drastically alters recommendations." },
            { title: "Recommendations", desc: "Watch the AI synthesize dozens of signals." },
            { title: "Weather & Environment", desc: "Observe how atmospheric conditions reorganize spatial priorities." },
            { title: "Walking & Cycling", desc: "Simulate micro-mobility and active transit scenarios." },
            { title: "Friend Discovery", desc: "Understand privacy-preserving proximity alerts." }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 transition-colors duration-500 cursor-pointer">
              <h3 className="text-xl text-white mb-4 font-medium group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISUAL PLATFORM BUILDER */}
      <section className="py-32 px-8 bg-neutral-950 border-y border-neutral-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">Visual Platform Builder</h2>
          <p className="text-2xl text-neutral-400 font-light max-w-3xl mb-24 leading-relaxed">
            Assemble workflows visually. Connect modules by dragging relationships. Show how information flows. No code. Pure interaction.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-5xl mx-auto relative">
            <div className="absolute inset-0 top-1/2 left-0 w-full h-[1px] bg-neutral-800 -z-10 hidden md:block"></div>
            {[
              "User", "Authentication", "Intent", "Context", "Places", "Navigation", "Realtime", "Notifications", "AI", "Output"
            ].map((block, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 cursor-grab">
                  <div className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-blue-400"></div>
                </div>
                <span className="mt-4 text-xs font-medium tracking-wider uppercase text-neutral-500 group-hover:text-white transition-colors">{block}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCENARIO LAB */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">Scenario Lab</h2>
        <p className="text-2xl text-neutral-400 font-light max-w-3xl mb-16 leading-relaxed">
          Provide many ready-made simulations demonstrating multiple systems working together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Tourist in Bengaluru", desc: "A guided exploration through major landmarks, adjusted for language and dining preferences." },
            { name: "Student on Campus", desc: "Seamless integration of class schedules, library capacity, and campus walking paths." },
            { name: "Hospital Emergency", desc: "High-urgency routing overriding typical traffic patterns for immediate care access." },
            { name: "Restaurant Discovery", desc: "Dietary preferences, group size, and wait times influencing top recommendations." },
            { name: "Morning Commute", desc: "Predictive traffic alerts and alternative transit modes." },
            { name: "Weekend Exploration", desc: "Leisure intent prioritizing scenic paths and pop-up events." },
            { name: "Rain Disruption", desc: "Outdoor venues deprioritizing instantly in favor of covered transit and indoor spaces." },
            { name: "Traffic Diversion", desc: "Recalculating ETA and points of interest around major blockages." },
            { name: "Finding Investors", desc: "Proximity and professional network integrations." },
            { name: "Running Club", desc: "Fitness routing along low-traffic paths with synchronized group points." },
            { name: "Cycling Route", desc: "Optimizing exclusively for bike lanes, elevation changes, and safety metrics." },
            { name: "Music Festival", desc: "Offline-first caching and dense crowd routing in action." },
            { name: "Power Outage", desc: "Resilience routing to operational safe havens." },
            { name: "Public Transport Delay", desc: "Instant ride-share alternatives and walking paths across the day." }
          ].map((scenario, idx) => (
            <div key={idx} className="p-10 bg-neutral-950 border border-neutral-800 rounded-3xl hover:border-neutral-600 transition-all duration-300">
              <h3 className="text-2xl text-white mb-4 font-light">{scenario.name}</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-lg">{scenario.desc}</p>
              <button className="mt-8 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                Run Simulation <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTELLIGENCE VISUALISER */}
      <section className="py-40 px-8 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-white text-center">Intelligence Visualiser</h2>
        <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-4xl mb-24 leading-relaxed text-center">
          Every user interaction generates a transparent reasoning graph. Watch how the AI makes it understandable.
        </p>

        <div className="w-full max-w-3xl flex flex-col items-center space-y-4">
          {["User Intent", "Spatial Context", "Time", "Weather", "Preferences", "Nearby Opportunities", "Recommendation", "Explanation"].map((node, i) => (
            <React.Fragment key={i}>
              <div className="w-full md:w-2/3 bg-black border border-neutral-800 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500 transition-colors">
                <span className="text-lg text-neutral-300 font-light">{node}</span>
                <span className="w-4 h-4 rounded-full bg-neutral-800 group-hover:bg-blue-500 transition-colors"></span>
              </div>
              {i < 7 && (
                <div className="h-12 w-px bg-gradient-to-b from-neutral-800 to-transparent"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 7. DEVELOPER CHALLENGES */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">Developer Challenges</h2>
        <p className="text-2xl text-neutral-400 font-light max-w-3xl mb-16 leading-relaxed">
          Create learning missions with defined difficulty, time, platform concepts, and rewards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Build a Smart Campus", diff: "Medium", time: "45 min" },
            { title: "Create a Tourism Guide", diff: "Easy", time: "30 min" },
            { title: "Develop a Navigation App", diff: "Hard", time: "90 min" },
            { title: "Design a Hospital Finder", diff: "Medium", time: "60 min" },
            { title: "Optimise Delivery Routes", diff: "Hard", time: "120 min" },
            { title: "Create Local Discovery", diff: "Easy", time: "25 min" }
          ].map((challenge, idx) => (
            <div key={idx} className="p-8 border border-neutral-800 rounded-2xl bg-black flex flex-col h-full">
              <h3 className="text-xl text-white mb-4">{challenge.title}</h3>
              <div className="flex gap-4 text-xs font-medium uppercase tracking-widest text-neutral-500 mb-6">
                <span className="px-3 py-1 rounded-full border border-neutral-800">{challenge.diff}</span>
                <span className="px-3 py-1 rounded-full border border-neutral-800">{challenge.time}</span>
              </div>
              <ul className="text-neutral-400 text-sm space-y-2 mb-8 flex-grow">
                <li>• Learning goals defined</li>
                <li>• Platform concepts covered</li>
                <li>• Completion rewards available</li>
              </ul>
              <button className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-colors">Start Mission</button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. AI GUIDE */}
      <section className="py-32 px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-900 via-neutral-900 to-black border border-neutral-800 flex items-center justify-center relative">
              <div className="w-24 h-24 rounded-full bg-blue-500/20 animate-ping absolute"></div>
              <div className="w-16 h-16 rounded-full bg-blue-400 z-10"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">AI Guide</h2>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-6">
              A contextual assistant that teaches instead of merely answering. It explains Platform concepts, Architecture, SDKs, REST APIs, Realtime APIs, Authentication, Spatial Computing, Design decisions, and Best practices.
            </p>
          </div>
        </div>
      </section>

      {/* 9. EXPORT TO PROJECT */}
      <section className="py-32 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">Export to Project</h2>
        <p className="text-2xl text-neutral-400 font-light mb-16 leading-relaxed">
          Demonstrate a seamless transition from learning to development.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium tracking-widest uppercase text-neutral-500">
          <span className="text-white">Experiment</span>
          <span className="hidden md:block">→</span>
          <span className="text-neutral-400">Prototype</span>
          <span className="hidden md:block">→</span>
          <span className="text-neutral-500">Project</span>
          <span className="hidden md:block">→</span>
          <span className="text-neutral-600">SDK</span>
          <span className="hidden md:block">→</span>
          <span className="text-neutral-700">Production</span>
          <span className="hidden md:block">→</span>
          <span className="text-neutral-800">Monitoring</span>
          <span className="hidden md:block">→</span>
          <span className="text-neutral-900">Iteration</span>
        </div>
      </section>

      {/* 11 & 13. CONCEPTS AND DEMOS */}
      <section className="py-32 px-8 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-3xl font-light mb-12 text-white">Unique Rheole Concepts</h2>
            <div className="space-y-12">
              <div>
                <h4 className="text-xl text-white font-medium mb-3">Living Sandbox™</h4>
                <p className="text-neutral-500 font-light leading-relaxed">A continuously updated simulation environment reflecting the evolving capabilities of the Rheole Platform.</p>
              </div>
              <div>
                <h4 className="text-xl text-white font-medium mb-3">Intelligence Graph™</h4>
                <p className="text-neutral-500 font-light leading-relaxed">A visual representation of how multiple signals combine to produce recommendations.</p>
              </div>
              <div>
                <h4 className="text-xl text-white font-medium mb-3">Scenario Engine™</h4>
                <p className="text-neutral-500 font-light leading-relaxed">A collection of real-world situations demonstrating Ambient Spatial Intelligence in action.</p>
              </div>
              <div>
                <h4 className="text-xl text-white font-medium mb-3">Visual Builder™</h4>
                <p className="text-neutral-500 font-light leading-relaxed">A no-code environment for understanding how platform components interact.</p>
              </div>
              <div>
                <h4 className="text-xl text-white font-medium mb-3">Guided Exploration™</h4>
                <p className="text-neutral-500 font-light leading-relaxed">An adaptive learning experience recommending experiments based on interests.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-12 text-white">Featured Experiments</h2>
            <div className="space-y-8">
              <div className="p-8 border border-neutral-800 rounded-2xl bg-neutral-950 hover:bg-neutral-900 transition-colors">
                <h4 className="text-xl text-white font-medium mb-2">Find the Perfect Lunch</h4>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">Observe how location, time, dietary preferences, crowd levels and weather influence recommendations.</p>
              </div>
              <div className="p-8 border border-neutral-800 rounded-2xl bg-neutral-950 hover:bg-neutral-900 transition-colors">
                <h4 className="text-xl text-white font-medium mb-2">Navigate Rush Hour</h4>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">Compare route decisions as traffic conditions evolve.</p>
              </div>
              <div className="p-8 border border-neutral-800 rounded-2xl bg-neutral-950 hover:bg-neutral-900 transition-colors">
                <h4 className="text-xl text-white font-medium mb-2">Discover Your Community</h4>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">See how nearby groups, founders and events connect through shared interests and location.</p>
              </div>
              <div className="p-8 border border-neutral-800 rounded-2xl bg-neutral-950 hover:bg-neutral-900 transition-colors">
                <h4 className="text-xl text-white font-medium mb-2">Emergency Response</h4>
                <p className="text-neutral-500 font-light leading-relaxed text-sm">Watch how realtime updates alter navigation and resource recommendations.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 14. COMPARISON */}
      <section className="py-32 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 border border-neutral-800 rounded-3xl">
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-8 font-semibold">Traditional API Explorers</h3>
            <ul className="space-y-4 text-neutral-400 font-light text-lg">
              <li>• Endpoint testing</li>
              <li>• JSON responses</li>
              <li>• Technical focus</li>
              <li>• Code-first</li>
              <li>• Limited context</li>
              <li>• Individual services</li>
            </ul>
          </div>
          <div className="p-12 border border-neutral-700 bg-neutral-900 rounded-3xl">
            <h3 className="text-sm tracking-widest uppercase text-white mb-8 font-semibold">Rheole Interactive Playground</h3>
            <ul className="space-y-4 text-white font-light text-lg">
              <li>• Experience-first</li>
              <li>• Visual intelligence</li>
              <li>• Scenario-driven</li>
              <li>• Learning-focused</li>
              <li>• Architecture exploration</li>
              <li>• Platform-wide understanding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. CONTINUOUS DISCOVERY */}
      <section className="py-40 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-12 text-white">Continuous Discovery</h2>
        <div className="space-y-8 text-2xl text-neutral-400 font-light leading-relaxed">
          <p>Every experiment reveals another possibility. The Playground grows alongside the platform. As Ambient Spatial Intelligence evolves, so does the Playground.</p>
          <p className="text-white">Learning never stops.</p>
        </div>
        
        <p className="mt-32 text-xl font-light text-neutral-600 italic">
          &quot;This isn&apos;t an API playground. It&apos;s a living laboratory where I can experience, understand and prototype the future of Ambient Spatial Intelligence before writing a single line of code.&quot;
        </p>
      </section>

    </div>
  );
}
