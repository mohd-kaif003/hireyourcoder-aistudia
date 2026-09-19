import React, { useState } from 'react';
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
    { id: 'growth', label: 'Growth & Marketing', icon: TrendingUp },
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
    <section id="services-section" className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Digital Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            High-Impact Engineering & Growth Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From modern Next.js web applications and cross-platform mobile apps to autonomous AI agents and dedicated developer pods, we engineer technology that converts.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeFilter === tab.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Title & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.title.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {service.pricingModel ? service.pricingModel.split(',')[0] : service.startingPrice}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{typeof feat === 'string' ? feat : feat.title}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <span>Explore Service Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Book Call
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner inside Services Section */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-heading">
              Need a specialized architecture or multi-discipline team?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              We frequently assemble custom pods that combine frontend engineers, backend architects, and performance marketers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('/free-project-estimate')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-3 rounded-xl transition-colors"
            >
              Calculate Scope
            </button>
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm"
            >
              Consult an Architect
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
