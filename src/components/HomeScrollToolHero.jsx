import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Layers, 
  Crosshair, 
  Shield, 
  CheckCircle2, 
  ChevronDown,
  Maximize2
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

// 5 Sequential Precision Tool Manufacturing Phases (Scroll-driven)
const MANUFACTURING_STAGES = [
  {
    id: 'stage-1',
    stepNumber: '01',
    phaseName: 'PHASE 01: DIGITAL CAD BLUEPRINT',
    headline: 'DIGITAL SUB-MICRON BLUEPRINT',
    subheadline: 'ISO K10/K20 SUBSTRATE MATRIX',
    caption: 'Every precision tool begins as a digital sub-micron blueprint.',
    specsBadge: 'CAD / CAM • SUB-MICRON COORDINATES',
    description: 'Ultra-fine 0.5µm grain tungsten carbide core matrix defined with sub-micron 3D toolpath models, laying the exact geometry for high-feed aerospace machining.',
    image: '/images/scroll-stages/stage-1-substrate.jpg',
    stats: [
      { label: 'GRAIN SIZE', value: '0.5 µm' },
      { label: 'COBALT MATRIX', value: '10%' },
      { label: 'CORE HARDNESS', value: '92.5 HRA' }
    ],
    accentColor: '#00F0FF' // Cyber Cyan
  },
  {
    id: 'stage-2',
    stepNumber: '02',
    phaseName: 'PHASE 02: SHANK CALIBRATION',
    headline: 'CYLINDRICAL SHANK CALIBRATION',
    subheadline: 'DIN 6535 HA h6 RIGIDITY',
    caption: 'Ground to sub-micron concentricity with absolute core rigidity.',
    specsBadge: 'DIN 6535 HA • RUNOUT < 0.002mm',
    description: 'Precision cylindrical grinding finishes the shank to strict h6 tolerances, guaranteeing zero centrifugal deflection when clamped into hydraulic and shrink-fit toolholders.',
    image: '/images/scroll-stages/stage-2-shank.jpg',
    stats: [
      { label: 'TOLERANCE', value: 'h6 (0/-0.008mm)' },
      { label: 'TOTAL RUNOUT', value: '< 0.002 mm' },
      { label: 'CONCENTRICITY', value: '0.001 mm' }
    ],
    accentColor: '#38BDF8' // Precision Sky
  },
  {
    id: 'stage-3',
    stepNumber: '03',
    phaseName: 'PHASE 03: 5-AXIS FLUTE GRINDING',
    headline: '5-AXIS HELICAL FLUTE GRINDING',
    subheadline: '38°/41° VARIABLE PITCH HELIX',
    caption: 'Carved by German 5-axis CNC diamond wheels under synthetic oil flood.',
    specsBadge: 'SAACKE 5-AXIS • UNEQUAL PITCH',
    description: 'Dynamic unequal index flutes sculpted into the solid carbide blank at 38° and 41° variable pitch angles to break cutting harmonic frequencies and eradicate chatter.',
    image: '/images/scroll-stages/stage-3-fluting.jpg',
    stats: [
      { label: 'VARIABLE HELIX', value: '38° / 41°' },
      { label: 'FLUTE COUNT', value: '4 Flutes' },
      { label: 'COOLANT CHANNELS', value: 'Dual Helical' }
    ],
    accentColor: '#F5B800' // TMT Gold
  },
  {
    id: 'stage-4',
    stepNumber: '04',
    phaseName: 'PHASE 04: MIRROR LAUPPING & RELIEF',
    headline: 'MIRROR SUPERFINISH & END RELIEF',
    subheadline: 'Ra < 0.08µm FRICTIONLESS FLUTES',
    caption: 'Mirror-lapped flutes for frictionless chip flow in tough aerospace alloys.',
    specsBadge: 'Ra < 0.08µm • 15µm HONED EDGE',
    description: 'Flute troughs are superfinished with diamond paste to a mirror polish, preventing chip sticking and built-up edge in titanium, Inconel, and stainless steels.',
    image: '/images/scroll-stages/stage-4-geometry.jpg',
    stats: [
      { label: 'SURFACE FINISH', value: 'Ra < 0.08 µm' },
      { label: 'EDGE HONE (K)', value: '15 µm Radius' },
      { label: 'END TEETH', value: 'Center Cutting' }
    ],
    accentColor: '#E2E8F0' // Mirror Chrome
  },
  {
    id: 'stage-5',
    stepNumber: '05',
    phaseName: 'PHASE 05: PVD NANO-ARMOR (MASTERPIECE)',
    headline: 'TMT ULTRA GLADIUS 4FL',
    subheadline: 'MULTI-LAYER AlTiN PVD ARMOR',
    caption: 'Armored with multi-layer PVD nano-shield. Ready for hardened steel up to 68 HRC.',
    specsBadge: '3,400 HV • 1,100°C THERMAL BARRIER',
    description: 'Arc-evaporated violet-gold PVD nano-composite coating applied at 500°C provides extreme thermal shielding and wear resistance under high-feed dry and MQL milling.',
    image: '/images/scroll-stages/stage-5-coated.jpg',
    stats: [
      { label: 'PVD HARDNESS', value: '3,400 HV' },
      { label: 'MAX HEAT BARRIER', value: '1,100 °C' },
      { label: 'MAX WORKPIECE', value: '68 HRC' }
    ],
    accentColor: '#F5B800',
    hotspots: [
      {
        id: 'flutes',
        title: '38°/41° Variable Pitch Flutes',
        spec: 'Harmonic chatter suppression in deep cavity milling; mirror Ra < 0.08µm wall finish.',
        badge: 'DIN 6527 • Anti-Chatter',
        top: '38%',
        left: '52%'
      },
      {
        id: 'coating',
        title: 'Multi-Layer AlTiN Nano-Coat',
        spec: '3,400 HV micro-hardness with thermal barrier stability up to 1,100°C for dry and MQL cutting.',
        badge: '1,100°C Heat Shield',
        top: '49%',
        left: '68%'
      },
      {
        id: 'shank',
        title: 'DIN 6535 HA h6 Shank',
        spec: 'Sub-micron cylindrical grinding for shrink-fit and hydraulic chuck rigidity with runout < 0.002mm.',
        badge: 'h6 Precision Tolerance',
        top: '60%',
        left: '82%'
      }
    ]
  }
];

export default function HomeScrollToolHero({ onOpenVideoModal }) {
  const { openQuoteModal } = useQuote();
  const containerRef = useRef(null);
  
  // Real-time smooth scroll progress (0.0 to 1.0)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Track window scroll inside the tall pinning track
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // When the top of container touches top of viewport, scrollable distance is containerHeight - windowHeight
      const totalScrollable = containerHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      
      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Determine current active stage index (0 to 4)
  const stageIndex = useMemo(() => {
    const rawIndex = Math.min(Math.floor(scrollProgress * MANUFACTURING_STAGES.length), MANUFACTURING_STAGES.length - 1);
    return Math.max(0, rawIndex);
  }, [scrollProgress]);

  const currentStage = MANUFACTURING_STAGES[stageIndex];

  // Jump smoothly to a specific stage by scrolling the track
  const jumpToStage = (idx) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (idx / (MANUFACTURING_STAGES.length - 1)) * totalScrollable;
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360vh] sm:h-[400vh] bg-[#141518] text-white"
    >
      {/* =========================================================================
          STICKY FULL-SCREEN VIEWPORT (Pins while scrolling through manufacturing)
          ========================================================================= */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none">
        
        {/* =========================================================================
            BACKGROUND IMAGE SEQUENCE (Cross-Fading between 5 perfectly aligned stages)
            ========================================================================= */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {MANUFACTURING_STAGES.map((stage, idx) => {
            // Compute individual opacity based on scroll distance to this stage
            const stagePos = idx / (MANUFACTURING_STAGES.length - 1);
            const dist = Math.abs(scrollProgress - stagePos);
            // Smooth bell curve opacity fade between adjacent stages
            const opacity = Math.max(0, 1 - dist * 3.5);

            return (
              <div
                key={stage.id}
                style={{ opacity }}
                className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out will-change-transform"
              >
                <img
                  src={stage.image}
                  alt={stage.headline}
                  className="w-full h-full object-cover object-center lg:object-right filter contrast-105 brightness-95"
                  onError={(e) => {
                    e.currentTarget.src = '/images/scroll-stages/stage-5-coated.jpg';
                  }}
                />
              </div>
            );
          })}

          {/* Vignette Gradients for Text Readability */}
          {/* Left Dark Gradient Fade for Typography */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] xl:w-[50%] bg-gradient-to-r from-[#141518] via-[#141518]/90 to-transparent pointer-events-none z-10" />
          
          {/* Top Navbar Fade */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#141518] via-[#141518]/60 to-transparent pointer-events-none z-10" />

          {/* Bottom Dock Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#141518] via-[#141518]/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* =========================================================================
            TOP HUD HEADER: Active Phase Badge & Live Assembly Progress
            ========================================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 flex items-center justify-between pointer-events-auto">
          
          {/* Left: Manufacturing Process Pill */}
          <div className="flex items-center gap-2.5 bg-black/60 border border-white/15 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full shadow-lg">
            <span 
              className="w-2 h-2 rounded-full animate-pulse" 
              style={{ backgroundColor: currentStage.accentColor }} 
            />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-bold text-gray-200">
              {currentStage.phaseName}
            </span>
          </div>

          {/* Right: Live Progress & Assembly Gauge */}
          <div className="flex items-center gap-3 bg-black/60 border border-white/15 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg">
            <div className="text-[11px] sm:text-xs font-mono font-bold text-[#F5B800] tracking-wider">
              {Math.round(scrollProgress * 100)}% ASSEMBLED
            </div>
            {/* Mini Progress Track */}
            <div className="w-16 sm:w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#F5B800] transition-all duration-150 rounded-full"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            CENTER CONTENT: High-Impact Typography, Technical Specs & Captions
            ========================================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pointer-events-auto">
          <div className="max-w-xl lg:max-w-2xl py-6">
            
            {/* Phase Subtitle Badge */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span 
                className="px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider border"
                style={{ 
                  color: currentStage.accentColor,
                  borderColor: `${currentStage.accentColor}40`,
                  backgroundColor: `${currentStage.accentColor}15`
                }}
              >
                {currentStage.specsBadge}
              </span>
            </div>

            {/* Giant Cinematic Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-2 sm:mb-3 uppercase transition-all duration-300">
              {currentStage.headline}
            </h1>

            {/* Sub-headline */}
            <h2 
              className="text-base sm:text-lg md:text-xl font-bold tracking-wider uppercase mb-4 transition-colors duration-300"
              style={{ color: currentStage.accentColor }}
            >
              {currentStage.subheadline}
            </h2>

            {/* Refined Italicized Sub-caption (Hartwell reference style) */}
            <p className="text-base sm:text-lg text-gray-200 italic font-serif leading-relaxed mb-4 border-l-2 pl-3 sm:pl-4 transition-all duration-300"
               style={{ borderColor: currentStage.accentColor }}
            >
              "{currentStage.caption}"
            </p>

            {/* Technical Engineering Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mb-6 max-w-lg line-clamp-3 sm:line-clamp-none">
              {currentStage.description}
            </p>

            {/* Micro-Metrics Metric Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 max-w-md">
              {currentStage.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-black/50 border border-white/10 rounded-lg p-2 sm:p-2.5 backdrop-blur-md text-left"
                >
                  <div className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal('TMT Ultra Gladius 4FL Solid Carbide Tool')}
                className="inline-flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-[#141518] font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-lg shadow-[0_0_20px_rgba(245,184,0,0.35)] transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                REQUEST TOOLING QUOTE
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-lg backdrop-blur-md transition-all duration-200"
              >
                EXPLORE CATALOG
              </Link>

              {onOpenVideoModal && (
                <button
                  onClick={onOpenVideoModal}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white px-3 py-2 transition-colors cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <Play className="w-3 h-3 text-[#F5B800] fill-[#F5B800] ml-0.5" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider">5-Axis Video</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* =========================================================================
            HOTSPOTS LAYER (Active at Stage 5 - Final Tool Inspection)
            ========================================================================= */}
        {stageIndex === 4 && currentStage.hotspots && (
          <div className="absolute inset-0 pointer-events-none z-30">
            {currentStage.hotspots.map((spot) => {
              const isActive = activeHotspot === spot.id;

              return (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  {/* Concentric Pulsing Pin */}
                  <button
                    onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                    onMouseEnter={() => setActiveHotspot(spot.id)}
                    className="relative group p-2 cursor-pointer focus:outline-none"
                    aria-label={spot.title}
                  >
                    <span className="absolute inset-1 rounded-full bg-white/30 animate-ping opacity-60 pointer-events-none" />
                    <span className="relative w-7 h-7 rounded-full bg-black/80 border border-[#F5B800] backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(245,184,0,0.5)] group-hover:scale-125 transition-transform duration-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F5B800]" />
                    </span>
                  </button>

                  {/* Tooltip Card */}
                  {isActive && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 bg-[#1B1D22]/95 border border-[#F5B800]/40 rounded-xl p-4 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto text-left"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#F5B800] bg-[#F5B800]/15 px-2 py-0.5 rounded">
                          {spot.badge}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug mb-1">
                        {spot.title}
                      </h4>
                      <p className="text-[11px] text-gray-300 leading-relaxed font-normal">
                        {spot.spec}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            BOTTOM TIMELINE SCRUBBER & STAGE SELECTOR (Matches Video Scrollytelling)
            ========================================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6 pointer-events-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/70 border border-white/15 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 shadow-2xl">
            
            {/* Stage Selector Buttons (01 Substrate -> 05 PVD Coated) */}
            <div className="flex items-center justify-between sm:justify-start gap-1 sm:gap-2 w-full sm:w-auto overflow-x-auto">
              {MANUFACTURING_STAGES.map((s, idx) => {
                const isSelected = stageIndex === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => jumpToStage(idx)}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isSelected 
                        ? 'bg-[#F5B800] text-[#141518] shadow-md scale-105' 
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{s.stepNumber}</span>
                    <span className="hidden md:inline">{s.title || s.headline.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Center / Right Scroll Hint */}
            <div className="flex items-center gap-2 text-gray-400 text-[11px] font-mono">
              {scrollProgress < 0.95 ? (
                <>
                  <span className="animate-pulse text-[#F5B800]">● SCROLL TO FORGE TOOL</span>
                  <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#F5B800]" />
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">TOOL COMPLETE • SCROLL DOWN TO EXPLORE</span>
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
