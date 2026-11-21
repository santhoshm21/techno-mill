import React from 'react';

/**
 * High-tech CNC machining spindle hero graphic with sparkling metal cutting action
 */
export default function HeroVisual({ className = 'w-full h-full' }) {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="spindleLight" cx="65%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
          <stop offset="40%" stopColor="#1E293B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0B0F17" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="metalSpindle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="25%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#F1F5F9" />
          <stop offset="75%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="cutterShank" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="workpiece" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="40%" stopColor="#94A3B8" />
          <stop offset="80%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#F5B800" />
          <stop offset="70%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#7C2D12" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Dark Ambient Machine Chamber Background */}
      <rect width="800" height="600" fill="#0D1117" />
      <rect width="800" height="600" fill="url(#spindleLight)" />

      {/* Machine enclosure background structural elements */}
      <line x1="450" y1="0" x2="450" y2="600" stroke="#1E293B" strokeWidth="2" opacity="0.4" />
      <line x1="580" y1="0" x2="580" y2="600" stroke="#1E293B" strokeWidth="2" opacity="0.4" />
      <line x1="0" y1="420" x2="800" y2="420" stroke="#1E293B" strokeWidth="1.5" opacity="0.4" />

      {/* Large Machined Steel Ring Workpiece in Lower Right */}
      <g transform="translate(560, 420)">
        {/* Workpiece Base Outer Cylinders */}
        <ellipse cx="0" cy="70" rx="320" ry="140" fill="url(#workpiece)" stroke="#334155" strokeWidth="3" />
        <ellipse cx="0" cy="50" rx="300" ry="130" fill="#64748B" />
        <ellipse cx="0" cy="35" rx="270" ry="115" fill="url(#workpiece)" stroke="#94A3B8" strokeWidth="2" />
        <ellipse cx="0" cy="20" rx="240" ry="100" fill="#334155" />
        <ellipse cx="0" cy="10" rx="210" ry="85" fill="url(#workpiece)" />

        {/* Concentric Precision Toolpath Milling Grooves */}
        <ellipse cx="0" cy="5" rx="180" ry="72" fill="none" stroke="#F1F5F9" strokeWidth="1.5" opacity="0.7" />
        <ellipse cx="0" cy="2" rx="150" ry="60" fill="none" stroke="#94A3B8" strokeWidth="1.2" opacity="0.6" />
        <ellipse cx="0" cy="0" rx="120" ry="48" fill="none" stroke="#CBD5E1" strokeWidth="1.5" opacity="0.8" />
        <ellipse cx="0" cy="-2" rx="90" ry="36" fill="none" stroke="#F1F5F9" strokeWidth="2" opacity="0.8" />

        {/* Bolthole Pattern on Workpiece Flange */}
        <circle cx="-160" cy="30" r="10" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
        <circle cx="-90" cy="65" r="10" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
        <circle cx="0" cy="80" r="10" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
        <circle cx="90" cy="65" r="10" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
        <circle cx="160" cy="30" r="10" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
      </g>

      {/* Heavy-Duty 5-Axis CNC Spindle Head (Vertical Center-Right) */}
      <g transform="translate(560, 0)">
        {/* Spindle Housing */}
        <rect x="-100" y="-50" width="200" height="150" fill="url(#metalSpindle)" stroke="#1E293B" strokeWidth="2" />
        {/* Step 1 Housing */}
        <rect x="-85" y="100" width="170" height="40" fill="url(#metalSpindle)" stroke="#334155" strokeWidth="1.5" />
        {/* Step 2 Housing */}
        <rect x="-70" y="140" width="140" height="45" fill="url(#metalSpindle)" stroke="#1E293B" strokeWidth="1.5" />
        
        {/* Precision Hydraulic Tool Chuck / Collet */}
        <polygon points="-55,185 55,185 45,245 -45,245" fill="url(#metalSpindle)" stroke="#334155" strokeWidth="2" />
        <rect x="-42" y="245" width="84" height="20" fill="#1E293B" stroke="#475569" strokeWidth="1" />

        {/* Solid Carbide End Mill Tool protruding from chuck */}
        <rect x="-14" y="265" width="28" height="60" fill="url(#cutterShank)" stroke="#0F172A" strokeWidth="1.5" />
        <line x1="-6" y1="265" x2="-6" y2="325" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
        
        {/* Tool Helical Flutes */}
        <rect x="-12" y="325" width="24" height="55" fill="url(#metalSpindle)" stroke="#0F172A" strokeWidth="1.5" />
        <path d="M -12 325 Q 0 340 12 355" stroke="#F5B800" strokeWidth="3" fill="none" />
        <path d="M -12 345 Q 0 360 12 375" stroke="#F5B800" strokeWidth="3" fill="none" />
      </g>

      {/* Cutting Contact Point & High-Energy Sparks Explosion */}
      <g transform="translate(560, 380)">
        {/* Flash Core */}
        <circle cx="0" cy="0" r="30" fill="url(#sparkGlow)" filter="url(#glow)" />
        <circle cx="0" cy="0" r="10" fill="#FFFFFF" />

        {/* Dynamic Flying Fiery Sparks */}
        <line x1="0" y1="0" x2="-45" y2="-30" stroke="#F5B800" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-75" y2="-15" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-95" y2="10" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-60" y2="35" stroke="#F5B800" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-110" y2="-40" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-140" y2="-10" stroke="#F5B800" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-80" y2="-65" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        
        <line x1="0" y1="0" x2="35" y2="-40" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="0" x2="65" y2="-20" stroke="#F5B800" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="0" x2="85" y2="15" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="0" x2="110" y2="-35" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

        {/* Floating Ember Particles */}
        <circle cx="-65" cy="-45" r="2.5" fill="#FFFFFF" />
        <circle cx="-120" cy="-25" r="2" fill="#F5B800" />
        <circle cx="-150" cy="15" r="1.5" fill="#EA580C" />
        <circle cx="-90" cy="45" r="2" fill="#FDE047" />
        <circle cx="95" cy="-45" r="2.5" fill="#FFFFFF" />
        <circle cx="130" cy="-15" r="1.5" fill="#F5B800" />
      </g>

      {/* Atmospheric Mist & Vignette Overlay */}
      <rect width="800" height="600" fill="url(#spindleLight)" opacity="0.25" />
    </svg>
  );
}
