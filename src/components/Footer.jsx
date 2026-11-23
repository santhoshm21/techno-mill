import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Youtube, 
  ArrowUp
} from 'lucide-react';
import TMTLogo from './TMTLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1E2227] text-gray-300 font-['Inter',_sans-serif] border-t border-[#2D333B] relative">
      
      {/* Main Footer Directory */}
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: TMT Gladius Brand Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <TMTLogo variant="light" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm pt-2">
              Leading precision cutting tool manufacturer specializing in solid carbide drills, high-performance end mills, milling cutters, indexable inserts, and bespoke custom tooling solutions.
            </p>
          </div>

          {/* Col 2: Quick Links (Strictly Home, About, Products, Contact, Careers) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Inter',_sans-serif]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              <Link to="/" className="text-gray-400 hover:text-[#F5B800] transition-colors">Home</Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#F5B800] transition-colors">Contact</Link>
              
              <Link to="/about" className="text-gray-400 hover:text-[#F5B800] transition-colors">About</Link>
              <Link to="/careers" className="text-gray-400 hover:text-[#F5B800] transition-colors">Careers</Link>
              
              <Link to="/products" className="text-gray-400 hover:text-[#F5B800] transition-colors">Products</Link>
            </div>
          </div>

          {/* Col 3: Contact Us (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Inter',_sans-serif]">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F5B800] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  No.12, Industrial Estate,<br />
                  Chennai – 600 098
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F5B800] shrink-0" />
                <a href="tel:+914424760000" className="hover:text-white transition-colors">
                  +91 44 2476 0000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F5B800] shrink-0" />
                <a href="mailto:info@technomechtoolings.com" className="hover:text-white transition-colors">
                  info@technomechtoolings.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Follow Us (1.5 cols) */}
          <div className="lg:col-span-1 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Inter',_sans-serif]">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#F5B800] hover:bg-[#262B31] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#F5B800] hover:bg-[#262B31] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              {/* X / Twitter */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#F5B800] hover:bg-[#262B31] transition-all"
                aria-label="X / Twitter"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#15181C] border-t border-[#262B31] py-4 px-4 sm:px-6 lg:px-8 xl:px-12 text-xs text-gray-400">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            &copy; 2026 Techno Mech Toolings. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-[#F5B800]">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-[#F5B800]">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      {/* Floating Yellow Scroll-To-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-2 border-white"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

    </footer>
  );
}
