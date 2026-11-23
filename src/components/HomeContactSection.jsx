import React, { useState } from 'react';
import { CheckCircle2, Send, Sparkles } from 'lucide-react';

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!acceptedTerms) {
      setErrorMsg('Please accept the Terms of Service to proceed.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setAcceptedTerms(false);
    }, 800);
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title: Exact replica of reference UI */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight">
            Contact Us
          </h2>
        </div>

        {/* 2-Column Replica: Left Product on Shelf, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Standing Tool on 3D Floating Shelf with Dynamic Sparks */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center select-none">
            <div className="w-full max-w-[280px] sm:max-w-[320px] flex items-center justify-center">
              <img
                src="/images/contact-tool-shelf.png"
                alt="Techno Mech High-Precision Solid Carbide Tool"
                className="w-full h-auto max-h-[380px] object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/services/service-stepdrill-group.png';
                }}
              />
            </div>
          </div>

          {/* Right Column: Exact Form Replica */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            <div className="mb-6">
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed max-w-2xl font-normal">
                Connect with Techno Mech Toolings to explore advanced solid carbide tooling solutions, tool reconditioning, and innovative manufacturing possibilities. Our team is committed to understanding your requirements and delivering excellence through collaboration, precision engineering, and technical expertise.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-emerald-800">Thank you for reaching out!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Your inquiry has been received. A senior tooling engineer from our Chennai plant will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {errorMsg && (
                  <div className="text-xs text-red-600 bg-red-50 border border-red-200 px-3.5 py-2 rounded-lg font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Row 1: 3 Inline Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all shadow-2xs"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all shadow-2xs"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Row 2: Full-Width Message Box */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Message"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] resize-none transition-all shadow-2xs"
                  ></textarea>
                </div>

                {/* Row 3: Checkbox on Left, Orange Send Button on Right */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                  
                  {/* Left: Checkbox */}
                  <label className="flex items-center gap-2 cursor-pointer select-none text-xs sm:text-[13px] text-gray-700">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => {
                        setAcceptedTerms(e.target.checked);
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-[#F59E0B] focus:ring-[#F59E0B] cursor-pointer"
                    />
                    <span className="font-medium text-gray-600">I accept the Terms of Service</span>
                  </label>

                  {/* Right: Solid Orange Button matching reference */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-64 md:w-72 bg-[#F59E0B] hover:bg-[#EA580C] text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-lg shadow-xs hover:shadow transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send</span>
                    )}
                  </button>

                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
