import React, { useEffect } from 'react';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { privacyPolicyData } from '../data/privacyPolicyData';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Sakthi Dental Clinic Hosur";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0 bg-canvas">
      {/* Page Header */}
      <PageHeader
        badge="Legal &amp; Confidentiality"
        title="Privacy Policy"
        subtitle="How Sakthi Dental Clinic protects, manages, and respects your medical and personal information."
      />

      <section className="py-16 lg:py-24 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link & Meta info */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink-border text-xs text-ink-secondary">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <span className="flex items-center gap-1.5 text-ink-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Last Revised: {privacyPolicyData.lastUpdated}</span>
            </span>
          </div>

          {/* Document Body */}
          <div className="bg-white rounded-2xl border border-ink-border shadow-subtle p-8 sm:p-12 space-y-10">
            {/* Intro */}
            <div className="space-y-3 pb-6 border-b border-ink-border">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-canvas-warm border border-ink-border text-[11px] font-bold text-primary">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span>Patient Confidentiality Protocol</span>
              </div>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
                {privacyPolicyData.intro}
              </p>
            </div>

            {/* Structured Sections */}
            <div className="space-y-10">
              {privacyPolicyData.sections.map((sec, idx) => (
                <article key={sec.id} id={sec.id} className="scroll-mt-24 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-sans font-bold text-sm  text-ink-muted">
                      0{idx + 1}
                    </span>
                    <h2 className="font-sans font-bold text-xl sm:text-2xl  text-ink-primary">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-2.5 text-sm sm:text-base text-ink-secondary leading-relaxed pl-6 border-l border-ink-border font-normal">
                    {sec.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Correspondence Box */}
            <div className="pt-6 mt-10 border-t border-ink-border bg-canvas-warm rounded-xl p-5 text-xs text-ink-secondary space-y-1.5">
              <p className="font-bold text-ink-primary">
                Official Clinic Correspondence:
              </p>
              <p>Sakthi Dental Clinic • B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</p>
              <p>Email: <a href="mailto:info@sakthidentalclinic.in" className="text-primary underline">info@sakthidentalclinic.in</a> • Phone: <a href="tel:+919862890897" className="text-primary underline">+91 9862890897</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
