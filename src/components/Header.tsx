import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { PRACTICE_INFO } from '../data/practiceData';
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Menu,
  X,
  AlertCircle,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string, prefillDentist?: string) => void;
  onOpenSmileQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenSmileQuiz,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Meet the Team' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'fees', label: 'Fees & Denplan' },
    { id: 'emergency', label: 'Dental Emergencies', highlight: true },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#0B3B60] text-slate-100 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Location & Hours */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 whitespace-nowrap">
            <div className="flex items-center gap-1.5 text-sky-100 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
              <span className="whitespace-nowrap">78 Dalrymple Street, Girvan, Ayrshire</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-sky-200 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
              <span className="whitespace-nowrap">Mon – Fri: 9:00 am – 5:00 pm</span>
            </div>
          </div>

          {/* Emergency Alert & Direct Contact */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto text-xs whitespace-nowrap">
            <a
              href="tel:01465712213"
              className="flex items-center gap-1.5 text-white font-semibold hover:text-sky-200 transition-colors bg-white/10 hover:bg-white/15 px-2.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
              <span className="whitespace-nowrap">01465 712213</span>
            </a>
            <div className="hidden lg:flex items-center gap-1 text-amber-200 font-medium bg-amber-500/20 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
              <AlertCircle className="w-3 h-3 text-amber-300 flex-shrink-0" />
              <span className="whitespace-nowrap">Out of hours: NHS 24 (dial 111)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3 2xl:gap-6">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-hidden group flex-shrink-0"
          aria-label="Girvan Dental Practice Home"
        >
          <Logo />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 text-xs 2xl:text-sm font-semibold text-slate-700 flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-2.5 2xl:px-3 py-2 rounded-lg transition-all duration-150 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'text-[#0B3B60] bg-sky-50 font-bold border-b-2 border-[#0B3B60]'
                    : link.highlight
                    ? 'text-rose-700 hover:text-rose-800 hover:bg-rose-50 font-bold'
                    : 'hover:text-[#0B3B60] hover:bg-slate-100/70'
                }`}
              >
                <span className="whitespace-nowrap">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2 2xl:gap-2.5 flex-shrink-0">
          <button
            onClick={onOpenSmileQuiz}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 2xl:px-3 py-2 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 transition-colors whitespace-nowrap flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
            <span className="whitespace-nowrap">Smile Assessment</span>
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 2xl:gap-2 px-3.5 2xl:px-4 py-2 2xl:py-2.5 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white text-xs 2xl:text-sm font-bold rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 whitespace-nowrap flex-shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-sky-200 flex-shrink-0" />
            <span className="whitespace-nowrap">Book an Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 xl:hidden flex-shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 bg-[#0B3B60] text-white text-xs font-bold rounded-lg shadow-xs whitespace-nowrap flex-shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">Book</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 shadow-xl transition-all">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-base font-semibold ${
                    isActive
                      ? 'bg-sky-50 text-[#0B3B60] border-l-4 border-[#0B3B60]'
                      : link.highlight
                      ? 'text-rose-700 hover:bg-rose-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}

            <div className="pt-3 pb-1 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSmileQuiz();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-sky-800 bg-sky-50 rounded-xl border border-sky-200"
              >
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Take 30-Sec Smile Assessment</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-[#0B3B60] to-[#0284C7] rounded-xl shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href="tel:01465712213"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#0B3B60]" />
                <span>Call Practice: 01465 712213</span>
              </a>
            </div>

            {/* Accreditation reminder */}
            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Approved NES Training Practice &bull; NHS & Private</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
