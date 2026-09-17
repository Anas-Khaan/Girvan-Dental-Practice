import React from 'react';
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
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#082842] text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-700/60">
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
              Key Services
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>&bull; Routine NHS Check-ups & Fillings</li>
              <li>&bull; Childsmile Preventive Dental Care</li>
              <li>&bull; Boutique Home Teeth Whitening</li>
              <li>&bull; Composite Edge Bonding</li>
              <li>&bull; C-Fast Adult Front-Six Braces</li>
              <li>&bull; Titanium Dental Implants</li>
              <li>&bull; Precision Acrylic & Chrome Dentures</li>
              <li>&bull; Dedicated Dental Hygiene Scaling</li>
              <li>&bull; Same-Day Acute Emergency Triage</li>
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
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
              <span>GDC Standards Regulated</span>
              <span>&bull;</span>
              <span>NHS Ayrshire & Arran Health Board</span>
              <span>&bull;</span>
              <button
                onClick={() => onNavigate('fees')}
                className="hover:text-white underline underline-offset-2"
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
    </footer>
  );
};
