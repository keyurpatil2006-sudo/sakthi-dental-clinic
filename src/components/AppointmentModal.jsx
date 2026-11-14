import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { treatments } from '../data/treatments';
import { doctors } from '../data/doctors';
import Button from './Button';

export default function AppointmentModal({ isOpen, onClose, defaultTreatment = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: defaultTreatment || treatments[0].title,
    doctor: 'Any Available Specialist',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number.';
    } else if (!/^[0-9+()-\s]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (min 7 digits).';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomCode = 'SDC-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomCode);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      treatment: treatments[0].title,
      doctor: 'Any Available Specialist',
      preferredDate: '',
      preferredTime: '10:00 AM - 12:00 PM',
      notes: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-ink-primary/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative bg-white rounded-2xl shadow-elevated border border-ink-border max-w-2xl w-full p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-canvas-warm border border-transparent hover:border-ink-border transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-0.5 rounded bg-canvas-warm border border-ink-border text-primary">
                  Priority Consultation
                </span>
                <span className="text-xs text-ink-muted flex items-center gap-1 font-normal">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Confidential Clinic Booking
                </span>
              </div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-ink-primary ">
                Fix an Appointment
              </h3>
              <p className="mt-1 text-sm text-ink-secondary font-normal">
                Connect with Dr. Anupriya and our specialized dental team in Hosur. We will confirm your preferred timing promptly.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sundaram"
                        className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 font-normal ${
                          errors.name ? 'border-red-400 focus:ring-red-400' : 'border-ink-border'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 font-normal ${
                          errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-ink-border'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 font-normal ${
                        errors.email ? 'border-red-400 focus:ring-red-400' : 'border-ink-border'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Treatment */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                      Required Dental Service
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 text-ink-primary font-normal"
                    >
                      {treatments.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Doctor Preference */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                      Doctor Preference
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 text-ink-primary font-normal"
                    >
                      <option value="Any Available Specialist">Any Available Specialist</option>
                      {doctors.map((d) => (
                        <option key={d.id} value={`${d.name} (${d.role})`}>
                          {d.name} ({d.role})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-ink-border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 text-ink-primary font-normal"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                      Preferred Time Window
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-ink-border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 text-ink-primary font-normal"
                      >
                        <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                        <option value="Extended (7:00 PM - 9:00 PM by appt)">Extended (7:00 PM - 9:00 PM by appt)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
                    Your Dental Concern / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe what you're experiencing (e.g. routine check-up, pain, aligners consultation)..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ink-border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 text-ink-primary resize-none font-normal"
                  />
                </div>

                {/* Notice */}
                <div className="p-3 bg-canvas-warm border border-ink-border rounded-xl text-xs text-ink-secondary font-normal">
                  <strong>Notice:</strong> Appointment bookings are confirmed directly by clinic staff via phone or WhatsApp. Clinic timings: Daily 9 AM to 7 PM (Extended consulting hours up to 9 PM).
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5"
                  >
                    {isSubmitting ? 'Scheduling Consultation...' : 'Confirm Appointment Request'}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-plum-100 text-primary flex items-center justify-center mx-auto mb-3 border border-plum-200">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-ink-primary ">
                Appointment Requested Successfully
              </h3>
              <p className="text-sm text-ink-secondary max-w-md mx-auto font-normal">
                Thank you, <strong className="text-ink-primary">{formData.name}</strong>. Your consultation request for <strong className="text-ink-primary">{formData.treatment}</strong> has been logged.
              </p>

              <div className="p-4 bg-canvas-warm border border-ink-border rounded-xl max-w-sm mx-auto text-left text-xs space-y-1.5 text-ink-secondary">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Booking Reference:</span>
                  <span className="font-mono font-bold text-primary">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Preferred Time:</span>
                  <span className="text-ink-primary font-semibold">{formData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Assigned Doctor:</span>
                  <span className="text-ink-primary font-semibold">{formData.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Clinic Hotline:</span>
                  <span className="text-ink-primary font-semibold">+91 9862890897</span>
                </div>
              </div>

              <div className="pt-3">
                <Button variant="primary" size="md" onClick={handleReset}>
                  Return to Website
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
