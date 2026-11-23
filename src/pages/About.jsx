import React, { useState } from 'react';
import { 
  Play, 
  X, 
  Award, 
  Cpu, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';
import HeroVisual from '../components/HeroVisual';

export default function About({ embedded = false }) {
  useDocumentTitle('About Us | TECHNO MECH TOOLINGS (TMT)', !embedded);
  const { openQuoteModal } = useQuote();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const facilityHighlights = [
    {
      name: 'SAACKE UW I F',
      role: '5-Axis CNC Grinding Center',
      image: '/images/facility/saacke-5axis-hero.png'
    },
    {
      name: 'Ecogrind LX Plus',
      role: '5-Axis Tool & Cutter Grinder',
      image: '/images/about/ecogrind-lx-machine.png'
    },
    {
      name: 'Profile Projector 300H',
      role: 'Optical Metrology & Inspection',
      image: '/images/facility/profile-projector.png'
    },
    {
      name: 'Digital Precision Metrology',
      role: 'Sub-Micron Quality Testing',
      image: '/images/facility/digital-micrometer.png'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1F2937]">

      {/* =========================================================================
          1. HERO BANNER: Clean Photographic Header matching Template UI
          ========================================================================= */}
      <section className="relative w-full h-56 sm:h-64 lg:h-72 bg-[#141518] flex items-center justify-center overflow-hidden select-none">
        {/* Background Image with Dark Tint Overlay */}
        <img
          src="/images/company/tmt-factory-building.jpg"
          alt="Techno Mech Toolings Infrastructure"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-sans">
            About us
          </h1>
        </div>
      </section>

      {/* =========================================================================
          2. INTRODUCTION SECTION: Matching Reference Layout
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        
        {/* Top Tag & 2-Column Split: Heading on Left, Description on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          
          {/* Left Column: Bold Two-Tone Heading */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              <span className="text-[#F5B800]">Pioneering</span> Precision Solid Carbide Tooling &amp; Re-Sharpening!
            </h2>
          </div>

          {/* Right Column: 2 Paragraph Columns matching template */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Techno Mech Toolings (TMT) is a premier Indian manufacturer and re-sharpening specialist of high-performance solid carbide cutting tools, backed by over nineteen years of dedicated experience in the precision engineering industry.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              We empower automotive, aerospace, die-mold, and precision engineering industries with custom-engineered tools that deliver superior cutting speeds, extended tool life, and significant cost savings across mass production lines.
            </p>
          </div>

        </div>

        {/* =========================================================================
            3. THREE VALUE / FEATURE CARDS: Exact Replica of Template Row
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          
          {/* Card 1: Yellow Circular Icon */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-4 group">
            <div className="w-13 h-13 rounded-full bg-[#F5B800] text-[#111827] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#111827] leading-snug">
                19+ Years Experience
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Over nineteen years of precision engineering mastery and tooling innovation.
              </p>
            </div>
          </div>

          {/* Card 2: Dark Circular Icon */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-4 group">
            <div className="w-13 h-13 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#111827] leading-snug">
                5-Axis CNC Precision
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                German SAACKE &amp; Ecogrind grinders with automated sub-micron wheel dressing.
              </p>
            </div>
          </div>

          {/* Card 3: Yellow Circular Icon */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-4 group">
            <div className="w-13 h-13 rounded-full bg-[#F5B800] text-[#111827] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#111827] leading-snug">
                Tool Re-Cycling Savings
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Value-added tool re-cycling, edge micro-honing &amp; PVD thin-film recoating.
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================================
            4. OVERLAPPING MEDIA SHOWCASE: Large Base Visual + Overlapping Video Card
            ========================================================================= */}
        <div className="relative pb-10 sm:pb-16 lg:pb-24">
          
          {/* Large Main Base Image */}
          <div className="w-full lg:w-[84%] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-[#5FC8EE] aspect-[16/9] sm:aspect-[2/1] flex items-center justify-center relative">
            <img 
              src="/images/about/saacke-tooling-banner.png" 
              alt="SAACKE CNC-Grinding Center Model UW I F with 9-Tool Solid Carbide Cutting Tools Lineup" 
              className="w-full h-full object-contain p-4 sm:p-8 hover:scale-[1.01] transition-transform duration-500" 
            />
          </div>

          {/* Overlapping Video / Action Card matching Template */}
          <div className="relative lg:absolute lg:right-0 lg:bottom-0 w-full sm:w-[82%] lg:w-[46%] mt-6 lg:mt-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#111827] aspect-[16/10] group">
            <img 
              src="/images/gallery/hero-drill-lineup.jpg" 
              alt="Precision CNC Grinding Video Preview" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" 
            />
            
            {/* Dark Overlay & Centered Circular Play Button */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors flex items-center justify-center">
              <button 
                onClick={() => setVideoModalOpen(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5B800] hover:bg-[#E0A800] text-[#111827] flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 cursor-pointer"
                aria-label="Play 5-Axis Facility Video"
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
              </button>
            </div>

            {/* Video Label Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white pointer-events-none">
              <p className="text-xs font-bold">SAACKE 5-Axis CNC Precision Video</p>
              <p className="text-[11px] text-gray-300">Click to watch our sub-micron manufacturing &amp; metrology process</p>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          5. EXECUTIVE LEADERSHIP & RE-CYCLING TECHNOLOGY (Full Content Preserved)
          ========================================================================= */}
      <section className="bg-[#F8FAFC] py-14 sm:py-18 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Executive Vision & Mission Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug mb-5">
              &quot;To be India’s Leading Innovator in Precision Solid Carbide Manufacturing &amp; Customized Re-Sharpening Technology.&quot;
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              <p>
                <strong>Techno Mech Toolings</strong> is a vision of Solid Carbide cutting tools Manufacturing and Re-Sharpening technology, backed by <strong>over nineteen years of dedicated experience</strong> in the precision engineering industry.
              </p>
              <p>
                Our vision is to be a leader in Innovation and Introduction of Manufacturing &amp; Re-sharpening of Solid carbide tools — including <strong>Solid Carbide Drills, End Mills, Ballnose Cutters, Bull End Mills, Special Form Tools, and Inserts</strong> — through cutting-edge CNC technology, providing the highest quality tooling solutions to the Indian manufacturing industry with complete customized engineering.
              </p>
              <p>
                We understand the commercial and operational pressures facing today&apos;s CNC machine shops and mass production plants. Our goal is simple: deliver tools with micron-accurate geometries that reduce cycle times, eliminate chatter, and maximize tool life per corner.
              </p>
            </div>
          </div>

          {/* Facility Infrastructure & Manufacturing Plant Section */}
          <div className="bg-[#F5B800] rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E0A800]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-[#111827]">
                  Modern Manufacturing Facility &amp; Advanced Infrastructure
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#111827]/90 leading-relaxed font-normal">
                  <p>
                    Techno Mech Toolings operates from its dedicated <strong className="font-bold text-[#111827]">2,000+ sq.ft modern manufacturing facility</strong> situated in Chennai, India. Purpose-built for high-precision solid carbide cutting tool manufacturing and advanced tool re-conditioning, our plant integrates multi-axis CNC technology with rigorous quality assurance.
                  </p>
                  <p>
                    Our engineering infrastructure features <strong className="font-bold text-[#111827]">climate-controlled grinding bays, automated diamond wheel dressing, micro-honing finishing zones</strong>, and specialized thin-film PVD coating partnerships (AlTiN, TiAlN, DLC). Every square foot is engineered for micron-level geometric accuracy and clean handling.
                  </p>
                  <p>
                    Today we cater to precision tooling and re-sharpening demands from <strong className="font-bold text-[#111827]">small-scale workshops to large-scale Tier-1 manufacturing plants</strong>, maintaining unwavering standards in Quality, Quantity, and In-Time Delivery.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal({ productName: 'Manufacturing Facility Tour & Capability Inquiry' })}
                    className="bg-[#111827] hover:bg-black text-white font-bold text-xs px-6 py-3 rounded-xl shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Inquire About Facility Capabilities</span>
                    <ArrowRight className="w-4 h-4 text-[#F5B800]" />
                  </button>
                </div>
              </div>

              {/* Company Building Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#111827] rounded-2xl p-5 shadow-2xl text-white">
                  <h4 className="text-sm font-bold text-white tracking-tight mb-3">
                    Techno Mech Toolings Manufacturing Plant
                  </h4>
                  <div className="rounded-xl overflow-hidden aspect-[16/10] bg-gray-900 border-4 border-white shadow-lg">
                    <img 
                      src="/images/company/tmt-factory-building.jpg" 
                      alt="Techno Mech Toolings Corporate & Manufacturing Plant, Chennai" 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. FACILITY & MACHINERY SHOWCASE SECTION
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header matching template */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              <span className="text-[#F5B800]">Our</span> Facility
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed font-normal">
              State-of-the-art 5-axis CNC grinding centers, automated diamond wheel dressing, and comprehensive optical metrology testing spread across our dedicated 2,000 sq.ft plant.
            </p>
          </div>

          {/* 4 Cards Grid with Solid Yellow Bottom Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityHighlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
              >
                {/* Photo Container */}
                <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Solid Yellow Bottom Nameplate matching Template */}
                <div className="bg-[#F5B800] text-[#111827] p-3.5 text-center">
                  <h3 className="font-bold text-sm sm:text-base text-[#111827] tracking-tight leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#111827]/80 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE VIDEO PREVIEW MODAL
          ========================================================================= */}
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
                className="text-gray-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Simulation Canvas / Player */}
            <div className="aspect-video bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
              <HeroVisual className="absolute inset-0 w-full h-full opacity-60" />
              <div className="relative z-10 text-center space-y-3 max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#F5B800] text-[#111827] flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="text-xl font-extrabold text-white">Advanced CNC Tool Grinding &amp; Metrology</h4>
                <p className="text-xs text-gray-300">
                  Witness how TMT transforms raw tungsten carbide sintered rods into sub-micron precision drills and end mills with 100% optical inspection.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setVideoModalOpen(false);
                      openQuoteModal({ productName: 'Plant Visit & Video Inquiry' });
                    }}
                    className="bg-[#F5B800] text-[#111827] font-bold text-xs px-5 py-2 rounded-full cursor-pointer hover:bg-[#E0A800] transition-colors"
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
