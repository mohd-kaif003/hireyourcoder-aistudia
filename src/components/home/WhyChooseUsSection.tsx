import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Check, X, Sparkles, Clock, Lock, MessageSquare, Award, ChevronDown } from 'lucide-react';

export const WhyChooseUsSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [activeMobileIdx, setActiveMobileIdx] = useState<number | null>(0);

  const comparisonRows = [
    {
      feature: 'Code Quality & Architecture',
      freelancer: 'Varying quality, zero peer code reviews, spaghetti code risks',
      agency: 'Delegated to junior off-shore teams with high overhead',
      hyc: 'Senior Architect-led TypeScript, zero tech debt, strict lint & QA standards'
    },
    {
      feature: 'Delivery Cadence & Sprints',
      freelancer: 'Unpredictable, frequent ghosting mid-project',
      agency: 'Multi-month bureaucratic delays and slow change requests',
      hyc: 'Agile 2-week sprints with verifiable demo deployments every Friday'
    },
    {
      feature: 'Code & IP Ownership',
      freelancer: 'Often disputed or tied to personal accounts',
      agency: 'Retained or locked into proprietary vendor frameworks',
      hyc: '100% intellectual property & direct GitHub repo transfer upon milestone release'
    },
    {
      feature: 'Timezone Overlap & Comms',
      freelancer: 'Irregular hours, slow messaging response times',
      agency: 'Strict 9-5 local time, meetings booked weeks in advance',
      hyc: '4 to 5 hours guaranteed daily overlap with US, UK, UAE & European timezones'
    },
    {
      feature: 'Commercial Conversion Focus',
      freelancer: 'Focuses purely on styling, ignores conversion mechanics',
      agency: 'Generic design templates resold with 3x markups',
      hyc: 'Speed-optimized Next.js, Core Web Vitals, Schema.org & server-side tracking'
    },
    {
      feature: 'Native AI & Cloud Automations',
      freelancer: 'Limited to basic ChatGPT API wrapper scripts',
      agency: 'Slow to adopt emerging AI agent and vector RAG paradigms',
      hyc: 'Production AI agents, WhatsApp Cloud API, and secure private vector pipelines'
    },
    {
      feature: 'Pricing & Accountability',
      freelancer: 'Hourly padding or abandoned scopes',
      agency: 'Inflated recurring retainers and hidden management fees',
      hyc: 'Transparent milestone pricing, 1-week risk-free trial on dedicated talent'
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">
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
            <Award className="w-3.5 h-3.5" />
            <span>The Agency Advantage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Why High-Growth Brands Choose HireYourCoder
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We bridge the agility and cost advantages of global technology talent with the strict architectural standards, IP security, and accountability of an enterprise engineering firm.
          </p>
        </motion.div>

        {/* Mobile View: Clean Interactive Card Selector (No Horizontally Stretched Clunky Table) */}
        <div className="block lg:hidden space-y-3">
          {comparisonRows.map((row, idx) => {
            const isOpen = activeMobileIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveMobileIdx(isOpen ? null : idx)}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-2 font-semibold text-xs sm:text-sm text-slate-900"
                >
                  <span>{row.feature}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 space-y-2.5 text-xs border-t border-slate-200/60">
                    <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80">
                      <span className="font-bold text-emerald-900 block text-[10px] uppercase tracking-wider mb-0.5">
                        HireYourCoder Advantage:
                      </span>
                      <p className="text-emerald-950 font-medium leading-relaxed">{row.hyc}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                      <div className="p-2 rounded-lg bg-white border border-slate-200/70">
                        <span className="font-bold text-slate-400 block text-[9px] uppercase">Freelancers:</span>
                        <p className="mt-0.5 leading-snug">{row.freelancer}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200/70">
                        <span className="font-bold text-slate-400 block text-[9px] uppercase">Traditional Agencies:</span>
                        <p className="mt-0.5 leading-snug">{row.agency}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Comparison Matrix Table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/90">
                <th className="p-4 sm:p-5 font-bold text-slate-900 w-1/4">Evaluation Criteria</th>
                <th className="p-4 sm:p-5 font-semibold text-slate-500 w-1/4">Freelance Marketplaces</th>
                <th className="p-4 sm:p-5 font-semibold text-slate-500 w-1/4">Traditional Agencies</th>
                <th className="p-4 sm:p-5 font-extrabold text-blue-900 bg-blue-50/60 border-x border-blue-200/60 w-1/4">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>HireYourCoder</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900 align-top">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 align-top leading-relaxed text-xs">
                    <div className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 align-top leading-relaxed text-xs">
                    <div className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-slate-900 bg-blue-50/30 border-x border-blue-200/40 align-top leading-relaxed text-xs">
                    <div className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                      <span className="font-semibold text-blue-950">{row.hyc}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Core Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Mutual NDA Protection</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                Enforceable confidentiality agreements signed before inspecting proprietary files or code.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Agile Sprint Cadence</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                2-week sprint cycles with live staging review links and transparent Git commits.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Direct Slack Channel</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                Real-time daily communication directly with engineers building your product.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">30-Day Post-Launch SLA</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                Guaranteed bug-fix coverage, cloud deployment monitoring, and documentation handover.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
