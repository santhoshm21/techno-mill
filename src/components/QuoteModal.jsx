import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, initialData } = useQuote();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    toolName: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill initial tool name when opened
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        toolName: initialData.productName || initialData.sku || '',
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      }));
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen, initialData]);

  // Handle ESC key to close
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        closeQuoteModal();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeQuoteModal}
    >
      <div 
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Simple & Clean Header */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              Request a Quick Quote
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Get pricing and technical specs within a few hours.
            </p>
          </div>
          <button
            onClick={closeQuoteModal}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Thank You, {formData.name}!</h4>
              <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                Your quote request for <strong>{formData.toolName || 'tooling'}</strong> has been received. Our engineering desk will contact you at <strong>{formData.email}</strong> shortly.
              </p>
              <div className="pt-3">
                <button
                  onClick={closeQuoteModal}
                  className="bg-[#111827] hover:bg-black text-white px-6 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full bg-gray-50/70 border rounded-lg px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-all ${
                      errors.name ? 'border-red-400' : 'border-gray-200 focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full bg-gray-50/70 border rounded-lg px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-all ${
                      errors.email ? 'border-red-400' : 'border-gray-200 focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Precision Tools Ltd."
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Tool / Requirement Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Tool Model / Requirement
                </label>
                <input
                  type="text"
                  value={formData.toolName}
                  onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
                  placeholder="e.g. Solid Carbide Two-Step Drill or Blueprint tool"
                  className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800] transition-all font-medium"
                />
              </div>

              {/* Row 4: Message / Quantity */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Quantity or Specific Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify quantity, diameters, workpiece material, or any custom specifications..."
                  className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F5B800] hover:bg-[#E0A800] text-[#111827] font-bold text-xs py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Quote Request</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
