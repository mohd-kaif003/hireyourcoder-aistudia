import React from 'react';
import { industriesData } from '../data/industriesData';
import { ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pt-28 pb-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Vertical Domain Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Tailored Engineering for 15+ Industry Verticals
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don't build one-size-fits-all generic templates. Each industry vertical features tailored compliance, workflow automation, and custom conversion paths.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {ind.name.substring(0, 2).toUpperCase()}
                </div>

                <h2 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                  {ind.name}
                </h2>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {ind.tagline || ind.headline}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Systems Engineered:</div>
                  {(ind.digitalSolutions || ind.solutions || []).slice(0, 3).map((sol: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/industries/${ind.slug}`)}
                  className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Industry Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
