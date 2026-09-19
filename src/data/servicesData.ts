import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Website Development',
    shortDesc: 'SEO-friendly, ultra-fast and conversion-focused bespoke websites designed to scale with your brand.',
    category: 'Development',
    icon: 'Globe',
    heroH1: 'Bespoke Website Development Engineered for Speed, SEO & Conversions',
    problemStatement: 'Most off-the-shelf templates and bloated page builders suffer from sluggish Core Web Vitals, weak security, and dismal conversion rates that cost growing brands thousands in lost pipeline every quarter.',
    ourSolution: 'We engineer modular, custom-coded websites built on modern architectures (Next.js, Tailwind, headless CMS, and optimized PHP/WordPress). Every pixel is crafted for lightning-quick load times, search engine dominance, and measurable customer acquisition.',
    servicesIncluded: [
      'Custom Corporate & Brand Websites',
      'High-Converting Landing Pages',
      'Headless CMS Development (Sanity, Strapi, WordPress Headless)',
      'Core Web Vitals & Speed Optimization',
      'Accessibility & WCAG Compliance',
      'Multi-Language & International SEO Architecture'
    ],
    features: [
      { title: 'Sub-Second Load Times', desc: 'Optimized server-side rendering, asset minification, and global edge CDN caching.' },
      { title: 'SEO-First Semantic Markup', desc: 'Strict Schema.org structured data, semantic HTML5, and automated XML sitemaps.' },
      { title: 'Conversion Funnel Design', desc: 'Strategically positioned lead magnets, sticky CTAs, and frictionless inquiry forms.' },
      { title: 'Enterprise-Grade Security', desc: 'Zero-trust architecture, automated SSL, CSRF protection, and DDoS mitigation.' }
    ],
    benefits: [
      'Higher organic ranking on Google across competitive commercial keywords',
      'Drastically reduced bounce rates with snappy 0.6s page transitions',
      'Flexible backend management that your marketing team can edit effortlessly',
      'Future-proof code base ready to integrate with your CRM and analytics stack'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'WordPress / Headless', 'Vercel', 'AWS CloudFront'],
    process: [
      { step: '01', title: 'Strategy & UX Blueprint', desc: 'Auditing your market, user personas, keyword targets, and conversion paths.' },
      { step: '02', title: 'Figma UI/UX Prototyping', desc: 'Crafting responsive desktop and mobile design layouts with design systems.' },
      { step: '03', title: 'Full-Stack Development', desc: 'Writing clean, accessible TypeScript code with modular component architecture.' },
      { step: '04', title: 'Testing & Core Web Vitals', desc: 'Auditing 95+ PageSpeed scores, cross-browser compatibility, and accessibility.' },
      { step: '05', title: 'Deploy & Post-Launch Support', desc: 'Seamless DNS transition, GA4 event tracking, and ongoing SLA maintenance.' }
    ],
    faqs: [
      { question: 'How long does a custom website take to build?', answer: 'Typically 3 to 6 weeks depending on scale, custom integrations, and content readiness. We provide a guaranteed milestone roadmap before writing code.' },
      { question: 'Will my internal team be able to edit text and images?', answer: 'Yes. We connect custom visual CMS dashboards (such as Headless WordPress or Sanity) allowing your team to update copy, blog posts, and landing pages without touching code.' },
      { question: 'Do you optimize for mobile and Core Web Vitals?', answer: 'Always. We test across 20+ device viewports to ensure 90+ mobile Google PageSpeed scores, optimal LCP, and zero cumulative layout shift.' }
    ],
    relatedServices: ['seo-services', 'web-application', 'performance-marketing'],
    relatedIndustries: ['saas', 'real-estate', 'healthcare', 'professional-services'],
    relatedLocations: ['moradabad', 'delhi', 'bangalore', 'usa', 'uk', 'uae'],
    startingPrice: '$1,200 / ₹85,000'
  },
  {
    id: 'web-application',
    slug: 'web-application-development',
    title: 'Web Application Development',
    shortDesc: 'Custom enterprise software, customer portals, and scalable cloud SaaS platforms built to handle complex workflows.',
    category: 'Development',
    icon: 'LayoutGrid',
    heroH1: 'Custom Web Application Development for Modern Enterprises',
    problemStatement: 'Off-the-shelf software rarely fits proprietary business workflows, while brittle internal spreadsheets create operational silos, compliance hazards, and manual bottlenecks.',
    ourSolution: 'We architect bespoke full-stack web applications with robust backend APIs, role-based access control (RBAC), real-time dashboards, and secure relational databases designed to handle millions of transactions.',
    servicesIncluded: [
      'Custom ERP & Enterprise Web Portals',
      'Client Dashboards & Billing Systems',
      'Internal Tooling & Workflow Automation',
      'Real-Time Collaborative Web Apps',
      'Database Architecture & Data Migration',
      'Legacy Code Modernization'
    ],
    features: [
      { title: 'Modular Microservices', desc: 'Decoupled API endpoints for seamless scaling and third-party connectivity.' },
      { title: 'Fine-Grained Permissions', desc: 'Strict multi-tenant security with role-based permissions and audit logs.' },
      { title: 'Real-Time Sync', desc: 'WebSocket and push-event streaming for instantaneous data collaboration.' },
      { title: 'Automated CI/CD', desc: 'Automated unit test suites, regression testing, and zero-downtime deployments.' }
    ],
    benefits: [
      'Eliminate repetitive manual admin tasks across your operational teams',
      'Consolidate disjointed SaaS subscriptions into one owned, proprietary asset',
      'Scale effortlessly as your active user base and transaction volume surge',
      'Full IP ownership with no recurring per-seat vendor licensing fees'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    process: [
      { step: '01', title: 'Systems Architecture', desc: 'Drafting data schemas, state flowcharts, and technical API contracts.' },
      { step: '02', title: 'Sprint-Based Development', desc: 'Delivering functional 2-week agile sprints with reviewable staging environments.' },
      { step: '03', title: 'Data Security Hardening', desc: 'Penetration testing, encryption at rest and in transit, and vulnerability scans.' },
      { step: '04', title: 'End-to-End QA', desc: 'Stress testing, load simulation, and cross-platform validation.' },
      { step: '05', title: 'Production Launch', desc: 'Automated database migrations, monitoring alert setup, and SLA onboarding.' }
    ],
    faqs: [
      { question: 'What backend technologies do you use for web apps?', answer: 'We specialize in Node.js, Express, Python, Laravel, and Go, paired with PostgreSQL, MySQL, Redis, and Supabase.' },
      { question: 'Can you integrate with our existing ERP or CRM database?', answer: 'Yes. We build custom bi-directional REST and GraphQL connectors to sync data seamlessly with SAP, Salesforce, HubSpot, or legacy on-prem systems.' }
    ],
    relatedServices: ['saas-development', 'api-integration', 'dedicated-developers'],
    relatedIndustries: ['finance', 'logistics', 'manufacturing', 'healthcare'],
    relatedLocations: ['bangalore', 'noida', 'delhi', 'usa', 'singapore'],
    startingPrice: '$2,800 / ₹1,95,000'
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'High-performance Android, iOS, and cross-platform React Native & Flutter apps with intuitive UX and offline capabilities.',
    category: 'Development',
    icon: 'Smartphone',
    heroH1: 'Native & Cross-Platform Mobile Apps Engineered to Delight Users',
    problemStatement: 'Low retention, buggy release cycles, and clunky mobile navigation can kill consumer adoption and sink app store ratings within days.',
    ourSolution: 'We build fluid, native-feeling mobile applications using React Native and Flutter. From biometric authentication to offline synchronization and push notification triggers, we deliver smooth 60fps experiences.',
    servicesIncluded: [
      'iOS & Android App Development',
      'React Native & Flutter Cross-Platform Solutions',
      'App Store Optimization (ASO) & Play Store Launch',
      'Offline-First Sync Architecture',
      'Payment Gateway & In-App Purchases (IAP)',
      'Real-Time Geolocation & Background Services'
    ],
    features: [
      { title: 'Native Device Hardware Access', desc: 'Seamless camera, GPS, biometric face/fingerprint ID, and NFC integration.' },
      { title: 'Offline-First Engine', desc: 'Local SQLite/WatermelonDB persistence with seamless background synchronization.' },
      { title: 'Targeted Push Notifications', desc: 'FCM and OneSignal push campaigns driven by user behavior triggers.' },
      { title: 'Store Submission Management', desc: 'Full compliance handling for Apple App Store and Google Play Store reviews.' }
    ],
    benefits: [
      'Save up to 40% development cost using a unified, maintainable cross-platform codebase',
      'Engage customers directly with contextual, personalized push notifications',
      'Maintain 4.8+ star app store reviews with crash-free session rates above 99.8%',
      'Ensure flawless operation even in low-connectivity environments'
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Kotlin', 'Swift', 'Firebase', 'GraphQL', 'Fastlane'],
    process: [
      { step: '01', title: 'User Journey Mapping', desc: 'Wireframing native gesture flows, touch ergonomics, and state transitions.' },
      { step: '02', title: 'Interactive Prototype', desc: 'Figma click-through validation to test tap targets and user flow.' },
      { step: '03', title: 'Core App Engineering', desc: 'Writing modular code with typed state management and offline storage.' },
      { step: '04', title: 'Device Lab Testing', desc: 'Testing across dozens of physical Android and iOS form factors.' },
      { step: '05', title: 'Store Deployment', desc: 'Publishing app listings, privacy policy compliance, and crash analytics.' }
    ],
    faqs: [
      { question: 'Should I choose React Native or Flutter?', answer: 'Both provide near-native performance. If your ecosystem already uses React and TypeScript, React Native offers great code sharing. For complex custom canvas animations, Flutter is also exceptional. We will recommend the optimal stack based on your product specs.' },
      { question: 'Do you handle the App Store and Google Play approvals?', answer: 'Yes, our team handles the entire submission lifecycle, including metadata, screenshots, review appeals, and compliance checks.' }
    ],
    relatedServices: ['web-application', 'api-integration', 'ai-automation'],
    relatedIndustries: ['ecommerce', 'healthcare', 'restaurants', 'logistics'],
    relatedLocations: ['mumbai', 'bangalore', 'delhi', 'uae', 'usa'],
    startingPrice: '$3,200 / ₹2,25,000'
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Automation & Agents',
    shortDesc: 'AI-powered workflows, intelligent autonomous agents, custom chatbots, CRM automation, and enterprise business process pipelines.',
    category: 'Automation',
    icon: 'Bot',
    heroH1: 'AI Automation Services for Modern Businesses to Scale Operations',
    problemStatement: 'High headcount costs, slow response times, and manual copy-pasting between CRMs, spreadsheets, and emails cause missed sales and burnt-out teams.',
    ourSolution: 'We build enterprise AI agents, automated lead qualification funnels, intelligent document extraction pipelines, and customized chatbots powered by OpenAI, Claude, and local LLMs tailored to your exact business knowledge.',
    servicesIncluded: [
      'Autonomous AI Agents & Multi-Agent Systems',
      'Intelligent Customer Support Chatbots',
      'Lead Qualification & Scoring Automations',
      'WhatsApp & Email Workflow Automation',
      'Document Parsing & OCR Data Extraction',
      'CRM Sync & Automated Follow-Up Sequences'
    ],
    features: [
      { title: 'Grounded Private Knowledge', desc: 'RAG (Retrieval-Augmented Generation) connected securely to your internal docs and catalog.' },
      { title: 'Omnichannel Integration', desc: 'Deploy across WhatsApp Business API, website chat, Slack, and email inboxes.' },
      { title: 'Autonomous Action Execution', desc: 'Agents can look up database records, issue refunds, book calendar slots, and update CRMs.' },
      { title: 'Human-in-the-Loop Safeguards', desc: 'Configurable escalation triggers routing complex queries to human staff instantly.' }
    ],
    benefits: [
      'Respond to inbound customer leads in 15 seconds 24/7 without growing headcount',
      'Cut routine customer support ticket volume by up to 65% autonomously',
      'Eliminate manual data entry between WhatsApp, forms, and your core database',
      'Increase lead-to-meeting booking conversions with instant conversational qualification'
    ],
    techStack: ['OpenAI API', 'LangChain', 'LlamaIndex', 'Python', 'Vector DB (Pinecone/pgvector)', 'WhatsApp API', 'Make / n8n', 'Node.js'],
    process: [
      { step: '01', title: 'Process & Data Audit', desc: 'Identifying highest-ROI operational bottlenecks and document structures.' },
      { step: '02', title: 'Knowledge Ingestion & RAG', desc: 'Vectorizing your company SOPs, product inventory, and customer guidelines.' },
      { step: '03', title: 'Workflow & Trigger Wiring', desc: 'Connecting webhooks to WhatsApp, CRM, email, and ERP databases.' },
      { step: '04', title: 'Hallucination Testing', desc: 'Rigorous red-teaming, boundary testing, and accuracy benchmarking.' },
      { step: '05', title: 'Live Deployment & Monitoring', desc: 'Real-time telemetry tracking token consumption, latency, and sentiment.' }
    ],
    faqs: [
      { question: 'Can the AI bot answer questions using our private company data?', answer: 'Yes. We build secure RAG vector pipelines so the AI only cites your approved documents, FAQs, and product catalogs without hallucinating or leaking internal secrets.' },
      { question: 'How do you integrate AI automation with WhatsApp?', answer: 'We connect directly with the official Meta WhatsApp Cloud API or Twilio, enabling your business to handle automated conversations, send template follow-ups, and trigger webhooks.' }
    ],
    relatedServices: ['crm-business-automation', 'api-integration', 'web-development'],
    relatedIndustries: ['real-estate', 'restaurants', 'healthcare', 'ecommerce', 'saas'],
    relatedLocations: ['delhi', 'gurgaon', 'bangalore', 'moradabad', 'usa', 'uae'],
    startingPrice: '$1,800 / ₹1,25,000'
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    shortDesc: 'Holistic search engine optimization, content marketing, technical audits, and organic growth strategies that drive measurable traffic.',
    category: 'Marketing',
    icon: 'TrendingUp',
    heroH1: 'Digital Marketing Services That Drive Measurable, Sustainable Growth',
    problemStatement: 'Unfocused marketing campaigns waste budget on vanity impressions and empty clicks that fail to generate pipeline, SQLs, or revenue.',
    ourSolution: 'We develop engineering-backed organic growth strategies combining technical SEO, intent-driven content clusters, social media distribution, and rigorous conversion rate optimization (CRO) to build compounding traffic engines.',
    servicesIncluded: [
      'Comprehensive Technical SEO Audits',
      'High-Intent Content Strategy & Copywriting',
      'Programmatic SEO & Content Clusters',
      'Local & International SEO Architecture',
      'Conversion Rate Optimization (CRO)',
      'Executive Social Media & Brand Growth'
    ],
    features: [
      { title: 'Intent-Based Keyword Architecture', desc: 'Targeting commercial and transactional search queries with real purchasing intent.' },
      { title: 'Technical Site Health', desc: 'Fixing crawl budget, indexation, duplicate content, and structured schema errors.' },
      { title: 'Authoritative Content Marketing', desc: 'Deep-dive technical guides, comparison landing pages, and lead-magnet whitepapers.' },
      { title: 'Transparent Bi-Weekly Reporting', desc: 'Detailed ranking shifts, organic impressions, and closed-loop revenue attribution.' }
    ],
    benefits: [
      'Build long-term organic defensibility that does not vanish when ad spend stops',
      'Lower blended customer acquisition cost (CAC) across your entire marketing mix',
      'Attract high-intent decision makers actively searching for your digital solutions',
      'Gain full visibility into which channels generate your highest lifetime value leads'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'GA4', 'Google Tag Manager', 'Looker Studio'],
    process: [
      { step: '01', title: 'Deep Technical & Competitor Audit', desc: 'Analyzing backlink profiles, crawl errors, keyword gaps, and site architecture.' },
      { step: '02', title: 'Semantic Cluster Strategy', desc: 'Mapping pillar pages and sub-topic articles to dominate buyer search intent.' },
      { step: '03', title: 'On-Page & Schema Implementation', desc: 'Fine-tuning internal linking, metadata, Schema.org entities, and page speed.' },
      { step: '04', title: 'Editorial Production & Promotion', desc: 'Publishing research-backed articles and generating authoritative citations.' },
      { step: '05', title: 'CRO & Funnel Refinement', desc: 'A/B testing page layouts, CTAs, and forms to maximize traffic conversion.' }
    ],
    faqs: [
      { question: 'Do you promise guaranteed #1 rankings on Google?', answer: 'No honest international agency promises guaranteed rankings, as Google search algorithms continuously evolve. Instead, we adhere strictly to white-hat technical excellence, semantic depth, and user-intent matching, which historically delivers consistent organic growth.' },
      { question: 'How long before we see results from organic SEO?', answer: 'Technical fixes often yield indexation and ranking improvements within 4 to 8 weeks, while competitive organic growth typically compounds strongly between months 3 and 6.' }
    ],
    relatedServices: ['seo-services', 'performance-marketing', 'web-development'],
    relatedIndustries: ['saas', 'professional-services', 'ecommerce', 'healthcare'],
    relatedLocations: ['delhi', 'noida', 'mumbai', 'usa', 'uk'],
    startingPrice: '$850 / month (₹60,000)'
  },
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    shortDesc: 'Data-driven Google Ads, Meta Ads, and paid acquisition funnels engineered to convert ad spend into predictable revenue.',
    category: 'Marketing',
    icon: 'Target',
    heroH1: 'Performance Marketing That Turns Ad Spend Into Predictable Growth',
    problemStatement: 'Most ad accounts suffer from broken attribution, unoptimized audience targeting, and generic creative fatigue, resulting in soaring CPAs and wasted budget.',
    ourSolution: 'We design high-converting paid acquisition campaigns combining pinpoint search intent, server-side tracking (CAPI & GA4), bespoke high-velocity landing pages, and rapid creative iteration to maximize ROAS.',
    servicesIncluded: [
      'Google Search, Performance Max & YouTube Ads',
      'Meta (Facebook & Instagram) Direct-Response Ads',
      'LinkedIn Ads for B2B & Enterprise Inquiries',
      'Meta Conversions API (CAPI) & Server-Side GA4',
      'High-Converting Landing Page Design',
      'Dynamic Retargeting & Funnel Automation'
    ],
    features: [
      { title: 'Server-Side Tracking (CAPI)', desc: 'Bypassing iOS 14+ cookie loss with accurate server-to-server event dispatch.' },
      { title: 'Dedicated CRO Landing Pages', desc: 'Single-purpose landers built specifically to convert ad traffic without menu leaks.' },
      { title: 'Weekly Creative Testing', desc: 'Systematic A/B testing of angles, hooks, ad copy variations, and value props.' },
      { title: 'Strict ROAS & CAC Guardrails', desc: 'Continuous negative keyword pruning and automated bid strategy governance.' }
    ],
    benefits: [
      'Stop burning marketing budget on low-quality clicks and bot traffic',
      'Predictably generate booked sales consultations, qualified leads, and direct checkouts',
      'Complete data fidelity in Google Analytics 4 and ad platform dashboards',
      'Scale profitable campaigns smoothly without experiencing CPA spikes'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Meta CAPI', 'GA4', 'GTM Server-Side', 'Hotjar'],
    process: [
      { step: '01', title: 'Audience & Offer Architecture', desc: 'Defining precise buyer triggers, competitive advantages, and value propositions.' },
      { step: '02', title: 'Tracking & Attribution Setup', desc: 'Implementing server-side CAPI, GA4 offline conversion imports, and tag manager.' },
      { step: '03', title: 'Creative & Landing Page Build', desc: 'Designing fast, responsive landing pages matched to specific ad keywords.' },
      { step: '04', title: 'Campaign Launch & Calibration', desc: 'Deploying segmented ad sets with tight negative match lists and smart bidding.' },
      { step: '05', title: 'Continuous Scaling & A/B Testing', desc: 'Scaling top-performing ad sets, eliminating underperformers, and refining ROAS.' }
    ],
    faqs: [
      { question: 'What ad platforms do you recommend for our business?', answer: 'For high-intent B2B or services, Google Search and LinkedIn typically deliver the highest lead quality. For consumer products, healthcare clinics, and visual brands, Meta (Instagram/Facebook) and Google Performance Max are powerful.' },
      { question: 'Do you design the ad graphics and landing pages?', answer: 'Yes. Our in-house designers and copywriters create all ad creatives, copy variants, and custom landing pages to ensure seamless message match.' }
    ],
    relatedServices: ['digital-marketing', 'web-development', 'crm-business-automation'],
    relatedIndustries: ['ecommerce', 'real-estate', 'saas', 'education', 'healthcare'],
    relatedLocations: ['gurgaon', 'delhi', 'mumbai', 'bangalore', 'usa', 'uae'],
    startingPrice: '$1,000 / month (₹75,000) + Ad Spend'
  },
  {
    id: 'api-integration',
    slug: 'api-integration',
    title: 'API Integration & Middleware',
    shortDesc: 'Seamlessly connect payment gateways, WhatsApp Business APIs, CRMs, ERPs, AI endpoints, and third-party enterprise platforms.',
    category: 'Development',
    icon: 'Network',
    heroH1: 'API Integration & Custom Middleware Services for Seamless Connectivity',
    problemStatement: 'Siloed SaaS applications force employees to re-enter data manually, leading to synchronization discrepancies, delayed order processing, and customer frustration.',
    ourSolution: 'We architect robust custom middleware, REST/GraphQL APIs, and webhook consumers that orchestrate bidirectional data pipelines between your web applications, ERPs, payment processors, and messaging platforms.',
    servicesIncluded: [
      'Payment Gateway Integration (Stripe, Razorpay, PayPal, LemonSqueezy)',
      'WhatsApp Business Cloud API & Twilio Messaging',
      'CRM Integration (HubSpot, Salesforce, Zoho, Pipedrive)',
      'ERP & Accounting APIs (SAP, QuickBooks, Tally, Zoho Books)',
      'Shipping & Fulfillment APIs (Shiprocket, FedEx, DHL)',
      'Custom Webhooks, Event Queues & Microservice Connectors'
    ],
    features: [
      { title: 'Fault-Tolerant Retry Logic', desc: 'Asynchronous queues with exponential backoff to handle external API rate limits and downtime.' },
      { title: 'Payload Validation & Sanitization', desc: 'Strict schema typing to prevent corrupted data from entering your production database.' },
      { title: 'End-to-End Encryption', desc: 'HMAC signature verification, SSL/TLS encryption, and secure API key management.' },
      { title: 'Real-Time Health Monitoring', desc: 'Instant alerts on Slack/email if an integrated third-party service fails or times out.' }
    ],
    benefits: [
      'Automate instant transaction notifications, WhatsApp receipts, and shipping updates',
      'Keep your inventory, leads, and customer financial records in real-time sync',
      'Prevent duplicate charges or ghost orders through idempotent API handlers',
      'Free your operations staff from mundane, error-prone data re-entry'
    ],
    techStack: ['Node.js', 'Python', 'Redis BullMQ', 'Express', 'Stripe API', 'Razorpay', 'WhatsApp Cloud API', 'AWS Lambda', 'Webhooks'],
    process: [
      { step: '01', title: 'API Specification Review', desc: 'Evaluating endpoint rate limits, authentication protocols, and payload schemas.' },
      { step: '02', title: 'Middleware Architecture', desc: 'Designing secure token storage, queue workers, and error-handling routines.' },
      { step: '03', title: 'Sandbox Development & Mocking', desc: 'Testing all edge cases, webhooks, and edge failure modes in staging.' },
      { step: '04', title: 'Security & HMAC Verification', desc: 'Implementing cryptographic signature verification to block spoofed requests.' },
      { step: '05', title: 'Production Rollout & Logging', desc: 'Deploying with real-time log analysis and latency tracking.' }
    ],
    faqs: [
      { question: 'Can you integrate WhatsApp Business API for automated order updates?', answer: 'Yes. We configure official WhatsApp Business Cloud API accounts, register approved message templates, and wire webhook triggers to send instant order confirmations, tracking links, and support alerts.' },
      { question: 'How do you handle rate limits or API downtime from vendors?', answer: 'We build durable message queues (using Redis and BullMQ) that automatically queue payloads, retry failed requests with backoff, and notify your technical team if a vendor service goes down.' }
    ],
    relatedServices: ['ai-automation', 'crm-business-automation', 'web-application'],
    relatedIndustries: ['ecommerce', 'logistics', 'finance', 'restaurants'],
    relatedLocations: ['moradabad', 'noida', 'delhi', 'bangalore', 'usa'],
    startingPrice: '$750 / ₹55,000'
  },
  {
    id: 'dedicated-developers',
    slug: 'dedicated-developers',
    title: 'Dedicated Developers',
    shortDesc: 'Hire senior vetted full-stack, frontend, backend, mobile, and AI developers on flexible monthly or project-based engagement models.',
    category: 'Talent',
    icon: 'Users',
    heroH1: 'Hire Dedicated Developers & Augment Your Engineering Team',
    problemStatement: 'Local hiring cycles take months, recruiter placement fees are astronomical, and mismatched junior hires slow down production velocity.',
    ourSolution: 'We provide pre-vetted, English-fluent senior software engineers who integrate directly into your sprint workflow via Slack, GitHub, and Jira. No recruitment fees, zero overhead, and flexible scaling.',
    servicesIncluded: [
      'Full-Time Dedicated Developers (160 hrs/month)',
      'Part-Time Engineers (80 hrs/month)',
      'Dedicated Team Augmentation (Frontend + Backend + QA)',
      'Direct Project-Based Sprint Hiring',
      'Senior Tech Lead & Architecture Consulting',
      'Risk-Free 1-Week Trial Period'
    ],
    features: [
      { title: 'Top 3% Vetted Talent', desc: 'Rigorous algorithmic, system design, and communication screening.' },
      { title: 'Timezone Alignment', desc: 'Minimum 4-5 hours of active overlap with US, UK, European, and Asian business hours.' },
      { title: 'Zero Recruiting Fees', desc: 'Transparent monthly billing with no hidden placement commissions or retainers.' },
      { title: 'Seamless Replacement Guarantee', desc: 'Immediate replacement at zero extra cost if an engineer does not match expectations.' }
    ],
    benefits: [
      'Scale your product engineering team up or down with just 2 weeks notice',
      'Cut engineering payroll overhead by up to 55% compared to local domestic hiring',
      'Direct communication via Slack, Teams, and daily standups — no bureaucratic middlemen',
      'Keep full ownership of every line of code, repository commit, and intellectual property'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Laravel', 'Python', 'React Native', 'Flutter', 'PostgreSQL', 'AWS'],
    process: [
      { step: '01', title: 'Requirements Discovery', desc: 'Understanding your tech stack, seniority requirements, and sprint cadences.' },
      { step: '02', title: 'Curated Candidate Shortlist', desc: 'Reviewing 2-3 matched senior profiles with GitHub repositories and portfolios.' },
      { step: '03', title: 'Live Technical Interview', desc: 'Conducting your own live coding session or architecture interview directly.' },
      { step: '04', title: '1-Week Risk-Free Trial', desc: 'Testing real-world productivity and cultural fit before committing.' },
      { step: '05', title: 'Sprint Integration & Ongoing Support', desc: 'Engineer begins daily standups with full HireYourCoder account manager backing.' }
    ],
    faqs: [
      { question: 'How quickly can a dedicated developer start?', answer: 'Pre-vetted developers from our internal bench can start within 3 to 5 business days.' },
      { question: 'How do we communicate with the developer daily?', answer: 'Developers join your company Slack, Microsoft Teams, GitHub, and Jira, attending your regular daily standups and sprint retrospectives.' },
      { question: 'What if the developer is not the right fit?', answer: 'We offer a risk-free trial. If you are not satisfied within the first week, we will replace the engineer immediately at no cost to you.' }
    ],
    relatedServices: ['web-application', 'mobile-app-development', 'saas-development'],
    relatedIndustries: ['startups', 'saas', 'finance', 'healthcare'],
    relatedLocations: ['usa', 'uk', 'uae', 'canada', 'australia', 'bangalore'],
    startingPrice: '$18 / hr (Starting $2,200 / month)'
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'SEO Services & Technical Auditing',
    shortDesc: 'Comprehensive technical SEO, international search architecture, localized keyword rankings, and content authority engineering.',
    category: 'Marketing',
    icon: 'Search',
    heroH1: 'Technical & Organic SEO Services Engineered for Dominant Search Rankings',
    problemStatement: 'Search engines ignore websites with poor semantic markup, broken indexation, slow mobile response, and thin, unhelpful content.',
    ourSolution: 'We implement high-authority SEO strategies built around structural code cleanliness, Schema.org rich snippets, Core Web Vitals optimization, and high-relevance topic clustering that search algorithms reward.',
    servicesIncluded: [
      'Technical Crawlability & Architecture Audits',
      'Schema.org Rich Snippet Engineering',
      'Local SEO & Google Business Profile Optimization',
      'International Hreflang & Multi-Region Setup',
      'E-commerce Product & Category SEO',
      'High-Authority Backlink Acquisition Strategies'
    ],
    features: [
      { title: 'Precision Entity Structuring', desc: 'Implementing Organization, LocalBusiness, FAQ, Product, and Article JSON-LD schemas.' },
      { title: 'Core Web Vitals Remediation', desc: 'Diagnosing and resolving LCP, INP, and CLS defects directly in the codebase.' },
      { title: 'Keyword Cannibalization Cleanup', desc: 'Consolidating conflicting pages and streamlining internal link authority.' },
      { title: 'Search Console Health Monitoring', desc: 'Proactive detection of coverage issues, mobile usability alerts, and crawl anomalies.' }
    ],
    benefits: [
      'Attract high-intent searchers at the exact moment they need your services',
      'Dominate map packs and local city queries across your target geographic footprint',
      'Shield your business from volatile search algorithm updates with clean white-hat practices',
      'Turn your website into an organic lead generation engine that operates 24/7'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Schema.org', 'Lighthouse', 'RankMath / Yoast', 'PageSpeed Insights'],
    process: [
      { step: '01', title: 'Complete Technical Diagnosis', desc: 'Crawling all URLs to uncover broken links, redirect chains, and indexing blocks.' },
      { step: '02', title: 'Architecture & Hierarchy Tuning', desc: 'Structuring logical URL taxonomies, breadcrumbs, and internal anchor equity.' },
      { step: '03', title: 'Content Gap Analysis', desc: 'Discovering high-value commercial keywords your competitors are ranking for.' },
      { step: '04', title: 'On-Page Optimization', desc: 'Crafting compelling meta titles, headers, image alt text, and semantic body copy.' },
      { step: '05', title: 'Rank Tracking & Iteration', desc: 'Monitoring weekly search rankings and conversion metrics to double down on winners.' }
    ],
    faqs: [
      { question: 'What is the difference between Technical SEO and standard SEO?', answer: 'Standard SEO often focuses solely on blog posts and keywords. Technical SEO addresses the code underneath: server response times, JavaScript rendering, sitemaps, structured data, canonical tags, and mobile accessibility.' }
    ],
    relatedServices: ['digital-marketing', 'web-development', 'performance-marketing'],
    relatedIndustries: ['real-estate', 'healthcare', 'ecommerce', 'restaurants'],
    relatedLocations: ['moradabad', 'delhi', 'jaipur', 'mumbai', 'usa'],
    startingPrice: '$700 / month (₹50,000)'
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    shortDesc: 'Custom online stores, Shopify Plus setups, and headless e-commerce architectures built for seamless checkouts and high conversion rates.',
    category: 'Development',
    icon: 'ShoppingBag',
    heroH1: 'Scalable E-commerce Development for High-Volume Online Brands',
    problemStatement: 'Slow checkout funnels, poor mobile responsiveness, and fragile inventory integrations lead to abandoned carts and lost sales.',
    ourSolution: 'We build high-converting e-commerce storefronts on Shopify, WooCommerce, and headless Next.js architectures. From one-click checkouts to ERP inventory synchronization, we help digital stores scale profitably.',
    servicesIncluded: [
      'Shopify & Shopify Plus Custom Theme Engineering',
      'Headless E-commerce (Next.js + Shopify/Medusa)',
      'Custom WooCommerce Stores with High Optimization',
      'Multi-Currency & Multi-Language Internationalization',
      'Payment Gateway & One-Click Checkout Integration',
      'ERP, Shipping & Warehouse Inventory Sync'
    ],
    features: [
      { title: 'Frictionless One-Page Checkout', desc: 'Optimized payment flows with Apple Pay, Google Pay, UPI, and card autofill.' },
      { title: 'Automated Cart Recovery', desc: 'Triggered WhatsApp and email reminders to recapture abandoned cart visitors.' },
      { title: 'High-Volume Concurrency', desc: 'Engineered to handle flash sale traffic spikes without server slowdowns.' },
      { title: 'Custom Product Customizers', desc: 'Interactive 3D or visual configurators for personalized merchandise.' }
    ],
    benefits: [
      'Boost mobile conversion rates with rapid sub-second product page loads',
      'Expand globally with localized currencies, tax rules, and local payment methods',
      'Automate fulfillment by linking your storefront directly to logistics partners',
      'Reduce shopping cart abandonment with streamlined, trusted checkout pages'
    ],
    techStack: ['Shopify Liquid / Storefront API', 'Next.js Commerce', 'WooCommerce', 'Stripe', 'Razorpay', 'Tailwind CSS', 'Medusa.js'],
    process: [
      { step: '01', title: 'Product Catalog & UX Mapping', desc: 'Planning intuitive category taxonomies, faceted filtering, and search.' },
      { step: '02', title: 'Design & Checkout Optimization', desc: 'Prototyping responsive mobile-first store layouts and cart flows.' },
      { step: '03', title: 'Full Store Development', desc: 'Developing custom themes, app integrations, and backend webhooks.' },
      { step: '04', title: 'Payment & Logistics Integration', desc: 'Connecting domestic and international payment gateways and tracking APIs.' },
      { step: '05', title: 'Load Testing & Store Launch', desc: 'Simulating high-traffic checkouts and executing seamless domain launch.' }
    ],
    faqs: [
      { question: 'Which e-commerce platform is right for my brand?', answer: 'For standard D2C retail, Shopify provides unparalleled ecosystem stability. For complete design freedom and ultra-fast speed, Headless Shopify or custom Next.js is ideal. For self-hosted flexibility, WooCommerce is strong.' }
    ],
    relatedServices: ['performance-marketing', 'api-integration', 'web-development'],
    relatedIndustries: ['ecommerce', 'retail', 'manufacturing'],
    relatedLocations: ['mumbai', 'delhi', 'moradabad', 'usa', 'uae'],
    startingPrice: '$1,600 / ₹1,15,000'
  },
  {
    id: 'saas-development',
    slug: 'saas-development',
    title: 'SaaS Platform Development',
    shortDesc: 'End-to-end SaaS engineering: multi-tenant architectures, subscription billing, user management, and scalable cloud backends.',
    category: 'Development',
    icon: 'Layers',
    heroH1: 'Scalable SaaS Platform Development from MVP to Enterprise Scale',
    problemStatement: 'Building a SaaS from scratch often stalls due to complex billing logic, multi-tenant database isolation, and security overhead.',
    ourSolution: 'We architect battle-tested SaaS foundations featuring tenant isolation, automated Stripe/billing subscriptions, user onboarding wizards, audit logging, and scalable microservices that allow you to focus on your core product.',
    servicesIncluded: [
      'Full SaaS MVP Development & Rapid Prototyping',
      'Multi-Tenant Cloud Architecture (AWS / GCP)',
      'Automated Tiered Subscription & Usage-Based Billing',
      'User Authentication, RBAC & SSO (Google, SAML)',
      'REST & GraphQL Public Developer APIs',
      'Admin Monitoring Dashboards & Analytics'
    ],
    features: [
      { title: 'Tenant Data Isolation', desc: 'Strict logical or database-level isolation ensuring customer data privacy.' },
      { title: 'Self-Service Customer Portal', desc: 'Allow users to upgrade plans, view invoices, and manage team seats autonomously.' },
      { title: 'Usage Metering Engine', desc: 'Accurate tracking for credit-based, consumption-based, or per-seat billing.' },
      { title: 'Comprehensive API Documentation', desc: 'Clean Swagger/OpenAPI interactive developer docs for third-party integrations.' }
    ],
    benefits: [
      'Accelerate your time-to-market by up to 60% using our proven SaaS scaffolding',
      'Confidently pitch enterprise customers with robust security and SSO compliance',
      'Eliminate manual billing operations with fully automated payment webhooks',
      'Scale smoothly from 10 beta testers to 100,000 active concurrent subscribers'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe Billing', 'Redis', 'Docker', 'AWS'],
    process: [
      { step: '01', title: 'Product Scoping & Data Modeling', desc: 'Defining user journeys, pricing tier schemas, and core feature roadmaps.' },
      { step: '02', title: 'Authentication & Architecture', desc: 'Setting up tenant isolation, auth tokens, and subscription state machines.' },
      { step: '03', title: 'Core Feature Sprints', desc: 'Developing product capabilities through rapid, iterative two-week sprints.' },
      { step: '04', title: 'Billing & Webhook Hardening', desc: 'Simulating failed payments, tier upgrades, plan downgrades, and cancellations.' },
      { step: '05', title: 'Beta Launch & Monitoring', desc: 'Onboarding early cohort users with live error telemetry and session replay.' }
    ],
    faqs: [
      { question: 'Can you help us build a Minimum Viable Product (MVP) quickly?', answer: 'Yes. Our specialized MVP sprint gets a functional, monetizable SaaS product into users hands within 4 to 8 weeks.' }
    ],
    relatedServices: ['web-application', 'dedicated-developers', 'api-integration'],
    relatedIndustries: ['saas', 'startups', 'finance', 'healthcare'],
    relatedLocations: ['bangalore', 'noida', 'usa', 'uk', 'singapore'],
    startingPrice: '$3,800 / ₹2,75,000'
  },
  {
    id: 'crm-business-automation',
    slug: 'crm-business-automation',
    title: 'CRM & Business Automation',
    shortDesc: 'Custom CRM systems, lead pipelines, sales workflow automations, and unified operational executive dashboards.',
    category: 'Automation',
    icon: 'Cpu',
    heroH1: 'Custom CRM & Business Workflow Automation for High-Growth Teams',
    problemStatement: 'Leads slip through the cracks, sales reps spend hours manually updating spreadsheets, and executives lack real-time visibility into pipeline health.',
    ourSolution: 'We build tailored CRM platforms and automated workflow triggers that capture leads from every marketing channel, route them instantly to the right sales reps, and trigger automated follow-up sequences across WhatsApp, SMS, and email.',
    servicesIncluded: [
      'Custom Tailored CRM & Pipeline Systems',
      'Automated Lead Routing & Scoring Engines',
      'WhatsApp, SMS & Email Autoresponders',
      'Inventory & Order Status Automations',
      'Executive KPI & Performance Dashboards',
      'HubSpot, Zoho & Salesforce Customization'
    ],
    features: [
      { title: 'Zero-Lead-Leak Pipeline', desc: 'Instant capture from Facebook leads, Google Ads, website forms, and WhatsApp.' },
      { title: 'Smart Deal Stages', desc: 'Visual Kanban boards customized to your specific sales and operational stages.' },
      { title: 'Triggered Task Assignments', desc: 'Automated reminders ensuring sales reps follow up with hot prospects on time.' },
      { title: 'Comprehensive Analytics', desc: 'Real-time conversion rates, deal velocity, and representative performance reports.' }
    ],
    benefits: [
      'Engage new inbound leads within seconds before competitors have opened their emails',
      'Save 15+ administrative hours per sales rep every single week',
      'Gain instant executive insight into closed deals, lost opportunities, and revenue forecasts',
      'Never lose track of a prospect conversation across fragmented communication channels'
    ],
    techStack: ['Node.js', 'React', 'Tailwind', 'PostgreSQL', 'WhatsApp Business API', 'Twilio', 'SendGrid', 'Zapier / n8n'],
    process: [
      { step: '01', title: 'Sales Workflow Audit', desc: 'Mapping your lead sources, qualification criteria, and deal handoff points.' },
      { step: '02', title: 'Data Schema & Pipeline Setup', desc: 'Creating custom deal stages, customer fields, and communication logs.' },
      { step: '03', title: 'Automation Wiring', desc: 'Connecting instant notifications to WhatsApp, email triggers, and calendars.' },
      { step: '04', title: 'Team Training & Role Testing', desc: 'Onboarding your sales staff with tailored permissions and simple workflows.' },
      { step: '05', title: 'Review & Refinement', desc: 'Analyzing pipeline bottlenecks and refining automated follow-up cadences.' }
    ],
    faqs: [
      { question: 'Why choose a custom CRM over HubSpot or Salesforce?', answer: 'Commercial CRMs charge steep per-user monthly subscription fees and often require clunky compromises to fit unique industry workflows. A custom CRM gives you 100% ownership, zero per-seat fees, and an interface built specifically for your exact operations.' }
    ],
    relatedServices: ['ai-automation', 'api-integration', 'performance-marketing'],
    relatedIndustries: ['real-estate', 'manufacturing', 'healthcare', 'education'],
    relatedLocations: ['moradabad', 'delhi', 'gurgaon', 'mumbai', 'usa'],
    startingPrice: '$2,200 / ₹1,60,000'
  }
];
