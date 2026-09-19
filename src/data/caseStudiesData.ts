import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'artisan-export-portal',
    slug: 'artisan-export-portal',
    title: 'Digitizing B2B Global Export for Handcrafted Metalware Manufacturers',
    client: 'Heritage Metalware Exporters',
    industry: 'Manufacturing & Export',
    challenge: 'A prominent handicrafts and brassware export house in Moradabad relied on static 150-page PDF catalogs to pitch buyers in Germany, the UK, and the US. Pricing updates required re-printing or manual spreadsheet distribution, resulting in version confusion, delayed price quotes, and lost bids to faster overseas competitors.',
    solution: 'We engineered a bespoke, secure B2B Digital Showroom and Export Portal built with Next.js and Tailwind. International buyers receive verified credentials to access tiered wholesale pricing, configure container load estimates (CBM calculations), and submit formal RFQs (Requests for Quotation) with single-click sample requests.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AWS S3', 'WhatsApp Cloud API'],
    implementation: 'Built a granular permission system enabling sales managers to assign custom pricing tiers per overseas buyer. Connected WhatsApp Business Cloud API to alert export managers on their phones the second an international buyer requests a container quote.',
    results: [
      'Transitioned international buyer inquiry turnaround from 4 business days to under 2 hours',
      'Enabled overseas buyers to browse 3,500+ SKUs with faceted finish and dimension filters',
      'Eliminated catalog version discrepancies and manual PDF re-distribution across the export team',
      'Delivered a polished international agency brand image that commands credibility with European retail chains'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'healthcare-appointment-automation',
    slug: 'healthcare-appointment-automation',
    title: 'Automated Patient Booking & Omnichannel Reminders for Clinic Network',
    client: 'Apex Specialty Clinics Network',
    industry: 'Healthcare & Medical',
    challenge: 'A growing multi-specialty clinical group was losing significant revenue to appointment no-shows and reception bottlenecks. Patients struggled to find available specialist slots during busy morning phone rush hours, while administrative staff spent 3+ hours daily manually dialing patients for next-day confirmations.',
    solution: 'We designed and deployed a responsive patient scheduling web portal coupled with an automated WhatsApp & SMS confirmation pipeline. Patients can view real-time doctor availability across 4 clinic branches, book consultations in under 60 seconds, and receive instant digital calendar invites.',
    technology: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Twilio', 'WhatsApp Business Cloud API', 'Razorpay'],
    implementation: 'Integrated an asynchronous event queue that dispatches interactive WhatsApp messages 24 hours and 2 hours prior to scheduled consultations, allowing patients to confirm or request a 1-click reschedule directly within WhatsApp without calling.',
    results: [
      'Substantially reduced clinic no-show rates across all medical departments',
      'Freed front-desk staff to focus on in-person patient care rather than continuous reminder calls',
      'Streamlined patient check-in with pre-consultation digital questionnaire submission on mobile devices',
      'Achieved seamless positive Google Review collection through automated post-visit feedback requests'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'saas-multi-tenant-billing',
    slug: 'saas-multi-tenant-billing',
    title: 'Full-Stack Architecture & Stripe Billing Engine for B2B Logistics SaaS',
    client: 'FleetPulse Cloud Systems',
    industry: 'Logistics & SaaS',
    challenge: 'An ambitious supply-chain software startup had built an early MVP that suffered from database concurrency bottlenecks and lacked a scalable self-service subscription engine, requiring founders to manually generate invoices and manage team seats.',
    solution: 'We re-architected the application from the ground up utilizing Next.js, Node.js microservices, and PostgreSQL with Row-Level Security (RLS) for rock-solid tenant isolation. We implemented complete Stripe Billing integration supporting seat-based tiers and usage-based API metering.',
    technology: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Stripe Billing API', 'AWS ECS'],
    implementation: 'Constructed an idempotent webhook consumer ensuring zero billing discrepancies, accompanied by a customer organization dashboard where workspace admins manage members, assign role permissions, and download GST/VAT invoices autonomously.',
    results: [
      'Allowed founders to transition completely away from manual invoicing to self-service recurring billing',
      'Architected tenant isolation enabling enterprise compliance reviews to pass without friction',
      'Reduced average customer onboarding time from days to under 5 minutes',
      'Engineered sub-second API response times across fleet telemetry event processing'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ecommerce-performance-speed',
    slug: 'ecommerce-performance-speed',
    title: 'Headless Next.js Storefront Migration for High-Growth D2C Lifestyle Brand',
    client: 'Nordic Living Co.',
    industry: 'E-commerce & Retail',
    challenge: 'A high-growth direct-to-consumer brand was experiencing heavy bounce rates on mobile ad traffic due to a bloated monolithic store theme with 4.8s mobile load times, hurting return on ad spend (ROAS) across their Meta and Google campaigns.',
    solution: 'We engineered a bespoke Headless Next.js storefront powered by Shopify Storefront API and Tailwind CSS. The new architecture decoupled frontend presentation from backend inventory, loading product pages in under 800 milliseconds globally.',
    technology: ['Next.js', 'Shopify Storefront API', 'TypeScript', 'Tailwind CSS', 'Vercel Edge Network', 'Klaviyo'],
    implementation: 'Implemented dynamic predictive pre-fetching so product pages load instantly before users even click, accompanied by an optimized one-step checkout flow supporting Apple Pay and Google Pay.',
    results: [
      'Delivered 98/100 Mobile Google PageSpeed scores with zero layout shift (CLS)',
      'Substantially lowered shopping cart abandonment across mobile visitors',
      'Improved return on ad spend across performance marketing campaigns due to rapid landing page loads',
      'Empowered the marketing team to deploy promotional landing pages without developer intervention'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
  }
];
