import React, { useState } from 'react';
import { PageId } from '../types';
import {
  PRACTICE_INFO,
  TREATMENTS,
  TREATMENT_CATEGORIES,
  TEAM_MEMBERS,
  DENPLAN_ESSENTIALS,
  TESTIMONIALS,
} from '../data/practiceData';
import {
  Calendar,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  Accessibility,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
  Star,
  ChevronRight,
  HeartHandshake,
  Check,
  Layers,
  Smile,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string, prefillDentist?: string) => void;
  onOpenSmileQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenSmileQuiz,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [heroTreatmentSelect, setHeroTreatmentSelect] = useState<string>('Routine Dental Examination');
  const [heroPatientType, setHeroPatientType] = useState<string>('existing-nhs');

  const filteredTreatments =
    selectedCategory === 'all'
      ? TREATMENTS.slice(0, 6)
      : TREATMENTS.filter((t) => t.categoryId === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FD] via-white to-slate-50 pt-8 sm:pt-14 pb-16 sm:pb-20 border-b border-slate-200/80">
        {/* Subtle background dental pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B3B60_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          {/* Top Trust Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#005EB8] text-white shadow-xs">
              <span>NHS</span> Scotland Provider
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-900 border border-sky-200">
              <Award className="w-3.5 h-3.5 text-sky-700" />
              NES Approved Training Practice
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-900 border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
              Serving Girvan Since 2007
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60] tracking-tight leading-[1.15]">
                Compassionate, Modern Dentistry for the Whole Family in Girvan
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Welcome to Girvan Dental Practice at 78 Dalrymple Street. Led by Dr. Tanu Sharma,
                our dedicated team provides comprehensive NHS family dentistry alongside advanced
                cosmetic smile design, C-Fast braces, and dental implants.
              </p>

              {/* Quick Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Stair-free surgery access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Childsmile Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Same-day emergencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Denplan Essentials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Modern Decontamination</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Registered with GDC</span>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white text-base font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <Calendar className="w-5 h-5 text-sky-200" />
                  <span>Book an Appointment</span>
                </button>

                <button
                  onClick={onOpenSmileQuiz}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-sky-900 text-sm font-bold rounded-xl border border-sky-300 shadow-xs transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>30-Sec Smile Assessment</span>
                </button>

                <a
                  href="tel:01465712213"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-slate-700 hover:text-[#0B3B60] text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#0B3B60]" />
                  <span>01465 712213</span>
                </a>
              </div>

              {/* Trust Badge with Doctor Photo */}
              <div className="pt-2 flex items-center gap-3.5 text-xs text-slate-600">
                <div className="flex -space-x-2">
                  <img
                    src="https://www.girvandental.co.uk/modules/mod_news_pro_gk5/cache/team.2018.45-tanunsp-102.jpg"
                    alt="Tanu Sharma"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="https://www.girvandental.co.uk/modules/mod_news_pro_gk5/cache/team.2018.43-sadansp-102.jpg"
                    alt="Sada Mangalampalli"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="https://www.girvandental.co.uk/modules/mod_news_pro_gk5/cache/team.Ewan-200nsp-102.jpg"
                    alt="Ewan Ramsay"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-bold text-slate-900 ml-1">4.9 / 5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Over 5,000+ local Ayrshire smiles cared for since 2007
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero: Quick Appointment Launcher Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200/90 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0B3B60] via-[#0284C7] to-sky-400" />

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                      Quick Scheduling
                    </span>
                    <h2 className="font-display font-bold text-xl text-slate-900">
                      Find an Appointment
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0B3B60] flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      I am visiting as:
                    </label>
                    <select
                      value={heroPatientType}
                      onChange={(e) => setHeroPatientType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-[#0B3B60]"
                    >
                      <option value="existing-nhs">Existing NHS Patient</option>
                      <option value="new-patient">New Patient Registration Inquiry</option>
                      <option value="private">Private / Cosmetic Consultation</option>
                      <option value="denplan">Denplan Essentials Member</option>
                      <option value="childsmile">Childsmile Visit (Children)</option>
                      <option value="emergency">Emergency / Acute Toothache</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Required Service:
                    </label>
                    <select
                      value={heroTreatmentSelect}
                      onChange={(e) => setHeroTreatmentSelect(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-medium focus:ring-2 focus:ring-[#0B3B60]"
                    >
                      <option value="Routine Dental Examination">Routine Dental Examination</option>
                      <option value="Dental Hygiene Scaling & Air Polish">Dental Hygiene Scaling</option>
                      <option value="Tooth Pain or Broken Tooth Emergency">Emergency Toothache Relief</option>
                      <option value="Childsmile Children’s Check-up">Childsmile Children's Care</option>
                      <option value="Professional Boutique Teeth Whitening">Teeth Whitening Consultation</option>
                      <option value="Composite Bonding & Smile Contouring">Composite Edge Bonding</option>
                      <option value="C-Fast Adult Fast Orthodontics">C-Fast Adult Braces Consultation</option>
                      <option value="Dental Implants & 3D CBCT Guided Surgery">Dental Implants Consultation</option>
                      <option value="Dentures Check, Repair or New Set">Dentures Check / New Set</option>
                    </select>
                  </div>

                  {/* Immediate Emergency Alert Box */}
                  <div className="p-3 bg-amber-50/80 border border-amber-200/90 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block">Need same-day emergency care?</span>
                      Call reception at 9:00 AM on{' '}
                      <a href="tel:01465712213" className="font-bold underline text-amber-950">
                        01465 712213
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(heroTreatmentSelect)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Proceed to Slot Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-slate-400">
                    No payment required to submit appointment request
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICE TRUST PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
            <div className="h-36 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                alt="NHS and Private Dentistry"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>NHS & Private Care</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                NHS & Private Under One Roof
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We offer essential routine Scottish NHS dentistry alongside high-end cosmetic smile
                rejuvenation, implants, and adult braces.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
            <div className="h-36 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
                alt="NES Approved Training Practice"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold">
                <Award className="w-4 h-4 text-sky-400" />
                <span>NES Accredited</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                NES Approved Training Practice
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Officially accredited by NHS Education for Scotland to train newly qualified dental
                surgeons, upholding rigorous modern clinical standards.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
            <div className="h-36 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
                alt="Stair-Free Downstairs Surgery"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold">
                <Accessibility className="w-4 h-4 text-sky-400" />
                <span>Step-Free Access</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                Stair-Free Downstairs Surgery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full ground-floor wheelchair accessibility and accessible toilet facilities ensure
                comfortable visits for elderly and mobility-impaired patients.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
            <div className="h-36 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                alt="State-of-the-Art LDU"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>SHTM 2010 LDU</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                State-of-the-Art LDU
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our dedicated Local Decontamination Unit strictly complies with Scottish Health
                Technical Memorandum guidelines for absolute patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS SHOWCASE WITH DENTAL IMAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Our Clinical Services
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Comprehensive Dental Care for Girvan
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              From preventive Childsmile visits to bespoke cosmetic makeovers and dental implants,
              explore treatments available at 78 Dalrymple Street.
            </p>
          </div>

          <button
            onClick={() => onNavigate('treatments')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3B60] hover:text-sky-700 transition-colors"
          >
            <span>View Full Treatment Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#0B3B60] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Services
          </button>
          {TREATMENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0B3B60] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Treatment Grid With Dental Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-sky-300 hover:shadow-lg transition-all group"
            >
              {/* Treatment Dental Photo Header */}
              <div className="h-48 overflow-hidden relative bg-slate-100">
                <img
                  src={treatment.imageUrl || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'}
                  alt={treatment.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* NHS / Private Badges Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
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

                <div className="absolute bottom-2.5 right-3 text-white text-[11px] font-semibold bg-black/60 px-2.5 py-0.5 rounded-lg backdrop-blur-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-sky-300" />
                  <span>{treatment.duration}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#0B3B60] transition-colors leading-snug">
                    {treatment.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {treatment.summary}
                  </p>

                  {/* Benefits snippet */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                    {treatment.keyBenefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Fee Guide
                    </span>
                    <span className="text-xs font-bold text-[#0B3B60]">
                      {treatment.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(treatment.name)}
                    className="px-3.5 py-2 bg-sky-50 hover:bg-[#0B3B60] text-[#0B3B60] hover:text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SMILE MAKEOVER & QUIZ BANNER WITH DENTAL VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#0B3B60] via-[#0e4977] to-[#0284C7] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-sky-100">
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                Cosmetic Dentistry & Orthodontics
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Ready to Transform Your Smile in 2026?
              </h2>
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
                Whether you want boutique home teeth whitening, discreet C-Fast adult tooth
                straightening in 4–6 months, or seamless composite bonding, our cosmetic dental team
                is here to help you smile with confidence.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenSmileQuiz}
                  className="px-6 py-3 bg-white text-[#0B3B60] hover:bg-sky-50 rounded-xl font-bold text-sm shadow-md transition-all active:scale-98"
                >
                  Take the 30-Second Smile Quiz
                </button>
                <button
                  onClick={() => onOpenBooking('Cosmetic Consultation (Whitening & Bonding)')}
                  className="px-5 py-3 bg-white/15 hover:bg-white/20 text-white rounded-xl font-bold text-sm border border-white/30 transition-colors"
                >
                  Book a Cosmetic Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80"
                  alt="Cosmetic Dentistry Whitening"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider block">
                    Cosmetic Smile Design
                  </span>
                  <p className="text-xs font-semibold text-white/90">
                    Natural, radiant results with custom tooth whitening and composite bonding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEET OUR DENTISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Clinical Excellence
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Meet the Girvan Dental Team
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Experienced, gentle dental professionals dedicated to caring for our South Ayrshire
              patients with the highest standards of clinical precision.
            </p>
          </div>

          <button
            onClick={() => onNavigate('team')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3B60] hover:text-sky-700 transition-colors"
          >
            <span>View All Staff & Qualifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((dentist) => (
            <div
              key={dentist.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img
                    src={dentist.avatarUrl}
                    alt={dentist.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B3B60]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {dentist.gdcNumber}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-slate-900">{dentist.name}</h3>
                  <div className="text-xs font-semibold text-sky-700 mt-0.5">{dentist.role}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{dentist.qualifications}</div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {dentist.bio}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {dentist.specialties.slice(0, 2).map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBooking(undefined, dentist.name)}
                  className="w-full py-2 px-3 bg-sky-50 hover:bg-[#0B3B60] text-[#0B3B60] hover:text-white rounded-xl text-xs font-bold transition-colors text-center"
                >
                  Book with {dentist.name.split(' ')[1] || dentist.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DENPLAN ESSENTIALS BANNER WITH CLINICAL PHOTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                Budgeting Routine Dental Care
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Denplan Essentials at Girvan Dental Practice
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Spread the cost of preventive care for only{' '}
                <strong className="text-white text-base">£18.85 per month</strong>. Includes 2
                comprehensive dental exams, 2 hygiene scaling appointments, necessary x-rays, and a
                10%–15% discount on private treatments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>2 Examinations + 2 Hygiene visits included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>10% off fillings, root canals, extractions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>15% off lab treatments (crowns, dentures)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Optional 24h Worldwide Emergency cover (+60p)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 text-center space-y-3">
              <div className="text-xs uppercase font-bold text-sky-400 tracking-wider">
                Monthly Dental Membership
              </div>
              <div className="text-4xl font-extrabold text-white">
                £18.85<span className="text-sm text-slate-400 font-normal"> / month</span>
              </div>
              <div className="text-xs text-emerald-400 font-semibold">
                Saves over £30/year vs pay-as-you-go
              </div>
              <button
                onClick={() => onNavigate('fees')}
                className="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-sm"
              >
                Explore Plan & Savings Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PATIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Trusted by Patients Across South Ayrshire
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Real feedback from local Girvan families, Turnberry, Maybole, and Ballantrae residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-slate-900 font-bold">{t.author}</strong>
                  <span className="text-slate-400">{t.location}</span>
                </div>
                <span className="text-[10px] bg-sky-50 text-sky-800 px-2 py-0.5 rounded font-semibold">
                  {t.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. EMERGENCY & CONTACT PREVIEW BANNER WITH REAL CLINICAL IMAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Emergency Card */}
          <div className="lg:col-span-6 bg-rose-50 border border-rose-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Dental Emergencies & Toothache</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-rose-950">
                In Severe Pain or Broken Tooth?
              </h3>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                Registered patients can access dedicated same-day emergency triage slots. Please
                phone the surgery at 9:00 am on weekday mornings. Outside practice hours, dental
                emergencies are managed via NHS 24 on 111.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-3 relative z-10">
              <a
                href="tel:01465712213"
                className="px-4 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                Call Surgery: 01465 712213
              </a>
              <button
                onClick={() => onNavigate('emergency')}
                className="px-4 py-2.5 bg-white text-rose-800 hover:bg-rose-100 font-bold text-xs rounded-xl border border-rose-300 transition-colors"
              >
                View Emergency Triage Guide
              </button>
            </div>
          </div>

          {/* Location & Accessibility Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Find Us in Girvan</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                78 Dalrymple Street, Girvan KA26 9BT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conveniently located in the heart of Girvan with nearby on-street parking and
                convenient bus connections. Our ground-floor surgery offers full stair-free
                wheelchair accessibility.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-3 relative z-10">
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2.5 bg-[#0B3B60] hover:bg-[#082842] text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
              >
                Directions & Practice Hours
              </button>
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2.5 bg-sky-50 text-[#0B3B60] hover:bg-sky-100 font-bold text-xs rounded-xl border border-sky-200 transition-colors"
              >
                Schedule Visit Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
