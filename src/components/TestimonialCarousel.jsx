import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SectionHeading from './SectionHeading';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 lg:py-24 bg-canvas-warm/40 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Patient Experiences"
          title="What Our Patients Say"
          subtitle="Real feedback from families who trust Sakthi Dental Clinic for gentle, transparent, and skilled dental care in Hosur."
          align="center"
        />

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Editorial Review Block */}
          <div className="relative rounded-2xl bg-white border border-ink-border shadow-subtle p-8 sm:p-12 lg:p-14 overflow-hidden min-h-[300px] flex flex-col justify-between">
            
            {/* Top Review Metadata */}
            <div className="flex items-center justify-between pb-6 border-b border-ink-border">
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
                <span className="ml-2 text-xs font-bold text-ink-primary">
                  5.0 / 5.0
                </span>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                Verified Patient Review
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="py-8">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="space-y-6"
                >
                  <blockquote className="font-sans font-bold text-2xl sm:text-3xl text-ink-primary  leading-relaxed italic">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  <div>
                    <p className="font-sans text-base font-bold text-ink-primary">
                      {current.author}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {current.treatment} • Patient at Hosur Clinic
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="pt-6 border-t border-ink-border flex items-center justify-between">
              {/* Step indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-7 bg-primary'
                        : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full border border-ink-border hover:border-plum-400 hover:bg-canvas-warm text-ink-primary flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full border border-ink-border hover:border-plum-400 hover:bg-canvas-warm text-ink-primary flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
