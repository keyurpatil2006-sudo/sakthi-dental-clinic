import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, Navigation, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

export default function Contact({ onOpenAppointment }) {
  useEffect(() => {
    document.title = "Contact Us & Clinic Timings | Sakthi Dental Clinic Hosur";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0 bg-canvas">
      {/* Page Header */}
      <PageHeader
        badge="Connect With Us"
        title="We Are Here to Help Your Smile"
        subtitle="Visit our Hosur clinic, call our team directly, or send an inquiry to discuss your personalized dental care."
      />

      {/* Main Two-Column Contact Section */}
      <section className="py-16 lg:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Contact Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>

            {/* Right Column: Reach Us (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Reach Us Card */}
              <div className="rounded-2xl bg-white border border-ink-border p-8 sm:p-10 shadow-subtle space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    Clinic Details
                  </span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl  text-ink-primary mt-1">
                    Reach Us
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary mt-1 font-normal">
                    Conveniently situated in Anthivadi, Hosur with dedicated parking and accessibility.
                  </p>
                </div>

                {/* Details List */}
                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-plum-100 text-primary flex items-center justify-center shrink-0 border border-plum-200">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                        Address
                      </p>
                      <p className="text-ink-primary font-medium mt-0.5 leading-relaxed">
                        B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
                      </p>
                      <a
                        href="https://maps.google.com/?q=B2/8,+SBM+Layout,+Anthivadi,+Hosur,+Tamil+Nadu+635109"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-hover font-bold mt-1"
                      >
                        Open in Google Maps <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-plum-100 text-primary flex items-center justify-center shrink-0 border border-plum-200">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                        Phone
                      </p>
                      <div className="flex flex-col mt-0.5 space-y-0.5">
                        <a
                          href="tel:+919862890897"
                          className="text-ink-primary hover:text-primary font-medium transition-colors"
                        >
                          +91 9862890897
                        </a>
                        <a
                          href="tel:+919363298118"
                          className="text-ink-primary hover:text-primary font-medium transition-colors"
                        >
                          +91 9363298118
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-plum-100 text-primary flex items-center justify-center shrink-0 border border-plum-200">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                        Email
                      </p>
                      <a
                        href="mailto:info@sakthidentalclinic.in"
                        className="text-ink-primary hover:text-primary font-medium transition-colors break-all block mt-0.5"
                      >
                        info@sakthidentalclinic.in
                      </a>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-plum-100 text-primary flex items-center justify-center shrink-0 border border-plum-200">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                        Timings
                      </p>
                      <p className="text-ink-primary font-semibold mt-0.5">
                        Sunday to Saturday: 9 AM to 7 PM
                      </p>
                      <p className="text-xs text-ink-secondary mt-0.5 font-normal">
                        Doctor consultations available by appointment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Appointment Button */}
                <div className="pt-3 border-t border-ink-border">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => onOpenAppointment()}
                    icon={Calendar}
                    iconPosition="left"
                  >
                    Fix an Appointment Online
                  </Button>
                </div>
              </div>

              {/* Map Frame */}
              <div className="rounded-2xl bg-white border border-ink-border p-6 shadow-subtle text-left space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-primary">
                      Anthivadi Landmark
                    </span>
                  </div>
                  <span className="text-[11px] text-ink-muted">Tamil Nadu 635109</span>
                </div>

                <p className="text-xs text-ink-secondary leading-relaxed font-normal">
                  Located near SBM Layout in Anthivadi, conveniently connected to central Hosur.
                </p>

                <div className="w-full h-40 rounded-xl overflow-hidden border border-ink-border shadow-inner bg-stone-100">
                  <iframe
                    title="Sakthi Dental Clinic Hosur Location Map"
                    src="https://maps.google.com/maps?q=B2/8,+SBM+Layout,+Anthivadi,+Hosur,+Tamil+Nadu+635109&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter contrast-[1.05]"
                    loading="lazy"
                  />
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
