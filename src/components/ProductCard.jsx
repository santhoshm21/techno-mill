import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function ProductCard({ product }) {
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-white border border-[#E5E7EB] hover:border-amber-400 rounded-lg shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden relative">
      
      {/* 1. ANGLE CORNER RIBBON (Like DeWalt store reference in Image 5) */}
      {product.badge && (
        <div className="absolute top-0 left-0 z-10 overflow-hidden w-24 h-24 pointer-events-none">
          <div className="bg-[#F5B800] text-[#1E2227] font-black text-[9px] uppercase tracking-wider py-1 px-6 text-center transform -rotate-45 -translate-x-7 translate-y-3 shadow-sm font-mono">
            {product.badge}
          </div>
        </div>
      )}



      {/* 2. PHOTO FRAME (Clean centered frame with genuine tool photo) */}
      <Link 
        to={`/products/${product.id}`}
        className="h-44 sm:h-48 w-full bg-[#FFFFFF] p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#FFFDF5] transition-colors"
      >
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 font-mono text-xs">
            Tool Visual
          </div>
        )}
      </Link>

      {/* 3. CARD CONTENT (Yellow & White Theme) */}
      <div className="p-4 flex-1 flex flex-col justify-between border-t border-gray-100 bg-white">
        <div>
          {/* Product Name */}
          <h3 className="font-bold text-sm text-[#1F2937] group-hover:text-[#D97706] transition-colors line-clamp-1 mb-1.5">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>

          {/* Authentic Description Snippet */}
          <p className="text-xs text-[#4B5563] line-clamp-2 mb-3 leading-relaxed font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Dual Actions: View Specs + Yellow "Get Quote" Button */}
        <div className="pt-2 border-t border-gray-100 grid grid-cols-2 gap-2">
          <Link
            to={`/products/${product.id}`}
            className="text-center py-2 px-2 text-xs font-bold text-gray-700 bg-white border border-[#E5E7EB] hover:bg-gray-50 hover:border-gray-300 rounded-md transition-colors flex items-center justify-center gap-1 shadow-2xs"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3 h-3 text-gray-400" />
          </Link>

          <button
            onClick={() => openQuoteModal({ productName: product.name, sku: product.sku })}
            className="text-center py-2 px-2 text-xs font-black text-[#1E2227] bg-[#F5B800] hover:bg-[#E0A800] rounded-md transition-all flex items-center justify-center gap-1 shadow-sm transform active:scale-95"
          >
            <FileText className="w-3 h-3" />
            <span>Get Quote</span>
          </button>
        </div>

      </div>

    </div>
  );
}
