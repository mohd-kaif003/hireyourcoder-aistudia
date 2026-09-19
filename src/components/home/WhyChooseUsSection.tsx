import React from 'react';
import { ShieldCheck, Check, X, Sparkles, Clock, Lock, MessageSquare, Award } from 'lucide-react';

export const WhyChooseUsSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const comparisonRows = [
    {
      feature: 'Code Quality & Architecture',
      freelancer: 'Varying quality, zero peer code reviews, spaghetti code risks',
      agency: 'Delegated to junior off-shore teams with high overhead',
      hyc: 'Senior Architect-led TypeScript, zero tech debt, strict lint & QA standards',
      winner: 'hyc'
    },
    {
      feature: 'Delivery Timeline & Cadence',
      freelancer: 'Unpredictable, frequent ghosting mid-project',
      agency: 'Multi-month bureaucratic delays and slow change requests',
      hyc: 'Agile 2-week sprints with verifiable demo deployments every Friday',
      winner: 'hyc'
    },
    {
      feature: 'Code & IP Ownership',
      freelancer: 'Often disputed or tied to personal accounts',
      agency: 'Often retained or locked into proprietary proprietary CMS',
      hyc: '100% full intellectual property & GitHub repo transfer upon milestone completion',
      winner: 'hyc'
    },
    {
      feature: 'Timezone Overlap & Comms',
      freelancer: 'Irregular hours, slow messaging response times',
      agency: 'Strict 9-5 local time, meetings booked weeks in advance',
      hyc: '4 to 5 hours guaranteed daily overlap with US, UK, UAE & European business hours',
      winner: 'hyc'
    },
    {
      feature: 'Commercial Conversion Focus',
      freelancer: 'Focuses purely on cosmetic styling, ignores conversion mechanics',
      agency: 'Generic design templates resold with 3x markups',
      hyc: 'Speed-optimized Next.js, Core Web Vitals, Schema.org & server-side tracking',
      winner: 'hyc'
    },
    {
      feature: 'Native AI & Cloud Automations',
      freelancer: 'Limited to basic ChatGPT API wrapper scripts',
      agency: 'Slow to adopt emerging AI agent and vector RAG paradigms',
      hyc: 'Production AI agents, WhatsApp Cloud API, and secure private vector pipelines',
      winner: 'hyc'
    },
    {
      feature: 'Pricing & Accountability',
      freelancer: 'Hourly padding or abandoned scopes',
      agency: 'Inflated recurring retainers and hidden management fees',
      hyc: 'Transparent milestone pricing, 1-week risk-free trial on dedicated talent',
      winner: 'hyc'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Agency Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Why High-Growth Brands Choose HireYourCoder
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We bridge the agility and cost advantages of global technology talent with the accountability, architectural standards, and security of an enterprise tech firm.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-4 sm:p-5 font-bold text-slate-900 w-1/4">Evaluation Criteria</th>
                <th className="p-4 sm:p-5 font-semibold text-slate-500 w-1/4">Freelance Marketplaces</th>
                <th className="p-4 sm:p-5 font-semibold text-slate-500 w-1/4">Traditional Agencies</th>
                <th className="p-4 sm:p-5 font-extrabold text-blue-900 bg-blue-50/70 border-x border-blue-200/60 w-1/4">
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
                  <td className="p-4 sm:p-5 text-slate-500 align-top leading-relaxed">
                    <div className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 align-top leading-relaxed">
                    <div className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-slate-900 bg-blue-50/40 border-x border-blue-200/50 align-top leading-relaxed">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Mutual NDA Protection</h4>
              <p className="text-xs text-slate-600 mt-1">
                Enforceable confidentiality agreements before examining project files or proprietary data.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Agile Sprint Cadence</h4>
              <p className="text-xs text-slate-600 mt-1">
                2-week milestone cycles with live staging review links and transparent Git tracking.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Direct Slack Channel</h4>
              <p className="text-xs text-slate-600 mt-1">
                Real-time communication with the engineers actually building your product. No middleman.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Post-Launch Warranty</h4>
              <p className="text-xs text-slate-600 mt-1">
                30 days of comprehensive bug-fix coverage, cloud deployment monitoring, and handover docs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
