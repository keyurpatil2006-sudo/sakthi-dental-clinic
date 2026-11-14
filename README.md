# Sakthi Dental Clinic — Premium Multi-Page Website

A production-quality, responsive multi-page website for **Sakthi Dental Clinic**, located in Hosur, Tamil Nadu, India. Designed and developed with a bespoke luxury wellness & modern editorial healthcare aesthetic.

---

## 🌟 Key Highlights & Brand Identity

- **Brand Essence**: Over 20 years of compassionate dental care for women, children, and families led by founder **Dr. Anupriya**.
- **Palette & Aesthetic**:
  - **Primary Accent — Deep Imperial Plum:** `#3F2D48` *(authoritative, luxury healthcare)*
  - **Canvas Background — Warm Alabaster:** `#F9F8F5` *(calm, organic, easy on the eyes)*
  - **Architectural Stone:** `#F3EFEA` & `#EAE5DC` *(structural panel contrast)*
  - **Museum Obsidian:** `#161619` *(dark section banners & footer)*
  - **Primary Ink:** `#18191E` | **Slate Ink:** `#5A5864` | **Hairline Borders:** `#E4DFD6`
  - Replaced repetitive card drop-shadows and purple blur gradients with clean architectural grid lines, museum-grade photo frames, and refined typography.
- **Typography Hierarchy**:
  - **Neuton & Playfair Display (Serif / Display Serif)**: For prominent editorial headings, doctor titles, and section titles, providing a formal, distinguished, clinical editorial presence.
  - **Nunito (Modern Clean Sans)**: For overall interface, navigation, paragraphs, inputs, buttons, and badges, offering high legibility with warm, compassionate healthcare aesthetics.
- **Client Assets**: All 24 official brand assets from the Google Drive repository are integrated directly (SDC Logo, 3 operatory banners, 5 clinic amenity icons, and 15 treatment visuals).

---

## 🏛️ Website Structure & Pages

1. **Home (`/`)**:
   - **Hero Section**: Editorial split layout, exact headline *"Specialized Dental Care for Women, Children & Families"*, supporting text, dual CTAs, and clinic operatory photography.
   - **Welcome / Assurance Banner**: Full-width assurance banner *"You are always in safe hands. We are ready to help, anytime."*
   - **Why Choose Sakthi Dental Clinic?**: 4 asymmetrical features (All-in-One Care, Experienced Doctors, Patient-Centric Approach, Technology-Driven Services).
   - **Our Core Treatments**: 6 core treatments in a refined grid with client imagery and direct booking/details links.
   - **Doctor Introduction**: Editorial showcase introducing clinic founder Dr. Anupriya with authentic clinical history (graduated 2000, 6 years Mathura Clinic, founded SDC in 2004, decade with PHC Chandara Hospital).
   - **Testimonials**: Interactive carousel with exact patient testimonials (Manisha M, Mr. Arun Kumar, Mrs. Revathi S.) with autoplay and manual controls.
   - **Clinic Facilities**: Central location, parking, daily doctors availability (9 AM – 9 PM with clear timing notes), pickup/drop-off, and wheelchair access.
   - **Final CTA**: High-impact banner *"Your Healthier Smile Starts Here."* with appointment booking action.
   - **Footer**: Multi-column footer with logo, description, quick links, core treatments, contact info, social links, and privacy policy link.

2. **About Us (`/about`)**:
   - Editorial story: *"Get to Know Dr. Anupriya — Your Trusted Partner in Dental Care"*.
   - Exact client-provided biographical journey.
   - Comprehensive **Mission & Vision** statements.
   - **Our Doctors Team Section**: Displaying all 9 specialists with initials-based badges and verified clinical scopes:
     - Dr. Anupriya — Founder
     - Dr. Ananya Iyer — Prosthodontist
     - Dr. Meera Subramanian — Endodontist
     - Dr. Arvind Kumar — Dental Surgeon
     - Dr. Sneha N — Orthodontist
     - Dr. Srinivas Rohit Ramanujam — Implantologist
     - Dr. Balu — Laser Surgeon
     - Dr. Vikram Raj Kishore — Aligners Partner
     - Dr. Ajay Jumar — Oral & Maxillofacial Surgeon

3. **Treatments (`/treatments`)**:
   - Comprehensive directory of all **15 treatments** with exact client descriptions:
     1. Teeth Cleaning & Scaling
     2. Tooth Filling
     3. Tooth Extraction
     4. Artificial Complete Denture
     5. Dental Implants
     6. Laser Dentistry
     7. Root Canal Therapy
     8. Wisdom Tooth Extraction
     9. Fixed Partial Denture (Bridge)
     10. Teeth Whitening (Bleaching)
     11. Veneers
     12. Pediatric Dentistry
     13. Flap Surgery
     14. Orthodontic Braces
     15. Clear Aligners
   - Live category filters and one-click *"Book a Consultation"* buttons that pre-populate the appointment modal.

4. **FAQs (`/faqs`)**:
   - Accessible accordion component with smooth Framer Motion animations.
   - Contains all **14 exact questions and answers** from the client brief.
   - Live search filter and category filters for instant answer lookup.

5. **Contact Us (`/contact`)**:
   - **Left Column**: Interactive contact form with client-side validation (Name, Email, Phone, Message), error handling, and simulated confirmation screen.
   - **Right Column**: *"Reach Us"* with verified Hosur address, clickable phone numbers (`tel:`), clickable email (`mailto:`), working hours (Sunday to Saturday: 9 AM to 7 PM), and Google Maps locator.

6. **Privacy Policy (`/privacy-policy`)**:
   - Document-style layout covering all 9 required sections: Information We Collect, Cookies, How We Use Your Information, Data Security, Information Sharing, Children's Privacy, Changes to This Policy, Acceptance of Terms, Contact Us.

7. **Interactive Appointment Modal**:
   - Accessible from any page via the sticky header or any *"Fix an Appointment"* / *"Book a Consultation"* CTA.
   - Lets patients select treatments, doctor preferences, dates, and time slots.

---

## 🛠️ Technology Stack

- **React 18** (Functional components, custom hooks, modular architecture)
- **Vite** (Lightning-fast HMR and optimized production bundling)
- **Tailwind CSS** (Custom healthcare palette, typography tokens, glassmorphism, responsive utilities)
- **React Router DOM v6** (Multi-page routing with smooth scroll-to-top behavior)
- **Framer Motion** (Subtle, accessible entrance animations, accordion transitions, and carousel controls)
- **Lucide React** (Clean, minimalist iconography)

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

