import React from 'react';

/**
 * Realistic vector renderings matching the tools in the screenshot:
 * 1. Face Milling Cutter
 * 2. Solid Carbide End Mill
 * 3. Twist Drill
 * 4. Turning Insert (Triangular)
 * 5. Special Tool
 */

export function FaceMillVisual({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="bodyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="45%" stopColor="#94A3B8" />
          <stop offset="85%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </radialGradient>
        <linearGradient id="insertGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="boreShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="120" cy="180" rx="80" ry="12" fill="#000000" opacity="0.15" />

      {/* Main Cutter Disc Body */}
      <g filter="url(#shadow)">
        <ellipse cx="120" cy="105" rx="82" ry="52" fill="url(#bodyGrad)" stroke="#334155" strokeWidth="2" />
        <ellipse cx="120" cy="100" rx="78" ry="48" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        
        {/* Flutes / Pockets around perimeter */}
        {/* Top Pocket & Insert */}
        <polygon points="110,54 130,54 126,68 114,68" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />
        {/* Top-Right */}
        <polygon points="160,65 178,74 168,85 152,78" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />
        {/* Right */}
        <polygon points="182,98 196,110 186,122 172,112" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />
        {/* Bottom-Right */}
        <polygon points="158,135 170,146 156,155 144,142" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />
        {/* Bottom */}
        <polygon points="110,146 130,146 128,158 112,158" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />
        {/* Bottom-Left */}
        <polygon points="70,135 84,142 72,155 58,146" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />
        {/* Left */}
        <polygon points="44,98 58,112 48,122 34,110" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />
        {/* Top-Left */}
        <polygon points="62,65 76,78 62,85 52,74" fill="url(#insertGold)" stroke="#78350F" strokeWidth="1" />

        {/* Center Pilot Bore Hole */}
        <ellipse cx="120" cy="100" rx="34" ry="22" fill="url(#boreShadow)" stroke="#475569" strokeWidth="1.5" />
        <ellipse cx="120" cy="103" rx="28" ry="17" fill="#0F172A" />
        
        {/* Drive Keyway slots */}
        <rect x="116" y="78" width="8" height="12" fill="#0F172A" rx="1" />
        <rect x="116" y="110" width="8" height="12" fill="#0F172A" rx="1" />

        {/* Retaining screw cap in center */}
        <ellipse cx="120" cy="103" rx="14" ry="9" fill="#475569" stroke="#64748B" strokeWidth="1" />
        <ellipse cx="120" cy="103" rx="6" ry="4" fill="#0F172A" />
      </g>
    </svg>
  );
}

export function EndMillVisual({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shankMetal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="30%" stopColor="#94A3B8" />
          <stop offset="70%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="fluteHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.2" />
        </linearGradient>
        <filter id="emShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="120" cy="130" rx="95" ry="10" fill="#000000" opacity="0.15" />

      {/* Angled Cylinder End Mill */}
      <g transform="rotate(-15 120 90)" filter="url(#emShadow)">
        {/* Shank */}
        <rect x="30" y="70" width="90" height="40" rx="2" fill="url(#shankMetal)" stroke="#334155" strokeWidth="1.5" />
        <ellipse cx="30" cy="90" rx="8" ry="20" fill="#475569" stroke="#1E293B" strokeWidth="1" />
        <line x1="30" y1="78" x2="120" y2="78" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
        <line x1="30" y1="98" x2="120" y2="98" stroke="#0F172A" strokeWidth="1" opacity="0.5" />

        {/* Shank to Flute Neck Transition */}
        <line x1="120" y1="68" x2="120" y2="112" stroke="#64748B" strokeWidth="1.5" />

        {/* Cutting Flutes Body */}
        <rect x="120" y="70" width="90" height="40" fill="url(#shankMetal)" stroke="#334155" strokeWidth="1.5" />
        
        {/* Spiral Helical Cuts */}
        <path d="M 120 70 Q 140 90 160 110" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.9" />
        <path d="M 120 70 Q 140 90 160 110" stroke="#0F172A" strokeWidth="1" fill="none" opacity="0.6" />
        
        <path d="M 145 70 Q 165 90 185 110" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.9" />
        <path d="M 145 70 Q 165 90 185 110" stroke="#0F172A" strokeWidth="1" fill="none" opacity="0.6" />
        
        <path d="M 170 70 Q 190 90 210 110" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.9" />
        
        {/* End Teeth Face */}
        <ellipse cx="210" cy="90" rx="6" ry="20" fill="#CBD5E1" stroke="#334155" strokeWidth="1.5" />
        <line x1="210" y1="70" x2="210" y2="110" stroke="#0F172A" strokeWidth="2" />
        <line x1="205" y1="90" x2="215" y2="90" stroke="#0F172A" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function TwistDrillVisual({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="drillShank" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="35%" stopColor="#94A3B8" />
          <stop offset="75%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="fluteDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id="drlShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="120" cy="130" rx="95" ry="10" fill="#000000" opacity="0.15" />

      {/* Angled Drill Body */}
      <g transform="rotate(-15 120 90)" filter="url(#drlShadow)">
        {/* Shank */}
        <rect x="25" y="74" width="75" height="32" rx="2" fill="url(#drillShank)" stroke="#334155" strokeWidth="1.5" />
        <ellipse cx="25" cy="90" rx="6" ry="16" fill="#475569" />
        <line x1="25" y1="80" x2="100" y2="80" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />

        {/* Flute Body with Spiral Flutes */}
        <rect x="100" y="74" width="105" height="32" fill="url(#drillShank)" stroke="#334155" strokeWidth="1.5" />

        {/* Spiral Flute Gullets */}
        <path d="M 100 74 C 115 85, 125 95, 140 106" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M 100 74 C 115 85, 125 95, 140 106" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        
        <path d="M 130 74 C 145 85, 155 95, 170 106" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M 130 74 C 145 85, 155 95, 170 106" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

        <path d="M 160 74 C 175 85, 185 95, 200 106" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M 160 74 C 175 85, 185 95, 200 106" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

        {/* Drill Conical Point 140° */}
        <polygon points="205,74 225,90 205,106" fill="url(#drillShank)" stroke="#334155" strokeWidth="1.5" />
        <line x1="205" y1="74" x2="225" y2="90" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="205" y1="106" x2="225" y2="90" stroke="#334155" strokeWidth="2" />
        <line x1="223" y1="88" x2="225" y2="90" stroke="#F5B800" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function TurningInsertVisual({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="insertMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="40%" stopColor="#94A3B8" />
          <stop offset="80%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <radialGradient id="insertGoldFace" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="60%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </radialGradient>
        <filter id="insShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="120" cy="140" rx="65" ry="10" fill="#000000" opacity="0.18" />

      {/* Triangular Carbide Insert Body with Chamfered Edges */}
      <g filter="url(#insShadow)">
        {/* Outer triangle base */}
        <polygon 
          points="120,38 182,132 58,132" 
          fill="url(#insertMetal)" 
          stroke="#334155" 
          strokeWidth="3" 
          strokeLinejoin="round" 
        />

        {/* Inner chipbreaker relief plateau */}
        <polygon 
          points="120,52 168,124 72,124" 
          fill="#475569" 
          stroke="#1E293B" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />

        {/* Chip groove accents along the 3 cutting edges */}
        <path d="M 120 45 L 176 128" stroke="#CBD5E1" strokeWidth="2" opacity="0.8" />
        <path d="M 64 128 L 176 128" stroke="#1E293B" strokeWidth="2" opacity="0.6" />
        <path d="M 120 45 L 64 128" stroke="#E2E8F0" strokeWidth="2" opacity="0.8" />

        {/* Center Screw Clamping Hole */}
        <circle cx="120" cy="102" r="16" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
        <circle cx="120" cy="102" r="11" fill="#1E293B" />
        <circle cx="120" cy="102" r="7" fill="#0F172A" />

        {/* Corner Radii Highlights (Nose Radius R0.4 / R0.8) */}
        <circle cx="120" cy="40" r="3" fill="#F5B800" />
        <circle cx="180" cy="131" r="3" fill="#F5B800" />
        <circle cx="60" cy="131" r="3" fill="#F5B800" />
      </g>
    </svg>
  );
}

export function SpecialToolVisual({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="specHolder" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="40%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <filter id="specShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.2" />
        </filter>
      </defs>

      <ellipse cx="120" cy="135" rx="85" ry="8" fill="#000000" opacity="0.15" />

      {/* Stepped Multi-Diameter Toolholder & Custom Tool */}
      <g transform="rotate(-15 120 90)" filter="url(#specShadow)">
        {/* Main Collet / Shank */}
        <rect x="40" y="72" width="60" height="36" rx="2" fill="url(#specHolder)" stroke="#334155" strokeWidth="1.5" />
        {/* Retention Knob groove */}
        <rect x="25" y="78" width="15" height="24" fill="#334155" stroke="#1E293B" strokeWidth="1" />
        {/* Step Collar */}
        <rect x="100" y="68" width="22" height="44" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
        {/* Extension Neck */}
        <rect x="122" y="76" width="45" height="28" fill="url(#specHolder)" stroke="#334155" strokeWidth="1.5" />
        {/* Stepped Profile Head */}
        <rect x="167" y="80" width="30" height="20" fill="#CBD5E1" stroke="#334155" strokeWidth="1.5" />
        {/* Carbide Pilot Tip */}
        <polygon points="197,84 212,90 197,96" fill="#F5B800" stroke="#B45309" strokeWidth="1" />
        
        {/* Highlights */}
        <line x1="40" y1="78" x2="195" y2="78" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      </g>
    </svg>
  );
}
