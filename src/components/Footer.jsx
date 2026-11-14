import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import { treatments } from '../data/treatments';

export default function Footer({ onOpenAppointment }) {
  const importantTreatments = treatments.slice(0, 6);

  return (
    <footer className="bg-[#141416] text-white border-t border-[#25252A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center border border-stone-700">
                <img
                  src="/client_assets/logo/sdc-logo.png"
                  alt="Sakthi Dental Clinic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-sans font-bold text-xl  tracking-tight text-white block">
                  Sakthi Dental Clinic
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-plum-300 font-bold">
                  Hosur • Tamil Nadu
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm pt-1 font-normal">
              Established in 2004 by Dr. Anupriya, Sakthi Dental Clinic brings over two decades of trusted, compassionate, and modern dental care tailored for women, children, and families.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                  aria-label="Sakthi Dental Clinic on Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                  aria-label="Sakthi Dental Clinic on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                  aria-label="Sakthi Dental Clinic on YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-stone-200">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300 font-normal">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-stone-200">
              Core Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300 font-normal">
              {importantTreatments.map((treatment) => (
                <li key={treatment.id}>
                  <Link
                    to="/treatments"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{treatment.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-stone-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/treatments"
                  className="text-xs text-lavender-300 hover:text-white font-bold inline-flex items-center gap-1 pt-1"
                >
                  All 15 Specialized Treatments &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-stone-200">
              Clinic Location
            </h4>
            <div className="space-y-3 text-sm text-stone-300 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919862890897" className="hover:text-white transition-colors">
                    +91 9862890897
                  </a>
                  <a href="tel:+919363298118" className="hover:text-white transition-colors">
                    +91 9363298118
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <a
                  href="mailto:info@sakthidentalclinic.in"
                  className="hover:text-white transition-colors break-all"
                >
                  info@sakthidentalclinic.in
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sunday to Saturday</p>
                  <p className="text-xs text-stone-300">9:00 AM – 7:00 PM</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Extended consulting to 9 PM by appt</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4 font-normal">
          <p>
            &copy; {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved. Hosur, Tamil Nadu.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-stone-600">•</span>
            <span>Bespoke Healthcare Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
