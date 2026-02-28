export interface Project {
  slug: string
  title: string
  tagline: string
  category: string
  description: string
  thumbnail: string
  techStack: {
    frontend: string[]
    backend: string[]
    database: string[]
    apis: string[]
    deployment: string[]
  }
  problem: string
  goal: string
  audience: string
  solution: string
  features: string[]
  architecture: string
  process: {
    planning: string
    uiux: string
    challenges: string
    solutions: string
  }
  results: {
    performance: string
    metrics: string
    growth: string
  }
  liveUrl: string
  githubUrl: string
  screenshots: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    slug: "nexus-saas-platform",
    title: "Nexus SaaS Platform",
    tagline: "Enterprise project management reimagined",
    category: "SaaS",
    description: "A comprehensive SaaS platform for enterprise project management with real-time collaboration, Gantt charts, and AI-powered task prioritization.",
    thumbnail: "/images/projects/nexus.jpg",
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "GraphQL"],
      database: ["PostgreSQL", "Redis"],
      apis: ["Stripe API", "SendGrid", "OpenAI API"],
      deployment: ["Vercel", "AWS", "Docker"],
    },
    problem: "Enterprise teams struggled with fragmented project management tools that lacked real-time collaboration and intelligent task prioritization.",
    goal: "Build a unified platform that combines project tracking, real-time collaboration, and AI-driven insights to boost team productivity by 40%.",
    audience: "Mid-size to enterprise companies with distributed teams of 50-500 employees.",
    solution: "Designed a modular architecture with real-time WebSocket connections, a custom Gantt chart engine, and OpenAI-powered smart scheduling that adapts to team capacity.",
    features: [
      "Real-time collaborative editing with conflict resolution",
      "AI-powered task prioritization and deadline prediction",
      "Custom Gantt chart engine with drag-and-drop",
      "Role-based access control with SSO integration",
      "Automated reporting and analytics dashboard",
    ],
    architecture: "Microservices architecture with event-driven communication via Redis pub/sub. Frontend uses Next.js App Router with server components for optimal performance.",
    process: {
      planning: "Conducted stakeholder interviews and competitive analysis. Created user journey maps and defined MVP features through a 2-week discovery sprint.",
      uiux: "Designed a clean, information-dense UI with progressive disclosure. Used Figma for prototyping with a design system of 60+ reusable components.",
      challenges: "Real-time sync across distributed users was complex. The Gantt chart needed to handle 10,000+ tasks without performance degradation.",
      solutions: "Implemented operational transform for real-time editing and virtual scrolling with canvas rendering for the Gantt chart.",
    },
    results: {
      performance: "First Contentful Paint under 1.2s. Lighthouse score of 96.",
      metrics: "40% reduction in project delivery time for beta users.",
      growth: "2,000+ active users within 3 months of launch. $50K MRR.",
    },
    liveUrl: "#",
    githubUrl: "#",
    screenshots: [],
  },
  {
    slug: "vortex-ecommerce",
    title: "Vortex E-Commerce",
    tagline: "Next-generation shopping experience",
    category: "E-commerce",
    description: "A high-performance e-commerce platform with AR product previews, personalized recommendations, and seamless checkout experience.",
    thumbnail: "/images/projects/vortex.jpg",
    techStack: {
      frontend: ["Next.js", "React", "Three.js", "Framer Motion"],
      backend: ["Node.js", "NestJS"],
      database: ["MongoDB", "Elasticsearch"],
      apis: ["Stripe", "Shippo", "Algolia"],
      deployment: ["Vercel", "AWS S3", "CloudFront"],
    },
    problem: "Traditional e-commerce platforms offered flat product images and generic recommendations, leading to high return rates and low conversion.",
    goal: "Create an immersive shopping experience with 3D/AR product visualization and AI-driven personalization to reduce returns by 30%.",
    audience: "Fashion and furniture retailers targeting millennials and Gen-Z consumers.",
    solution: "Built a WebGL-powered product viewer with AR capabilities, combined with a recommendation engine trained on user behavior patterns.",
    features: [
      "3D product visualization with AR try-on",
      "AI-powered personalized recommendations",
      "One-click checkout with saved preferences",
      "Real-time inventory management",
      "Multi-currency and multi-language support",
    ],
    architecture: "JAMstack architecture with Next.js ISR for product pages. Headless CMS for content management with a separate microservice for recommendation engine.",
    process: {
      planning: "Analyzed competitor platforms and identified UX friction points. Defined a phased rollout starting with core e-commerce, then AR features.",
      uiux: "Mobile-first design with gesture-based navigation. Created an immersive product detail page with 360-degree view as the centerpiece.",
      challenges: "3D model loading performance was a bottleneck. AR feature required camera permissions and fallback for unsupported devices.",
      solutions: "Implemented progressive loading with LOD (Level of Detail) for 3D models and a graceful degradation strategy for AR features.",
    },
    results: {
      performance: "Average page load time of 1.8s. 99.9% uptime.",
      metrics: "28% reduction in product returns. 35% increase in conversion rate.",
      growth: "150K monthly active users. Featured on ProductHunt with 500+ upvotes.",
    },
    liveUrl: "#",
    githubUrl: "#",
    screenshots: [],
  },
  {
    slug: "atlas-travel-booking",
    title: "Atlas Travel Booking",
    tagline: "Discover the world, effortlessly",
    category: "Travel",
    description: "An intelligent travel booking platform with dynamic pricing, personalized itinerary planning, and real-time flight tracking.",
    thumbnail: "/images/projects/atlas.jpg",
    techStack: {
      frontend: ["React", "Next.js", "Mapbox GL", "D3.js"],
      backend: ["Python", "FastAPI", "Celery"],
      database: ["PostgreSQL", "Redis", "TimescaleDB"],
      apis: ["Amadeus API", "Google Maps", "OpenWeather"],
      deployment: ["GCP", "Kubernetes", "Terraform"],
    },
    problem: "Travel planning was fragmented across multiple apps and websites, making it difficult to compare options and create cohesive itineraries.",
    goal: "Build a one-stop platform that simplifies travel planning with smart recommendations, dynamic pricing alerts, and seamless booking flow.",
    audience: "Frequent travelers and adventure seekers aged 25-45.",
    solution: "Created a unified travel platform with map-based exploration, AI itinerary builder, and a price prediction algorithm that saved users an average of 20% on bookings.",
    features: [
      "Interactive map-based destination exploration",
      "AI-powered itinerary builder",
      "Dynamic pricing with prediction alerts",
      "Real-time flight and accommodation tracking",
      "Social sharing and collaborative trip planning",
    ],
    architecture: "Event-driven architecture with Celery for background tasks like price monitoring. Frontend uses React with Mapbox GL for interactive map experiences.",
    process: {
      planning: "Conducted user research with 200+ frequent travelers. Mapped the end-to-end booking journey to identify pain points.",
      uiux: "Designed a map-first experience with contextual information panels. Used progressive disclosure to manage complexity.",
      challenges: "Aggregating data from multiple travel APIs with different formats and rate limits. Real-time price tracking required efficient data pipelines.",
      solutions: "Built a unified data normalization layer and implemented intelligent caching with TTL-based invalidation for price data.",
    },
    results: {
      performance: "Search results in under 2s. Real-time updates with 100ms latency.",
      metrics: "Users saved an average of 22% on bookings through price alerts.",
      growth: "50K registered users in 6 months. 4.8/5 app store rating.",
    },
    liveUrl: "#",
    githubUrl: "#",
    screenshots: [],
  },
  {
    slug: "pulse-health-dashboard",
    title: "Pulse Health Dashboard",
    tagline: "Healthcare analytics at your fingertips",
    category: "Web App",
    description: "A real-time healthcare analytics dashboard for hospital administrators with patient flow tracking, resource management, and predictive analytics.",
    thumbnail: "/images/projects/pulse.jpg",
    techStack: {
      frontend: ["React", "TypeScript", "D3.js", "Recharts"],
      backend: ["Node.js", "Express", "Socket.io"],
      database: ["PostgreSQL", "InfluxDB"],
      apis: ["HL7 FHIR", "Twilio", "Auth0"],
      deployment: ["AWS ECS", "CloudWatch", "Terraform"],
    },
    problem: "Hospital administrators lacked real-time visibility into patient flow, bed availability, and resource utilization, leading to operational inefficiencies.",
    goal: "Build a real-time dashboard that provides actionable insights to reduce patient wait times by 25% and improve resource utilization.",
    audience: "Hospital administrators, department heads, and healthcare operations managers.",
    solution: "Designed a real-time analytics platform with custom D3.js visualizations, predictive models for patient admission forecasting, and automated alert systems.",
    features: [
      "Real-time patient flow visualization",
      "Predictive analytics for admission forecasting",
      "Automated resource allocation recommendations",
      "Custom report builder with export capabilities",
      "Role-based dashboards for different stakeholders",
    ],
    architecture: "Real-time data pipeline using Socket.io for live updates. InfluxDB for time-series data storage. Modular dashboard with configurable widget system.",
    process: {
      planning: "Worked with hospital staff for 3 weeks to understand workflows. Created data flow diagrams and defined KPIs with stakeholders.",
      uiux: "Designed information-dense layouts with color-coded status indicators. Dark mode for 24/7 monitoring environments.",
      challenges: "HIPAA compliance and data security were paramount. Real-time processing of high-volume medical events.",
      solutions: "Implemented end-to-end encryption, audit logging, and data anonymization. Used stream processing for efficient real-time analytics.",
    },
    results: {
      performance: "Real-time updates with sub-second latency. 99.99% uptime SLA.",
      metrics: "30% reduction in patient wait times. 20% improvement in bed utilization.",
      growth: "Deployed in 12 hospitals. Processing 1M+ events per day.",
    },
    liveUrl: "#",
    githubUrl: "#",
    screenshots: [],
  },
  {
    slug: "echo-social-platform",
    title: "Echo Social Platform",
    tagline: "Where ideas resonate",
    category: "Web App",
    description: "A modern social media platform focused on long-form content with threaded discussions, content curation, and community-driven moderation.",
    thumbnail: "/images/projects/echo.jpg",
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Tiptap"],
      backend: ["Go", "gRPC", "GraphQL"],
      database: ["PostgreSQL", "Redis", "Neo4j"],
      apis: ["Cloudinary", "Perspective API", "WebPush"],
      deployment: ["GCP", "Cloud Run", "Cloudflare"],
    },
    problem: "Existing social platforms prioritized short-form content, leaving thoughtful creators without a space for meaningful, in-depth discussions.",
    goal: "Create a platform that rewards quality content through community curation and provides tools for structured, threaded conversations.",
    audience: "Writers, thinkers, and communities focused on knowledge sharing and in-depth discussion.",
    solution: "Built a rich text editor with collaborative features, a graph-based recommendation system, and a reputation-weighted community moderation system.",
    features: [
      "Rich text editor with markdown support and embeds",
      "Threaded discussions with branching conversations",
      "Community-driven content curation and moderation",
      "Graph-based personalized content feed",
      "Real-time notifications and activity feed",
    ],
    architecture: "Go microservices with gRPC for inter-service communication. Neo4j for social graph queries. GraphQL API gateway for flexible frontend data fetching.",
    process: {
      planning: "Surveyed 500+ content creators about their needs. Prioritized features using the RICE framework.",
      uiux: "Clean, reading-focused design inspired by Medium with added community features. Extensive A/B testing for engagement optimization.",
      challenges: "Graph-based feed algorithm needed to balance relevance, freshness, and diversity. Content moderation at scale required automation.",
      solutions: "Implemented a hybrid recommendation engine combining collaborative filtering with content-based signals. Used Perspective API for automated toxicity detection.",
    },
    results: {
      performance: "Feed generation in under 100ms. 98% uptime.",
      metrics: "Average session duration of 12 minutes. 70% day-7 retention rate.",
      growth: "25K active creators. 100K monthly readers within 6 months.",
    },
    liveUrl: "#",
    githubUrl: "#",
    screenshots: [],
  },
  {
    slug: "flux-design-system",
    title: "Flux Design System",
    tagline: "Consistency at scale",
    category: "UI/UX",
    description: "A comprehensive design system and component library used across 5 products, featuring 80+ accessible components with dark/light theme support.",
    thumbnail: "/images/projects/flux.jpg",
    techStack: {
      frontend: ["React", "TypeScript", "Storybook", "Radix UI"],
      backend: ["N/A"],
      database: ["N/A"],
      apis: ["Figma API", "Chromatic"],
      deployment: ["npm Registry", "Vercel", "Chromatic"],
    },
    problem: "Multiple product teams were building inconsistent UIs with duplicated effort, leading to poor user experience and slow development velocity.",
    goal: "Create a unified design system that reduces UI development time by 60% while ensuring accessibility and brand consistency across all products.",
    audience: "Internal engineering and design teams across 5 product lines.",
    solution: "Built a token-based design system with Radix UI primitives, comprehensive Storybook documentation, and automated visual regression testing.",
    features: [
      "80+ accessible React components",
      "Token-based theming with dark/light mode",
      "Comprehensive Storybook documentation",
      "Automated visual regression testing",
      "Figma to code sync pipeline",
    ],
    architecture: "Monorepo with Turborepo for package management. Component packages organized by atomic design principles. CI/CD pipeline with automated publishing.",
    process: {
      planning: "Audited existing UIs across all 5 products. Identified common patterns and created a unified component taxonomy.",
      uiux: "Designed tokens-first, then built components following atomic design. Created extensive usage guidelines and accessibility documentation.",
      challenges: "Achieving consensus across 5 teams with different needs. Maintaining backward compatibility while evolving the system.",
      solutions: "Established a design system governance council. Implemented semantic versioning with automated changelogs and migration guides.",
    },
    results: {
      performance: "Tree-shakeable bundle: average 2KB per component.",
      metrics: "60% reduction in UI development time. WCAG 2.1 AA compliance.",
      growth: "Adopted by all 5 product teams. 200+ internal contributors.",
    },
    liveUrl: "#",
    githubUrl: "#",
    screenshots: [],
  },
]

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer & Team Lead",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description: "Leading an 8-member development team building scalable web applications. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
    achievements: [
      "Led the migration from monolithic to microservices architecture",
      "Reduced deployment time by 70% through CI/CD optimization",
      "Mentored 5 junior developers to mid-level promotions",
      "Achieved 99.9% uptime across all production services",
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "InnovateTech",
    period: "2021 - 2023",
    description: "Developed and maintained multiple web applications serving 100K+ users. Collaborated with cross-functional teams to deliver features on time.",
    achievements: [
      "Built a real-time collaboration feature used by 50K+ users",
      "Optimized database queries reducing load time by 45%",
      "Implemented comprehensive testing strategy achieving 90% coverage",
      "Led the frontend migration from Vue.js to React",
    ],
    technologies: ["React", "Vue.js", "Python", "Django", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2020 - 2021",
    description: "Crafted pixel-perfect, responsive web interfaces for high-profile clients. Specialized in animation and interactive experiences.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Increased client satisfaction scores by 35%",
      "Built reusable component library adopted across the agency",
      "Won internal hackathon for best developer experience tool",
    ],
    technologies: ["React", "TypeScript", "GSAP", "Three.js", "Sass", "Webpack"],
  },
  {
    title: "Junior Web Developer",
    company: "StartupHub",
    period: "2019 - 2020",
    description: "Started career building web applications for early-stage startups. Gained full-stack experience across multiple technology stacks.",
    achievements: [
      "Shipped 3 MVPs that secured seed funding for clients",
      "Learned and applied 5+ new frameworks in the first year",
      "Contributed to open-source projects with 500+ GitHub stars",
      "Recognized as fastest-growing team member",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Git"],
  },
]

export const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 82 },
  { name: "PostgreSQL", level: 85 },
  { name: "AWS / Cloud", level: 80 },
  { name: "Docker / DevOps", level: 78 },
  { name: "System Design", level: 85 },
]

export const techCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "Go", "GraphQL", "REST APIs", "WebSockets"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Neo4j", "InfluxDB"],
  },
  {
    title: "DevOps & Tools",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Git"],
  },
]

export const stats = [
  { label: "Years Experience", value: 4 },
  { label: "Projects Delivered", value: 30 },
  { label: "Team Members Led", value: 8 },
  { label: "Happy Clients", value: 25 },
]

export const categories = ["All", "SaaS", "E-commerce", "Travel", "Web App", "UI/UX"]

export interface ServiceDetail {
  slug: string
  icon: string
  title: string
  tagline: string
  description: string
  color: "primary" | "accent"
  heroFeatures: string[]
  overview: string
  process: { step: string; title: string; description: string }[]
  capabilities: { title: string; description: string }[]
  technologies: string[]
  deliverables: string[]
  faq: { question: string; answer: string }[]
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Premium Design",
    tagline: "Interfaces that convert, experiences that delight",
    description:
      "We craft beautiful, intuitive interfaces that put user experience at the forefront. Every pixel is purposeful, every interaction is intentional -- resulting in designs that drive engagement and conversions.",
    color: "primary",
    heroFeatures: [
      "Conversion-focused design strategy",
      "Pixel-perfect implementation",
      "Accessibility-first approach",
      "Data-driven iterations",
    ],
    overview:
      "At Subupee Infotech, our design team blends aesthetic excellence with behavioural psychology to create interfaces users love. We follow a research-driven process: user interviews, competitive audits, wireframes, high-fidelity prototypes, and rigorous usability testing -- ensuring every screen performs as beautifully as it looks.",
    process: [
      { step: "01", title: "Discovery & Research", description: "We start with deep stakeholder interviews, user persona mapping, and competitive audits to understand your market, audience, and business goals." },
      { step: "02", title: "Wireframing & IA", description: "Low-fidelity wireframes and information architecture diagrams lay out the user flows, ensuring every journey is logical and intuitive." },
      { step: "03", title: "Visual Design", description: "High-fidelity mockups with your brand identity -- typography, colour palette, iconography, and micro-interactions -- bring the product to life." },
      { step: "04", title: "Prototyping & Testing", description: "Interactive Figma prototypes are tested with real users. We iterate based on feedback until the experience scores above benchmark." },
      { step: "05", title: "Design System Handoff", description: "A comprehensive design system with tokens, component specs, and developer documentation ensures pixel-perfect implementation." },
    ],
    capabilities: [
      { title: "Product Design", description: "End-to-end SaaS and mobile app design from concept to launch-ready screens." },
      { title: "Design Systems", description: "Scalable component libraries with theming, dark mode, and accessibility baked in." },
      { title: "Responsive & Adaptive", description: "Layouts that feel native on every device -- mobile, tablet, desktop, and ultrawide." },
      { title: "Motion & Micro-interactions", description: "Purposeful animations that guide attention and provide delightful feedback." },
      { title: "Conversion Optimization", description: "A/B-tested layouts, CTA placement strategies, and funnel analysis to maximise ROI." },
      { title: "Accessibility (WCAG 2.1)", description: "Colour contrast audits, keyboard navigation, and screen-reader compatibility." },
    ],
    technologies: ["Figma", "Adobe XD", "Framer", "Storybook", "Tailwind CSS", "Radix UI", "Lottie", "After Effects"],
    deliverables: [
      "User persona documents",
      "Wireframe kit (low & high fidelity)",
      "Interactive Figma prototype",
      "Design system with tokens",
      "Component library documentation",
      "Usability test reports",
    ],
    faq: [
      { question: "How long does a typical UI/UX project take?", answer: "Most projects run 4-8 weeks depending on scope. A landing page redesign may take 2 weeks, while a full SaaS product design typically takes 6-8 weeks." },
      { question: "Do you provide the design source files?", answer: "Absolutely. You receive full Figma source files, exported assets, a design system, and developer handoff documentation." },
      { question: "Can you work with our existing brand guidelines?", answer: "Yes. We seamlessly integrate with existing brand books, extending them into digital design systems while maintaining brand consistency." },
    ],
  },
  {
    slug: "full-stack-development",
    icon: "Code2",
    title: "Full Stack Development",
    tagline: "Scalable, performant, production-ready applications",
    description:
      "From React frontends to robust Node.js and Java backends, we architect and build applications that scale. Our engineering team delivers clean, tested, maintainable code that powers businesses at every stage.",
    color: "accent",
    heroFeatures: [
      "React / Next.js expertise",
      "Microservices architecture",
      "99.9% uptime guarantee",
      "CI/CD automated deployments",
    ],
    overview:
      "Subupee Infotech engineers build software that lasts. We follow industry best practices -- clean architecture, comprehensive testing, code reviews, and automated deployments -- to deliver applications that are fast, secure, and easy to maintain. Whether you need an MVP in 4 weeks or a full enterprise platform, we have the stack and the process.",
    process: [
      { step: "01", title: "Requirements & Architecture", description: "We define technical requirements, choose the optimal tech stack, and design the system architecture with scalability in mind." },
      { step: "02", title: "Sprint Planning", description: "Work is broken into 2-week agile sprints with clear deliverables, daily standups, and transparent progress tracking." },
      { step: "03", title: "Development & Review", description: "Feature branches, pull requests, and mandatory code reviews ensure every line of code meets our quality standards." },
      { step: "04", title: "Testing & QA", description: "Unit tests, integration tests, and end-to-end tests run automatically. Manual QA catches edge cases before staging." },
      { step: "05", title: "Deployment & Monitoring", description: "Automated CI/CD pipelines deploy to staging and production. Real-time monitoring and alerting keep everything running smoothly." },
    ],
    capabilities: [
      { title: "Frontend Engineering", description: "React, Next.js, TypeScript -- server components, SSR, ISR, and optimised client hydration." },
      { title: "Backend Systems", description: "Node.js, Java Spring Boot, Python -- REST APIs, GraphQL, WebSockets, and message queues." },
      { title: "Database Design", description: "PostgreSQL, MongoDB, Redis -- schema design, migrations, indexing, and query optimization." },
      { title: "Cloud Infrastructure", description: "AWS, GCP, Vercel -- containerised deployments, serverless functions, and auto-scaling." },
      { title: "DevOps & CI/CD", description: "Docker, Kubernetes, GitHub Actions -- automated testing, staging environments, and zero-downtime deploys." },
      { title: "Performance Engineering", description: "Lighthouse audits, bundle optimization, lazy loading, caching strategies, and CDN configuration." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Java", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Vercel"],
    deliverables: [
      "Production-ready source code",
      "API documentation (Swagger / GraphQL schema)",
      "Database schema & migration scripts",
      "CI/CD pipeline configuration",
      "Deployment runbook",
      "Performance benchmark report",
    ],
    faq: [
      { question: "What tech stack do you recommend?", answer: "For most web apps we recommend Next.js + TypeScript on the frontend, Node.js or Java on the backend, and PostgreSQL for the database. We tailor the stack to your specific needs." },
      { question: "Do you provide ongoing maintenance?", answer: "Yes. We offer retainer plans for bug fixes, feature updates, dependency upgrades, and 24/7 monitoring." },
      { question: "Can you take over an existing codebase?", answer: "Absolutely. We conduct a thorough code audit, create a technical debt roadmap, and incrementally improve the codebase while shipping new features." },
    ],
  },
  {
    slug: "api-integration",
    icon: "Plug",
    title: "API Integration",
    tagline: "Connect every system, automate every workflow",
    description:
      "We specialise in connecting disparate systems through clean, reliable API integrations. From CRM and payment gateways to custom automation pipelines, we make your software ecosystem work in harmony.",
    color: "primary",
    heroFeatures: [
      "REST & GraphQL expertise",
      "Third-party API specialists",
      "Real-time data sync",
      "Automation workflows",
    ],
    overview:
      "Modern businesses run on interconnected software. At Subupee Infotech, we build the bridges -- integrating third-party services, building custom APIs, and creating automation workflows that eliminate manual work. We handle rate limits, error recovery, data mapping, and monitoring so your integrations are rock-solid.",
    process: [
      { step: "01", title: "Integration Audit", description: "We map your current systems, identify data flows, and design the optimal integration architecture." },
      { step: "02", title: "API Design", description: "RESTful or GraphQL API design with versioning, authentication, rate limiting, and comprehensive documentation." },
      { step: "03", title: "Implementation", description: "Robust integration code with retry logic, circuit breakers, and graceful error handling for every edge case." },
      { step: "04", title: "Data Mapping & Sync", description: "Transform and normalise data between systems with validation pipelines and conflict resolution." },
      { step: "05", title: "Monitoring & Alerting", description: "Real-time dashboards track API health, response times, error rates, and data throughput." },
    ],
    capabilities: [
      { title: "CRM Integrations", description: "Salesforce, HubSpot, Zoho -- bidirectional sync of contacts, deals, and activities." },
      { title: "Payment Gateways", description: "Stripe, Razorpay, PayPal -- checkout flows, subscription management, and reconciliation." },
      { title: "Communication APIs", description: "Twilio, SendGrid, WhatsApp Business -- transactional messaging and notification systems." },
      { title: "Cloud Services", description: "AWS, GCP, Azure -- storage, compute, AI/ML, and serverless function orchestration." },
      { title: "ERP & Accounting", description: "QuickBooks, Xero, SAP -- invoice sync, inventory management, and financial reporting." },
      { title: "Custom Webhooks & Events", description: "Event-driven architectures with webhooks, message queues, and real-time streaming." },
    ],
    technologies: ["REST APIs", "GraphQL", "gRPC", "WebSockets", "RabbitMQ", "Kafka", "Redis Pub/Sub", "OAuth 2.0", "JWT", "Swagger/OpenAPI"],
    deliverables: [
      "Integration architecture document",
      "API documentation (OpenAPI / GraphQL schema)",
      "Data mapping specifications",
      "Error handling & retry playbook",
      "Monitoring dashboard setup",
      "Integration test suite",
    ],
    faq: [
      { question: "Can you integrate with any third-party API?", answer: "Yes. We have experience with 100+ third-party APIs and can integrate with any service that provides a documented API or webhook system." },
      { question: "How do you handle API rate limits?", answer: "We implement intelligent rate limiting with request queuing, exponential backoff, and caching to stay within provider limits while maximising throughput." },
      { question: "What about legacy systems without APIs?", answer: "We can build middleware layers, use database-level integration, or create screen-scraping solutions as a last resort to connect legacy systems." },
    ],
  },
  {
    slug: "payment-integration",
    icon: "CreditCard",
    title: "Payment Integration",
    tagline: "Secure transactions, seamless checkout experiences",
    description:
      "We implement end-to-end payment solutions -- from simple checkout buttons to complex subscription billing, multi-currency support, and marketplace split payments. Security and compliance are non-negotiable.",
    color: "accent",
    heroFeatures: [
      "PCI DSS compliant",
      "Multi-currency & multi-gateway",
      "Subscription & recurring billing",
      "Fraud detection integration",
    ],
    overview:
      "Payment is the lifeblood of any digital business. At Subupee Infotech, we engineer payment systems that are secure, reliable, and frictionless. From one-click checkouts to complex marketplace disbursements, we handle the complexity so your customers enjoy a seamless experience and you get paid on time, every time.",
    process: [
      { step: "01", title: "Payment Strategy", description: "We analyse your business model, target markets, and transaction volumes to recommend the optimal payment architecture." },
      { step: "02", title: "Gateway Selection", description: "We evaluate gateways (Stripe, Razorpay, PayPal, etc.) based on fees, geography, features, and compliance requirements." },
      { step: "03", title: "Checkout Implementation", description: "Frictionless checkout flows with saved cards, one-click payments, and guest checkout -- optimised for conversion." },
      { step: "04", title: "Security & Compliance", description: "PCI DSS compliance, tokenisation, 3D Secure, and fraud detection integration to protect every transaction." },
      { step: "05", title: "Reconciliation & Reporting", description: "Automated settlement tracking, refund management, and financial reporting dashboards." },
    ],
    capabilities: [
      { title: "One-Time Payments", description: "Simple checkout flows with card, UPI, net banking, and wallet support." },
      { title: "Subscription Billing", description: "Recurring charges, plan upgrades/downgrades, proration, and dunning management." },
      { title: "Marketplace Payments", description: "Split payments, escrow, vendor payouts, and commission management for multi-vendor platforms." },
      { title: "Multi-Currency", description: "Accept payments in 135+ currencies with automatic exchange rate handling." },
      { title: "Invoicing & Receipts", description: "Automated invoice generation, email receipts, and tax calculation (GST, VAT)." },
      { title: "Refunds & Disputes", description: "Automated refund processing, chargeback management, and dispute resolution workflows." },
    ],
    technologies: ["Stripe", "Razorpay", "PayPal", "Cashfree", "PhonePe", "Webhooks", "PCI DSS", "3D Secure", "Tokenisation", "SCA"],
    deliverables: [
      "Payment architecture document",
      "Checkout flow implementation",
      "Webhook handler setup",
      "Reconciliation dashboard",
      "PCI compliance documentation",
      "Payment test suite & sandbox",
    ],
    faq: [
      { question: "Which payment gateway do you recommend?", answer: "For Indian markets, Razorpay is excellent. For global businesses, Stripe is our top pick. We often implement multiple gateways for redundancy and geo-routing." },
      { question: "How do you handle failed payments?", answer: "We implement smart retry logic, dunning emails for subscriptions, and fallback gateway routing to maximise payment success rates." },
      { question: "Is the checkout PCI compliant?", answer: "Always. We use hosted payment fields or redirect-based flows that keep card data off your servers, ensuring PCI DSS SAQ-A compliance." },
    ],
  },
]
