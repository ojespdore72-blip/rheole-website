export const resourceCatalogData = [
  {
    title: "Accounts",
    description: "The root of the identity model. Accounts represent the billing entity and legal ownership of all subordinate Projects and Organizations.",
    relations: ["Projects", "Organizations", "Billing"]
  },
  {
    title: "Projects",
    description: "The primary container for resources. Every API request must be scoped to a specific Project, ensuring strict boundary isolation.",
    relations: ["Accounts", "Environments", "Developer Keys"]
  },
  {
    title: "Organizations",
    description: "Multi-tenant grouping structures that allow multiple users to collaborate securely across shared Projects.",
    relations: ["Accounts", "Users", "Permissions"]
  },
  {
    title: "Users",
    description: "Individual human identities or service accounts that interact with the platform, defined by strict role-based access controls.",
    relations: ["Organizations", "Sessions", "Audit Logs"]
  },
  {
    title: "Places",
    description: "The foundational spatial entity. Represents a physical location, enriched with geometric boundaries, metadata, and dynamic status.",
    relations: ["Businesses", "Events", "Context"]
  },
  {
    title: "Businesses",
    description: "Commercial entities mapped to Places. Includes operational hours, category metadata, and real-time activity metrics.",
    relations: ["Places", "Reviews", "Analytics"]
  },
  {
    title: "Events",
    description: "Temporal occurrences tied to physical Places. Events have strict start and end times, influencing local Context and Mobility.",
    relations: ["Places", "Communities", "Time"]
  },
  {
    title: "Routes",
    description: "Polyline representations of movement between two or more Places, optimized for various modes (walking, transit, cycling).",
    relations: ["Places", "Traffic", "Weather"]
  },
  {
    title: "Communities",
    description: "Aggregated representations of social groups operating within specific geographic bounds or shared interests.",
    relations: ["Groups", "Events", "Users"]
  },
  {
    title: "Intent",
    description: "The semantic representation of a user's goal (e.g., 'Find coffee quickly'), separated from their literal query string.",
    relations: ["Context", "Places", "Search"]
  },
  {
    title: "Context",
    description: "The multi-dimensional state (time, weather, location, history) used to evaluate Intent and modify Recommendations.",
    relations: ["Weather", "Traffic", "Time"]
  },
  {
    title: "Weather",
    description: "Real-time and forecasted environmental conditions. Often used as a primary modifier for the Context and Route engines.",
    relations: ["Places", "Context", "Routes"]
  },
  {
    title: "Transit",
    description: "Formal public transportation schedules, delays, and real-time vehicle positioning.",
    relations: ["Routes", "Places", "Traffic"]
  },
  {
    title: "Traffic",
    description: "Real-time congestion and historical flow metrics affecting specific polylines or bounding boxes.",
    relations: ["Routes", "Transit", "Context"]
  },
  {
    title: "Notifications",
    description: "Asynchronous, multi-channel messaging (push, email, SMS) triggered by spatial thresholds or temporal events.",
    relations: ["Users", "Webhooks", "Events"]
  },
  {
    title: "Search",
    description: "The discovery engine. Accepts Intent and Context to return relevance-ranked Places, Events, or Businesses.",
    relations: ["Intent", "Places", "Context"]
  },
  {
    title: "Analytics",
    description: "Aggregated, privacy-preserving metrics regarding API usage, spatial queries, and resource engagement.",
    relations: ["Projects", "Audit Logs"]
  },
  {
    title: "Permissions",
    description: "Granular access control policies dictating exactly which Users or Keys can perform specific operations on Resources.",
    relations: ["Users", "Developer Keys", "Organizations"]
  },
  {
    title: "Sessions",
    description: "Temporary cryptographic tokens representing an active, authenticated connection between a User and the API.",
    relations: ["Users", "Tokens", "Audit Logs"]
  },
  {
    title: "Developer Keys",
    description: "Long-lived, scoped credentials used for server-to-server authentication. Never to be exposed in client applications.",
    relations: ["Projects", "Permissions", "Audit Logs"]
  },
  {
    title: "Webhooks",
    description: "HTTP callbacks triggered by asynchronous state changes within the platform, enabling event-driven architectures.",
    relations: ["Events", "Projects", "Audit Logs"]
  },
  {
    title: "Realtime Streams",
    description: "WebSocket or Server-Sent Events connections for subscribing to high-frequency updates, such as live Transit locations.",
    relations: ["Transit", "Traffic", "Sessions"]
  }
];

export const errorModelData = [
  {
    category: "400 Bad Request",
    description: "The request was malformed. This usually indicates a missing required parameter, invalid JSON syntax, or failing schema validation. The response body will contain specific 'validation_details'."
  },
  {
    category: "401 Unauthorized",
    description: "Authentication failed. The Developer Key is missing, invalid, or expired. Ensure the Authorization header is correctly formatted as 'Bearer <token>'."
  },
  {
    category: "403 Forbidden",
    description: "Authentication succeeded, but the credential lacks the necessary permission scope to perform the requested operation on the specific resource."
  },
  {
    category: "404 Not Found",
    description: "The requested resource does not exist. Ensure the resource ID in the URL path is correct and that the resource hasn't been deleted."
  },
  {
    category: "409 Conflict",
    description: "The request conflicts with the current state of the resource. Often occurs during concurrent updates or attempting to create a resource with a unique constraint that already exists."
  },
  {
    category: "422 Unprocessable Entity",
    description: "The syntax is correct, but the semantic content is invalid. For example, providing a coordinate that is outside the supported geographic bounds."
  },
  {
    category: "429 Too Many Requests",
    description: "The Project has exceeded its rate limit. The response includes a 'Retry-After' header indicating when the request can be safely retried."
  },
  {
    category: "500 Internal Server Error",
    description: "An unexpected error occurred on Rheole's infrastructure. These are actively monitored. The response will include a 'Request-Id' which should be provided to support."
  },
  {
    category: "503 Service Unavailable",
    description: "The API is temporarily offline for maintenance or experiencing extreme load. Implement exponential backoff when encountering this error."
  }
];

export const authenticationData = [
  {
    title: "API Keys",
    description: "The simplest form of authentication. Long-lived strings used for server-to-server communication. Must be kept strictly confidential and passed via the Authorization header."
  },
  {
    title: "OAuth 2.0",
    description: "The standard for delegating access. Used when an application needs to act on behalf of a Rheole User without handling their passwords directly."
  },
  {
    title: "Service Accounts",
    description: "Special accounts representing applications or virtual machines, rather than human users. Used for automated, background processing tasks."
  },
  {
    title: "Project Scopes",
    description: "Every Developer Key is bound to a specific Project. A key created for the 'Staging' project physically cannot access data in the 'Production' project."
  },
  {
    title: "Permission Scopes",
    description: "Granular string arrays (e.g., 'places:read', 'events:write') that strictly define what operations a token is permitted to execute."
  },
  {
    title: "Session Tokens",
    description: "Short-lived JWTs (JSON Web Tokens) generated upon user login, used primarily for client-side applications authenticating directly to the platform."
  }
];

export const bestPracticesData = [
  {
    title: "Idempotency",
    description: "Always include an 'Idempotency-Key' header for POST requests. This ensures that if a network failure occurs and you retry the request, the operation is not duplicated on our servers."
  },
  {
    title: "Pagination",
    description: "List endpoints return a maximum of 100 resources. Always implement cursor-based pagination using the 'next_cursor' provided in the response metadata rather than offset/limit."
  },
  {
    title: "Expansion",
    description: "Avoid 'N+1' query problems. Use the 'expand' query parameter to fetch related resources in a single API call (e.g., '?expand=business.reviews')."
  },
  {
    title: "Exponential Backoff",
    description: "When encountering 429 (Rate Limit) or 503 (Service Unavailable) errors, implement retry logic with exponential backoff and random jitter to avoid thundering herd problems."
  },
  {
    title: "Version Headers",
    description: "Explicitly pin your API version using the 'Rheole-Version' header (e.g., '2025-10-15'). Do not rely on the account default, as this makes your codebase fragile during upgrades."
  },
  {
    title: "Caching",
    description: "Respect the 'Cache-Control' headers returned by the API. High-frequency changing data (like Traffic) has short TTLs, while static metadata (like Place details) can be cached aggressively."
  }
];

export const comparisonData = [
  {
    conventional: "Endpoint lists. Documentation is merely an alphabetical dump of available URLs.",
    ambient: "Resource-first. Documentation is structured around logical entities (Places, Events) and their relationships."
  },
  {
    conventional: "Minimal context. Explains 'how' to call the endpoint, but rarely explains 'why' or 'when'.",
    ambient: "Context-rich. Provides architectural reasoning, best practices, and common pitfalls for every resource."
  },
  {
    conventional: "Static navigation. Developers must manually search through massive, monolithic pages.",
    ambient: "Intelligent discovery. Semantic search and interconnected reference graphs make discovery instant."
  },
  {
    conventional: "Technical terminology. Written exclusively for backend engineers.",
    ambient: "Developer-centred. Written with exceptional clarity, understandable by product managers and engineers alike."
  },
  {
    conventional: "Limited relationships. Endpoints are treated as isolated silos.",
    ambient: "Connected knowledge. Documentation actively surfaces related SDK methods, guides, and related REST APIs."
  }
];

export const faqsData = [
  { q: "Where should I start?", a: "Start with the Authentication and Versioning guides. Understanding how to securely construct a request and pin your API version is fundamental before interacting with any specific resource." },
  { q: "How are endpoints organised?", a: "Endpoints are organised around RESTful, resource-oriented architecture. URLs map to logical entities (e.g., /v1/places, /v1/events) rather than actions." },
  { q: "How do I migrate versions?", a: "We release API versions using a date-based format (YYYY-MM-DD). You can upgrade versions via the Developer Dashboard, which will provide a detailed migration guide for any breaking changes." },
  { q: "What resources require authentication?", a: "Every single resource in the Rheole platform requires authentication. There are no completely public endpoints. Unauthenticated requests will immediately return a 401 Unauthorized." },
  { q: "How do SDKs relate to REST APIs?", a: "Our SDKs (TypeScript, Python, Go, iOS, Android) are idiomatic wrappers around the REST APIs. They handle authentication, retries, and pagination automatically. We strongly recommend using SDKs over raw REST calls." },
  { q: "How are realtime resources documented?", a: "Realtime resources (WebSockets) are documented alongside their REST equivalents, clearly indicating the subscription message formats and expected event payloads." },
  { q: "How do I discover related endpoints?", a: "Our Reference Graph automatically injects 'Related Resources' links at the bottom of every endpoint page. Furthermore, our Semantic API Discovery search allows you to search by intent (e.g., 'find traffic') to locate the correct endpoint." },
  { q: "What is the rate limit?", a: "Rate limits are bound to your Project tier. The standard tier allows 1,000 requests per minute. Limits are returned dynamically in the HTTP response headers (X-RateLimit-Limit)." },
  { q: "Are SDKs auto-generated?", a: "No. While our OpenAPI specs are generated from code, our SDKs are hand-crafted by engineers to ensure they feel idiomatic and natural for the target programming language." },
  { q: "What happens if a request fails?", a: "Review the 'Error Model' section. Every error returns a standardized JSON payload containing a human-readable message, a specific error code, and often a 'recovery_suggestion' string." },
  { q: "How do I report a bug in the documentation?", a: "Every reference page has a 'Provide Feedback' button at the bottom. We treat documentation bugs with the same severity as platform outages." },
  { q: "Can I download the OpenAPI spec?", a: "Yes, the complete OpenAPI 3.1 specification is available for download, allowing you to generate your own clients or import the collection into tools like Postman or Insomnia." },
  { q: "How long are old API versions supported?", a: "We guarantee support for all API versions for a minimum of 24 months after they have been superseded by a newer version." },
  { q: "What is 'Expansion'?", a: "Expansion allows you to request nested relationships within a single API call. Instead of fetching a Place, and then making a second call to fetch its associated Business, you can request '?expand=business' to retrieve both simultaneously." },
  { q: "How do I test my integration safely?", a: "Every Account includes isolated 'Test Mode' Projects. Requests made using Test API Keys will never impact production data or incur billing charges." }
];
