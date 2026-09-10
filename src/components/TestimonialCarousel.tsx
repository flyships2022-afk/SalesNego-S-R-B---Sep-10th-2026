import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle2 } from 'lucide-react';

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company?: string;
  badge?: string;
  quote: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: 'Gagan Josan',
    role: 'CEO',
    badge: 'Enterprise SaaS',
    quote:
      'He has been instrumental in driving the growth of TC+ LIMS and our other SaaS solutions. His deep understanding of laboratory workflows, strong consultative approach, and ability to translate customer needs into successful implementations have consistently delivered excellent results.',
  },
  {
    id: 2,
    name: 'Stanley Charles - CEO',
    role: 'Client',
    badge: 'IT Services & SaaS',
    quote:
      'I highly recommend Raj for his exceptional performance in B2B Sales. He excelled in acquiring new business for IT services and SaaS products.',
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play every 5.5s when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const current = TESTIMONIALS_DATA[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Client & Partner Testimonials"
    >
      {/* Main Sliding Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-sm p-6 sm:p-10 min-h-[340px] sm:min-h-[300px] flex flex-col justify-between">
        {/* Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-64 h-64 bg-[#EE2338]/5 rounded-full blur-3xl pointer-events-none"
        />

        {/* Top Bar: Quote Icon, Rating & Category Badge */}
        <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EE2338]/10 text-[#EE2338] flex items-center justify-center border border-[#EE2338]/20 shrink-0">
              <Quote className="w-5 h-5 fill-[#EE2338]" />
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {current.badge && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#EE2338]" />
              <span>{current.badge}</span>
            </span>
          )}
        </div>

        {/* Sliding Animated Quote Body */}
        <div className="relative z-10 my-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg lg:text-xl font-normal text-slate-800 dark:text-zinc-100 leading-relaxed italic">
                "{current.quote}"
              </p>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Author Avatar Badge */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#EE2338] to-[#99111E] text-white font-bold text-sm flex items-center justify-center shadow-xs shrink-0">
                    {current.name
                      .replace(/[^a-zA-Z\s]/g, '')
                      .trim()
                      .split(/\s+/)
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#EE2338]">
                      {current.role}
                      {current.company ? ` • ${current.company}` : ''}
                    </p>
                  </div>
                </div>

                {/* Mobile-only badge */}
                {current.badge && (
                  <span className="sm:hidden text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-300">
                    {current.badge}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Indicators & Navigation Controls */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100 dark:border-white/10 relative z-10">
          {/* Step Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-[#EE2338]'
                    : 'w-2.5 h-2.5 bg-slate-300 dark:bg-zinc-600 hover:bg-slate-400 dark:hover:bg-zinc-500'
                }`}
              />
            ))}
            <span className="ml-3 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              0{currentIndex + 1} / 0{total}
            </span>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE2338]"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE2338]"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
