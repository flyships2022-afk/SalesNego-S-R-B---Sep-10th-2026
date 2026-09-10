import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight, Search, X, HelpCircle, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export interface FAQItem {
  id: string;
  category: 'model' | 'execution';
  question: string;
  answer: string;
  keyTakeaway: string;
  details?: string[];
}

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'model', label: 'Partnership & Pricing' },
  { id: 'execution', label: 'Founder-Led Execution' },
] as const;

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-differentiation',
    category: 'model',
    question: 'How does SalesNego differ from traditional B2B lead generation agencies?',
    answer:
      'Traditional lead generation agencies focus strictly on vanity top-of-funnel activity—blasting generic email sequences to hit superficial meeting quotas, which frequently leaves your executive team burdened with unqualified calls and wasted time. SalesNego is a senior commercial execution partner. We bridge prospect engagement, rigorous discovery, multi-stakeholder navigation, proposal building, and contract negotiation through to closed revenue.',
    keyTakeaway: 'Full-cycle commercial execution vs. vanity meeting booking',
    details: [
      'Discovery, proposal framing, and commercial objection handling included',
      'No junior call farms or scripted overseas contractors',
      'Unified with GTM market positioning and RevOps infrastructure',
    ],
  },
  {
    id: 'faq-pricing-model',
    category: 'model',
    question: 'How is your commercial pricing and retainer structure organized?',
    answer:
      'We believe in genuine commercial alignment with skin in the game. Rather than charging rigid advisory fees or inflated per-lead markups that incentivize low-quality meetings, our partnerships combine a predictable monthly commercial execution retainer with a performance component linked to closed revenue. We share the upside when your pipeline successfully converts into cash.',
    keyTakeaway: 'Predictable monthly execution retainer + performance on closed cash',
    details: [
      'Retainer covers dedicated senior execution capacity and infrastructure',
      'Performance fee tied strictly to realized revenue milestones',
      'Clear commercial agreements tailored to your average contract value (ACV)',
    ],
  },
  {
    id: 'faq-team-seniority',
    category: 'execution',
    question: 'Who actually handles our outbound touches, discovery calls, and deal negotiations?',
    answer:
      'SalesNego is founder-led execution. Your accounts are never handed off to junior reps, interns, or offshore call centers. Every campaign, discovery session, and deal negotiation is driven by an experienced B2B sales practitioner.',
    keyTakeaway: '100% founder-led execution across all pipeline stages',
    details: [
      '100% founder-led execution across all pipeline stages',
      'Proven track record in B2B enterprise software, SaaS, and IT services',
      'Executive credibility in C-suite and VP conversations',
    ],
  },
  {
    id: 'faq-team-collaboration',
    category: 'execution',
    question: 'Do you replace our internal sales team or collaborate with our existing staff?',
    answer:
      'We support both operational models depending on your stage. For lean startups and founder-led companies, we can act as your turnkey outsourced commercial arm—managing everything from outbound prospecting to final close. For scaling companies with existing Account Executives or founders who close, we function as an elite deal execution wing handling top-to-mid funnel qualification and opportunity acceleration.',
    keyTakeaway: 'Flexible models: Turnkey commercial arm or embedded deal accelerator',
    details: [
      'Seamless handoffs to internal AEs or founders when appropriate',
      'Joint deal reviews, proposal reviews, and competitive positioning',
      'Knowledge transfer to institutionalize sales playbooks within your company',
    ],
  },
  {
    id: 'faq-unified-system',
    category: 'execution',
    question: 'Why connect GTM Strategy, RevOps, and Sales Execution in one loop?',
    answer:
      'Most growing companies suffer from fragmented silos: an abstract strategy deck that sits unread in Google Drive, a chaotic CRM full of dirty data, and ad-hoc outbound prospecting. By unifying Strategy, AI-accelerated RevOps, and Deal Execution into a single commercial loop, live learnings from customer calls continuously refine market positioning, pipeline qualification, and automated workflows.',
    keyTakeaway: 'Unified 3-in-1 engine eliminating agency and tool silos',
    details: [
      'Eliminates agency handoff friction between strategy consultants and sales reps',
      'Real-time feedback loop from customer discovery into CRM workflow optimization',
      'Continuous refinement of ICP messaging based on live objection data',
    ],
  },
];

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  // Always closed by default across desktop, mobile, and tablet view
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredDividerIndex, setHoveredDividerIndex] = useState<number | null>(null);
  const { openCalendly } = useNavigation();

  // Automatically expand question on hover and close previous in desktop view
  const handleQuestionMouseEnter = (id: string) => {
    setHoveredId(id);
    if (typeof window === 'undefined') return;
    const isDesktop =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      window.innerWidth >= 768;
    if (isDesktop) {
      setOpenIds(new Set([id]));
    }
  };

  // Automatically close question when hover moves out in desktop view
  const handleQuestionMouseLeave = (id: string) => {
    setHoveredId((current) => (current === id ? null : current));
    if (typeof window === 'undefined') return;
    const isDesktop =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      window.innerWidth >= 768;
    if (isDesktop) {
      setOpenIds((prev) => {
        if (prev.has(id)) {
          const next = new Set(prev);
          next.delete(id);
          return next;
        }
        return prev;
      });
    }
  };

  // Close all questions when mouse leaves the accordion container in desktop view
  const handleAccordionMouseLeave = () => {
    setHoveredId(null);
    setHoveredDividerIndex(null);
    if (typeof window === 'undefined') return;
    const isDesktop =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      window.innerWidth >= 768;
    if (isDesktop) {
      setOpenIds(new Set());
    }
  };

  // Toggle single FAQ accordion (click support for mobile, tablet & desktop)
  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand all or Collapse all
  const expandAll = () => {
    setOpenIds(new Set(filteredFAQs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  // Filtered FAQs based on category and search query
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const inQuestion = item.question.toLowerCase().includes(query);
      const inAnswer = item.answer.toLowerCase().includes(query);
      const inKey = item.keyTakeaway.toLowerCase().includes(query);
      const inDetails = item.details?.some((d) => d.toLowerCase().includes(query));

      return inQuestion || inAnswer || inKey || inDetails;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="faq-section"
      aria-label="Frequently Asked Questions"
      className="w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-[#EE2338] bg-[#EE2338]/10 border border-[#EE2338]/20">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>COMMERCIAL FAQ &amp; SELF-SERVICE</span>
            </span>
          </div>
          <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
            Everything you need to know about our commercial partnership model, founder-led sales execution,
            and integrated revenue engine.
          </p>
        </div>

        {/* Self-Service Controls: Category Filter + Search Bar */}
        <div className="max-w-4xl mb-8 space-y-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="FAQ Categories">
            {FAQ_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-[#EE2338] text-white shadow-xs'
                      : 'bg-[#F6F5F2] dark:bg-[#1C1B20] text-[#555459] dark:text-zinc-300 hover:text-[#161519] dark:hover:text-white border border-[#E5E3DC] dark:border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input and Expand/Collapse Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, e.g., 'pricing', 'founder', 'retainer', 'execution'..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#1C1B20] text-[#161519] dark:text-white text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#EE2338]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-[#161519] dark:hover:text-white rounded-full cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#555459] dark:text-zinc-400 shrink-0">
              <button
                type="button"
                onClick={expandAll}
                className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <button
                type="button"
                onClick={collapseAll}
                className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div
          className="max-w-4xl space-y-3"
          id="faq-accordion-container"
          onMouseLeave={handleAccordionMouseLeave}
        >
          {filteredFAQs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10">
              <HelpCircle className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#161519] dark:text-white mb-1">
                No questions found matching &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-xs text-[#555459] dark:text-zinc-400 mb-4">
                Try clearing your search query or selecting &ldquo;All Questions&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 text-xs font-bold rounded-full bg-[#EE2338] text-white hover:bg-[#c91521] transition-colors cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);
              const prevFaq = index > 0 ? filteredFAQs[index - 1] : null;
              const isAdjacentHovered =
                hoveredId === faq.id ||
                (prevFaq !== null && hoveredId === prevFaq.id) ||
                hoveredDividerIndex === index;

              return (
                <React.Fragment key={faq.id}>
                  {/* Subtle animated horizontal line divider between each FAQ item */}
                  {index > 0 && (
                    <div
                      id={`faq-divider-${index}`}
                      className="py-1 px-4 flex items-center justify-center cursor-pointer select-none"
                      onMouseEnter={() => setHoveredDividerIndex(index)}
                      onMouseLeave={() => setHoveredDividerIndex(null)}
                      aria-hidden="true"
                    >
                      <motion.div
                        className="w-full h-px relative overflow-hidden rounded-full bg-gradient-to-r from-transparent via-[#E5E3DC] dark:via-white/10 to-transparent"
                        animate={{
                          opacity: isAdjacentHovered ? 1 : 0.4,
                          scaleX: isAdjacentHovered ? 1 : 0.96,
                        }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        {/* Hover glow line overlay matching accordion smooth feel */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EE2338]/60 to-transparent"
                          animate={{ opacity: isAdjacentHovered ? 1 : 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                        />
                      </motion.div>
                    </div>
                  )}

                  <div
                    id={`faq-item-${faq.id}`}
                    onMouseEnter={() => handleQuestionMouseEnter(faq.id)}
                    onMouseLeave={() => handleQuestionMouseLeave(faq.id)}
                    className={`rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? 'bg-[#F6F5F2] dark:bg-[#1C1B20] border-[#EE2338]/40 dark:border-[#EE2338]/40 shadow-xs'
                        : 'bg-white dark:bg-[#161519] border-[#E5E3DC] dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Accordion Question Header */}
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      onClick={() => toggleFAQ(faq.id)}
                      onMouseEnter={() => handleQuestionMouseEnter(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE2338] cursor-pointer"
                    >
                      <div className="flex items-start gap-3.5 min-w-0 flex-1">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#EE2338]/10 dark:bg-white/5 text-[#EE2338] shrink-0 mt-0.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-lexend text-sm sm:text-base font-semibold text-[#161519] dark:text-white leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-in-out ${
                          isOpen
                            ? 'bg-[#EE2338] text-white rotate-180'
                            : 'bg-[#F6F5F2] dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-[#E5E3DC] dark:border-white/10'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Accordion Expandable Content with smooth ease-in-out height animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-btn-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: {
                              height: { duration: 0.35, ease: 'easeInOut' },
                              opacity: { duration: 0.25, delay: 0.05, ease: 'easeInOut' },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.28, ease: 'easeInOut' },
                              opacity: { duration: 0.18, ease: 'easeInOut' },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#E5E3DC]/70 dark:border-white/10 text-sm text-[#555459] dark:text-zinc-300 leading-relaxed">
                            <p className="mb-3.5">{faq.answer}</p>

                            {/* Detail points if present */}
                            {faq.details && faq.details.length > 0 && (
                              <ul className="space-y-1.5 mb-4 pl-1 text-xs sm:text-sm">
                                {faq.details.map((detail, dIdx) => (
                                  <li key={dIdx} className="flex items-start gap-2 text-[#161519] dark:text-zinc-200">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EE2338] shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Key Takeaway Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#121214] border border-[#E5E3DC] dark:border-white/10 text-xs font-semibold text-[#EE2338]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EE2338]" />
                              <span className="text-[#161519] dark:text-zinc-200 font-normal">Key Takeaway:</span>
                              <span>{faq.keyTakeaway}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </React.Fragment>
              );
            })
          )}
        </div>

        {/* Self-Service Bottom Prompt: Connect directly */}
        <div className="max-w-4xl mt-10 p-6 rounded-2xl bg-[#161519] dark:bg-[#1C1B20] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-left shadow-lg">
          <div className="space-y-1">
            <h3 className="font-lexend text-base sm:text-lg font-bold text-white">
              Have a specific question about your market or sales motion?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-400">
              Schedule a direct discovery session to assess pipeline qualification, ACV velocity, and operational fit.
            </p>
          </div>
          <button
            type="button"
            id="faq-book-consultation"
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#EE2338] hover:bg-[#c91521] text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>Discuss Growth Priorities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

