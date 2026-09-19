import React from 'react';
import { motion } from 'motion/react';
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
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5">
        {onOpenCRM && (
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenCRM}
            className="flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 px-3.5 py-2.5 rounded-full shadow-md border border-slate-200/90 transition-all text-xs font-semibold cursor-pointer"
            title="Open Inbound Leads CRM Hub"
          >
            <Database className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-mono text-[11px] font-bold">CRM Hub</span>
          </motion.button>
        )}

        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg shadow-emerald-600/25 transition-all duration-150 border border-emerald-500/40"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-300 rounded-full" />
          </div>
          <span className="text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar (Compact, Safe-Area aware, High-converting) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-xl flex items-center gap-1.5">
        <a
          href="tel:+919568497688"
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 px-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors border border-slate-200/80"
          aria-label="Call Engineering Team"
        >
          <Phone className="w-3 h-3 text-blue-600" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 py-2 px-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-3 h-3 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-[1.4] bg-slate-950 hover:bg-slate-900 text-white py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors shadow-xs cursor-pointer"
        >
          <span>Book Call</span>
          <ArrowRight className="w-3 h-3 text-blue-400" />
        </button>
      </div>
    </>
  );
};
