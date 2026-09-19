import React from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pt-28 pb-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Engineering Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Client Success Stories & Technical Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore how we engineer custom software, automate enterprise workflows, and eliminate operational bottlenecks for ambitious companies.
          </p>
        </div>

        {/* List of Case Studies */}
        <div className="space-y-12">
          {caseStudiesData.map((study, idx) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[400px] overflow-hidden bg-slate-900">
                <img
                  src={study.featuredImage}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-blue-600 font-bold">
                    {study.industry}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-300 mt-2">
                    Client: {study.client}
                  </h4>
                </div>
              </div>

              {/* Text Body Side */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading leading-tight">
                    {study.title}
                  </h2>

                  <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <strong className="text-slate-900 block text-xs uppercase tracking-wider text-slate-400">The Problem:</strong>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 block text-xs uppercase tracking-wider text-slate-400">Our Technical Solution:</strong>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
                      Measurable Outcomes:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {study.technology.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md bg-slate-100 font-mono text-[11px] text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/case-studies/${study.slug}`)}
                    className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Implementation Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    Build Similar Architecture
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
