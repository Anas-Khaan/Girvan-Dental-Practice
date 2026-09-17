import React, { useState } from 'react';
import { PageId } from '../types';
import { TREATMENTS, TREATMENT_CATEGORIES, PRACTICE_FAQS } from '../data/practiceData';
import {
  Calendar,
  Sparkles,
  Check,
  Clock,
  PoundSterling,
  Users,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';

interface TreatmentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string) => void;
  onOpenSmileQuiz: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenSmileQuiz,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const displayedTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.categoryId === activeCategory);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-200">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
          NHS & Private Care Under One Roof
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B3B60] tracking-tight">
          Dental Treatments & Services
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          From essential routine NHS check-ups and the Childsmile programme to advanced dental
          implants, C-Fast adult orthodontics, and cosmetic smile contouring.
        </p>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            activeCategory === 'all'
              ? 'bg-[#0B3B60] text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All Treatments ({TREATMENTS.length})
        </button>

        {TREATMENT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Treatments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedTreatments.map((treatment) => (
          <div
            key={treatment.id}
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between group"
          >
            {/* Treatment Photo Header */}
            {treatment.imageUrl && (
              <div className="h-48 overflow-hidden relative bg-slate-100">
                <img
                  src={treatment.imageUrl}
                  alt={treatment.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Badges overlay on image */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                  {treatment.isNhs && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#005EB8] text-white shadow-sm">
                      NHS Available
                    </span>
                  )}
                  {treatment.isPrivate && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500 text-white shadow-sm">
                      Private
                    </span>
                  )}
                </div>

                {treatment.duration && (
                  <span className="absolute bottom-3 right-3 text-[11px] text-white font-semibold flex items-center gap-1 bg-black/60 px-2.5 py-0.5 rounded-lg backdrop-blur-xs">
                    <Clock className="w-3 h-3 text-sky-300" />
                    {treatment.duration}
                  </span>
                )}
              </div>
            )}

            <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {/* Title & Summary */}
                <div>
                  <h2 className="font-display font-bold text-xl text-slate-900 leading-snug group-hover:text-[#0B3B60] transition-colors">
                    {treatment.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {treatment.fullDescription}
                  </p>
                </div>

                {/* Key Clinical Benefits */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Benefits
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {treatment.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitability Note */}
                {treatment.suitableFor && (
                  <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 border border-slate-100">
                    <strong className="text-slate-700 font-semibold">Recommended for: </strong>
                    {treatment.suitableFor}
                  </div>
                )}
              </div>

              {/* Price and Booking Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Fee Guide
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0B3B60]">
                    {treatment.startingPrice}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(treatment.name)}
                  className="px-4 py-2 bg-[#0B3B60] hover:bg-[#082842] text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-98"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cosmetic Banner */}
      <div className="bg-gradient-to-r from-[#0B3B60] via-[#104b7b] to-[#0284C7] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
            Smile Assessment
          </span>
          <h2 className="font-display font-bold text-2xl text-white">
            Wondering Which Cosmetic Option Suits Your Teeth?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
            Answer 3 quick questions about your smile goals and get an immediate clinical
            recommendation and estimated timeframe.
          </p>
        </div>

        <button
          onClick={onOpenSmileQuiz}
          className="flex-shrink-0 px-6 py-3 bg-white text-[#0B3B60] hover:bg-sky-50 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-98"
        >
          Start 30-Sec Smile Quiz
        </button>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Common Questions
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            Treatments & Appointments FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {PRACTICE_FAQS.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-hidden"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-[#0B3B60] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
