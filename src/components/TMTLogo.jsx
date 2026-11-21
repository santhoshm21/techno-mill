import React from 'react';
import { Link } from 'react-router-dom';

export default function TMTLogo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'; // Light text for dark footer

  return (
    <Link to="/" className={`flex items-center gap-3 group select-none shrink-0 ${className}`}>
      {/* TMT Gladius Badge */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg width="68" height="42" viewBox="0 0 110 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main TMT letters */}
          <text 
            x="0" 
            y="42" 
            fontFamily="Arial, Helvetica, sans-serif" 
            fontWeight="900" 
            fontSize="46" 
            letterSpacing="-1" 
            fill="#E11D48"
          >
            TMT
          </text>
          
          {/* Gladius script overlay in warm orange/amber */}
          <text 
            x="6" 
            y="60" 
            fontFamily="'Brush Script MT', 'Segoe Script', cursive, sans-serif" 
            fontStyle="italic" 
            fontSize="26" 
            fill="#F59E0B"
            stroke={isLight ? '#1E2227' : '#FFFFFF'}
            strokeWidth="1.2"
            paintOrder="stroke fill"
          >
            Gladius
          </text>
        </svg>
      </div>

      {/* Vertical Hairline Divider */}
      <div className={`h-9 w-[1.5px] ${isLight ? 'bg-gray-600' : 'bg-gray-300'} shrink-0`}></div>

      {/* Brand Text (Strictly single line) */}
      <div className="flex flex-col justify-center shrink-0">
        <span className={`text-sm sm:text-base font-extrabold tracking-tight leading-tight whitespace-nowrap ${isLight ? 'text-white' : 'text-[#1F2937]'}`}>
          TECHNO MECH TOOLINGS
        </span>
      </div>
    </Link>
  );
}
