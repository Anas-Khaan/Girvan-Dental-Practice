import React, { useState } from 'react';
import { PageId } from '../types';
import {
  PRACTICE_INFO,
  TEAM_MEMBERS,
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
  Check,
  Mail,
  Send,
  Users,
  CheckCircle2,
  X,
  Heart,
  Smile,
  ChevronRight,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string, prefillDentist?: string) => void;
  onOpenSmileQuiz: () => void;
}

interface PopularTreatment {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

const POPULAR_TREATMENTS: PopularTreatment[] = [
  {
    id: 'implants',
    name: 'Dental Implants',
    description: 'Permanent titanium tooth replacements that look, feel, and function just like your natural teeth.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
    category: 'Restorative',
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    description: 'Boutique customized home whitening kits designed to safely lift stains and brighten your smile.',
    imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
    category: 'Cosmetic',
  },
  {
    id: 'veneers',
    name: 'Veneers',
    description: 'Ultra-thin, custom porcelain or composite shells that cover chips, discoloration, and small gaps.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    category: 'Cosmetic',
  },
  {
    id: 'aligners',
    name: 'Clear Aligners',
    description: 'Discreet, removable clear aligners and C-Fast adult orthodontics to gently straighten your front smile.',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    category: 'Orthodontics',
  },
  {
    id: 'crowns',
    name: 'Dental Crowns',
    description: 'Durable, natural-looking porcelain crowns and bridges to protect and restore weakened teeth.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    category: 'Restorative',
  },
  {
    id: 'dentures',
    name: 'Dentures',
    description: 'Custom-fitted full and partial acrylic or lightweight chrome dentures for natural chewing and speech.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    category: 'Prosthetics',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    description: 'Gentle endodontic care to relieve acute toothache, clear infection, and save your natural tooth.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    category: 'General',
  },
  {
    id: 'hygiene',
    name: 'Dental Hygiene',
    description: 'Thorough scaling, plaque removal, and periodontal therapy to protect your gums and freshen breath.',
    imageUrl: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80',
    category: 'Preventive',
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenSmileQuiz,
}) => {
  // Contact/Enquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'General Routine Appointment',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FD] via-white to-slate-50 pt-8 sm:pt-14 pb-16 sm:pb-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          {/* Practice Trust Pills */}
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
              Serving Girvan & South Ayrshire
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60] tracking-tight leading-[1.15]">
                Dentist in Girvan, Ayrshire
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Providing caring NHS and private family dental care at 78 Dalrymple Street. Led by
                Dr. Tanu Sharma, our experienced clinical team delivers gentle preventive dentistry,
                restorative treatments, modern cosmetic smile design, and dental implants in a welcoming,
                accessible practice.
              </p>

              {/* Verified Trust Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Stair-free surgery access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Childsmile accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Prompt emergency triage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Denplan Essentials plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>SHTM 2010 Decontamination</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>GDC registered clinicians</span>
                </div>
              </div>

              {/* Two Prominent Conversion Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white text-base font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 whitespace-nowrap"
                >
                  <Calendar className="w-5 h-5 text-sky-200 flex-shrink-0" />
                  <span>Book an Appointment</span>
                </button>

                <a
                  href="tel:01465712213"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0B3B60] font-bold text-base rounded-xl border-2 border-slate-300 hover:border-[#0B3B60] shadow-xs transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#0B3B60] flex-shrink-0" />
                  <span>Call 01465 712213</span>
                </a>
              </div>

              {/* Trust Badge with Clinicians */}
              <div className="pt-2 flex items-center gap-3.5 text-xs text-slate-600">
                <div className="flex -space-x-2">
                  <img
                    src="https://www.girvandental.co.uk/modules/mod_news_pro_gk5/cache/team.2018.45-tanunsp-102.jpg"
                    alt="Dr. Tanu Sharma"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="https://www.girvandental.co.uk/modules/mod_news_pro_gk5/cache/team.2018.43-sadansp-102.jpg"
                    alt="Dr. Sada Mangalampalli"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="https://www.girvandental.co.uk/modules/mod_news_pro_gk5/cache/team.Ewan-200nsp-102.jpg"
                    alt="Dr. Ewan Ramsay"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-slate-900 ml-1">5.0 Star Patient Feedback</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Trusted by families across Girvan, Turnberry, Maybole & Ballantrae
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-3 shadow-xl border border-slate-200/90 relative overflow-hidden">
                <div className="h-80 sm:h-96 rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                    alt="Girvan Dental Practice Treatment Surgery"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B3B60]/90 text-white backdrop-blur-xs">
                      78 Dalrymple Street
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600/90 text-white backdrop-blur-xs flex items-center gap-1">
                      <Accessibility className="w-3.5 h-3.5" />
                      Step-Free Access
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-base font-bold">Modern Surgery Facilities</h2>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Ground-floor surgery equipped for routine and complex dental treatments.
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                      <span className="text-sky-300">Open Mon–Fri 9:00 am – 5:00 pm</span>
                      <a href="tel:01465712213" className="hover:underline flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        01465 712213
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Directly below Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Trust Item 1 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-3 first:pt-0 first:pl-0">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0B3B60] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-sky-700" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">NHS & Private Dentistry</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Comprehensive routine family care alongside private cosmetic & restorative options.
                </p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Family Dental Care</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Childsmile accredited practice dedicated to caring for children, parents, and seniors.
                </p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Experienced Dental Team</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  GDC-registered dentists and an NES-approved postgraduate training practice.
                </p>
              </div>
            </div>

            {/* Trust Item 4 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Emergency Dental Care</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Prompt phone triage from 9:00 am on weekdays; out-of-hours cover via NHS 24 on 111.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR TREATMENTS (Near top of homepage) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Clinical Services
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Popular Dental Treatments
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              From everyday oral maintenance to advanced smile enhancements, explore the treatments
              available at our Girvan surgery.
            </p>
          </div>

          <button
            onClick={() => onNavigate('treatments')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3B60] hover:text-sky-700 transition-colors"
          >
            <span>View All Clinical Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Treatment Image Header */}
                <div className="h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={treatment.imageUrl}
                    alt={treatment.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    {treatment.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#0B3B60] transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    if (treatment.id === 'implants') {
                      onOpenBooking('Dental Implants');
                    } else if (treatment.id === 'whitening') {
                      onOpenBooking('Teeth Whitening');
                    } else {
                      onNavigate('treatments');
                    }
                  }}
                  className="w-full py-2.5 px-3 bg-sky-50 hover:bg-[#0B3B60] text-[#0B3B60] hover:text-white rounded-xl text-xs font-bold transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEW PATIENTS SECTION (After Treatments) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#0B3B60] to-[#044c80] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-sky-200">
                <Users className="w-3.5 h-3.5 text-sky-300" />
                Patient Registrations & Inquiries
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Looking for a Dentist in Girvan?
              </h2>

              <p className="text-sm sm:text-base text-sky-100 leading-relaxed max-w-2xl">
                We welcome patient enquiries and registrations for private dental care, consultations,
                and family appointments. Whether you are new to the area or haven't visited a dentist in
                some time, our welcoming reception team is here to guide you through registering and scheduling
                your initial consultation.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3.5 bg-white text-[#0B3B60] hover:bg-sky-50 rounded-xl font-bold text-sm shadow-md transition-all active:scale-98 inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-sky-700" />
                  <span>Request an Appointment</span>
                </button>

                <a
                  href="tel:01465712213"
                  className="px-5 py-3.5 bg-white/15 hover:bg-white/20 text-white rounded-xl font-bold text-sm border border-white/30 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-300" />
                  <span>Call the Practice: 01465 712213</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/15 backdrop-blur-xs space-y-3">
              <div className="text-xs uppercase font-bold text-sky-300 tracking-wider">
                Practice Registration Note
              </div>
              <p className="text-xs text-slate-100 leading-relaxed">
                Please contact our reception desk to confirm current registration options, fees, or Denplan
                membership plans. We are located at 78 Dalrymple Street with stair-free surgery access.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-sky-200">
                <Clock className="w-4 h-4 text-sky-300 flex-shrink-0" />
                <span>Mon – Fri: 9:00 am – 5:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE GIRVAN DENTAL PRACTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Patient-First Dentistry
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            Why Choose Girvan Dental Practice?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Committed to providing high-quality, gentle dental care to families in South Ayrshire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0B3B60] flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-sky-700" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
              Friendly & Experienced Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Led by Dr. Tanu Sharma, our skilled, compassionate dental surgeons and qualified dental
              nurses prioritize gentle treatment and patient comfort at every stage.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
              Family Dental Care
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We welcome patients of all generations, offering the Scottish NHS Childsmile program to help
              young children establish positive oral habits and healthy teeth from an early age.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
              NHS & Private Treatment Options
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide routine NHS dental treatments alongside private cosmetic treatments, dental
              implants, and affordable Denplan Essentials payment arrangements.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
              Modern Treatment Options
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipped with a dedicated SHTM 2010 Local Decontamination Unit (LDU) and modern dental
              materials for safe, dependable restorative and cosmetic outcomes.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
              Convenient Local Care in Girvan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Located conveniently in the town center at 78 Dalrymple Street, featuring stair-free
              ground-floor surgery and disabled toilet access for mobility-impaired patients.
            </p>
          </div>

          {/* Pillar 6 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
              NES Approved Training Practice
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Accredited by NHS Education for Scotland to train newly qualified dental surgeons,
              reflecting our commitment to rigorous clinical guidelines and continuous education.
            </p>
          </div>
        </div>
      </section>

      {/* 6. DENTAL IMPLANTS FEATURE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                Advanced Restorative Dentistry
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Permanent Dental Implants in Girvan
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Restore the natural appearance, chewing function, and long-term confidence of your smile.
                Placed by experienced implant clinician Dr. Sada Mangalampalli, dental implants provide a secure,
                permanent foundation for replacement crowns, bridges, or fixed dentures without modifying adjacent teeth.
              </p>

              {/* Main Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Permanent replacement for missing teeth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Preserves jawbone health & facial profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Eat, speak, and laugh with complete confidence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Tailored, written treatment plans</span>
                </div>
              </div>

              {/* Consultation note */}
              <p className="text-xs text-slate-400 pt-1">
                Implant consultations available – comprehensive clinical examination & tailored written treatment plan.
              </p>

              {/* Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBooking('Dental Implants')}
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98"
                >
                  Book a Consultation
                </button>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 transition-colors"
                >
                  Explore Dental Implants
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                  alt="Dental Implants Girvan Dental Practice"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider block">
                    Clinical Implantology
                  </span>
                  <p className="text-xs font-semibold text-slate-200">
                    Dr. Sada Mangalampalli &bull; Certified in 3D Guided Implant Surgery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EMERGENCY DENTIST SECTION (After Implant Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>Dental Pain & Urgent Triage</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-rose-950">
                Need an Emergency Dentist in Girvan?
              </h2>

              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed max-w-2xl">
                If you are experiencing severe dental discomfort or an acute problem, our reception
                team is here to help triage your symptoms and arrange an appointment as swiftly as possible.
              </p>

              {/* Common Emergency Problems List */}
              <div className="pt-2">
                <span className="text-xs font-bold text-rose-950 uppercase tracking-wider block mb-2">
                  Common Dental Emergencies We Treat:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-rose-900">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0" />
                    <span>Severe or throbbing toothache</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0" />
                    <span>Dental swelling or suspected abscess</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0" />
                    <span>Broken, chipped, or fractured tooth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0" />
                    <span>Lost filling or dislodged crown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0" />
                    <span>Bleeding gums or trauma from an accident</span>
                  </div>
                </div>
              </div>

              {/* Triage Guidance Note */}
              <p className="text-[11px] text-rose-800 italic pt-1">
                Please call our surgery promptly at 9:00 am on weekday mornings on 01465 712213 so we can triage your condition. Outside of normal practice hours, dental emergencies are managed via NHS 24 on 111.
              </p>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-rose-200 shadow-sm text-center space-y-3">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">
                Immediate Urgent Assistance
              </span>
              <a
                href="tel:01465712213"
                className="w-full py-3.5 px-4 bg-rose-700 hover:bg-rose-800 text-white font-bold text-base rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Call Now: 01465 712213</span>
              </a>
              <button
                onClick={() => onNavigate('emergency')}
                className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-xs rounded-xl border border-rose-200 transition-colors"
              >
                View Emergency Triage Guide
              </button>
              <div className="text-[11px] text-slate-500 pt-1">
                Surgery phone lines open at 9:00 AM weekdays
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEET THE DENTAL TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Clinical Team
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Meet the Dental Team
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Experienced, gentle dental surgeons dedicated to looking after your oral health at 78 Dalrymple Street.
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
                  <h3 className="font-display font-bold text-base text-slate-900">{dentist.name}</h3>
                  <div className="text-xs font-semibold text-sky-700 mt-0.5">{dentist.role}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{dentist.qualifications}</div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {dentist.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBooking(undefined, dentist.name)}
                  className="w-full py-2.5 px-3 bg-sky-50 hover:bg-[#0B3B60] text-[#0B3B60] hover:text-white rounded-xl text-xs font-bold transition-colors text-center"
                >
                  Book with {dentist.name.split(' ')[1] || dentist.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. PATIENT REVIEWS (Google-style review section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm text-slate-800">Google Patient Reviews</span>
                <span className="text-xs text-slate-400">&bull;</span>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 ml-1">5.0 Star Rating</span>
                </div>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                What Our Patients Say
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Real feedback from local Girvan families, Turnberry, Maybole, and Ballantrae patients.
              </p>
            </div>

            <button
              onClick={() => setShowAllReviewsModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 transition-colors shadow-xs flex-shrink-0"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <div
                key={t.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400">{t.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <strong className="block text-slate-900 font-bold">{t.author}</strong>
                    <span className="text-slate-400 text-[11px]">{t.location}</span>
                  </div>
                  <span className="text-[10px] bg-sky-50 text-sky-800 px-2 py-0.5 rounded font-semibold max-w-[120px] truncate">
                    {t.treatment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT / FIND US SECTION (Near bottom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Practice Info & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Location & Hours
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                Find Us in Girvan
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Centrally located on Dalrymple Street with nearby street parking and bus connections.
              </p>
            </div>

            {/* Practice Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase mb-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Surgery Address</span>
                </div>
                <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                  78 Dalrymple Street<br />
                  Girvan, Ayrshire<br />
                  KA26 9BT, Scotland
                </p>
                <div className="mt-2 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <Accessibility className="w-3.5 h-3.5" />
                  <span>Stair-free ground floor access</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase mb-1.5">
                  <Phone className="w-4 h-4" />
                  <span>Contact Details</span>
                </div>
                <p className="text-xs text-slate-600 space-y-1">
                  <span className="block font-bold text-slate-900">
                    Phone: <a href="tel:01465712213" className="text-[#0B3B60] hover:underline">01465 712213</a>
                  </span>
                  <span className="block truncate">
                    Email: <a href="mailto:reception@girvandental.co.uk" className="text-[#0B3B60] hover:underline">reception@girvandental.co.uk</a>
                  </span>
                </p>
              </div>
            </div>

            {/* Opening Hours Box */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Practice Opening Hours</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                <div>
                  <span className="font-semibold text-slate-800">Monday – Friday:</span>
                  <p>9:00 am – 5:00 pm</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-800">Saturday & Sunday:</span>
                  <p className="text-slate-500">Closed (NHS 24: dial 111)</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs h-64 bg-slate-100">
              <iframe
                title="Girvan Dental Practice Map Location"
                src="https://maps.google.com/maps?q=78%20Dalrymple%20Street%20Girvan%20KA26%209BT&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Short Appointment / Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Online Inquiry
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-0.5">
                  Request an Appointment or Callback
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our reception team will get in touch promptly during surgery hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-base text-emerald-950">Thank You! Your Request Has Been Received</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    A member of our reception desk at 78 Dalrymple Street will contact you by phone or email to confirm a convenient appointment time.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        treatment: 'General Routine Appointment',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fiona Macleod"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#0B3B60]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#0B3B60]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. fiona@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#0B3B60]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Reason for Visit / Treatment Required
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-medium focus:ring-2 focus:ring-[#0B3B60]"
                    >
                      <option value="General Routine Appointment">Routine Examination / Check-up</option>
                      <option value="Dental Implants Consultation">Dental Implants Consultation</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Clear Aligners & C-Fast">Clear Aligners / C-Fast Adult Orthodontics</option>
                      <option value="Dental Hygiene Scaling">Dental Hygiene & Gum Therapy</option>
                      <option value="Crowns or Dentures">Crowns, Bridges or Dentures</option>
                      <option value="Toothache or Emergency">Toothache / Urgent Dental Issue</option>
                      <option value="New Patient Registration Enquiry">New Patient Registration Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Additional Message or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Let us know if you have any dental anxiety, mobility requirements, or preferred days/times..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#0B3B60] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Appointment</span>
                  </button>

                  <div className="text-center text-[11px] text-slate-400 pt-1">
                    Your details are protected under GDPR & medical confidentiality standards.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION (Before Footer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-4">
        <div className="bg-gradient-to-r from-[#0B3B60] via-[#092e4b] to-[#044c80] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-sky-200">
              <Calendar className="w-3.5 h-3.5 text-sky-300" />
              Patient Bookings & Consultations
            </span>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Ready to Book Your Dental Appointment?
            </h2>

            <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
              From routine family check-ups and hygiene cleaning to dental implants and acute emergency pain relief, our team at 78 Dalrymple Street is here to care for your smile.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#0B3B60] hover:bg-sky-50 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-98 inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-sky-700" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="tel:01465712213"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/15 hover:bg-white/20 text-white rounded-xl font-bold text-sm border border-white/30 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call 01465 712213</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Modal for "Read More Reviews" */}
      {showAllReviewsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowAllReviewsModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#0B3B60] mb-1">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
              <h3 className="font-display font-bold text-xl text-slate-900">Patient Testimonials</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Verified feedback from patients visiting Girvan Dental Practice at 78 Dalrymple Street.
            </p>

            <div className="space-y-4">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{t.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                  <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{t.author} ({t.location})</span>
                    <span className="text-[11px] text-sky-800 font-semibold">{t.treatment}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setShowAllReviewsModal(false)}
                className="px-5 py-2.5 bg-[#0B3B60] text-white text-xs font-bold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
