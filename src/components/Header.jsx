import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Wrench, 
  FileText
} from 'lucide-react';
import TMTLogo from './TMTLogo';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { useQuote } from '../context/QuoteContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const searchContainerRef = useRef(null);
  const prodDropdownRef = useRef(null);
  const servDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { openQuoteModal } = useQuote();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Live search filtering
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    const q = searchQuery.toLowerCase().trim();
    const matches = products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
    );

    setSearchResults(matches);
    setIsSearchOpen(true);
  }, [searchQuery]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (prodDropdownRef.current && !prodDropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
      if (servDropdownRef.current && !servDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['home', 'about', 'products', 'services', 'projects', 'facility', 'clients', 'careers', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      window.history.replaceState(null, '', `#${sectionId}`);
    }
  };

  const handleSelectProduct = (productId) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/products/${productId}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E7EB] shadow-sm font-sans">
      
      {/* MAIN HEADER BAR (White with TMT Gladius logo, Navigation, Search & CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Left: TMT Gladius Logo (strictly single-line, shifted more to the left) */}
          <TMTLogo variant="dark" className="shrink-0 -translate-x-3 sm:-translate-x-6 lg:-translate-x-10 xl:-translate-x-14" />

          {/* Center: Navigation Links (single-line, non-wrapping) */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-xs font-semibold whitespace-nowrap shrink-0">
            {/* Home */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className={`whitespace-nowrap px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                activeSection === 'home' && location.pathname === '/'
                  ? 'border-[#F5B800] text-[#D97706] font-bold'
                  : 'border-transparent text-gray-700 hover:text-[#D97706]'
              }`}
            >
              Home
            </a>

            {/* About Us */}
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`whitespace-nowrap px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                activeSection === 'about' && location.pathname === '/'
                  ? 'border-[#F5B800] text-[#D97706] font-bold'
                  : 'border-transparent text-gray-700 hover:text-[#D97706]'
              }`}
            >
              About Us
            </a>

            {/* Products Dropdown */}
            <div 
              ref={prodDropdownRef}
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className={`whitespace-nowrap flex items-center gap-0.5 px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                  activeSection === 'products' && location.pathname === '/'
                    ? 'border-[#F5B800] text-[#D97706] font-bold'
                    : 'border-transparent text-gray-700 hover:text-[#D97706]'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </a>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 shadow-xl rounded-b-md py-2 z-50">
                  <div className="px-3 py-1.5 border-b border-gray-100 text-[11px] font-mono text-gray-400 uppercase">
                    Tooling Catalogue
                  </div>
                  {categories.map((c) => (
                    <a
                      key={c.id}
                      href={`#products`}
                      onClick={(e) => {
                        scrollToSection(e, 'products');
                        navigate(`/?category=${c.slug}#products`);
                      }}
                      className="px-3 py-2 text-xs text-gray-700 hover:bg-amber-50 hover:text-[#D97706] flex items-center justify-between cursor-pointer"
                    >
                      <span>{c.name}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{c.toolCount}</span>
                    </a>
                  ))}
                  <div className="border-t border-gray-100 pt-1 mt-1 px-3">
                    <a
                      href="#products"
                      onClick={(e) => scrollToSection(e, 'products')}
                      className="text-xs text-[#D97706] font-semibold hover:underline cursor-pointer"
                    >
                      View All Products &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              ref={servDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className={`whitespace-nowrap flex items-center gap-0.5 px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                  activeSection === 'services' && location.pathname === '/'
                    ? 'border-[#F5B800] text-[#D97706] font-bold'
                    : 'border-transparent text-gray-700 hover:text-[#D97706]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </a>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 shadow-xl rounded-b-md py-2 z-50 text-xs">
                  <div className="px-3 py-1.5 border-b border-gray-100 text-[11px] font-mono text-gray-400 uppercase">
                    Re-Sharpening &amp; Coating
                  </div>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-[#D97706] cursor-pointer"
                  >
                    Drills, Step Drills &amp; Form Tools
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-[#D97706] cursor-pointer"
                  >
                    End Mill Re-Sharpening &amp; Re-Fluting
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-[#D97706] cursor-pointer"
                  >
                    Segment Broaching &amp; Round Broach
                  </a>
                  <div className="border-t border-gray-100 pt-1 mt-1 px-3">
                    <a
                      href="#services"
                      onClick={(e) => scrollToSection(e, 'services')}
                      className="text-xs text-[#D97706] font-semibold hover:underline cursor-pointer"
                    >
                      View All Services &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`whitespace-nowrap px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                activeSection === 'projects' && location.pathname === '/'
                  ? 'border-[#F5B800] text-[#D97706] font-bold'
                  : 'border-transparent text-gray-700 hover:text-[#D97706]'
              }`}
            >
              Projects
            </a>

            {/* Facility */}
            <a
              href="#facility"
              onClick={(e) => scrollToSection(e, 'facility')}
              className={`whitespace-nowrap px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                activeSection === 'facility' && location.pathname === '/'
                  ? 'border-[#F5B800] text-[#D97706] font-bold'
                  : 'border-transparent text-gray-700 hover:text-[#D97706]'
              }`}
            >
              Facility
            </a>

            {/* Clients */}
            <a
              href="#clients"
              onClick={(e) => scrollToSection(e, 'clients')}
              className={`whitespace-nowrap px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                activeSection === 'clients' && location.pathname === '/'
                  ? 'border-[#F5B800] text-[#D97706] font-bold'
                  : 'border-transparent text-gray-700 hover:text-[#D97706]'
              }`}
            >
              Clients
            </a>

            {/* Careers */}
            <a
              href="#careers"
              onClick={(e) => scrollToSection(e, 'careers')}
              className={`whitespace-nowrap px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                activeSection === 'careers' && location.pathname === '/'
                  ? 'border-[#F5B800] text-[#D97706] font-bold'
                  : 'border-transparent text-gray-700 hover:text-[#D97706]'
              }`}
            >
              Careers
            </a>

            {/* Contact Us */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`whitespace-nowrap px-2.5 py-2 border-b-2 transition-all cursor-pointer ${
                activeSection === 'contact' && location.pathname === '/'
                  ? 'border-[#F5B800] text-[#D97706] font-bold'
                  : 'border-transparent text-gray-700 hover:text-[#D97706]'
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Right: Search Box + Get a Quote CTA */}
          <div className="flex items-center gap-3">
            {/* Search Input Box */}
            <div ref={searchContainerRef} className="hidden md:block relative w-48 lg:w-56">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim() && setIsSearchOpen(true)}
                  className="w-full bg-white border border-gray-300 rounded-l-md py-1.5 pl-3 pr-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F5B800] h-9"
                />
                <button
                  type="submit"
                  className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] px-3 h-9 rounded-r-md flex items-center justify-center border border-l-0 border-[#F5B800] transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-1.5 w-80 bg-white border border-gray-200 rounded-md shadow-2xl overflow-hidden z-50 max-h-80 overflow-y-auto">
                  <div className="p-2 bg-gray-50 border-b border-gray-200 text-[11px] font-semibold text-gray-600 flex justify-between">
                    <span>Matches ({searchResults.length})</span>
                    <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  {searchResults.length === 0 ? (
                    <div className="p-3 text-xs text-gray-500 text-center">No tools found matching query.</div>
                  ) : (
                    searchResults.map(p => (
                      <button
                        key={p.id}
                        onClick={() => handleSelectProduct(p.id)}
                        className="w-full text-left p-2.5 hover:bg-amber-50 border-b border-gray-100 flex items-center justify-between text-xs transition-colors"
                      >
                        <div className="truncate pr-2">
                          <div className="font-semibold text-gray-800 truncate">{p.name}</div>
                          <div className="text-[10px] text-gray-500">{p.categoryName}</div>
                        </div>
                        <span className="text-[10px] font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-700 shrink-0">
                          {p.sku}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Yellow "Get a Quote →" Button */}
            <button
              onClick={() => openQuoteModal()}
              className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-4 py-2 rounded-md shadow-sm transition-all flex items-center gap-1.5 shrink-0 transform active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-gray-700 hover:text-black rounded"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-l px-3 py-1.5 text-xs text-gray-800"
            />
            <button type="submit" className="bg-[#F5B800] px-3 rounded-r text-[#1E2227]">
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Links */}
          <div className="divide-y divide-gray-100 text-xs font-semibold text-gray-800">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block py-2 hover:text-[#D97706]">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-2 hover:text-[#D97706]">About Us</a>
            <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="block py-2 hover:text-[#D97706]">Products</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block py-2 hover:text-[#D97706]">Services</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block py-2 hover:text-[#D97706]">Projects</a>
            <a href="#facility" onClick={(e) => scrollToSection(e, 'facility')} className="block py-2 hover:text-[#D97706]">Facility</a>
            <a href="#clients" onClick={(e) => scrollToSection(e, 'clients')} className="block py-2 hover:text-[#D97706]">Clients</a>
            <a href="#careers" onClick={(e) => scrollToSection(e, 'careers')} className="block py-2 hover:text-[#D97706]">Careers</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block py-2 hover:text-[#D97706]">Contact Us</a>
          </div>
        </div>
      )}

    </header>
  );
}
