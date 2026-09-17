import React from 'react';
import { PageId } from '../types';
import { PRACTICE_INFO } from '../data/practiceData';
import {
  Award,
  ShieldCheck,
  Accessibility,
  Heart,
  Sparkles,
  CheckCircle2,
  Users,
  Calendar,
  Phone,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-200">
          <Award className="w-3.5 h-3.5 text-sky-700" />
          Providing Dentistry in Girvan Since 2007
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B3B60] tracking-tight">
          About Girvan Dental Practice
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          A modern, family-owned dental clinic situated at 78 Dalrymple Street. We unite compassionate
          routine NHS dental care with contemporary cosmetic smile design and advanced restorative
          dentistry.
        </p>
      </div>

      {/* 2. Practice Story & Principal's Message */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="https://www.girvandental.co.uk/modules/mod_news_pro_gk5/cache/team.2018.45-tanunsp-102.jpg"
              alt="Tanu Sharma - Practice Owner"
              referrerPolicy="no-referrer"
              className="w-full h-96 object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#0B3B60] text-white p-4 rounded-xl shadow-md text-xs">
            <span className="block font-bold text-sm">Tanu Sharma</span>
            <span className="text-sky-200">BDS Gujarat 2004 &bull; Practice Owner</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Our Journey & Community Commitment
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Caring for Generations of Ayrshire Smiles
          </h2>
          <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
            <p>
              Dr. Tanu Sharma has been delivering dental care to the community of Girvan and South
              Ayrshire since 2007. When she assumed ownership of the practice, her mission was clear:
              to create a welcoming, unhurried dental environment where every patient feels heard,
              respected, and at ease.
            </p>
            <p>
              Over nearly two decades, Girvan Dental Practice has expanded from a traditional village
              surgery into a modern multidisciplinary clinic. Today, we are proud to combine essential
              NHS care with cutting-edge private options including C-Fast orthodontics, dental
              implants, and digital radiographic diagnostics.
            </p>
            <p>
              Whether you are an anxious patient visiting after years away or a parent bringing a
              toddler for their first Childsmile fluoride varnish, our team greets you like family.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('team')}
              className="px-4 py-2.5 bg-sky-50 text-[#0B3B60] hover:bg-sky-100 rounded-xl text-xs font-bold transition-colors"
            >
              Meet Our Dental Team
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 bg-[#0B3B60] text-white hover:bg-[#082842] rounded-xl text-xs font-bold transition-colors shadow-xs"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* 3. The NES Training Practice Difference */}
      <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 sm:p-12 border border-sky-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B3B60] text-white flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Approved NES Education for Scotland Training Practice
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Girvan Dental Practice has been officially designated as an approved training practice
              by NHS Education for Scotland (NES). Dr. Tanu Sharma acts as a certified Vocational
              Trainer, actively mentoring newly qualified dental surgeons during their foundational
              year in NHS practice.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Strict Clinical Auditing:</strong> Regular external inspections by NHS
                  Education for Scotland verify our surgical procedures.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Latest Evidenced Dentistry:</strong> Mentoring young clinicians keeps our
                  practice at the absolute forefront of modern clinical techniques.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-sky-200 text-center shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
              Accreditation
            </span>
            <div className="font-display font-extrabold text-xl text-[#0B3B60] mt-1">
              NHS Education for Scotland
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Recognized vocational dental practice supporting graduate education and highest Scottish
              healthcare standards.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Facilities & Decontamination Unit */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Gold-Standard Safety & Comfort
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            State-of-the-Art Practice Facilities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Designed to guarantee patient safety, clinical sterility, and total accessibility for
            every member of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Facility 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between group">
            <div className="h-44 overflow-hidden relative bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                alt="Local Decontamination Unit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-300" />
                <span>SHTM 2010 Compliance</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-display font-bold text-lg text-slate-900">
                State-of-the-Art LDU
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our dedicated Local Decontamination Unit (LDU) operates with modern vacuum steam
                autoclaves and thermal washer-disinfectors complying strictly with SHTM 2010 regulations.
                Every dental instrument is individually processed and tracked.
              </p>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between group">
            <div className="h-44 overflow-hidden relative bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
                alt="Accessible Surgery"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1.5">
                <Accessibility className="w-4 h-4 text-sky-300" />
                <span>Ground-Floor Access</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Stair-Free Downstairs Surgery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide a fully accessible ground-floor surgery with zero steps, wide doorway
                thresholds, and an adjacent compliant disabled toilet. When booking, simply let us know
                if you require downstairs access.
              </p>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between group">
            <div className="h-44 overflow-hidden relative bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                alt="Childsmile Centre"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-sky-300" />
                <span>Childsmile Partner</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Childsmile Programme Leader
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As an accredited Childsmile centre, our dedicated dental nurses and dentists provide
                gentle, positive introductory visits, twice-yearly fluoride varnish, and free toothbrushing
                packs to give Girvan children the healthiest start in life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Our Practice Ethos */}
      <div className="bg-[#0B3B60] text-white rounded-3xl p-8 sm:p-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
            Our Care Philosophy
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Dentistry Centered Around the Patient, Not the Clock
          </h2>
          <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
            We understand that many patients feel anxious about visiting the dentist. That is why our
            appointments are designed to be calm and unhurried. We explain every treatment step in
            plain, reassuring language before touching a tooth, and we always put you in total control.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-white text-[#0B3B60] hover:bg-sky-50 font-bold rounded-xl text-sm transition-all shadow-md active:scale-98"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-sm border border-white/20 transition-colors"
            >
              Contact Reception (01465 712213)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
