import React, { useState } from 'react';
import { PageId } from '../types';
import { PRACTICE_INFO } from '../data/practiceData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Accessibility,
  Send,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Car,
  Train,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Dental Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-200">
          <MapPin className="w-3.5 h-3.5 text-sky-700" />
          78 Dalrymple Street, Girvan
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B3B60] tracking-tight">
          Contact Girvan Dental Practice
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          We welcome inquiries from new and existing patients across Girvan, South Ayrshire, and
          surrounding towns. Get in touch by telephone, online inquiry, or drop by in person.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Hours Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            {/* Visual Photo Card */}
            <div className="rounded-2xl overflow-hidden h-44 relative bg-slate-100 border border-slate-200 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80"
                alt="Girvan Dental Practice Reception"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs">
                <span className="font-bold block">78 Dalrymple Street</span>
                <span className="text-sky-200 text-[11px]">Heart of Girvan &bull; Ground-Floor Entrance</span>
              </div>
            </div>

            <h2 className="font-display font-bold text-xl text-slate-900">
              Practice Contact Details
            </h2>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0B3B60] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Location Address</span>
                  <span>78 Dalrymple Street, Girvan,</span>
                  <br />
                  <span>Ayrshire, KA26 9BT, Scotland</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0B3B60] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Telephone</span>
                  <a
                    href="tel:01465712213"
                    className="text-[#0B3B60] hover:underline font-semibold"
                  >
                    01465 712213
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Phone lines open from 9:00 am Mon–Fri
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0B3B60] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Email Address</span>
                  <a
                    href="mailto:reception@girvandental.co.uk"
                    className="text-[#0B3B60] hover:underline"
                  >
                    reception@girvandental.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0B3B60] flex items-center justify-center flex-shrink-0">
                  <Accessibility className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Accessibility</span>
                  <span className="text-xs text-slate-600">
                    Stair-free ground floor surgery and disabled toilet. Please advise when booking
                    if you require the ground floor surgery.
                  </span>
                </div>
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Surgery Opening Hours
              </span>
              <div className="space-y-1.5 text-xs">
                {PRACTICE_INFO.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-semibold text-slate-700">{h.day}</span>
                    <span className="text-slate-600">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Emergency Note */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-xs text-rose-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-900">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Out of Hours Emergency?</span>
            </div>
            <p className="leading-relaxed">
              When our surgery is closed, please dial NHS 24 on <strong className="text-rose-900">111</strong>{' '}
              for urgent clinical telephone assessment.
            </p>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Direct Message
            </span>
            <h2 className="font-display font-bold text-2xl text-slate-900 mt-1">
              Send an Inquiry to Reception
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Have a question regarding NHS registration, cosmetic treatments, or Denplan? Fill out
              the form and our reception team will respond promptly.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Message Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contacting Girvan Dental Practice. Kirsty or one of our reception team
                will get back to you within 1 business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-[#0B3B60] text-white rounded-xl text-xs font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John MacFarlane"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0B3B60]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01465 XXXXXX or 07XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0B3B60]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0B3B60]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-[#0B3B60]"
                  >
                    <option value="General Dental Inquiry">General Dental Inquiry</option>
                    <option value="New NHS Patient Registration">New NHS Patient Registration</option>
                    <option value="Cosmetic / Whitening Inquiry">Cosmetic / Whitening Inquiry</option>
                    <option value="C-Fast Braces Consultation">C-Fast Braces Consultation</option>
                    <option value="Dental Implants Inquiry">Dental Implants Inquiry</option>
                    <option value="Denplan Essentials Information">Denplan Essentials Information</option>
                    <option value="Childsmile Appointment">Childsmile Appointment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Message or Question <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can our dental team help you today? Please do not include confidential medical records."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0B3B60]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B3B60] hover:bg-[#082842] text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? 'Sending Inquiry...' : 'Submit Message to Reception'}</span>
                </button>

                <span className="text-[11px] text-slate-400">
                  Protected by GDPR & Medical Confidentiality
                </span>
              </div>
            </form>
          )}

          {/* Quick alternative button */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Need to book a specific date & time?</span>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B60] hover:text-sky-700"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Use Online Booking Wizard &rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Getting Here & Parking Information */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h3 className="font-display font-bold text-xl text-slate-900">
            Directions & Parking in Girvan
          </h3>
          <p className="text-xs text-slate-500">
            How to reach 78 Dalrymple Street, Girvan, Ayrshire KA26 9BT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Car className="w-4 h-4 text-[#0B3B60]" />
              <span>By Car & Parking</span>
            </div>
            <p className="leading-relaxed">
              Located on Dalrymple Street (the primary thoroughfare in Girvan). Free on-street parking
              is available directly outside and along adjacent streets. Nearby public harbour parking
              is also within a 3-minute flat walk.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Train className="w-4 h-4 text-[#0B3B60]" />
              <span>By Public Transit (Bus & Train)</span>
            </div>
            <p className="leading-relaxed">
              Girvan Railway Station is located roughly 8 minutes walk away, with frequent ScotRail
              services between Ayr, Glasgow, and Stranraer. Local Stagecoach bus routes 58, 60, and
              358 stop along Dalrymple Street.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Accessibility className="w-4 h-4 text-[#0B3B60]" />
              <span>Mobility Access</span>
            </div>
            <p className="leading-relaxed">
              Stair-free level threshold entry into our reception and ground-floor surgery. Ideal for
              wheelchairs, walkers, and prams. Please let us know when booking so we assign the
              downstairs surgery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
