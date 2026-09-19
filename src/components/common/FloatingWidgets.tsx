import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, Calendar, Database, Sparkles, ChevronRight } from 'lucide-react';

interface FloatingWidgetsProps {
  onOpenConsultation: () => void;
  onOpenCRM?: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenConsultation, onOpenCRM }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const whatsappUrl = "https://wa.me/919568497688?text=Hello%20HireYourCoder%20team,%20I%20am%20interested%20in%20a%20project%20consultation.";

  return (
    <aside 
      aria-label="Quick Connect Actions"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
    >
      {/* Sleek Vertical Floating Strip on Left Center */}
      <div className="bg-white/95 backdrop-blur-md border-y border-r border-slate-200/90 rounded-r-2xl shadow-xl py-2 px-1.5 flex flex-col items-center gap-2">
        
        {/* WhatsApp Button */}
        <div className="relative flex items-center">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredItem('whatsapp')}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-sm shadow-emerald-500/30 transition-colors relative"
            aria-label="Direct WhatsApp Chat"
          >
            <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-300 rounded-full" />
          </motion.a>

          {/* Desktop Tooltip Pill */}
          <AnimatePresence>
            {hoveredItem === 'whatsapp' && (
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 8 }}
                exit={{ opacity: 0, x: -6 }}
                className="hidden sm:block absolute left-full whitespace-nowrap bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-md z-50 pointer-events-none"
              >
                Chat on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direct Phone Call Button */}
        <div className="relative flex items-center">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            href="tel:+919568497688"
            onMouseEnter={() => setHoveredItem('phone')}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 flex items-center justify-center transition-colors"
            aria-label="Call Engineering Team"
          >
            <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </motion.a>

          <AnimatePresence>
            {hoveredItem === 'phone' && (
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 8 }}
                exit={{ opacity: 0, x: -6 }}
                className="hidden sm:block absolute left-full whitespace-nowrap bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-md z-50 pointer-events-none"
              >
                Call: +91 95684 97688
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Book Free Consultation Modal Trigger */}
        <div className="relative flex items-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={onOpenConsultation}
            onMouseEnter={() => setHoveredItem('consult')}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-center shadow-sm cursor-pointer"
            aria-label="Book Free Consultation"
          >
            <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-400" />
          </motion.button>

          <AnimatePresence>
            {hoveredItem === 'consult' && (
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 8 }}
                exit={{ opacity: 0, x: -6 }}
                className="hidden sm:block absolute left-full whitespace-nowrap bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-md z-50 pointer-events-none"
              >
                Book Free Consultation
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Inbound CRM Quick Portal (Optional) */}
        {onOpenCRM && (
          <div className="relative flex items-center border-t border-slate-200/80 pt-1.5">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={onOpenCRM}
              onMouseEnter={() => setHoveredItem('crm')}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Inbound Leads CRM Hub"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
            </motion.button>

            <AnimatePresence>
              {hoveredItem === 'crm' && (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 8 }}
                  exit={{ opacity: 0, x: -6 }}
                  className="hidden sm:block absolute left-full whitespace-nowrap bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-md z-50 pointer-events-none"
                >
                  Leads CRM Hub
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>
    </aside>
  );
};
