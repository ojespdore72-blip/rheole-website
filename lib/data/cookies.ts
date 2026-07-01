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

