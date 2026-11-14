import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+()-\s]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (at least 7 digits).';
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
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-10 rounded-2xl bg-white border border-ink-border shadow-subtle text-center space-y-4"
      >
        <div className="w-14 h-14 rounded-full bg-plum-100 text-primary flex items-center justify-center mx-auto mb-2 border border-plum-200">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-sans font-bold text-2xl sm:text-3xl text-ink-primary ">
          Inquiry Validated Successfully
        </h3>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-md mx-auto font-normal">
          Thank you, <strong className="text-ink-primary">{formData.name}</strong>. Your consultation inquiry has been processed on the client interface.
        </p>

        <div className="p-4 rounded-xl bg-canvas-warm border border-ink-border text-xs text-left max-w-sm mx-auto space-y-1.5 text-ink-secondary">
          <div><span className="text-ink-muted">Sender:</span> <strong className="text-ink-primary">{formData.name}</strong></div>
          <div><span className="text-ink-muted">Email:</span> {formData.email}</div>
          <div><span className="text-ink-muted">Phone:</span> {formData.phone}</div>
          {formData.message && <div><span className="text-ink-muted">Message:</span> &ldquo;{formData.message}&rdquo;</div>}
        </div>

        <div className="text-xs text-ink-muted max-w-sm mx-auto pt-2 font-normal">
          Direct clinic reception phone:{' '}
          <a href="tel:+919862890897" className="text-primary underline font-bold">+91 9862890897</a>.
        </div>

        <div className="pt-3">
          <Button variant="secondary" size="md" onClick={handleReset}>
            Send Another Inquiry
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-white border border-ink-border shadow-subtle space-y-5">
      <div className="space-y-1">
        <h3 className="font-sans font-bold text-2xl sm:text-3xl  text-ink-primary">
          We would love to hear from you
        </h3>
        <p className="text-xs sm:text-sm text-ink-secondary font-normal">
          Please fill out the form below. All required fields are marked with an asterisk (*).
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: null });
            }}
            placeholder="Your Full Name"
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 font-normal ${
              errors.name
                ? 'border-red-400 focus:ring-red-400'
                : 'border-ink-border'
            }`}
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-normal">
            <AlertCircle className="w-3 h-3" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            placeholder="name@example.com"
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 font-normal ${
              errors.email
                ? 'border-red-400 focus:ring-red-400'
                : 'border-ink-border'
            }`}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-normal">
            <AlertCircle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Phone className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: null });
            }}
            placeholder="+91 98628 90897"
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 font-normal ${
              errors.phone
                ? 'border-red-400 focus:ring-red-400'
                : 'border-ink-border'
            }`}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-normal">
            <AlertCircle className="w-3 h-3" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Your Message */}
      <div>
        <label className="block text-[11px] font-bold text-ink-primary uppercase tracking-[0.16em] mb-1.5">
          Your Message <span className="text-ink-muted lowercase font-normal">(optional)</span>
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-ink-muted absolute left-3.5 top-3.5" />
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="How can Dr. Anupriya and our dental team assist you today?"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink-border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-canvas-warm/30 text-ink-primary resize-none font-normal"
          />
        </div>
      </div>

      <div className="pt-2 space-y-2.5">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Validating message...
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Send className="w-4 h-4" />
              Submit Inquiry
            </span>
          )}
        </Button>

        <p className="text-[11px] text-ink-muted text-center font-normal">
          Client-side validation enabled. Actual message dispatch handled by clinic web team.
        </p>
      </div>
    </form>
  );
}
