import React, { useState } from 'react';
import { LocationItem } from '../types';
import { 
  ArrowLeft, MapPin, Globe, CheckCircle2, MessageSquare, 
  Send, Phone, Clock, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { saveNewLead } from '../utils/leadsStorage';

interface LocationDetailPageProps {
  location: LocationItem;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({
  location,
  onNavigate,
  onOpenConsultation
}) => {
  const popularServicesList = location.popularServices || location.servicesOffered || ['Website Development'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: popularServicesList[0] || 'Website Development',
    budget: '$2,500 - $5,000 (₹1.75L - ₹3.5L)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    try {
      saveNewLead({
        name: formData.name,
        company: formData.company || undefined,
        email: formData.email,
        phone: formData.phone,
        country: location.country,
        service: formData.service,
        budget: formData.budget,
        timeline: '1-2 Months',
        message: formData.message || `Location Lead for ${location.name}`,
        source: `Location: ${location.slug}`,
        utm: {
          utm_source: 'location_page_form',
          landing_page: `/locations/${location.slug}`
        }
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/locations')}
            className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Locations</span>
          </button>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-14 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3">
              <MapPin className="w-4 h-4" />
              <span>{location.name}, {location.country} Regional Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              {location.headline}
            </h1>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {location.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-blue-500/25 flex items-center gap-2"
              >
                <span>Schedule {location.name} Tech Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20am%20located%20in%20${encodeURIComponent(location.name)}%20and%20looking%20for%20development%20services.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 font-semibold px-4 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Timezone & Overlap Badge */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Timezone: <strong className="text-white">{location.timeZone}</strong></span>
              </div>
              <div>
                <span>Guaranteed Overlap: <strong className="text-white">{location.timeZoneOverlap}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Content & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4">
                Local Market Dynamics & Technology Demands in {location.name}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {(location as any).localFocus || location.tagline || location.headline}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                Most Requested Services in {location.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularServicesList.map((srv: string, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {(location as any).address && (
              <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-200/80">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Headquarters & Physical Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {(location as any).address}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-blue-700">
                  <a href="tel:+919568497688" className="hover:underline">+91 95684 97688</a>
                  <span>•</span>
                  <a href="mailto:contact@hireyourcoder.com" className="hover:underline">contact@hireyourcoder.com</a>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800">
              {isSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold">Inquiry Logged</h3>
                  <p className="text-xs text-slate-300">
                    Our {location.name} engagement lead will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <h3 className="text-lg font-bold font-heading">
                      Connect with {location.name} Team
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Discuss your software requirements with local or international overlap.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="work@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 95684 97688"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {popularServicesList.map((s: string) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                      <option value="Dedicated Developers">Dedicated Developers</option>
                      <option value="General Technical Consultation">General Technical Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Message</label>
                    <textarea
                      rows={2}
                      placeholder="Project details or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/30"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
