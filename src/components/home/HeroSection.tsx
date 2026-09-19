import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Zap, Sparkles, Terminal, Code2, 
  Cpu, CheckCircle2, MessageSquare, Play, Globe, Check
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'build' | 'automate' | 'scale'>('build');

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      
      {/* Background Decorative Tech Dots & Soft Gradients */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-200/30 via-indigo-100/20 to-purple-100/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm text-xs font-semibold text-blue-900">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting New Global & Domestic Projects for Q4</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-600 font-bold hover:underline cursor-pointer" onClick={() => onNavigate('/free-project-estimate')}>
              Estimate Cost →
            </span>
          </div>
        </div>

        {/* Core Headline & Subhead */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] font-heading">
            Build. Automate. Scale<span className="text-blue-600">.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            We engineer bespoke modern websites, full-stack web applications, native mobile apps, intelligent AI automations, and dedicated developer teams for ambitious businesses in <span className="font-semibold text-slate-900">India</span> and <span className="font-semibold text-slate-900">across the globe</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <button
              id="hero-cta-primary"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 group text-base"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-secondary"
              onClick={() => onNavigate('/case-studies')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-4 rounded-2xl border border-slate-200 transition-colors shadow-xs text-center text-base"
            >
              Explore Our Work
            </button>

            <button
              id="hero-cta-estimate"
              onClick={() => onNavigate('/free-project-estimate')}
              className="w-full sm:w-auto text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 font-semibold px-5 py-4 rounded-2xl border border-blue-200 transition-colors text-center text-sm flex items-center justify-center gap-1.5"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Calculate Cost</span>
            </button>
          </div>

          {/* Trust Value Badges */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Code & IP Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Milestone-Based Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Dedicated Daily Timezone Overlap</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sub-Second Next.js Performance</span>
            </div>
          </div>
        </div>

        {/* Interactive Engineering Showcase Dashboard Mockup */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-2 sm:p-4 text-slate-200 overflow-hidden">
            
            {/* Terminal Window Chrome */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">hireyourcoder-engine // production</span>
              </div>

              {/* Interactive Tabs for Build / Automate / Scale */}
              <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('build')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'build' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  01. Build
                </button>
                <button
                  onClick={() => setActiveTab('automate')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'automate' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  02. Automate
                </button>
                <button
                  onClick={() => setActiveTab('scale')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'scale' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  03. Scale
                </button>
              </div>
            </div>

            {/* Interactive Terminal Body */}
            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-7 font-mono text-xs space-y-2">
                {activeTab === 'build' && (
                  <>
                    <div className="text-emerald-400 flex items-center gap-2">
                      <span className="text-slate-500">$</span> hyc deploy --stack="nextjs,tailwind,postgresql" --global-edge
                    </div>
                    <div className="text-slate-400 pl-4">✔ Compiling TypeScript & Tree-Shaking 42 modules</div>
                    <div className="text-slate-400 pl-4">✔ Generating Static & ISR Edge routes with 100% Core Web Vitals</div>
                    <div className="text-slate-400 pl-4">✔ Injecting Schema.org JSON-LD LocalBusiness & Service schemas</div>
                    <div className="text-blue-400 pl-4 font-semibold">✔ Production edge build live: https://client-portal.app (84ms TTFB)</div>
                    <div className="pt-2 text-slate-300 font-sans text-xs">
                      "Clean architecture, zero technical debt, and pixel-perfect mobile-first designs engineered to convert visitors into inquiries."
                    </div>
                  </>
                )}

                {activeTab === 'automate' && (
                  <>
                    <div className="text-purple-400 flex items-center gap-2">
                      <span className="text-slate-500">$</span> hyc pipeline --trigger="inbound_lead" --sync="whatsapp,crm,slack"
                    </div>
                    <div className="text-slate-400 pl-4">✔ WhatsApp Cloud API dispatched instant greeting to prospect</div>
                    <div className="text-slate-400 pl-4">✔ AI Agent parsed budget requirements ($5,000+) and qualification score</div>
                    <div className="text-slate-400 pl-4">✔ Auto-created deal card in CRM & alerted sales channel via webhook</div>
                    <div className="text-emerald-400 pl-4 font-semibold">✔ Average prospect response latency reduced from 6 hrs to 18 seconds</div>
                    <div className="pt-2 text-slate-300 font-sans text-xs">
                      "Turn manual operational bottlenecks into automated, high-margin background pipelines that run 24/7."
                    </div>
                  </>
                )}

                {activeTab === 'scale' && (
                  <>
                    <div className="text-amber-400 flex items-center gap-2">
                      <span className="text-slate-500">$</span> hyc team --allocate="2_senior_engineers" --timezone="gmt_est_overlap"
                    </div>
                    <div className="text-slate-400 pl-4">✔ Assigned Senior React / Node.js engineer with 6+ yrs enterprise experience</div>
                    <div className="text-slate-400 pl-4">✔ Integrated into client Jira, Slack & GitHub repository</div>
                    <div className="text-slate-400 pl-4">✔ 1-week risk-free trial activated with zero lock-in contracts</div>
                    <div className="text-blue-400 pl-4 font-semibold">✔ Sprint velocity increased by 2.4x with managed senior engineering oversight</div>
                    <div className="pt-2 text-slate-300 font-sans text-xs">
                      "Scale your technical capacity instantly with dedicated senior developers who work as a seamless extension of your company."
                    </div>
                  </>
                )}
              </div>

              {/* Visual Stats Card */}
              <div className="lg:col-span-5 bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between gap-4 font-sans">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Enterprise SLA Standard</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">Guaranteed</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/40">
                    <div className="text-lg font-extrabold text-white">99+</div>
                    <div className="text-[10px] text-slate-400 font-medium">PageSpeed Score</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/40">
                    <div className="text-lg font-extrabold text-white">4 - 5 hrs</div>
                    <div className="text-[10px] text-slate-400 font-medium">Daily Global Overlap</div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30"
                >
                  <span>Schedule Technical Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
