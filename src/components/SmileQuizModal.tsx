import React, { useState } from 'react';
import { Sparkles, X, ArrowRight, ArrowLeft, CheckCircle, Clock, PoundSterling, Calendar } from 'lucide-react';

interface SmileQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const SmileQuizModal: React.FC<SmileQuizModalProps> = ({
  isOpen,
  onClose,
  onBookTreatment,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [goal, setGoal] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [priorWork, setPriorWork] = useState<string>('');

  if (!isOpen) return null;

  const getRecommendation = () => {
    if (goal === 'whitening') {
      return {
        title: 'Boutique Home Teeth Whitening',
        desc: 'Custom-fitted laboratory bleaching trays designed for gentle, long-lasting whitening at home. Elevate your smile 4 to 8 shades in 2 weeks.',
        duration: '2 weeks home treatment',
        estimate: '£295.00',
        treatmentName: 'Professional Boutique Teeth Whitening',
      };
    }
    if (goal === 'straighten') {
      return {
        title: 'C-Fast Adult Fast Orthodontics',
        desc: 'Discreet tooth-coloured brackets and wires designed specifically for adults. Straightens the front six smile teeth in just 4 to 6 months.',
        duration: '4 to 6 months',
        estimate: 'Free Consultation / From £1,650',
        treatmentName: 'C-Fast Adult Fast Orthodontics',
      };
    }
    if (goal === 'bonding') {
      return {
        title: 'Composite Bonding & Smile Contouring',
        desc: 'Artistic sculpting to repair chipped edges, close minor gaps, and harmonize smile line symmetry in a single, drill-free session.',
        duration: '1 single appointment (60–90 mins)',
        estimate: 'From £120 per tooth',
        treatmentName: 'Composite Bonding & Smile Contouring',
      };
    }
    if (goal === 'implants') {
      return {
        title: 'Dental Implants with Dr. Sada Mangalampalli',
        desc: 'Biocompatible titanium roots permanently replacing missing teeth, restoring complete bite force and natural smile aesthetics.',
        duration: '3–6 months integration',
        estimate: 'From £2,200 (Implant + Crown)',
        treatmentName: 'Dental Implants & 3D CBCT Guided Surgery',
      };
    }
    // Default
    return {
      title: 'Bespoke Smile Design & Cosmetic Consultation',
      desc: 'A comprehensive one-on-one aesthetic evaluation with our cosmetic dentists in Girvan to design a tailored smile plan combining whitening, bonding, or ceramic veneers.',
      duration: '30-minute consultation',
      estimate: 'Consultation from £48',
      treatmentName: 'Cosmetic Consultation (Whitening & Bonding)',
    };
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B3B60] via-[#104b7b] to-[#0284C7] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-sky-200" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Girvan Smile Assessment</h3>
              <p className="text-xs text-sky-100">Find your recommended cosmetic treatment in 30 seconds</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div
            className="bg-[#0284C7] h-1.5 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Body */}
        <div className="p-6">
          {/* STEP 1: What would you like to improve? */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base">
                What is the main thing you would like to improve about your smile?
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'whitening', label: 'Whiten stained, dull, or discoloured teeth' },
                  { id: 'bonding', label: 'Fix chipped edges, gaps, or uneven teeth shape' },
                  { id: 'straighten', label: 'Straighten crooked, overlapping, or crowded front teeth' },
                  { id: 'implants', label: 'Replace missing teeth or secure loose dentures' },
                  { id: 'full-makeover', label: 'Complete comprehensive smile makeover' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setGoal(item.id);
                      setStep(2);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                      goal === item.id
                        ? 'border-[#0B3B60] bg-sky-50 text-[#0B3B60]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Timeline */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base">
                What is your ideal timeframe for seeing results?
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'fast', label: 'As soon as possible / within 2–4 weeks (e.g. wedding/event)' },
                  { id: 'medium', label: 'Within 4 to 6 months' },
                  { id: 'flexible', label: 'No rush — looking for the longest lasting solution' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTimeline(item.id);
                      setStep(3);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                      timeline === item.id
                        ? 'border-[#0B3B60] bg-sky-50 text-[#0B3B60]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>
          )}

          {/* STEP 3: Prior Experience */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base">
                Have you had cosmetic or orthodontic dental treatment before?
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'first-time', label: 'No, this is my first time exploring cosmetic dentistry' },
                  { id: 'had-whitening', label: 'Yes, I have had teeth whitening in the past' },
                  { id: 'had-braces', label: 'I had braces as a teenager, but teeth have shifted' },
                  { id: 'has-denture', label: 'I currently wear dentures and want something more stable' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setPriorWork(item.id);
                      setStep(4);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                      priorWork === item.id
                        ? 'border-[#0B3B60] bg-sky-50 text-[#0B3B60]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>
          )}

          {/* STEP 4: RECOMMENDATION */}
          {step === 4 && (
            <div className="space-y-5 text-center">
              <div className="w-12 h-12 bg-sky-100 text-[#0B3B60] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-[#0B3B60]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-full">
                  Recommended Treatment
                </span>
                <h4 className="font-display font-bold text-xl text-slate-900 mt-2">
                  {rec.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  {rec.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-left">
                <div>
                  <span className="text-slate-400 font-medium block">Typical Duration:</span>
                  <span className="font-bold text-slate-800">{rec.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Estimated Cost:</span>
                  <span className="font-bold text-[#0B3B60]">{rec.estimate}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onBookTreatment(rec.treatmentName);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white rounded-xl text-sm font-bold shadow-md transition-all active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for This Treatment</span>
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
