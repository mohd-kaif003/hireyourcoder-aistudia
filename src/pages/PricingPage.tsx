import React, { useState } from 'react';
import { 
  Check, ArrowRight, Sparkles, HelpCircle, Shield, 
  MessageSquare, Calculator 
} from 'lucide-react';

interface PricingPageProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const [billingCurrency, setBillingCurrency] = useState<'USD' | 'INR'>('USD');

  const pricingTiers = [
    {
      name: 'Starter Web / MVP',
      badge: 'Best for Small Businesses & Startups',
      priceUSD: '$1,200',
      priceINR: '₹85,000',
      period: 'one-time milestone',
      description: 'Ultra-fast modern marketing website or early prototype built on Next.js 15, responsive Tailwind CSS, and headless CMS.',
      features: [
        '5 to 8 Custom Responsive Pages',
        'Next.js 15 App Router & React 19',
        'Headless CMS or Markdown Integration',
        '95+ Core Web Vitals PageSpeed Score',
        'Technical SEO & OpenGraph Setup',
        'Lead Capture Forms with WhatsApp Alerts',
        '30-Day Post-Launch Bug Warranty',
        'Full Source Code Repository Handover'
      ],
      ctaText: 'Start Starter Project',
      popular: false
    },
    {
      name: 'Custom Web App / SaaS',
      badge: 'Most Popular for High-Growth Brands',
      priceUSD: '$3,500',
      priceINR: '₹2,50,000',
      period: 'typical 4-6 week sprint',
      description: 'End-to-end full-stack web application with authentication, database schemas, role-based dashboards, and payment gateway APIs.',
      features: [
        'Custom Database Schema (PostgreSQL/Supabase)',
        'Authentication & RBAC User Roles',
        'Responsive Admin Dashboard & Client Portal',
        'Stripe / Razorpay Payment Integration',
        'REST / GraphQL API Endpoints',
        'Automated Email & WhatsApp Notifications',
        'Dockerized Deployment on AWS or Vercel',
        'Weekly Staging Previews & Sprint Demos',
        '60-Day Post-Launch Bug Warranty'
      ],
      ctaText: 'Build Custom Platform',
      popular: true
    },
    {
      name: 'Dedicated Senior Developer',
      badge: 'Flexible Monthly Engagement',
      priceUSD: '$2,200',
      priceINR: '₹1,60,000',
      period: 'per month (160 hours)',
      description: 'Hire a dedicated senior engineer (Full Stack, Next.js, Node, Python, or Mobile) dedicated 100% to your product roadmap.',
      features: [
        '160 Productive Hours per Month',
        'Direct Slack / Teams Communication',
        'Daily Standups & 4-5 Hour Timezone Overlap',
        'Direct Git Repository Access & Daily Commits',
        '1-Week Risk-Free Trial Period',
        'Strict NDA & Complete Intellectual Property Ownership',
        'Free Replacement Guarantee If Not 100% Aligned',
        'Zero Payroll Overhead or Benefits Friction'
      ],
      ctaText: 'Hire Dedicated Developer',
      popular: false
    },
    {
      name: 'AI Automation & Retainers',
      badge: 'Operational Efficiency',
      priceUSD: '$1,800',
      priceINR: '₹1,25,000',
      period: 'custom integration / retainer',
      description: 'Autonomous AI workflow agents, WhatsApp Cloud API integrations, custom CRM synchronization, and performance marketing funnels.',
      features: [
        'Custom WhatsApp Business API Bot & Flows',
        'LLM Agent with Company Knowledge RAG',
        'n8n / Make.com Webhook Integrations',
        'CRM Bi-Directional Synchronization',
        'Google Analytics 4 & Meta CAPI Server Tracking',
        'Weekly Performance Optimization Audits',
        'Dedicated Solutions Architect Support'
      ],
      ctaText: 'Deploy AI Automations',
      popular: false
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Engineering Investment</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Predictable Pricing. No Hidden Surprises.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            All engagements feature itemized deliverables, transparent milestone schedules, and 100% intellectual property handover upon completion.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-white border border-slate-200 mt-8 shadow-xs">
            <button
              onClick={() => setBillingCurrency('USD')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-colors ${
                billingCurrency === 'USD'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($) - International
            </button>
            <button
              onClick={() => setBillingCurrency('INR')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-colors ${
                billingCurrency === 'INR'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              INR (₹) - India Domestic
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? 'bg-white border-2 border-blue-600 shadow-xl lg:-translate-y-2'
                  : 'bg-white border border-slate-200 shadow-xs hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[11px] uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
                  Recommended
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono text-blue-600 uppercase font-bold block mb-1">
                  {tier.badge}
                </span>

                <h3 className="text-xl font-bold text-slate-950 font-heading">
                  {tier.name}
                </h3>

                <div className="mt-4 mb-3">
                  <span className="text-3xl font-extrabold text-slate-950 font-heading">
                    {billingCurrency === 'USD' ? tier.priceUSD : tier.priceINR}
                  </span>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {tier.period}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed min-h-[48px]">
                  {tier.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">What is Included:</div>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
                      : 'bg-slate-900 hover:bg-blue-600 text-white'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Milestone Payment Structure Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs mb-16">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold text-slate-950 font-heading">
              Our Risk-Free Milestone Payment Structure
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We never ask for 100% upfront fees. For fixed-scope projects, we divide engagements into 3-4 transparent milestones aligned with visible deliverables:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold font-mono text-blue-600">30%</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Kickoff & Wireframes</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Architecture & UX design</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold font-mono text-blue-600">30%</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Sprint Staging Alpha</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Core feature development</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold font-mono text-blue-600">20%</div>
                <div className="text-xs font-bold text-slate-900 mt-1">QA & Beta Testing</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Client UAT & bug fixes</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold font-mono text-emerald-600">20%</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Production Launch</div>
                <div className="text-[11px] text-slate-500 mt-0.5">DNS point & repo transfer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Estimate Calculator CTA */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold uppercase mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Estimator</span>
            </div>
            <h3 className="text-xl font-bold font-heading">
              Need a personalized budget breakdown right now?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Use our 6-step project estimate calculator to receive an instant timeline and price range.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/free-project-estimate')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs shrink-0 transition-colors shadow-lg shadow-blue-500/25"
          >
            Launch Interactive Calculator
          </button>
        </div>

      </div>
    </div>
  );
};
