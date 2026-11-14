import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';

const protocols = [
  {
    id: 'autoclave',
    title: 'Class-B Autoclave Sterilization',
    category: 'Instrument Safety',
    standard: 'Hospital-Grade EN13060 Standard',
    description: 'All solid, hollow, and surgical instruments undergo multi-stage ultrasonic cleaning followed by vacuum Class-B fractional pre-vacuum autoclaving under high pressure and temperature.',
    specs: [
      { label: 'Sterilization Cycle', value: '134°C Vacuum Autoclave' },
      { label: 'Pouch Packaging', value: 'Heat-sealed medical barrier pouches' },
      { label: 'Verification', value: 'Chemical & biological color-change indicators' },
      { label: 'Bedside Protocol', value: 'Opened exclusively in front of the patient' }
    ]
  },
  {
    id: 'disposables',
    title: '100% Single-Use Disposables',
    category: 'Barrier Protection',
    standard: 'Zero Cross-Contamination Mandate',
    description: 'Every consumable item coming into direct or indirect patient contact is strictly single-use and discarded in clinical biomedical waste containers immediately following treatment.',
    specs: [
      { label: 'Drapes & Bibs', value: 'Waterproof medical grade, replaced per visit' },
      { label: 'Suction Tips & Needles', value: 'Sterile single-use disposable tips' },
      { label: 'Clinician PPE', value: 'Fresh powder-free medical gloves & masks' },
      { label: 'Tray Covers', value: 'Disposable sterile surface barriers' }
    ]
  },
  {
    id: 'operatory',
    title: 'Operatory & Surface Decontamination',
    category: 'Environmental Hygiene',
    standard: 'Dual-Phase Disinfection Between Patients',
    description: 'Dental chairs, unit lights, delivery units, and all high-touch clinical surfaces receive hospital-level hospital germicidal wipes and misting between every patient appointment.',
    specs: [
      { label: 'Turnaround Window', value: 'Full contact sanitization between visits' },
      { label: 'Chemical Grade', value: 'Broad-spectrum virucidal & bactericidal' },
      { label: 'Air Management', value: 'Continuous operatory air exchange' },
      { label: 'Chair Barrier', value: 'Protective disposable films on handpieces' }
    ]
  },
  {
    id: 'waterlines',
    title: 'Purified Waterline Management',
    category: 'Irrigation Purity',
    standard: 'Sterile Water Delivery',
    description: 'All ultrasonic scalers, high-speed drills, and triple-action syringes operate using dedicated closed-circuit purified waterlines with anti-retraction valves to prevent micro-backflow.',
    specs: [
      { label: 'Water Source', value: 'Closed-circuit filtered reverse osmosis' },
      { label: 'Anti-Backflow', value: 'Non-retraction valves on all handpieces' },
      { label: 'Flushing Routine', value: 'High-pressure line flush before every procedure' },
      { label: 'Compliance', value: 'IDA & NABH clinical safety benchmarks' }
    ]
  }
];

export default function SterilizationSection() {
  const [activeTab, setActiveTab] = useState(protocols[0].id);
  const activeProtocol = protocols.find(p => p.id === activeTab) || protocols[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-ink-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Clinical Safety Standards"
          title="Hospital-Grade Sterilization Protocols"
          subtitle="At Sakthi Dental Clinic, patient safety is foundational. We adhere to rigorous four-phase infection control protocols ensuring a clean, safe, and worry-free treatment environment."
          align="center"
        />

        {/* Protocol Spec Sheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Navigation Protocol Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted mb-3 px-1">
              Safety Verification Protocols
            </p>

            {protocols.map((protocol, idx) => {
              const isActive = activeTab === protocol.id;
              return (
                <button
                  key={protocol.id}
                  type="button"
                  onClick={() => setActiveTab(protocol.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-primary text-white border-primary shadow-subtle'
                      : 'bg-canvas border-ink-border text-ink-primary hover:border-primary/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-sans font-bold text-xs ${isActive ? 'text-white/70' : 'text-ink-muted'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className={`text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-ink-primary'}`}>
                        {protocol.title}
                      </h4>
                      <p className={`text-[11px] mt-0.5 ${isActive ? 'text-white/80' : 'text-ink-secondary'}`}>
                        {protocol.category}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-white translate-x-0.5' : 'text-ink-muted'}`} />
                </button>
              );
            })}

            {/* Reassurance Callout Box */}
            <div className="p-4 rounded-xl bg-canvas-warm border border-ink-border mt-4 text-xs text-ink-secondary leading-relaxed">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-ink-primary">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Zero Tolerance for Cross-Contamination</span>
              </div>
              <p className="text-[11px]">
                Every sterilized pouch is opened in your direct view at the start of your consultation in Hosur.
              </p>
            </div>
          </div>

          {/* Right Column: Active Protocol Detailed Technical Sheet (7 cols) */}
          <motion.div
            key={activeProtocol.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-canvas rounded-2xl p-6 sm:p-8 border border-ink-border flex flex-col justify-between"
          >
            <div>
              {/* Badge & Standard */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-ink-border">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded bg-white border border-ink-border text-primary">
                  {activeProtocol.category}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  {activeProtocol.standard}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-ink-primary mb-2.5">
                {activeProtocol.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6 font-normal">
                {activeProtocol.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="space-y-2.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                  Technical Specifications
                </p>

                <div className="rounded-xl border border-ink-border bg-white divide-y divide-ink-border/60 overflow-hidden text-xs">
                  {activeProtocol.specs.map((spec, i) => (
                    <div key={i} className="p-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-medium text-ink-secondary">{spec.label}</span>
                      <span className="font-bold text-ink-primary text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="mt-6 pt-4 border-t border-ink-border/60 flex items-center justify-between text-xs text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Audited daily by Dr. Anupriya
              </span>
              <span>Sakthi Dental Clinic Hosur</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
