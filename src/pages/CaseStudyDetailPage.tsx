import React from 'react';
import { CaseStudy } from '../types';
import { 
  ArrowLeft, CheckCircle2, Sparkles, MessageSquare, ArrowRight, 
  Layers, Code2, ShieldCheck, Terminal, Cpu 
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  caseStudy: CaseStudy;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
  caseStudy,
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/case-studies')}
            className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Case Studies</span>
          </button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
              {caseStudy.industry}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Client: {caseStudy.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            {caseStudy.title}
          </h1>
        </div>

        {/* Featured Banner */}
        <div className="rounded-3xl overflow-hidden mb-12 shadow-lg border border-slate-200">
          <img
            src={caseStudy.featuredImage}
            alt={caseStudy.title}
            referrerPolicy="no-referrer"
            className="w-full h-80 sm:h-96 object-cover"
          />
        </div>

        {/* Results Highlight Cards */}
        <div className="mb-12 p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Key Quantitative & Qualitative Wins</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caseStudy.results.map((res, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Content */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 font-heading mb-3">
              The Challenge & Bottlenecks
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 font-heading mb-3">
              Engineering Architecture & Solution
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 font-heading mb-4">
              Technologies & Infrastructure Deployed
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technology.map(tech => (
                <span key={tech} className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading">
              Ready to build similar high-performance software?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Talk directly with the senior engineers who build and deploy our client systems.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-md shadow-blue-500/30"
            >
              Request Free Consultation
            </button>
            <a
              href="https://wa.me/919568497688"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-3 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
