import React from 'react';
import { 
  ShieldCheck, Award, Users, Globe, ArrowRight, CheckCircle2, 
  Sparkles, Code2, Lock, MessageSquare 
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Excellence & Growth Partnership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            We Build Reliable Software for Businesses That Cannot Afford Downtime.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            HireYourCoder was founded with a single mission: bridge the gap between high-level architectural craftsmanship and practical, revenue-generating commercial outcomes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Our Journey: From Moradabad's Industrial Heart to Global Enterprises
            </h2>
            <p>
              Headquartered in <strong>Moradabad, Uttar Pradesh</strong>—globally renowned as India's brassware manufacturing and export hub—our early roots were formed by modernizing multi-million-dollar export houses that needed high-speed B2B digital catalogs, international buyer portals, and automated ERP workflows.
            </p>
            <p>
              We witnessed firsthand how bloated, slow-loading templates and unresponsive agencies cost business owners genuine export contracts and customer trust. We set out to change that standard.
            </p>
            <p>
              Today, HireYourCoder operates a distributed team of senior engineers, cloud architects, and performance marketers across <strong>Moradabad, Delhi NCR, and Bangalore</strong>, delivering production systems for clients in the US, UK, UAE, Australia, and across India.
            </p>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-950 font-heading">
              Our Non-Negotiable Core Values
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Technical Debt Mindset</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Strict TypeScript type safety, automated linting, modular components, and documented APIs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Client Code Ownership</h4>
                  <p className="text-xs text-slate-600 mt-0.5">You retain all intellectual property, Git repositories, domain assets, and hosting keys upon milestone completion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Commercial Alignment First</h4>
                  <p className="text-xs text-slate-600 mt-0.5">We measure success not in lines of code written, but in leads captured, latency dropped, and operations saved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Delivery Stats / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-600">30+</div>
            <div className="text-xs font-bold uppercase text-slate-900 mt-2">Senior Engineers & Architects</div>
            <div className="text-[11px] text-slate-500 mt-1">Pre-vetted, fluent English communication</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">95+</div>
            <div className="text-xs font-bold uppercase text-slate-900 mt-2">Core Web Vitals Guarantee</div>
            <div className="text-[11px] text-slate-500 mt-1">Sub-second load times on mobile devices</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-600">2-4 Hrs</div>
            <div className="text-xs font-bold uppercase text-slate-900 mt-2">Guaranteed Response Window</div>
            <div className="text-[11px] text-slate-500 mt-1">Direct developer access via Slack & WhatsApp</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-600">100%</div>
            <div className="text-xs font-bold uppercase text-slate-900 mt-2">IP & Code Repository Handover</div>
            <div className="text-[11px] text-slate-500 mt-1">Zero vendor lock-in or proprietary traps</div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading">
              Looking for an engineering partner you can rely on?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Book a direct discovery session with our principal solutions architect.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shadow-md shadow-blue-500/25"
            >
              Get Free Consultation
            </button>
            <a
              href="https://wa.me/919568497688"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3.5 rounded-xl text-xs transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
