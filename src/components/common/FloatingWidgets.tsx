import React from 'react';
import { MessageSquare, Phone, ArrowRight, Database } from 'lucide-react';

interface FloatingWidgetsProps {
  onOpenConsultation: () => void;
  onOpenCRM?: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenConsultation, onOpenCRM }) => {
  const whatsappUrl = "https://wa.me/919568497688?text=Hello%20HireYourCoder%20team,%20I%20am%20interested%20in%20a%20technical%20consultation%20for%20my%20project.";

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp & CRM Icon */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        {onOpenCRM && (
          <button
            onClick={onOpenCRM}
            className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-slate-200 px-3.5 py-3 rounded-full shadow-lg border border-slate-700/60 transition-all text-xs font-medium hover:text-white"
            title="Open Inbound Leads CRM Hub"
          >
            <Database className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-[11px] font-bold">CRM Hub</span>
          </button>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/45 transition-all duration-200 transform hover:-translate-y-0.5 border border-emerald-400/30"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full" />
          </div>
          <span className="text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>


      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-3 shadow-2xl flex items-center gap-2">
        <a
          href="tel:+919568497688"
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-2.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
          aria-label="Call Engineering Team"
        >
          <Phone className="w-3.5 h-3.5 text-blue-600" />
          <span>Call Us</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-[1.5] bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-md shadow-blue-500/25"
        >
          <span>Free Consultation</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </>
  );
};
