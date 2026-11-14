import React, { useEffect } from 'react';
import { Phone, Mail, HelpCircle, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQAccordion from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import Button from '../components/Button';

export default function FAQs({ onOpenAppointment }) {
  useEffect(() => {
    document.title = "Frequently Asked Questions | Sakthi Dental Clinic Hosur";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <PageHeader
        badge="Dental Insights &amp; Guidance"
        title="Frequently Asked Questions"
        subtitle="Clear, medically sound answers to common questions about dental care, treatments, and oral hygiene from our experienced team in Hosur."
      />

      {/* Main Accordion Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />

          {/* Still have questions card */}
          <div className="mt-16 max-w-3xl mx-auto rounded-3xl bg-white border border-lavender-200 p-8 sm:p-10 shadow-soft text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-lavender-100 text-lavender-700 flex items-center justify-center mx-auto">
              <HelpCircle className="w-6 h-6 text-lavender-600" />
            </div>

            <h3 className="font-sans font-bold text-2xl font-medium text-ink-primary">
              Have a Specific Dental Concern Not Listed Here?
            </h3>
            
            <p className="text-sm text-ink-secondary leading-relaxed max-w-lg mx-auto">
              Every smile is unique. Contact Dr. Anupriya and our friendly team directly or book an in-person clinical consultation.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenAppointment}
              >
                Schedule Consultation
              </Button>

              <a
                href="tel:+919862890897"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-surface-alt hover:bg-lavender-50 text-ink-primary border border-ink-border transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-lavender-600" />
                <span>Call +91 9862890897</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <FinalCTA onOpenAppointment={onOpenAppointment} />
    </div>
  );
}

