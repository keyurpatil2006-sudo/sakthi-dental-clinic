import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ScrollToTop from './components/ScrollToTop';
import PageWrapper from './components/PageWrapper';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function AppContent() {
  const location = useLocation();
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [modalDefaultTreatment, setModalDefaultTreatment] = useState('');

  const handleOpenAppointment = (treatmentOrDoctor = '') => {
    setModalDefaultTreatment(typeof treatmentOrDoctor === 'string' ? treatmentOrDoctor : '');
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
    setModalDefaultTreatment('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink-primary relative overflow-x-hidden">
      <ScrollToTop />
      
      {/* Global Architectural Dental Watermarks (Both Left & Right) */}
      <div className="fixed -left-48 top-1/4 pointer-events-none select-none opacity-[0.03] -z-0">
        <svg
          width="600"
          height="600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary transform -rotate-12"
        >
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2 8 0.5 3 1.5 6 4 6 1.5 0 2-2 2-4 0-1.5 0.5-2 1-2s1 0.5 1 2c0 2 0.5 4 2 4 2.5 0 3.5-3 4-6 0.5-3 2-5 2-8 0-3.5-2.5-6-6-6-1.5 0-2.5 0.8-4 0.8S13.5 2 12 2z" />
          <path d="M9.5 8.5c1 1 2 1.5 3.5 1.5s2.5-0.5 3.5-1.5" />
        </svg>
      </div>

      <div className="fixed -right-48 bottom-1/4 pointer-events-none select-none opacity-[0.03] -z-0">
        <svg
          width="600"
          height="600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary transform rotate-12"
        >
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2 8 0.5 3 1.5 6 4 6 1.5 0 2-2 2-4 0-1.5 0.5-2 1-2s1 0.5 1 2c0 2 0.5 4 2 4 2.5 0 3.5-3 4-6 0.5-3 2-5 2-8 0-3.5-2.5-6-6-6-1.5 0-2.5 0.8-4 0.8S13.5 2 12 2z" />
          <path d="M9.5 8.5c1 1 2 1.5 3.5 1.5s2.5-0.5 3.5-1.5" />
        </svg>
      </div>

      {/* Sticky Header with Navigation & CTA */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Area with Route Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home onOpenAppointment={handleOpenAppointment} />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About onOpenAppointment={handleOpenAppointment} />
                </PageWrapper>
              }
            />
            <Route
              path="/treatments"
              element={
                <PageWrapper>
                  <Treatments onOpenAppointment={handleOpenAppointment} />
                </PageWrapper>
              }
            />
            <Route
              path="/faqs"
              element={
                <PageWrapper>
                  <FAQs onOpenAppointment={handleOpenAppointment} />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact onOpenAppointment={handleOpenAppointment} />
                </PageWrapper>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageWrapper>
                  <Privacy />
                </PageWrapper>
              }
            />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Multi-column Premium Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Global Consultation / Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointment}
        defaultTreatment={modalDefaultTreatment}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
