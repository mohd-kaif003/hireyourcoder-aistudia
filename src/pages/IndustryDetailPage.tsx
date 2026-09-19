import React, { useState } from 'react';
import { IndustryItem } from '../types';
import { 
  ArrowLeft, CheckCircle2, Sparkles, MessageSquare, Send, ArrowRight, 
  Building2, Layers, Check 
} from 'lucide-react';
import { saveNewLead } from '../utils/leadsStorage';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface IndustryDetailPageProps {
  industry: IndustryItem;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  industry,
  onNavigate,
  onOpenConsultation
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: 'Growth Stage / Production Platform',
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
        service: `${industry.name} Industry Software`,
        budget: formData.budget,
        timeline: '1-2 Months',
        message: formData.message || `Industry Solution Inquiry for ${industry.name}`,
        source: `Industry Page: ${industry.slug}`,
        utm: {
          utm_source: 'industry_detail_form',
          landing_page: `/industries/${industry.slug}`
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
        
        {/* Breadcrumbs & Back navigation */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <Breadcrumbs 
            items={[
              { label: 'Industries', path: '/industries' },
              { label: industry.title }
            ]} 
            onNavigate={onNavigate} 
          />
          <button
            onClick={() => onNavigate('/industries')}
            className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Industries</span>
          </button>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-14 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-blue-400 block mb-2">
              Industry Vertical Solution
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight text-white">
              Software & Digital Solutions for {industry.name}
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {industry.headline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                <span>Consult Our {industry.name} Tech Lead</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20am%20interested%20in%20digital%20solutions%20for%20the%20${encodeURIComponent(industry.name)}%20industry.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 font-semibold px-4 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4">
                Domain Overview & Engineering Approach
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {(industry as any).overview || industry.tagline || industry.headline}
              </p>
            </div>

            {/* Core Challenges We Solve */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                Critical Pain Points We Solve in {industry.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(industry.industryProblems || industry.painPoints || []).map((pain: string, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-red-50/40 border border-red-200/60 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Solutions Provided */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                Custom Systems & Automations We Build for {industry.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(industry.digitalSolutions || industry.solutions || []).map((sol: string, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Case Study Reference */}
            {(industry as any).caseStudyRef && (
              <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Related Vertical Case Study</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Read how we delivered outcomes in {industry.name}</h4>
                </div>
                <button
                  onClick={() => onNavigate(`/case-studies/${(industry as any).caseStudyRef}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0"
                >
                  View Case Study Story
                </button>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800">
              {isSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold">Request Received</h3>
                  <p className="text-xs text-slate-300">
                    Our lead architect for {industry.name} will reach out with relevant architecture samples.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <h3 className="text-lg font-bold font-heading">
                      Build for {industry.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Get an itemized proposal for custom software in your domain.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Priya Rao"
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
                      placeholder="priya@domain.com"
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
                    <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">Project Scope</label>
                    <textarea
                      rows={2}
                      placeholder="Current systems, target integrations, or launch timeline..."
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
                    <span>Request Discovery Spec</span>
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
