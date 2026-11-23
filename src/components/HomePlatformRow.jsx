import React from 'react';
import { ChevronRight } from 'lucide-react';
import {
  TwistDrillVisual,
  EndMillVisual,
  FaceMillVisual,
  TurningInsertVisual,
  SpecialToolVisual
} from './RealisticToolVisuals';

export default function HomePlatformRow() {
  const platforms = [
    {
      id: 'drills',
      title: 'Twist Drills',
      spec: 'Ø1.0 – Ø25.0 mm',
      image: '/images/products/drill-helixgroove.png',
      link: '#products',
      altFallback: TwistDrillVisual
    },
    {
      id: 'endmills',
      title: 'Solid End Mills',
      spec: '2 / 4 / 6 Flutes',
      image: '/images/products/endmill-square-1.png',
      link: '#products',
      altFallback: EndMillVisual
    },
    {
      id: 'burnishing',
      title: 'Burnishing Drills',
      spec: 'Ra < 0.2 µm Finish',
      image: '/images/products/burnishing-drill-single.png',
      link: '#products',
      altFallback: FaceMillVisual
    },
    {
      id: 'reamers',
      title: 'Machine Reamers',
      spec: 'IT6 Precision Class',
      image: '/images/products/reamer-throughcoolant.png',
      link: '#products',
      altFallback: TurningInsertVisual
    },
    {
      id: 'stepdrills',
      title: 'Two-Step Drills',
      spec: 'Multi-Diameter Pass',
      image: '/images/products/drill-twostep.png',
      link: '#products',
      altFallback: TwistDrillVisual
    },
    {
      id: 'regrinding',
      title: '5-Axis Regrinding',
      spec: 'Save Up to 60%',
      image: '/images/services/service-drill-regrind.png',
      link: '#services',
      altFallback: SpecialToolVisual
    },
    {
      id: 'pvd',
      title: 'PVD Thin-Film',
      spec: 'AlTiN / DLC / TiN',
      image: '/images/services/service-stepdrill-group.png',
      link: '#services',
      altFallback: EndMillVisual
    },
    {
      id: 'formtools',
      title: 'Custom Form Tools',
      spec: 'Direct From CAD',
      image: '/images/projects/project-formtool-125.png',
      link: '#projects',
      altFallback: SpecialToolVisual
    },
    {
      id: 'special',
      title: 'Aerospace Tools',
      spec: 'High-Precision Micro',
      image: '/images/projects/project-microdrill-1.png',
      link: '#products',
      altFallback: SpecialToolVisual
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
    <section className="bg-white py-14 sm:py-16 lg:py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching video: "Choose From" script & "High Performance Chemistry Platforms" equivalent */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-serif italic text-lg sm:text-xl text-[#F5B800] tracking-wide block mb-1">
            Choose From
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2227] tracking-tight">
            High Performance Tooling Platforms
          </h2>
          <div className="w-16 h-1 bg-[#F5B800] mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
            Select a specialized cutting tool platform engineered with sub-micron European carbide rods and ground on high-precision German 5-axis CNC machining centers.
          </p>
        </div>

        {/* 9-Column Product Platform Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4">
          {platforms.map((platform) => {
            const FallbackSvg = platform.altFallback;
            return (
              <a
                key={platform.id}
                href={platform.link}
                onClick={(e) => handleScroll(e, platform.link)}
                className="group relative bg-white hover:bg-amber-50/50 border border-gray-200 hover:border-[#F5B800] rounded-xl p-3 sm:p-4 text-center transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col items-center justify-between cursor-pointer"
              >
                {/* Top Subtle Amber Indicator Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-[#F5B800] transition-colors rounded-t-xl"></div>

                {/* Tool Image Container */}
                <div className="h-24 sm:h-28 w-full flex items-center justify-center p-2 mb-2 relative">
                  <img
                    src={platform.image}
                    alt={platform.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* SVG Fallback */}
                  <div className="hidden w-full h-full items-center justify-center">
                    <FallbackSvg className="w-14 h-14 text-gray-600 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Label and Specification */}
                <div className="w-full flex flex-col items-center">
                  <span className="text-xs sm:text-[13px] font-bold text-gray-800 group-hover:text-[#F5B800] transition-colors leading-tight text-center line-clamp-2">
                    {platform.title}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium mt-1 truncate">
                    {platform.spec}
                  </span>
                </div>

                {/* Hover arrow hint */}
                <div className="mt-2 text-[#F5B800] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 text-[10px] font-bold">
                  <span>Explore</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
