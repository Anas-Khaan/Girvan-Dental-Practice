import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { PRACTICE_INFO } from '../data/practiceData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Award,
  Heart,
  ChevronRight,
  Accessibility,
  Facebook,
  Instagram,
  X,
  FileText,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'cookie' | null>(null);

  return (
    <footer className="bg-[#082842] text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          {/* Col 1: Brand & Practice Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-slate-300 leading-relaxed">
              Girvan Dental Practice has provided compassionate, patient-first NHS and private
              dentistry to families in Girvan and South Ayrshire since 2007. Led by practice principal
              Dr. Tanu Sharma, we are proud to serve as an approved NES Education for Scotland training
              practice.
            </p>

            {/* Social Links */}
            <div className="pt-1 flex items-center gap-3">
              <span className="text-xs text-sky-300 font-semibold">Connect with us:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Girvan Dental Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Girvan Dental Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Accreditation Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#005EB8] text-white">
                <span className="font-black">NHS</span> Scotland
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-sky-900/60 text-sky-200 border border-sky-700/40">
                <Award className="w-3 h-3 text-sky-300" />
                NES Training Practice
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-700/40">
                <Heart className="w-3 h-3 text-emerald-400" />
                Childsmile Practice
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Practice' },
                { id: 'team', label: 'Meet the Dentists' },
                { id: 'treatments', label: 'Dental Treatments' },
                { id: 'fees', label: 'Private Fees & Denplan' },
                { id: 'emergency', label: 'Dental Emergencies' },
                { id: 'contact', label: 'Contact & Directions' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1 hover:text-white transition-colors text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Treatments Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Main Treatments
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Dental Implants
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Boutique Teeth Whitening
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Porcelain & Composite Veneers
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Clear Aligners & C-Fast
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Dental Crowns & Bridges
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Full & Partial Dentures
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Root Canal Therapy
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('treatments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors text-left">
                  &bull; Dental Hygiene & Periodontal Care
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency Info */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Practice Information
            </h3>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span>
                  78 Dalrymple Street, Girvan,<br />
                  Ayrshire, KA26 9BT, Scotland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:01465712213" className="hover:text-white font-semibold">
                  01465 712213
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:reception@girvandental.co.uk" className="hover:text-white truncate">
                  reception@girvandental.co.uk
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span>Monday – Friday: 9:00 am – 5:00 pm<br />Saturday & Sunday: Closed</span>
              </div>
            </div>

            {/* Emergency & Accessibility Badges */}
            <div className="pt-2 space-y-2">
              <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-800/40 text-xs text-rose-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold block text-rose-100">Out of Hours Emergency:</span>
                  Call NHS 24 on <strong className="text-white">111</strong>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-sky-950/40 border border-sky-800/40 text-xs text-sky-200 flex items-center gap-2">
                <Accessibility className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Ground floor stair-free access & disabled toilet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compliance & Policy Bar */}
        <div className="pt-8 text-xs text-slate-400 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Girvan Dental Practice. All rights reserved. Registered in Scotland.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
              <span>GDC Standards Regulated</span>
              <span>&bull;</span>
              <span>NHS Ayrshire & Arran Health Board</span>
              <span>&bull;</span>
              <button
                onClick={() => setActivePolicyModal('privacy')}
                className="hover:text-white underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </button>
              <span>&bull;</span>
              <button
                onClick={() => setActivePolicyModal('cookie')}
                className="hover:text-white underline underline-offset-2 transition-colors"
              >
                Cookie Policy
              </button>
              <span>&bull;</span>
              <button
                onClick={() => onNavigate('fees')}
                className="hover:text-white underline underline-offset-2 transition-colors"
              >
                24h Cancellation Policy
              </button>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed text-center sm:text-left">
            Dr. Tanu Sharma (BDS) - Practice Owner. All dentists at Girvan Dental Practice are registered with the General Dental Council (GDC). Patient data is handled with strict medical confidentiality in accordance with GDPR and NHS Scotland Information Governance standards.
          </p>
        </div>
      </div>

      {/* Policy Modal */}
      {activePolicyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActivePolicyModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activePolicyModal === 'privacy' ? (
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-[#0B3B60]">
                  <FileText className="w-5 h-5 text-sky-600" />
                  <h3 className="font-display font-bold text-lg">Privacy Policy</h3>
                </div>
                <p className="text-xs text-slate-500">
                  Last updated: {new Date().getFullYear()} &bull; Girvan Dental Practice
                </p>
                <div className="text-xs leading-relaxed text-slate-600 space-y-2.5">
                  <p>
                    Girvan Dental Practice is committed to protecting the privacy and confidentiality of our patients’ personal and clinical data in compliance with the UK Data Protection Act 2018, GDPR, and NHS Scotland Information Governance standards.
                  </p>
                  <h4 className="font-bold text-slate-800 text-xs pt-1">1. Information We Collect</h4>
                  <p>
                    We collect personal details (name, contact information, date of birth, NHS CHI number) and medical/dental histories essential to providing safe clinical care.
                  </p>
                  <h4 className="font-bold text-slate-800 text-xs pt-1">2. How We Use Your Data</h4>
                  <p>
                    Your records are used solely to deliver optimal dental diagnosis, treatment, appointment reminders, and, where applicable, NHS claims processing with Practitioner Services.
                  </p>
                  <h4 className="font-bold text-slate-800 text-xs pt-1">3. Data Security</h4>
                  <p>
                    All electronic patient records are securely stored on encrypted clinical servers with role-based access restricted strictly to registered dental personnel.
                  </p>
                  <p>
                    For inquiries or Subject Access Requests, contact our Data Protection lead at <a href="mailto:reception@girvandental.co.uk" className="text-sky-700 font-semibold underline">reception@girvandental.co.uk</a>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-right">
                  <button
                    onClick={() => setActivePolicyModal(null)}
                    className="px-4 py-2 bg-[#0B3B60] text-white text-xs font-bold rounded-xl"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-[#0B3B60]">
                  <FileText className="w-5 h-5 text-sky-600" />
                  <h3 className="font-display font-bold text-lg">Cookie Policy</h3>
                </div>
                <p className="text-xs text-slate-500">
                  Girvan Dental Practice &bull; 78 Dalrymple Street, Girvan
                </p>
                <div className="text-xs leading-relaxed text-slate-600 space-y-2.5">
                  <p>
                    Our website uses essential cookies to ensure standard functionality, session security, and patient appointment request routing.
                  </p>
                  <h4 className="font-bold text-slate-800 text-xs pt-1">Essential Cookies</h4>
                  <p>
                    These cookies are necessary for navigating the website and utilizing core features such as booking submissions and interactive calculators. They do not track personal browsing habits.
                  </p>
                  <h4 className="font-bold text-slate-800 text-xs pt-1">Managing Cookies</h4>
                  <p>
                    You can restrict or block cookies through your browser settings at any time, though some functional features may require essential cookies to operate.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-right">
                  <button
                    onClick={() => setActivePolicyModal(null)}
                    className="px-4 py-2 bg-[#0B3B60] text-white text-xs font-bold rounded-xl"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
