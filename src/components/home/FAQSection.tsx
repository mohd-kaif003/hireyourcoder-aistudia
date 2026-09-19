import React, { useState } from 'react';
import { faqsData } from '../../data/faqsData';
import { ChevronDown, Search, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

export const FAQSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'Web Development-0': true // Open first item by default
  });

  const categories = ['All', ...faqsData.map(c => c.category)];

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter items
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
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers to Important Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Everything you need to know about our engineering standards, pricing structures, code ownership, and international collaboration.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. Next.js, pricing, NDA, WhatsApp)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm bg-slate-50 rounded-2xl">
              No matching questions found for "{searchQuery}". Have a specific question? Ask us directly.
            </div>
          ) : (
            filteredCategories.map((group) => (
              <div key={group.category} className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 pl-1">
                  {group.category}
                </h3>

                <div className="space-y-2.5">
                  {group.items.map((faq, idx) => {
                    const key = `${group.category}-${idx}`;
                    const isOpen = !!openItems[key];

                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                        >
                          <span className="font-bold text-sm sm:text-base text-slate-900 font-heading">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-blue-600' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 bg-slate-50/30">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* FAQ Bottom Support Callout */}
        <div className="mt-14 p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm">Have a unique technical challenge or custom spec?</h4>
            <p className="text-xs text-slate-500 mt-0.5">We are happy to answer specific architecture questions over a quick chat.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20have%20a%20question%20regarding%20my%20project."
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              Book Discovery
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
