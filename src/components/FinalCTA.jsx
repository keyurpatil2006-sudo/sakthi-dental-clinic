import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import Button from './Button';

export default function FinalCTA({ onOpenAppointment }) {
  return (
    <section className="py-16 lg:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-canvas-dark text-white p-8 sm:p-14 lg:p-16 border border-stone-800 shadow-elevated text-center"
        >
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-plum-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-plum-300">
                Begin Your Smile Journey
              </span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl  text-white tracking-tight leading-tight">
              Your Healthier Smile Starts Here.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal max-w-xl mx-auto">
              Discover personalised dental care in a welcoming environment.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="white"
                size="lg"
                onClick={onOpenAppointment}
                icon={Calendar}
                iconPosition="left"
              >
                Fix an Appointment
              </Button>

              <a
                href="tel:+919862890897"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white border border-stone-700 hover:border-stone-500 hover:bg-stone-800/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-plum-300" />
                <span>Call Clinic: +91 9862890897</span>
              </a>
            </div>

            <p className="text-xs text-stone-400 pt-2 font-normal">
              Sunday to Saturday: 9:00 AM – 7:00 PM • B2/8, SBM Layout, Anthivadi, Hosur
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
