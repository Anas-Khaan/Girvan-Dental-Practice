import React, { useState, useEffect } from 'react';
import { AppointmentBooking } from '../types';
import { TEAM_MEMBERS, PRACTICE_INFO } from '../data/practiceData';
import {
  X,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  Phone,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Accessibility,
  Download,
  Check,
  ShieldCheck,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillTreatment?: string;
  prefillDentist?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillTreatment = '',
  prefillDentist = '',
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  // Form State
  const [patientType, setPatientType] = useState<
    'existing-nhs' | 'new-patient' | 'private' | 'denplan' | 'emergency' | 'childsmile'
  >('existing-nhs');
  const [treatmentType, setTreatmentType] = useState<string>(prefillTreatment || 'Routine Dental Examination');
  const [dentistPreference, setDentistPreference] = useState<string>(prefillDentist || 'first-available');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<'morning' | 'afternoon' | 'any'>('morning');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [chiNumber, setChiNumber] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [needsGroundFloor, setNeedsGroundFloor] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Synchronize prefilled values
  useEffect(() => {
    if (prefillTreatment) {
      setTreatmentType(prefillTreatment);
      if (prefillTreatment.toLowerCase().includes('emergency') || prefillTreatment.toLowerCase().includes('toothache')) {
        setPatientType('emergency');
      }
    }
    if (prefillDentist) {
      setDentistPreference(prefillDentist);
    }
  }, [prefillTreatment, prefillDentist]);

  // Set default preferred date to next business day
  useEffect(() => {
    if (!preferredDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (tomorrow.getDay() === 0) tomorrow.setDate(tomorrow.getDate() + 1); // skip Sunday
      if (tomorrow.getDay() === 6) tomorrow.setDate(tomorrow.getDate() + 2); // skip Saturday
      setPreferredDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [preferredDate]);

  if (!isOpen) return null;

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!phone.trim()) newErrors.phone = 'Please provide a valid contact number';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email required for confirmation';
    if (!dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required for dental records';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep4()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const referenceId = `GIR-${Math.floor(1000 + Math.random() * 9000)}`;
      const booking: AppointmentBooking = {
        id: referenceId,
        patientType,
        treatmentType,
        dentistPreference,
        preferredDate,
        preferredTime,
        fullName,
        email,
        phone,
        dateOfBirth,
        postcode,
        chiNumber,
        notes,
        hasEmergencyPain: patientType === 'emergency',
        createdAt: new Date().toISOString(),
      };
      setConfirmedBooking(booking);
      setIsSubmitting(false);
      setStep(5);
    }, 600);
  };

  const downloadIcsCalendar = () => {
    if (!confirmedBooking) return;
    const dateStr = confirmedBooking.preferredDate.replace(/-/g, '');
    const startTime = confirmedBooking.preferredTime === 'afternoon' ? '140000' : '100000';
    const endTime = confirmedBooking.preferredTime === 'afternoon' ? '144500' : '104500';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Girvan Dental Practice//Appointment Booking//EN',
      'BEGIN:VEVENT',
      `UID:${confirmedBooking.id}@girvandental.co.uk`,
      `DTSTAMP:${dateStr}T${startTime}Z`,
      `DTSTART:${dateStr}T${startTime}`,
      `DTEND:${dateStr}T${endTime}`,
      `SUMMARY:Dental Appointment - Girvan Dental Practice (${confirmedBooking.treatmentType})`,
      `DESCRIPTION:Appointment Reference: ${confirmedBooking.id}\\nDentist: ${confirmedBooking.dentistPreference}\\nPhone: 01465 712213`,
      'LOCATION:78 Dalrymple Street, Girvan, Ayrshire, KA26 9BT',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `girvan-dental-appointment-${confirmedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-[#0B3B60] via-[#104b7b] to-[#0284C7] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/15 text-sky-100 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              Online Appointment Scheduling
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              {step === 5 ? 'Appointment Request Confirmed' : 'Book an Appointment'}
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 mt-1">
              Girvan Dental Practice &bull; 78 Dalrymple Street &bull; 01465 712213
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-hidden"
            aria-label="Close booking modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stepper Progress (Steps 1 to 4) */}
        {step < 5 && (
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className={step >= 1 ? 'text-[#0B3B60] font-bold' : ''}>1. Patient Type</span>
            <span>&rarr;</span>
            <span className={step >= 2 ? 'text-[#0B3B60] font-bold' : ''}>2. Treatment</span>
            <span>&rarr;</span>
            <span className={step >= 3 ? 'text-[#0B3B60] font-bold' : ''}>3. Time & Dentist</span>
            <span>&rarr;</span>
            <span className={step >= 4 ? 'text-[#0B3B60] font-bold' : ''}>4. Your Details</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {/* STEP 1: PATIENT TYPE */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-sm text-slate-600">
                Please tell us how you are registering with Girvan Dental Practice today:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'existing-nhs',
                    title: 'Existing NHS Patient',
                    desc: 'You are currently registered with Girvan Dental for routine NHS care.',
                    badge: 'NHS Scotland',
                  },
                  {
                    id: 'new-patient',
                    title: 'New Patient Registration',
                    desc: 'Looking to join the practice in Girvan as a new NHS or private patient.',
                    badge: 'Welcome',
                  },
                  {
                    id: 'private',
                    title: 'Private & Cosmetic Care',
                    desc: 'Inquiring for Teeth Whitening, Bonding, C-Fast Braces, or Implants.',
                    badge: 'Cosmetic',
                  },
                  {
                    id: 'denplan',
                    title: 'Denplan Essentials Member',
                    desc: 'You have a monthly Denplan dental plan with our practice.',
                    badge: 'Denplan',
                  },
                  {
                    id: 'childsmile',
                    title: 'Childsmile Patient',
                    desc: 'Children under 6 and young patients receiving free NHS preventive visits.',
                    badge: 'Free NHS',
                  },
                  {
                    id: 'emergency',
                    title: 'Urgent Pain / Emergency',
                    desc: 'Experiencing severe toothache, swelling, trauma, or broken front tooth.',
                    badge: 'Same-Day Triage',
                    isAlert: true,
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setPatientType(
                        item.id as 'existing-nhs' | 'new-patient' | 'private' | 'denplan' | 'emergency' | 'childsmile'
                      )
                    }
                    className={`p-4 rounded-xl border text-left transition-all relative ${
                      patientType === item.id
                        ? 'border-[#0B3B60] bg-sky-50/70 ring-2 ring-[#0B3B60]/20 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-900">{item.title}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.isAlert
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-sky-100 text-sky-800'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </button>
                ))}
              </div>

              {patientType === 'emergency' && (
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block font-semibold">Acute Emergency Notice:</strong>
                    For urgent same-day pain, you can also telephone reception directly at 9:00 AM on{' '}
                    <a href="tel:01465712213" className="font-bold underline">
                      01465 712213
                    </a>
                    . Out of hours, please phone NHS 24 on <strong className="text-rose-700">111</strong>.
                  </div>
                </div>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B3B60] hover:bg-[#082842] text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <span>Continue to Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: TREATMENT SELECTION */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-sm text-slate-600">
                What is the primary service or treatment you would like to schedule?
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-80 overflow-y-auto pr-1">
                {[
                  { name: 'Routine Dental Examination', tag: 'NHS & Private', time: '20-30m' },
                  { name: 'Dental Hygiene Scaling & Air Polish', tag: 'Hygiene Therapist', time: '30m' },
                  { name: 'Tooth Pain or Broken Tooth Emergency', tag: 'Urgent', time: 'Same Day' },
                  { name: 'Childsmile Children’s Check-up', tag: 'Free NHS (Kids)', time: '20m' },
                  { name: 'Cosmetic Consultation (Whitening & Bonding)', tag: 'Private', time: '30m' },
                  { name: 'C-Fast Adult Braces Consultation', tag: 'Free Consultation', time: '30m' },
                  { name: 'Dental Implants Consultation', tag: 'Dr. Sada', time: '45m' },
                  { name: 'Dentures Check, Repair or New Set', tag: 'Prosthetics', time: '30m' },
                  { name: 'Root Canal / Endodontics Inquiry', tag: 'Dr. Ramsay', time: '45m' },
                  { name: 'Facial Aesthetics Consultation', tag: 'Private Aesthetics', time: '30m' },
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setTreatmentType(item.name)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      treatmentType === item.name
                        ? 'border-[#0B3B60] bg-sky-50 text-[#0B3B60] font-bold shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="text-sm">{item.name}</div>
                      <div className="text-[11px] text-slate-400 font-normal">
                        {item.tag} &bull; Approx {item.time}
                      </div>
                    </div>
                    {treatmentType === item.name && <Check className="w-4 h-4 text-[#0B3B60]" />}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B3B60] hover:bg-[#082842] text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <span>Select Date & Dentist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DENTIST & TIME PREFERENCE */}
          {step === 3 && (
            <div className="space-y-4">
              {/* Dentist Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Preferred Dentist
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDentistPreference('first-available')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      dentistPreference === 'first-available'
                        ? 'border-[#0B3B60] bg-sky-50 text-[#0B3B60] font-bold'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-sm font-semibold">First Available Dentist</div>
                    <div className="text-xs text-slate-500 font-normal">Recommended for quickest appointment</div>
                  </button>

                  {TEAM_MEMBERS.map((dentist) => (
                    <button
                      key={dentist.id}
                      type="button"
                      onClick={() => setDentistPreference(dentist.name)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        dentistPreference === dentist.name
                          ? 'border-[#0B3B60] bg-sky-50 text-[#0B3B60] font-bold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-sm font-semibold">{dentist.name}</div>
                      <div className="text-xs text-slate-500 font-normal">{dentist.role}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-[#0B3B60] focus:border-[#0B3B60]"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Practice open Mon–Fri, 9:00 am – 5:00 pm
                  </span>
                </div>

                {/* Time of Day */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Preferred Time of Day
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'morning', label: 'Morning', sub: '9am - 12pm' },
                      { id: 'afternoon', label: 'Afternoon', sub: '1pm - 5pm' },
                      { id: 'any', label: 'Any Time', sub: 'Flexible' },
                    ].map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setPreferredTime(slot.id as 'morning' | 'afternoon' | 'any')}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          preferredTime === slot.id
                            ? 'border-[#0B3B60] bg-sky-50 text-[#0B3B60] font-bold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-xs font-bold">{slot.label}</div>
                        <div className="text-[10px] text-slate-400">{slot.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B3B60] hover:bg-[#082842] text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <span>Enter Patient Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PATIENT CONTACT DETAILS & SUBMIT */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fiona MacKay"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      errors.fullName ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-rose-600 text-xs mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Birth <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      errors.dateOfBirth ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.dateOfBirth && <p className="text-rose-600 text-xs mt-0.5">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile / Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07XXX XXXXXX or 01465 XXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      errors.phone ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-rose-600 text-xs mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="fiona@example.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm ${
                      errors.email ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-rose-600 text-xs mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Postcode
                  </label>
                  <input
                    type="text"
                    placeholder="KA26 9BT"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    CHI / NHS Number <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="10 digit Scottish CHI number"
                    value={chiNumber}
                    onChange={(e) => setChiNumber(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
              </div>

              {/* Accessibility Option */}
              <div className="p-3 bg-sky-50/70 border border-sky-200 rounded-xl flex items-start gap-3">
                <input
                  type="checkbox"
                  id="groundFloorCheck"
                  checked={needsGroundFloor}
                  onChange={(e) => setNeedsGroundFloor(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0B3B60] focus:ring-[#0B3B60]"
                />
                <label htmlFor="groundFloorCheck" className="text-xs text-slate-700 cursor-pointer">
                  <span className="font-bold flex items-center gap-1 text-[#0B3B60]">
                    <Accessibility className="w-3.5 h-3.5" />
                    Require Stair-Free Downstairs Surgery
                  </span>
                  We have fully accessible ground-floor dental surgeries and accessible toilet facilities.
                </label>
              </div>

              {/* Clinical notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific symptoms or notes for the dentist:
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Broken upper molar, sharp pain on cold foods, anxious about dentists..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Confirm & Schedule</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: SUCCESS CONFIRMATION */}
          {step === 5 && confirmedBooking && (
            <div className="space-y-6 text-center py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{confirmedBooking.fullName}</strong>. Our
                  reception team at Girvan Dental Practice will review your preferred slot and send an SMS/Email
                  confirmation.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-lg mx-auto space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-sm text-[#0B3B60] bg-sky-100/70 px-2 py-0.5 rounded">
                    {confirmedBooking.id}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Service:</span>
                  <span className="font-medium text-slate-900">{confirmedBooking.treatmentType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Preferred Date:</span>
                  <span className="font-medium text-slate-900">{confirmedBooking.preferredDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Time Window:</span>
                  <span className="font-medium text-slate-900 capitalize">
                    {confirmedBooking.preferredTime} ({confirmedBooking.preferredTime === 'afternoon' ? '1pm - 5pm' : '9am - 12pm'})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Dentist:</span>
                  <span className="font-medium text-slate-900">{confirmedBooking.dentistPreference}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Location:</span>
                  <span className="font-medium text-slate-900">78 Dalrymple Street, Girvan KA26 9BT</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={downloadIcsCalendar}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-50 text-[#0B3B60] hover:bg-sky-100 rounded-xl text-xs font-bold border border-sky-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <a
                  href="tel:01465712213"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0B3B60] hover:bg-[#082842] text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Reception (01465 712213)</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-semibold"
                >
                  Close Window
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                Remember our 24-hour cancellation policy. If you need to rearrange your appointment, please contact reception promptly.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
