import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Shield, Sparkles } from 'lucide-react';
import { saveNewLead } from '../../utils/leadsStorage';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  sourceContext?: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Inquiry',
  sourceContext = 'Consultation Modal'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    service: defaultService,
    budget: '$2,500 - $5,000 (₹1.75L - ₹3.5L)',
    timeline: 'Within 1 Month',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please provide a phone or WhatsApp number for project coordination.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Collect UTM parameters if present in the current URL
      const urlParams = new URLSearchParams(window.location.search);
      const utm = {
        utm_source: urlParams.get('utm_source') || 'direct',
        utm_medium: urlParams.get('utm_medium') || 'website',
        utm_campaign: urlParams.get('utm_campaign') || 'lead_modal',
        landing_page: window.location.pathname
      };

      saveNewLead({
        name: formData.name.trim(),
        company: formData.company.trim() || undefined,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        country: formData.country,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message.trim() || 'Request for free technical consultation.',
        source: sourceContext,
        utm
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMsg('Something went wrong. Please reach us directly via WhatsApp.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
              Consultation Request Received
            </h3>
            <p className="text-slate-600 text-sm mt-2 max-w-md">
              Thanks! Our principal solutions architect is reviewing your requirements and will reach out to you within 2 to 4 business hours with an initial roadmap.
            </p>

            <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 w-full text-left text-xs space-y-1.5 text-slate-700">
              <div><span className="font-semibold text-slate-900">Name:</span> {formData.name}</div>
              <div><span className="font-semibold text-slate-900">Email:</span> {formData.email}</div>
              <div><span className="font-semibold text-slate-900">Phone:</span> {formData.phone}</div>
              <div><span className="font-semibold text-slate-900">Service:</span> {formData.service}</div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full">
              <a
                href={`https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.service)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fast-Track on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 px-4 rounded-xl text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Engineering Partner</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading">
                Book a Free Technical Consultation
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">
                Talk directly with senior architects. No generic agency pitches—just clear answers on architecture, cost, and timelines.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Ventures Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 95684 97688 / +1 415..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="AI Automation & Agents">AI Automation & Agents</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="API & WhatsApp Integration">API & WhatsApp Integration</option>
                    <option value="Dedicated Developers">Dedicated Developers</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value="SaaS MVP Development">SaaS MVP Development</option>
                    <option value="CRM & Business Automation">CRM & Business Automation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="$1,000 - $2,500 (₹75k - ₹1.8L)">$1,000 - $2,500 (₹75k - ₹1.8L)</option>
                    <option value="$2,500 - $5,000 (₹1.75L - ₹3.5L)">$2,500 - $5,000 (₹1.75L - ₹3.5L)</option>
                    <option value="$5,000 - $10,000 (₹3.5L - ₹7.5L)">$5,000 - $10,000 (₹3.5L - ₹7.5L)</option>
                    <option value="$10,000+ (₹7.5L+ Enterprise)">$10,000+ (₹7.5L+ Enterprise)</option>
                    <option value="Monthly Retainer / Developer">Monthly Retainer / Developer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Brief or Core Objectives
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe what you are looking to build or automate, target launch date, or current pain points..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit & Request Free Consultation</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>Strict Non-Disclosure & 100% Privacy. Zero spam.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
