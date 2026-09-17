import React, { useState } from 'react';
import { PageId } from '../types';
import { EMERGENCY_TRIAGE_ITEMS, PRACTICE_INFO } from '../data/practiceData';
import {
  AlertCircle,
  Phone,
  Clock,
  ShieldAlert,
  CheckCircle2,
  Calendar,
  MapPin,
  HelpCircle,
  Activity,
  ArrowRight,
} from 'lucide-react';

interface EmergencyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string) => void;
}

export const EmergencyPage: React.FC<EmergencyPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedTriageId, setSelectedTriageId] = useState<string>('severe-pain');

  const selectedTriage =
    EMERGENCY_TRIAGE_ITEMS.find((item) => item.id === selectedTriageId) ||
    EMERGENCY_TRIAGE_ITEMS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-200">
          <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
          Urgent Dental Care & Relief
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B3B60] tracking-tight">
          Dental Emergencies & Out of Hours
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          If you are experiencing severe dental pain, swelling, or sudden facial trauma, we are here
          to help. Registered patients receive priority same-day emergency appointments.
        </p>
      </div>

      {/* Immediate Hotline Banner */}
      <div className="bg-gradient-to-r from-rose-700 via-rose-800 to-red-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
              Immediate Assistance
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Need Same-Day Emergency Relief?
            </h2>
            <p className="text-sm text-rose-100 leading-relaxed">
              For registered patients in acute pain, we reserve dedicated emergency slots every
              weekday morning. Please phone our surgery promptly at{' '}
              <strong className="text-white">9:00 AM</strong>.
            </p>
            <div className="text-xs text-rose-200 flex items-center gap-2 pt-1">
              <Clock className="w-4 h-4 text-rose-300" />
              <span>Practice lines open Monday to Friday from 9:00 am</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="tel:01465712213"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-white text-rose-900 hover:bg-rose-50 font-extrabold rounded-2xl text-base shadow-lg transition-all active:scale-98"
            >
              <Phone className="w-5 h-5 text-rose-700" />
              <span>Call 01465 712213</span>
            </a>

            <button
              onClick={() => onOpenBooking('Tooth Pain or Broken Tooth Emergency')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-rose-950/60 hover:bg-rose-950/80 text-white rounded-2xl text-xs font-bold border border-rose-500/30 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Emergency Slot Online</span>
            </button>
          </div>
        </div>
      </div>

      {/* Out of Hours Protocol (NHS 24: 111) */}
      <div className="bg-sky-50 border border-sky-200 rounded-3xl p-8 sm:p-10 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-[#005EB8] text-white">
                NHS Scotland
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B3B60]">
                Out of Hours Dental Care (Evenings & Weekends)
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              If our practice is closed (after 5:00 PM on weekdays, at weekends, or during public
              holidays) and you have an urgent dental condition that cannot safely wait until the
              next morning, please phone <strong>NHS 24</strong>.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              A trained dental nurse or health advisor will assess your condition over the telephone.
              If urgent in-person treatment is required, they will arrange an emergency appointment at
              the local on-call emergency dental clinic.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-sky-200 text-center space-y-2 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Dial NHS 24
            </span>
            <div className="font-display text-4xl font-extrabold text-[#005EB8]">111</div>
            <p className="text-[11px] text-slate-500">
              Free from both UK landlines and mobile phones. Available 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE EMERGENCY SYMPTOM TRIAGE */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Self-Assessment Guide
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            What Is Your Dental Emergency?
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Click your current symptom below for immediate first aid advice and guidance on next
            steps.
          </p>
        </div>

        {/* Symptoms Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {EMERGENCY_TRIAGE_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedTriageId(item.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedTriageId === item.id
                  ? 'border-[#0B3B60] bg-sky-50/80 ring-2 ring-[#0B3B60]/20 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div>
                <span
                  className={`inline-block w-2 h-2 rounded-full mb-2 ${
                    item.severity === 'high' ? 'bg-rose-500' : 'bg-amber-500'
                  }`}
                />
                <h4 className="font-bold text-xs text-slate-900">{item.title}</h4>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 font-medium">Click for advice &rarr;</span>
            </button>
          ))}
        </div>

        {/* Active Triage Detail Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Selected Condition
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                {selectedTriage.title}
              </h3>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto ${
                selectedTriage.severity === 'high'
                  ? 'bg-rose-100 text-rose-800'
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              {selectedTriage.severity === 'high' ? 'Urgent Attention Required' : 'Priority Care'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 rounded-2xl space-y-2 border border-slate-200/80">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Immediate First Aid Advice
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedTriage.immediateAdvice}
              </p>
            </div>

            <div className="p-5 bg-sky-50 rounded-2xl space-y-2 border border-sky-200/80">
              <h4 className="font-bold text-sm text-[#0B3B60] flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-sky-600" />
                Action Protocol
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedTriage.actionGuidance}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="tel:01465712213"
              className="px-5 py-2.5 bg-[#0B3B60] hover:bg-[#082842] text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              Call Surgery: 01465 712213
            </a>
            <button
              onClick={() => onOpenBooking(selectedTriage.title)}
              className="px-5 py-2.5 bg-sky-50 text-[#0B3B60] hover:bg-sky-100 rounded-xl text-xs font-bold border border-sky-200 transition-colors"
            >
              Book Emergency Evaluation
            </button>
          </div>
        </div>
      </div>

      {/* Critical Medical Emergencies Note (999) */}
      <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 text-xs sm:text-sm space-y-2 border border-slate-800">
        <strong className="text-white block font-bold text-base flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-500" />
          When to Call 999 or Visit Accident & Emergency (A&E)
        </strong>
        <p className="leading-relaxed">
          If you experience facial trauma resulting in unconsciousness or severe bleeding that will
          not stop after 20 minutes of firm pressure, or if swelling in your neck/mouth affects your
          ability to swallow or breathe, call <strong>999</strong> immediately or attend Ayr Hospital
          Accident & Emergency.
        </p>
      </div>
    </div>
  );
};
