import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Layers,
  Target,
  ShieldCheck,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  MapPin,
  Play
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import {
  StandingTwistDrill,
  StandingEndMill,
  StandingBurnishingDrill,
  StandingMachineReamer,
  StandingTwoStepDrill,
  StandingFormTool,
  StandingPVDCoatedMill
} from './HomePlatformRow';

export default function HomeKumoHero({ onOpenVideoModal }) {
  const { openQuoteModal } = useQuote();

  // 6 Core Tooling Categories for Techno Mech Toolings
  const toolCategories = [
    {
      id: 'endmills',
      name: 'High-Performance End Mills',
      shortName: 'Carbide End Mill',
      subtitle: 'AlTiN 4-Flute Variable Helix',
      spec: 'DIN 6527 • h6 Precision',
      priceBadge: 'Ø3.0 – Ø25.0 mm',
      accentColor: '#38BDF8',
      glow: 'rgba(56, 189, 248, 0.35)',
      ringGlow: 'shadow-[0_0_35px_rgba(56,189,248,0.45)]',
      link: '/products?category=endmills',
      Visual: StandingEndMill
    },
    {
      id: 'drills',
      name: 'Solid Carbide Drills',
      shortName: 'Through-Coolant Drill',
      subtitle: 'DIN 6537 140° Split Point',
      spec: '5xD – 30xD Deep Hole',
      priceBadge: 'Ø1.0 – Ø25.0 mm',
      accentColor: '#F5B800',
      glow: 'rgba(245, 184, 0, 0.35)',
      ringGlow: 'shadow-[0_0_35px_rgba(245,184,0,0.45)]',
      link: '/products?category=drills',
      Visual: StandingTwistDrill
    },
    {
      id: 'burnishing',
      name: 'Burnishing Drills',
      shortName: 'Burnishing Drill',
      subtitle: 'Single-Pass Hole Sizing & Mirror Finish',
      spec: 'Ra < 0.2µm Mirror Finish',
      priceBadge: 'IT6 Automotive Tolerance',
      accentColor: '#F97316',
      glow: 'rgba(249, 115, 22, 0.35)',
      ringGlow: 'shadow-[0_0_35px_rgba(249,115,22,0.45)]',
      link: '/products?category=burnishing',
      Visual: StandingBurnishingDrill
    },
    {
      id: 'reamers',
      name: 'Machine Reamers',
      shortName: 'Machine Reamer',
      subtitle: 'Sub-Micron Bore Sizing',
      spec: 'IT6 / Sub-Micron Precision',
      priceBadge: 'Helical & Straight Flute',
      accentColor: '#A855F7',
      glow: 'rgba(168, 85, 247, 0.35)',
      ringGlow: 'shadow-[0_0_35px_rgba(168,85,247,0.45)]',
      link: '/products?category=reamers',
      Visual: StandingMachineReamer
    },
    {
      id: 'stepdrills',
      name: 'Two-Step Multi-Drills',
      shortName: 'Step Drill',
      subtitle: 'Multi-Diameter Drill & Chamfer',
      spec: 'Single-Pass Multi-Op',
      priceBadge: 'Aerospace & Automotive',
      accentColor: '#EC4899',
      glow: 'rgba(236, 72, 153, 0.35)',
      ringGlow: 'shadow-[0_0_35px_rgba(236,72,153,0.45)]',
      link: '/products?category=drills',
      Visual: StandingTwoStepDrill
    },
    {
      id: 'formtools',
      name: 'Custom Form Tools',
      shortName: 'Custom Form Tool',
      subtitle: 'Engineered Directly From Workpiece CAD',
      spec: 'Custom Blueprint Profiles',
      priceBadge: 'German SAACKE 5-Axis',
      accentColor: '#10B981',
      glow: 'rgba(16, 185, 129, 0.35)',
      ringGlow: 'shadow-[0_0_35px_rgba(16,185,129,0.45)]',
      link: '/contact',
      Visual: StandingFormTool
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = toolCategories.length;
  const currentTool = toolCategories[activeIdx];
  const CenterVisual = currentTool.Visual;

  // Staggered floating wave offsets for each card (6 unique phases)
  const floatDelays = ['0s', '0.7s', '1.4s', '2.1s', '2.8s', '3.5s'];

  // Auto-advance every 4.5 seconds when not interacting
  useEffect(() => {
    if (isHovered || isDragging) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, isDragging, total]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch & Mouse Drag to Rotate Carousel
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    setDragOffset(0);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - dragStartX.current;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 60) {
      handlePrev();
    } else if (dragOffset < -60) {
      handleNext();
    }
    setDragOffset(0);
  };

  // Spark particles generator (20 particles with varying speeds and delays)
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 5.2 + 3) % 96}%`,
    duration: `${3.5 + (i % 5) * 0.8}s`,
    delay: `${(i * 0.4) % 4}s`,
    size: i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1',
    color: i % 2 === 0 ? 'bg-[#F5B800]' : 'bg-[#38BDF8]'
  }));

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) handleDragEnd();
      }}
      className="relative w-full min-h-[94vh] sm:min-h-screen bg-[#070A11] text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* -----------------------------------------------------------------
          EMBEDDED CSS KEYFRAMES FOR CONTINUOUS MOTION & FLOATING PHYSICS
          ----------------------------------------------------------------- */}
      <style>{`
        @keyframes kumoFloatWave {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(1.5deg);
          }
        }
        @keyframes kumoSparkDrift {
          0% {
            transform: translateY(100px) scale(0.6);
            opacity: 0;
          }
          20% {
            opacity: 0.9;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-400px) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes kumoCenterPulse {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
        @keyframes kumoShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>

      {/* -----------------------------------------------------------------
          BACKGROUND ATMOSPHERE: Dynamic Aura, Particles & Precision Grid
          ----------------------------------------------------------------- */}
      {/* Glowing Aura Matching Active Tool */}
      <div
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[550px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000 ease-out"
        style={{ background: currentTool.glow }}
      />

      {/* Subtle Engineering Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 20 Ambient Floating Sparks / Carbide Micro-Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full blur-[0.5px] ${p.size} ${p.color}`}
            style={{
              left: p.left,
              bottom: '15%',
              animation: `kumoSparkDrift ${p.duration} infinite ease-in-out`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>

      {/* =====================================================================
          1. TOP NAVIGATION BAR (Exact replica of video's top bar)
          ===================================================================== */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 flex items-center justify-between">
        
        {/* Left: Brand Logo in Video Style */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-[#F5B800] text-[#070A11] font-black flex items-center justify-center text-sm tracking-tighter shadow-[0_0_20px_rgba(245,184,0,0.6)] group-hover:scale-105 transition-transform">
            TMT
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-sm sm:text-base tracking-wider text-white uppercase leading-none">
              TECHNO MECH
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-[#F5B800] uppercase leading-tight">
              PRECISION TOOLINGS
            </span>
          </div>
        </Link>

        {/* Center: Floating Dark Pill Toolbar (Exact video pattern) */}
        <div className="flex items-center bg-[#151B26]/85 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-5 py-2 shadow-2xl gap-3 sm:gap-5">
          <Link
            to="/products"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer"
            title="Browse Products Catalog"
          >
            <Grid className="w-4 h-4" />
          </Link>
          <Link
            to="/#facility"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer"
            title="Manufacturing Facility"
          >
            <Layers className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer"
            title="Re-Sharpening & Recoating Services"
          >
            <Target className="w-4 h-4" />
          </Link>
          <Link
            to="/#clients"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer"
            title="Certifications & ISO Credentials"
          >
            <ShieldCheck className="w-4 h-4" />
          </Link>
          <button
            onClick={() => openQuoteModal({ productName: currentTool.name })}
            className="text-[#F5B800] hover:text-white hover:scale-110 transition-all cursor-pointer relative"
            title="Inquire Technical Quote"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#F5B800] animate-ping" />
          </button>
        </div>

        {/* Right: Pill Location / Quick Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenVideoModal && onOpenVideoModal()}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current text-[#F5B800]" />
            <span>Facility Tour</span>
          </button>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-1.5 bg-[#F5B800] hover:bg-[#D97706] text-[#070A11] font-bold rounded-full px-4 py-1.5 text-xs transition-all shadow-[0_0_20px_rgba(245,184,0,0.4)] cursor-pointer"
          >
            <MapPin className="w-3 h-3" />
            <span>Chennai Plant</span>
          </Link>
        </div>

      </div>

      {/* =====================================================================
          2. MAIN STAGE: 3D CURVED ORBIT + ALL BOXES IN ACTIVE MOTION
          ===================================================================== */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 my-auto min-h-[480px] sm:min-h-[560px]"
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
      >
        
        {/* Navigation Arrows (Sides) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Tool Category"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-[#F5B800] text-white hover:text-black border border-white/15 flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Tool Category"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-[#F5B800] text-white hover:text-black border border-white/15 flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-2xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* -------------------------------------------------------------
            STAGE CONTAINER FOR CARDS & CENTERPIECE
            ------------------------------------------------------------- */}
        <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">
          
          {/* ALL THE SQUIRCLE BOXES IN CONTINUOUS ORBITAL MOTION */}
          {toolCategories.map((tool, idx) => {
            const CardVisual = tool.Visual;
            
            // Offset relative to active index: -2, -1, 0, 1, 2
            let offset = idx - activeIdx;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            // Hide cards beyond distance of 2
            if (absOffset > 2) return null;

            // Curved Parabolic Arc Coordinates from the Video
            const xBase = typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 195;
            const xPos = offset * xBase + dragOffset * 0.45;
            const yPos = Math.pow(absOffset, 1.85) * 40; // Parabolic curve downward
            const rotation = offset * 11.5; // Tangential tilt
            const scale = isCenter ? 1.05 : 1 - absOffset * 0.14;
            const zIndex = isCenter ? 10 : 25 - absOffset * 3;
            const opacity = 1 - absOffset * 0.12;

            return (
              <div
                key={tool.id}
                onClick={() => setActiveIdx(idx)}
                style={{
                  transform: `translate3d(${xPos}px, ${yPos}px, 0) rotate(${rotation}deg) scale(${scale})`,
                  zIndex,
                  opacity
                }}
                className="absolute top-1/2 left-1/2 -ml-16 sm:-ml-20 -mt-16 sm:-mt-20 cursor-pointer transition-transform duration-700 ease-out select-none"
              >
                {/* INNER CARD WRAPPER WITH CONTINUOUS FLOATING SINE WAVE MOTION */}
                <div
                  style={{
                    animation: `kumoFloatWave 3.8s ease-in-out infinite`,
                    animationDelay: floatDelays[idx % floatDelays.length]
                  }}
                  className={`w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-[#FAF9F5] shadow-[0_18px_40px_rgba(0,0,0,0.55)] border border-white/80 p-3 sm:p-4 flex flex-col items-center justify-between transition-all duration-300 hover:scale-110 hover:-translate-y-2 group ${
                    isCenter ? `ring-2 ring-[#F5B800] ring-offset-4 ring-offset-[#070A11] ${tool.ringGlow}` : ''
                  }`}
                >
                  {/* Category Top Tag */}
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-gray-500 group-hover:text-gray-900 transition-colors truncate max-w-full">
                    {tool.shortName}
                  </span>

                  {/* High-Precision 3D Tool Model Standing inside Squircle Box */}
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center relative overflow-hidden">
                    <CardVisual className="w-14 h-20 sm:w-16 sm:h-24 drop-shadow-md group-hover:scale-115 transition-transform duration-300" />
                  </div>

                  {/* Spec Indicator at Bottom of Box */}
                  <div className="w-full text-center">
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-gray-400 group-hover:text-[#D97706] tracking-tighter truncate block transition-colors">
                      {tool.spec.split('•')[0]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* -------------------------------------------------------------
              CENTERPIECE: STANDING CUTTING TOOL AT MOUNTAIN PEAK (NO WHITE BOX)
              ------------------------------------------------------------- */}
          <div className="relative z-20 flex flex-col items-center justify-end pointer-events-none">
            
            {/* The Standing Tool Presentation with Glowing Levitation */}
            <div className="relative w-44 sm:w-60 md:w-68 h-64 sm:h-80 md:h-96 flex flex-col items-center justify-end">
              
              {/* Dynamic Floating Category Title (Clean, elegant, NO white box) */}
              <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none text-center w-[280px] sm:w-[360px]">
                <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight">
                  {currentTool.name}
                </h3>
                <span className="inline-block mt-1 text-[10px] sm:text-xs font-bold text-[#F5B800] uppercase tracking-widest px-3 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-[#F5B800]/30 shadow-lg">
                  {currentTool.subtitle}
                </span>
              </div>

              {/* Standing 3D Vector Tool Visual with Breathing Levitation */}
              <div
                style={{
                  animation: 'kumoCenterPulse 4s ease-in-out infinite'
                }}
                className="w-full h-full flex items-center justify-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out"
              >
                <CenterVisual className="w-28 h-56 sm:w-36 sm:h-72 md:w-44 md:h-84 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" />
              </div>

              {/* Pedestal Action Pill Card (Resting on Mountain Peak) */}
              <div className="absolute -bottom-6 z-40 pointer-events-auto">
                <div className="bg-[#FAF9F5] text-gray-900 rounded-2xl px-4 py-2.5 shadow-2xl border border-gray-200/90 flex flex-col items-center min-w-[140px] transform hover:scale-105 transition-transform duration-200">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-gray-700 tracking-wider uppercase leading-none">
                    {currentTool.spec}
                  </span>
                  <div className="flex items-center gap-2.5 mt-1.5">
                    <button
                      onClick={() => openQuoteModal({ productName: currentTool.name })}
                      className="w-7 h-7 rounded-full bg-[#070A11] text-white hover:bg-[#F5B800] hover:text-[#070A11] flex items-center justify-center transition-colors shadow-md cursor-pointer"
                      title={`Request Technical Quote for ${currentTool.name}`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      to={currentTool.link}
                      className="text-[10px] font-bold text-gray-700 hover:text-[#D97706] flex items-center gap-0.5 leading-none cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================================
          3. SINTERED CARBIDE BEDROCK MOUNTAIN + DISPLAY HEADLINE
          (Exact replica of matcha mountain base and "Choose you matcha tea")
          ===================================================================== */}
      <div className="relative z-20 w-full overflow-hidden select-none -mt-10 sm:-mt-14 pb-6 sm:pb-10 flex flex-col items-center">
        
        {/* Mountain Landscape Silhouette / Bedrock Texture */}
        <div className="relative w-full max-w-5xl h-36 sm:h-48 md:h-56 mx-auto flex items-end justify-center">
          
          {/* Primary Sintered Carbide Mountain SVG Structure */}
          <svg
            viewBox="0 0 1000 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover filter drop-shadow-[0_-12px_24px_rgba(0,0,0,0.85)]"
          >
            <defs>
              <linearGradient id="carbideMountainGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#252F3C" />
                <stop offset="30%" stopColor="#1B222C" />
                <stop offset="70%" stopColor="#121720" />
                <stop offset="100%" stopColor="#070A11" />
              </linearGradient>
              <linearGradient id="ridgeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#475569" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#475569" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Back Outer Ridges */}
            <path
              d="M 0 320 Q 200 120 380 200 Q 500 80 620 200 Q 800 120 1000 320 Z"
              fill="#121720"
              opacity="0.75"
            />

            {/* Main Center Mountain Peak Pedestal */}
            <path
              d="M 50 320 Q 240 240 370 160 Q 450 60 500 45 Q 550 60 630 160 Q 760 240 950 320 Z"
              fill="url(#carbideMountainGrad)"
            />

            {/* Mountain Ridge Facets & Creases (Matching matcha mountain crags) */}
            <path
              d="M 500 45 Q 480 140 430 220 Q 380 280 320 320"
              stroke="url(#ridgeHighlight)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 500 45 Q 530 150 590 230 Q 640 280 700 320"
              stroke="#070A11"
              strokeWidth="3.5"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M 450 150 Q 500 180 540 240"
              stroke="url(#ridgeHighlight)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
            />
          </svg>

          {/* Natural Carbide Texture Overlay */}
          <img
            src="/images/carbide-mountain-base.png"
            alt="Carbide Bedrock Pedestal"
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50 pointer-events-none"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

        </div>

        {/* -------------------------------------------------------------
            MASSIVE DISPLAY HEADLINE (Exact replica of "Chooise you matcha tea")
            ------------------------------------------------------------- */}
        <div className="relative -mt-16 sm:-mt-24 md:-mt-28 z-30 text-center px-4 w-full">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-tight drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)] max-w-5xl mx-auto">
            Choose your cutting tool
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-300 font-medium max-w-2xl mx-auto drop-shadow-md">
            Precision solid carbide drills, high-performance end mills, burnishing tools, and bespoke CNC geometries engineered to micron tolerances.
          </p>

          {/* Interactive Navigation Dot Indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-4 sm:mt-6">
            {toolCategories.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIdx(i)}
                aria-label={`Select ${t.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === i ? 'w-9 bg-[#F5B800] shadow-[0_0_12px_rgba(245,184,0,0.8)]' : 'w-2.5 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
