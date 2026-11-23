import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomeAccordionGallery() {
  // Default expanded panel is index 0 (Solid Carbide Drills)
  const [activeIdx, setActiveIdx] = useState(0);

  const panels = [
    {
      id: 'drills',
      subtitle: 'Sub-Micron Precision',
      title: 'Solid Carbide Drills',
      desc: 'High-feed 2-flute and 3-flute drills with custom split points and through-coolant channels engineered for stainless steel, cast iron, and exotic alloys.',
      image: '/images/products/drill-lineup-banner.jpg',
      link: '#products',
      tag: 'DIN 6537 / 3xD - 30xD'
    },
    {
      id: 'endmills',
      subtitle: 'Vibration-Damping',
      title: 'High-Performance End Mills',
      desc: 'Variable helix square, ball nose, and bull nose solid carbide end mills delivering mirror surface finishes and rapid CNC metal removal rates.',
      image: '/images/products/pure-spindle.jpg',
      link: '#products',
      tag: '2 - 6 Flutes / Variable Pitch'
    },
    {
      id: 'burnishing',
      subtitle: 'Ra < 0.2µm Finish',
      title: 'Burnishing Drills',
      desc: 'Combined drilling and burnishing tools engineered to size and mirror-finish automotive bores in a single high-efficiency manufacturing cycle.',
      image: '/images/products/hero-solid-carbide-tools.jpg',
      link: '#products',
      tag: 'Mirror Bore Surface'
    },
    {
      id: 'reamers',
      subtitle: 'IT6 / IT7 Tolerance Class',
      title: 'Machine Reamers',
      desc: 'Through-coolant, straight flute, and helical left/right hand carbide reamers engineered for high-precision aerospace and automotive bores.',
      image: '/images/products/saacke-tool-geometries.jpg',
      link: '#products',
      tag: 'Sub-Micron Hole Sizing'
    },
    {
      id: 'regrinding',
      subtitle: 'German SAACKE Precision',
      title: '5-Axis Tool Regrinding',
      desc: 'Restore original OEM geometry, flute clearance angles, and edge preparation on drills and cutters with up to 60% operational savings.',
      image: '/images/about/ecogrind-lx-machine.png',
      link: '#services',
      tag: 'OEM Geometry Restoration'
    },
    {
      id: 'coatings',
      subtitle: 'AlTiN / TiN / AlCrN / DLC',
      title: 'Thin-Film PVD Coatings',
      desc: 'Advanced physical vapor deposition thin-film coatings providing thermal barriers up to 1,100°C and extended cutting edge longevity.',
      image: '/images/products/store-hero-factory.jpg',
      link: '#services',
      tag: 'Up to 3,400 HV Hardness'
    },
    {
      id: 'custom-form',
      subtitle: 'Direct From Workpiece CAD',
      title: 'Custom Form Tools',
      desc: 'Custom profiling tools and dovetail cutters ground directly to client blueprints on 5-axis CNC machines for automotive transmissions.',
      image: '/images/mission-drill-action.jpg',
      link: '#projects',
      tag: 'Custom Blueprint Profiles'
    },
    {
      id: 'special-tools',
      subtitle: 'Aerospace & Automotive',
      title: 'Special Multi-Step Tools',
      desc: 'Engineered multi-diameter step drills combining drilling, chamfering, and countersinking into one single cycle-time-reducing tool.',
      image: '/images/products/store-banner-bg.jpg',
      link: '#products',
      tag: 'Single-Pass Multi-Op'
    }
  ];

  const handleScroll = (e, targetHash) => {
    e.preventDefault();
    const el = document.querySelector(targetHash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', targetHash);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching video: Elegant "Choose From" script & Bold Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="font-serif italic text-lg sm:text-xl text-[#F5B800] tracking-wide block mb-1">
            Choose From
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2227] tracking-tight">
            World Class Cutting Tools For Every Application
          </h2>
          <div className="w-16 h-1 bg-[#F5B800] mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
            Explore our precision solid carbide tooling categories engineered for peak CNC performance, micron tolerances, and maximum cutting tool longevity.
          </p>
        </div>

        {/* Expanding Accordion Horizontal Gallery */}
        <div className="flex flex-col lg:flex-row gap-2.5 sm:gap-3 h-[520px] sm:h-[560px] lg:h-[580px] w-full overflow-hidden rounded-2xl select-none">
          {panels.map((panel, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={panel.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out shadow-md group ${
                  isActive
                    ? 'lg:flex-[4] flex-[3] ring-2 ring-[#F5B800]/80 shadow-xl'
                    : 'lg:flex-1 flex-1 opacity-80 hover:opacity-100 hover:shadow-lg'
                }`}
              >
                {/* Background Image */}
                <img
                  src={panel.image}
                  alt={panel.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isActive ? 'scale-105 filter brightness-90' : 'scale-100 filter brightness-70 group-hover:scale-105'
                  }`}
                  onError={(e) => {
                    // Fallback to solid carbide hero image if local file fails
                    e.currentTarget.src = '/images/products/hero-solid-carbide-tools.jpg';
                  }}
                />

                {/* Inactive State: Dark Overlay & Vertical Title Strip on Desktop */}
                {!isActive && (
                  <>
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors duration-300"></div>
                    
                    {/* Desktop Vertical Text rotated 180deg with writing-mode */}
                    <div className="hidden lg:flex absolute inset-0 flex-col justify-end items-center pb-8 pointer-events-none">
                      <span className="text-white font-bold tracking-wider text-xs xl:text-sm uppercase whitespace-nowrap rotate-180 [writing-mode:vertical-rl] drop-shadow-md">
                        {panel.title}
                      </span>
                    </div>

                    {/* Mobile Horizontal Condensed Label */}
                    <div className="lg:hidden absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white font-bold text-xs truncate">
                      {panel.title}
                    </div>
                  </>
                )}

                {/* Active State: Rich Bottom Gradient, Badge, Bold Title, Description & Button */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent p-6 sm:p-8 flex flex-col justify-end items-start text-left transition-opacity duration-500">
                    
                    {/* Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#F5B800] text-[#1E2227] mb-2 shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      {panel.subtitle}
                    </span>

                    {/* Main Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2 drop-shadow-md">
                      {panel.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-gray-200 line-clamp-3 mb-4 max-w-md leading-relaxed drop-shadow-xs">
                      {panel.desc}
                    </p>

                    {/* Tag / Specification pill */}
                    <div className="text-[11px] font-semibold text-amber-300/90 mb-4 bg-white/10 px-2.5 py-0.5 rounded backdrop-blur-xs border border-white/10">
                      Standard: {panel.tag}
                    </div>

                    {/* Outline Button: Discover More */}
                    <a
                      href={panel.link}
                      onClick={(e) => handleScroll(e, panel.link)}
                      className="inline-flex items-center gap-2 border-2 border-[#F5B800] text-white hover:bg-[#F5B800] hover:text-[#1E2227] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-md group/btn backdrop-blur-xs"
                    >
                      <span>Discover More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>

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
