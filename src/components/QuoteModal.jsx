import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { products } from '../data/products';

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, initialData } = useQuote();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    toolSku: '',
    quantity: '10',
    workpieceMaterial: '',
    technicalRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  // Pre-fill initial data when opened
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        toolSku: initialData.sku 
          ? `${initialData.sku} - ${initialData.productName}` 
          : (initialData.productName || '')
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
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company / Organization name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact phone number is required';
    if (!formData.quantity || Number(formData.quantity) <= 0) {
      newErrors.quantity = 'Valid order quantity is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Generate reference code
    const refCode = `TMT-RFP-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(refCode);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-none flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-lg shadow-2xl border border-gray-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1E2227] px-6 py-4 flex items-center justify-between border-b border-[#2D333B]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#262B31] border border-[#F5B800] flex items-center justify-center text-[#F5B800] font-bold text-xs">
              TMT
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Request Technical Tooling Quote</span>
                <span className="text-[10px] font-mono uppercase bg-[#F5B800] text-[#1E2227] font-extrabold px-1.5 py-0.5 rounded">
                  B2B Direct
                </span>
              </h3>
              <p className="text-xs text-gray-400">Guaranteed response within 4 business hours</p>
            </div>
          </div>
          <button
            onClick={closeQuoteModal}
            className="text-gray-400 hover:text-white p-1.5 rounded hover:bg-[#262B31] transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#1F2937]">Quote Request Registered</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-gray-800">{formData.fullName}</span>. Your request for{' '}
                <span className="font-semibold text-gray-800">{formData.company}</span> has been logged under reference code:
              </p>
              <div className="inline-block bg-[#F7F8FA] border border-gray-300 px-4 py-2 rounded font-mono font-bold text-base text-[#1E2227]">
                {quoteReference}
              </div>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Our application engineering and sales team will contact you at <span className="font-medium text-gray-700">{formData.email}</span> with dimensional proposals and pricing.
              </p>
              <div className="pt-4">
                <button
                  onClick={closeQuoteModal}
                  className="bg-[#1E2227] hover:bg-[#262B31] text-white px-6 py-2.5 rounded font-medium text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full border rounded px-3 py-2 text-sm focus:outline-none ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#F5B800]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Company / Plant Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Auto Components Pvt Ltd"
                    className={`w-full border rounded px-3 py-2 text-sm focus:outline-none ${
                      errors.company ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#F5B800]'
                    }`}
                  />
                  {errors.company && <p className="text-[11px] text-red-600 mt-0.5">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Work Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.com"
                    className={`w-full border rounded px-3 py-2 text-sm focus:outline-none ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#F5B800]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full border rounded px-3 py-2 text-sm focus:outline-none ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#F5B800]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Tool SKU or Description */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Tool Model / SKU / Specification
                  </label>
                  <input
                    type="text"
                    value={formData.toolSku}
                    onChange={(e) => setFormData({ ...formData, toolSku: e.target.value })}
                    placeholder="e.g. TMT-DRL-5D-IK or Custom Step Drill"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#F5B800]"
                  />
                  <p className="text-[10px] text-gray-500 mt-0.5">Pre-filled when clicked from a product card</p>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Estimated Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className={`w-full border rounded px-3 py-2 text-sm focus:outline-none ${
                      errors.quantity ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                    }`}
                  />
                  {errors.quantity && <p className="text-[11px] text-red-600 mt-0.5">{errors.quantity}</p>}
                </div>
              </div>

              {/* Workpiece Material */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Target Workpiece Material & Hardness
                </label>
                <input
                  type="text"
                  value={formData.workpieceMaterial}
                  onChange={(e) => setFormData({ ...formData, workpieceMaterial: e.target.value })}
                  placeholder="e.g. Inconel 718, Stainless 316L, Tool Steel 55 HRC, Grey Iron"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#F5B800]"
                />
              </div>

              {/* Technical Message / Blueprint Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Technical Requirements / Hole Depths / Tolerances
                </label>
                <textarea
                  rows="3"
                  value={formData.technicalRequirements}
                  onChange={(e) => setFormData({ ...formData, technicalRequirements: e.target.value })}
                  placeholder="Detail your component tolerances, through/blind hole requirements, cycle time targets, or attach blueprint details upon follow-up."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#F5B800]"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <div className="text-[11px] text-gray-500 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <span>Technical blueprints can be attached upon confirmation email.</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={closeQuoteModal}
                    className="px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded border border-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-5 py-2 rounded flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Quote Request</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
