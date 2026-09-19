import React from 'react';
import { industriesData } from '../../data/industriesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustriesSectionProps {
  onNavigate: (path: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Engineered for High-Growth Industry Verticals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every sector has distinct compliance requirements, user journeys, and conversion triggers. We build tailored software that addresses your industry's specific bottlenecks.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.slice(0, 8).map((ind) => (
            <div
              key={ind.id}
              onClick={() => onNavigate(`/industries/${ind.slug}`)}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {ind.name.substring(0, 2).toUpperCase()}
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                  {ind.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {ind.tagline || ind.headline}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {(ind.digitalSolutions || ind.solutions || []).slice(0, 2).map((sol: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                <span>View Vertical Spec</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Industries CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/industries')}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-colors"
          >
            <span>Explore All 15+ Industry Verticals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
