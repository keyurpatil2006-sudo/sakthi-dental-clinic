import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import Button from './Button';

export default function BannerAssurance({ onOpenAppointment }) {
  return (
    <section className="py-12 lg:py-16 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden bg-canvas-dark text-white border border-stone-800 shadow-elevated"
        >
          {/* Authentic Clinic Operatory Photo with Warm Dark Vignette */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/client_assets/banners/banner-2.jpg"
              alt="Sakthi Dental Clinic modern operatory suite"
              className="w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-canvas-dark via-canvas-dark/90 to-canvas-dark/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 lg:py-16 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lavender-400" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-lavender-300">
                  Our Patient Promise
                </span>
              </div>

              <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-white  tracking-tight leading-snug">
                &ldquo;You are always in safe hands. We are ready to help, anytime.&rdquo;
              </h2>

              <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed max-w-xl">
                Whether you need urgent tooth pain relief, a routine family checkup, or advanced smile correction, our experienced clinical team in Hosur is committed to gentle, transparent care.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
              <Button
                variant="white"
                size="md"
                onClick={onOpenAppointment}
                icon={Calendar}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Fix an Appointment
              </Button>

              <a
                href="tel:+919862890897"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-stone-700 hover:border-stone-500 hover:bg-stone-800/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-lavender-300" />
                <span>+91 9862890897</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
