import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  ShieldCheck,
  Building2,
  Globe,
  X,
  FileText
} from 'lucide-react';
import HeroVisual from '../components/HeroVisual';
import FactoryIllustration from '../components/FactoryIllustration';
import factoryBuildingImg from '../assets/images/tmt-factory-building.png';
import heroSolidCarbideTools from '../assets/images/hero-solid-carbide-tools.jpg';
import heroDrillLineup from '../assets/images/hero-solid-carbide-tools.jpg';
import heroCncMachining from '../assets/images/hero-cnc-machining.png';
import heroSaackeToolGeometries from '../assets/images/hero-saacke-tool-geometries.jpg';
import heroSaackeGrinder from '../assets/images/hero-saacke-grinder.jpg';
import { clients } from '../data/clients';
import {
  FaceMillVisual,
  EndMillVisual,
  TwistDrillVisual,
  TurningInsertVisual,
  SpecialToolVisual
} from '../components/RealisticToolVisuals';
import {
  TataLogo,
  MahindraLogo,
  SiemensLogo,
  BoschLogo,
  ToyotaLogo,
  HyundaiLogo
} from '../components/ClientLogos';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Home() {
  useDocumentTitle('TECHNO MECH TOOLINGS (TMT) | Precision Engineering. Exceptional Tooling.');
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [clientSlideIndex, setClientSlideIndex] = useState(0);



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
      primaryBtn: { text: 'View Reconditioning Services', link: '/services' },
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
      primaryBtn: { text: 'Explore Special Tools', link: '/products?category=special-tools' },
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
      primaryBtn: { text: 'Explore Machine Facility', link: '/facility' },
      type: 'image',
      image: heroSaackeGrinder,
      alt: 'SAACKE UW I F 5-Axis CNC Tool & Cutter Grinding Machine'
    }
  ];

  // Auto-advance every 5 seconds: 1st -> 2nd -> 3rd -> 1st
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // 5 Quick Category Cards (under Hero)
  const quickCategories = [
    { name: 'Drills', slug: 'drills', visual: TwistDrillVisual },
    { name: 'End Mills', slug: 'end-mills', visual: EndMillVisual },
    { name: 'Burnishing Drills', slug: 'burnishing-drills', visual: FaceMillVisual },
    { name: 'Reamers', slug: 'reamers', visual: TurningInsertVisual },
    { name: 'Special Tools', slug: 'special-tools', visual: SpecialToolVisual },
  ];

  // 4 Featured Products (right of sidebar)
  const productsList = [
    {
      id: 'tmt-drl-twostep',
      title: 'Two-Step Carbide Drills',
      subtitle: 'High Productivity Drilling',
      visual: TwistDrillVisual,
      link: '/products/tmt-drl-twostep'
    },
    {
      id: 'tmt-em-sq1',
      title: 'Solid Carbide End Mills',
      subtitle: 'Precision Milling Tools',
      visual: EndMillVisual,
      link: '/products/tmt-em-sq1'
    },
    {
      id: 'tmt-bd-single',
      title: 'Burnishing Drills',
      subtitle: 'Mirror Surface Hole Finish',
      visual: FaceMillVisual,
      link: '/products/tmt-bd-single'
    },
    {
      id: 'tmt-rm-thrucool',
      title: 'Through Coolant Reamers',
      subtitle: 'H7 Precision Sizing',
      visual: TurningInsertVisual,
      link: '/products/tmt-rm-thrucool'
    }
  ];

  const visibleClientsCount = 6;
  const maxClientIndex = Math.max(0, clients.length - visibleClientsCount);

  const handlePrevClient = () => {
    setClientSlideIndex(prev => (prev <= 0 ? maxClientIndex : prev - 1));
  };

  const handleNextClient = () => {
    setClientSlideIndex(prev => (prev >= maxClientIndex ? 0 : prev + 1));
  };

  return (
    <div className="bg-white font-sans antialiased text-[#1F2937]">

      {/* 1. HERO SECTION (Auto-cycling Carousel: 5 Slides, 5 Seconds Each - Full Screen Viewport) */}
      <section className="relative bg-[#0D1117] text-white min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden border-b border-gray-200">

        {/* Slide 0 (Replaced 1st image with 5th image): Real TMT Manufacturing Plant Facility */}
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

        {/* Slide 4 (5th Slide): SAACKE UW I F 5-Axis CNC Tool Grinding Center */}
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

        {/* Bottom subtle gradient for superior card readability */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/75 to-transparent pointer-events-none z-10"></div>

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

        {/* Hero Overlay Content on Left (Shifted 1 inch to right and 0.5cm upward) */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-12 lg:pt-16 pb-4 flex-1 flex flex-col justify-center">
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
              <Link
                to={heroSlides[activeSlide].primaryBtn.link}
                className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 transform active:scale-95"
              >
                <span>{heroSlides[activeSlide].primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Carousel Dot Indicators (Every 5 sec move to next slide) */}
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

        {/* 2. CATEGORY QUICK ICON STRIP (5 Horizontal Cards Docked at Bottom of Full-Screen Hero) */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-5 sm:pb-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {quickCategories.map((item, idx) => {
              const VisualComp = item.visual;
              return (
                <Link
                  key={idx}
                  to={`/products?category=${item.slug}`}
                  className="bg-white/95 hover:bg-white backdrop-blur-md border border-white/20 hover:border-[#F5B800] rounded-xl p-3 shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 group transform hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#F8FAFC] border border-gray-200 p-1 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    <VisualComp className="w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-[#D97706] transition-colors leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </section>

      {/* 3. MAIN PRODUCTS & CATEGORIES SECTION (Two-Column Layout) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Product Categories Sidebar + Promo Banner (3 cols) */}
          <div className="lg:col-span-3 space-y-5">

            {/* Product Categories Card */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {/* Golden Yellow Header */}
              <div className="bg-[#F5B800] px-4 py-3 font-extrabold text-sm text-[#1E2227]">
                Product Categories
              </div>

              {/* Category Links with Chevrons */}
              <div className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
                <Link to="/products?category=drills" className="flex items-center justify-between px-4 py-3 hover:bg-amber-50/60 hover:text-[#F5B800] transition-colors">
                  <span>Drills</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
                <Link to="/products?category=end-mills" className="flex items-center justify-between px-4 py-3 hover:bg-amber-50/60 hover:text-[#F5B800] transition-colors">
                  <span>End Mills</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
                <Link to="/products?category=burnishing-drills" className="flex items-center justify-between px-4 py-3 hover:bg-amber-50/60 hover:text-[#F5B800] transition-colors">
                  <span>Burnishing Drills</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
                <Link to="/products?category=reamers" className="flex items-center justify-between px-4 py-3 hover:bg-amber-50/60 hover:text-[#F5B800] transition-colors">
                  <span>Reamers</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
                <Link to="/products?category=tapper-end-mills" className="flex items-center justify-between px-4 py-3 hover:bg-amber-50/60 hover:text-[#F5B800] transition-colors">
                  <span>Tapper End Mills</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
                <Link to="/products?category=woodruff-cutters" className="flex items-center justify-between px-4 py-3 hover:bg-amber-50/60 hover:text-[#F5B800] transition-colors">
                  <span>Woodruff Cutters</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
                <Link to="/products?category=special-tools" className="flex items-center justify-between px-4 py-3 hover:bg-amber-50/60 hover:text-[#F5B800] transition-colors">
                  <span>Special Tools</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
              </div>
            </div>

            {/* Custom Tooling Solutions Dark Promo Banner */}
            <div
              onClick={() => openQuoteModal({ productName: 'Custom Tooling Solutions' })}
              className="bg-[#1E2227] hover:bg-[#262B31] border border-gray-700 rounded-lg p-5 text-white cursor-pointer relative overflow-hidden transition-all group shadow-md"
            >
              <div className="relative z-10 space-y-1">
                <h4 className="text-base font-extrabold leading-tight">
                  Custom Tooling<br />
                  <span className="text-[#F5B800]">Solutions</span>
                </h4>
                <div className="pt-2 text-xs font-semibold text-gray-300 group-hover:text-white flex items-center gap-1">
                  <span>Built for Your needs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B800] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative cutting tool schematic on bottom right */}
              <div className="absolute -bottom-2 -right-4 w-28 h-20 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
                <EndMillVisual className="w-full h-full" />
              </div>
            </div>

          </div>

          {/* Right Column: "Our Products" Header & 4 Clean Product Cards (9 cols) */}
          <div className="lg:col-span-9 space-y-6">

            {/* Header: Title + View All Link */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-2 border-b border-gray-200 gap-2">
              <div>
                <div className="mb-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F2937]">
                    Our Products
                  </h2>
                </div>
                <p className="text-xs text-gray-500">
                  High-precision tools for diverse industrial applications.
                </p>
              </div>

              <Link
                to="/products"
                className="text-xs font-bold text-gray-800 hover:text-[#F5B800] flex items-center gap-1 transition-colors self-start sm:self-auto"
              >
                <span>View All Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Clean Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {productsList.map((prod) => {
                const VisualComponent = prod.visual;

                return (
                  <div
                    key={prod.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-[#F5B800] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Realistic Tool Illustration Frame */}
                      <Link
                        to={prod.link}
                        className="h-36 bg-[#F8FAFC] border border-gray-100 rounded-md p-3 flex items-center justify-center mb-3 group-hover:bg-[#F1F5F9] transition-colors"
                      >
                        <VisualComponent className="w-full h-full max-h-28 group-hover:scale-105 transition-transform" />
                      </Link>

                      {/* Tool Title */}
                      <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#F5B800] transition-colors line-clamp-1">
                        <Link to={prod.link}>{prod.title}</Link>
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {prod.subtitle}
                      </p>
                    </div>

                    {/* "Know More →" Link (Quote button removed) */}
                    <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                      <Link
                        to={prod.link}
                        className="text-xs font-bold text-[#D97706] hover:text-[#B45309] flex items-center gap-1 transition-colors"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. ABOUT TECHNO MECH TOOLINGS SECTION */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Real Techno Mech Toolings Manufacturing Facility & Headquarters */}
            <div className="lg:col-span-6 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md group">
              <div className="aspect-[16/10] sm:aspect-[2/1] relative overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={factoryBuildingImg}
                  onError={(e) => {
                    if (!e.target.dataset.fallback) {
                      e.target.dataset.fallback = '1';
                      e.target.src = './images/company/tmt-factory-building.png';
                    } else if (e.target.dataset.fallback === '1') {
                      e.target.dataset.fallback = '2';
                      e.target.src = '/images/company/tmt-factory-building.jpg';
                    }
                  }}
                  alt="Techno Mech Toolings Factory Facility and Headquarters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#1E2227]/90 backdrop-blur-xs text-white px-3 py-1 rounded text-[11px] font-mono font-semibold flex items-center gap-1.5 border border-white/20 shadow-sm pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse"></span>
                  <span>TMT Precision Tooling Plant &bull; Chennai</span>
                </div>
              </div>
            </div>

            {/* Right: About Content + 3 Stat Highlights (7 cols) */}
            <div className="lg:col-span-6 space-y-6 lg:pl-[1cm]">

              <div className="font-['Inter',_sans-serif]">
                {/* Heading (Yellow dash removed, font Inter, increased size) */}
                <div className="mb-2">
                  <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#D97706]">
                    About Techno Mech Toolings
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight leading-[1.15] mb-4">
                  Engineering Excellence<br />in Every Detail
                </h2>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  We are a leading manufacturer of precision cutting tools, committed to delivering innovative solutions with superior quality, advanced manufacturing and customer-focused service.
                </p>
              </div>

              {/* 3 Trust Stat Highlights in a clean, perfectly aligned grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-3 pb-3 border-y border-gray-100 max-w-xl">
                {/* Stat 1: 100% Quality Assurance */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#F5B800] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#F5B800]" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-gray-900 leading-none">100%</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Quality Assurance</div>
                  </div>
                </div>

                {/* Stat 2: 25+ Years of Experience */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#F5B800] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-[#F5B800]" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-gray-900 leading-none">25+</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Years of Experience</div>
                  </div>
                </div>

                {/* Stat 3: Global Presence */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#F5B800] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[#F5B800]" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-gray-900 leading-none">Global</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Presence</div>
                  </div>
                </div>
              </div>

              {/* Yellow CTA Button */}
              <div className="pt-1">
                <Link
                  to="/about"
                  className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 group"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>



      {/* 6. OUR VALUED CLIENTS SECTION (Carousel with Prev/Next Controls) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-1 bg-[#F5B800] rounded-full inline-block"></span>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#1F2937]">
              Our Valued Clients
            </h2>
          </div>

          <Link
            to="/clients"
            className="text-xs font-bold text-gray-700 hover:text-[#D97706] flex items-center gap-1 transition-colors"
          >
            <span>View All ({clients.length})</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F5B800]" />
          </Link>
        </div>

        {/* Carousel Container with Prev/Next buttons */}
        <div className="relative flex items-center">

          {/* Prev Button */}
          <button
            onClick={handlePrevClient}
            className="w-8 h-8 rounded-full border border-gray-300 hover:border-[#F5B800] hover:bg-amber-50 text-gray-600 hover:text-[#1E2227] flex items-center justify-center shrink-0 mr-3 transition-all"
            aria-label="Previous Clients"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Client Logos Grid in Full Original Color (No Grayscale) */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
            {clients.slice(clientSlideIndex, clientSlideIndex + visibleClientsCount).map((client, idx) => (
              <Link
                to="/clients"
                key={client.id || idx}
                className="h-16 sm:h-20 bg-white border border-gray-200 hover:border-[#F5B800] rounded-lg p-2.5 sm:p-3 flex items-center justify-center shadow-2xs hover:shadow-md transition-all group"
                title={`${client.name} — ${client.sector}`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 sm:max-h-12 max-w-full object-contain filter-none group-hover:scale-105 transition-transform"
                />
              </Link>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextClient}
            className="w-8 h-8 rounded-full border border-gray-300 hover:border-[#F5B800] hover:bg-amber-50 text-gray-600 hover:text-[#1E2227] flex items-center justify-center shrink-0 ml-3 transition-all"
            aria-label="Next Clients"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </section>

      {/* 7. INTERACTIVE VIDEO PREVIEW MODAL */}
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
