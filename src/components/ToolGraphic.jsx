import React from 'react';

/**
 * High-precision vector technical schematic representations for each tool category
 */
export default function ToolGraphic({ categoryId, className = 'w-full h-full' }) {
  switch (categoryId) {
    case 'solid-carbide-drills':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="carbide-body" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="35%" stopColor="#6B7280" />
              <stop offset="65%" stopColor="#4B5563" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
            <linearGradient id="coating-altin" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="50%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>
          {/* Shank */}
          <rect x="30" y="80" width="110" height="40" rx="2" fill="url(#carbide-body)" stroke="#111827" strokeWidth="1.5" />
          <line x1="30" y1="88" x2="140" y2="88" stroke="#9CA3AF" strokeWidth="0.7" opacity="0.6" />
          <line x1="30" y1="112" x2="140" y2="112" stroke="#111827" strokeWidth="1" opacity="0.6" />
          {/* Shank Chamfer */}
          <polygon points="30,80 20,86 20,114 30,120" fill="#374151" stroke="#111827" strokeWidth="1.5" />
          <line x1="140" y1="78" x2="140" y2="122" stroke="#F5B800" strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Flute Body with Spiral Grooves */}
          <rect x="140" y="80" width="130" height="40" fill="url(#coating-altin)" stroke="#78350F" strokeWidth="1.5" />
          {/* Flute Spiral Waves */}
          <path d="M 140 80 Q 165 100 190 120" stroke="#FDE68A" strokeWidth="3" fill="none" opacity="0.8" />
          <path d="M 175 80 Q 200 100 225 120" stroke="#FDE68A" strokeWidth="3" fill="none" opacity="0.8" />
          <path d="M 210 80 Q 235 100 260 120" stroke="#FDE68A" strokeWidth="3" fill="none" opacity="0.8" />
          <path d="M 245 80 Q 260 92 270 100" stroke="#FDE68A" strokeWidth="3" fill="none" opacity="0.8" />
          {/* Internal Coolant Holes (Represented by dashed lines) */}
          <line x1="20" y1="92" x2="270" y2="92" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.85" />
          <line x1="20" y1="108" x2="270" y2="108" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.85" />
          {/* Drill Point 140 deg */}
          <polygon points="270,80 295,100 270,120" fill="#92400E" stroke="#111827" strokeWidth="1.5" />
          <line x1="270" y1="80" x2="295" y2="100" stroke="#FDE68A" strokeWidth="2.5" />
          <line x1="270" y1="120" x2="295" y2="100" stroke="#FDE68A" strokeWidth="2.5" />
          {/* Dimension indicator */}
          <line x1="295" y1="65" x2="295" y2="135" stroke="#9CA3AF" strokeWidth="0.8" strokeDasharray="2 2" />
          <text x="240" y="55" fill="#4B5563" fontSize="10" fontFamily="monospace" fontWeight="600">140° POINT</text>
          <text x="50" y="145" fill="#6B7280" fontSize="9" fontFamily="monospace">Ø h6 SHANK</text>
        </svg>
      );

    case 'end-mills':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="em-shank" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="40%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
            <linearGradient id="em-flute" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          {/* Shank */}
          <rect x="30" y="80" width="115" height="40" rx="2" fill="url(#em-shank)" stroke="#111827" strokeWidth="1.5" />
          <polygon points="30,80 20,86 20,114 30,120" fill="#374151" stroke="#111827" strokeWidth="1.5" />
          <line x1="30" y1="88" x2="145" y2="88" stroke="#E5E7EB" strokeWidth="0.7" opacity="0.7" />
          {/* Flute Body */}
          <rect x="145" y="80" width="135" height="40" fill="url(#em-flute)" stroke="#0F172A" strokeWidth="1.5" />
          {/* 4-Flute Variable Helix curves */}
          <path d="M 145 80 C 170 95, 185 105, 210 120" stroke="#F5B800" strokeWidth="3" fill="none" />
          <path d="M 180 80 C 205 95, 220 105, 245 120" stroke="#F5B800" strokeWidth="3" fill="none" />
          <path d="M 215 80 C 240 95, 255 105, 280 120" stroke="#F5B800" strokeWidth="3" fill="none" />
          {/* End Mill flat face with 45° corner chamfer */}
          <polygon points="280,80 285,85 285,115 280,120" fill="#E2E8F0" stroke="#111827" strokeWidth="1.5" />
          <line x1="285" y1="85" x2="285" y2="115" stroke="#F5B800" strokeWidth="2.5" />
          <text x="210" y="55" fill="#4B5563" fontSize="10" fontFamily="monospace" fontWeight="600">35°/38° VARIABLE HELIX</text>
          <text x="50" y="145" fill="#6B7280" fontSize="9" fontFamily="monospace">4-FLUTE FLAT</text>
        </svg>
      );

    case 'ball-nose-cutters':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bn-shank" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="45%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <radialGradient id="ball-tip" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5B800" />
              <stop offset="70%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </radialGradient>
          </defs>
          <rect x="30" y="80" width="120" height="40" fill="url(#bn-shank)" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="30,80 20,86 20,114 30,120" fill="#374151" stroke="#111827" strokeWidth="1.5" />
          {/* Flute */}
          <rect x="150" y="80" width="110" height="40" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
          <path d="M 150 80 Q 180 100 210 120" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
          <path d="M 190 80 Q 220 100 250 120" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
          {/* Hemispherical Ball Nose Head */}
          <path d="M 260 80 A 20 20 0 0 1 260 120 Z" fill="url(#ball-tip)" stroke="#0F172A" strokeWidth="1.5" />
          <path d="M 260 80 Q 275 90 280 100 Q 275 110 260 120" stroke="#FDE68A" strokeWidth="2" fill="none" />
          <text x="220" y="55" fill="#4B5563" fontSize="10" fontFamily="monospace" fontWeight="600">TRUE BALL R ±0.003mm</text>
          <text x="50" y="145" fill="#6B7280" fontSize="9" fontFamily="monospace">DIE & MOLD 3D</text>
        </svg>
      );

    case 'bull-nose-cutters':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cr-shank" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="50%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
          </defs>
          <rect x="30" y="80" width="120" height="40" fill="url(#cr-shank)" stroke="#111827" strokeWidth="1.5" />
          <polygon points="30,80 20,86 20,114 30,120" fill="#374151" stroke="#111827" strokeWidth="1.5" />
          <rect x="150" y="80" width="115" height="40" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
          <path d="M 150 80 Q 185 100 220 120" stroke="#F5B800" strokeWidth="3" fill="none" />
          <path d="M 195 80 Q 230 100 265 120" stroke="#F5B800" strokeWidth="3" fill="none" />
          {/* Corner Radius Front Face */}
          <path d="M 265 80 L 273 80 A 6 6 0 0 1 279 86 L 279 114 A 6 6 0 0 1 273 120 L 265 120 Z" fill="#F59E0B" stroke="#111827" strokeWidth="1.5" />
          <text x="210" y="55" fill="#4B5563" fontSize="10" fontFamily="monospace" fontWeight="600">CORNER RADIUS (TOROIDAL)</text>
          <text x="50" y="145" fill="#6B7280" fontSize="9" fontFamily="monospace">HIGH FEED PROFILE</text>
        </svg>
      );

    case 'burnishing-drills':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bur-body" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="50%" stopColor="#6B7280" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          <rect x="30" y="80" width="105" height="40" fill="url(#bur-body)" stroke="#111827" strokeWidth="1.5" />
          <polygon points="30,80 20,86 20,114 30,120" fill="#374151" stroke="#111827" strokeWidth="1.5" />
          {/* Burnishing lands & multi-margin section */}
          <rect x="135" y="80" width="130" height="40" fill="#374151" stroke="#111827" strokeWidth="1.5" />
          {/* 3 Burnishing Margins Highlight */}
          <rect x="150" y="78" width="10" height="44" fill="#F5B800" stroke="#B45309" strokeWidth="0.8" />
          <rect x="190" y="78" width="10" height="44" fill="#F5B800" stroke="#B45309" strokeWidth="0.8" />
          <rect x="230" y="78" width="10" height="44" fill="#F5B800" stroke="#B45309" strokeWidth="0.8" />
          <line x1="135" y1="100" x2="265" y2="100" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Pilot Tip */}
          <polygon points="265,80 288,100 265,120" fill="#4B5563" stroke="#111827" strokeWidth="1.5" />
          <text x="180" y="55" fill="#4B5563" fontSize="10" fontFamily="monospace" fontWeight="600">3-MARGIN SIZING & BURNISH</text>
          <text x="50" y="145" fill="#6B7280" fontSize="9" fontFamily="monospace">Ra &lt; 0.4µm IN 1 SHOT</text>
        </svg>
      );

    case 'milling-cutters':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ts-metal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="50%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
          </defs>
          {/* Shank */}
          <rect x="30" y="80" width="110" height="40" fill="url(#ts-metal)" stroke="#111827" strokeWidth="1.5" />
          {/* Reduced Neck */}
          <rect x="140" y="90" width="75" height="20" fill="#4B5563" stroke="#1F2937" strokeWidth="1.2" />
          {/* T-Slot Head */}
          <rect x="215" y="70" width="45" height="60" rx="3" fill="#D97706" stroke="#111827" strokeWidth="1.5" />
          {/* Staggered Teeth lines */}
          <line x1="225" y1="70" x2="225" y2="130" stroke="#FEF3C7" strokeWidth="2" />
          <line x1="235" y1="70" x2="235" y2="130" stroke="#FEF3C7" strokeWidth="2" />
          <line x1="245" y1="70" x2="245" y2="130" stroke="#FEF3C7" strokeWidth="2" />
          <line x1="255" y1="70" x2="255" y2="130" stroke="#FEF3C7" strokeWidth="2" />
          <text x="180" y="55" fill="#4B5563" fontSize="10" fontFamily="monospace" fontWeight="600">SOLID T-SLOT & KEYWAY</text>
          <text x="50" y="145" fill="#6B7280" fontSize="9" fontFamily="monospace">HIGH RIGIDITY MONOLITHIC</text>
        </svg>
      );

    case 'custom-tooling':
    default:
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cust-shank" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <rect x="30" y="76" width="90" height="48" fill="url(#cust-shank)" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="30,76 20,84 20,116 30,124" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
          {/* Step 1 */}
          <rect x="120" y="82" width="50" height="36" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
          {/* Step 2 */}
          <rect x="170" y="87" width="50" height="26" fill="#D97706" stroke="#1E293B" strokeWidth="1.5" />
          {/* Step 3 & Chamfer */}
          <polygon points="220,92 250,92 260,100 250,108 220,108" fill="#F5B800" stroke="#B45309" strokeWidth="1.5" />
          <line x1="170" y1="70" x2="170" y2="130" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="220" y1="75" x2="220" y2="125" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 2" />
          <text x="180" y="55" fill="#4B5563" fontSize="10" fontFamily="monospace" fontWeight="600">MULTI-STEP BESPOKE GEOMETRY</text>
          <text x="50" y="145" fill="#6B7280" fontSize="9" fontFamily="monospace">MANUFACTURED TO BLUEPRINT</text>
        </svg>
      );
  }
}
