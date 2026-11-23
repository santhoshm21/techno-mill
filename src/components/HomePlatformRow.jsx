import React from 'react';
import { Link } from 'react-router-dom';

// =========================================================================
// 9 REALISTIC STANDING CUTTING TOOL VECTOR VISUALS (100% TRANSPARENT BG)
// =========================================================================

export function StandingTwistDrill({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="drillShankGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="35%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="fluteDarkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Shank */}
      <rect x="36" y="80" width="28" height="72" rx="2" fill="url(#drillShankGrad)" stroke="#475569" strokeWidth="1" />
      <line x1="42" y1="80" x2="42" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      <line x1="56" y1="80" x2="56" y2="152" stroke="#1E293B" strokeWidth="1" opacity="0.4" />
      {/* Laser Etch */}
      <text x="50" y="125" fontSize="5" fill="#334155" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 50 125)">
        TMT Ø10.0
      </text>
      {/* Flute Body */}
      <rect x="36" y="24" width="28" height="58" fill="url(#drillShankGrad)" stroke="#475569" strokeWidth="1" />
      {/* Spiral Flute Grooves */}
      <path d="M 36 28 Q 50 42 64 56" stroke="url(#fluteDarkGrad)" strokeWidth="8" strokeLinecap="round" />
      <path d="M 36 28 Q 50 42 64 56" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 36 50 Q 50 64 64 78" stroke="url(#fluteDarkGrad)" strokeWidth="8" strokeLinecap="round" />
      <path d="M 36 50 Q 50 64 64 78" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
      {/* 140° Conical Drill Tip */}
      <polygon points="36,24 50,6 64,24" fill="url(#drillShankGrad)" stroke="#475569" strokeWidth="1" />
      <line x1="36" y1="24" x2="50" y2="6" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="64" y1="24" x2="50" y2="6" stroke="#334155" strokeWidth="1.5" />
      <circle cx="50" cy="7" r="1.5" fill="#F5B800" />
    </svg>
  );
}

export function StandingEndMill({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="emBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="40%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="emFluteCut" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="60%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>
      {/* Shank */}
      <rect x="36" y="82" width="28" height="70" rx="2" fill="url(#emBodyGrad)" stroke="#475569" strokeWidth="1" />
      <line x1="43" y1="82" x2="43" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      {/* 4-Flute Helical Cutting Head */}
      <rect x="36" y="16" width="28" height="68" fill="url(#emBodyGrad)" stroke="#475569" strokeWidth="1" />
      {/* Flutes */}
      <path d="M 36 20 Q 50 36 64 52" stroke="url(#emFluteCut)" strokeWidth="6" strokeLinecap="round" />
      <path d="M 36 20 Q 50 36 64 52" stroke="#E2E8F0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 36 44 Q 50 60 64 76" stroke="url(#emFluteCut)" strokeWidth="6" strokeLinecap="round" />
      <path d="M 36 44 Q 50 60 64 76" stroke="#E2E8F0" strokeWidth="1.2" strokeLinecap="round" />
      {/* Square End Teeth Face */}
      <rect x="36" y="14" width="28" height="4" fill="#CBD5E1" stroke="#334155" strokeWidth="1" />
      <polygon points="36,14 43,18 43,14" fill="#1E293B" />
      <polygon points="57,14 64,18 64,14" fill="#1E293B" />
      <line x1="36" y1="14" x2="64" y2="14" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

export function StandingBurnishingDrill({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="goldBurnish" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="burnishBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="45%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Main Shank */}
      <rect x="36" y="85" width="28" height="68" rx="2" fill="url(#burnishBody)" stroke="#475569" strokeWidth="1" />
      <line x1="43" y1="85" x2="43" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      {/* Burnishing Mirror Pads Band */}
      <rect x="34" y="48" width="32" height="38" rx="1" fill="url(#goldBurnish)" stroke="#92400E" strokeWidth="1" />
      {/* Polished Mirror Rollers/Beads on Pad */}
      <line x1="38" y1="52" x2="38" y2="82" stroke="#FEF9C3" strokeWidth="2.5" />
      <line x1="46" y1="52" x2="46" y2="82" stroke="#FEF9C3" strokeWidth="2.5" />
      <line x1="54" y1="52" x2="54" y2="82" stroke="#FEF9C3" strokeWidth="2.5" />
      <line x1="62" y1="52" x2="62" y2="82" stroke="#78350F" strokeWidth="2.5" />
      {/* Stepped Front Pilot Drill */}
      <rect x="40" y="16" width="20" height="34" fill="url(#burnishBody)" stroke="#475569" strokeWidth="1" />
      <polygon points="40,16 50,4 60,16" fill="url(#burnishBody)" stroke="#475569" strokeWidth="1" />
      <line x1="40" y1="16" x2="50" y2="4" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="50" cy="5" r="1.5" fill="#F5B800" />
    </svg>
  );
}

export function StandingMachineReamer({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="reamerSteel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="45%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Shank */}
      <rect x="36" y="80" width="28" height="72" rx="2" fill="url(#reamerSteel)" stroke="#475569" strokeWidth="1" />
      <line x1="42" y1="80" x2="42" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      {/* Multi-Flute Straight Reamer Section */}
      <rect x="36" y="18" width="28" height="64" fill="url(#reamerSteel)" stroke="#475569" strokeWidth="1" />
      {/* Fine Ground Flute Margins */}
      <line x1="41" y1="18" x2="41" y2="80" stroke="#0F172A" strokeWidth="2" />
      <line x1="43" y1="18" x2="43" y2="80" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="49" y1="18" x2="49" y2="80" stroke="#0F172A" strokeWidth="2" />
      <line x1="51" y1="18" x2="51" y2="80" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="57" y1="18" x2="57" y2="80" stroke="#0F172A" strokeWidth="2" />
      <line x1="59" y1="18" x2="59" y2="80" stroke="#FFFFFF" strokeWidth="1" />
      {/* 45° Lead Chamfer Face */}
      <polygon points="36,18 40,12 60,12 64,18" fill="#CBD5E1" stroke="#334155" strokeWidth="1" />
      {/* Central Through-Coolant Hole */}
      <circle cx="50" cy="12" r="3.5" fill="#0F172A" stroke="#475569" strokeWidth="0.8" />
      <circle cx="50" cy="12" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

export function StandingTwoStepDrill({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="stepMetal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="40%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Main Shank */}
      <rect x="36" y="86" width="28" height="66" rx="2" fill="url(#stepMetal)" stroke="#475569" strokeWidth="1" />
      <line x1="42" y1="86" x2="42" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      {/* Step 2 Major Diameter Flute */}
      <rect x="36" y="44" width="28" height="44" fill="url(#stepMetal)" stroke="#475569" strokeWidth="1" />
      <line x1="44" y1="44" x2="56" y2="86" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <line x1="44" y1="44" x2="56" y2="86" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      {/* 90° Transition Step Shoulder */}
      <polygon points="36,44 42,38 58,38 64,44" fill="#94A3B8" stroke="#334155" strokeWidth="1" />
      {/* Step 1 Minor Pilot Drill */}
      <rect x="42" y="16" width="16" height="24" fill="url(#stepMetal)" stroke="#475569" strokeWidth="1" />
      <polygon points="42,16 50,6 58,16" fill="url(#stepMetal)" stroke="#475569" strokeWidth="1" />
      <line x1="42" y1="16" x2="50" y2="6" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="50" cy="7" r="1.2" fill="#F5B800" />
    </svg>
  );
}

export function StandingRegroundTool({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="regrindSteel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="45%" stopColor="#F8FAFC" />
          <stop offset="75%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Shank */}
      <rect x="36" y="80" width="28" height="72" rx="2" fill="url(#regrindSteel)" stroke="#475569" strokeWidth="1" />
      {/* Re-ground Flute Body */}
      <rect x="36" y="22" width="28" height="60" fill="url(#regrindSteel)" stroke="#475569" strokeWidth="1" />
      <path d="M 36 26 Q 50 42 64 58" stroke="#1E293B" strokeWidth="7" strokeLinecap="round" />
      <path d="M 36 26 Q 50 42 64 58" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Re-ground 5-Axis Split Point Facets */}
      <polygon points="36,22 50,6 64,22" fill="#F1F5F9" stroke="#0284C7" strokeWidth="1.2" />
      {/* Primary & Secondary Relief Facet Lines */}
      <line x1="50" y1="6" x2="42" y2="22" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="50" y1="6" x2="58" y2="22" stroke="#0284C7" strokeWidth="1.2" />
      <circle cx="50" cy="7" r="1.5" fill="#38BDF8" />
      {/* Certification Badge */}
      <text x="50" y="115" fontSize="4.5" fill="#0284C7" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" transform="rotate(-90 50 115)">
        SAACKE OEM REGRIND
      </text>
    </svg>
  );
}

export function StandingPVDCoatedMill({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pvdGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7E22CE" />
          <stop offset="35%" stopColor="#C084FC" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="silverShank" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="45%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Silver Shank */}
      <rect x="36" y="80" width="28" height="72" rx="2" fill="url(#silverShank)" stroke="#475569" strokeWidth="1" />
      <line x1="43" y1="80" x2="43" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      {/* PVD Coated Cutting Flutes (Iridescent AlTiN Violet/Gold) */}
      <rect x="36" y="16" width="28" height="66" fill="url(#pvdGrad)" stroke="#581C87" strokeWidth="1" />
      <path d="M 36 20 Q 50 36 64 52" stroke="#3B0764" strokeWidth="6" strokeLinecap="round" />
      <path d="M 36 20 Q 50 36 64 52" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 36 44 Q 50 60 64 76" stroke="#3B0764" strokeWidth="6" strokeLinecap="round" />
      <path d="M 36 44 Q 50 60 64 76" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" />
      {/* Square End Teeth */}
      <rect x="36" y="14" width="28" height="4" fill="#FDE68A" stroke="#B45309" strokeWidth="1" />
      <line x1="36" y1="14" x2="64" y2="14" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

export function StandingFormTool({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="formSteel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="40%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Shank */}
      <rect x="36" y="90" width="28" height="62" rx="2" fill="url(#formSteel)" stroke="#475569" strokeWidth="1" />
      <line x1="42" y1="90" x2="42" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      {/* Collet Collar */}
      <rect x="34" y="80" width="32" height="12" fill="#475569" stroke="#1E293B" strokeWidth="1" />
      {/* Custom Dovetail & Form Head */}
      <polygon points="30,42 36,78 64,78 70,42" fill="url(#formSteel)" stroke="#334155" strokeWidth="1" />
      {/* Multi-angle Profiling Teeth */}
      <polygon points="26,20 30,42 70,42 74,20" fill="#CBD5E1" stroke="#334155" strokeWidth="1" />
      <line x1="26" y1="20" x2="74" y2="20" stroke="#F5B800" strokeWidth="2" />
      <line x1="30" y1="42" x2="70" y2="42" stroke="#334155" strokeWidth="1.2" />
      <circle cx="50" cy="30" r="3" fill="#0F172A" />
    </svg>
  );
}

export function StandingMicroDrill({ className = 'w-20 h-32' }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="microShank" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="40%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Heavy 3.175mm Reinforced Shank */}
      <rect x="34" y="65" width="32" height="87" rx="2" fill="url(#microShank)" stroke="#475569" strokeWidth="1" />
      <line x1="42" y1="65" x2="42" y2="152" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
      {/* Tapered Neck Transition */}
      <polygon points="34,65 47,40 53,40 66,65" fill="#64748B" stroke="#334155" strokeWidth="1" />
      {/* Fine Micro Drill Needle (Ø0.5 mm) */}
      <rect x="48" y="10" width="4" height="32" fill="#0F172A" stroke="#38BDF8" strokeWidth="0.8" />
      <polygon points="48,10 50,4 52,10" fill="#38BDF8" />
      {/* Micro Tip Laser Spot */}
      <circle cx="50" cy="5" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

// =========================================================================
// MAIN HOME PLATFORM ROW COMPONENT (MATCHING 1ST REFERENCE IMAGE UI)
// =========================================================================

export default function HomePlatformRow() {
  const platforms = [
    {
      id: 'drills',
      badgeBrand: 'TMT CARBIDE',
      badgeCategory: 'HIGH-FEED DRILLS',
      badgeColor: 'text-blue-600',
      dotColor: 'bg-blue-600',
      pillStyle: 'text-blue-600 bg-blue-50 border border-blue-200/60',
      title: 'Solid Carbide Drills',
      spec: 'DIN 6537 / 30xD',
      link: '/products',
      Visual: StandingTwistDrill
    },
    {
      id: 'endmills',
      badgeBrand: 'VIBRA-DAMP',
      badgeCategory: 'SOLID END MILLS',
      badgeColor: 'text-emerald-600',
      dotColor: 'bg-emerald-600',
      pillStyle: 'text-emerald-600 bg-emerald-50 border border-emerald-200/60',
      title: 'Solid End Mills',
      spec: '2 – 6 FLUTES',
      link: '/products',
      Visual: StandingEndMill
    },
    {
      id: 'burnishing',
      badgeBrand: 'MIRROR-BORE',
      badgeCategory: 'BURNISHING TOOLS',
      badgeColor: 'text-amber-600',
      dotColor: 'bg-amber-600',
      pillStyle: 'text-amber-600 bg-amber-50 border border-amber-200/60',
      title: 'Burnishing Drills',
      spec: 'RA < 0.2µm FINISH',
      link: '/products',
      Visual: StandingBurnishingDrill
    },
    {
      id: 'reamers',
      badgeBrand: 'SUB-MICRON',
      badgeCategory: 'MACHINE REAMERS',
      badgeColor: 'text-indigo-600',
      dotColor: 'bg-indigo-600',
      pillStyle: 'text-indigo-600 bg-indigo-50 border border-indigo-200/60',
      title: 'Machine Reamers',
      spec: 'IT6 TOLERANCE',
      link: '/products',
      Visual: StandingMachineReamer
    },
    {
      id: 'stepdrills',
      badgeBrand: 'MULTI-STEP',
      badgeCategory: 'TWO-STEP DRILLS',
      badgeColor: 'text-purple-600',
      dotColor: 'bg-purple-600',
      pillStyle: 'text-purple-600 bg-purple-50 border border-purple-200/60',
      title: 'Two-Step Drills',
      spec: 'SINGLE-PASS DRILL',
      link: '/products',
      Visual: StandingTwoStepDrill
    },
    {
      id: 'regrinding',
      badgeBrand: 'SAACKE 5-AXIS',
      badgeCategory: 'TOOL RECONDITIONING',
      badgeColor: 'text-rose-600',
      dotColor: 'bg-rose-600',
      pillStyle: 'text-rose-600 bg-rose-50 border border-rose-200/60',
      title: '5-Axis Regrinding',
      spec: 'SAVE UP TO 60%',
      link: '/contact',
      Visual: StandingRegroundTool
    },
    {
      id: 'pvd',
      badgeBrand: 'THIN-FILM PVD',
      badgeCategory: 'AlTiN & DLC COATINGS',
      badgeColor: 'text-teal-600',
      dotColor: 'bg-teal-600',
      pillStyle: 'text-teal-600 bg-teal-50 border border-teal-200/60',
      title: 'PVD Thin-Film',
      spec: '3,400 HV HARDNESS',
      link: '/contact',
      Visual: StandingPVDCoatedMill
    },
    {
      id: 'formtools',
      badgeBrand: 'CUSTOM CAD',
      badgeCategory: 'SPECIAL FORM TOOLS',
      badgeColor: 'text-amber-700',
      dotColor: 'bg-amber-700',
      pillStyle: 'text-amber-700 bg-amber-50 border border-amber-200/60',
      title: 'Custom Form Tools',
      spec: 'DIRECT FROM CAD',
      link: '/contact',
      Visual: StandingFormTool
    },
    {
      id: 'special',
      badgeBrand: 'AERO-PRECISION',
      badgeCategory: 'SPECIAL AEROSPACE',
      badgeColor: 'text-sky-700',
      dotColor: 'bg-sky-700',
      pillStyle: 'text-sky-700 bg-sky-50 border border-sky-200/60',
      title: 'Aerospace Tools',
      spec: 'AEROSPACE GRADE',
      link: '/products',
      Visual: StandingMicroDrill
    }
  ];

  const handleScroll = (e, targetHash) => {
    e.preventDefault();
    const el = document.querySelector(targetHash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', targetHash);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Exact replica of 1st input image UI reference */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
          <p className="font-serif text-xl sm:text-2xl text-[#111827] font-normal tracking-wide mb-1 sm:mb-2">
            Choose From
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] tracking-tight leading-tight">
            High Performance Tooling Platforms
          </h2>
        </div>

        {/* 9-Column Platform Row matching 1st input image (NO BOXES, NO BORDERS, SEAMLESS WHITE) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-5 lg:gap-2.5">
          {platforms.map((platform) => {
            const ToolVisual = platform.Visual;
            return (
              <Link
                key={platform.id}
                to={platform.link}
                className="group flex flex-col items-center justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 p-1 select-none"
              >
                {/* 1. Top Brand / Feature Badge */}
                <div className="flex flex-col items-center mb-2.5 min-h-[38px] justify-center text-center">
                  <span className={`text-[10.5px] font-black tracking-wider uppercase flex items-center gap-1 leading-tight ${platform.badgeColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${platform.dotColor}`}></span>
                    {platform.badgeBrand}
                  </span>
                  <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 leading-none">
                    {platform.badgeCategory}
                  </span>
                </div>

                {/* 2. Standing 3D Tool Graphic with Soft Ground Pedestal Shadow */}
                <div className="h-28 sm:h-32 md:h-36 w-full flex flex-col items-center justify-center relative my-1">
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    <ToolVisual className="w-16 h-28 sm:w-20 sm:h-32 drop-shadow-sm" />
                  </div>
                  {/* Soft Ground Elliptical Shadow */}
                  <div className="w-16 sm:w-20 h-2 bg-black/15 rounded-full blur-[2px] mt-1 transition-all duration-300 group-hover:w-24 group-hover:bg-black/25"></div>
                </div>

                {/* 3. Pedestal Specification Pill */}
                <div className="my-2 text-center">
                  <span className={`text-[8.5px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full ${platform.pillStyle}`}>
                    {platform.spec}
                  </span>
                </div>

                {/* 4. Bottom Main Category Title */}
                <div className="text-center mt-0.5 w-full">
                  <h4 className="font-serif font-bold text-xs sm:text-[13px] md:text-[14px] text-[#1E3A8A] group-hover:text-[#F5B800] transition-colors leading-tight text-center">
                    {platform.title}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
