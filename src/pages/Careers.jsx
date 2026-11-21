import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  X, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { careersData } from '../data/careers';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Careers({ embedded = false }) {
  useDocumentTitle('Careers | Join TECHNO MECH TOOLINGS', !embedded);

  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceYears: '',
    currentCompany: '',
    coverNote: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const handleOpenApplyModal = (job) => {
    setSelectedJob(job);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experienceYears: '',
      currentCompany: '',
      coverNote: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setIsApplyModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplyModalOpen(false);
    setSelectedJob(null);
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact number is required';
    if (!formData.experienceYears.trim()) errs.experienceYears = 'Experience in years is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const appCode = `TMT-JOB-${Math.floor(10000 + Math.random() * 90000)}`;
    setApplicationId(appCode);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <div className="bg-[#1E2227] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#2D333B]">
        <div className="max-w-7xl mx-auto">
          {!embedded && (
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5B800] mb-2 font-semibold">
              <Link to="/" className="hover:underline text-gray-400">Home</Link>
              <span className="text-gray-600">/</span>
              <span>Careers</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Career Opportunities at TMT
          </h1>
          <p className="text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
            Join a passionate team of CNC tool grinding experts, cutting tool designers, and metrology professionals manufacturing world-class solid carbide tools.
          </p>
        </div>
      </div>

      {/* Open Positions List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5B800]">
              Current Openings ({careersData.length})
            </span>
            <h2 className="text-2xl font-extrabold text-[#1F2937] tracking-tight mt-1">
              Join Our Engineering & Manufacturing Team
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {careersData.map((job) => (
            <div 
              key={job.id}
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 sm:p-8 shadow-sm hover:border-[#F5B800] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E5E7EB]">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-1">
                    <span className="font-medium text-gray-700">{job.department}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{job.location}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{job.experience}</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenApplyModal(job)}
                  className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-5 py-2.5 rounded shadow-sm self-start sm:self-auto transition-colors"
                >
                  Apply Now
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F7F8FA] p-4 rounded border border-[#E5E7EB]">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase font-mono mb-2">Key Responsibilities</h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#1E2227] shrink-0 mt-1.5"></span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase font-mono mb-2">Requirements & Experience</h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#F5B800] shrink-0 mt-1.5"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKING VALIDATED APPLY NOW MODAL */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-none flex items-center justify-center p-4">
          <div 
            className="relative bg-white w-full max-w-xl rounded-lg shadow-2xl border border-gray-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#1E2227] px-6 py-4 flex items-center justify-between border-b border-[#2D333B]">
              <div>
                <h3 className="text-base font-bold text-white">
                  Apply: {selectedJob?.title}
                </h3>
                <span className="text-xs text-gray-400 font-mono">
                  {selectedJob?.department} • {selectedJob?.location}
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Application Submitted Successfully</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-gray-800">{formData.fullName}</span>. Your application for <span className="font-semibold text-gray-800">{selectedJob?.title}</span> has been logged under ID:
                  </p>
                  <div className="inline-block bg-[#F7F8FA] border border-gray-300 px-4 py-1.5 rounded font-mono font-bold text-sm text-[#1E2227]">
                    {applicationId}
                  </div>
                  <p className="text-[11px] text-gray-500">
                    Our HR and Technical Recruiting team will review your credentials and reach out to <span className="font-medium text-gray-700">{formData.email}</span>.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={handleCloseModal}
                      className="bg-[#1E2227] text-white text-xs px-5 py-2 rounded font-medium"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Candidate Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anand Murthy"
                        className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                          errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                          errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Total Industry Experience <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        placeholder="e.g. 4 Years"
                        className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                          errors.experienceYears ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                        }`}
                      />
                      {errors.experienceYears && <p className="text-[11px] text-red-600 mt-0.5">{errors.experienceYears}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Current / Most Recent Employer
                    </label>
                    <input
                      type="text"
                      value={formData.currentCompany}
                      onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                      placeholder="e.g. Precision CNC Works"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#F5B800]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Brief Profile / Grinding Machines Handled / Resume Notes
                    </label>
                    <textarea
                      rows="3"
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Summarize your hands-on machinery experience (e.g. Walter Helitronic, ANCA, Rollomatic, metrology presetters, SolidWorks CAD)..."
                      className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#F5B800]"
                    ></textarea>
                  </div>

                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500">
                      TMT provides equal opportunity technical employment.
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded border border-gray-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-5 py-2 rounded flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Application</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
