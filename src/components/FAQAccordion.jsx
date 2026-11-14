import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faqs';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Search & Filter Bar */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-ink-muted absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our 14 dental questions (e.g., scaling, braces, pain, RCT, implants)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink-border bg-white shadow-subtle text-sm text-ink-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-normal"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-xs text-ink-muted hover:text-ink-primary"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-subtle'
                  : 'bg-white text-ink-secondary border border-ink-border hover:border-plum-300 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all ${
                  isOpen ? 'border-plum-300 shadow-subtle' : 'border-ink-border hover:border-stone-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-primary">
                      {faq.category}
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl  text-ink-primary leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-ink-border transition-transform duration-300 ${
                      isOpen ? 'bg-plum-100 text-primary rotate-180 border-plum-200' : 'bg-canvas-warm text-ink-secondary'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-ink-secondary leading-relaxed border-t border-ink-border/50 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-ink-border p-8">
            <HelpCircle className="w-8 h-8 text-ink-muted mx-auto mb-3" />
            <p className="font-sans font-bold text-lg text-ink-primary ">No matching questions found</p>
            <p className="text-xs text-ink-secondary mt-1">
              Try searching with another keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-bold bg-plum-100 text-primary border border-plum-200"
            >
              Reset Search Filters
            </button>
          </div>
        )}
      </div>

      <div className="text-center pt-4 text-xs text-ink-muted font-normal">
        Showing {filteredFaqs.length} of {faqs.length} dental health questions answered by our Hosur clinical team.
      </div>
    </div>
  );
}
