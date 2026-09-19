import React from 'react';
import { motion } from 'motion/react';
import { industriesData } from '../../data/industriesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustriesSectionProps {
  onNavigate: (path: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-t border-slate-200/70">
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
            <span>Specialized Domain Engineering</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Engineered for High-Growth Industry Verticals
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Every sector has distinct compliance requirements, user journeys, and conversion triggers. We build tailored software that addresses your industry's specific operational needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {industriesData.slice(0, 8).map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 4) * 0.05 }}
              onClick={() => onNavigate(`/industries/${ind.slug}`)}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs sm:text-sm mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {ind.name.substring(0, 2).toUpperCase()}
                </div>

                <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                  {ind.name}
                </h3>

                <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {ind.tagline || ind.headline}
                </p>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 space-y-1.5">
                  {(ind.digitalSolutions || ind.solutions || []).slice(0, 2).map((sol: string, sIdx: number) => (
                    <div key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Industries CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={() => onNavigate('/industries')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-colors shadow-2xs cursor-pointer"
          >
            <span>Explore All 15+ Industry Verticals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
