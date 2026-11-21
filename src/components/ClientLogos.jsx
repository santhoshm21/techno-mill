import React from 'react';

/**
 * Clean authentic SVG brand logos matching the screenshot:
 * TATA, Mahindra, SIEMENS, BOSCH, TOYOTA, HYUNDAI
 */

export function TataLogo({ className = 'h-8' }) {
  return (
    <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text x="70" y="28" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" letterSpacing="4" fill="#334155">
        TATA
      </text>
    </svg>
  );
}

export function MahindraLogo({ className = 'h-8' }) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Twin peaks icon */}
      <path d="M 30 26 L 42 12 L 50 20 L 58 12 L 70 26" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="115" y="27" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="18" letterSpacing="1" fill="#334155">
        Mahindra
      </text>
    </svg>
  );
}

export function SiemensLogo({ className = 'h-8' }) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text x="80" y="28" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="22" letterSpacing="2" fill="#00646E">
        SIEMENS
      </text>
    </svg>
  );
}

export function BoschLogo({ className = 'h-8' }) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bosch armature ring symbol */}
      <circle cx="28" cy="20" r="14" stroke="#DC2626" strokeWidth="2.5" />
      <circle cx="28" cy="20" r="5" stroke="#DC2626" strokeWidth="2" />
      <line x1="28" y1="6" x2="28" y2="34" stroke="#DC2626" strokeWidth="2" />
      <text x="96" y="28" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5" fill="#1E293B">
        BOSCH
      </text>
    </svg>
  );
}

export function ToyotaLogo({ className = 'h-8' }) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Toyota Oval */}
      <ellipse cx="25" cy="20" rx="15" ry="11" stroke="#DC2626" strokeWidth="2" />
      <ellipse cx="25" cy="18" rx="6" ry="9" stroke="#DC2626" strokeWidth="1.8" />
      <ellipse cx="25" cy="16" rx="10" ry="4" stroke="#DC2626" strokeWidth="1.8" />
      <text x="95" y="27" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20" letterSpacing="2" fill="#334155">
        TOYOTA
      </text>
    </svg>
  );
}

export function HyundaiLogo({ className = 'h-8' }) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Hyundai oval with slanted H */}
      <ellipse cx="28" cy="20" rx="16" ry="11" stroke="#1E40AF" strokeWidth="2" />
      <path d="M 20 26 L 24 14 M 36 26 L 32 14 M 22 20 L 34 20" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
      <text x="96" y="27" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="18" letterSpacing="2" fill="#1E40AF">
        HYUNDAI
      </text>
    </svg>
  );
}
