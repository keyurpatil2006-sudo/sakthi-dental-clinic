import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({
  badge,
  title,
  subtitle,
  children
}) {
  return (
    <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 bg-canvas border-b border-ink-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {badge && (
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                {badge}
              </span>
              <span className="w-6 h-[1px] bg-ink-border" />
            </div>
          )}

          <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl  text-ink-primary tracking-tight leading-[1.14]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto font-normal">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="pt-2">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
