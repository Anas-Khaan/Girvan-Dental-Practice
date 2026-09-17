import React, { useState } from 'react';
import { PageId } from '../types';
import { TEAM_MEMBERS, SUPPORT_TEAM } from '../data/practiceData';
import {
  Calendar,
  Award,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string, prefillDentist?: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeSupportTab, setActiveSupportTab] = useState<'all' | 'hygiene' | 'nursing' | 'admin'>('all');

  const filteredSupportTeam = SUPPORT_TEAM.filter((member) => {
    if (activeSupportTab === 'all') return true;
    if (activeSupportTab === 'hygiene') return member.category === 'hygiene';
    if (activeSupportTab === 'nursing') return member.category === 'nursing';
    if (activeSupportTab === 'admin') return member.category === 'management' || member.category === 'reception';
    return true;
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-200">
          <Award className="w-3.5 h-3.5 text-sky-700" />
          Clinical Excellence & Compassion
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B3B60] tracking-tight">
          Meet Our Dental Team
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Our friendly, highly qualified team at Girvan Dental Practice brings together decades of
          experience in general NHS dentistry, implantology, endodontics, and pediatric care.
        </p>
      </div>

      {/* Dentist Profiles Grid */}
      <div className="space-y-10">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Our Dental Surgeons
          </h2>
          <p className="text-sm text-slate-500">
            All dentists at Girvan Dental are registered with the General Dental Council (GDC) and
            maintain rigorous continuing professional education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((dentist) => (
            <div
              key={dentist.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200 shadow-xs">
                    <img
                      src={dentist.avatarUrl}
                      alt={dentist.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                        {dentist.gdcNumber}
                      </span>
                      {dentist.joinedYear && (
                        <span className="text-[10px] text-slate-500">
                          {dentist.joinedYear}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      {dentist.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0B3B60] mt-0.5">
                      {dentist.role}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {dentist.qualifications}
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {dentist.bio}
                </p>

                {/* Specialties */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Areas of Clinical Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dentist.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-sky-50 text-[#0B3B60] border border-sky-100 px-2.5 py-1 rounded-lg font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
                <button
                  onClick={() => onOpenBooking(undefined, dentist.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0B3B60] hover:bg-[#082842] text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-98"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Appointment with {dentist.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support & Hygiene Team */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="font-display font-bold text-2xl text-slate-900">
              Hygiene, Nursing, Management & Support
            </h2>
            <p className="text-sm text-slate-500">
              The dedicated team ensuring smooth practice administration, gentle hygiene therapy, chairside nursing, and clinical decontamination.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveSupportTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSupportTab === 'all'
                  ? 'bg-white text-[#0B3B60] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Staff ({SUPPORT_TEAM.length})
            </button>
            <button
              onClick={() => setActiveSupportTab('hygiene')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSupportTab === 'hygiene'
                  ? 'bg-white text-[#0B3B60] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dental Hygiene
            </button>
            <button
              onClick={() => setActiveSupportTab('nursing')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSupportTab === 'nursing'
                  ? 'bg-white text-[#0B3B60] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dental Nurses
            </button>
            <button
              onClick={() => setActiveSupportTab('admin')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSupportTab === 'admin'
                  ? 'bg-white text-[#0B3B60] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Admin & Reception
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSupportTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="h-52 overflow-hidden relative bg-slate-100">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {member.gdcNumber && (
                    <div className="absolute top-2.5 left-2.5 bg-[#0B3B60]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
                      {member.gdcNumber}
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-base text-slate-900">{member.name}</h3>
                  <div className="text-xs font-semibold text-sky-700">{member.role}</div>
                  {member.qualifications && (
                    <div className="text-[11px] text-slate-400">{member.qualifications}</div>
                  )}
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{member.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Governance & GDC Compliance */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-slate-600 text-xs sm:text-sm space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
          <ShieldCheck className="w-5 h-5 text-[#0B3B60]" />
          <span>Professional Governance & GDC Standards</span>
        </div>
        <p className="leading-relaxed">
          All dentists, hygiene therapists, and dental nurses at Girvan Dental Practice are registered
          with the General Dental Council (GDC) and adhere to the GDC’s "Standards for the Dental
          Team". Our practice undergoes regular clinical quality inspections by NHS Ayrshire & Arran
          and NHS Education for Scotland.
        </p>
        <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#0B3B60]">
          <a
            href="https://www.gdc-uk.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            General Dental Council (GDC) &rarr;
          </a>
          <a
            href="https://www.nes.scot.nhs.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            NHS Education for Scotland (NES) &rarr;
          </a>
          <a
            href="https://www.nhsaaa.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            NHS Ayrshire & Arran Health Board &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
