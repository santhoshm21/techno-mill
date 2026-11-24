import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown, 
  Layers, 
  Filter, 
  Check, 
  FileText,
  ChevronRight,
  Info,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import CategorySidebar from '../components/CategorySidebar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Products({ embedded = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategorySlug = searchParams.get('category') || 'all';
  const urlSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [sortBy, setSortBy] = useState('default'); // 'default', 'name-asc', 'name-desc', 'sku'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { openQuoteModal } = useQuote();

  const activeCategoryObj = categories.find(c => c.slug === currentCategorySlug);

  useDocumentTitle(
    activeCategoryObj 
      ? `${activeCategoryObj.name} | TMT Tooling Catalogue` 
      : 'Solid Carbide Products & Catalogue | TECHNO MECH TOOLINGS',
    !embedded
  );

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (currentCategorySlug !== 'all') {
      result = result.filter(p => p.categoryId === currentCategorySlug);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.specs.application.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'sku') {
      result.sort((a, b) => a.sku.localeCompare(b.sku));
    } else {
      // 'default' (featured first)
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [currentCategorySlug, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (slug) => {
    setCurrentPage(1);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSortBy('default');
    setCurrentPage(1);
    searchParams.delete('category');
    searchParams.delete('search');
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1F2937] pb-20">
      
      {/* 1. TOP STORE HEADER BANNER WITH GENUINE DRILL BITS BACKGROUND IMAGE & YELLOW ANGLED RIBBON */}
      <div className="relative bg-[#F3F4F6] bg-[url('/images/products/drill-lineup-banner.jpg')] bg-cover bg-[position:center_45%] border-b border-[#E5E7EB] pt-14 pb-16 overflow-hidden shadow-inner">
        
        {/* Soft translucent overlay balancing drill bit visibility and text contrast */}
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[0.5px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Main Title: PRODUCTION */}
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 uppercase font-sans drop-shadow-sm">
            {activeCategoryObj ? activeCategoryObj.name : 'PRODUCTION'}
          </h1>

          {/* Yellow Angled Breadcrumb / Category Badge */}
          <div className="mt-4 inline-flex items-center justify-center max-w-full">
            <div className="relative inline-block bg-[#F5B800] text-[#1E2227] px-3 sm:px-6 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-md transform-none sm:-skew-x-12 border border-amber-400 max-w-full">
              <span className="transform-none sm:skew-x-12 inline-flex items-center justify-center gap-1.5 font-black flex-wrap">
                {!embedded ? (
                  <>
                    <span>You are here :</span>
                    <Link to="/" className="hover:underline">Home</Link>
                    <span>/</span>
                    <span>Products</span>
                    {activeCategoryObj && (
                      <>
                        <span>/</span>
                        <span className="text-black font-black">{activeCategoryObj.name}</span>
                      </>
                    )}
                  </>
                ) : (
                  <span>
                    {activeCategoryObj ? `Catalogue : ${activeCategoryObj.name}` : 'Precision Solid Carbide Lineup'}
                  </span>
                )}
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-gray-900 max-w-xl mx-auto font-bold drop-shadow-sm">
            Solid Carbide Cutting Tools &bull; Precision Re-Sharpening Technology &bull; Direct Factory Supply
          </p>
        </div>
      </div>

      {/* 2. AUTHENTIC CATEGORY TECHNICAL HIGHLIGHT BANNER (From User Input Images 1-4) */}
      {activeCategoryObj && (
        <div className="bg-[#FFFDF5] border-b border-amber-200 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Technical Capabilities &bull; {activeCategoryObj.name}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-medium max-w-3xl leading-relaxed">
                {activeCategoryObj.description}
              </p>
            </div>

            <button
              onClick={() => openQuoteModal({ category: activeCategoryObj.name })}
              className="bg-[#1E2227] hover:bg-black text-white font-bold text-xs px-4 py-2 rounded-md shadow-sm shrink-0 flex items-center gap-1.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Inquire for {activeCategoryObj.name}</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. MAIN CATALOGUE LAYOUT (Left Sidebar + Right 3-Col Grid from Image 5) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* LEFT SIDEBAR (Search, Filter by Diameter, Categories, Featured Tools) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Search Input Box (Image 5 Top Left) */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 shadow-xs">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search Products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-l-md px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F5B800]"
                />
                <button
                  type="submit"
                  className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] px-3.5 py-2 rounded-r-md border border-[#F5B800] flex items-center justify-center transition-colors shrink-0"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Category Sidebar Component */}
            <CategorySidebar 
              activeCategory={currentCategorySlug} 
              onSelectCategory={handleCategoryChange} 
            />

          </div>

          {/* RIGHT COLUMN: CATALOGUE GRID */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Top Results Bar & Sorting Dropdown */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm font-['Inter',_sans-serif]">
              <div className="text-gray-600">
                Showing{' '}
                <strong className="text-gray-900 font-bold">
                  {filteredProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
                  –
                  {Math.min(currentPage * itemsPerPage, filteredProducts.length)}
                </strong>{' '}
                of <strong className="text-gray-900 font-bold">{filteredProducts.length}</strong> results
                {currentCategorySlug !== 'all' && (
                  <span className="ml-2 bg-amber-50 text-[#D97706] font-semibold px-2 py-0.5 rounded border border-amber-200">
                    {activeCategoryObj?.name}
                  </span>
                )}
              </div>

              {/* Sorting Dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Sort By:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F9FAFB] border border-gray-300 rounded px-2.5 py-1.5 text-xs text-gray-800 font-medium focus:outline-none focus:border-[#F5B800] font-['Inter',_sans-serif]"
                >
                  <option value="default">Default sorting</option>
                  <option value="name-asc">Sort by name: A to Z</option>
                  <option value="name-desc">Sort by name: Z to A</option>
                  <option value="sku">Sort by SKU</option>
                </select>

                {(searchQuery || currentCategorySlug !== 'all') && (
                  <button
                    onClick={clearAllFilters}
                    className="text-gray-500 hover:text-red-600 flex items-center gap-1 text-[11px] underline ml-2"
                  >
                    <X className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Zero State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-12 text-center space-y-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-[#D97706]">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900">No cutting tools match your criteria</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try adjusting your search terms or select another category from the sidebar.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-[#F5B800] text-[#1E2227] font-bold text-xs px-4 py-2 rounded-md shadow-xs hover:bg-[#E0A800]"
                >
                  View All Products
                </button>
              </div>
            ) : (
              /* 3-Column Product Cards Grid (Like Image 5 Reference) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* 4. PAGINATION BUTTONS (Yellow & White Scheme from Image 5) */}
            {totalPages > 1 && (
              <div className="pt-6 border-t border-gray-200 flex items-center justify-center gap-2">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = currentPage === pageNum;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 200, behavior: 'smooth' });
                      }}
                      className={`w-9 h-9 rounded-md text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#F5B800] text-[#1E2227] shadow-sm font-black'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-[#F5B800] hover:text-[#D97706]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {currentPage < totalPages && (
                  <button
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                      window.scrollTo({ top: 200, behavior: 'smooth' });
                    }}
                    className="w-9 h-9 rounded-md bg-white border border-gray-200 text-gray-700 hover:border-[#F5B800] hover:text-[#D97706] text-xs font-bold transition-all flex items-center justify-center"
                    aria-label="Next Page"
                  >
                    &rsaquo;
                  </button>
                )}
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
