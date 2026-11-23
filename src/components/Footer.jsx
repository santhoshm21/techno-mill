import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#0D0E12] py-6 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-10 font-sans selection:bg-[#F5B800] selection:text-[#1E2227] relative">
      
      {/* =========================================================================
          REPLICA CONTAINER: Floating Dark Rounded Card (Exact Match to Reference UI)
          ========================================================================= */}
      <div className="max-w-[1440px] mx-auto bg-[#08090B] border border-white/[0.08] rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
        
        {/* Ambient Yellow Spotlight Glow behind bottom watermark */}
        <div 
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl h-44 sm:h-56 bg-[#F5B800]/15 blur-[90px] pointer-events-none rounded-full" 
          aria-hidden="true"
        />

        {/* -------------------------------------------------------------
            TOP SECTION: Brand Column (Left) + 4 Link Columns (Right)
            ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          
          {/* Brand Info (Left Side - 4 Columns) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              TECHNO MECH
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Techno Mech Toolings is a premier manufacturer specializing in high-precision solid carbide cutting tools, custom blueprints, and reconditioning solutions.
            </p>
          </div>

          {/* 4 Link Columns (Right Side - 8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Column 1: Quick link */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Quick link
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link to="/" className="hover:text-[#F5B800] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#F5B800] transition-colors duration-200">
                    About us
                  </Link>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-[#F5B800] transition-colors duration-200">
                    Contact us
                  </a>
                </li>
                <li>
                  <Link to="/products" className="hover:text-[#F5B800] transition-colors duration-200">
                    License
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link to="/services" className="hover:text-[#F5B800] transition-colors duration-200">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#F5B800] transition-colors duration-200">
                    Service details
                  </Link>
                </li>
                <li>
                  <a href="/#facility" className="hover:text-[#F5B800] transition-colors duration-200">
                    Project
                  </a>
                </li>
                <li>
                  <a href="/#facility" className="hover:text-[#F5B800] transition-colors duration-200">
                    Project details
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Others */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Others
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="/#clients" className="hover:text-[#F5B800] transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/#clients" className="hover:text-[#F5B800] transition-colors duration-200">
                    Blog details
                  </a>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-[#F5B800] transition-colors duration-200">
                    404
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Social
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#F5B800] transition-colors duration-200"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#F5B800] transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#F5B800] transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#F5B800] transition-colors duration-200"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* -------------------------------------------------------------
            MIDDLE SECTION: Copyright & Attribution (Exact Match to Reference)
            ------------------------------------------------------------- */}
        <div className="mt-14 sm:mt-20 lg:mt-24 mb-4 sm:mb-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 gap-3 relative z-10">
          <div>
            &copy; 2026 Techno Mech Tooling. All rights reserved.
          </div>
          <div>
            Design by Grabui - Powered by Placeholder
          </div>
        </div>

        {/* -------------------------------------------------------------
            BOTTOM SECTION: Giant Illuminated Typography "TECHNO MECH TOOLING"
            (Exact replica of green CONVRTO word changed to Yellow glowing gradient)
            ------------------------------------------------------------- */}
        <div className="relative pt-2 sm:pt-4 overflow-hidden flex justify-center items-end select-none pointer-events-none">
          <span 
            className="font-black uppercase tracking-tighter text-center leading-none whitespace-nowrap text-[6.5vw] transition-all duration-500 filter"
            style={{
              background: 'radial-gradient(ellipse 65% 100% at 50% 50%, #FFF275 0%, #F5B800 35%, rgba(245, 184, 0, 0.45) 70%, rgba(160, 100, 0, 0.12) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 35px rgba(245, 184, 0, 0.22))',
            }}
          >
            TECHNO MECH TOOLING
          </span>
        </div>

      </div>

      {/* Floating Yellow Scroll-To-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

    </footer>
  );
}
