import { DeveloperCategory } from '../types';

export const developersData: DeveloperCategory[] = [
  {
    id: 'laravel-developers',
    title: 'Laravel Developers',
    icon: 'Code2',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)', 'Lead Architect (8+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Laravel 11', 'PHP 8.3', 'MySQL / PostgreSQL', 'Livewire', 'REST APIs', 'Queue Workers', 'Docker', 'AWS'],
    availability: 'Available Immediately',
    description: 'Expert Laravel engineers specializing in clean MVC architecture, robust API backends, multi-tenant databases, and high-concurrency queue processing.'
  },
  {
    id: 'php-developers',
    title: 'Core PHP Developers',
    icon: 'Terminal',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Modern PHP 8+', 'OOP', 'MySQL Optimization', 'Custom CMS', 'Payment Gateways', 'cURL & REST', 'Legacy Refactoring'],
    availability: 'Available Immediately',
    description: 'Battle-tested PHP specialists capable of maintaining, modernizing, and optimizing legacy custom PHP codebases, enterprise backends, and high-traffic portals.'
  },
  {
    id: 'react-developers',
    title: 'React.js Developers',
    icon: 'Atom',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)', 'Frontend Lead (8+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['React 18/19', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit / Zustand', 'React Query', 'Framer Motion', 'WebSockets'],
    availability: 'Available Immediately',
    description: 'Frontend artists and engineers who translate complex Figma designs into pixel-perfect, accessible, and ultra-smooth responsive web interfaces.'
  },
  {
    id: 'nextjs-developers',
    title: 'Next.js Developers',
    icon: 'Sparkles',
    experienceLevels: ['Senior (4-7 yrs)', 'Lead Architect (7+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Next.js App Router', 'Server Components (RSC)', 'TypeScript', 'Tailwind CSS', 'Edge Middleware', 'SSR/SSG', 'Vercel / AWS'],
    availability: 'Within 1 Week',
    description: 'Full-stack Next.js experts specialized in building lightning-fast server-rendered web applications, headless e-commerce storefronts, and SaaS web apps.'
  },
  {
    id: 'nodejs-developers',
    title: 'Node.js Developers',
    icon: 'Server',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)', 'Backend Architect (8+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis BullMQ', 'Microservices', 'Docker / Kubernetes'],
    availability: 'Available Immediately',
    description: 'Scalable backend engineers proficient in asynchronous event-driven architectures, real-time WebSockets, microservices, and resilient API gateways.'
  },
  {
    id: 'python-developers',
    title: 'Python Developers',
    icon: 'FileCode2',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)', 'Lead Data/Backend (8+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Python 3.12', 'FastAPI', 'Django', 'Celery', 'PostgreSQL', 'Data Scraping', 'Pandas', 'AWS Lambda'],
    availability: 'Within 1 Week',
    description: 'Python engineers adept at high-performance REST APIs with FastAPI, Django applications, data transformation pipelines, and third-party SaaS integrations.'
  },
  {
    id: 'react-native-developers',
    title: 'React Native Developers',
    icon: 'Smartphone',
    experienceLevels: ['Senior (4-7 yrs)', 'Mobile Lead (7+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['React Native', 'Expo', 'TypeScript', 'Native Modules (Swift/Kotlin)', 'Offline SQLite', 'Push Notifications', 'App Store / Play Store'],
    availability: 'Available Immediately',
    description: 'Cross-platform mobile specialists building fluid 60fps iOS and Android applications with native hardware integrations, offline sync, and instant push alerts.'
  },
  {
    id: 'flutter-developers',
    title: 'Flutter Developers',
    icon: 'Layers',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Flutter', 'Dart', 'Bloc / Riverpod', 'Custom Canvas Painting', 'Firebase', 'REST & GraphQL', 'Play Store & App Store'],
    availability: 'Within 1 Week',
    description: 'Flutter engineers who build visually striking, custom animated mobile and desktop applications from a single unified Dart codebase.'
  },
  {
    id: 'wordpress-developers',
    title: 'WordPress Developers',
    icon: 'Globe2',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Custom Themes', 'ACF Pro', 'Gutenberg Blocks', 'WooCommerce', 'Speed Optimization', 'Headless WP', 'Security Hardening'],
    availability: 'Available Immediately',
    description: 'Custom theme and plugin developers who build lightweight, blazing-fast WordPress sites without reliance on bloated visual builders or heavy plugins.'
  },
  {
    id: 'shopify-developers',
    title: 'Shopify & Shopify Plus Developers',
    icon: 'ShoppingBag',
    experienceLevels: ['Mid-Level (3-5 yrs)', 'Senior (5-8 yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['Shopify Liquid', 'Storefront API', 'Custom Theme Engineering', 'Shopify Apps (Node/React)', 'Checkout Extensibility', 'Klaviyo'],
    availability: 'Available Immediately',
    description: 'E-commerce specialists building bespoke Shopify themes, private merchant apps, custom checkout flows, and ERP synchronization pipelines.'
  },
  {
    id: 'fullstack-developers',
    title: 'Full Stack Developers',
    icon: 'Laptop',
    experienceLevels: ['Senior (5-8 yrs)', 'Lead Full Stack (8+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['React / Next.js', 'Node.js / Python', 'PostgreSQL', 'Docker', 'AWS / Cloudflare', 'GraphQL / REST', 'CI/CD Pipelines'],
    availability: 'Available Immediately',
    description: 'Autonomous end-to-end engineers capable of owning a product feature from user interface design to database schema and production deployment.'
  },
  {
    id: 'ai-developers',
    title: 'AI & Machine Learning Engineers',
    icon: 'Bot',
    experienceLevels: ['Senior (4-7 yrs)', 'Lead AI Architect (7+ yrs)'],
    hourlyStarting: 'Agile Sprint',
    monthlyStarting: 'Dedicated Full-Time',
    keySkills: ['OpenAI API', 'LangChain / LlamaIndex', 'Vector DBs (Pinecone/pgvector)', 'RAG Pipelines', 'Python', 'Agentic Workflows', 'Whisper / Vision'],
    availability: 'Within 2 Weeks',
    description: 'Specialists in developing production-grade autonomous agents, RAG knowledge retrieval engines, intelligent chatbots, and enterprise document extraction.'
  }
];

export interface DeveloperRoleCard {
  id: string;
  role: string;
  experience: string;
  pricingMonthly: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const developerRolesData: DeveloperRoleCard[] = [
  {
    id: 'fullstack',
    role: 'Senior Full-Stack Developer',
    experience: '5+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'Autonomous end-to-end engineers owning user interface, server API architecture, database schemas, and cloud deployment.',
    responsibilities: [
      'Next.js 15 App Router & React 19',
      'Node.js / Python REST & GraphQL microservices',
      'PostgreSQL / Supabase database architecture with RLS',
      'Docker containerization and AWS/Vercel CI/CD pipelines'
    ],
    skills: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'nextjs',
    role: 'Next.js & React Developer',
    experience: '4+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'Frontend architectural specialists crafting sub-second Core Web Vitals, SSR/SSG caching, and pixel-perfect design systems.',
    responsibilities: [
      'Modern Server Components (RSC) and Edge Middleware',
      'Tailwind CSS v4 design tokens and responsive layouts',
      'Complex reactive state management and optimistic updates',
      'Lighthouse 95+ performance optimization audits'
    ],
    skills: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Redux/Zustand', 'Vercel']
  },
  {
    id: 'nodejs',
    role: 'Node.js Backend Engineer',
    experience: '5+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'High-throughput asynchronous backend specialists building secure REST APIs, WebSockets, and Redis message queues.',
    responsibilities: [
      'Express.js & NestJS scalable microservice architectures',
      'Relational and NoSQL database modeling (PostgreSQL / MongoDB)',
      'Asynchronous task workers with Redis and BullMQ',
      'Third-party payment gateways and WhatsApp API webhooks'
    ],
    skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets']
  },
  {
    id: 'python-ai',
    role: 'Python & AI Engineer',
    experience: '4+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'AI engineers developing autonomous LLM agents, RAG knowledge retrieval systems, and high-performance FastAPI backends.',
    responsibilities: [
      'OpenAI, Claude, and Gemini API fine-tuning and tool calling',
      'Vector databases (Pinecone, pgvector) and RAG pipelines',
      'FastAPI and Django enterprise web applications',
      'Automated data scraping, ETL pipelines, and document OCR'
    ],
    skills: ['Python 3.12', 'FastAPI', 'LangChain', 'OpenAI API', 'pgvector', 'Docker', 'Celery']
  },
  {
    id: 'mobile',
    role: 'React Native & Mobile Engineer',
    experience: '4+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'Cross-platform mobile developers creating fluid 60fps iOS and Android applications from a single TypeScript codebase.',
    responsibilities: [
      'React Native & Expo cross-platform app delivery',
      'Native device bridge integration (Camera, GPS, Biometrics)',
      'Offline SQLite synchronization and background tasks',
      'App Store and Google Play Store release management'
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'Redux', 'SQLite', 'iOS & Android CI/CD']
  },
  {
    id: 'laravel',
    role: 'Laravel & PHP Specialist',
    experience: '5+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'Battle-tested engineers for enterprise PHP/Laravel applications, custom ERP portals, and multi-tenant architectures.',
    responsibilities: [
      'Laravel 11 MVC architecture and Eloquent optimization',
      'Livewire 3 and Alpine.js interactive interfaces',
      'Multi-tenant database tenancy and RBAC permissions',
      'Legacy PHP refactoring and security hardening'
    ],
    skills: ['Laravel 11', 'PHP 8.3', 'MySQL', 'Livewire', 'Tailwind CSS', 'Docker', 'Redis']
  },
  {
    id: 'uiux',
    role: 'UI/UX Product Designer',
    experience: '4+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'User experience architects creating conversion-optimized design systems, user journeys, and clickable Figma prototypes.',
    responsibilities: [
      'High-fidelity interactive Figma prototypes and design systems',
      'Conversion rate optimization (CRO) landing page wireframes',
      'User journey mapping and mobile-first responsive guidelines',
      'Developer handoff with design tokens and auto-layout'
    ],
    skills: ['Figma', 'Design Systems', 'UX Research', 'Prototyping', 'Tailwind Design Tokens']
  },
  {
    id: 'qa-automation',
    role: 'QA & Test Automation Engineer',
    experience: '4+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'Quality assurance specialists ensuring defect-free releases through automated End-to-End, API, and load testing.',
    responsibilities: [
      'Playwright & Cypress automated browser testing suites',
      'Postman automated API regression and security testing',
      'Cross-browser and mobile device compatibility verification',
      'GitHub Actions automated CI/CD test reporting'
    ],
    skills: ['Playwright', 'Cypress', 'Postman', 'Jest', 'CI/CD', 'Security Audits']
  },
  {
    id: 'devops',
    role: 'Cloud & DevOps Architect',
    experience: '6+ Years Experience',
    pricingMonthly: 'Dedicated Full-Time / Sprint',
    description: 'Infrastructure engineers deploying resilient containerized architectures, SSL security, and zero-downtime CI/CD pipelines.',
    responsibilities: [
      'AWS (ECS, Lambda, RDS, S3) and GCP Cloud Run setup',
      'Docker containerization and GitHub Actions workflow pipelines',
      'Cloudflare CDN, WAF firewall, and DNS security configuration',
      'Server health monitoring, automated backups, and disaster recovery'
    ],
    skills: ['AWS', 'Google Cloud', 'Docker', 'GitHub Actions', 'Cloudflare', 'PostgreSQL', 'Terraform']
  }
];

export const hiringModelsData = [
  {
    name: 'Dedicated Full-Time',
    hours: '160 hrs / month',
    desc: 'A senior engineer embedded 100% into your team. Daily standups, direct Slack/Teams channels, and uninterrupted feature development.',
    idealFor: 'Startups and scaleups with long-term roadmaps needing dedicated engineering velocity.'
  },
  {
    name: 'Dedicated Part-Time',
    hours: '80 hrs / month',
    desc: 'A dedicated engineer allocating 4 focused hours daily to your product. Perfect for ongoing maintenance, feature additions, or QA.',
    idealFor: 'Growing companies needing steady technical enhancements without full-time overhead.'
  },
  {
    name: 'Sprint Team Pod',
    hours: 'Full Scrum Team',
    desc: 'A complete autonomous squad including a Tech Lead, 2 Full-Stack Developers, a UI/UX Designer, and a QA Engineer in 2-week agile sprints.',
    idealFor: 'Brands wanting to build an MVP or major platform release from scratch rapidly.'
  },
  {
    name: 'Hourly Flex Bucket',
    hours: 'Flexible Blocks',
    desc: 'Prepaid 40 or 80-hour blocks with 3-month rollover validity. Call upon specialized architects for code audits, DevOps, or urgent bug fixes.',
    idealFor: 'Intermittent bug fixing, architectural reviews, or burst feature needs.'
  }
];

