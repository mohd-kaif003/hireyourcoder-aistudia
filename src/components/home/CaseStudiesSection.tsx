import React from 'react';
import { motion } from 'motion/react';
import { caseStudiesData } from '../../data/caseStudiesData';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface CaseStudiesSectionProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Commercial Outcomes</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
              Featured Case Studies & Architectures
            </h2>
            <p className="mt-2.5 text-xs sm:text-base text-slate-600 leading-relaxed">
              We focus on measurable qualitative and commercial outcomes: reduced latency, eliminated bottlenecks, and high-converting user interfaces.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/case-studies')}
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {caseStudiesData.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50/70 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Image Preview Banner */}
              <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={study.featuredImage}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 flex items-center justify-between text-white">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-blue-600/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-bold">
                    {study.industry}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                    {study.client}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider text-slate-400">The Challenge:</span>
                      <p className="text-slate-600 mt-0.5 line-clamp-2 text-xs">{study.challenge}</p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider text-slate-400">The Engineering Solution:</span>
                      <p className="text-slate-600 mt-0.5 line-clamp-2 text-xs">{study.solution}</p>
                    </div>
                  </div>

                  {/* Highlighted Results */}
                  <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Qualitative & Operational Wins:
                    </span>
                    {study.results.slice(0, 2).map((res, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {study.technology.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-white border border-slate-200/80 rounded text-[10px] sm:text-[11px] font-mono text-slate-600 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-200/70 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/case-studies/${study.slug}`)}
                    className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Read Implementation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                  >
                    Build Similar
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
