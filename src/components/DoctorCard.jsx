import React from 'react';
import { motion } from 'framer-motion';

export default function DoctorCard({ doctor, onConsult }) {
  const isFounder = doctor.isFounder;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border shadow-subtle hover:border-plum-300 transition-all ${
        isFounder
          ? 'border-plum-300 bg-canvas-warm/30 md:col-span-2 lg:col-span-3'
          : 'border-ink-border'
      }`}
    >
      <div>
        {/* Doctor Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* Avatar / Monogram */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-sans font-bold text-lg  shrink-0 border ${
              isFounder
                ? 'bg-primary text-white border-primary'
                : 'bg-canvas-warm text-ink-primary border-ink-border'
            }`}
          >
            {doctor.initials}
          </div>

          <span
            className={`text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded border ${
              isFounder
                ? 'bg-primary text-white border-primary'
                : 'bg-canvas-warm text-ink-secondary border-ink-border'
            }`}
          >
            {doctor.role}
          </span>
        </div>

        {/* Doctor Name & Specialty */}
        <h3 className="font-sans font-bold text-xl sm:text-2xl  text-ink-primary">
          {doctor.name}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-primary mt-1 mb-3">
          {doctor.specialty}
        </p>

        {/* Bio */}
        <p className="text-sm text-ink-secondary leading-relaxed mb-4 font-normal">
          {doctor.bio}
        </p>

        {/* Expertise tags */}
        {doctor.expertise && doctor.expertise.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {doctor.expertise.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-canvas-warm text-ink-secondary border border-ink-border/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="mt-6 pt-4 border-t border-ink-border flex items-center justify-between text-xs">
        <span className="text-ink-muted">Sakthi Dental • Hosur</span>
        <button
          type="button"
          onClick={() => onConsult && onConsult(doctor.name)}
          className="font-bold text-primary hover:text-primary-hover transition-colors"
        >
          Book Consultation &rarr;
        </button>
      </div>
    </motion.div>
  );
}
