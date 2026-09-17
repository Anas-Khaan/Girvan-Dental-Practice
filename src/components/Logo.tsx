import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showNhsBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showNhsBadge = true,
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? 'text-white' : 'text-[#0B3860]';
  const subTextColor = isWhite ? 'text-sky-200' : 'text-sky-700';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dental Tooth & Coastal Wave Emblem */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0B3B60] via-[#12538A] to-[#0284C7] p-2 shadow-md shadow-sky-950/10 flex items-center justify-center border border-white/20">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Stylized healthy tooth with soft modern curves */}
          <path
            d="M24 6C15.5 6 12 11 12 17C12 23.5 14 31 18 41C19.5 44.5 22.5 44.5 24 38.5C25.5 44.5 28.5 44.5 30 41C34 31 36 23.5 36 17C36 11 32.5 6 24 6Z"
            fill="currentColor"
            fillOpacity="0.95"
          />
          {/* Subtle coastal wave curve through tooth reflecting Girvan's seaside location */}
          <path
            d="M15 20C18 18 22 23 26 21C29 19.5 31 21 33 22"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Sparkling health star */}
          <circle cx="31" cy="13" r="2.5" fill="#BAE6FD" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-display font-extrabold text-lg sm:text-xl tracking-tight leading-tight ${textColor}`}>
            GIRVAN DENTAL
          </span>
          {showNhsBadge && (
            <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#005EB8] text-white shadow-xs">
              NHS
            </span>
          )}
        </div>
        <span className={`text-xs sm:text-sm font-medium tracking-wide ${subTextColor}`}>
          Practice &bull; Ayrshire
        </span>
      </div>
    </div>
  );
};
