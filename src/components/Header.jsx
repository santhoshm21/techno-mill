import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const searchContainerRef = useRef(null);
  const prodDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { openQuoteModal } = useQuote();

  // Scroll detection for transparent-to-glass transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on home page
      if (location.pathname === '/') {
        const sectionIds = ['home', 'facility', 'contact', 'clients'];
        const scrollPos = window.scrollY + 200;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  // Live search filtering
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
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
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);

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

  const isHome = location.pathname === '/';
  const showGlassBg = isScrolled || !isHome;

  return (
    <>
      {/* 1. TOP YELLOW ACCENT LINE (Exact Reference Video Pattern) */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#F5B800] z-50 shadow-[0_0_10px_#F5B800]" />

      {/* 2. MAIN NAVBAR */}
      <header 
        className={`fixed top-[2.5px] left-0 right-0 z-40 transition-all duration-300 ${
          showGlassBg
            ? 'bg-[#0B0F15]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          
          {/* LEFT: TMT Gladius Logo (Light version for high contrast) */}
          <TMTLogo variant="light" className="shrink-0 scale-95 sm:scale-100" />

          {/* CENTER: Navigation Links (Matching Video Pattern: Uppercase, Tracked, Active Yellow Underline) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-bold uppercase tracking-widest text-white/80 shrink-0">
            {/* HOME */}
            <Link
              to="/"
              className={`relative py-1 transition-colors hover:text-white ${
                isHome && activeSection === 'home' ? 'text-white' : 'text-white/80'
              }`}
            >
              <span>HOME</span>
              {isHome && activeSection === 'home' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#F5B800] rounded-full shadow-[0_0_8px_#F5B800]" />
              )}
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              className={`relative py-1 transition-colors hover:text-white ${
                location.pathname === '/about' ? 'text-white' : 'text-white/80'
              }`}
            >
              <span>ABOUT</span>
              {location.pathname === '/about' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#F5B800] rounded-full shadow-[0_0_8px_#F5B800]" />
              )}
            </Link>

            {/* PRODUCTS (Dropdown) */}
            <div 
              ref={prodDropdownRef}
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                to="/products"
                className={`relative py-1 flex items-center gap-1 transition-colors hover:text-white ${
                  location.pathname.startsWith('/products') ? 'text-white' : 'text-white/80'
                }`}
              >
                <span>PRODUCTS</span>
                <ChevronDown className="w-3.5 h-3.5" />
                {location.pathname.startsWith('/products') && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#F5B800] rounded-full shadow-[0_0_8px_#F5B800]" />
                )}
              </Link>

              {/* Products Dropdown Menu in Frosted Dark Glass */}
              {productsDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 bg-[#12161E]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl py-2 z-50 text-white animate-hero-text">
                  <div className="px-4 py-2 border-b border-white/10 text-[10px] font-mono tracking-wider text-[#F5B800] uppercase">
                    Solid Carbide Catalogue
                  </div>
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      to={`/products?category=${c.slug}`}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-between transition-colors"
                    >
                      <span>{c.name}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{c.toolCount}</span>
                    </Link>
                  ))}
                  <div className="border-t border-white/10 pt-2 mt-1 px-4">
                    <Link
                      to="/products"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="text-xs text-[#F5B800] hover:text-yellow-300 font-bold tracking-wider hover:underline flex items-center gap-1"
                    >
                      <span>VIEW ALL PRODUCTS</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <Link
              to="/services"
              className={`relative py-1 transition-colors hover:text-white ${
                location.pathname === '/services' ? 'text-white' : 'text-white/80'
              }`}
            >
              <span>SERVICES</span>
              {location.pathname === '/services' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#F5B800] rounded-full shadow-[0_0_8px_#F5B800]" />
              )}
            </Link>

            {/* FACILITY */}
            <Link
              to="/#facility"
              onClick={(e) => scrollToSection(e, 'facility')}
              className={`relative py-1 transition-colors hover:text-white ${
                isHome && activeSection === 'facility' ? 'text-white' : 'text-white/80'
              }`}
            >
              <span>FACILITY</span>
              {isHome && activeSection === 'facility' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#F5B800] rounded-full shadow-[0_0_8px_#F5B800]" />
              )}
            </Link>

            {/* CONTACT */}
            <Link
              to="/#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`relative py-1 transition-colors hover:text-white ${
                isHome && activeSection === 'contact' ? 'text-white' : 'text-white/80'
              }`}
            >
              <span>CONTACT</span>
              {isHome && activeSection === 'contact' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#F5B800] rounded-full shadow-[0_0_8px_#F5B800]" />
              )}
            </Link>

            {/* CLIENTS */}
            <Link
              to="/#clients"
              onClick={(e) => scrollToSection(e, 'clients')}
              className={`relative py-1 transition-colors hover:text-white ${
                isHome && activeSection === 'clients' ? 'text-white' : 'text-white/80'
              }`}
            >
              <span>CLIENTS</span>
              {isHome && activeSection === 'clients' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-[#F5B800] rounded-full shadow-[0_0_8px_#F5B800]" />
              )}
            </Link>
          </nav>

          {/* RIGHT: Search Icon + Request Quote CTA (Matching Video Pattern) */}
          <div className="flex items-center gap-3">
            
            {/* Search Toggle Icon */}
            <div ref={searchContainerRef} className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
                className="w-9 h-9 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/50 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Floating Search Popover */}
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-80 sm:w-96 bg-[#12161E]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-3 z-50 animate-hero-text">
                  <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search tools, SKUs, drill, mill..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-2 pl-3 pr-8 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#F5B800]"
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-2 text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Matches List */}
                  {searchQuery.trim().length > 0 && (
                    <div className="mt-2 max-h-60 overflow-y-auto divide-y divide-white/10">
                      {searchResults.length === 0 ? (
                        <div className="p-3 text-xs text-gray-400 text-center">No tools found matching "{searchQuery}"</div>
                      ) : (
                        searchResults.map(p => (
                          <button
                            key={p.id}
                            onClick={() => handleSelectProduct(p.id)}
                            className="w-full text-left p-2.5 hover:bg-white/10 rounded-lg flex items-center justify-between text-xs transition-colors cursor-pointer"
                          >
                            <div className="truncate pr-2">
                              <div className="font-bold text-white truncate">{p.name}</div>
                              <div className="text-[10px] text-gray-400">{p.categoryName}</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#F5B800] bg-white/5 px-1.5 py-0.5 rounded border border-[#F5B800]/20">
                              {p.sku}
                            </span>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Request Quote CTA Button */}
            <button
              onClick={() => openQuoteModal()}
              className="bg-[#F5B800] hover:bg-yellow-400 text-[#1E2227] text-xs font-black tracking-widest uppercase px-4 sm:px-5 py-2.5 rounded-full shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
            >
              <span>REQUEST QUOTE</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white rounded-lg"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* 3. MOBILE MENU OVERLAY DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0F15]/98 backdrop-blur-2xl lg:hidden flex flex-col p-6 animate-hero-text">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <TMTLogo variant="light" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#F5B800]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6 space-y-4 text-sm font-bold uppercase tracking-widest text-white">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#F5B800] border-b border-white/5"
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#F5B800] border-b border-white/5"
            >
              ABOUT
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#F5B800] border-b border-white/5"
            >
              PRODUCTS
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#F5B800] border-b border-white/5"
            >
              SERVICES
            </Link>
            <Link
              to="/#facility"
              onClick={(e) => scrollToSection(e, 'facility')}
              className="block py-2 hover:text-[#F5B800] border-b border-white/5"
            >
              FACILITY
            </Link>
            <Link
              to="/#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block py-2 hover:text-[#F5B800] border-b border-white/5"
            >
              CONTACT
            </Link>
            <Link
              to="/#clients"
              onClick={(e) => scrollToSection(e, 'clients')}
              className="block py-2 hover:text-[#F5B800] border-b border-white/5"
            >
              CLIENTS
            </Link>
          </div>

          {/* Bottom Quote Button on Mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openQuoteModal();
            }}
            className="w-full bg-[#F5B800] text-[#1E2227] font-black text-xs uppercase tracking-widest py-3.5 rounded-full shadow-lg"
          >
            REQUEST A QUOTE &rarr;
          </button>
        </div>
      )}
    </>
  );
}
