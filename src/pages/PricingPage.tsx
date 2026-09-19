import React from 'react';
import { 
  Check, ArrowRight, Sparkles, HelpCircle, Shield, 
  MessageSquare, Layers, Clock, Users, Calendar
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface PricingPageProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const engagementTiers = [
    {
      name: 'Starter Platform / MVP',
      badge: 'Rapid Launch Framework',
      duration: '2 to 3-Week Delivery',
      scopeLevel: 'Early-Stage & Small Business',
      description: 'High-speed modern responsive web platform built with clean design, mobile-first responsiveness, and search engine readiness.',
      features: [
        '5 to 8 Custom Responsive Pages',
        'Mobile-First UI/UX & Tailwind Styling',
        'Headless Content Management Setup',
        'Sub-Second Page Load Optimization',
        'Full Technical SEO & Social Graph Meta',
        'Lead Capture Forms with WhatsApp Alerts',
        '30-Day Post-Launch Bug Warranty',
        '100% Source Code & IP Handover'
      ],
      ctaText: 'Request MVP Scope',
      popular: false
    },
    {
      name: 'Custom Web App / SaaS',
      badge: 'Full-Cycle Development',
      duration: '4 to 6-Week Milestone Sprint',
      scopeLevel: 'High-Growth Startups & Brands',
      description: 'End-to-end full-stack web application with authentication, scalable database architecture, role-based dashboards, and payment integrations.',
      features: [
        'Custom Relational Database Architecture',
        'Authentication & Role-Based Access (RBAC)',
        'Responsive Admin Dashboard & Client Portal',
        'Payment Gateway & Billing Integration',
        'Clean RESTful / Webhook API Endpoints',
        'Automated Email & WhatsApp Triggers',
        'Automated Cloud Staging & Deployment',
        'Bi-Weekly Sprint Demos & Milestone Reviews',
        '60-Day Post-Launch Support & Warranty'
      ],
      ctaText: 'Request Platform Scope',
      popular: true
    },
    {
      name: 'Dedicated Senior Developer',
      badge: 'Staff Augmentation Pod',
      duration: 'Full-Time (160 Hours / Month)',
      scopeLevel: 'Engineering Teams & Founders',
      description: 'Senior engineer (Full Stack, React, Node, Python, or Mobile) dedicated 100% to your product roadmap with direct repo and Slack access.',
      features: [
        '160 Dedicated Hours per Month',
        'Direct Slack / Teams & Jira Integration',
        'Daily Standups & 4-5 Hour Timezone Overlap',
        'Direct Git Repository Access & Daily Commits',
        '1-Week Risk-Free Alignment Trial',
        'Strict NDA & Complete Intellectual Property Ownership',
        'Free Developer Replacement Guarantee',
        'Zero Payroll Overhead or Benefits Friction'
      ],
      ctaText: 'Interview Developers',
      popular: false
    },
    {
      name: 'AI Automation & Retainers',
      badge: 'Continuous Evolution',
      duration: 'Custom Sprint or Monthly Retainer',
      scopeLevel: 'Operational Scaling & Enterprises',
      description: 'Autonomous AI workflow agents, official WhatsApp Cloud API integrations, custom CRM synchronization, and performance optimization.',
      features: [
        'Custom WhatsApp Business API Workflows',
        'LLM Agent with Proprietary Knowledge Base',
        'Webhook & Multi-Platform Data Synchronization',
        'Bi-Directional CRM & Lead Automation',
        'Full Analytics & Funnel Event Tracking',
        'Weekly Technical Optimization Audits',
        'Dedicated Solutions Architect Support'
      ],
      ctaText: 'Discuss Automation Scope',
      popular: false
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[{ label: 'Engagement & Delivery Models' }]} 
          onNavigate={onNavigate} 
          className="mb-4"
        />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Delivery Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Engagement Models & Delivery Plans
          </h1>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every engagement features clear scope definitions, sprint-based milestones, rigorous code standards, and 100% intellectual property ownership.
          </p>
        </div>

        {/* 4 Cards Grid - No Prices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {engagementTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
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
                <span className="text-[11px] text-blue-600 uppercase font-bold block mb-1">
                  {tier.badge}
                </span>

                <h3 className="text-xl font-bold text-slate-950 font-heading">
                  {tier.name}
                </h3>

                <div className="mt-3 mb-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-900 block">
                    {tier.duration}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                    {tier.scopeLevel}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed min-h-[44px]">
                  {tier.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Scope Deliverables:</div>
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
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
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

        {/* Enterprise Governance & Guarantees */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Our Delivery Standards & Client Guarantees
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We eliminate technical and financial risks with transparent governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <Shield className="w-6 h-6 text-blue-600 mb-3 mx-auto sm:mx-0" />
              <h4 className="font-bold text-sm text-slate-900">100% IP Handover</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                All source code, database structures, designs, and credentials belong entirely to you from day one.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <Clock className="w-6 h-6 text-blue-600 mb-3 mx-auto sm:mx-0" />
              <h4 className="font-bold text-sm text-slate-900">Sprint-Based Milestones</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Engagements are broken into clear sprints with live staging reviews before any milestone sign-off.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <Users className="w-6 h-6 text-blue-600 mb-3 mx-auto sm:mx-0" />
              <h4 className="font-bold text-sm text-slate-900">1-Week Trial Period</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                For dedicated developer pods, test alignment for 1 full week before committing to the full cycle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <Calendar className="w-6 h-6 text-blue-600 mb-3 mx-auto sm:mx-0" />
              <h4 className="font-bold text-sm text-slate-900">Post-Launch Warranty</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Every project includes 30 to 60 days of guaranteed post-launch bug fixing and performance monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Scope Estimator Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">Custom Requirements?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 font-heading">
              Plan Your Product Roadmap with Our Estimator Tool
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Select features, platforms, team configurations, and timelines to generate a detailed milestone proposal.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onNavigate('/free-project-estimate')}
              className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-colors text-center cursor-pointer"
            >
              Launch Scope Estimator
            </button>
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-colors text-center cursor-pointer"
            >
              Schedule Discovery Call
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
