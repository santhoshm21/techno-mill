import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bookmark, ArrowRight, Sparkles } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function HomeGlobeHero({ onOpenVideoModal }) {
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();

  // 5 High-Impact Industrial Tooling Slides (Matching Video Theme)
  const slides = [
    {
      id: 'endmills',
      tag: 'DIN 6527 • 4-FLUTE VARIABLE HELIX',
      category: 'High-Feed Machining',
      line1: 'SOLID CARBIDE',
      line2: 'END MILLS',
      description: 'Engineered with unequal flute spacing and nano-composite AlTiN PVD coating to suppress harmonic chatter, maximize metal removal rates, and deliver mirror Ra < 0.2µm wall finish in titanium and die steels.',
      cardTag: 'DIN 6527 • 4-FLUTE',
      cardTitle: 'SOLID CARBIDE END MILLS',
      image: '/images/hero-slider-endmills.jpg',
      link: '/products',
      quoteSubject: 'Solid Carbide Variable-Helix End Mills'
    },
    {
      id: 'drills',
      tag: 'DIN 6537 • 140° SPLIT POINT',
      category: 'Deep Hole Drilling',
      line1: '5XD – 30XD DEEP',
      line2: 'COOLANT DRILLS',
      description: 'Precision engineered 140° self-centering split point with dual micro internal helical coolant channels, eliminating pre-spotting and drastically cutting cycle times in tough automotive and aerospace alloys.',
      cardTag: 'DIN 6537 • 140° SPLIT',
      cardTitle: 'DEEP COOLANT DRILLS',
      image: '/images/hero-slider-drills.jpg',
      link: '/products',
      quoteSubject: '5xD-30xD Through-Coolant Solid Carbide Drills'
    },
    {
      id: 'reamers',
      tag: 'IT6 TOLERANCE • RA < 0.2µM',
      category: 'Single-Pass Finishing',
      line1: 'SOLID CARBIDE',
      line2: 'BURNISHING REAMERS',
      description: 'Combines precision bore reaming and roller burnishing in a single pass, consistently holding IT6 diametrical tolerance and delivering sub-0.2µm Ra mirror surface finish in cylinder blocks.',
      cardTag: 'IT6 TOLERANCE • RA < 0.2µM',
      cardTitle: 'BURNISHING REAMERS',
      image: '/images/hero-slider-reamers.jpg',
      link: '/products',
      quoteSubject: 'Solid Carbide Burnishing Reamers'
    },
    {
      id: 'custom-form',
      tag: 'GROUND DIRECTLY FROM CAD',
      category: 'Aerospace & Automotive',
      line1: 'CUSTOM WORKPIECE',
      line2: 'FORM TOOLING',
      description: 'Bespoke multi-step drills, dovetail cutters, port contour tools, and aerospace-certified custom geometries ground directly from client 2D/3D CAD blueprints with rapid 48-hour prototype cycles.',
      cardTag: 'CAD BLUEPRINT SPECIAL',
      cardTitle: 'CUSTOM FORM TOOLS',
      image: '/images/hero-fullscreen-carbide-tool.jpg',
      link: '/services',
      quoteSubject: 'Custom Blueprint Form Tooling'
    },
    {
      id: 'regrinding',
      tag: 'GERMAN SAACKE 5-AXIS CNC',
      category: 'Precision Reconditioning',
      line1: 'SAACKE 5-AXIS',
      line2: 'TOOL REGRINDING',
      description: 'Robotic German SAACKE 5-axis CNC grinding centers restoring factory edge sharpness, micro-honing, and OEM cutting geometry, saving up to 60% compared to new tool acquisition costs.',
      cardTag: '5-AXIS RECONDITIONING',
      cardTitle: 'PRECISION REGRINDING',
      image: '/images/products/hero-solid-carbide-tools.jpg',
      link: '/services',
      quoteSubject: 'SAACKE 5-Axis CNC Tool Regrinding'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(slides.length - 1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandingCard, setExpandingCard] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const SLIDE_DURATION = 6500; // 6.5 seconds per slide

  // Autoplay timer with progress bar sync
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const increment = (intervalTime / SLIDE_DURATION) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  // Slide transition handler
  const goToSlide = (nextIdx, clickedCard = null) => {
    if (nextIdx === currentIndex || isTransitioning) return;

    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    setProgress(0);

    if (clickedCard) {
      setExpandingCard(clickedCard);
    }

    setCurrentIndex(nextIdx);

    setTimeout(() => {
      setIsTransitioning(false);
      setExpandingCard(null);
    }, 850);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % slides.length;
    goToSlide(nextIdx, slides[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIdx, slides[prevIdx]);
  };

  const currentSlide = slides[currentIndex];
  const previousSlide = slides[prevIndex];

  // Up to 4 upcoming cards on the right side deck
  const upcomingCards = [
    slides[(currentIndex + 1) % slides.length],
    slides[(currentIndex + 2) % slides.length],
    slides[(currentIndex + 3) % slides.length],
    slides[(currentIndex + 4) % slides.length]
  ];

  return (
    <div 
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden select-none bg-black text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          BACKGROUND LAYERS (Smooth Morph / Zoom Crossfade)
          ========================================================================= */}
      {/* Previous Slide Background (fading out) */}
      {previousSlide && previousSlide.id !== currentSlide.id && (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={previousSlide.image}
            alt={previousSlide.category}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Current Slide Background (fading & zooming in smoothly) */}
      <div 
        key={currentSlide.id}
        className="absolute inset-0 w-full h-full z-[1] animate-hero-zoom transition-opacity duration-700"
      >
        <img
          src={currentSlide.image}
          alt={currentSlide.category}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Expanding Card Transition Morph Overlay */}
      {expandingCard && (
        <div 
          className="absolute inset-0 z-[5] pointer-events-none bg-cover bg-center transition-all duration-700 ease-out opacity-100"
          style={{ backgroundImage: `url(${expandingCard.image})` }}
        />
      )}

      {/* Cinematic Vignette Gradients (Matching Reference Video) */}
      {/* Left to right dark scrim so typography stands out */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/95 via-black/60 to-black/30 pointer-events-none" />
      {/* Top to bottom dark scrim for navbar and bottom controls */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/80 via-transparent to-black/85 pointer-events-none" />

      {/* =========================================================================
          HERO STAGE: MAIN CONTENT (LEFT) & CARD DECK (RIGHT)
          ========================================================================= */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between pt-24 pb-10 sm:pb-14">
        
        {/* CENTER BODY: Left Typography & Right Floating Card Carousel */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 my-auto">
          
          {/* LEFT: TEXT CONTENT (Animated on slide change) */}
          <div 
            key={`content-${currentSlide.id}`} 
            className="w-full lg:w-1/2 flex flex-col justify-center animate-hero-text"
          >
            {/* Subtitle / Category with Yellow Accent Dash */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest text-[#F5B800] uppercase mb-2">
              <span className="w-8 h-[2px] bg-[#F5B800] rounded-full inline-block"></span>
              <span>{currentSlide.category}</span>
            </div>

            {/* Massive Bold Compressed Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-[0.92] my-3 drop-shadow-lg font-sans">
              <span className="block">{currentSlide.line1}</span>
              <span className="block text-white/95">{currentSlide.line2}</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed line-clamp-3 mb-8 font-normal drop-shadow">
              {currentSlide.description}
            </p>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-4 pt-2">
              {/* Yellow Round Button */}
              <button
                onClick={() => openQuoteModal({ toolName: currentSlide.quoteSubject })}
                aria-label="Request quote for this tool"
                className="w-12 h-12 rounded-full bg-[#F5B800] text-[#1E2227] flex items-center justify-center font-bold shadow-lg shadow-yellow-500/25 hover:bg-yellow-300 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
              >
                <Bookmark className="w-5 h-5 fill-current" />
              </button>

              {/* Pill Glass Button */}
              <button
                onClick={() => openQuoteModal({ toolName: currentSlide.quoteSubject })}
                className="px-6 py-3 rounded-full border border-white/40 text-xs sm:text-sm font-bold tracking-widest text-white uppercase hover:bg-white/10 hover:border-white active:scale-95 transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>REQUEST QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* RIGHT: FLOATING CAROUSEL CARDS (Horizontal row of upcoming slides) */}
          <div className="w-full lg:w-1/2 flex items-center justify-start lg:justify-end overflow-hidden lg:overflow-visible pl-2 py-4">
            <div className="flex items-center gap-4 sm:gap-5">
              {upcomingCards.map((card, idx) => {
                const targetIdx = slides.findIndex((s) => s.id === card.id);
                return (
                  <div
                    key={card.id}
                    onClick={() => goToSlide(targetIdx, card)}
                    className="group relative w-40 sm:w-48 lg:w-52 xl:w-56 h-60 sm:h-72 lg:h-80 xl:h-[22rem] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 hover:border-[#F5B800]/70 shrink-0 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  >
                    {/* Card Background Image */}
                    <img
                      src={card.image}
                      alt={card.cardTitle}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Card Bottom Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300" />

                    {/* Card Content Overlay */}
                    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end z-10">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-gray-300 tracking-wider uppercase block mb-1">
                        {card.cardTag}
                      </span>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black text-white uppercase leading-snug line-clamp-2 drop-shadow">
                        {card.cardTitle}
                      </h3>
                    </div>

                    {/* Subtle Yellow Rim Glow on Hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F5B800]/60 rounded-2xl transition-colors duration-300 pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CONTROL BAR (Matching Video Pattern)
            Prev/Next Arrow Circles | Horizontal Progress Bar | Slide Number
            ========================================================================= */}
        <div className="w-full flex items-center justify-between pt-6 border-t border-white/10">
          
          {/* Controls: Prev / Next Buttons + Progress Bar */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Prev Button (<) */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#F5B800] hover:text-[#1E2227] hover:border-[#F5B800] active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button (>) */}
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#F5B800] hover:text-[#1E2227] hover:border-[#F5B800] active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Horizontal Progress Line */}
            <div className="w-28 sm:w-48 lg:w-64 h-[2px] bg-white/20 rounded-full relative overflow-hidden">
              <div 
                className="h-full bg-[#F5B800] rounded-full transition-all duration-150 shadow-[0_0_8px_#F5B800]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Right: Giant Stylish Slide Number */}
          <div className="flex items-baseline gap-1 text-white font-mono select-none drop-shadow">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest">
              0{currentIndex + 1}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-sans tracking-widest uppercase">
              / 0{slides.length}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
