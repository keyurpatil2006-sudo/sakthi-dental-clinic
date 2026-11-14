import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BannerAssurance from '../components/BannerAssurance';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreTreatments from '../components/CoreTreatments';
import DoctorIntroduction from '../components/DoctorIntroduction';
import TestimonialCarousel from '../components/TestimonialCarousel';
import SterilizationSection from '../components/SterilizationSection';
import FacilitiesSection from '../components/FacilitiesSection';
import FinalCTA from '../components/FinalCTA';

export default function Home({ onOpenAppointment }) {
  useEffect(() => {
    document.title = "Sakthi Dental Clinic, Hosur | Specialized Dental Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0">
      {/* Section A: Hero Section */}
      <Hero onOpenAppointment={onOpenAppointment} />

      {/* Section B: Welcome / Assurance Banner */}
      <BannerAssurance onOpenAppointment={onOpenAppointment} />

      {/* Section C: Why Choose Sakthi Dental Clinic? */}
      <WhyChooseUs onOpenAppointment={onOpenAppointment} />

      {/* Section D: Our Core Treatments */}
      <CoreTreatments onOpenAppointment={onOpenAppointment} />

      {/* Section E: Doctor Introduction (Dr. Anupriya) */}
      <DoctorIntroduction onOpenAppointment={onOpenAppointment} />

      {/* Section F: What Our Patients Say (Testimonials) */}
      <TestimonialCarousel />

      {/* Section G: Hospital-Grade Sterilization Protocols */}
      <SterilizationSection />

      {/* Section H: Clinic Facilities / Amenities */}
      <FacilitiesSection />

      {/* Section I: Final CTA */}
      <FinalCTA onOpenAppointment={onOpenAppointment} />
    </div>
  );
}

