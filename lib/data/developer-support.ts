export const supportPhilosophyData = [
  { title: "Teach before solving.", desc: "We provide detailed context and examples so you understand the underlying system, rather than just handing you a temporary fix." },
  { title: "Guide before escalating.", desc: "Interactive flows and contextual warnings help you discover the right solution immediately, without waiting for a support agent." },
  { title: "Prevent before reacting.", desc: "We analyze aggregate support trends to proactively update documentation and improve SDK architecture before problems spread." },
  { title: "Transparency over uncertainty.", desc: "Whether it's a minor API deprecation or a regional outage, we communicate openly with real-time operational status." },
  { title: "Human expertise.", desc: "When you escalate a complex issue, you connect directly with engineers who understand spatial intelligence, not outsourced script-readers." },
  { title: "Continuous learning.", desc: "Every solved issue is treated as a documentation bug. We continuously evolve our knowledge base based on real developer friction." },
  { title: "Developer empowerment.", desc: "Our ultimate goal is to make you autonomous. We give you the tools, telemetry, and knowledge to build with absolute confidence." }
];

export const supportPathwaysData = [
  { name: "Documentation", desc: "Comprehensive guides and architectural deep dives.", idealFor: "Learning core concepts and implementation patterns." },
  { name: "Interactive Playground", desc: "Browser-based sandbox for testing API responses.", idealFor: "Validating endpoints and experimenting with real data." },
  { name: "API References", desc: "The definitive catalogue of all REST endpoints.", idealFor: "Looking up exact parameters, headers, and schemas." },
  { name: "Examples", desc: "Open-source starter kits and reference applications.", idealFor: "Accelerating your initial build and learning best practices." },
  { name: "AI Assistant", desc: "Context-aware help trained on our entire documentation.", idealFor: "Quick syntax lookups and discovering relevant guides." },
  { name: "Community", desc: "Forums and open discussions with other developers.", idealFor: "Discussing architecture and sharing custom solutions." },
  { name: "Developer Support", desc: "Direct ticket escalation to our engineering team.", idealFor: "Account issues, billing, and complex API troubleshooting." },
  { name: "Enterprise Support", desc: "Dedicated Technical Account Management.", idealFor: "SLA-backed responses and large-scale migration planning." },
  { name: "Status Page", desc: "Live telemetry of all Rheole systems.", idealFor: "Checking if a timeout is on your end or ours." },
  { name: "Bug Reports", desc: "Direct pipeline to our core engineering team.", idealFor: "Reporting reproducible issues in the SDKs or API." },
  { name: "Feature Requests", desc: "Public roadmap input and voting.", idealFor: "Suggesting new spatial capabilities or SDK languages." },
  { name: "Architecture Reviews", desc: "1-on-1 sessions for Enterprise partners.", idealFor: "Validating massive scale deployments before production." }
];

export const supportChannelsData = [
  { name: "Developer Portal", time: "Instant", useCase: "Self-service account management, key rotation, and usage analytics." },
  { name: "Email Support", time: "< 24 Hours", useCase: "General technical inquiries, billing questions, and account recovery." },
  { name: "Discussion Forums", time: "Community-driven", useCase: "Open-ended architectural questions and sharing implementation ideas." },
  { name: "Developer Community", time: "Community-driven", useCase: "Networking, showcasing projects, and finding collaborators." },
  { name: "Knowledge Base", time: "Instant", useCase: "Searching for specific error codes or known migration issues." },
  { name: "Video Tutorials", time: "On-demand", useCase: "Visual, step-by-step walkthroughs of complex spatial implementations." },
  { name: "Office Hours", time: "Bi-weekly", useCase: "Live Q&A with Rheole Developer Advocates and Product Managers." },
  { name: "Webinars", time: "Monthly", useCase: "Deep dives into new releases, major SDK updates, and spatial theory." }
];

export const technicalAssistanceData = [
  { title: "Integration guidance", desc: "Step-by-step support for embedding Rheole SDKs into complex, legacy codebases." },
  { title: "Authentication issues", desc: "Debugging OAuth flows, JWT validation, and secure developer key management." },
  { title: "API troubleshooting", desc: "Resolving malformed requests, rate limit blocks, and unexpected payload structures." },
  { title: "Realtime debugging", desc: "Diagnosing WebSocket connection drops and latency spikes in live environments." },
  { title: "Performance optimisation", desc: "Analyzing your request patterns to reduce latency and improve battery life on mobile." },
  { title: "Security guidance", desc: "Ensuring your implementation aligns with local privacy laws and our strict Privacy Architecture." },
  { title: "Architecture discussions", desc: "Evaluating how to structure your database to best sync with Rheole's spatial graphs." },
  { title: "Deployment advice", desc: "Best practices for rolling out spatial intelligence updates to millions of end-users." },
  { title: "Developer onboarding", desc: "Getting new team members up to speed on ambient AI concepts and Rheole tooling." }
];

export const uniqueConceptsData = [
  { title: "Developer Success™", desc: "A philosophy focused on helping developers succeed and build exceptional applications, rather than merely resolving isolated tickets." },
  { title: "Guided Resolution™", desc: "Support journeys that intelligently recommend relevant documentation, examples, and best practices before you ever need to escalate a ticket." },
  { title: "Living Knowledge Base™", desc: "Every resolved issue contributes to the platform. We continuously update guides, examples, and documentation based on real developer friction." },
  { title: "Architecture Clinics™", desc: "Expert, 1-on-1 sessions that help enterprise developers design scalable, secure, and maintainable applications using spatial intelligence." },
  { title: "Support Intelligence™", desc: "We use machine learning to identify patterns from common developer questions, which directly informs our SDK design and platform roadmap." }
];

export const bestPracticesData = [
  { title: "How to report issues", desc: "Provide environment details, SDK versions, and exact timestamps. The more context you provide, the faster we can route the issue." },
  { title: "Creating reproducible examples", desc: "Isolate the bug. Provide a minimal code snippet or a CodeSandbox link that reliably triggers the error without your proprietary logic." },
  { title: "Choosing the right channel", desc: "Use Forums for 'How do I do X?' and Email Support for 'API Endpoint Y is returning 500s'." },
  { title: "Using logs effectively", desc: "Always include the 'x-rheole-request-id' header from the API response when reporting an issue. It allows us to trace the exact request in our systems." },
  { title: "Preparing architecture questions", desc: "Outline your expected scale (Requests Per Second), target platforms (iOS/Web), and strict latency requirements before booking an Architecture Clinic." },
  { title: "Following migration guides", desc: "Never skip versions without reading the changelog. We provide explicit migration paths for every breaking change." },
  { title: "Monitoring platform status", desc: "Subscribe to the Status Page RSS feed or integrate our webhooks into your Slack to get instant notifications of degraded performance." },
  { title: "Security reporting", desc: "Use our dedicated security email (security@rheole.com) for responsible disclosure. Do not post vulnerabilities in public community forums." },
  { title: "Performance troubleshooting", desc: "Before escalating latency issues, verify your geographic proximity to our edge nodes and ensure you are reusing HTTP connections." }
];

export const comparisonData = {
  traditional: [
    "Ticket-first resolution.",
    "Reactive problem solving.",
    "Generic support staff.",
    "Isolated, static documentation.",
    "Limited operational transparency.",
    "One-size-fits-all generic responses."
  ],
  rheole: [
    "Success-first developer journey.",
    "Proactive architectural guidance.",
    "Learning-driven expert interactions.",
    "Deeply connected, living resources.",
    "Transparent, real-time status telemetry.",
    "Personalised, context-aware guidance."
  ]
};

export const faqsData = [
  { q: "Where should I ask technical questions?", a: "For general implementation advice, our Developer Forums are best. For account-specific or critical API failures, use the Developer Support ticket system in your dashboard." },
  { q: "How quickly does support respond?", a: "Email support typically responds within 24 hours. Enterprise partners with dedicated SLAs receive prioritized routing." },
  { q: "When should I contact enterprise support?", a: "Enterprise support is designed for large-scale deployments, custom SLA requirements, complex legal compliance reviews, and dedicated Technical Account Management." },
  { q: "How do I report a bug?", a: "You can submit bug reports directly through your Developer Portal or via our public GitHub repositories if the bug is related to an open-source SDK." },
  { q: "How do I request a feature?", a: "Feature requests can be submitted via the Community Forums under the 'Feedback' category, where other developers can upvote your idea." },
  { q: "How do I report a security issue?", a: "Please practice responsible disclosure by emailing security@rheole.com. Do not post potential vulnerabilities in public channels." },
  { q: "How do I follow platform incidents?", a: "You can view real-time telemetry at our Status Page and subscribe via Email, SMS, or Slack Webhook for instant incident alerts." },
  { q: "What information should I include in a ticket?", a: "Always include the exact API endpoint, the HTTP status code, a snippet of the request payload, and most importantly, the 'x-rheole-request-id' response header." },
  { q: "Can someone review my application architecture?", a: "Yes. Enterprise partners have access to Architecture Clinics. For independent developers, we encourage posting architectural drafts in the Community Forums." },
  { q: "Is the AI Assistant trained on my code?", a: "No. The AI Assistant is trained exclusively on Rheole's public documentation, SDK source code, and knowledge base. It does not ingest your proprietary queries for training." },
  { q: "Do you offer live chat support?", a: "Live chat is currently available exclusively for Enterprise partners during critical deployment windows." },
  { q: "Where can I find older versions of the SDK?", a: "All historical versions of our SDKs are maintained on npm, Maven Central, and CocoaPods. You can find version-specific documentation in the Developer Portal archive." },
  { q: "How do I appeal an API rate limit block?", a: "If your account was blocked due to an unexpected spike, contact Developer Support with an explanation of the traffic surge and your requested limit increase." },
  { q: "Are Office Hours recorded?", a: "Yes. All bi-weekly Office Hours are recorded and uploaded to our Video Tutorials library within 48 hours of the broadcast." },
  { q: "Can I get help with a third-party integration?", a: "We provide best-effort guidance for integrating Rheole with popular frameworks (like Next.js or React Native). For obscure or proprietary frameworks, we recommend the Community Forums." },
  { q: "What is a 'Living Knowledge Base'?", a: "It means our documentation is never 'finished'. Every time a developer asks a novel question that isn't covered in the docs, we update the docs to include that context for the next person." },
  { q: "How do I recover a lost Developer Key?", a: "For security reasons, Developer Keys cannot be recovered. If you lose a key, you must immediately revoke it in the Developer Portal and generate a new one." },
  { q: "Do you provide hands-on coding assistance?", a: "We provide detailed examples and integration guidance, but we do not write custom application logic for your specific business requirements." },
  { q: "How are breaking changes communicated?", a: "Breaking changes are announced via email to all active developers 90 days in advance, accompanied by a detailed Migration Guide in the Knowledge Base." },
  { q: "Is the community actively moderated?", a: "Yes. Our Developer Advocates actively moderate the forums to ensure discussions remain productive, respectful, and technically accurate." }
];
