import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, CheckCircle2, MessageSquare, Phone, Mail, Shield, 
  Clock, Lock, Sparkles, Check 
} from 'lucide-react';
import { saveNewLead } from '../../utils/leadsStorage';

export const LeadGenerationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Web Application Development',
    budget: '$2,500 - $5,000 (₹1.75L - ₹3.5L)',
    timeline: 'Within 1 Month',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone or WhatsApp number.');
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
        message: formData.message.trim() || 'Homepage Inbound Consultation Request',
        source: 'Homepage On-Page Lead Form',
        utm: {
          utm_source: 'homepage_bottom_form',
          landing_page: '/'
        }
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMsg('Failed to submit form. Please reach out via WhatsApp.');
    }
  };

  return (
    <section id="consultation-section" className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Architectural Review</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Get an Honest Technical Assessment & Clear Milestone Quote.
            </h2>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Skip high-pressure sales pitches. Speak directly with our engineering architects to review your technical requirements, timeline constraints, and estimated milestone costs.
            </p>

            {/* Value Guarantees */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Guaranteed Response in 2-4 Hours</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400">Our engineering leads review every submission promptly.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Mutual NDA & Complete Confidentiality</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400">Your ideas, trade secrets, and existing codebases remain strictly private.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Itemized Milestone Cost Breakdown</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400">Clear deliverables per sprint. No hidden retainers or surprises.</p>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-4 sm:pt-5 border-t border-slate-800 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Directly: <a href="tel:+919568497688" className="text-white hover:underline font-semibold">+91 95684 97688</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Email Inquiries: <a href="mailto:contact@hireyourcoder.com" className="text-white hover:underline font-semibold">contact@hireyourcoder.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Priority: <a href="https://wa.me/919568497688" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-semibold">+91 95684 97688 (24/7 Response)</a></span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: High-Converting Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 shadow-2xl border border-slate-200/90">
              {isSubmitted ? (
                <div className="py-8 sm:py-12 text-center space-y-3.5">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">
                    Consultation Request Successfully Logged
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you, {formData.name}. Our solutions architect is reviewing your inquiry. We will contact you at {formData.email} and via WhatsApp.
                  </p>
                  <div className="pt-3 flex justify-center">
                    <a
                      href={`https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20just%20submitted%20the%20consultation%20form%20for%20${encodeURIComponent(formData.service)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-5 rounded-xl text-xs flex items-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Speed Up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-950">
                      Request Your Project Discovery Session
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Share your high-level project goals to get started.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe / Sneha Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 95684 97688 / +1 415..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Dynamics Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Web Application Development">Web Application Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI Automation & Agents">AI Automation & Agents</option>
                        <option value="Performance Marketing">Performance Marketing</option>
                        <option value="Dedicated Developers">Dedicated Developers</option>
                        <option value="API & WhatsApp Integration">API & WhatsApp Integration</option>
                        <option value="SaaS MVP Development">SaaS MVP Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="$1,000 - $2,500 (₹75k - ₹1.8L)">$1,000 - $2,500 (₹75k - ₹1.8L)</option>
                        <option value="$2,500 - $5,000 (₹1.75L - ₹3.5L)">$2,500 - $5,000 (₹1.75L - ₹3.5L)</option>
                        <option value="$5,000 - $10,000 (₹3.5L - ₹7.5L)">$5,000 - $10,000 (₹3.5L - ₹7.5L)</option>
                        <option value="$10,000+ (Enterprise Scope)">$10,000+ (Enterprise Scope)</option>
                        <option value="Monthly Developer Retainer">Monthly Developer Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">Tell us about your project</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you are looking to build or solve, key integrations, or launch target..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="pt-1.5">
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 border border-slate-900 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-blue-400" />
                          <span>Submit & Schedule Free Consultation</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
