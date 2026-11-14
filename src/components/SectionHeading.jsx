import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl mb-12 lg:mb-16 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 mb-3.5"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-lavender-300' : 'bg-primary'}`} />
          <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
            light ? 'text-lavender-200' : 'text-primary'
          }`}>
            {badge}
          </span>
          <span className={`w-6 h-[1px] ${light ? 'bg-white/20' : 'bg-ink-border'}`} />
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className={`font-sans font-bold text-3xl sm:text-4xl lg:text-5xl  tracking-tight leading-[1.14] ${
            light ? 'text-white' : 'text-ink-primary'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            light ? 'text-stone-300' : 'text-ink-secondary'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
