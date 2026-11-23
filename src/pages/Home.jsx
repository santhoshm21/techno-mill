import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import HeroVisual from '../components/HeroVisual';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

// Home Section Additions (Matching Video Design Pattern)
import HomeKumoHero from '../components/HomeKumoHero';
import HomeAccordionGallery from '../components/HomeAccordionGallery';
import HomePlatformRow from '../components/HomePlatformRow';

// Remaining Sections Kept on Home Page
import Facility from './Facility';
import Clients from './Clients';
import HomeContactSection from '../components/HomeContactSection';

export default function Home() {
  useDocumentTitle('TECHNO MECH TOOLINGS (TMT) | Precision Engineering. Exceptional Tooling.');
  const { openQuoteModal } = useQuote();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Smooth scroll to hash on load or hash change
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="bg-white font-sans antialiased text-[#1F2937] selection:bg-[#F5B800] selection:text-[#1E2227]">

      {/* =========================================================================
          SECTION 1: HOME (3D Arc Interactive Hero, Accordion & Platforms)
          ========================================================================= */}
      <section id="home" className="scroll-mt-16">

        {/* Part A: 3D Arc Interactive Cutting Tool Hero (Matching Input Video UI Pattern) */}
        <HomeKumoHero onOpenVideoModal={() => setVideoModalOpen(true)} />

        {/* Part B: Video Pattern 1 - Interactive Expanding Image Accordion Gallery */}
        <HomeAccordionGallery />

        {/* Part C: Video Pattern 2 - High Performance Tooling Platforms Row */}
        <HomePlatformRow />

      </section>

      {/* =========================================================================
          SECTION 2: FACILITY (SAACKE 5-Axis CNC & Metrology Center)
          ========================================================================= */}
      <section id="facility" className="scroll-mt-16 border-t border-gray-200">
        <Facility embedded={true} />
      </section>

      {/* =========================================================================
          SECTION 3: CLIENTS (Yellow Background with White Logo Boxes Moving Left-to-Right)
          ========================================================================= */}
      <section id="clients" className="scroll-mt-16 border-t border-amber-300 bg-[#F5B800] py-8 sm:py-10">
        <Clients embedded={true} />
      </section>

      {/* =========================================================================
          SECTION 4: CONTACT US (Exact Replica of Reference UI, Next Before Footer)
          ========================================================================= */}
      <HomeContactSection />

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
                className="text-gray-400 hover:text-white p-1 rounded cursor-pointer"
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
                    className="bg-[#F5B800] text-[#1E2227] font-bold text-xs px-5 py-2 rounded-full cursor-pointer hover:bg-[#E0A800] transition-colors"
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
