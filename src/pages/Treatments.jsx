import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, Search, Stethoscope, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import FinalCTA from '../components/FinalCTA';
import { treatments } from '../data/treatments';

// Clinically relevant symptom mappings referencing the exact 15 clinic treatments
const symptomProfiles = [
  {
    id: 'toothache',
    label: 'Toothache & Sensitivity',
    hint: 'Pain while eating or hot/cold sensitivity',
    targetTreatments: ['root-canal-treatment', 'tooth-filling', 'laser-dentistry'],
  },
  {
    id: 'crooked',
    label: 'Crooked or Crowded Teeth',
    hint: 'Misalignment, spaces, or bite issues',
    targetTreatments: ['invisalign-clear-aligner', 'orthodontic-treatment'],
  },
  {
    id: 'gums',
    label: 'Bleeding or Swollen Gums',
    hint: 'Tartar deposits, gum irritation, bleeding',
    targetTreatments: ['teeth-cleaning', 'periodontal-flap-surgery', 'laser-dentistry'],
  },
  {
    id: 'missing',
    label: 'Missing Teeth or Gaps',
    hint: 'Difficulty chewing or tooth replacement needed',
    targetTreatments: ['dental-implants', 'artificial-complete-denture', 'prosthodontics', 'removable-partial-denture'],
  },
  {
    id: 'wisdom',
    label: 'Wisdom Tooth or Severe Decay',
    hint: 'Impacted molar pain or non-restorable tooth',
    targetTreatments: ['tooth-extraction'],
  },
  {
    id: 'stains',
    label: 'Stained or Discolored Enamel',
    hint: 'Coffee, tea stains or dull smile',
    targetTreatments: ['teeth-bleaching-whitening', 'teeth-cleaning'],
  },
  {
    id: 'child',
    label: 'Children Dental Checkup',
    hint: 'Pediatric caries prevention & milk teeth care',
    targetTreatments: ['pediatric-dentistry', 'tooth-filling'],
  },
];

export default function Treatments({ onOpenAppointment }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "Treatments & Dental Services | Sakthi Dental Clinic Hosur";
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Preventive Care', 'Restorative Care', 'Prosthodontics', 'Cosmetic Care', 'Orthodontics', 'Oral Surgery', 'Advanced Technology'];

  const filteredTreatments = treatments.filter((t) => {
    // If a symptom is selected, filter by symptom targets
    if (selectedSymptom) {
      const activeProfile = symptomProfiles.find(s => s.id === selectedSymptom);
      if (activeProfile && !activeProfile.targetTreatments.includes(t.id)) {
        return false;
      }
    }

    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Preventive Care' && (t.category.includes('Preventive') || t.category.includes('Pediatric'))) ||
      (selectedCategory === 'Restorative Care' && (t.category.includes('Restorative') || t.category.includes('Endodontics'))) ||
      (selectedCategory === 'Prosthodontics' && (t.category.includes('Prosthodontics') || t.category.includes('Implantology'))) ||
      (selectedCategory === 'Cosmetic Care' && t.category.includes('Cosmetic')) ||
      (selectedCategory === 'Orthodontics' && t.category.includes('Orthodontics')) ||
      (selectedCategory === 'Oral Surgery' && (t.category.includes('Surgery') || t.category.includes('Periodontics'))) ||
      (selectedCategory === 'Advanced Technology' && t.category.includes('Advanced'));

    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.badge.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleSymptomClick = (symptomId) => {
    if (selectedSymptom === symptomId) {
      setSelectedSymptom(null);
    } else {
      setSelectedSymptom(symptomId);
      setSelectedCategory('All');
    }
  };

  const handleClearFilters = () => {
    setSelectedSymptom(null);
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="space-y-0 bg-canvas">
      {/* Page Header */}
      <PageHeader
        badge="Specialized Dental Services"
        title="Comprehensive Treatments for Every Smile"
        subtitle="Explore all 15 specialized dental procedures offered at Sakthi Dental Clinic in Hosur, combining state-of-the-art technology with compassionate, gentle care."
      />

      {/* Treatments Directory Section */}
      <section className="py-12 lg:py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dental Symptom Quick-Finder (Interactive Tool) */}
          <div className="mb-12 bg-white rounded-2xl border border-ink-border p-6 sm:p-8 shadow-subtle">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ink-border">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary block mb-1">
                  Interactive Patient Navigator
                </span>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-ink-primary">
                  Dental Symptom Quick-Finder
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                  Select what you are experiencing to immediately filter recommended clinic treatments:
                </p>
              </div>

              {(selectedSymptom || selectedCategory !== 'All' || searchQuery) && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="self-start sm:self-center text-xs font-semibold text-primary hover:text-primary-hover underline underline-offset-4"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {/* Symptom Selection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-5">
              {symptomProfiles.map((symptom) => {
                const isSelected = selectedSymptom === symptom.id;
                return (
                  <button
                    key={symptom.id}
                    type="button"
                    onClick={() => handleSymptomClick(symptom.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-primary text-white border-primary shadow-subtle'
                        : 'bg-canvas-warm/60 border-ink-border text-ink-primary hover:border-primary/40 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-ink-primary'}`}>
                          {symptom.label}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
                      </div>
                      <p className={`text-[11px] leading-relaxed ${isSelected ? 'text-white/80' : 'text-ink-secondary'}`}>
                        {symptom.hint}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedSymptom(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      selectedCategory === cat && !selectedSymptom
                        ? 'bg-primary text-white shadow-subtle'
                        : 'bg-white text-ink-secondary border border-ink-border hover:border-primary/30 hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Text Search Field */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search treatments or care..."
                  className="w-full pl-9 pr-3.5 py-1.5 rounded-full bg-white border border-ink-border text-xs text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-ink-muted pt-2 border-t border-ink-border/50">
              <span>
                Showing <strong>{filteredTreatments.length}</strong> of 15 procedures
                {selectedSymptom && (
                  <span className="text-primary font-medium ml-2">
                    (Filtered by symptom: {symptomProfiles.find(s => s.id === selectedSymptom)?.label})
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* 15 Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredTreatments.map((treatment, idx) => (
                <motion.div
                  key={treatment.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-ink-border shadow-subtle hover:border-primary/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded bg-canvas-warm border border-ink-border text-ink-secondary">
                        {treatment.category}
                      </span>
                      <span className="font-sans font-bold text-sm text-ink-muted">
                        0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                    </div>

                    {/* Image Showcase */}
                    <div className="relative w-full h-48 rounded-xl bg-canvas-warm/70 border border-ink-border/60 mb-5 overflow-hidden flex items-center justify-center p-4 group-hover:bg-canvas-warm transition-colors">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-white/90 border border-ink-border text-[10px] font-bold text-primary">
                        {treatment.badge}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-sans font-bold text-xl sm:text-2xl text-ink-primary group-hover:text-primary transition-colors">
                      {treatment.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-2.5 text-sm text-ink-secondary leading-relaxed font-normal">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Card Bottom: Book a Consultation CTA */}
                  <div className="mt-6 pt-4 border-t border-ink-border flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => onOpenAppointment(treatment.title)}
                      className="inline-flex items-center gap-1 font-bold text-primary group-hover:text-primary-hover transition-colors"
                    >
                      <span>Book a Consultation</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <span className="text-ink-muted">Hosur Clinic</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quick Consultation Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-canvas-warm border border-ink-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-sans font-bold text-xl text-ink-primary">
                Unsure which treatment is right for your dental concern?
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary font-normal">
                Our senior dentists in Hosur perform a comprehensive clinical assessment with gentle diagnostic examinations.
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenAppointment('Comprehensive Oral Evaluation')}
              icon={Calendar}
              iconPosition="left"
              className="shrink-0"
            >
              Book a Consultation
            </Button>
          </div>

        </div>
      </section>

      {/* Final CTA Banner */}
      <FinalCTA onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
