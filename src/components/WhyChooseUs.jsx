import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Users, HeartHandshake, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs({ onOpenAppointment }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-canvas border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="The Sakthi Dental Distinction"
          title="Why Choose Sakthi Dental Clinic?"
          subtitle="Combining twenty years of clinical dedication in Hosur with compassionate care, multidisciplinary doctors, and gentle modern technologies."
          align="center"
        />

        {/* Asymmetrical Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {/* Feature 1: All-in-One Care (7 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-ink-border flex flex-col justify-between shadow-subtle hover:border-lavender-300 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-lavender-100 text-primary flex items-center justify-center border border-lavender-200">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <span className="font-sans font-bold text-lg text-ink-muted">01</span>
              </div>

              <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-primary block">
                Integrated Clinical Care
              </span>

              <h3 className="font-sans font-bold text-2xl sm:text-3xl  text-ink-primary">
                All-in-One Care
              </h3>

              <p className="text-base text-ink-secondary leading-relaxed max-w-lg font-normal">
                From general dentistry to specialized treatments, everything under one roof.
              </p>

              {/* Scope Tags */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-md bg-canvas-warm border border-ink-border font-medium text-ink-secondary">Preventive Scaling</span>
                <span className="px-3 py-1 rounded-md bg-canvas-warm border border-ink-border font-medium text-ink-secondary">Clear Aligners</span>
                <span className="px-3 py-1 rounded-md bg-canvas-warm border border-ink-border font-medium text-ink-secondary">Pediatric Care</span>
                <span className="px-3 py-1 rounded-md bg-canvas-warm border border-ink-border font-medium text-ink-secondary">Laser Surgery</span>
                <span className="px-3 py-1 rounded-md bg-canvas-warm border border-ink-border font-medium text-ink-secondary">Dentures &amp; Implants</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-ink-border flex items-center justify-between text-xs">
              <span className="text-ink-muted">Complete continuity of care in Hosur.</span>
              <Link to="/treatments" className="font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1">
                Explore All Treatments <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Feature 2: Experienced Doctors (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-white rounded-2xl p-8 sm:p-10 border border-ink-border flex flex-col justify-between shadow-subtle hover:border-lavender-300 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-lavender-100 text-primary flex items-center justify-center border border-lavender-200">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="font-sans font-bold text-lg text-ink-muted">02</span>
              </div>

              <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-primary block">
                Multidisciplinary Team
              </span>

              <h3 className="font-sans font-bold text-2xl  text-ink-primary">
                Experienced Doctors
              </h3>

              <p className="text-base text-ink-secondary leading-relaxed font-normal">
                Our dentists are professionally trained and committed to personalized patient care.
              </p>

              <div className="p-3.5 rounded-xl bg-canvas-warm border border-ink-border text-xs text-ink-secondary space-y-1.5">
                <p>• Founded by Dr. Anupriya (20+ years clinical journey)</p>
                <p>• 9 specialized doctors covering prosthodontics, surgery &amp; orthodontics</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-ink-border">
              <Link
                to="/about"
                className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover inline-flex items-center gap-1.5"
              >
                Meet the medical team &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Feature 3: Patient-Centric Approach (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-white rounded-2xl p-8 sm:p-10 border border-ink-border flex flex-col justify-between shadow-subtle hover:border-lavender-300 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-lavender-100 text-primary flex items-center justify-center border border-lavender-200">
                  <HeartHandshake className="w-5 h-5 text-primary" />
                </div>
                <span className="font-sans font-bold text-lg text-ink-muted">03</span>
              </div>

              <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-primary block">
                Compassionate Environment
              </span>

              <h3 className="font-sans font-bold text-2xl  text-ink-primary">
                Patient-Centric Approach
              </h3>

              <p className="text-base text-ink-secondary leading-relaxed font-normal">
                We prioritize comfort, safety, and transparency in every treatment we offer.
              </p>

              <p className="text-xs text-ink-muted leading-relaxed">
                Clear treatment explanations, transparent consultations, and gentle chairside manners designed specifically for anxious patients, women, and children.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-ink-border text-xs text-ink-secondary">
              <span className="font-bold text-primary">Zero rushing:</span> Dedicated time for every family visit.
            </div>
          </motion.div>

          {/* Feature 4: Technology-Driven Services (7 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-ink-border flex flex-col justify-between shadow-subtle hover:border-lavender-300 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-lavender-100 text-primary flex items-center justify-center border border-lavender-200">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <span className="font-sans font-bold text-lg text-ink-muted">04</span>
              </div>

              <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-primary block">
                Modern Precision
              </span>

              <h3 className="font-sans font-bold text-2xl sm:text-3xl  text-ink-primary">
                Technology-Driven Services
              </h3>

              <p className="text-base text-ink-secondary leading-relaxed max-w-lg font-normal">
                Modern tools and equipment ensure precision and safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-ink-secondary">
                <div className="p-3 rounded-lg bg-canvas-warm border border-ink-border">
                  <strong className="text-ink-primary block mb-0.5">LASER Dentistry</strong>
                  Minimally invasive soft-tissue &amp; periodontal healing
                </div>
                <div className="p-3 rounded-lg bg-canvas-warm border border-ink-border">
                  <strong className="text-ink-primary block mb-0.5">Digital Aligners</strong>
                  Precision orthodontic scanning &amp; clear alignment trays
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-ink-border flex items-center justify-between text-xs text-ink-secondary">
              <span>Class-B autoclave sterilization protocol strictly maintained.</span>
              <button
                onClick={onOpenAppointment}
                className="font-bold text-primary hover:text-primary-hover"
              >
                Schedule Checkup &rarr;
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
