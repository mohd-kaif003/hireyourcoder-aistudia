import React, { useState } from 'react';
import { Layers, Database, Cloud, Smartphone, Cpu, TrendingUp, Code2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'mobile' | 'databases' | 'cloud' | 'ai' | 'marketing'>('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Layers },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'ai', label: 'AI & Automation', icon: Cpu },
    { id: 'marketing', label: 'Tracking & MarTech', icon: TrendingUp }
  ];

  const technologies = {
    frontend: [
      { name: 'Next.js 15', desc: 'Server components, edge rendering, and sub-second Core Web Vitals.' },
      { name: 'React 19', desc: 'Component architecture, concurrent rendering, and reactive state.' },
      { name: 'TypeScript', desc: 'Strict compile-time type safety preventing runtime production bugs.' },
      { name: 'Tailwind CSS v4', desc: 'Utility-first modern styling with zero CSS bloat and responsive design.' },
      { name: 'Vue 3 / Nuxt', desc: 'Progressive JavaScript framework for versatile corporate portals.' }
    ],
    backend: [
      { name: 'Node.js & Express', desc: 'High-throughput asynchronous event-driven microservices.' },
      { name: 'Python & FastAPI', desc: 'High-performance REST & GraphQL APIs with automated OpenAPI documentation.' },
      { name: 'Django', desc: 'Enterprise-grade Python framework for data-intensive business logic.' },
      { name: 'Laravel (PHP 8.3+)', desc: 'Elegant MVC architecture for custom business dashboards and ERPs.' }
    ],
    mobile: [
      { name: 'React Native', desc: 'Single codebase deploying native iOS and Android apps with 60fps performance.' },
      { name: 'Flutter', desc: 'Google UI toolkit for multi-platform compiled applications.' },
      { name: 'Swift (iOS)', desc: 'Native Apple iOS development for hardware-accelerated mobile features.' },
      { name: 'Kotlin (Android)', desc: 'Modern native Android development for high-reliability mobile apps.' }
    ],
    databases: [
      { name: 'PostgreSQL', desc: 'Robust relational database with JSONB support, ACID compliance, and indexing.' },
      { name: 'Supabase & Prisma', desc: 'Modern PostgreSQL toolchain with Row Level Security (RLS) for SaaS.' },
      { name: 'Redis', desc: 'In-memory caching layer, session storage, and pub/sub message queues.' },
      { name: 'MongoDB', desc: 'Flexible document store for rapidly evolving schema structures.' },
      { name: 'MySQL', desc: 'Reliable transactional relational storage powering high-volume ecommerce.' }
    ],
    cloud: [
      { name: 'AWS (Amazon Web Services)', desc: 'S3, ECS, Lambda, CloudFront, and RDS cloud infrastructure.' },
      { name: 'Google Cloud Platform', desc: 'Containerized microservices on Cloud Run and Google Kubernetes Engine.' },
      { name: 'Vercel Edge Network', desc: 'Zero-configuration global CDN deployments with instant rollbacks.' },
      { name: 'Docker & GitHub Actions', desc: 'Reproducible containerized environments with automated CI/CD pipelines.' }
    ],
    ai: [
      { name: 'OpenAI & Claude API', desc: 'Advanced LLM integration for automated reasoning and content synthesis.' },
      { name: 'Google Gemini API', desc: 'Multimodal analysis across video, documents, and code reasoning.' },
      { name: 'LangChain & LlamaIndex', desc: 'RAG pipelines connected to company private vector databases.' },
      { name: 'WhatsApp Cloud API', desc: 'Official Meta WhatsApp Business Cloud API for automated lead engagement.' },
      { name: 'n8n & Make.com', desc: 'Enterprise workflow orchestration connecting webhooks across 500+ apps.' }
    ],
    marketing: [
      { name: 'Google Analytics 4 (GA4)', desc: 'Measurement protocols, user journey attribution, and custom event tracking.' },
      { name: 'Meta Conversions API (CAPI)', desc: 'Server-side tracking restoring up to 30% lost conversions from ad blockers.' },
      { name: 'Google Tag Manager (GTM)', desc: 'Server-side and web container deployment for unified tag governance.' },
      { name: 'Google Search Console & Schema', desc: 'Structured data validation, XML sitemaps, and search indexation monitoring.' }
    ]
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Modern Engineering Toolchain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Battle-Tested Technologies for Global Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We avoid trendy gimmicks and brittle page builders. Every layer in our tech stack is selected for developer ergonomics, speed, and enterprise reliability.
          </p>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === cat.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
          {technologies[activeTab].map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                  {tech.name}
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
