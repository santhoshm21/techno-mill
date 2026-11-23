import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  X
} from 'lucide-react';
import HeroVisual from '../components/HeroVisual';
import factoryBuildingImg from '../assets/images/tmt-factory-building.png';
import heroSolidCarbideTools from '../assets/images/hero-solid-carbide-tools.jpg';
import heroCncMachining from '../assets/images/hero-cnc-machining.png';
import heroSaackeToolGeometries from '../assets/images/hero-saacke-tool-geometries.jpg';
import heroSaackeGrinder from '../assets/images/hero-saacke-grinder.jpg';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

// Home Section Additions (Matching Video Design Pattern)
import HomeAccordionGallery from '../components/HomeAccordionGallery';
import HomePlatformRow from '../components/HomePlatformRow';

export default function Home() {
  useDocumentTitle('TECHNO MECH TOOLINGS (TMT) | Precision Engineering. Exceptional Tooling.');
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Hero Carousel Slides (Auto-cycles every 5 seconds)
  const heroSlides = [
    {
      id: 0,
      badge: 'Welcome to Techno Mech Toolings',
      title: 'Precision Engineering.',
      highlight: 'Direct Factory Supply.',
      desc: 'Delivering innovative solid carbide tooling solutions and reconditioning services from our state-of-the-art Chennai manufacturing plant.',
      primaryBtn: { text: 'Explore Our Products', link: '/products' },
      type: 'image',
      image: factoryBuildingImg,
      alt: 'Techno Mech Toolings Manufacturing Plant & Headquarters'
    },
    {
      id: 1,
      badge: 'Solid Carbide Cutting Tools',
      title: 'Sub-Micron Precision.',
      highlight: 'Extended Tool Life.',
      desc: 'High-performance drills, reamers, end mills, and custom form tools engineered with premium European carbide rods.',
      primaryBtn: { text: 'Browse Tool Catalog', link: '/products' },
      type: 'image',
      image: heroSolidCarbideTools,
      alt: 'Precision Solid Carbide Cutting Tools Lineup'
    },
    {
      id: 2,
      badge: '5-Axis CNC Re-Sharpening & Recoating',
      title: 'Restore OEM Geometry.',
      highlight: 'Save Up to 60%.',
      desc: 'Precision diamond-wheel regrinding, OD re-fluting, and thin-film PVD recoating for drills, end mills, and broaches.',
      primaryBtn: { text: 'View Reconditioning Services', link: '/contact' },
      type: 'image',
      image: heroCncMachining,
      alt: '5-Axis CNC Tool Reconditioning and Recoating'
    },
    {
      id: 3,
      badge: 'Custom Geometries & Tip Profiles',
      title: 'Engineered Geometries.',
      highlight: 'Multi-Flute Design.',
      desc: 'Custom-designed drill point profiles, multi-step geometries, split points, and through-coolant hole configurations ground on SAACKE 5-axis CNC centers.',
      primaryBtn: { text: 'Explore Special Tools', link: '/products' },
      type: 'image',
      image: heroSaackeToolGeometries,
      alt: 'SAACKE 5-Axis CNC and Custom Tool Tip Geometries'
    },
    {
      id: 4,
      badge: 'SAACKE UW I F 5-Axis CNC Center',
      title: 'Precision Flute Grinding.',
      highlight: 'Sub-Micron Tolerances.',
      desc: 'High-speed 5-axis CNC tool and cutter grinding ensuring exceptional flute geometry, mirror finishes, and extended cutting tool durability.',
      primaryBtn: { text: 'Explore Machine Facility', link: '/about' },
      type: 'image',
      image: heroSaackeGrinder,
      alt: 'SAACKE UW I F 5-Axis CNC Tool & Cutter Grinding Machine'
    }
  ];

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleHeroBtnClick = (e, targetPath) => {
    e.preventDefault();
    navigate(targetPath);
  };

  return (
    <div className="bg-white font-sans antialiased text-[#1F2937] selection:bg-[#F5B800] selection:text-[#1E2227]">

      {/* =========================================================================
          SECTION 1: HOME (Hero Carousel, Accordion Gallery & Tooling Platforms)
          ========================================================================= */}
      <section id="home" className="scroll-mt-16">

        {/* Part A: Full-Height Hero Carousel With 5-Second Rotation */}
        <div className="relative bg-[#0D1117] text-white min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden border-b border-gray-800">

        {/* Slide 0: TMT Manufacturing Plant Facility */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeSlide === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <img
            src={factoryBuildingImg}
            alt="Techno Mech Toolings Manufacturing Plant & Headquarters"
            className="w-full h-full object-cover object-right md:object-center filter brightness-75 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/85 to-transparent"></div>
        </div>

        {/* Slide 1: High-Precision Cutting Tools Lineup Photograph */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeSlide === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <img
            src={heroSolidCarbideTools}
            alt="Precision Solid Carbide Cutting Tools"
            className="w-full h-full object-cover object-right md:object-center filter brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/70 to-transparent"></div>
        </div>

        {/* Slide 2: 5-Axis CNC Tool Grinding & Recoating Facility */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeSlide === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <img
            src={heroCncMachining}
            alt="5-Axis CNC Tool Reconditioning and Recoating"
            className="w-full h-full object-cover object-right md:object-center filter brightness-70 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/85 to-transparent"></div>
        </div>

        {/* Slide 3: SAACKE 5-Axis CNC and Custom Tool Tip Geometries */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeSlide === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <img
            src={heroSaackeToolGeometries}
            alt="SAACKE 5-Axis CNC and Custom Tool Tip Geometries"
            className="w-full h-full object-cover object-right md:object-center filter brightness-80 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/85 to-transparent"></div>
        </div>

        {/* Slide 4: SAACKE UW I F 5-Axis CNC Tool Grinding Center */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeSlide === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <img
            src={heroSaackeGrinder}
            alt="SAACKE UW I F 5-Axis CNC Tool & Cutter Grinding Machine"
            className="w-full h-full object-cover object-right md:object-center filter brightness-80 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/85 to-transparent"></div>
        </div>

        {/* Left / Right Arrow Navigation for Quick Manual Control */}
        <button
          onClick={() => setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all opacity-60 hover:opacity-100 hidden sm:flex"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all opacity-60 hover:opacity-100 hidden sm:flex"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero Overlay Content on Left */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 flex-1 flex flex-col justify-center">
          <div className="max-w-xl lg:max-w-2xl pl-4 sm:pl-12 md:pl-20 lg:pl-24 -translate-y-[0.5cm]">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-3 sm:mb-4 min-h-[75px] sm:min-h-[105px]">
              {heroSlides[activeSlide].title}<br />
              <span className="text-[#F5B800]">{heroSlides[activeSlide].highlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-lg min-h-[44px]">
              {heroSlides[activeSlide].desc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={heroSlides[activeSlide].primaryBtn.link}
                onClick={(e) => handleHeroBtnClick(e, heroSlides[activeSlide].primaryBtn.link)}
                className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 transform active:scale-95"
              >
                <span>{heroSlides[activeSlide].primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-all flex items-center gap-2 backdrop-blur-xs"
              >
                <Play className="w-4 h-4 text-[#F5B800] fill-current" />
                <span>Watch Facility Tour</span>
              </button>
            </div>

            {/* Carousel Dot Indicators */}
            <div className="flex items-center space-x-2.5 mt-6 sm:mt-8">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx
                    ? 'w-7 bg-[#F5B800]'
                    : 'w-2.5 bg-gray-500 hover:bg-gray-400'
                    }`}
                  aria-label={`Slide ${idx + 1}: ${slide.badge}`}
                />
              ))}
            </div>

          </div>
        </div>

        </div>

        {/* Part B: Video Pattern 1 - Interactive Expanding Image Accordion Gallery */}
        <HomeAccordionGallery />

        {/* Part C: Video Pattern 2 - High Performance Tooling Platforms Row */}
        <HomePlatformRow />

      </section>

      {/* INTERACTIVE VIDEO PREVIEW MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div
            className="bg-[#1E2227] w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse"></span>
                <h3 className="font-bold text-sm">TECHNO MECH TOOLINGS • 5-Axis Precision Manufacturing Video</h3>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Simulation Canvas / Player */}
            <div className="aspect-video bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
              <HeroVisual className="absolute inset-0 w-full h-full opacity-60" />
              <div className="relative z-10 text-center space-y-3 max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#F5B800] text-[#1E2227] flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="text-xl font-extrabold text-white">Advanced CNC Tool Grinding & Metrology</h4>
                <p className="text-xs text-gray-300">
                  Witness how TMT transforms raw tungsten carbide sintered rods into sub-micron precision drills and end mills with 100% optical inspection.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setVideoModalOpen(false);
                      openQuoteModal({ productName: 'Plant Visit & Video Inquiry' });
                    }}
                    className="bg-[#F5B800] text-[#1E2227] font-bold text-xs px-5 py-2 rounded-full"
                  >
                    Schedule Plant Audit / Virtual Tour &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
