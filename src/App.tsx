import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { BookingModal } from './components/BookingModal';
import { SmileQuizModal } from './components/SmileQuizModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { FeesPage } from './pages/FeesPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefillTreatment, setBookingPrefillTreatment] = useState<string>('');
  const [bookingPrefillDentist, setBookingPrefillDentist] = useState<string>('');
  const [isSmileQuizOpen, setIsSmileQuizOpen] = useState(false);

  const handleOpenBooking = (prefillTreatment?: string, prefillDentist?: string) => {
    setBookingPrefillTreatment(prefillTreatment || '');
    setBookingPrefillDentist(prefillDentist || '');
    setIsBookingOpen(true);
  };

  const handleOpenSmileQuiz = () => {
    setIsSmileQuizOpen(true);
  };

  const handleSmileQuizBook = (treatmentName: string) => {
    setIsSmileQuizOpen(false);
    handleOpenBooking(treatmentName);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-sky-600 selection:text-white">
      {/* Main Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenSmileQuiz={handleOpenSmileQuiz}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenSmileQuiz={handleOpenSmileQuiz}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'team' && (
          <TeamPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'treatments' && (
          <TreatmentsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenSmileQuiz={handleOpenSmileQuiz}
          />
        )}
        {currentPage === 'fees' && (
          <FeesPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'emergency' && (
          <EmergencyPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Main Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToEmergency={() => handleNavigate('emergency')}
      />

      {/* Interactive Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefillTreatment={bookingPrefillTreatment}
        prefillDentist={bookingPrefillDentist}
      />

      {/* Interactive 30-Sec Smile Assessment Quiz */}
      <SmileQuizModal
        isOpen={isSmileQuizOpen}
        onClose={() => setIsSmileQuizOpen(false)}
        onBookTreatment={handleSmileQuizBook}
      />
    </div>
  );
}
