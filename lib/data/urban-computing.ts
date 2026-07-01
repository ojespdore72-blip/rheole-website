export const urbanLayersData = [
  {
    title: "Mobility Layer",
    description: "The circulatory system of the city. This layer maps how vehicles, public transport, bicycles, and pedestrians flow through urban arteries. It matters because efficient mobility dictates access to opportunity. It interacts deeply with the Time and Weather layers, as rain or rush hour instantly alters its state."
  },
  {
    title: "Neighbourhood Layer",
    description: "The distinct cultural and physical identity of a local area. It represents the 'vibe'—whether a street is a quiet residential zone or a bustling nightlife district. It matters because treating all streets identically fails to capture local nuance. It interacts with the Business and Community layers to form local micro-economies."
  },
  {
    title: "Business Layer",
    description: "The commercial pulse. This represents not just where businesses are, but their operational rhythms, busy hours, and local relevance. It matters because commerce drives urban survival. It interacts directly with the Mobility layer, as a new tech park instantly shifts traffic patterns."
  },
  {
    title: "Community Layer",
    description: "The social fabric. This maps where local groups gather, public events happen, and civic life occurs. It matters because cities without communities are just concrete. It interacts with the Public Spaces layer to understand how plazas and parks are utilized."
  },
  {
    title: "Cultural Layer",
    description: "The historical and artistic identity of the city. This includes street art, heritage sites, local festivals, and creative districts. It matters because it provides the city its soul and memory. It interacts with the Time layer, blooming during specific seasonal events."
  },
  {
    title: "Environmental Layer",
    description: "The physical reality of weather, air quality, noise, and topology. It matters because humans are highly sensitive to their physical surroundings. It interacts with everything; a sudden downpour can paralyse the Mobility layer and empty the Public Spaces layer in minutes."
  },
  {
    title: "Transport Layer",
    description: "The formal infrastructure of metro lines, bus routes, and train networks. It matters because it is the backbone of mass movement. It interacts tightly with the Accessibility layer, dictating who can easily traverse the city."
  },
  {
    title: "Accessibility Layer",
    description: "The inclusive infrastructure of the city—ramps, elevators, paved paths, and tactile paving. It matters because a city must be legible and navigable for all its citizens, regardless of physical ability. It interacts with the Mobility and Transport layers."
  },
  {
    title: "Education Layer",
    description: "The network of schools, universities, libraries, and research hubs. It matters because these spaces generate unique temporal rhythms (e.g., the 8 AM school run, the late-night library crowd). It interacts heavily with the Innovation and Neighbourhood layers."
  },
  {
    title: "Healthcare Layer",
    description: "The critical infrastructure of hospitals, clinics, and emergency services. It matters because rapid access is literally a matter of life and death. It must interact flawlessly with the Mobility layer to ensure emergency routing overrides general traffic."
  },
  {
    title: "Public Spaces Layer",
    description: "The democratic zones: parks, plazas, sidewalks, and town squares. It matters because these are the only spaces where all layers of the city freely mix. It interacts with the Community and Cultural layers to host the city's public life."
  },
  {
    title: "Innovation Layer",
    description: "The concentration of startups, tech parks, incubators, and creative studios. It matters because it represents the future economic engine of the city. It interacts with the Business and Education layers, forming dense 'clusters' of opportunity."
  },
  {
    title: "Safety Layer",
    description: "The contextual perception and reality of physical security. It matters because humans will not explore where they do not feel safe. It interacts with the Time and Environmental layers (e.g., a poorly lit street at 2 AM)."
  },
  {
    title: "Time Layer",
    description: "The universal modifier. Time is not a static dimension; it fundamentally changes the nature of every other layer. A street at 9 AM on a Tuesday is an entirely different spatial reality than that same street at 10 PM on a Friday."
  }
];

export const cityLabData = [
  {
    title: "Understanding Neighbourhood Identity",
    description: "How can we mathematically model the 'character' of a district—its mixture of heritage, commerce, and community—without erasing its cultural nuance?"
  },
  {
    title: "Urban Accessibility",
    description: "Researching how to dynamically map temporary obstacles (like construction or broken elevators) to ensure routing algorithms serve differently-abled citizens accurately."
  },
  {
    title: "Community Resilience",
    description: "Investigating how specific neighbourhoods react and recover from sudden shocks, such as extreme weather events or transit strikes, to better plan emergency infrastructure."
  },
  {
    title: "Mobility Efficiency",
    description: "Moving beyond 'fastest route' to study 'smoothest route'—how can we route traffic to minimize overall cognitive load and environmental pollution?"
  },
  {
    title: "Business Discovery",
    description: "Exploring algorithms that prioritize local, physical engagement and community relevance over massive digital marketing budgets, democratizing local commerce."
  },
  {
    title: "Public Space Utilisation",
    description: "Using aggregated movement data to understand why some parks are heavily used while others remain empty, providing feedback loops for urban designers."
  },
  {
    title: "Cultural Activity",
    description: "Mapping the latent, temporal cultural events that define a city's artistic pulse, ensuring they remain visible to those who seek them."
  },
  {
    title: "Environmental Awareness",
    description: "Studying how micro-climates (shade, noise, air quality) influence the decision to walk or cycle, aiming to build 'Comfort Routes' rather than just short routes."
  },
  {
    title: "Digital Wellbeing",
    description: "Investigating how dense, notification-heavy urban environments contribute to cognitive overload, and how ambient intelligence can reduce this stress."
  },
  {
    title: "Urban Curiosity",
    description: "Researching how technology can safely encourage residents to step outside their routine paths and explore diverse, unfamiliar parts of their own city."
  }
];

export const scenariosData = [
  {
    title: "A Tourist Exploring Bengaluru",
    description: "Instead of being funneled to the top 5 overcrowded attractions, Rheole analyzes the tourist's implicit interest in architecture and guides them through the quiet, heritage-rich streets of Basavanagudi, safely navigating them around current road construction."
  },
  {
    title: "A Student Arriving on Campus",
    description: "The student feels lost on their first day. Rheole's ambient layer highlights the specific cafe where their study group has naturally congregated, turning an intimidating campus into a welcoming network."
  },
  {
    title: "A Founder Attending a Startup Meetup",
    description: "The founder is navigating the dense labyrinth of Koramangala. Rheole understands the context of the meetup and routes them to the exact alleyway entrance, bypassing the heavily congested main road."
  },
  {
    title: "A Family Searching for Weekend Activities",
    description: "It's a Sunday afternoon. Instead of generic suggestions, Rheole understands the family's spatial rhythm and suggests a local park that currently has low crowd density, high shade, and a pop-up children's book fair."
  },
  {
    title: "A Commuter Avoiding Congestion",
    description: "During a sudden downpour, standard maps show a gridlock. Rheole understands that a specific underpass floods historically during rain and preemptively routes the commuter to a slightly longer, but much safer, elevated path."
  },
  {
    title: "A Cyclist Choosing Safer Routes",
    description: "The cyclist isn't looking for speed; they are looking for safety. Rheole generates a route that prioritizes dedicated cycle lanes, avoids heavy freight traffic corridors, and minimizes exposure to poor air quality."
  },
  {
    title: "A Visitor Discovering Local Cafés",
    description: "Instead of directing the visitor to a global coffee chain with high SEO, Rheole highlights a small, locally-loved roastery nearby that is currently experiencing a vibrant, but not overwhelming, morning rush."
  },
  {
    title: "A Resident During Heavy Rainfall",
    description: "As the monsoon hits, the resident needs to get home. Rheole's environmental layer instantly identifies which metro stations are becoming dangerously overcrowded and suggests taking an alternative bus route before the chaos peaks."
  },
  {
    title: "An Entrepreneur Exploring New Districts",
    description: "Looking for an office space, the entrepreneur uses Rheole to understand the 'vibe' of Indiranagar vs. HSR Layout, comparing the aggregated foot traffic of tech workers and the availability of collaborative spaces during weekdays."
  },
  {
    title: "A Citizen Attending a Cultural Festival",
    description: "During the Kadalekai Parishe (Groundnut Fair), the streets are physically transformed. Rheole abandons standard vehicular routing, switching to a pedestrian-first mode that guides the citizen through the safest, most vibrant parts of the festival."
  }
];

export const openQuestionsData = [
  "How can cities become easier to understand without reducing them to sterile data dashboards?",
  "Can neighbourhood identity be represented digitally without causing harmful algorithmic gentrification?",
  "Can AI encourage local exploration and curiosity, or does it inherently reinforce familiar habits?",
  "How can mobility improve mental wellbeing, rather than just physical efficiency?",
  "How do weather and culture shape movement, and how can digital systems anticipate these shifts?",
  "Can urban intelligence remain strictly privacy-preserving while still offering deep, hyper-local context?",
  "Can cities become more inclusive by dynamically mapping accessibility constraints in real-time?",
  "Can local businesses become easier to discover without requiring massive digital marketing budgets?",
  "How do cities evolve during festivals, and how can infrastructure adapt to temporary chaos?",
  "How can technology reduce cognitive overload in dense urban environments rather than adding to the noise?"
];

export const faqsData = [
  { q: "Does Rheole track individual people?", a: "No. Our philosophy is built on absolute privacy. We study the aggregated 'pulse' of the city—how crowds move, how traffic flows, how weather changes—not the specific trajectory of any single individual. We use advanced edge-processing and differential privacy to ensure individual anonymity." },
  { q: "What is a 'Living City'?", a: "A living city is a conceptual framework that views a city as a biological organism rather than a mechanical grid. It acknowledges that a city is constantly evolving, reacting to stimuli (like rain or festivals), and changing its character based on the time of day." },
  { q: "Why focus on Bengaluru?", a: "Bengaluru is one of the most dynamic, rapidly evolving, and spatially complex cities in the world. It provides an incredibly rich testing ground for Urban Computing, featuring extreme traffic density, diverse micro-cultures, and rapid infrastructure changes." },
  { q: "How is this different from 'Smart City' initiatives?", a: "Traditional Smart City initiatives often focus on operational efficiency for governments (e.g., optimizing traffic lights via surveillance). Rheole's Urban Computing focuses on human understanding—providing citizens with the context they need to navigate their lives, without the surveillance." },
  { q: "What data does Rheole actually use?", a: "We synthesize public information (transit schedules, event registries), environmental sensors (weather, air quality), and aggregated, heavily anonymized mobility patterns. We do not use personal identifiable information (PII)." },
  { q: "How do you handle unpredictable events?", a: "Unpredictability is exactly why static maps fail. Our 'Environmental Layer' and 'Mobility Layer' are designed to detect sudden anomalies (like a flooded street) in real-time through aggregate movement shifts, allowing the system to react instantly." },
  { q: "Why is 'Neighbourhood Identity' important?", a: "Because treating all areas of a city equally leads to terrible routing and recommendations. A residential street requires a different digital approach than a commercial high street. Understanding identity preserves local culture." },
  { q: "Can Urban Computing help small businesses?", a: "Yes. By focusing on physical reality (foot traffic, local relevance) rather than digital reality (SEO, paid reviews), we can surface high-quality, local businesses that are often buried by global search algorithms." },
  { q: "What is the 'Urban Pulse'?", a: "It is our proprietary metric for measuring the 'liveliness' of a specific area at a specific time. It combines factors like foot traffic density, noise levels, and the concentration of open businesses to determine the area's current atmosphere." },
  { q: "How does Urban Computing improve accessibility?", a: "By moving away from static, often outdated accessibility data. We research how to use aggregated movement patterns to infer temporary obstacles (like broken elevators or construction), providing real-time, dynamic accessibility routing." },
  { q: "Does this research dictate how people should live?", a: "Absolutely not. The goal is to provide deep context so people can make their own informed decisions. We aim to augment human agency, not restrict it." },
  { q: "How do you prevent algorithmic gentrification?", a: "This is a core research question. We are extremely careful to ensure our 'discovery' algorithms do not artificially funnel wealth to specific areas while neglecting others. We prioritize diverse, equitable spatial representation." },
  { q: "What is the 'City Memory'?", a: "It is our framework for understanding how a city changes over long time horizons. It allows the system to know that a specific park floods every monsoon, or that a specific street becomes a vibrant market every Diwali." },
  { q: "How does weather affect your models?", a: "Weather is a primary modifier. We don't just display the temperature; we model how rain will slow traffic, increase demand for public transport, and empty outdoor public spaces, adjusting our recommendations accordingly." },
  { q: "Why avoid the term 'IoT' (Internet of Things)?", a: "Because IoT implies a focus on hardware and sensors. While sensors exist, our focus is on the human intelligence extracted from the data, not the physical hardware collecting it." },
  { q: "Is this technology only for the wealthy?", a: "No. Better public transit routing, safer walking paths, and improved emergency responses benefit everyone. We explicitly design our research to ensure spatial intelligence serves all demographics equitably." },
  { q: "How do urban planners use this data?", a: "Through our 'Urban Cognition' research, we provide planners with anonymized insights into how citizens actually use public spaces, allowing them to design more effective, human-centric infrastructure." },
  { q: "What happens during a massive festival?", a: "The standard 'Mobility Layer' is temporarily suspended, and the 'Cultural Layer' takes precedence. The system understands that roads are now pedestrian zones and routes users accordingly." },
  { q: "Can this system work offline?", a: "Parts of it can. While real-time context requires connectivity, the 'City Memory' and fundamental 'Neighbourhood Identity' are cached locally on the edge device to ensure basic navigation remains possible." },
  { q: "Where can I read your published research?", a: "Our findings on privacy-preserving spatial modelling and urban dynamics are regularly published on the Rheole Research Blog and presented at global urban computing conferences." }
];

export const comparisonData = [
  {
    conventional: "Infrastructure-centric. Focuses heavily on the hardware, sensors, and structural efficiency of the city.",
    ambient: "Human-centred. Focuses on how citizens emotionally and practically experience the city."
  },
  {
    conventional: "Sensor-focused. Believes that installing more cameras and monitors solves urban problems.",
    ambient: "Place understanding. Believes that synthesizing context and history solves urban problems."
  },
  {
    conventional: "Smart city dashboards. Builds massive, complex control rooms for city administrators.",
    ambient: "Context-aware. Builds invisible, intuitive intelligence directly into the user's daily life."
  },
  {
    conventional: "Traffic optimisation. Prioritizes the rapid movement of vehicles above all else.",
    ambient: "Community-focused. Prioritizes safe, diverse mobility including pedestrians, cyclists, and public transit."
  },
  {
    conventional: "Operational efficiency. Views the city as a machine to be optimized.",
    ambient: "Living city intelligence. Views the city as an evolving ecosystem to be understood."
  },
  {
    conventional: "Surveillance-heavy. Often relies on tracking individual citizens to gather data.",
    ambient: "Privacy-respecting. Relies entirely on aggregated, anonymized patterns to infer context."
  }
];
