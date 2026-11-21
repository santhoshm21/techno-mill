import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Cpu, 
  Settings,
  CheckCircle2
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

const slides = [
  {
    id: 1,
    tag: '5-Axis CNC Precision Grinding',
    title: 'Solid Carbide Cutting Tools Engineered for Zero Defect Machining',
    subtitle: 'Ultra-precision solid carbide drills, high-efficiency variable helix end mills, and burnishing solutions tailored for aerospace, automotive, and mold & die industries.',
    primaryCta: 'Explore Tool Catalogue',
    primaryLink: '/products',
    secondaryCta: 'Get a Fast Quote',
    bgClass: 'from-[#1E2227] via-[#262B31] to-[#15181C]',
    accentBadge: 'Sub-Micron Runout < 2µm',
    features: ['100% Optical Metrology Check', 'Nanograin Substrates (0.4-0.6µm)', 'Same-Day Standard Dispatch']
  },
  {
    id: 2,
    tag: 'Automotive & Engine Block Solutions',
    title: 'High-Penetration 3-Margin Sizing & Burnishing Drills',
    subtitle: 'Drill, ream, and burnish bores in a single pass to H7 cylindrical tolerance with Ra < 0.4µm finish, slashing automotive production cycle times by up to 45%.',
    primaryCta: 'View Burnishing Drills',
    primaryLink: '/products?category=burnishing-drills',
    secondaryCta: 'Request Technical RFP',
    bgClass: 'from-[#1A1F26] via-[#242A33] to-[#14181E]',
    accentBadge: 'Ra < 0.4µm in 1 Shot',
    features: ['Internal Spiral Coolant Holes', 'Eliminates Secondary Reaming', 'Up to 60 HRC Workpieces']
  },
  {
    id: 3,
    tag: 'Die & Mold & Aerospace Surfacing',
    title: 'ApexCut Variable Helix End Mills & Ball Nose Cutters',
    subtitle: 'Engineered with differential flute spacing and optimized core tapers to disrupt resonant harmonic chatter during aggressive trochoidal milling and hardened die contouring.',
    primaryCta: 'View End Mills',
    primaryLink: '/products?category=end-mills',
    secondaryCta: 'Custom Print Engineering',
    bgClass: 'from-[#1F252E] via-[#2B323D] to-[#181D24]',
    accentBadge: 'Chatter-Free Trochoidal Milling',
    features: ['Multi-layer PVD AlTiN+Si Nano-Coatings', 'Hardened Steels up to 68 HRC', 'Custom Radii Made to Order']
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openQuoteModal } = useQuote();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = slides[currentSlide];

  return (
    <div 
      className="relative bg-[#1E2227] text-white rounded-md border border-[#2D333B] overflow-hidden shadow-sm flex flex-col justify-between min-h-[440px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Subtle Industrial Grid */}
      <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none"></div>

      {/* Slide Content */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Tag & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5B800] text-[#1E2227] font-bold">
              {slide.tag}
            </span>
            <span className="text-[11px] font-mono text-gray-300 px-2 py-0.5 rounded bg-[#262B31] border border-[#374151]">
              {slide.accentBadge}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3 max-w-2xl leading-tight">
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mb-6 leading-relaxed">
            {slide.subtitle}
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8 max-w-2xl">
            {slide.features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-200 bg-[#262B31]/60 px-2.5 py-1.5 rounded border border-[#374151]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B800] shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons & Indicator Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#374151]/50">
          <div className="flex items-center gap-3">
            <Link
              to={slide.primaryLink}
              className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs sm:text-sm px-5 py-2.5 rounded shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openQuoteModal({ productName: slide.title })}
              className="bg-transparent hover:bg-[#262B31] text-gray-200 hover:text-white border border-[#374151] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#F5B800]" />
              <span>{slide.secondaryCta}</span>
            </button>
          </div>

          {/* Controls: Prev / Next & Indicators */}
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-6 bg-[#F5B800]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-1 ml-2">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded bg-[#262B31] hover:bg-[#374151] text-gray-300 hover:text-white border border-[#374151] transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 rounded bg-[#262B31] hover:bg-[#374151] text-gray-300 hover:text-white border border-[#374151] transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
