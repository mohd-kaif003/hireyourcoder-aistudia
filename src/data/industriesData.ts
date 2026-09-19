import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate & Property Tech',
    icon: 'Building2',
    tagline: 'High-converting property portals, CRM lead routing, virtual tour showcases, and automated WhatsApp inspection booking.',
    industryProblems: [
      'High ad spend on Meta and Google yields hundreds of unqualified inquiries that overwhelm sales agents.',
      'Manual follow-ups lead to slow response times, allowing prospective buyers to contact rival brokers.',
      'Property listings spread across multiple external portals with disjointed inventory tracking.'
    ],
    digitalSolutions: [
      'Bespoke Real Estate Portals with interactive map search, neighborhood data, and floor plan visualizers.',
      'Automated Lead Qualification via WhatsApp bots that screen budget, timeline, and location preference before pinging agents.',
      'Centralized Real Estate CRM with site visit scheduling, automated SMS reminders, and broker performance tracking.'
    ],
    recommendedServices: ['Website Development', 'AI Automation', 'Performance Marketing', 'CRM & Business Automation'],
    features: [
      'Interactive Property Filter by Sq.Ft, Amenities, and Price',
      'Virtual 3D Tour Embeds & Floor Plan Viewers',
      'Instant WhatsApp Chat for Floor Plans & Brochure Downloads',
      'Agent Commission & Site-Visit Tracking Pipeline'
    ],
    automationOpportunities: [
      'Instant automated WhatsApp delivery of project brochures when a user submits an inquiry form.',
      'Automated site-visit appointment confirmation and Google Maps directions dispatch 2 hours prior.',
      'Drip campaigns targeting buyers who viewed a specific project with pricing milestone updates.'
    ],
    technology: ['Next.js', 'PostgreSQL', 'Mapbox API', 'WhatsApp Cloud API', 'AWS S3'],
    exampleUseCases: [
      { title: 'Luxury Villa Development Portal', outcome: 'Generated 420+ pre-qualified site visit bookings within 60 days of launch.' },
      { title: 'Commercial Leasing Brokerage CRM', outcome: 'Reduced broker response latency from 4 hours to under 45 seconds.' }
    ],
    benefits: [
      'Capture and qualify high-intent property investors 24/7',
      'Cut agent administrative overhead by over 50%',
      'Deliver a luxury digital brand presence that commands trust'
    ],
    faqs: [
      { question: 'Can you integrate MLS or IDX property feeds?', answer: 'Yes. We support custom MLS, IDX, and proprietary CRM property feeds with automated daily synchronization.' }
    ]
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Medical Clinics',
    icon: 'Activity',
    tagline: 'HIPAA/NABH-conscious patient booking systems, doctor tele-consultation portals, and automated appointment reminders.',
    industryProblems: [
      'High patient no-show rates for clinic appointments costing thousands in idle specialist hours.',
      'Reception telephone lines constantly engaged, causing frustrated patients to book elsewhere.',
      'Manual entry of patient intake questionnaires consuming valuable clinical staff time.'
    ],
    digitalSolutions: [
      'Seamless Online Doctor Booking Portals with real-time clinic slot availability and pre-payment.',
      'Automated WhatsApp & SMS Reminders with 1-click confirmation or rescheduling.',
      'Digital Patient Intake & Medical History Portals accessible on mobile devices prior to arrival.'
    ],
    recommendedServices: ['Web Application Development', 'AI Automation', 'SEO Services', 'Mobile App Development'],
    features: [
      'Doctor Profile & Specialization Directory',
      'Multi-Location Clinic Scheduling Calendar',
      'Encrypted Patient Document Upload & Prescription Access',
      'Integrated Razorpay/Stripe Consultation Payments'
    ],
    automationOpportunities: [
      'Automated WhatsApp appointment confirmations and 24-hour advance check-in reminders.',
      'Post-consultation automated follow-up asking for Google reviews and medication refill checks.',
      'AI triage assistant guiding prospective patients to the appropriate medical department.'
    ],
    technology: ['React', 'Node.js', 'PostgreSQL', 'Twilio', 'WhatsApp API', 'Encrypted Cloud Storage'],
    exampleUseCases: [
      { title: 'Multi-Specialty Clinic Network', outcome: 'Decreased patient appointment no-shows by 44% with WhatsApp automated confirmations.' },
      { title: 'Dermatology & Aesthetics Practice', outcome: 'Increased online private consultation bookings by 180% via targeted local SEO.' }
    ],
    benefits: [
      'Drastically reduce clinic no-show rates with automated multi-channel reminders',
      'Provide a modern, reassuring digital patient experience',
      'Comply with strict healthcare privacy standards and secure data storage'
    ],
    faqs: [
      { question: 'Is the patient data securely stored?', answer: 'Yes. We employ end-to-end SSL/TLS encryption in transit and AES-256 encryption at rest with strict role-based clinic staff access.' }
    ]
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education & EdTech',
    icon: 'GraduationCap',
    tagline: 'Interactive learning management systems (LMS), student enrollment funnels, and automated admission pipelines.',
    industryProblems: [
      'Student lead drop-offs during complex multi-step application and fee payment procedures.',
      'Fragmented communication between instructors, parents, and administrative staff.',
      'Off-the-shelf LMS software lacking branding flexibility and charging steep per-student licenses.'
    ],
    digitalSolutions: [
      'Custom LMS & Course Portals with video streaming, quizzes, certifications, and progress tracking.',
      'High-Converting Enrollment Funnels with integrated payment installments and instant scholarship screening.',
      'Automated Admission WhatsApp & Email Notifications keeping applicants informed at every evaluation stage.'
    ],
    recommendedServices: ['Web Application Development', 'Performance Marketing', 'API Integration', 'Mobile App Development'],
    features: [
      'Structured Video Curriculum & Interactive Quizzes',
      'Student Dashboard with Progress Tracking & Certificates',
      'Live Webinar & Zoom API Schedule Integration',
      'Stripe/Razorpay Recurring Tuition & EMI Billing'
    ],
    automationOpportunities: [
      'Automated WhatsApp notifications for upcoming assignment deadlines and live class links.',
      'Instant lead qualification bot assessing academic background before scheduling counselor calls.',
      'Automated certificate generation and email dispatch upon student course completion.'
    ],
    technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Mux Video API', 'Zoom API', 'Stripe'],
    exampleUseCases: [
      { title: 'Professional Certification Institute', outcome: 'Onboarded 14,000+ paid students with a custom zero-license LMS architecture.' },
      { title: 'K-12 School Admissions Portal', outcome: 'Shortened application processing time from 12 days to 48 hours.' }
    ],
    benefits: [
      'Full IP ownership of your digital learning curriculum and student database',
      'Eliminate expensive per-seat software licensing fees',
      'Increase enrollment conversion rates through frictionless mobile-friendly checkouts'
    ],
    faqs: [
      { question: 'Can you prevent video piracy on the course portal?', answer: 'Yes. We implement encrypted HLS video streaming, dynamic watermarking, and DRM tokens to protect course materials.' }
    ]
  },
  {
    id: 'restaurants',
    slug: 'restaurants',
    name: 'Restaurants & Hospitality',
    icon: 'Utensils',
    tagline: 'Direct online ordering systems, contactless QR menus, table reservation engines, and WhatsApp customer re-engagement.',
    industryProblems: [
      'Third-party delivery aggregators eating 25-35% commission on every food order.',
      'Loss of direct customer relationship data and inability to execute repeat marketing.',
      'Slow manual phone order taking prone to mistakes and delays during peak dinner hours.'
    ],
    digitalSolutions: [
      'Direct Zero-Commission Online Ordering Storefronts with live kitchen POS dispatch.',
      'Dynamic QR Digital Menus with instant dietary filters and direct table ordering.',
      'WhatsApp Automation for order confirmations, live kitchen tracking, and feedback collection.'
    ],
    recommendedServices: ['Website Development', 'AI Automation', 'Local SEO', 'API Integration'],
    features: [
      'Mobile-Optimized Visual Food Menu with Modifier Add-ons',
      'Real-Time Kitchen Order Ticket (KOT) Printer Integration',
      'Table Reservation Calendar with Deposit Payments',
      'Automated WhatsApp Loyalty Points & Birthday Treats'
    ],
    automationOpportunities: [
      'Automated WhatsApp order receipt and rider dispatch notifications.',
      'Post-dining automated Google Review request 30 minutes after bill settlement.',
      'Re-engagement WhatsApp broadcasts sending weekend offers to customers inactive for 30 days.'
    ],
    technology: ['React', 'Node.js', 'WebSockets', 'WhatsApp Cloud API', 'Thermal Printer ESC/POS'],
    exampleUseCases: [
      { title: 'Fine Dining Restaurant Group', outcome: 'Shifted 38% of pickup/delivery orders from delivery aggregators to their own direct web store.' },
      { title: 'Casual Cafe Chain', outcome: 'Collected 1,800+ authentic Google Reviews in 90 days via automated WhatsApp post-meal prompts.' }
    ],
    benefits: [
      'Reclaim up to 30% aggregator commission margins back to your restaurant bottom line',
      'Build an owned database of local regular customers for direct re-marketing',
      'Speed up table turns and reduce front-of-house order taking errors'
    ],
    faqs: [
      { question: 'Can orders print directly in the kitchen?', answer: 'Yes. We connect web orders directly to thermal POS receipt printers using standard network protocols.' }
    ]
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-commerce & D2C Brands',
    icon: 'ShoppingBag',
    tagline: 'High-speed headless storefronts, custom Shopify Plus themes, multi-currency checkouts, and automated inventory sync.',
    industryProblems: [
      'High shopping cart abandonment due to slow mobile load speeds and clunky checkouts.',
      'Inventory count discrepancies between online storefronts and warehouse stock.',
      'High customer acquisition costs requiring aggressive retention and repeat purchase loops.'
    ],
    digitalSolutions: [
      'Ultra-Fast Headless Storefronts (Next.js) achieving sub-second product page loads.',
      'One-Click Checkout Optimization with UPI, Apple Pay, and saved address autofill.',
      'Automated Multi-Channel Sync connecting Shopify, ERPs, and courier logistics.'
    ],
    recommendedServices: ['E-commerce Development', 'Performance Marketing', 'API Integration', 'AI Automation'],
    features: [
      'Instant Search with Predictive Autocomplete & Visual Thumbnails',
      'Personalized Product Recommendations & Upsell Bundles',
      'Automated Abandoned Cart WhatsApp Sequences',
      'Automated Courier Shipping Label Generation (Shiprocket, FedEx)'
    ],
    automationOpportunities: [
      'Automated WhatsApp order tracking with live status updates (Packed, Shipped, Out for Delivery).',
      'Automated customer review requests with photo submission rewards.',
      'AI chatbot assisting shoppers with sizing recommendations and order tracking.'
    ],
    technology: ['Shopify Plus', 'Next.js', 'Tailwind', 'Stripe', 'Razorpay', 'Klaviyo', 'Shiprocket'],
    exampleUseCases: [
      { title: 'Direct-to-Consumer Apparel Brand', outcome: 'Achieved a 42% lift in mobile conversion rate after migrating to a custom Next.js storefront.' },
      { title: 'Specialty Gourmet Food Producer', outcome: 'Automated 70% of shipping queries with a WhatsApp AI tracking assistant.' }
    ],
    benefits: [
      'Increase mobile checkout completion with zero-lag page navigation',
      'Drive repeat purchase rate through automated omnichannel retention sequences',
      'Eliminate manual shipping label generation and inventory reconciliation'
    ],
    faqs: [
      { question: 'Can you migrate our existing store from WooCommerce to Shopify or Next.js?', answer: 'Yes. We execute zero-downtime migrations preserving your customer accounts, order history, and SEO URL redirects.' }
    ]
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Finance & FinTech',
    icon: 'DollarSign',
    tagline: 'Bank-grade secure financial portals, automated KYC verification pipelines, and compliant customer dashboards.',
    industryProblems: [
      'Strict regulatory compliance and rigorous data privacy audits required for financial tools.',
      'Manual verification of client identity documents delaying account activation for days.',
      'Legacy institutional interfaces driving younger wealth managers and retail investors away.'
    ],
    digitalSolutions: [
      'Modern, High-Security FinTech Portals with multi-factor authentication and biometric security.',
      'Automated KYC Verification integrating government identity APIs and OCR document validation.',
      'Real-Time Portfolio & Analytics Dashboards with interactive charts and exportable statements.'
    ],
    recommendedServices: ['Web Application Development', 'API Integration', 'Dedicated Developers', 'SaaS Development'],
    features: [
      'Multi-Factor Authentication (MFA) & Biometric Auth',
      'Automated Document OCR & Aadhaar/PAN/SSN Verification',
      'Real-Time Transaction Feeds with Webhook Replay Protection',
      'Audit Logging & Financial Statement Export (PDF/CSV)'
    ],
    automationOpportunities: [
      'Automated AML/KYC identity verification in under 3 minutes via microservice OCR.',
      'Automated transaction alerts and monthly portfolio balance summaries via WhatsApp and email.',
      'Algorithmic loan pre-approval scoring based on real-time financial inputs.'
    ],
    technology: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Recharts / D3', 'AWS KMS'],
    exampleUseCases: [
      { title: 'Cross-Border B2B Invoicing Platform', outcome: 'Facilitated high-volume multi-currency settlements with automated FX calculations.' },
      { title: 'Wealth Advisory Client Portal', outcome: 'Cut client onboarding duration from 5 business days to 8 minutes.' }
    ],
    benefits: [
      'Deliver institutional-grade security with bank-level encryption protocols',
      'Provide intuitive, modern wealth visualizations that build investor trust',
      'Accelerate customer onboarding velocity with automated digital KYC'
    ],
    faqs: [
      { question: 'How do you safeguard sensitive financial data?', answer: 'We enforce AES-256 encryption at rest, TLS 1.3 in transit, strict RBAC, automated secret rotation, and no client-side exposure of private keys.' }
    ]
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: 'Truck',
    tagline: 'Fleet dispatch portals, real-time shipment tracking, automated manifest processing, and warehouse inventory APIs.',
    industryProblems: [
      'Lack of real-time visibility into truck location and delivery milestones causing constant client phone inquiries.',
      'Paper waybills and manual bill of lading data entry causing delivery errors and delayed billing.',
      'Unoptimized dispatch routing resulting in elevated fuel consumption and missed delivery windows.'
    ],
    digitalSolutions: [
      'Unified Logistics Management Portals with live interactive map fleet tracking.',
      'Automated Document Ingestion extracting waybill data from photos using AI OCR.',
      'Automated Customer Tracking Portals delivering real-time milestone notifications via WhatsApp.'
    ],
    recommendedServices: ['Web Application Development', 'API Integration', 'Mobile App Development', 'AI Automation'],
    features: [
      'Live GPS Fleet Tracking & Geofencing Milestones',
      'Driver Mobile App with Digital Proof of Delivery (e-POD) & Signature Capture',
      'Automated Rate Calculator & Multi-Leg Route Optimizer',
      'Client Self-Service Tracking Portal'
    ],
    automationOpportunities: [
      'Automated WhatsApp notification to consignees when shipment arrives at delivery hub.',
      'Automated OCR extraction of shipping manifests into the core SQL database in seconds.',
      'Automated freight invoice generation upon driver electronic proof of delivery signature.'
    ],
    technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Mapbox', 'WhatsApp API', 'AWS Textract'],
    exampleUseCases: [
      { title: 'Interstate Freight Carrier', outcome: 'Digitized 40,000+ monthly paper waybills with AI OCR, saving 120 admin hours weekly.' },
      { title: 'Last-Mile Delivery Operator', outcome: 'Achieved 98.4% on-time delivery rate with dynamic route optimization.' }
    ],
    benefits: [
      'Empower shippers and consignees with self-service real-time tracking links',
      'Eliminate hours of manual data entry from physical bills of lading',
      'Reduce vehicle idle time and optimize fuel expenditure across your fleet'
    ],
    faqs: [
      { question: 'Can the driver mobile app work without an internet connection?', answer: 'Yes. The driver app functions offline, caching GPS checkpoints and customer signatures locally, and syncs automatically when network connectivity resumes.' }
    ]
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing & Export Industries',
    icon: 'Factory',
    tagline: 'Custom production ERPs, B2B export buyer catalogs, automated quote generators, and factory floor monitoring.',
    industryProblems: [
      'Production schedules managed on disparate spreadsheets causing delayed shipments and material shortages.',
      'International export buyers struggling to navigate static PDF product catalogs with outdated pricing.',
      'Manual quotation calculations taking 3 to 4 days, resulting in lost bids to faster overseas competitors.'
    ],
    digitalSolutions: [
      'Custom Manufacturing ERP tracking raw materials, work-in-progress (WIP), and finished goods in real time.',
      'Password-Protected B2B Export Portals allowing international buyers to browse product lines with tiered pricing.',
      'Instant Quote Generators calculating container load specifications and shipping estimates automatically.'
    ],
    recommendedServices: ['Web Application Development', 'API Integration', 'CRM & Business Automation', 'Web Development'],
    features: [
      'Bill of Materials (BOM) & Inventory Tracking',
      'Multi-Currency Export Catalog with Custom SKU Builders',
      'Container Packing Logic & Weight/Volume Calculators',
      'Production Stage Tracking (Casting, Polishing, Quality Check, Packaging)'
    ],
    automationOpportunities: [
      'Automated WhatsApp status notifications to overseas buyers when their production order reaches packaging stage.',
      'Automated generation of commercial invoices, packing lists, and export declarations upon shipment completion.',
      'Low raw-material threshold alerts dispatched to purchasing managers on Slack or email.'
    ],
    technology: ['React', 'Laravel / PHP', 'MySQL', 'Node.js', 'PDF Generation Engine'],
    exampleUseCases: [
      { title: 'Artisan Metal & Brassware Exporter (Moradabad)', outcome: 'Digitized 3,500+ handcrafted SKUs into a private buyer portal, driving substantial international export volume.' },
      { title: 'Industrial Component Manufacturer', outcome: 'Reduced formal quotation generation turnaround from 72 hours to 90 seconds.' }
    ],
    benefits: [
      'Present a high-caliber international export brand to global buyers in Europe, US, and the Middle East',
      'Gain full real-time oversight of factory production stages and bottlenecks',
      'Accelerate international sales deal cycles with instant pricing configuration'
    ],
    faqs: [
      { question: 'Can we hide wholesale pricing from general public visitors?', answer: 'Yes. We implement secure buyer verification where international wholesale pricing is only visible after your sales team approves the buyer profile.' }
    ]
  },
  {
    id: 'startups',
    slug: 'startups',
    name: 'Startups & High-Velocity Ventures',
    icon: 'Rocket',
    tagline: 'Rapid MVP engineering, scalable architecture, investor-ready UI/UX, and high-velocity product experimentation.',
    industryProblems: [
      'Burning angel or seed capital on slow development agencies that take 9 months to ship a first release.',
      'Technical debt and poorly architected codebases that crumble upon initial user traction.',
      'Difficulty finding reliable senior developers without giving away large equity shares.'
    ],
    digitalSolutions: [
      'Rapid 4-to-8 Week MVP Development delivering a production-ready, testable, and monetizable product.',
      'Modern Scalable Tech Stack (Next.js, TypeScript, PostgreSQL, Tailwind) ready for growth.',
      'Dedicated Engineering Teams that function as your on-demand technical co-founder.'
    ],
    recommendedServices: ['SaaS Development', 'Web Application Development', 'Dedicated Developers', 'AI Automation'],
    features: [
      'Production-Ready Authentication, Billing & Tenant Isolation',
      'Interactive Figma Prototypes for Early Investor Demonstrations',
      'Modular Codebase with Comprehensive Documentation & CI/CD',
      'Built-In Product Analytics & User Event Instrumentation'
    ],
    automationOpportunities: [
      'Automated Slack pings to founders whenever a new user signs up or upgrades their subscription.',
      'Automated user onboarding email & WhatsApp sequences based on product milestone completion.',
      'Instant bug report triage logging stack traces directly to GitHub issues.'
    ],
    technology: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'Docker'],
    exampleUseCases: [
      { title: 'AI Copywriting Startup MVP', outcome: 'Built and launched in 5 weeks, successfully onboarding 2,400 active beta users.' },
      { title: 'B2B Procurement Marketplace', outcome: 'Helped founders successfully close an institutional seed round showcasing a fully operational product.' }
    ],
    benefits: [
      'Hit the market months ahead of your competitors before capital runs dry',
      'Build on clean, modern code that future in-house engineering hires will respect',
      'Maintain flexible development burn rates matching your current funding milestones'
    ],
    faqs: [
      { question: 'Do we own 100% of the code and intellectual property?', answer: 'Yes. Upon delivery and milestone settlement, 100% of the code repositories, assets, and intellectual property belong exclusively to your company.' }
    ]
  },
  {
    id: 'saas',
    slug: 'saas',
    name: 'SaaS Companies',
    icon: 'Layers',
    tagline: 'Subscription engines, multi-tenant cloud architectures, public developer APIs, and self-service customer portals.',
    industryProblems: [
      'Complex multi-tenant security architecture that demands specialized senior engineering experience.',
      'Churn caused by unintuitive onboarding flows and slow in-app performance.',
      'Engineering teams tied up with routine billing infrastructure instead of core product innovation.'
    ],
    digitalSolutions: [
      'Enterprise SaaS Architecture with robust tenant segregation, SSO, and audit logging.',
      'High-Speed Web Interfaces built with Next.js delivering snappy sub-second page transitions.',
      'Automated Billing Engines supporting tiered, usage-based, and seat-based Stripe monetization.'
    ],
    recommendedServices: ['SaaS Development', 'Dedicated Developers', 'Performance Marketing', 'SEO Services'],
    features: [
      'Tenant Isolation (Logical & Row-Level Security)',
      'Enterprise Single Sign-On (SAML, Google, Okta)',
      'Self-Service Team Workspace & Role Management',
      'Public REST & GraphQL APIs with Interactive Swagger Documentation'
    ],
    automationOpportunities: [
      'Automated churn-risk warnings when a customer account activity drops below baseline.',
      'Automated upgrade prompts triggered when an account reaches 80% of their plan quota.',
      'Automated sync of user product telemetry to marketing automation platforms like Customer.io.'
    ],
    technology: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe Billing', 'AWS'],
    exampleUseCases: [
      { title: 'Workflow Automation SaaS', outcome: 'Scaled system architecture to reliably process 8 million monthly API events.' },
      { title: 'HR Analytics SaaS', outcome: 'Reduced customer onboarding time by 52% with a redesigned interactive setup wizard.' }
    ],
    benefits: [
      'Free your internal product team to focus purely on unique core differentiation',
      'Confidently pass enterprise enterprise security and SOC2 compliance audits',
      'Grow predictable MRR with automated subscription lifecycle management'
    ],
    faqs: [
      { question: 'Can you provide ongoing dedicated engineers for our SaaS product roadmap?', answer: 'Yes. Many SaaS founders partner with us for dedicated full-time engineers who work as an integrated part of their sprint team.' }
    ]
  }
];
