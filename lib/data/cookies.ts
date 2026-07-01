export const cookieReasonsData = [
  "Maintaining secure sign-in sessions and verifying your identity.",
  "Remembering your language and regional preferences.",
  "Remembering interface preferences, such as light or dark mode.",
  "Saving your explicit cookie consent choices across visits.",
  "Improving website reliability by distributing traffic loads.",
  "Measuring website performance to identify and resolve bottlenecks.",
  "Supporting developer experiences within our API Reference and Sandbox.",
  "Preventing abuse, fraud, and suspicious automated activity."
];

export const cookieCategoriesData = [
  {
    title: "Essential Cookies",
    purpose: "These cookies are strictly necessary for the website to function securely and cannot be switched off in our systems.",
    examples: "Session identifiers, load balancing tokens, and security authenticators.",
    canDisable: "No",
    impact: "Disabling these at the browser level will cause severe authentication failures and break core navigation functionality."
  },
  {
    title: "Performance Cookies",
    purpose: "These allow us to count visits and traffic sources so we can measure and improve the performance of our platform.",
    examples: "Anonymous load time metrics, error rate tracking, and page transition speeds.",
    canDisable: "Yes",
    impact: "We will not know when you have visited our site, and we will not be able to monitor its performance to fix issues."
  },
  {
    title: "Functional Cookies",
    purpose: "These enable the website to provide enhanced functionality and personalization based on your previous interactions.",
    examples: "Language preferences, previously selected API environments, and dark mode toggles.",
    canDisable: "Yes",
    impact: "Some or all of these services may not function properly, requiring you to manually set preferences on every visit."
  },
  {
    title: "Preference Cookies",
    purpose: "These specifically store your consent choices regarding other categories of cookies.",
    examples: "The 'rheole_consent_status' token.",
    canDisable: "Yes",
    impact: "If deleted, you will be prompted to re-select your cookie preferences upon your next visit."
  },
  {
    title: "Security Cookies",
    purpose: "These help identify and prevent security risks, protecting user data from unauthorized access.",
    examples: "CSRF (Cross-Site Request Forgery) tokens and suspicious IP rate-limiting flags.",
    canDisable: "No",
    impact: "These are considered essential. Removing them compromises the safety of your data."
  }
];

export const similarTechnologiesData = [
  {
    title: "Local Storage",
    description: "A web storage object that allows javascript sites and apps to store and access data right in the browser with no expiration date. We use this for non-sensitive UI state."
  },
  {
    title: "Session Storage",
    description: "Similar to Local Storage, but data is cleared when the page session ends (when the browser tab is closed). We use this for temporary form data or multi-step wizard state."
  },
  {
    title: "Security Tokens",
    description: "Cryptographic strings (like JSON Web Tokens) stored in memory or secure HTTP-only cookies to verify that a request is coming from an authenticated user."
  },
  {
    title: "Caching",
    description: "Storing copies of frequently accessed files (like images or styles) locally on your device to drastically improve page load times on subsequent visits."
  }
];

export const thirdPartyData = [
  {
    name: "Authentication Providers",
    why: "To allow secure, federated login (e.g., 'Sign in with GitHub' or 'Sign in with Google') without requiring you to create a new password.",
    processed: "An anonymous session identifier and the public profile information you explicitly consent to share.",
    alignment: "We only use providers that support strict OAuth 2.0 protocols, ensuring your passwords are never exposed to our servers."
  },
  {
    name: "Infrastructure Analytics",
    why: "To monitor the health, uptime, and latency of our global edge network.",
    processed: "Aggregated, anonymized performance metrics such as 'Time to First Byte' and regional server response times.",
    alignment: "We strip all personally identifiable information (PII) before performance data is aggregated. We do not track individual user journeys for performance monitoring."
  },
  {
    name: "Security Services",
    why: "To protect the platform against DDoS attacks, automated scraping, and credential stuffing.",
    processed: "IP addresses, browser signatures, and request velocity.",
    alignment: "Security data is retained ephemerally to evaluate threat levels and is automatically purged once the threat window closes."
  }
];

export const faqsData = [
  { q: "What exactly are cookies?", a: "Cookies are small text files placed on your device by the websites you visit. They are widely used to make websites work, or work more efficiently, as well as to provide essential information to the site owners." },
  { q: "Do I have to accept all cookies?", a: "No. You are only required to accept 'Essential' and 'Security' cookies, which are necessary for the website to function. All other categories are entirely optional." },
  { q: "Can I delete cookies later?", a: "Yes. You can delete all cookies already on your device and configure most modern browsers to prevent them from being placed in the future." },
  { q: "Will disabling cookies break the website?", a: "Disabling optional cookies (like Performance or Functional) will not break the website, though you may lose some personalized features. Disabling Essential cookies at the browser level will prevent you from logging in or using the Developer Platform." },
  { q: "How long do cookies remain on my device?", a: "It depends on the type. 'Session cookies' are deleted the moment you close your browser. 'Persistent cookies' remain until they reach their explicitly defined expiration date or you manually delete them." },
  { q: "Does Rheole use cookies for advertising?", a: "No. Rheole does not use advertising or cross-site tracking cookies. We do not sell your data to data brokers or third-party advertising networks." },
  { q: "Can I change my preferences at any time?", a: "Yes. You can access the 'Cookie Preferences' link at the bottom of any page to instantly update your choices. Changes take effect immediately." },
  { q: "What happens when a cookie expires?", a: "Once a cookie passes its expiration date, your browser automatically deletes it. The website will treat you as a new visitor for the purpose that specific cookie served." },
  { q: "Are cookies safe?", a: "Cookies themselves are plain text files. They cannot execute code or deliver viruses. However, because they can be used to track behavior, their safety depends on the transparency and integrity of the website issuing them." },
  { q: "Why do I see cookies from other domains?", a: "These are 'third-party cookies'. On Rheole, these are strictly limited to secure authentication providers (like GitHub) and essential infrastructure monitoring. We do not permit third-party advertising domains." },
  { q: "What is 'Local Storage'?", a: "Local Storage is a modern browser feature similar to a cookie, but it can hold more data and isn't automatically sent to the server with every HTTP request. We use it to save UI preferences like Dark Mode." },
  { q: "Do cookies collect personal data?", a: "Most of our cookies collect anonymous identifiers (like a randomized string). However, Authentication cookies do link to your personal account to keep you securely logged in." },
  { q: "How often is this policy updated?", a: "We review this policy quarterly or whenever we introduce a new feature that requires a change in how we process local storage and cookies." },
  { q: "Who can I contact about privacy concerns?", a: "You can reach our privacy team directly through the Contact page, or by reviewing our full Privacy Architecture documentation." },
  { q: "Is this policy globally applicable?", a: "Yes. While specific regional laws (like GDPR or CCPA) require different disclosures, we apply our strictest privacy standards globally to all users, regardless of their location." }
];
