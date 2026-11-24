import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeAccordionGallery() {
  // hoveredIdx is null by default so all 9 panels display equally in full vivid color (matching Image 1)
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const panels = [
    {
      id: 'drills',
      title: 'Solid Carbide Drills',
      subtitle: 'Sub-Micron Precision',
      desc: 'High-feed 2-flute and 3-flute drills with custom split points and through-coolant channels for stainless steel and titanium.',
      image: '/images/hero-slider-drills.jpg',
      link: '/products',
      tag: 'DIN 6537 / 3xD – 30xD'
    },
    {
      id: 'endmills',
      title: 'High-Performance End Mills',
      subtitle: 'Vibration-Damping',
      desc: 'Variable helix square, ball nose, and bull nose solid carbide end mills delivering mirror surface finishes and high metal removal rates.',
      image: '/images/hero-slider-endmills.jpg',
      link: '/products',
      tag: '2 – 6 Flutes / Variable Pitch'
    },
    {
      id: 'burnishing',
      title: 'Burnishing Drills',
      subtitle: 'Ra < 0.2µm Finish',
      desc: 'Combined drilling and burnishing tools engineered to size and mirror-finish automotive bores in a single operation.',
      image: '/images/hero-slider-reamers.jpg',
      link: '/products',
      tag: 'Mirror Bore Surface'
    },
    {
      id: 'reamers',
      title: 'Machine Reamers',
      subtitle: 'IT6 / IT7 Tolerance',
      desc: 'Through-coolant, straight flute, and helical left/right hand carbide reamers engineered for high-precision bores.',
      image: '/images/scroll-stages/stage-4-geometry.jpg',
      link: '/products',
      tag: 'Sub-Micron Hole Sizing'
    },
    {
      id: 'regrinding',
      title: '5-Axis Tool Regrinding',
      subtitle: 'German SAACKE Precision',
      desc: 'Restore original OEM geometry, flute clearance angles, and edge preparation on drills and cutters with up to 60% savings.',
      image: '/images/scroll-stages/stage-3-fluting.jpg',
      link: '/services',
      tag: 'OEM Geometry Restoration'
    },
    {
      id: 'coatings',
      title: 'Thin-Film PVD Coatings',
      subtitle: 'AlTiN / TiN / AlCrN / DLC',
      desc: 'Advanced physical vapor deposition thin-film coatings providing thermal barriers up to 1,100°C and superior wear resistance.',
      image: '/images/scroll-stages/stage-5-coated.jpg',
      link: '/services',
      tag: 'Up to 3,400 HV Hardness'
    },
    {
      id: 'custom-form',
      title: 'Custom Form Tools',
      subtitle: 'Direct From Workpiece CAD',
      desc: 'Custom profiling tools and dovetail cutters ground directly to client blueprints on 5-axis CNC machines for automotive transmissions.',
      image: '/images/scroll-stages/stage-2-shank.jpg',
      link: '/contact',
      tag: 'Custom Blueprint Profiles'
    },
    {
      id: 'special-tools',
      title: 'Special Multi-Step Tools',
      subtitle: 'Single-Pass Multi-Op',
      desc: 'Engineered multi-diameter step drills combining drilling, chamfering, and countersinking into one single cycle-time-reducing tool.',
      image: '/images/scroll-stages/stage-1-substrate.jpg',
      link: '/products',
      tag: 'Aerospace & Automotive'
    },
    {
      id: 'aerospace',
      title: 'Aerospace & Automotive Tooling',
      subtitle: 'High-Temp Alloys',
      desc: 'Dedicated cutting geometries engineered specifically for Inconel, hardened steels, and lightweight composites.',
      image: '/images/mission-drill-action.jpg',
      link: '/products',
      tag: 'Exotic Alloy Solutions'
    }
  ];

  const handlePanelClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', link);
      }
    }
  };

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header: Professional Modern Content Style */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-400 block mb-2">
            Choose From
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-[#111827] tracking-tight leading-tight">
            World-Class Cutting Tools For Every Application
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2.5 max-w-2xl mx-auto leading-relaxed font-normal">
            High-performance solid carbide drills, end mills, reamers, and custom form cutters ground to micron-level accuracy on 5-axis CNC grinding centers.
          </p>
        </div>

        {/* 9-Column Horizontal Strip Gallery (Horizontal swipe on mobile, expanding accordion on desktop) */}
        <div
          onMouseLeave={() => setHoveredIdx(null)}
          className="flex flex-row gap-2 sm:gap-2.5 h-[270px] sm:h-[300px] md:h-[330px] lg:h-[350px] xl:h-[370px] w-full overflow-x-auto sm:overflow-hidden select-none pb-2 sm:pb-0 scrollbar-none snap-x"
        >
          {panels.map((panel, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;

            return (
              <div
                key={panel.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setHoveredIdx(idx)}
                className={`relative overflow-hidden rounded-xs cursor-pointer transition-all duration-500 ease-out min-w-[145px] xs:min-w-[165px] sm:min-w-0 snap-start shrink-0 sm:shrink ${
                  isHovered
                    ? 'sm:flex-[3.5] lg:sm:flex-[4] shadow-xl z-10'
                    : isAnyHovered
                    ? 'sm:flex-1 opacity-70 hover:opacity-100'
                    : 'sm:flex-1 opacity-100 shadow-xs'
                }`}
              >
                {/* Product / Facility Image (Bright, vivid, un-tinted by default) */}
                <img
                  src={panel.image}
                  alt={panel.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isHovered ? 'scale-105' : 'scale-100'
                  }`}
                />

                {/* Mobile Bottom Label (Visible on small screens for touch navigation) */}
                <div className="sm:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 pt-6 flex flex-col justify-end text-left pointer-events-none">
                  <h3 className="text-xs font-bold text-white leading-tight line-clamp-1 drop-shadow-sm">
                    {panel.title}
                  </h3>
                </div>

                {/* Active Expanded State: Dark bottom gradient with Title, Description, and Outline Button */}
                {isHovered && (
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-5 flex-col justify-end items-start text-left transition-opacity duration-300">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-1 drop-shadow-md">
                      {panel.title}
                    </h3>
                    <p className="text-xs text-gray-200 line-clamp-2 max-w-sm mb-3 leading-relaxed drop-shadow-xs">
                      {panel.desc}
                    </p>
                    <Link
                      to={panel.link}
                      className="inline-flex items-center gap-1.5 border border-white text-white hover:border-[#F5B800] hover:text-[#F5B800] font-semibold text-xs px-3 py-1.5 rounded transition-all duration-300 backdrop-blur-xs"
                    >
                      <span>Discover More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
