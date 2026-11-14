import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, CheckCircle2, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import DoctorCard from '../components/DoctorCard';
import FinalCTA from '../components/FinalCTA';
import Button from '../components/Button';
import { doctors } from '../data/doctors';

export default function About({ onOpenAppointment }) {
  useEffect(() => {
    document.title = "About Us | Dr. Anupriya & Medical Team | Sakthi Dental Clinic Hosur";
    window.scrollTo(0, 0);
  }, []);

  const handleConsultDoctor = (doctorName) => {
    onOpenAppointment(doctorName);
  };

  return (
    <div className="space-y-0 bg-canvas">
      {/* Editorial Page Header */}
      <PageHeader
        badge="About Our Practice"
        title="Get to Know Dr. Anupriya"
        subtitle="Your Trusted Partner in Dental Care"
      />

      {/* Main Founder Story Section */}
      <section className="py-16 lg:py-24 bg-canvas border-b border-ink-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left: Founder Editorial Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-ink-border shadow-subtle">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-canvas-warm p-8 flex flex-col justify-between">
                  <img
                    src="/client_assets/banners/banner-3.jpg"
                    alt="Dr. Anupriya practice suite at Sakthi Dental Clinic"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-dark/90 via-canvas-dark/30 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary border border-ink-border">
                      Chief Dental Practitioner
                    </span>
                    <span className="text-[11px] uppercase font-bold text-stone-300 tracking-wider">
                      Hosur, TN
                    </span>
                  </div>

                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-primary border-2 border-plum-200 flex items-center justify-center mx-auto mb-3 shadow-subtle">
                      <span className="font-sans font-bold text-3xl sm:text-4xl ">
                        DA
                      </span>
                    </div>
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white ">
                      Dr. Anupriya
                    </h2>
                    <p className="text-xs text-stone-300 uppercase tracking-widest font-semibold mt-1">
                      Founder • Sakthi Dental Clinic
                    </p>
                  </div>

                  <div className="relative z-10 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center text-xs text-stone-200 font-normal">
                    <span>Clinical Pioneer in Hosur Dentistry Since 2000</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Supplied Founder Story Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                  Two Decades of Dental Compassion
                </span>
                <span className="w-8 h-[1px] bg-ink-border" />
              </div>

              <h2 className="font-sans font-bold text-3xl sm:text-4xl  text-ink-primary tracking-tight leading-snug">
                Dedicated to Patient Wellbeing &amp; Modern Dental Care
              </h2>

              {/* Exact Client Content */}
              <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
                <p>
                  Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.
                </p>
                <p>
                  In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.
                </p>
                <p>
                  At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free.
                </p>
                <p className="font-normal text-ink-primary border-l-2 border-primary pl-4 py-1 italic bg-canvas-warm/60 rounded-r-xl">
                  &ldquo;Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step. Because here, your smile isn't just treated, it's celebrated.&rdquo;
                </p>
              </div>

              {/* Action */}
              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenAppointment("Dr. Anupriya (Founder)")}
                  icon={Calendar}
                  iconPosition="left"
                >
                  Schedule Appointment with Dr. Anupriya
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 lg:py-24 bg-canvas-warm/40 border-b border-ink-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Guiding Principles"
            title="Our Mission &amp; Vision"
            subtitle="The core values that direct every diagnosis, gentle touch, and community initiative at Sakthi Dental Clinic."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl p-8 sm:p-10 flex flex-col justify-between bg-white border border-ink-border shadow-subtle"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-plum-100 text-primary flex items-center justify-center border border-plum-200">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                    Core Purpose
                  </span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl  text-ink-primary">
                  Mission
                </h3>

                {/* Exact Mission Text */}
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-normal">
                  &ldquo;At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being. Continuous learning and innovation drive us to provide comprehensive solutions, from preventive care to complex dental procedures, all designed to promote long-lasting oral health.&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-ink-border text-xs text-primary font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Personalized • Compassionate • Advanced</span>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-2xl p-8 sm:p-10 flex flex-col justify-between bg-white border border-ink-border shadow-subtle"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-plum-100 text-primary flex items-center justify-center border border-plum-200">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                    Future Horizon
                  </span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl  text-ink-primary">
                  Vision
                </h3>

                {/* Exact Vision Text */}
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-normal">
                  &ldquo;Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs.&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-ink-border text-xs text-primary font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Trust • Excellence • Community Engagement</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-16 lg:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Clinical Specialists"
            title="Our Doctors"
            subtitle="Meet our multidisciplinary dental specialists committed to gentle precision and personalized patient care in Hosur."
            align="center"
          />

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onConsult={handleConsultDoctor}
              />
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-ink-muted font-normal">
            <p>Sakthi Dental Clinic • Hosur, Tamil Nadu • All specialties coordinated under one roof.</p>
          </div>

        </div>
      </section>

      {/* Final Appointment CTA */}
      <FinalCTA onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
