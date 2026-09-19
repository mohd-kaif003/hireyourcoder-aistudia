import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqsData } from '../../data/faqsData';
import { ChevronDown, Search, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

export const FAQSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'Web Development-0': true
  });

  const categories = ['All', ...faqsData.map(c => c.category)];

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqsData.map(catGroup => {
    if (selectedCategory !== 'All' && catGroup.category !== selectedCategory) {
      return null;
    }

    const filteredItems = catGroup.items.filter(item => {
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });

    if (filteredItems.length === 0) return null;

    return {
      ...catGroup,
      items: filteredItems
    };
  }).filter(Boolean) as typeof faqsData;

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-200/60">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers to Critical Questions</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about our engineering standards, pricing structures, code ownership, and international collaboration.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-sm mx-auto mt-6">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search (e.g. Next.js, pricing, NDA, WhatsApp)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Tabs - Horizontally scrollable on mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 mt-5 overflow-x-auto no-scrollbar pb-1 px-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQs List */}
        <div className="space-y-6">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-slate-500 text-xs sm:text-sm">
              No questions matched your search. Reach out directly on WhatsApp or book a discovery call.
            </div>
          ) : (
            filteredCategories.map(catGroup => (
              <div key={catGroup.category} className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono px-1">
                  {catGroup.category}
                </h3>

                <div className="space-y-2">
                  {catGroup.items.map((item, idx) => {
                    const key = `${catGroup.category}-${idx}`;
                    const isOpen = !!openItems[key];

                    return (
                      <div
                        key={idx}
                        className={`rounded-xl sm:rounded-2xl border transition-all overflow-hidden ${
                          isOpen
                            ? 'bg-blue-50/20 border-blue-200 shadow-2xs'
                            : 'bg-white border-slate-200/90 hover:border-slate-300'
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full text-left p-3.5 sm:p-4.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                        >
                          <span className="leading-snug">{item.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-blue-600' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-3.5 pb-4 sm:px-4.5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Contact Help Box */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm sm:text-base text-slate-900">Have a custom architectural inquiry?</h4>
            <p className="text-slate-600 text-xs mt-0.5">
              Chat with our lead technology architect directly via WhatsApp for a quick answer.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="flex-1 sm:flex-initial bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Book Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
