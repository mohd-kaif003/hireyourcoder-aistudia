import React, { useState } from 'react';
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, ShieldCheck, 
  Send, CheckCircle2, Sparkles, Building 
} from 'lucide-react';
import { saveNewLead } from '../utils/leadsStorage';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: '$2,500 - $5,000 (₹1.75L - ₹3.5L)',
    timeline: 'Within 1 Month',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      saveNewLead({
        name: formData.name.trim(),
        company: formData.company.trim() || undefined,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        country: 'Global / Inbound',
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message.trim() || 'Contact Page Form Inquiry',
        source: 'Contact Page',
        utm: {
          utm_source: 'contact_page',
          landing_page: '/contact'
        }
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMsg('Failed to submit form. Please reach out via WhatsApp.');
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Access to Principal Engineers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Let's Talk Architecture, Timelines & Investment
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a project in mind or need dedicated developers? We respond to all qualified inquiries within 2 to 4 hours with an itemized review.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-950 font-heading">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Call Directly</span>
                    <a href="tel:+919568497688" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      +91 95684 97688
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Direct line to solutions team</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                    <a href="mailto:contact@hireyourcoder.com" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      contact@hireyourcoder.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">RFP proposals & scope specs</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Official</span>
                    <a 
                      href="https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20would%20like%20to%20discuss%20a%20project." 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      +91 95684 97688
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Fastest reply (typically under 15 mins)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-950 font-heading">
                Headquarters & Regional Offices
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Engineering Headquarters:</strong>
                    <span>Civil Lines / MDA Commercial Complex, Moradabad, Uttar Pradesh 244001, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Delhi NCR Regional Hub:</strong>
                    <span>Sector 62, Noida & Cyber City, Gurugram, Delhi NCR, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Operating Hours:</strong>
                    <span>Monday – Saturday: 9:00 AM – 8:00 PM IST<br />(Emergency SLA 24/7 support active for production cloud contracts)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    Message Successfully Dispatched
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, {formData.name}. Your inquiry has been sent directly to our solutions lead. We will respond to {formData.email} and {formData.phone} shortly.
                  </p>
                  <div className="pt-4 flex justify-center">
                    <a
                      href={`https://wa.me/919568497688?text=Hi%20HireYourCoder,%20I%20just%20sent%20a%20message%20regarding%20${encodeURIComponent(formData.service)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue Conversation on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-slate-950">
                      Send a Message or Project Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill in the details below to receive a milestone roadmap and transparent cost estimate.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 95684 97688"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Brand</label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Global"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI Automation & Agents">AI Automation & Agents</option>
                        <option value="Dedicated Developers">Dedicated Developers</option>
                        <option value="Performance Marketing">Performance Marketing</option>
                        <option value="API & WhatsApp Cloud Integration">API & WhatsApp Cloud Integration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="$1,000 - $2,500 (₹75k - ₹1.8L)">$1,000 - $2,500 (₹75k - ₹1.8L)</option>
                        <option value="$2,500 - $5,000 (₹1.75L - ₹3.5L)">$2,500 - $5,000 (₹1.75L - ₹3.5L)</option>
                        <option value="$5,000 - $10,000 (₹3.5L - ₹7.5L)">$5,000 - $10,000 (₹3.5L - ₹7.5L)</option>
                        <option value="$10,000+ (Enterprise Scope)">$10,000+ (Enterprise Scope)</option>
                        <option value="Dedicated Developer Retainer">Dedicated Developer Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Requirements or Questions</label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding features, reference apps, current tech stack, or launch deadline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Message & Book Technical Review'}</span>
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-400">
                    <span>100% Non-Disclosure Guaranteed • Direct Senior Developer Response</span>
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
