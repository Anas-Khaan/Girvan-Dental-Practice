import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PageId } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
} from 'lucide-react';

export interface PracticeSlide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  badge: string;
  highlights: string[];
  primaryCta: {
    label: string;
    action: 'booking' | 'page' | 'quiz';
    treatmentPrefill?: string;
    targetPage?: PageId;
  };
  secondaryCta?: {
    label: string;
    action: 'booking' | 'page' | 'quiz';
    treatmentPrefill?: string;
    targetPage?: PageId;
  };
}

export const PRACTICE_SLIDES: PracticeSlide[] = [
  {
    id: 'surgeries',
    category: 'Advanced Surgery Suite',
    badge: 'Modern Technology',
    title: 'Modern, Relaxing Dental Surgeries in Girvan',
    subtitle:
      'State-of-the-art ergonomic dental chairs, digital intraoral sensors, and whisper-quiet instrumentation designed to keep routine check-ups and complex procedures calm and comfortable.',
    imageUrl:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Low-Dose Digital Radiographs',
      'Ultra-Quiet Electric Handpieces',
      'Ergonomic Supportive Patient Chairs',
    ],
    primaryCta: {
      label: 'Book Examination',
      action: 'booking',
      treatmentPrefill: 'Routine Dental Examination',
    },
    secondaryCta: {
      label: 'View All Treatments',
      action: 'page',
      targetPage: 'treatments',
    },
  },
  {
    id: 'dentist-team',
    category: 'Caring Dental Team',
    badge: 'NES Approved Practice',
    title: 'Compassionate Dental Care Under Dr. Tanu Sharma',
    subtitle:
      'Serving generations of South Ayrshire families since 2007. Our experienced dental surgeons and caring nurses take the time to listen, explain every step, and eliminate dental anxiety.',
    imageUrl:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Experienced GDC Registered Surgeons',
      'NES Accredited Training Practice',
      'Unhurried, Friendly Consultations',
    ],
    primaryCta: {
      label: 'Meet Our Dental Team',
      action: 'page',
      targetPage: 'team',
    },
    secondaryCta: {
      label: 'Book with Dr. Tanu Sharma',
      action: 'booking',
      treatmentPrefill: 'Routine Dental Examination',
    },
  },
  {
    id: 'childsmile',
    category: 'Pediatric Prevention',
    badge: 'NHS Scotland Childsmile',
    title: 'Childsmile: Nurturing Healthy Ayrshire Smiles',
    subtitle:
      'Free Scottish NHS preventive dental care for babies, toddlers, and school children. Regular fluoride varnish applications and gentle introductory visits build lifelong dental confidence.',
    imageUrl:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      '100% Free Under NHS Scotland',
      'Bi-Annual Protective Fluoride',
      'Complimentary Brushing Packs',
    ],
    primaryCta: {
      label: 'Book Childsmile Visit',
      action: 'booking',
      treatmentPrefill: 'Childsmile Children’s Check-up',
    },
    secondaryCta: {
      label: 'Family Care Details',
      action: 'page',
      targetPage: 'treatments',
    },
  },
  {
    id: 'sterilization-ldu',
    category: 'Infection Control',
    badge: 'SHTM 2010 Gold Standard',
    title: 'Dedicated Local Decontamination Unit (LDU)',
    subtitle:
      'Our practice features a dedicated Local Decontamination Unit complying with Scottish Health Technical Memorandum guidelines, equipped with vacuum autoclaves to guarantee 100% surgical sterility.',
    imageUrl:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Vacuum Steam Autoclave Sterilization',
      'Individual Barcode Tracking for Every Tray',
      'Certified Clinical Dental Nurses',
    ],
    primaryCta: {
      label: 'Learn About Our Standards',
      action: 'page',
      targetPage: 'about',
    },
    secondaryCta: {
      label: 'Schedule a Visit',
      action: 'booking',
    },
  },
  {
    id: 'cosmetic-cfast',
    category: 'Aesthetic Dentistry',
    badge: 'Smile Makeovers',
    title: 'C-Fast Adult Braces & Radiant Smile Design',
    subtitle:
      'Discreetly straighten your front teeth in only 4 to 6 months with C-Fast clear brackets, or brighten your natural enamel with Boutique home whitening and artistic composite bonding.',
    imageUrl:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Clear Brackets & Fast 4-Month Results',
      'Boutique Dentist-Prescribed Whitening',
      'Minimally Invasive Composite Bonding',
    ],
    primaryCta: {
      label: 'Take 30-Sec Smile Quiz',
      action: 'quiz',
    },
    secondaryCta: {
      label: 'Book Cosmetic Consult',
      action: 'booking',
      treatmentPrefill: 'Professional Boutique Teeth Whitening',
    },
  },
  {
    id: 'accessibility',
    category: 'Disabled & Step-Free Access',
    badge: 'Ground-Floor Accessible',
    title: 'Stair-Free Downstairs Surgery on Dalrymple Street',
    subtitle:
      'Level pavement entry from Dalrymple Street and a dedicated ground-floor surgery with wide corridors and accessible WC ensure complete comfort for wheelchair users and elderly visitors.',
    imageUrl:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1600&q=85',
    highlights: [
      'Zero-Step Street Entry',
      'Full Ground Floor Surgeries',
      'Disabled Parking Nearby',
    ],
    primaryCta: {
      label: 'Book Downstairs Surgery',
      action: 'booking',
      treatmentPrefill: 'Routine Dental Examination',
    },
    secondaryCta: {
      label: 'Directions & Parking',
      action: 'page',
      targetPage: 'contact',
    },
  },
];

interface PracticeImageSliderProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string) => void;
  onOpenSmileQuiz: () => void;
}

export const PracticeImageSlider: React.FC<PracticeImageSliderProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenSmileQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6000; // 6 seconds
  const UPDATE_INTERVAL = 50; // update progress every 50ms
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PRACTICE_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PRACTICE_SLIDES.length) % PRACTICE_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Auto-slide effect with progress tracking
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          nextSlide();
          return 0;
        }
        return oldProgress + (UPDATE_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, UPDATE_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const currentSlide = PRACTICE_SLIDES[currentIndex];

  const handleCtaClick = (cta: PracticeSlide['primaryCta']) => {
    if (cta.action === 'booking') {
      onOpenBooking(cta.treatmentPrefill);
    } else if (cta.action === 'quiz') {
      onOpenSmileQuiz();
    } else if (cta.action === 'page' && cta.targetPage) {
      onNavigate(cta.targetPage);
    }
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Practice facilities and dental care gallery slider"
    >
      {/* Top Animated Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/15 z-30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-sky-300 to-white transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Slide Container */}
      <div className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-end">
        {/* Background Image with smooth cross-fade effect */}
        {PRACTICE_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Deep rich dark gradients for pristine text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
          </div>
        ))}

        {/* Top Header Overlay: Slide Badge & Counter & Play/Pause */}
        <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#005EB8] text-white shadow-md border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
              <span>{currentSlide.badge}</span>
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold text-sky-200 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              {currentSlide.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Slide Index Counter */}
            <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold text-sky-100 tracking-wider">
              <span className="text-white font-extrabold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-white/40 mx-1">/</span>
              <span className="text-white/60">{String(PRACTICE_SLIDES.length).padStart(2, '0')}</span>
            </div>

            {/* Pause/Play Toggle Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-colors"
              title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-white" /> : <Pause className="w-3.5 h-3.5 fill-white" />}
            </button>
          </div>
        </div>

        {/* Previous & Next Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0B3B60] text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 opacity-80 hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0B3B60] text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 opacity-80 hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Active Slide Text & Actions */}
        <div className="relative z-20 w-full p-6 sm:p-10 lg:p-12 pb-24 sm:pb-28">
          <div className="max-w-3xl space-y-4">
            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight drop-shadow-md">
              {currentSlide.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow-xs max-w-2xl font-normal">
              {currentSlide.subtitle}
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {currentSlide.highlights.map((h, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-sky-100 backdrop-blur-md border border-white/15 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleCtaClick(currentSlide.primaryCta)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-[#0284C7] hover:from-sky-400 hover:to-sky-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:shadow-sky-500/25 transition-all active:scale-98"
              >
                {currentSlide.primaryCta.action === 'quiz' ? (
                  <Sparkles className="w-4 h-4" />
                ) : (
                  <Calendar className="w-4 h-4" />
                )}
                <span>{currentSlide.primaryCta.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {currentSlide.secondaryCta && (
                <button
                  onClick={() => handleCtaClick(currentSlide.secondaryCta!)}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all active:scale-98"
                >
                  <Eye className="w-4 h-4 text-sky-300" />
                  <span>{currentSlide.secondaryCta.label}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip & Indicator Selector */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-8 py-3 bg-gradient-to-t from-black/90 to-black/40 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 w-full justify-between sm:justify-start">
            {PRACTICE_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-left transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-sky-500/25 border border-sky-400/60 text-white shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 border border-transparent text-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? 'bg-sky-400 scale-125' : 'bg-slate-500'
                    }`}
                  />
                  <span className="text-[11px] sm:text-xs font-bold whitespace-nowrap">
                    {slide.category}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-400 whitespace-nowrap pl-4 border-l border-white/10">
            <span>Hover to pause</span>
          </div>
        </div>
      </div>
    </div>
  );
};
