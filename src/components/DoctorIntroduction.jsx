import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function DoctorIntroduction({ onOpenAppointment }) {
  return (
    <section className="py-16 lg:py-24 bg-canvas border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Photo Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-ink-border shadow-subtle">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-canvas-warm flex flex-col justify-between p-6 sm:p-8">
                  
                  {/* Clinic Visual Background with subtle warmth & doctor suite visibility */}
                  <img
                    src="/client_assets/banners/banner-3.jpg"
                    alt="Sakthi Dental Clinic consultation operatory"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-dark via-canvas-dark/60 to-canvas-dark/20 pointer-events-none" />

                  {/* Top Bar inside frame */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary border border-ink-border">
                      Founder &amp; Chief Dentist
                    </span>
                    <span className="text-[11px] font-bold text-stone-300 tracking-widest uppercase">
                      Estd. 2004
                    </span>
                  </div>

                  {/* Center Monogram */}
                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-primary border-2 border-lavender-200 flex items-center justify-center mx-auto mb-3 shadow-subtle">
                      <span className="font-sans font-bold text-3xl sm:text-4xl ">
                        DA
                      </span>
                    </div>
                    <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white ">
                      Dr. Anupriya
                    </h3>
                    <p className="text-xs text-stone-300 uppercase tracking-widest font-semibold mt-1">
                      Founder • Sakthi Dental Clinic
                    </p>
                  </div>

                  {/* Footnote */}
                  <div className="relative z-10 pt-3 border-t border-white/20 text-center text-xs text-stone-300">
                    <span>20+ Years Dedicated Clinical Practice in Hosur</span>
                  </div>
                </div>

                {/* Sub-card below */}
                <div className="mt-3.5 pt-3 border-t border-ink-border flex items-center justify-between text-xs text-ink-secondary px-1">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>PHC Chandara Hospital Consultant (10+ Yrs)</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Milestones (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Founding Dentist
              </span>
              <span className="w-8 h-[1px] bg-ink-border" />
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-ink-primary  tracking-tight leading-[1.14]">
              Meet Dr. Anupriya
            </h2>

            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
              Bringing over 20 years of clinical expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000, dedicating her career to compassionate patient wellbeing.
            </p>

            {/* Architectural Timeline Cards */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-ink-border flex items-start gap-3.5 shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-ink-primary">Clinical Foundation at Mathura Clinic</p>
                  <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed font-normal">
                    Refined her clinical skills and deepened patient dedication during six impactful years before founding Sakthi Dental Clinic in 2004.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-ink-border flex items-start gap-3.5 shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-ink-primary">Over a Decade of Public Health Service</p>
                  <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed font-normal">
                    Trusted dental consultant for over a decade with the Primary Health Center at Chandara Hospital.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-ink-border flex items-start gap-3.5 shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-ink-primary">Specialized Focus for Families &amp; Women</p>
                  <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed font-normal">
                    Fostering a gentle, stress-free clinical atmosphere where every smile is celebrated, not merely treated.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenAppointment}
                icon={Calendar}
                iconPosition="left"
              >
                Consult Dr. Anupriya
              </Button>

              <Link to="/about">
                <Button
                  variant="secondary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Read Full Story &amp; Team
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
