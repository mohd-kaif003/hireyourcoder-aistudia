import React from 'react';
import { locationsData } from '../data/locationsData';
import { ArrowRight, MapPin, Globe, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface LocationsPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const domesticLocations = locationsData.filter(l => l.country === 'India');
  const internationalLocations = locationsData.filter(l => l.country !== 'India');

  return (
    <div className="pt-28 pb-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Delivery & Local Hubs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Serving Ambitious Brands Across India & Worldwide
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered in Moradabad with deep technical hubs across Delhi NCR and Bangalore, we partner seamlessly with founders and enterprises across the US, UK, UAE, Australia, and Singapore.
          </p>
        </div>

        {/* Moradabad Feature Showcase */}
        <div className="mb-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-500/30 relative overflow-hidden shadow-xl">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Engineering Headquarters & Export Specialization
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Moradabad: Web Development & B2B Export Digitization Hub
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Moradabad is India's world-famous brass and metalware export capital. We empower local exporters, manufacturers, and modern retailers with high-speed B2B digital catalogs, WhatsApp automation pipelines, and international buyer portals.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/locations/moradabad')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-xl text-xs flex items-center gap-2 shadow-md shadow-blue-500/25"
              >
                <span>Explore Moradabad Hub Spec</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl text-xs backdrop-blur-sm transition-colors"
              >
                Book Moradabad Tech Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Domestic Hubs */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              Indian Innovation Hubs & Industrial Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domesticLocations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => onNavigate(`/locations/${loc.slug}`)}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {loc.flag || '📍'} {loc.name}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{loc.timeZone || 'IST'}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {loc.headline || loc.tagline}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {loc.description || (loc.localBusinessChallenges && loc.localBusinessChallenges[0]) || loc.deliveryModel}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                    {(loc.popularServices || loc.servicesOffered || []).slice(0, 3).map((srv: string) => (
                      <span key={srv} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-700">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600">
                  <span>View Location Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Hubs */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Globe className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              International Delivery Hubs & Dedicated Timezone Overlap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalLocations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => onNavigate(`/locations/${loc.slug}`)}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
                      {loc.flag || '🌐'} {loc.name} ({loc.country})
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{loc.timeZone || 'Global'}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                    {loc.headline || loc.tagline}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {loc.description || (loc.localBusinessChallenges && loc.localBusinessChallenges[0]) || loc.deliveryModel}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                    Overlap: {loc.timeZoneOverlap || loc.deliveryModel}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-indigo-600">
                  <span>View Regional Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
