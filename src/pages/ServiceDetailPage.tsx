import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, 
  Send, Phone, ChevronDown, Check, Terminal, Layers, ArrowLeft
} from 'lucide-react';
import { saveNewLead } from '../utils/leadsStorage';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onOpenConsultation
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
        country: 'Global / Inbound',
        service: service.title,
        budget: formData.budget,
        timeline: '1-2 Months',
        message: formData.message || `Service Detail Page Inquiry for ${service.title}`,
        source: `Service Page: ${service.slug}`,
        utm: {
          utm_source: 'service_detail_form',
          landing_page: `/services/${service.slug}`
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
        
        {/* Back navigation */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/services')}
            className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50/70 via-white to-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs mb-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Service Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              {(service as any).heroHeadline || service.heroH1 || service.shortDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-blue-500/20 flex items-center gap-2"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/free-project-estimate')}
                className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3.5 rounded-xl border border-slate-200 text-sm transition-colors"
              >
                Calculate Project Cost
              </button>

              <a
                href={`https://wa.me/919568497688?text=Hi%20HireYourCoder,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-semibold px-4 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Pricing info */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <div><span className="font-bold text-slate-900">Engagement Model:</span> {service.pricingModel || service.startingPrice || 'Fixed-Scope & Dedicated Sprint'}</div>
              <div><span className="font-bold text-slate-900">Turnaround:</span> Typically 3-6 weeks per agile milestone</div>
            </div>
          </div>
        </div>

        {/* Content Layout: 2 Columns (Main Content + Sticky Sidebar Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* 1. What is this service & Who is it for */}
            <div>
              <h2 className="text-2xl font-bold text-slate-950 font-heading mb-4">
                What is this service & Who is it for?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {(service as any).description || service.ourSolution || service.shortDesc}
              </p>
            </div>

            {/* 2. Key Deliverables & Features */}
            <div>
              <h2 className="text-2xl font-bold text-slate-950 font-heading mb-6">
                What is Included in Our {service.title} Engagements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-800">
                        {typeof feat === 'string' ? feat : feat.title}
                      </div>
                      {typeof feat !== 'string' && feat.desc && (
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{feat.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Tech Stack Used */}
            <div>
              <h2 className="text-2xl font-bold text-slate-950 font-heading mb-4">
                Core Technology Stack & Architecture
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                We select technologies tailored for maximum runtime velocity, SEO indexability, and cloud security:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-900 font-mono font-bold text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Process / Workflow */}
            <div>
              <h2 className="text-2xl font-bold text-slate-950 font-heading mb-6">
                Agile Delivery Workflow
              </h2>
              <div className="space-y-4">
                {service.process.map((step: any, idx: number) => (
                  <div key={step.step || idx} className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {step.step || `0${idx + 1}`}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm font-heading">{step.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. FAQs Specific to this service */}
            {service.faqs && service.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-950 font-heading mb-6">
                  {service.title} FAQs
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-sm text-slate-900 font-heading">{faq.question}</h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sticky Sidebar Consultation Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800">
              
              {isSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold">Inquiry Logged</h3>
                  <p className="text-xs text-slate-300">
                    Our principal architect will review your {service.title} request and contact you within 2 business hours.
                  </p>
                  <a
                    href={`https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20just%20sent%20an%20inquiry%20for%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs mt-4"
                  >
                    Chat on WhatsApp Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
                      Fast-Track Discovery
                    </span>
                    <h3 className="text-lg font-bold font-heading mt-0.5">
                      Inquire About {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Receive an itemized quote and milestone roadmap.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Taylor"
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
                      placeholder="alex@company.com"
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
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Project Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="$1,200 - $2,500 (₹1L - ₹2L)">$1,200 - $2,500 (₹1L - ₹2L)</option>
                      <option value="$2,500 - $5,000 (₹2L - ₹4L)">$2,500 - $5,000 (₹2L - ₹4L)</option>
                      <option value="$5,000 - $10,000 (₹4L - ₹8L)">$5,000 - $10,000 (₹4L - ₹8L)</option>
                      <option value="$10,000+ (Enterprise)">$10,000+ (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Brief Requirements</label>
                    <textarea
                      rows={2}
                      placeholder="Target launch date, key integrations, or current challenges..."
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
                    <span>{isSubmitting ? 'Submitting...' : 'Request Milestone Quote'}</span>
                  </button>

                  <div className="pt-2 text-center text-[11px] text-slate-400">
                    <span>100% Confidential • Mutual NDA Protected</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
