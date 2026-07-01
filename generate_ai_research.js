const fs = require('fs');
const path = require('path');

const fileContent = `export const aiResearchInitiatives = [
  {
    title: "Ambient Spatial Intelligence",
    description: "Our foundational research vector. We investigate how systems can transition from being 'tools' that users query, to 'ambient layers' that quietly understand the physical environment and assist without demanding direct attention. This involves synthesizing continuous streams of unstructured spatial data into coherent, actionable insights."
  },
  {
    title: "Context Intelligence",
    description: "Information without context is noise. We study how situational variables—time, weather, crowd density, personal rhythm, and social companions—fundamentally alter the meaning of a location or a request. Our goal is to build AI that understands the difference between 'coffee at 7 AM' and 'coffee at 9 PM'."
  },
  {
    title: "Urban Cognition",
    description: "Cities are not just grids; they are living, emotional ecosystems. This initiative explores how people perceive, navigate, and emotionally interpret urban environments. By mapping these 'psychogeographical' patterns, we aim to design spatial systems that feel natural, intuitive, and deeply human."
  },
  {
    title: "Explainable Recommendations",
    description: "The 'black box' problem is fatal for spatial trust. If an AI suggests a 15-minute detour, the user must understand why. We are pioneering new methods for AI to transparently communicate its reasoning, including confidence levels, underlying data sources, and the specific contextual factors driving the recommendation."
  },
  {
    title: "Neighbourhood Understanding",
    description: "A neighbourhood is a repository of cultural memory and micro-economies. We research how to mathematically model the 'vibe' and identity of local districts without reducing them to sterile data points, ensuring that spatial AI preserves and respects local culture."
  },
  {
    title: "Trustworthy AI",
    description: "Spatial data is inherently intimate. This initiative focuses on the architectural and algorithmic foundations required to process location data ethically. We explore edge-processing, differential privacy in movement patterns, and cryptographic methods to ensure user intent remains completely private."
  },
  {
    title: "Adaptive Navigation",
    description: "Traditional routing is static. We research dynamic, emotionally-aware routing algorithms. How can an AI adapt a route in real-time to minimize cognitive load, avoid sudden environmental stressors, or encourage safe, serendipitous exploration?"
  },
  {
    title: "Human–AI Collaboration",
    description: "AI should augment human judgement, not replace it. We study the interaction paradigms necessary for 'co-piloting' spatial decisions. This involves understanding when an AI should intervene, when it should step back, and how it can gracefully accept human correction."
  },
  {
    title: "Behavioural Intelligence",
    description: "By studying aggregate, anonymized movement patterns, we investigate the unspoken rules of human behaviour in physical spaces. This helps us predict how crowds will react to disruptions, enabling safer and more efficient urban management during crises."
  },
  {
    title: "Context-aware Discovery",
    description: "We are reinventing the concept of 'search'. Instead of relying on explicit queries, we research how an AI can infer a user's latent curiosity based on their physical trajectory and historical interests, surfacing highly relevant local opportunities before the user even asks."
  }
];

export const aiFaqsData = [
  { q: "Why doesn't Rheole focus on Large Language Models (LLMs)?", a: "LLMs are exceptional at generating language, but they lack an inherent, grounded understanding of physical reality. Our research focuses on Spatial Intelligence—giving machines the ability to understand geometry, physics, context, and movement. Language is just one interface to that deeper understanding." },
  { q: "How is Ambient Intelligence different from General AI?", a: "Artificial General Intelligence (AGI) seeks to replicate human-level cognition across all domains. Ambient Intelligence is narrower but deeper; it seeks to perfectly understand and assist within the physical and contextual constraints of a user's immediate environment, without requiring conscious interaction." },
  { q: "Do you train your own foundation models?", a: "Yes, but they are Spatial Foundation Models. Instead of being trained purely on internet text, they are trained on vast, anonymized datasets of movement, environmental conditions, urban topology, and temporal rhythms to build a fundamental understanding of physical space." },
  { q: "How do you define 'Intent'?", a: "Intent is the underlying human goal. A query is 'Find a restaurant.' The intent might be 'I need a quiet place to close a business deal in the next 30 minutes.' Our research focuses on decoding the latter from minimal explicit input." },
  { q: "What is 'Explainable AI' in a spatial context?", a: "It means the AI must justify its decisions. If it reroutes you, it should provide a reason: 'Heavy pedestrian traffic detected ahead.' This transparency is non-negotiable for building trust in spatial systems." },
  { q: "How do you mitigate bias in spatial algorithms?", a: "Spatial bias is a significant risk (e.g., routing algorithms avoiding certain neighbourhoods due to flawed historical data). We actively research algorithmic fairness, ensuring our models do not reinforce systemic inequalities or artificially isolate communities." },
  { q: "What role does privacy play in your research?", a: "Privacy is the constraint that drives our innovation. We do not research how to collect more personal data; we research how to infer deep context using less data, relying heavily on edge computing and aggregated, anonymized environmental signals." },
  { q: "Are you trying to automate urban planning?", a: "No. We are building tools to augment urban planners. Our 'Urban Cognition' research provides planners with unprecedented insights into how citizens actually use physical spaces, allowing them to make more human-centric design decisions." },
  { q: "Why is 'Curiosity' a research topic?", a: "Algorithms naturally optimize for convenience, which can lead to 'spatial echo chambers' where users only visit familiar places. We research how AI can safely introduce serendipity and encourage users to explore new, diverse aspects of their cities." },
  { q: "What happens when the AI is wrong?", a: "Failure modes are a core research focus. We design systems that fail gracefully, clearly communicating uncertainty to the user and seamlessly transferring control back to human judgement without causing distress or danger." },
  { q: "How does weather affect your models?", a: "Weather is a primary contextual modifier. It changes human intent instantly. Our models treat weather not as an external variable, but as a foundational layer of the physical reality they are trying to understand." },
  { q: "What is the timeline for Ambient Spatial Intelligence?", a: "It is an incremental evolution, not a single breakthrough. We are already deploying early components (like contextual routing), but the fully realized vision of invisible, ambient assistance is a decade-long research trajectory." },
  { q: "Do you publish your research?", a: "Yes. We believe in open scientific discourse. While some proprietary algorithms remain internal, we regularly publish our findings on algorithmic fairness, spatial modeling, and privacy-preserving techniques." },
  { q: "How does human psychology influence your work?", a: "Deeply. You cannot build spatial intelligence without understanding how humans perceive space. We collaborate closely with behavioural psychologists to ensure our systems align with natural human cognitive patterns." },
  { q: "Can AI truly understand 'Context'?", a: "It can understand the mathematical representation of context (time + location + weather + history). Our research aims to bridge the gap between that mathematical state and the emotional reality experienced by the user." },
  { q: "Why avoid traditional benchmark comparisons?", a: "Because spatial intelligence cannot be measured by a standardized test score. The true benchmark is real-world utility: did the system reduce the user's cognitive load? Did it keep them safe? Did it respect their privacy?" },
  { q: "What is 'Intent Dynamics™'?", a: "It is our framework for modeling how a user's goals change over time. It acknowledges that human intent is fluid—a user might start a journey looking for speed, but shift to looking for scenery based on a change in the environment." },
  { q: "How do you handle conflicting intents?", a: "When a user's historical preferences conflict with their current environmental context, our Explainable AI research dictates that the system should present the conflict to the user and offer a transparent choice, rather than guessing silently." },
  { q: "What is the most difficult spatial problem you are researching?", a: "Inferring intent from minimal data without violating privacy. It requires exceptionally sophisticated contextual modeling to understand what a user wants without actually watching what they do." },
  { q: "How can other developers participate?", a: "Through the Rheole Developer Platform. We expose our research findings as experimental APIs, allowing the global developer community to build upon our spatial models and contribute to the ecosystem." }
];

export const comparisonData = [
  {
    conventional: "Model-centric. Focuses on the size and parameter count of the neural network.",
    ambient: "Human-centred. Focuses on the utility and emotional impact of the system on the user."
  },
  {
    conventional: "Accuracy focused. Optimizes for the statistically 'correct' answer based on historical data.",
    ambient: "Context-aware. Optimizes for the most appropriate answer based on the immediate, lived reality."
  },
  {
    conventional: "Benchmark driven. Success is defined by outperforming other models on standardized academic tests.",
    ambient: "Spatial reasoning. Success is defined by safely and intuitively navigating the physical world."
  },
  {
    conventional: "General intelligence. Seeks to solve all problems across all domains with a single massive model.",
    ambient: "Explainability. Seeks to solve specific spatial problems transparently, ensuring the user understands 'why'."
  },
  {
    conventional: "Data-centric. Believes that acquiring more personal data is the path to better intelligence.",
    ambient: "Trust-centric. Believes that protecting privacy and inferring context from environment is the path to adoption."
  }
];

export const openQuestionsData = [
  "Can AI understand places as humans do, or is it fundamentally limited to geometric abstraction?",
  "Can recommendations explain themselves without overwhelming the user with technical data?",
  "Can curiosity be encouraged algorithmically, or does the act of recommendation inherently stifle genuine discovery?",
  "Can AI strengthen local communities, or does digital mediation always lead to physical isolation?",
  "Can computers truly understand 'neighbourhood identity', or is culture too nuanced for mathematical modeling?",
  "Can deep, hyper-personalized context be achieved using strictly privacy-preserving, edge-based computation?",
  "Can intelligence remain transparent when the underlying neural networks are inherently opaque?",
  "Can digital systems proactively reduce cognitive overload, or does their very presence add to the noise?"
];
\`;

const dirPath = path.join(__dirname, 'lib', 'data');
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(path.join(dirPath, 'ai-research.ts'), fileContent);
console.log('Successfully generated lib/data/ai-research.ts');
