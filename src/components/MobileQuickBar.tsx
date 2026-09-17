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
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center justify-between gap-2">
      {/* Call Practice */}
      <a
        href="tel:01465712213"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#0B3B60]" />
        <span className="text-[10px] font-bold mt-0.5">Call Us</span>
      </a>

      {/* Book Online CTA */}
      <button
        onClick={onOpenBooking}
        className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-to-r from-[#0B3B60] to-[#0284C7] text-white rounded-xl shadow-md font-bold text-xs active:scale-98"
      >
        <Calendar className="w-3.5 h-3.5 text-sky-200" />
        <span>Book Online</span>
      </button>

      {/* Emergency */}
      <button
        onClick={onNavigateToEmergency}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-rose-700 hover:bg-rose-50 transition-colors"
      >
        <AlertCircle className="w-4 h-4 text-rose-600" />
        <span className="text-[10px] font-bold mt-0.5">Emergency</span>
      </button>
    </div>
  );
};
