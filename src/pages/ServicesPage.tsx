import React from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pt-28 pb-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Capabilities Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Comprehensive Digital Engineering & Growth Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From modern responsive marketing websites and multi-tenant SaaS architectures to autonomous AI workflow agents and dedicated software engineers.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.title.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {service.pricingModel ? service.pricingModel.split(',')[0] : service.startingPrice}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">What We Deliver:</div>
                  {service.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{typeof feat === 'string' ? feat : feat.title}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Service Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Book Discovery
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading">Not sure which service fits your current stage?</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Run our interactive estimate calculator or speak with our solutions architect directly.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('/free-project-estimate')}
              className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-3 rounded-xl transition-colors border border-slate-700"
            >
              Calculate Project Estimate
            </button>
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-md shadow-blue-500/30"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
