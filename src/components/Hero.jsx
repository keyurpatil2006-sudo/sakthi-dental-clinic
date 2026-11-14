import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import Button from './Button';

export default function Hero({ onOpenAppointment }) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-ink-border/50 bg-canvas">
      {/* Subtle Architectural Dental Watermarks (Both Left & Right) */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] -z-0">
        <svg
          width="540"
          height="540"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary transform -rotate-12"
        >
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2 8 0.5 3 1.5 6 4 6 1.5 0 2-2 2-4 0-1.5 0.5-2 1-2s1 0.5 1 2c0 2 0.5 4 2 4 2.5 0 3.5-3 4-6 0.5-3 2-5 2-8 0-3.5-2.5-6-6-6-1.5 0-2.5 0.8-4 0.8S13.5 2 12 2z" />
          <path d="M9.5 8.5c1 1 2 1.5 3.5 1.5s2.5-0.5 3.5-1.5" />
        </svg>
      </div>

      <div className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] -z-0">
        <svg
          width="540"
          height="540"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary transform rotate-12"
        >
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2 8 0.5 3 1.5 6 4 6 1.5 0 2-2 2-4 0-1.5 0.5-2 1-2s1 0.5 1 2c0 2 0.5 4 2 4 2.5 0 3.5-3 4-6 0.5-3 2-5 2-8 0-3.5-2.5-6-6-6-1.5 0-2.5 0.8-4 0.8S13.5 2 12 2z" />
          <path d="M9.5 8.5c1 1 2 1.5 3.5 1.5s2.5-0.5 3.5-1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Editorial Content (6 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            {/* Eyebrow / Provenance Header */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary/40" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-ink-secondary">
                Hosur Dental Centre &bull; Estd. 2004
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-sans font-bold text-4xl sm:text-5xl lg:text-[3.75rem] text-ink-primary  tracking-tight leading-[1.12]"
            >
              Specialized Dental Care for{' '}
              <span className="italic font-normal text-lavender-700">
                Women, Children
              </span>{' '}
              &amp; Families
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-ink-secondary leading-relaxed max-w-xl font-normal"
            >
              Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAppointment}
                icon={Calendar}
                iconPosition="left"
              >
                Fix an Appointment
              </Button>

              <Link to="/treatments">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore Our Treatments
                </Button>
              </Link>
            </motion.div>

            {/* Clean Architectural Metrics Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-ink-border grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <p className="font-sans font-bold text-3xl  text-ink-primary">20+</p>
                <p className="text-xs text-ink-muted mt-1 leading-snug">Years Clinical Mastery</p>
              </div>
              <div className="border-l border-ink-border pl-6">
                <p className="font-sans font-bold text-3xl  text-ink-primary">09</p>
                <p className="text-xs text-ink-muted mt-1 leading-snug">In-House Specialists</p>
              </div>
              <div className="border-l border-ink-border pl-6">
                <p className="font-sans font-bold text-3xl  text-ink-primary">100%</p>
                <p className="text-xs text-ink-muted mt-1 leading-snug">Comfort &amp; Care</p>
              </div>
            </motion.div>

            {/* Subtle Dental Care Focus Tagline */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center gap-2 text-xs text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-lavender-500 shrink-0" />
              <span>Dedicated Oral Health, Smile Restoration &amp; Pediatric Dental Wellness</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Equal-Sized Dual Editorial Image Frames (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                
                {/* Image 1: Main Operatory */}
                <div className="bg-white p-3 rounded-2xl border border-ink-border shadow-subtle group flex flex-col justify-between">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-canvas-warm">
                    <motion.img
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      src="/client_assets/banners/banner-2.jpg"
                      alt="Sakthi Dental Clinic operatory and clinical setting"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-primary/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-ink-border text-[10px] font-bold text-primary flex items-center gap-1 shadow-sm">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                      <span>Sterilized</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[9px] uppercase tracking-widest text-stone-200 font-semibold">
                        Operatory
                      </p>
                      <p className="font-sans font-bold text-base  text-white mt-0.5 leading-snug">
                        Modern Precision
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-ink-border/60 flex items-center justify-between text-xs text-ink-secondary px-1">
                    <span className="font-medium text-ink-primary">Clinical Operatory</span>
                    <span className="text-ink-muted text-[11px]">Hosur Clinic</span>
                  </div>
                </div>

                {/* Image 2: Reception & Lounge (Equal Size & Equal Styling) */}
                <div className="bg-white p-3 rounded-2xl border border-ink-border shadow-subtle group flex flex-col justify-between">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-canvas-warm">
                    <motion.img
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      src="/client_assets/banners/banner-1.jpg"
                      alt="Sakthi Dental Clinic Reception & Waiting Lounge"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-primary/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                      <Heart className="w-3 h-3 text-lavender-200" />
                      <span>Welcoming</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[9px] uppercase tracking-widest text-stone-200 font-semibold">
                        Reception
                      </p>
                      <p className="font-sans font-bold text-base  text-white mt-0.5 leading-snug">
                        Safe &amp; Attentive Care
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-ink-border/60 flex items-center justify-between text-xs text-ink-secondary px-1">
                    <span className="font-medium text-ink-primary">Patient Lounge</span>
                    <span className="text-ink-muted text-[11px]">Stress-free</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
