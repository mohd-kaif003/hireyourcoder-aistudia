import React from 'react';
import { caseStudiesData } from '../../data/caseStudiesData';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CaseStudiesSectionProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Business Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
              Featured Case Studies & Architectures
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We focus on measurable qualitative and commercial outcomes: reduced latency, eliminated bottlenecks, and high-converting user interfaces.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/case-studies')}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 shrink-0"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={study.featuredImage}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <span className="text-xs font-mono uppercase tracking-wider bg-blue-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full font-bold">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {study.client}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-slate-400">The Challenge:</span>
                      <p className="text-slate-600 mt-0.5 line-clamp-2">{study.challenge}</p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-slate-400">The Engineering Solution:</span>
                      <p className="text-slate-600 mt-0.5 line-clamp-2">{study.solution}</p>
                    </div>
                  </div>

                  {/* Highlighted Results */}
                  <div className="mt-5 pt-4 border-t border-slate-200/80 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Qualitative & Operational Wins:
                    </span>
                    {study.results.slice(0, 2).map((res, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {study.technology.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-white border border-slate-200 rounded-md text-[11px] font-mono text-slate-600 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/case-studies/${study.slug}`)}
                    className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Implementation Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    Build Similar
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
