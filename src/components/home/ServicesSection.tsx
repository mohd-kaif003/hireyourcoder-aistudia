import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../../data/servicesData';
import { ArrowRight, CheckCircle2, Sparkles, Layers, Cpu, TrendingUp, Users } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Services', icon: Layers },
    { id: 'engineering', label: 'Software & Web', icon: Layers },
    { id: 'ai', label: 'AI & Automation', icon: Cpu },
    { id: 'growth', label: 'Growth & MarTech', icon: TrendingUp },
    { id: 'team', label: 'Dedicated Talent', icon: Users }
  ];

  const filteredServices = servicesData.filter(s => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'engineering') return ['web-development', 'web-application-development', 'mobile-app-development', 'saas-development', 'ecommerce-development', 'api-integration'].includes(s.slug);
    if (activeFilter === 'ai') return ['ai-automation', 'crm-automation', 'api-integration'].includes(s.slug);
    if (activeFilter === 'growth') return ['performance-marketing', 'digital-marketing', 'seo-services'].includes(s.slug);
    if (activeFilter === 'team') return ['dedicated-developers', 'custom-software-development'].includes(s.slug);
    return true;
  });

  return (
    <section id="services-section" className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-y border-slate-200/70">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Engineering & Growth Capabilities</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            High-Impact Engineering & Growth Services
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From modern Next.js web applications and mobile apps to autonomous AI agents and dedicated developer pods, we engineer software that drives real revenue.
          </p>

          {/* Filter Pills - Horizontally scrollable on mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mt-6 overflow-x-auto no-scrollbar pb-1 px-1">
            {filterTabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Header with Title & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-xs sm:text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {service.title.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {service.pricingModel ? service.pricingModel.split(',')[0] : service.startingPrice}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{typeof feat === 'string' ? feat : feat.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {service.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 text-slate-600 text-[10px] sm:text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                  >
                    Discuss Scope
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 sm:mt-12 p-4 sm:p-6 lg:p-7 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 shadow-2xs"
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              Need a specialized multi-stack architecture or custom pod?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              We frequently assemble custom dedicated pods combining senior frontend engineers, backend architects, and performance marketing leads.
            </p>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onNavigate('/free-project-estimate')}
              className="flex-1 sm:flex-initial bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer text-center"
            >
              Cost Estimator
            </button>
            <button
              onClick={onOpenConsultation}
              className="flex-1 sm:flex-initial bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs cursor-pointer text-center"
            >
              Book Discovery
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
