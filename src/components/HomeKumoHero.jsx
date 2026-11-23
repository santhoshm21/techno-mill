import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function HomeKumoHero({ onOpenVideoModal }) {
  const { openQuoteModal } = useQuote();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // 4 Featured Cutting Tool Platforms with Full-Bleed Images
  const slides = [
    {
      id: 'gladius-endmill',
      category: 'Solid Carbide Milling',
      line1: '2026 TMT ULTRA',
      line2: 'GLADIUS 4FL',
      description: 'The all-new Gladius 4-Flute series is proven to deliver sub-micron precision with unparalleled chip evacuation, unmatched edge durability, and extended tool life in high-feed CNC machining.',
      image: '/images/hero-fullscreen-carbide-tool.jpg',
      badge: 'AlTiN PVD COATED',
      link: '/products',
      quoteSubject: 'TMT Ultra Gladius 4FL End Mill',
      hotspots: [
        {
          id: 'flutes',
          title: '38°/41° Variable Pitch Flutes',
          spec: 'Harmonic chatter suppression in deep cavity milling; mirror Ra < 0.2µm wall finish.',
          badge: 'DIN 6527 • Variable Pitch',
          top: '35%',
          left: '52%'
        },
        {
          id: 'coating',
          title: 'Multi-Layer AlTiN Nano-Coat',
          spec: '3,300 HV micro-hardness with thermal barrier stability up to 1,100°C for dry and MQL cutting.',
          badge: 'High-Temp Heat Resistance',
          top: '48%',
          left: '68%'
        },
        {
          id: 'shank',
          title: 'DIN 6535 HA h6 Shank',
          spec: 'Sub-micron cylindrical grinding for shrink-fit and hydraulic chuck rigidity with runout < 0.003mm.',
          badge: 'h6 Precision Tolerance',
          top: '60%',
          left: '82%'
        }
      ]
    },
    {
      id: 'through-coolant-drill',
      category: 'Deep Hole Drilling',
      line1: '5xD – 30xD DEEP',
      line2: 'COOLANT DRILL',
      description: 'Precision engineered with 140° DIN 6537 self-centering split point and dual internal helical coolant channels, eliminating pre-spotting and drastically cutting cycle times in tough alloys.',
      image: '/images/gallery/hero-drill-lineup.jpg',
      badge: 'DIN 6537 140° SPLIT POINT',
      link: '/products',
      quoteSubject: '5xD Through-Coolant Solid Carbide Drill',
      hotspots: [
        {
          id: 'point',
          title: '140° Self-Centering Split Point',
          spec: 'Precision ground web-thinning prevents walking on curved and slanted workpiece entries.',
          badge: 'Sub-Micron Point',
          top: '32%',
          left: '50%'
        },
        {
          id: 'coolant-channel',
          title: 'Dual Helical Coolant Channels',
          spec: 'Optimized laminar coolant pressure ensures uninterrupted chip evacuation from deep holes.',
          badge: 'Internal Coolant 30xD',
          top: '48%',
          left: '65%'
        },
        {
          id: 'substrate',
          title: 'European Ultra-Fine Carbide',
          spec: '0.2µm grain size tungsten carbide with 10% cobalt for superior fracture toughness.',
          badge: '92.5 HRA Hardness',
          top: '64%',
          left: '80%'
        }
      ]
    },
    {
      id: 'custom-form-tool',
      category: 'Bespoke Blueprint Profiles',
      line1: 'CUSTOM WORKPIECE',
      line2: 'FORM TOOLING',
      description: 'Bespoke contouring cutters, dovetail profiles, and port tools ground directly from client workpiece 3D CAD models on our German SAACKE 5-axis CNC grinding centers.',
      image: '/images/gallery/hero-solid-carbide-tools.jpg',
      badge: 'GROUND DIRECTLY FROM CAD',
      link: '/services',
      quoteSubject: 'Custom Blueprint Form Tooling',
      hotspots: [
        {
          id: 'contour',
          title: 'Complex Multi-Radius Profile',
          spec: 'Sub-micron form accuracy verified on Zoller Genius 3 universal measuring machine.',
          badge: '±0.005mm Tolerance',
          top: '36%',
          left: '55%'
        },
        {
          id: 'edge-prep',
          title: 'Micro-Honed Cutting Edges',
          spec: 'Controlled edge rounding (K-factor) prevents micro-chipping during high-speed machining.',
          badge: 'Controlled Edge Prep',
          top: '52%',
          left: '72%'
        }
      ]
    },
    {
      id: 'burnishing-reamer',
      category: 'Single-Pass Finishing',
      line1: 'MIRROR FINISH',
      line2: 'BURNISH REAMER',
      description: 'Combines precision bore reaming and roller burnishing into one rapid cycle, consistently achieving IT6 automotive bore tolerances with mirror Ra < 0.2µm surface finishes.',
      image: '/images/products/pure-spindle.jpg',
      badge: 'Ra < 0.2µm MIRROR BORE',
      link: '/products',
      quoteSubject: 'Mirror-Finish Burnishing Reamer',
      hotspots: [
        {
          id: 'burnish-lands',
          title: 'Diamond-Lapped Burnishing Lands',
          spec: 'Imparts compressive residual stress into bore walls, enhancing component fatigue resistance.',
          badge: 'Work-Hardening Effect',
          top: '38%',
          left: '52%'
        },
        {
          id: 'straight-flutes',
          title: 'Sub-Micron Reaming Margins',
          spec: 'Maintains H7 / IT6 bore diametrical tolerances over mass production batches.',
          badge: 'IT6 Bore Tolerance',
          top: '54%',
          left: '70%'
        }
      ]
    }
  ];

  // Auto-advance slides every 6.5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setActiveHotspot(null);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setActiveHotspot(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setActiveHotspot(null);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setActiveHotspot(null);
      }}
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] bg-[#141518] text-white overflow-hidden flex flex-col justify-between select-none"
    >
      {/* =========================================================================
          FULL-SCREEN PRODUCT IMAGE LAYER (No Box, Bleeds Across Entire Right Canvas)
          ========================================================================= */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] xl:w-[65%] h-full overflow-hidden z-0">
        
        {/* Full Bleed Image (object-cover) */}
        <img
          key={slide.id}
          src={slide.image}
          alt={`${slide.line1} ${slide.line2}`}
          className="w-full h-full object-cover object-center lg:object-right transition-all duration-700 ease-out filter contrast-105 brightness-95"
          onError={(e) => {
            e.currentTarget.src = '/images/gallery/hero-drill-lineup.jpg';
          }}
        />

        {/* Seamless Left Gradient Fade (Smooth transition from dark background into the photo) */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-60 lg:w-96 bg-gradient-to-r from-[#141518] via-[#141518]/80 to-transparent pointer-events-none z-10" />
        
        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#141518] via-[#141518]/50 to-transparent pointer-events-none z-10" />

        {/* Bottom Fade into Dock Bar */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#141518] via-[#141518]/70 to-transparent pointer-events-none z-10" />

        {/* Spec Tag Floating Badge */}
        <div className="absolute top-6 right-6 lg:right-16 bg-black/60 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-mono text-[#F5B800] font-bold tracking-wider shadow-lg z-20 pointer-events-none">
          {slide.badge}
        </div>

        {/* -------------------------------------------------------------
            INTERACTIVE HOTSPOT PINS DIRECTLY ON FULL BLEED IMAGE
            ------------------------------------------------------------- */}
        {slide.hotspots.map((spot) => {
          const isActive = activeHotspot === spot.id;

          return (
            <div
              key={spot.id}
              style={{ top: spot.top, left: spot.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
            >
              {/* Concentric Pulsing Pin */}
              <button
                onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                className="relative group p-2 cursor-pointer focus:outline-none"
                aria-label={spot.title}
              >
                <span className="absolute inset-1 rounded-full bg-white/30 animate-ping opacity-60 pointer-events-none" />
                <span className="relative w-7 h-7 rounded-full bg-black/70 border border-white/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-125 transition-transform duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
                </span>
              </button>

              {/* Tooltip Card */}
              {isActive && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 bg-[#1B1D22]/95 border border-white/25 rounded-xl p-4 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto text-left"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#E11D48] bg-[#E11D48]/15 px-2 py-0.5 rounded">
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
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#1B1D22] border-r border-b border-white/25 transform rotate-45 -mt-1" />
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* =========================================================================
          HERO TEXT CONTENT (Left Column, Cleanly Overlaying the Dark Fade)
          ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-28 flex-1 flex items-center pointer-events-none">
        
        <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6 pointer-events-auto">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 font-mono">
              {slide.category}
            </span>
          </div>

          {/* Massive Heading (2 Lines - Matching Reference) */}
          <div className="space-y-1">
            <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter uppercase text-white leading-[0.95] drop-shadow-md">
              <span className="block text-white">{slide.line1}</span>
              <span className="block text-white/95">{slide.line2}</span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-gray-300 max-w-md sm:max-w-lg leading-relaxed font-normal pt-1 drop-shadow-sm">
            {slide.description}
          </p>

          {/* CTA Buttons (Solid Bold Red Button matching Reference "SEE DETAILS") */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
            <Link
              to={slide.link}
              className="bg-[#E11D48] hover:bg-[#BE123C] text-white font-black text-xs uppercase tracking-[0.15em] px-8 py-3.5 shadow-[0_10px_25px_rgba(225,29,72,0.35)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center cursor-pointer rounded-xs"
            >
              <span>SEE DETAILS</span>
            </Link>

            <button
              onClick={() => openQuoteModal({ productName: slide.quoteSubject })}
              className="border border-white/30 hover:border-white text-white hover:bg-white/10 font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-all inline-flex items-center gap-2 cursor-pointer rounded-xs backdrop-blur-xs"
            >
              <span>REQUEST QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM DOCK BAR: Slider Indicator (01 —— 04) + Right Video Preview Card
          ========================================================================= */}
      <div className="relative z-20 w-full border-t border-white/10 bg-black/50 backdrop-blur-md px-5 sm:px-8 lg:px-12 py-4">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Tool Platform"
              className="w-8 h-8 rounded-full border border-white/20 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer hover:bg-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Tool Platform"
              className="w-8 h-8 rounded-full border border-white/20 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer hover:bg-white/10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slider Progress Indicator (01 ————— 04) */}
          <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
            <span className="text-white font-bold tracking-wider">
              0{currentSlide + 1}
            </span>

            {/* Progress Track */}
            <div className="w-40 sm:w-60 h-0.5 bg-white/20 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-white transition-all duration-500 ease-out"
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`
                }}
              />
            </div>

            <span className="text-gray-400 tracking-wider">
              0{slides.length}
            </span>
          </div>

          {/* Video Preview Thumbnail Card with Play Button */}
          <div
            onClick={onOpenVideoModal}
            className="w-44 sm:w-52 h-16 sm:h-18 rounded-lg border border-white/20 bg-black/60 overflow-hidden relative shadow-xl group cursor-pointer flex items-center p-2 gap-3 hover:border-[#E11D48] transition-all duration-300"
          >
            {/* Thumbnail Image */}
            <div className="w-16 h-12 rounded overflow-hidden relative shrink-0 bg-neutral-900 border border-white/10">
              <img
                src="/images/about/ecogrind-lx-machine.png"
                alt="5-Axis CNC Tool Grinding Video"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#E11D48] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Video Label */}
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-mono font-bold text-[#E11D48] block tracking-wider">
                Facility Tour
              </span>
              <p className="text-xs font-bold text-white truncate group-hover:text-[#F5B800] transition-colors">
                5-Axis CNC Video
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT EDGE: Vertical Slide Indicators (- - - -) */}
      <div className="hidden lg:flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentSlide(idx);
              setActiveHotspot(null);
            }}
            className={`transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? 'w-6 h-1 bg-white rounded-full'
                : 'w-2.5 h-1 bg-white/30 hover:bg-white/70 rounded-full'
            }`}
            aria-label={`Jump to slide 0${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
