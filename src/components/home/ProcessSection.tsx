import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, Layout, Code2, ShieldAlert, Rocket, TrendingUp, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

export const ProcessSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Specification',
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
      title: 'Production Launch & Handover',
      icon: Rocket,
      desc: 'Zero-downtime deployment to your preferred cloud infrastructure (Vercel, AWS, Google Cloud, or DigitalOcean), complete SSL, and 100% repository transfer.',
      deliverables: ['Live Production Launch', 'Full GitHub Repo Transfer', 'Admin Handover Video']
    },
    {
      number: '06',
      title: 'Warranty & Ongoing SLA',
      icon: TrendingUp,
      desc: '30-day comprehensive bug-fix warranty followed by optional ongoing SLA maintenance, performance marketing funnels, and feature enhancements.',
      deliverables: ['30-Day Bug Warranty', 'Uptime Monitoring', 'Growth Consultation']
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200/60">
            <span>Execution Framework</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Our 6-Step Agile Delivery Framework
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Predictable, transparent engineering without surprises. Here is how we turn your product requirements into launched software.
          </p>
        </motion.div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                      PHASE {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Verified Deliverables:
                    </span>
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-slate-900 hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Request sprint template</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
