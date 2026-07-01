const fs = require('fs');
const path = require('path');

const fileContent = `export const caseStudiesData = [
  {
    id: "cs-1",
    title: "Reducing Daily Commute Stress in Bengaluru",
    background: "Bengaluru's traffic creates immense cognitive load for commuters.",
    observedChallenge: "People don't just want the fastest route; they want the least stressful route. Navigation systems optimise for time, ignoring road conditions, unexpected bottlenecks, and the emotional toll of stop-and-go traffic.",
    researchQuestions: ["Can routing algorithms prioritise emotional well-being over pure speed?", "How do we quantify 'stress' in physical mobility?"],
    context: "Urban mobility, mental health, spatial navigation.",
    spatialInterpretation: "Movement is not just a vector from A to B; it is an emotional journey influenced by the density, flow, and atmosphere of the physical environment.",
    hypothesis: "By incorporating real-time congestion fluidity, weather, and historical bottleneck anxiety data, a routing system can reduce perceived commute stress by up to 30%.",
    approach: "Ambient Spatial Intelligence could analyse live traffic patterns not just for volume, but for 'flow disruption'. A route might take 4 minutes longer but maintain steady movement, reducing cognitive fatigue.",
    userExperience: "A driver enters their destination. Rheole surfaces two options: 'Fastest' and 'Smoothest'. The 'Smoothest' route avoids known stress-points like chaotic intersections, dynamically updating if the atmosphere changes.",
    lessonsLearned: "Time is not the only metric of a successful journey. Predictability and flow often outweigh pure speed.",
    futureInvestigation: "How can this model scale to public transport, where the stress is shared among multiple commuters?"
  },
  {
    id: "cs-2",
    title: "Discovering Meaningful Campus Communities",
    background: "University students often struggle with isolation despite being surrounded by peers.",
    observedChallenge: "Campus life is digitally fragmented. Students rely on disparate social groups and noticeboards, leading to missed serendipitous connections and lonely first-year experiences.",
    researchQuestions: ["How can physical proximity safely translate into social connection?", "What role does shared context play in community building?"],
    context: "Higher education, social isolation, community organizing.",
    spatialInterpretation: "A campus is a network of overlapping intents. The library, the quad, and the cafe are not just buildings, but temporal hubs of shared academic and social purpose.",
    hypothesis: "If students can see anonymous, aggregated 'interest clouds' in physical spaces, they will naturally gravitate toward areas where their communities are actively gathering.",
    approach: "Rheole could map 'Ambient Communities'. If 15 people from the Robotics Society are in the South Cafe, the space lightly signals this context to other interested students nearby.",
    userExperience: "A student walks across campus. Their device gently notifies them: 'High density of design students currently in the Engineering Library.' They decide to study there, leading to a serendipitous project collaboration.",
    lessonsLearned: "Digital visibility of physical communities encourages organic participation without compromising individual privacy.",
    futureInvestigation: "Can this model be applied to large corporate campuses to break down departmental silos?"
  },
  {
    id: "cs-3",
    title: "Improving Neighbourhood Exploration for First-Time Visitors",
    background: "Tourists often feel overwhelmed and default to the most generic, highly-rated locations.",
    observedChallenge: "Exploration is hindered by a lack of trust and context. A visitor doesn't know if a street is safe, vibrant, or aligned with their interests, leading to a narrow, 'top 10' travel experience.",
    researchQuestions: ["How do we build trust in unknown physical spaces?", "Can technology encourage wandering without inducing anxiety?"],
    context: "Tourism, urban exploration, local economy.",
    spatialInterpretation: "A neighbourhood is a living narrative. Its vibe, safety, and cultural relevance shift depending on the time of day and the person experiencing it.",
    hypothesis: "Providing real-time 'Atmospheric Context'—such as liveliness, lighting, and crowd intent—will increase a visitor's willingness to explore off the beaten path.",
    approach: "Using Ambient Spatial Intelligence, Rheole could synthesize foot traffic, local event data, and historical rhythms to generate a 'Vibe Score' for specific streets at specific times.",
    userExperience: "Instead of navigating to a specific restaurant, a user asks to be routed through the 'most vibrant artistic streets' on their way to dinner. The system crafts a serendipitous walking route.",
    lessonsLearned: "Exploration requires a delicate balance of safety, curiosity, and contextual reassurance.",
    futureInvestigation: "How do we quantify and ethically communicate 'safety' without reinforcing systemic biases?"
  },
  {
    id: "cs-4",
    title: "Contextual Guidance in Public Transport",
    background: "Public transport systems can be incredibly confusing, especially during disruptions.",
    observedChallenge: "Transit apps provide static schedules and binary disruption alerts. They fail to guide users through the physical chaos of a delayed station or a rerouted bus.",
    researchQuestions: ["How can spatial intelligence reduce the panic of unexpected transit changes?", "What information is most critical during a disruption?"],
    context: "Public transit, crisis navigation, urban infrastructure.",
    spatialInterpretation: "A transit station during a delay is a high-stress spatial environment where traditional digital wayfinding completely breaks down.",
    hypothesis: "By providing real-time, micro-spatial guidance (e.g., 'Move to the north end of the platform to avoid the crowd bottleneck'), we can significantly reduce commuter anxiety.",
    approach: "Rheole could analyse crowd density and train movement to provide dynamic, step-by-step physical routing within the station itself.",
    userExperience: "A train is cancelled. Instead of just a notification, the user's phone vibrates: 'Severe crowding on Platform 2. Walk to the East Concourse and take the 45 Bus alternative. It leaves in 6 minutes.'",
    lessonsLearned: "During disruptions, macro-routing (which train to take) is less important than micro-routing (how to physically navigate the chaos).",
    futureInvestigation: "How can transit authorities use aggregated intent data to preemptively dispatch alternative transport?"
  },
  {
    id: "cs-5",
    title: "Adaptive Route Recommendations for Walking and Cycling",
    background: "Active transport requires vastly different environmental context than driving.",
    observedChallenge: "Standard maps treat bicycles and pedestrians as slow cars. They ignore critical factors like air quality, shade, elevation, and street-level noise.",
    researchQuestions: ["What environmental factors truly influence the decision to walk or cycle?", "How does weather context change routing preferences?"],
    context: "Active mobility, urban health, environmental sustainability.",
    spatialInterpretation: "A walking route is a physical engagement with the environment. It is shaped by micro-climates, topology, and sensory inputs.",
    hypothesis: "Routes optimized for environmental comfort (shade in summer, lower pollution) will increase active transport adoption by 20%.",
    approach: "Rheole integrates hyper-local weather, topographical data, and real-time air quality sensors to generate 'Comfort Routes'.",
    userExperience: "On a 35°C day, a user requests walking directions. The system recommends a route that takes 2 minutes longer but provides 80% more tree canopy shade and lower particulate matter exposure.",
    lessonsLearned: "Environmental intelligence is a critical, often ignored component of human mobility.",
    futureInvestigation: "Can adaptive routing be used to dynamically distribute pedestrian traffic away from highly polluted corridors?"
  },
  {
    id: "cs-6",
    title: "Intelligent Discovery for Small Local Businesses",
    background: "Local businesses struggle to compete with digital behemoths for visibility.",
    observedChallenge: "Search engines prioritise businesses with massive digital marketing budgets. A highly relevant, quiet local bakery is invisible if it doesn't play the SEO game.",
    researchQuestions: ["How can physical proximity and user intent democratize local discovery?", "What makes a local recommendation feel 'authentic'?"],
    context: "Local economy, small business, algorithmic fairness.",
    spatialInterpretation: "A local business is anchored in its physical community. Its value is derived from its immediate context, not its global digital footprint.",
    hypothesis: "Aggregating local foot traffic, community engagement, and real-time intent will surface high-quality local businesses that traditional algorithms ignore.",
    approach: "Rheole's 'Neighbourhood Intelligence' could prioritize businesses based on local physical engagement rather than digital reviews.",
    userExperience: "A user searches for 'coffee'. Instead of the heavily-reviewed chain three blocks away, Rheole highlights a small, unreviewed pop-up cafe 50 meters away that currently has a high concentration of local creatives.",
    lessonsLearned: "Physical engagement is often a stronger indicator of quality and relevance than digital reviews.",
    futureInvestigation: "How can we ensure this system isn't gamed by artificially inflating foot traffic?"
  },
  {
    id: "cs-7",
    title: "Experiencing Cities Beyond Popular Attractions",
    background: "Tourism concentrates heavily in small 'zones', leading to overcrowding and a lack of authentic experience.",
    observedChallenge: "Tourists flock to the same 5 locations because they lack the context to understand the rest of the city. This degrades the experience and strains local infrastructure.",
    researchQuestions: ["How can we disperse tourist foot traffic equitably?", "Can technology foster a deeper appreciation for local, non-touristy culture?"],
    context: "Sustainable tourism, urban planning, cultural preservation.",
    spatialInterpretation: "A city is a vast tapestry of cultural nodes. Overtourism is a failure of spatial distribution and contextual storytelling.",
    hypothesis: "Curiosity-driven recommendations that link a user's specific niche interests to off-path locations can distribute tourist traffic more evenly.",
    approach: "Rheole could use 'Curiosity Intelligence' to map a user's deep interests (e.g., mid-century brutalist architecture) and guide them to relevant, uncrowded neighbourhoods.",
    userExperience: "A visitor to Paris who loves jazz and vintage cameras is guided away from the Eiffel Tower and toward a specific street in the 11th arrondissement known for independent film labs and live evening music.",
    lessonsLearned: "Niche, highly personalized context is the key to unlocking sustainable, dispersed urban exploration.",
    futureInvestigation: "How does the influx of targeted tourism affect the fabric of quiet, local neighbourhoods?"
  },
  {
    id: "cs-8",
    title: "Emergency Navigation During Unexpected Closures",
    background: "In crises, traditional mapping data is dangerously slow to update.",
    observedChallenge: "During floods, fires, or sudden road closures, routing systems often lead people directly into danger because the static map hasn't registered the physical reality.",
    researchQuestions: ["How can spatial intelligence react instantly to environmental crises?", "What is the most effective way to communicate urgent spatial risk?"],
    context: "Emergency response, disaster management, real-time data.",
    spatialInterpretation: "During an emergency, the physical environment becomes volatile. The map must transition from a static guide to a real-time survival tool.",
    hypothesis: "By synthesizing real-time social signals, rapid changes in traffic velocity, and environmental sensors, we can instantly map 'danger zones' before official reports are filed.",
    approach: "Rheole's 'Environmental Intelligence' could detect a sudden, unnatural halt in movement across a wide grid, instantly flagging it as a potential hazard and rerouting users proactively.",
    userExperience: "A user is driving toward a bridge. A flash flood occurs. Before the news reports it, Rheole detects the anomaly through aggregate movement data and urgently reroutes the driver to higher ground.",
    lessonsLearned: "In crises, the speed of spatial inference is more critical than the precision of the official data source.",
    futureInvestigation: "How do we balance the need for rapid, AI-inferred danger alerts with the risk of causing unnecessary panic?"
  },
  {
    id: "cs-9",
    title: "Reducing Decision Fatigue in Dining",
    background: "Choosing where to eat in a dense city often leads to choice paralysis.",
    observedChallenge: "Users are bombarded with lists, ratings, and reviews. The sheer volume of data makes the simple act of finding dinner exhausting.",
    researchQuestions: ["How can context reduce the number of options without reducing satisfaction?", "What unstated variables (e.g., noise level, wait time) truly drive dining decisions?"],
    context: "Consumer behaviour, decision science, local dining.",
    spatialInterpretation: "A restaurant choice is highly dependent on immediate context: who are you with, how much time do you have, and what is the current atmosphere of the venue?",
    hypothesis: "Filtering options through real-time 'Atmospheric Context' (e.g., current noise level, actual wait time) rather than historical reviews will significantly reduce decision fatigue.",
    approach: "Rheole could synthesize live data to offer exactly one or two highly confident recommendations based on the user's current rhythm and the venue's live state.",
    userExperience: "It's 7 PM on a rainy Tuesday. The user is alone and tired. Rheole suggests a single, quiet noodle shop two blocks away that currently has no wait time and a calm atmosphere.",
    lessonsLearned: "When context is deeply understood, less choice is actually a superior user experience.",
    futureInvestigation: "How do we gracefully handle situations where the AI's high-confidence recommendation is wrong?"
  },
  {
    id: "cs-10",
    title: "Connecting Founders with Entrepreneurial Communities",
    background: "Building a startup is lonely, yet founders are often unknowingly surrounded by peers.",
    observedChallenge: "Professional networking is restricted to digital platforms or formal events. Founders working in the same cafe might never realize they could collaborate.",
    researchQuestions: ["How can physical spaces facilitate professional serendipity?", "What privacy controls are necessary for ambient professional networking?"],
    context: "Professional networking, startup ecosystems, serendipity.",
    spatialInterpretation: "A coffee shop in a tech hub is a latent network. The physical space contains immense collaborative potential that is completely invisible.",
    hypothesis: "An opt-in 'Opportunity Intelligence' layer can safely highlight the presence of complementary skillsets in a shared physical space, increasing organic collaboration.",
    approach: "Rheole could allow users to broadcast a generic 'intent' (e.g., 'Looking for a technical co-founder'). The space itself acts as the matchmaker.",
    userExperience: "A designer sits in a coworking space. Her device notifies her: 'There is a high concentration of backend engineers working in the lounge area today who are open to networking.'",
    lessonsLearned: "Ambient networking requires extreme sensitivity to privacy and context; the interaction must feel serendipitous, not surveillance-driven.",
    futureInvestigation: "How does the physical architecture of a space impact the success rate of these ambient connections?"
  },
  {
    id: "cs-11",
    title: "Improving Accessibility for Differently-Abled Users",
    background: "Cities are largely designed for the able-bodied. Navigating them with a disability is fraught with hidden obstacles.",
    observedChallenge: "Accessibility data is static and often wrong. An elevator might be broken, or a sidewalk might be blocked by construction, rendering a 'wheelchair accessible' route impassable.",
    researchQuestions: ["How can spatial intelligence dynamically map accessibility?", "Can we crowdsource micro-obstacles in real-time without overwhelming the user?"],
    context: "Accessibility, inclusive design, urban mobility.",
    spatialInterpretation: "For a user in a wheelchair, a curb without a ramp is not an inconvenience; it is a hard spatial boundary. The map must reflect the physical reality of the surface.",
    hypothesis: "By analyzing the micro-movements and trajectory data of users navigating the city, we can infer the location of temporary obstacles (like construction) and broken infrastructure.",
    approach: "Rheole could use 'Movement Intelligence' to detect if users who require accessible routes are consistently rerouting around a specific point, inferring a new obstacle.",
    userExperience: "A wheelchair user requests a route. Rheole dynamically avoids a specific subway station because it has inferred, based on recent movement patterns, that the elevator is out of service.",
    lessonsLearned: "True accessibility requires dynamic, real-time spatial awareness, not just static structural data.",
    futureInvestigation: "How can this inferred data be fed back to city planners for rapid infrastructure repair?"
  },
  {
    id: "cs-12",
    title: "Understanding How Weather Influences Movement",
    background: "Weather profoundly changes human behaviour, yet digital systems rarely adapt.",
    observedChallenge: "When it rains, ride-sharing prices surge, transit gets crowded, and pedestrian routes empty out. Digital systems react to this chaos rather than predicting and smoothing it.",
    researchQuestions: ["How precisely can we model the behavioural shift caused by micro-weather events?", "Can preemptive routing mitigate weather-induced urban congestion?"],
    context: "Meteorology, behavioural economics, urban flow.",
    spatialInterpretation: "Weather is a dynamic spatial modifier. Rain doesn't just make a street wet; it fundamentally changes the utility and desirability of that street.",
    hypothesis: "By integrating hyper-local weather predictions with intent data, we can preemptively reroute traffic and distribute transit loads before the weather event hits.",
    approach: "Rheole's 'Environmental Intelligence' could detect an incoming downpour in a specific district and instantly suggest covered walking routes or earlier transit departures to users in that area.",
    userExperience: "Ten minutes before a sudden thunderstorm, a pedestrian receives an alert suggesting they walk through an interconnected shopping mall rather than the exposed high street.",
    lessonsLearned: "Predictive environmental intelligence can transform a chaotic urban reaction into a smooth, managed transition.",
    futureInvestigation: "How does prolonged extreme weather (e.g., heatwaves) permanently alter the spatial rhythms of a city?"
  },
  {
    id: "cs-13",
    title: "Exploring Local Culture Through Neighbourhood Intelligence",
    background: "Cultural nuance is often lost in digital translation.",
    observedChallenge: "Digital maps homogenize neighbourhoods, treating a historic arts district exactly the same as a suburban strip mall.",
    researchQuestions: ["How do we quantify and represent the 'culture' of a physical space?", "Can technology foster a deeper connection to local history and art?"],
    context: "Cultural heritage, local identity, digital placemaking.",
    spatialInterpretation: "A neighbourhood is a repository of cultural memory. Its value is not just in its current commerce, but in its historical and social fabric.",
    hypothesis: "Embedding 'Cultural Context' into spatial exploration will increase user engagement with local institutions, historical sites, and community art.",
    approach: "Rheole could synthesize historical data, local event registries, and community sentiment to create a 'Cultural Overlay' for specific districts.",
    userExperience: "Walking through a historic district, a user's device highlights not just restaurants, but the locations of famous literary salons, local murals, and upcoming community theatre events.",
    lessonsLearned: "Technology must serve as a lens to amplify local culture, not a filter that obscures it.",
    futureInvestigation: "How do we ensure that cultural mapping doesn't contribute to rapid, harmful gentrification?"
  },
  {
    id: "cs-14",
    title: "Connecting Citizens with Civic Initiatives",
    background: "Civic engagement is often hindered by a lack of visibility.",
    observedChallenge: "Citizens want to participate in local town halls, clean-ups, or community meetings, but they rarely know when or where they are happening.",
    researchQuestions: ["How can physical proximity increase civic participation?", "Can ambient notifications foster a stronger sense of civic duty?"],
    context: "Civic tech, community organizing, local governance.",
    spatialInterpretation: "Civic events are spatial anchors for community action. Their success relies on translating local presence into active participation.",
    hypothesis: "Notifying users of hyper-local civic events as they physically pass by the relevant venues will significantly increase spontaneous civic engagement.",
    approach: "Rheole's 'Local Coordination' could gently surface civic opportunities based on a user's regular spatial rhythms.",
    userExperience: "A user walks past their local park. They receive a notification that a community clean-up is happening there tomorrow morning, allowing them to easily RSVP.",
    lessonsLearned: "Spatial relevance is a powerful catalyst for civic action.",
    futureInvestigation: "How can we measure the long-term impact of ambient civic nudges on community cohesion?"
  },
  {
    id: "cs-15",
    title: "The Relationship Between Urban Design and Digital Experience",
    background: "Physical architecture and digital interfaces are increasingly colliding.",
    observedChallenge: "Architects design physical spaces, and engineers design digital spaces, but they rarely consider how the two interact in the real world.",
    researchQuestions: ["How does the physical layout of a plaza dictate the digital behaviour within it?", "Can spatial intelligence inform better urban planning?"],
    context: "Architecture, urban planning, human-computer interaction.",
    spatialInterpretation: "The city is a hybrid interface. A park bench is not just physical furniture; it is a node where digital consumption happens.",
    hypothesis: "By analysing aggregated, anonymised 'Spatial Rhythms', city planners can redesign public spaces to better support how humans actually use them in the digital age.",
    approach: "Rheole could provide cities with 'Rhythm Insights'—showing, for example, that people avoid a specific plaza at noon because the glare on their screens makes it unusable.",
    userExperience: "A city planner uses Rheole's aggregated data to justify planting shade trees in a specific plaza, having seen that digital engagement drops to zero when the sun is directly overhead.",
    lessonsLearned: "Digital spatial intelligence is the missing feedback loop for physical urban design.",
    futureInvestigation: "How will the rise of augmented reality fundamentally alter the requirements of physical urban spaces?"
  }
];

export const faqsData = [
  { q: "Why are these case studies exploratory?", a: "We believe in asking the right questions before engineering solutions. Exploratory case studies allow us to rigorously define a problem space—understanding the human and spatial nuances—before we commit to a specific technological approach." },
  { q: "How are research questions selected?", a: "Questions emerge from continuous observation of urban friction. Our interdisciplinary team of data scientists, urban planners, and behavioural psychologists identify patterns of frustration or missed opportunity in how people interact with their environments." },
  { q: "Can the public contribute ideas?", a: "Yes. We believe that the best insights often come from the people living the experience. We actively host 'Spatial Inquiry' workshops and maintain open channels for community-driven research proposals." },
  { q: "Do case studies become products?", a: "Not directly, but they inform everything we build. A case study acts as a compass. The insights generated often evolve into core capabilities within the Rheole platform, shaping how our APIs and SDKs are designed." },
  { q: "How do you validate hypotheses?", a: "Through a combination of ethical data simulation, opt-in field studies, and partnerships with academic institutions. We prioritise rigorous, real-world testing over theoretical modelling." },
  { q: "Why avoid exaggerated metrics?", a: "Because spatial intelligence is complex. Claiming a '500% increase in happiness' is marketing fiction. We prefer intellectual honesty, acknowledging both the successes and the profound limitations of our research." },
  { q: "What is 'Spatial Inquiry™'?", a: "It is our proprietary methodology for investigating real-world challenges. It requires examining a problem through three lenses simultaneously: the physical environment, the digital layer, and human intent." },
  { q: "How do you protect privacy during field studies?", a: "Privacy is foundational. We employ edge-processing, aggressive data anonymisation, and strict opt-in protocols. Our research focuses on aggregate spatial rhythms, not individual tracking." },
  { q: "Are these studies limited to major cities?", a: "While dense urban environments provide rich data, our research explicitly includes suburban, rural, and developing regions. Spatial friction exists everywhere, and our solutions must be universally applicable." },
  { q: "What role do urban planners play at Rheole?", a: "They are integral. We cannot understand spatial intelligence without understanding the physical built environment. Urban planners ensure our digital solutions respect and enhance the physical architecture of a city." },
  { q: "How does weather data impact your research?", a: "Profoundly. Weather is the ultimate dynamic modifier of spatial behaviour. Understanding how a sudden downpour changes intent is crucial for building truly ambient, responsive systems." },
  { q: "Why focus on 'decision fatigue'?", a: "Because modern digital mapping provides endless options without context. We research how to reduce cognitive load by offering fewer, but highly relevant, suggestions based on real-time spatial conditions." },
  { q: "How do you define 'Ambient Communities'?", a: "These are latent networks of people with shared interests who occupy the same physical space but are unaware of each other. Our research explores how to safely make these connections visible." },
  { q: "What is the 'Urban Insight Framework™'?", a: "It is our structured method for analysing the relationship between environmental factors (like noise, light, and density) and human decision-making in physical spaces." },
  { q: "Do you study the negative impacts of technology?", a: "Absolutely. A core part of our research is understanding how poorly designed spatial technology can cause harm, such as algorithmic gentrification or distraction-induced accidents." },
  { q: "How do 'Open Questions™' guide your roadmap?", a: "Open Questions are unresolved challenges that we publicly commit to investigating. They act as a transparent research agenda, inviting collaboration from the broader scientific and engineering communities." },
  { q: "What does 'Context over convenience' mean?", a: "It is a research principle stating that the fastest or easiest route is not always the best. A truly intelligent system considers the emotional and environmental context of a journey, not just the math." },
  { q: "How do you measure 'Atmospheric Context'?", a: "We synthesize multiple data streams—including aggregated foot traffic, ambient noise levels, and temporal rhythms—to infer the 'vibe' or atmosphere of a specific location at a specific time." },
  { q: "Can spatial intelligence improve accessibility?", a: "Yes. It is a major research focus. By moving away from static accessibility data and toward dynamic, real-time inference (detecting temporary obstacles), we can significantly improve navigation for differently-abled users." },
  { q: "How can I stay updated on Rheole Research?", a: "Our Case Studies page is continuously updated. We also publish detailed findings in our Engineering Notes and Research Blog, and we frequently present at major urban computing conferences." }
];

export const observationsData = [
  {
    title: "The Friction of Choice",
    description: "People often know their destinations but not the opportunities surrounding them. Information overload reduces curiosity, leading users to default to familiar, safe choices rather than exploring the rich context of their immediate environment."
  },
  {
    title: "The Emotional Toll of Navigation",
    description: "Traditional navigation rarely considers the emotional experience of movement. Optimizing purely for speed ignores the stress of chaotic intersections, heavy traffic, and poor environmental conditions."
  },
  {
    title: "Digital Fragmentation of Communities",
    description: "Physical spaces are filled with latent communities that remain completely disconnected because their digital networks are siloed. The physical proximity is wasted."
  },
  {
    title: "The Visibility Crisis for Local Commerce",
    description: "Small businesses struggle with local visibility because digital search engines prioritize SEO and marketing budgets over authentic, hyper-local physical engagement and community relevance."
  },
  {
    title: "Trust and Exploration",
    description: "Trust heavily influences exploration. Without contextual reassurance about safety, vibrancy, and relevance, people are unwilling to deviate from well-worn paths."
  }
];

export const principlesData = [
  {
    title: "Evidence Before Assumptions",
    description: "We do not build based on what we think people need. We observe, gather evidence, and let the real-world friction dictate the direction of our research and engineering."
  },
  {
    title: "Human-Centred Thinking",
    description: "Spatial intelligence must serve human well-being, not just algorithmic efficiency. We prioritize reducing cognitive load and enhancing emotional experience."
  },
  {
    title: "Context Over Convenience",
    description: "The fastest route or the highest-rated restaurant is not always the right answer. True intelligence requires understanding the deep context of the moment."
  },
  {
    title: "Long-Term Impact",
    description: "We consider the secondary effects of our systems. How does routing affect a quiet neighbourhood? How do recommendations impact local economies?"
  },
  {
    title: "Ethical Exploration",
    description: "We are committed to transparent reasoning and privacy by design. Our research respects the boundaries of the individuals and communities we study."
  },
  {
    title: "Interdisciplinary Collaboration",
    description: "Spatial challenges cannot be solved by engineers alone. Our research requires the combined expertise of urban planners, sociologists, and designers."
  }
];
`;

const dirPath = path.join(__dirname, 'lib', 'data');
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(path.join(dirPath, 'case-studies.ts'), fileContent);
console.log('Successfully generated lib/data/case-studies.ts');
