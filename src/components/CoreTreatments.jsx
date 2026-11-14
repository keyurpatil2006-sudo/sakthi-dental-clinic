import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function CoreTreatments({ onOpenAppointment }) {
  const coreTreatments = [
    {
      id: "teeth-cleaning",
      title: "Teeth Cleaning or Scaling",
      description: "Preventive care to remove plaque and protect gums.",
      image: "/client_assets/treatments/teeth-cleaning.png",
      badge: "Preventive Care",
      link: "/treatments"
    },
    {
      id: "tooth-filling",
      title: "Tooth Filling",
      description: "Composite fillings for cavity treatment and tooth restoration.",
      image: "/client_assets/treatments/tooth-filling.jpg",
      badge: "Restorative Care",
      link: "/treatments"
    },
    {
      id: "tooth-extraction",
      title: "Tooth Extraction",
      description: "Safe and painless removal of impacted or decayed teeth.",
      image: "/client_assets/treatments/teeth-extraction.png",
      badge: "Gentle Surgery",
      link: "/treatments"
    },
    {
      id: "artificial-complete-denture",
      title: "Artificial Complete Denture",
      description: "Full mouth replacement to restore confidence and function.",
      image: "/client_assets/treatments/artificial-complete-denture.png",
      badge: "Prosthodontics",
      link: "/treatments"
    },
    {
      id: "teeth-whitening",
      title: "Bleaching",
      description: "Cosmetic whitening treatments for a brighter smile.",
      image: "/client_assets/treatments/bleaching.png",
      badge: "Cosmetic Dentistry",
      link: "/treatments"
    },
    {
      id: "orthodontic-braces",
      title: "Orthodontic Treatment",
      description: "Braces and aligners to straighten and align teeth.",
      image: "/client_assets/treatments/orthodontic-braces.png",
      badge: "Orthodontics",
      link: "/treatments"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="py-16 lg:py-24 bg-canvas-warm/50 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Top Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <SectionHeading
            badge="Dedicated Clinical Services"
            title="Explore Our Services"
            subtitle="Tailored clinical treatments delivered with meticulous attention, gentle hands, and modern dental equipment in Hosur."
            align="left"
            className="mb-0"
          />

          <Link to="/treatments" className="shrink-0">
            <Button
              variant="secondary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
            >
              View All 15 Treatments
            </Button>
          </Link>
        </div>

        {/* 6 Core Treatment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {coreTreatments.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-ink-border shadow-subtle hover:border-lavender-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category & Index */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded bg-canvas-warm border border-ink-border text-ink-secondary">
                    {item.badge}
                  </span>
                  <span className="font-sans font-bold text-sm  text-ink-muted">
                    0{index + 1}
                  </span>
                </div>

                {/* Treatment Image Visual Frame */}
                <div className="relative w-full h-44 rounded-xl bg-canvas-warm/70 border border-ink-border/60 mb-5 overflow-hidden flex items-center justify-center p-4 group-hover:bg-canvas-warm transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl  text-ink-primary group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-ink-border flex items-center justify-between text-xs">
                <Link
                  to="/treatments"
                  className="font-bold text-primary group-hover:text-primary-hover inline-flex items-center gap-1"
                >
                  Treatment Details
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="text-ink-muted hover:text-ink-primary font-medium"
                >
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
