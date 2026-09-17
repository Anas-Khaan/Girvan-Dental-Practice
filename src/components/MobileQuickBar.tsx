import React from 'react';
import { Phone, Calendar, AlertCircle } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
  onNavigateToEmergency: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenBooking,
  onNavigateToEmergency,
}) => {
  return (
    <aside aria-label="Quick mobile contact and booking" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2.5 shadow-2xl flex items-center gap-2.5">
      {/* Call Button */}
      <a
        href="tel:01465712213"
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B3B60] font-bold text-xs transition-colors border border-slate-200/80 active:scale-98 whitespace-nowrap"
      >
        <Phone className="w-4 h-4 text-[#0B3B60] flex-shrink-0" />
        <span>Call</span>
      </a>

      {/* Book Appointment CTA */}
      <button
        onClick={onOpenBooking}
        className="flex-[1.4] inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] hover:from-[#092e4b] hover:to-[#0274ae] text-white rounded-xl shadow-md font-bold text-xs active:scale-98 whitespace-nowrap"
      >
        <Calendar className="w-4 h-4 text-sky-200 flex-shrink-0" />
        <span>Book Appointment</span>
      </button>

      {/* Emergency Quick Action */}
      <button
        onClick={onNavigateToEmergency}
        aria-label="Dental emergency triage"
        className="p-2.5 rounded-xl text-rose-700 hover:bg-rose-50 border border-rose-200 bg-rose-50/60 transition-colors flex-shrink-0"
        title="Emergency Dental Triage"
      >
        <AlertCircle className="w-4 h-4 text-rose-600" />
      </button>
    </aside>
  );
};
