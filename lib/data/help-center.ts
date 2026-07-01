export const gettingStartedData = [
  { title: "Creating an account", desc: "Set up your secure Rheole ID and link your primary devices.", time: "2 min", diff: "Easy", outcome: "Ready to explore" },
  { title: "Personalising preferences", desc: "Define your mobility needs, dietary requirements, and default transit modes.", time: "5 min", diff: "Easy", outcome: "Personalised UI" },
  { title: "Exploring your neighbourhood", desc: "Use the Discover tab to map out local coffee shops, parks, and essential services.", time: "10 min", diff: "Medium", outcome: "Familiarity with area" },
  { title: "Saving favourite places", desc: "Bookmark locations into custom lists for quick offline access and routing.", time: "3 min", diff: "Easy", outcome: "Curated map" },
  { title: "Using navigation", desc: "Launch your first Smart Route, accounting for live traffic and weather.", time: "5 min", diff: "Medium", outcome: "Successful trip" },
  { title: "Understanding recommendations", desc: "Learn how Rheole suggests places based on time of day and your intent.", time: "5 min", diff: "Medium", outcome: "Better discoveries" },
  { title: "Managing notifications", desc: "Control when and how Rheole alerts you about transit delays or nearby friends.", time: "3 min", diff: "Easy", outcome: "Focused attention" },
  { title: "Privacy controls", desc: "Audit your location permissions and understand how your data is abstracted.", time: "5 min", diff: "Easy", outcome: "Absolute security" }
];

export const learningPathsData = [
  { section: "Discover", desc: "Master the art of finding new places, events, and businesses.", guides: ["Places", "Events", "Businesses", "New Exploration"] },
  { section: "Navigate", desc: "Learn to move through your city efficiently and safely.", guides: ["Smart Routing", "Traffic", "Transit", "Walking & Cycling"] },
  { section: "Connect", desc: "Find your people. Join local groups and locate friends.", guides: ["Communities", "Friends", "Founders", "Nearby People"] },
  { section: "Understand", desc: "Decode the intelligence behind Rheole's contextual awareness.", guides: ["Intent", "Context", "Time & Weather", "Interests", "Routine"] },
  { section: "Account & Settings", desc: "Take control of your data, preferences, and permissions.", guides: ["Profile", "Privacy", "Security", "Notifications"] },
  { section: "Developer Platform", desc: "An overview of building spatial apps on Rheole.", guides: ["API Intro", "SDK Basics", "Authentication"] }
];

export const featureGuidesData = [
  { name: "Places", what: "A dynamic directory of physical locations.", why: "To provide contextual awareness of your surroundings.", works: "Aggregates real-time data, reviews, and accessibility info.", when: "When you need to find a specific type of venue.", practice: "Filter by 'Currently Open' for immediate needs.", related: "Events, Smart Routing" },
  { name: "Smart Routing", what: "Context-aware navigation.", why: "Standard maps ignore weather, safety, and personal preferences.", works: "Calculates routes based on live traffic, elevation, and transit schedules.", when: "When traveling to an unfamiliar destination.", practice: "Pin your route before entering the subway to retain offline guidance.", related: "Transit, Walking & Cycling" },
  { name: "Communities", what: "Local, verified groups of people sharing interests.", why: "To foster real-world connections over digital isolation.", works: "Suggests groups based on your geographic routine and saved interests.", when: "When you want to meet people or join local activities.", practice: "Verify your neighborhood to unlock hyper-local communities.", related: "Events, Friends" },
  { name: "Context", what: "The environmental intelligence engine.", why: "Because a coffee shop recommendation at 11 PM is useless.", works: "Analyzes time, weather, operating hours, and your historical routine.", when: "Automatically applied to all searches and recommendations.", practice: "Provide feedback on recommendations to improve accuracy.", related: "Intent, Routine" }
];

export const popularTasksData = [
  { task: "Find a place", steps: ["Open the Discover tab", "Type your intent (e.g., 'quiet coffee')", "Review the contextual recommendations", "Tap for details or routing"] },
  { task: "Plan a route", steps: ["Search your destination", "Select 'Navigate'", "Choose your preferred transit mode", "Review elevation or delay warnings", "Start route"] },
  { task: "Join a community", steps: ["Navigate to the Connect tab", "Browse 'Suggested Near You'", "Tap a community to view guidelines", "Request to join"] },
  { task: "Manage notifications", steps: ["Open Account Settings", "Tap 'Notifications'", "Toggle categories (e.g., Transit delays, Friend alerts)", "Set quiet hours"] }
];

export const troubleshootingData = [
  { issue: "Location isn't updating", solution: "Ensure Rheole has 'Always On' location permissions in your OS settings. If using battery saver mode, background updates may be restricted. Try toggling Airplane mode to reset your GPS radio." },
  { issue: "Recommendations feel incorrect", solution: "Rheole learns from your routines. If you recently moved or changed habits, it takes a few days to adjust. You can expedite this by manually clearing your 'Routine Cache' in Privacy Settings." },
  { issue: "Search returns no results", solution: "Check your active filters. If you have 'Open Now' and 'Wheelchair Accessible' selected at 3 AM, results will be naturally limited. Try expanding your search radius." },
  { issue: "Navigation issues", solution: "If the map compass is spinning, perform a Figure-8 motion with your phone to recalibrate the magnetometer. Ensure you have downloaded offline maps for areas with poor cellular reception." }
];

export const videoLearningData = [
  { title: "Platform Tour", outcome: "A high-level overview of the Discover, Navigate, and Connect tabs.", duration: "3:45" },
  { title: "Navigation Masterclass", outcome: "Deep dive into multi-modal routing, offline maps, and elevation profiles.", duration: "8:20" },
  { title: "Privacy Overview", outcome: "Visual guide to managing permissions, abstractions, and data deletion.", duration: "5:15" },
  { title: "Understanding Context", outcome: "Learn how Rheole uses time, weather, and intent to curate recommendations.", duration: "6:30" }
];

export const uniqueConceptsData = [
  { title: "Guided Discovery™", desc: "Help content adapts to where you are in your journey. If you've never used routing, we suggest beginner guides; if you're a power user, we suggest advanced API overviews." },
  { title: "Contextual Help™", desc: "Relevant guidance appears exactly when you need it. If you struggle to connect to a community, a micro-guide will appear offering troubleshooting steps." },
  { title: "Living Knowledge™", desc: "Articles continuously improve as the platform evolves. Every update to the app triggers a corresponding update to our learning materials." },
  { title: "Smart Learning Paths™", desc: "Progressive guides that help you master the platform feature by feature, moving from basic searches to complex, multi-modal urban navigation." },
  { title: "Help Intelligence™", desc: "Our search engine understands intent. Searching 'make it stop buzzing' will intelligently route you to Notification Settings." }
];

export const comparisonData = {
  traditional: [
    "FAQ-heavy walls of text.",
    "Static, outdated articles.",
    "Difficult, nested navigation.",
    "Heavily search dependent.",
    "Reactive to user confusion.",
    "Generic, one-size-fits-all advice."
  ],
  rheole: [
    "Learning-first philosophy.",
    "Interactive, visual tutorials.",
    "Guided, progressive journeys.",
    "Intent-aware semantic search.",
    "Proactive feature education.",
    "Continuously evolving curriculum."
  ]
};

export const faqsData = [
  { q: "How does Rheole know what to recommend?", a: "We use Contextual Intelligence. The platform analyzes the time of day, current weather, venue operating hours, and your anonymized historical routine to provide recommendations that actually make sense for the moment." },
  { q: "Can I disable location tracking?", a: "Yes. You can use Rheole by manually entering locations for searches and routing. However, ambient features like live transit updates and nearby community alerts require background location access." },
  { q: "How are communities discovered?", a: "Communities are geographically anchored. You discover them by being in or verifying your residency in specific neighborhoods, ensuring groups remain hyper-local and relevant." },
  { q: "What makes Smart Routing different?", a: "Smart Routing doesn't just calculate distance. It factors in live transit delays, elevation changes for cyclists, pedestrian safety data, and current weather conditions to find the optimal path." },
  { q: "How does Context work?", a: "Context is the layer that sits between your search and the map. If you search 'coffee' at 8 AM, Context prioritizes fast espresso bars. At 8 PM, it prioritizes cozy cafes open late." },
  { q: "Can I customise recommendations?", a: "Absolutely. In your Account Settings, you can define strict dietary requirements, accessibility needs, and pricing preferences that will universally filter all your recommendations." },
  { q: "How do I report an incorrect map location?", a: "Tap the location pin, scroll to the bottom of the venue card, and select 'Suggest an Edit'. Our moderation team reviews these within 24 hours." },
  { q: "What happens if I lose internet connection?", a: "If you have 'Offline Regions' enabled in your settings, your active routes, saved places, and neighborhood maps will remain fully functional without cellular data." },
  { q: "How do I change my home or work address?", a: "Navigate to Account > Preferences > Saved Locations. Here you can update, add, or remove your primary anchor points." },
  { q: "Are my saved places public?", a: "No. By default, all saved places and custom lists are entirely private. You must explicitly generate a shareable link to show them to friends." },
  { q: "How do I turn off specific notifications?", a: "Go to Settings > Notifications. You have granular control—you can disable 'Community Updates' while keeping 'Transit Delays' active." },
  { q: "Why is a route marked as 'Potentially Unsafe'?", a: "Rheole integrates with local municipal data. A route may be flagged if there is active construction, severe weather flooding, or inadequate street lighting reported in the area." },
  { q: "Can I use Rheole in a new city?", a: "Yes. When you travel, Rheole automatically detects the new region and begins caching local transit schedules and highly-rated venues to ensure a seamless experience." },
  { q: "How do I delete my account?", a: "Go to Account > Privacy & Security > Danger Zone. Selecting 'Delete Account' initiates a cryptographic scrub of your data, completed within 30 days." },
  { q: "What is the 'Routine Cache'?", a: "It is an encrypted, on-device ledger of your frequent geographic movements. It helps Rheole predict when you might need transit times to work or home." },
  { q: "Why did my community request get denied?", a: "Community moderators set their own entrance criteria. Often, this requires a verified profile or a brief introduction message. Check the community guidelines." },
  { q: "How do I switch to dark mode?", a: "Go to Settings > Theme. You can select Light, Dark, or System, which automatically matches your device's current OS setting." },
  { q: "Can I share a live route with a friend?", a: "Yes. Once navigation has started, swipe up on the bottom card and tap 'Share ETA'. This generates a secure, temporary tracking link." },
  { q: "How do I change the language?", a: "Language preferences are managed in Settings > Language & Region. Changing this updates both the UI and the spoken navigation instructions." },
  { q: "What does 'Anonymized Telemetry' mean?", a: "It means we collect diagnostic data (like app crashes or slow load times) without attaching your name, email, or exact location to the report." },
  { q: "How do I contact a business directly?", a: "If a business has provided contact details, a 'Call' or 'Message' button will appear directly beneath their opening hours on their venue card." },
  { q: "Why isn't my route showing public transit?", a: "Ensure 'Transit' is toggled on in your mobility preferences. If it is, the local transit authority may be experiencing a complete blackout or we may not support that specific region yet." },
  { q: "Can I review a place anonymously?", a: "To prevent spam and manipulation, all reviews require a verified Rheole account. However, you can choose to display only your first name in Privacy Settings." },
  { q: "How do I view my offline maps?", a: "Go to Account > Offline Regions. Here you can see downloaded areas, update them over Wi-Fi, or delete them to free up device storage." },
  { q: "Where do I report a bug with the app?", a: "In the Help Center, scroll to 'Contact Support' and select 'Report a Bug'. Including a screenshot and your device model greatly accelerates our fix." }
];
