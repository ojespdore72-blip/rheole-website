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

