import React from 'react';
import { 
  Compass, Layout, Code2, ShieldAlert, Rocket, TrendingUp, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

export const ProcessSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Scope Definition',
      icon: Compass,
      desc: 'We analyze your commercial goals, user personas, technical integrations, and competitive landscape to define an airtight, fixed-scope functional specification.',
      deliverables: ['Technical Architecture Doc', 'Milestone Roadmap', 'Wireframe Flowchart']
    },
    {
      number: '02',
      title: 'UI/UX & System Architecture',
      icon: Layout,
      desc: 'Our design and architecture leads craft interactive Figma prototypes with an emphasis on conversion psychology, high-contrast typography, and scalable database schemas.',
      deliverables: ['Clickable Figma Prototype', 'PostgreSQL / NoSQL Schema', 'API Contract Specs']
    },
    {
      number: '03',
      title: 'Agile Sprint Engineering',
      icon: Code2,
      desc: 'Full-stack development executed in transparent 2-week sprints. You receive staging preview links every Friday to inspect real-time progress and test features.',
      deliverables: ['Production TypeScript Code', 'Staging Deployments', 'Bi-Weekly Demo Calls']
    },
    {
      number: '04',
      title: 'Rigorous QA & Security Audit',
      icon: ShieldAlert,
      desc: 'Automated end-to-end testing, Core Web Vitals profiling, OWASP security vulnerability assessments, and cross-browser mobile stress testing.',
      deliverables: ['95+ PageSpeed Guarantee', 'Security Audit Report', 'Cross-Device QA Log']
    },
    {
      number: '05',
      title: 'Production Deployment & DNS Handover',
      icon: Rocket,
      desc: 'Zero-downtime deployment to your preferred cloud infrastructure (Vercel, AWS, Google Cloud, or DigitalOcean), complete SSL, and 100% repository transfer.',
      deliverables: ['Live Production Launch', 'Full GitHub Repo Transfer', 'Admin Handover Video']
    },
    {
      number: '06',
      title: 'Post-Launch Warranty & Scaling',
      icon: TrendingUp,
      desc: '30-day comprehensive bug-fix warranty followed by optional ongoing SLA maintenance, performance marketing funnels, and feature enhancements.',
      deliverables: ['30-Day Bug Warranty', 'Uptime Monitoring', 'Growth Consultation']
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Our 6-Step Agile Delivery Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Predictable, transparent engineering without the surprises. Here is how we turn your product requirements into launched software.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold font-mono text-slate-200 group-hover:text-blue-100 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Deliverables</div>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Process Bottom Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors shadow-sm"
          >
            <span>Discuss Your Project Milestone Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
