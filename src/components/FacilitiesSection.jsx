import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function FacilitiesSection() {
  const facilities = [
    {
      id: 'location',
      title: 'Convenient central location',
      description: 'Easily accessible at SBM Layout, Anthivadi with clear road connectivity across Hosur.',
      icon: '/client_assets/amenities/city-center.png',
      badge: 'Anthivadi, Hosur'
    },
    {
      id: 'parking',
      title: 'Hassle-free parking',
      description: 'Spacious, dedicated parking space ensuring stress-free visits for families and elderly patients.',
      icon: '/client_assets/amenities/parking.png',
      badge: 'On-Premises'
    },
    {
      id: 'doctors',
      title: 'Doctors available daily (9 AM - 9 PM)',
      description: 'Consultation availability daily from 9 AM to 9 PM (Regular clinic walk-in hours: 9 AM – 7 PM; evening slots 7 PM – 9 PM by doctor appointment).',
      icon: '/client_assets/amenities/doctors.png',
      badge: 'Extended Consultations'
    },
    {
      id: 'pickup',
      title: 'Pickup and drop-off support',
      description: 'Convenient transit assistance arranged for senior citizens and specialized surgical care visits upon request.',
      icon: '/client_assets/amenities/pickup.png',
      badge: 'Patient Assistance'
    },
    {
      id: 'wheelchair',
      title: 'Wheelchair access',
      description: 'Fully ramped, barrier-free entrance and accessible clinic operatories for patients with mobility needs.',
      icon: '/client_assets/amenities/wheel-chair.png',
      badge: 'Barrier-Free'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-canvas border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Patient Comfort &amp; Accessibility"
          title="Thoughtful Care, Comfortable Experience"
          subtitle="Designed to provide a serene, stress-free clinical environment with modern amenities catering to every family member."
          align="center"
        />

        {/* 5-Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="bg-white rounded-2xl p-7 border border-ink-border shadow-subtle hover:border-plum-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-canvas-warm p-2.5 flex items-center justify-center border border-ink-border">
                    <img
                      src={fac.icon}
                      alt={fac.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded bg-canvas-warm border border-ink-border text-ink-secondary">
                    {fac.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl  text-ink-primary">
                  {fac.title}
                </h3>

                <p className="mt-2 text-sm text-ink-secondary leading-relaxed font-normal">
                  {fac.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-ink-border text-[11px] text-ink-muted flex items-center gap-1.5">
                <span>Sakthi Dental Clinic • Hosur</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear Timing Clarification Box */}
        <div className="mt-10 p-5 rounded-xl bg-canvas-warm border border-ink-border max-w-3xl mx-auto flex items-start gap-3.5 text-xs text-ink-secondary">
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="leading-relaxed font-normal">
            <strong className="text-ink-primary font-bold">Clinic Hours Note:</strong> General clinic walk-in hours operate from <strong>9:00 AM to 7:00 PM</strong> daily. Doctors are available up to <strong>9:00 PM</strong> for specialized dental treatments and pre-scheduled appointments.
          </p>
        </div>

      </div>
    </section>
  );
}
