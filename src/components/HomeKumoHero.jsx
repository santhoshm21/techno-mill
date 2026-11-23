import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

export default function HomeKumoHero({ onOpenVideoModal }) {
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();

  // 6 Premium Tool Categories tailored for Techno Mech Toolings
  const toolCategories = [
    {
      id: 'endmills',
      name: 'High-Performance End Mills',
      shortName: 'End Mill',
      subtitle: 'AlTiN 4-Flute Variable Helix',
      spec: 'DIN 6527 • h6',
      priceBadge: 'Ø3.0 – Ø25.0 mm',
      centerImage: '/images/products/endmill-square-1.png',
      cardImage: '/images/products/endmill-ballnose.png',
      accentColor: '#38BDF8',
      glow: 'rgba(56, 189, 248, 0.25)',
      link: '/products?category=endmills',
      features: ['Mirror Finish Surface', 'Variable Pitch Vibration-Damping', '3,400 HV Hardness']
    },
    {
      id: 'drills',
      name: 'Solid Carbide Drills',
      shortName: 'Carbide Drill',
      subtitle: 'Through-Coolant 140° Split Point',
      spec: 'DIN 6537 • 5xD–30xD',
      priceBadge: 'Ø1.0 – Ø25.0 mm',
      centerImage: '/images/products/drill-helixgroove.png',
      cardImage: '/images/products/drill-directgroove.png',
      accentColor: '#F5B800',
      glow: 'rgba(245, 184, 0, 0.25)',
      link: '/products?category=drills',
      features: ['Internal Helical Coolant', 'Self-Centering Split Point', 'High Feed in Steel & Inconel']
    },
    {
      id: 'burnishing',
      name: 'Burnishing Drills',
      shortName: 'Burnishing',
      subtitle: 'Single-Pass Hole Sizing & Mirror Finish',
      spec: 'Ra < 0.2µm Finish',
      priceBadge: 'IT6 Automotive Tolerance',
      centerImage: '/images/products/burnishing-drill-single.png',
      cardImage: '/images/products/burnishing-drill-group.png',
      accentColor: '#F97316',
      glow: 'rgba(249, 115, 22, 0.25)',
      link: '/products?category=burnishing',
      features: ['Combined Drill & Mirror Roll', 'Eliminates Secondary Grinding', 'Extreme Cycle-Time Reduction']
    },
    {
      id: 'reamers',
      name: 'Machine Reamers',
      shortName: 'Machine Reamer',
      subtitle: 'Through-Coolant Precision Sizing',
      spec: 'IT6 Bore Tolerance',
      priceBadge: 'Helical & Straight Flute',
      centerImage: '/images/products/reamer-straightflute.png',
      cardImage: '/images/products/reamer-throughcoolant.png',
      accentColor: '#A855F7',
      glow: 'rgba(168, 85, 247, 0.25)',
      link: '/products?category=reamers',
      features: ['Sub-Micron Bore Accuracy', 'Left & Right Hand Helix', 'Ultra-Low Runout < 0.002 mm']
    },
    {
      id: 'stepdrills',
      name: 'Two-Step Multi-Drills',
      shortName: 'Step Drill',
      subtitle: 'Multi-Diameter Drill & Chamfer',
      spec: 'Single-Pass Multi-Op',
      priceBadge: 'Aerospace & Transmissions',
      centerImage: '/images/products/drill-twostep.png',
      cardImage: '/images/services/service-stepdrill-group.png',
      accentColor: '#EC4899',
      glow: 'rgba(236, 72, 153, 0.25)',
      link: '/products?category=drills',
      features: ['Drill + Chamfer in One Stroke', 'Custom Step Angles 90°/180°', 'High Core Rigidity']
    },
    {
      id: 'formtools',
      name: 'Custom Form Tools',
      shortName: 'Form Tool',
      subtitle: 'Engineered Directly From Workpiece CAD',
      spec: 'Custom Blueprint Profiles',
      priceBadge: 'German SAACKE 5-Axis',
      centerImage: '/images/products/endmill-dovetail.png',
      cardImage: '/images/projects/project-formtool-25.png',
      accentColor: '#10B981',
      glow: 'rgba(16, 185, 129, 0.25)',
      link: '/contact',
      features: ['Complex Dovetail & Radius Profiles', '100% Optical Zoller Inspected', 'Dedicated to Automotive Plants']
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = toolCategories.length;
  const currentTool = toolCategories[activeIdx];

  // Auto-advance every 4.5 seconds when user isn't hovering
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, total]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-[92vh] sm:min-h-screen bg-[#0B0F19] text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Dynamic Ambient Background Glow matching active tool */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 ease-out"
        style={{ background: currentTool.glow }}
      />
      
      {/* Subtle Grid Lines Overlay for Engineering Precision Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* =====================================================================
          1. TOP NAVIGATION BAR (Exact replica of video's top bar)
          ===================================================================== */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 flex items-center justify-between">
        
        {/* Left: Brand Logo in Video Style */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-[#F5B800] text-[#0B0F19] font-black flex items-center justify-center text-sm tracking-tighter shadow-[0_0_15px_rgba(245,184,0,0.5)]">
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
        <div className="flex items-center bg-[#1E2530]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-5 py-2 shadow-2xl gap-3 sm:gap-5">
          <Link
            to="/products"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Browse Products Catalog"
          >
            <Grid className="w-4 h-4" />
          </Link>
          <Link
            to="/#facility"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Manufacturing Facility"
          >
            <Layers className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Re-Sharpening & Coating Services"
          >
            <Target className="w-4 h-4" />
          </Link>
          <Link
            to="/#clients"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Certifications & ISO Credentials"
          >
            <ShieldCheck className="w-4 h-4" />
          </Link>
          <button
            onClick={() => openQuoteModal({ productName: currentTool.name })}
            className="text-[#F5B800] hover:text-white transition-colors cursor-pointer relative"
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
            className="inline-flex items-center gap-1.5 bg-[#F5B800] hover:bg-[#D97706] text-[#0B0F19] font-bold rounded-full px-4 py-1.5 text-xs transition-all shadow-[0_0_20px_rgba(245,184,0,0.4)] cursor-pointer"
          >
            <MapPin className="w-3 h-3" />
            <span>Chennai Plant</span>
          </Link>
        </div>

      </div>

      {/* =====================================================================
          2. MAIN STAGE: 3D ARC CAROUSEL + CENTERPIECE PRODUCT + MOUNTAIN
          ===================================================================== */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 my-auto min-h-[460px] sm:min-h-[520px]">
        
        {/* Previous & Next Arrow Controls (Floating on screen sides) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Tool Category"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#F5B800] text-white hover:text-black border border-white/10 flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Tool Category"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#F5B800] text-white hover:text-black border border-white/10 flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-lg"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* -------------------------------------------------------------
            THE SIGNATURE 3D ARC OF FLOATING SQUIRCLE CARDS (Exact Video UI)
            ------------------------------------------------------------- */}
        <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">
          
          {toolCategories.map((tool, idx) => {
            // Compute shortest distance around the circle: -2, -1, 0, 1, 2
            let offset = idx - activeIdx;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            // Hide cards beyond distance of 2 for clean curved look
            if (absOffset > 2) return null;

            // Mathematical positioning for the parabolic curved arc from the video
            // When offset = 0 -> center top
            // When offset = ±1 -> pushed outwards and slightly lower with ±12 deg rotation
            // When offset = ±2 -> pushed further outwards, lower, ±22 deg rotation
            const xOffsetMultiplier = typeof window !== 'undefined' && window.innerWidth < 640 ? 115 : 185;
            const xPos = offset * xOffsetMultiplier;
            const yPos = Math.pow(absOffset, 1.8) * 36; // Parabolic downward curve
            const rotation = offset * 11; // Tangential tilt along the arc
            const scale = 1 - absOffset * 0.14; // Center is largest
            const zIndex = 15 - absOffset * 2;
            const opacity = 1 - absOffset * 0.15;

            return (
              <div
                key={tool.id}
                onClick={() => setActiveIdx(idx)}
                style={{
                  transform: `translate3d(${xPos}px, ${yPos}px, 0) rotate(${rotation}deg) scale(${scale})`,
                  zIndex,
                  opacity
                }}
                className={`absolute top-1/2 left-1/2 -ml-16 sm:-ml-20 -mt-16 sm:-mt-20 w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-[#FAF9F5] shadow-[0_16px_36px_rgba(0,0,0,0.5)] border border-white/60 p-3 sm:p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-out hover:scale-105 group select-none ${
                  isCenter ? 'ring-2 ring-[#F5B800] ring-offset-4 ring-offset-[#0B0F19]' : ''
                }`}
              >
                {/* Floating Tool Graphic inside Squircle Card */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <img
                    src={tool.cardImage}
                    alt={tool.name}
                    className="max-w-[80%] max-h-[80%] object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = tool.centerImage;
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* -------------------------------------------------------------
              CENTERPIECE STANDING CUTTING TOOL (Standing at Peak of Bedrock)
              ------------------------------------------------------------- */}
          <div className="relative z-20 flex flex-col items-center justify-end pointer-events-none">
            
            {/* Standing Product Visual */}
            <div className="relative w-48 sm:w-64 md:w-72 h-64 sm:h-80 md:h-96 flex flex-col items-center justify-end">
              
              {/* Product Variant Name overlay in front of tool (like in video) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none text-center w-full px-2">
                <span className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] block leading-tight">
                  {currentTool.shortName}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#F5B800] uppercase tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] block mt-0.5">
                  {currentTool.subtitle}
                </span>
              </div>

              {/* The Hero Standing Tool Graphic with dynamic lighting */}
              <img
                key={currentTool.id}
                src={currentTool.centerImage}
                alt={currentTool.name}
                className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out animate-fadeIn"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/services/service-stepdrill-group.png';
                }}
              />

              {/* Pedestal Pill Badge with Spec & Inquire Action */}
              <div className="absolute -bottom-5 z-40 pointer-events-auto">
                <div className="bg-[#FAF9F5] text-gray-900 rounded-2xl px-4 py-2.5 shadow-2xl border border-gray-200 flex flex-col items-center min-w-[130px] transform hover:scale-105 transition-transform duration-200">
                  <span className="text-[10.5px] font-mono font-bold text-gray-700 tracking-wider uppercase leading-none">
                    {currentTool.spec}
                  </span>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() => openQuoteModal({ productName: currentTool.name })}
                      className="w-7 h-7 rounded-full bg-[#111827] text-white hover:bg-[#F5B800] hover:text-[#111827] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                      title={`Request Quote for ${currentTool.name}`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      to={currentTool.link}
                      className="text-[10px] font-bold text-gray-600 hover:text-[#D97706] flex items-center gap-0.5 leading-none cursor-pointer"
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
          3. SINTERED CARBIDE BEDROCK MOUNTAIN PEDESTAL + MASSIVE DISPLAY HEADLINE
          (Exact replica of matcha mountain base and "Choose you matcha tea")
          ===================================================================== */}
      <div className="relative z-20 w-full overflow-hidden select-none -mt-12 sm:-mt-16 pb-6 sm:pb-10 flex flex-col items-center">
        
        {/* Mountain Landscape Silhouette / Bedrock Texture */}
        <div className="relative w-full max-w-5xl h-36 sm:h-48 md:h-56 mx-auto flex items-end justify-center">
          
          {/* Primary Sintered Carbide Mountain SVG Structure */}
          <svg
            viewBox="0 0 1000 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover filter drop-shadow-[0_-12px_24px_rgba(0,0,0,0.8)]"
          >
            <defs>
              <linearGradient id="carbideMountainGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#2A3441" />
                <stop offset="30%" stopColor="#1E2631" />
                <stop offset="70%" stopColor="#141A23" />
                <stop offset="100%" stopColor="#0B0F19" />
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
              fill="#141A23"
              opacity="0.7"
            />

            {/* Main Center Mountain Peak Pedestal */}
            <path
              d="M 50 320 Q 240 240 370 160 Q 450 60 500 45 Q 550 60 630 160 Q 760 240 950 320 Z"
              fill="url(#carbideMountainGrad)"
            />

            {/* Sharp Mountain Ridge Facets & Creases (Matching matcha mountain crags) */}
            <path
              d="M 500 45 Q 480 140 430 220 Q 380 280 320 320"
              stroke="url(#ridgeHighlight)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 500 45 Q 530 150 590 230 Q 640 280 700 320"
              stroke="#0B0F19"
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

          {/* Fallback image layer if carbide-mountain-base.png is loaded */}
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

          {/* Category Dot Navigation Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
            {toolCategories.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIdx(i)}
                aria-label={`Select ${t.name}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === i ? 'w-8 bg-[#F5B800]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
