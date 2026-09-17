import React, { useState } from 'react';
import { PageId } from '../types';
import { FEE_ITEMS, DENPLAN_ESSENTIALS } from '../data/practiceData';
import {
  PoundSterling,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Calculator,
  ArrowRight,
} from 'lucide-react';

interface FeesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const FeesPage: React.FC<FeesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedFeeCategory, setSelectedFeeCategory] = useState<string>('All');

  // Interactive Denplan Calculator State
  const [hygieneVisits, setHygieneVisits] = useState<number>(2);
  const [additionalTreatmentSpend, setAdditionalTreatmentSpend] = useState<number>(200);

  // Categories list
  const categories = [
    'All',
    'Consultations & Diagnostics',
    'Hygiene & Prevention',
    'Fillings & Restorations',
    'Endodontics & Extractions',
    'Crowns, Veneers & Bridges',
    'Cosmetic & Orthodontics',
    'Dentures & Implants',
  ];

  const filteredFees =
    selectedFeeCategory === 'All'
      ? FEE_ITEMS
      : FEE_ITEMS.filter((f) => f.category === selectedFeeCategory);

  // Calculator math:
  // Pay As You Go: 2 exams (£96) + hygiene visits (£67 each) + 2 x-rays (£27) + additional treatment spend
  const payAsYouGoCost = 48 * 2 + 67 * hygieneVisits + 27 + additionalTreatmentSpend;
  // Denplan: 12 months * £18.85 = £226.20
  // Extra hygiene beyond the 2 included is 10% off (£60.30 each)
  const extraHygieneCost = Math.max(0, hygieneVisits - 2) * (67 * 0.9);
  // 10% discount on additional treatment spend
  const discountedAdditionalSpend = additionalTreatmentSpend * 0.9;
  const denplanTotalCost = 226.2 + extraHygieneCost + discountedAdditionalSpend;
  const annualSavings = Math.max(0, payAsYouGoCost - denplanTotalCost);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-200">
          <PoundSterling className="w-3.5 h-3.5 text-sky-700" />
          Transparent, Fair Healthcare Pricing
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B3B60] tracking-tight">
          Dental Fees & Denplan Plans
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Clear, transparent pricing for both Scottish NHS dental provisions and private treatments.
          Explore our private fee guide and see how Denplan Essentials can save you money each year.
        </p>
      </div>

      {/* 1. DENPLAN ESSENTIALS & INTERACTIVE CALCULATOR */}
      <div className="bg-gradient-to-br from-[#0B3B60] to-[#082842] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-400/20 text-sky-200 border border-sky-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              Monthly Dental Membership
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Denplan Essentials at Girvan Dental
            </h2>
            <p className="text-sm text-sky-100 leading-relaxed">
              Budgeting for routine oral health has never been simpler. For just{' '}
              <strong className="text-white text-base">£18.85 per month</strong>, your examinations,
              hygiene cleanings, and diagnostic x-rays are completely covered.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              {DENPLAN_ESSENTIALS.highlights.slice(0, 5).map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-sm"
              >
                Join Denplan Essentials Today
              </button>
              <a
                href="tel:01465712213"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-xs border border-white/20 transition-colors"
              >
                Call 01465 712213 for Details
              </a>
            </div>
          </div>

          {/* Interactive Calculator Widget */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20 text-white space-y-5">
            <div className="flex items-center gap-2 border-b border-white/20 pb-3">
              <Calculator className="w-5 h-5 text-sky-300" />
              <h3 className="font-display font-bold text-lg text-white">
                Denplan Savings Calculator
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Hygienist Cleaning Visits per Year:</span>
                  <span className="text-sky-300 font-bold">{hygieneVisits} visits</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={4}
                  value={hygieneVisits}
                  onChange={(e) => setHygieneVisits(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>1 visit</span>
                  <span>2 visits (included)</span>
                  <span>3 visits</span>
                  <span>4 visits</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Estimated Private Treatments Planned (Fillings, etc.):</span>
                  <span className="text-sky-300 font-bold">£{additionalTreatmentSpend}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={600}
                  step={50}
                  value={additionalTreatmentSpend}
                  onChange={(e) => setAdditionalTreatmentSpend(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>£0</span>
                  <span>£300</span>
                  <span>£600</span>
                </div>
              </div>
            </div>

            {/* Calculated Comparison Card */}
            <div className="bg-slate-900/80 rounded-xl p-4 border border-white/15 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">
                  Pay-As-You-Go
                </span>
                <span className="text-xl font-bold text-rose-300">
                  £{payAsYouGoCost.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-400 block">per year</span>
              </div>

              <div className="border-l border-white/10">
                <span className="text-[10px] text-sky-400 uppercase font-bold block">
                  With Denplan Essentials
                </span>
                <span className="text-xl font-bold text-emerald-300">
                  £{denplanTotalCost.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-400 block">per year (£18.85/mo)</span>
              </div>
            </div>

            {annualSavings > 0 && (
              <div className="p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-center text-xs text-emerald-200 font-bold">
                You save approximately £{annualSavings.toFixed(2)} every year with Denplan Essentials!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. NHS SCOTLAND CHARGES & EXEMPTIONS */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-black bg-[#005EB8] text-white">
                NHS Scotland
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                NHS Dental Treatment in Scotland
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Girvan Dental Practice, routine dental examinations are <strong>100% free</strong> for
              all Scottish residents under the NHS. Where treatment is required (such as fillings,
              extractions, or NHS crowns), NHS Scotland charges patients 80% of the government-approved
              fee, up to a maximum cap per course of treatment.
            </p>
          </div>

          <div className="lg:col-span-4 rounded-2xl overflow-hidden h-40 relative bg-slate-100 border border-slate-200 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80"
              alt="NHS Dental Examination Consultation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold">
              Free Routine NHS Check-ups
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="block text-slate-900 font-bold mb-1">Free NHS Examinations</strong>
            All registered Scottish NHS patients receive free oral health examinations and cancer
            screenings.
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="block text-slate-900 font-bold mb-1">Under 26 Exemption</strong>
            Patients aged 18 through 25 with an active NHS CHI number in Scotland receive free NHS
            dental treatment.
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="block text-slate-900 font-bold mb-1">Expectant & Nursing Mothers</strong>
            Mothers who are pregnant or have had a baby in the previous 12 months qualify for free
            care.
          </div>
        </div>
      </div>

      {/* 3. ITEMISED PRIVATE FEE GUIDE */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Price Transparency
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Private Fee Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Effective as of October 1, 2025. Prices represent standard guide fees and may vary based
              on clinical complexity.
            </p>
          </div>

          {/* Category Filter */}
          <select
            value={selectedFeeCategory}
            onChange={(e) => setSelectedFeeCategory(e.target.value)}
            className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 bg-white"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Fee Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                <tr>
                  <th className="py-3.5 px-6">Treatment / Procedure</th>
                  <th className="py-3.5 px-6">Category</th>
                  <th className="py-3.5 px-6">Private Fee</th>
                  <th className="py-3.5 px-6">Denplan Essentials</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredFees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      {fee.service}
                    </td>
                    <td className="py-3.5 px-6 text-slate-500 text-xs">{fee.category}</td>
                    <td className="py-3.5 px-6 font-bold text-[#0B3B60]">{fee.privateFee}</td>
                    <td className="py-3.5 px-6">
                      {fee.denplanIncluded ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Included
                        </span>
                      ) : (
                        <span className="text-xs text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                          {fee.denplanDiscountNote || '10% discount'}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <button
                        onClick={onOpenBooking}
                        className="px-3 py-1 bg-sky-50 hover:bg-[#0B3B60] text-[#0B3B60] hover:text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. MISSED APPOINTMENT POLICY */}
      <div className="bg-amber-50 border border-amber-200/90 rounded-3xl p-6 sm:p-8 space-y-3 text-amber-950">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <span>24-Hour Cancellation & Missed Appointment Policy</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          To respect our clinicians’ time and ensure other patients in pain can be treated promptly, we
          require at least <strong>24 hours notice</strong> to cancel or reschedule an appointment.
          Unattended appointments or late cancellations without sufficient notice may incur a charge in
          line with practice policy.
        </p>
      </div>
    </div>
  );
};
