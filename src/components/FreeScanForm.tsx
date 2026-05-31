import React, { useState } from 'react';
import { INDUSTRIES } from '../data';
import { ScanInput } from '../types';
import { ArrowRight, Loader2, Search, CheckCircle2, ShieldAlert, Target, Building2, MapPin, Globe, Mail, Phone, Flame } from 'lucide-react';

interface FreeScanFormProps {
  onScanComplete: (input: ScanInput) => void;
}

const SCAN_STEPS = [
  { id: 1, label: 'Connecting to Google Places & Maps API Grid...' },
  { id: 2, label: 'Scanning local Map Pack for market competitors...' },
  { id: 3, label: 'Auditing Google Business Profile signals and reviews...' },
  { id: 4, label: 'Testing landing page speed & mobile CTR bottlenecks...' },
  { id: 5, label: 'Sourcing organic local keyword volume leakages...' },
  { id: 6, label: 'Synthesizing customized 30-day tactical recovery roadmap...' }
];

export default function FreeScanForm({ onScanComplete }: FreeScanFormProps) {
  const [formData, setFormData] = useState<ScanInput>({
    businessName: '',
    industry: 'roofing',
    city: '',
    website: '',
    email: '',
    phone: '',
    focus: 'calls'
  });

  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.businessName || !formData.city || !formData.email || !formData.website) {
      setErrorMessage('Please fill out all required fields (*)');
      return;
    }

    setLoading(true);
    setActiveStep(0);

    // Simulate scanning timeline
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      if (currentStep < SCAN_STEPS.length) {
        setActiveStep(currentStep);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          onScanComplete(formData);
        }, 600);
      }
    }, 700);
  };

  return (
    <div id="free-scan-form-container" className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
      
      {/* Form State */}
      {!loading ? (
        <div className="p-6 sm:p-10">
          <div className="mb-8 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-3 border border-emerald-100/60">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Real-Time Competitor Audit
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
              Get Your Free Growth Audit
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              No credit card required. We analyze your market footprint in under 60 seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-100 text-red-700 text-xs rounded-xl flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Business Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Plumbing"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-900"
                    required
                  />
                </div>
              </div>

              {/* Industry Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Industry / Service Line
                </label>
                <div className="relative">
                  <Target className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-800 appearance-none cursor-pointer"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.value} value={ind.value}>
                        {ind.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* City / Market */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  City & State <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Austin, TX"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-900"
                    required
                  />
                </div>
              </div>

              {/* Website */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Website URL <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="e.g. apexplumbing.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-900"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. owner@apexplumbing.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-900"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 512-555-0199"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-900"
                  />
                </div>
              </div>

            </div>

            {/* Need Target Selection */}
            <div className="space-y-2 mt-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                What do you want to secure more of right now?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'calls', label: 'Inbound Phone Calls', desc: 'Direct emergency leads' },
                  { value: 'bookings', label: 'Online Appointments', desc: 'Direct software sync' },
                  { value: 'commercial', label: 'Commercial Projects', desc: 'Higher average ticket size' },
                  { value: 'reviews', label: 'Google Business Reviews', desc: 'Accelerated reputation' }
                ].map((item) => (
                  <label
                    key={item.value}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex flex-col ${
                      formData.focus === item.value
                        ? 'border-blue-500 bg-blue-50/40 ring-1 ring-blue-500/30'
                        : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="focus"
                      value={item.value}
                      checked={formData.focus === item.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold text-slate-800">{item.label}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5 leading-tight">{item.desc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              id="submit-scan-btn"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-6"
            >
              <Flame className="w-4.5 h-4.5 text-amber-300" />
              Generate Free Scan Now
              <ArrowRight className="w-4.5 h-4.5" />
            </button>

            {/* Helper Alert Text */}
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider max-w-xs mx-auto pt-2 font-mono">
              Demo form. Backend lead capture is next.
            </p>
          </form>
        </div>
      ) : (
        /* Loading Scan Simulation */
        <div className="p-10 text-center flex flex-col items-center justify-center min-h-[500px]">
          <div className="relative w-20 h-20 mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-blue-50/50" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" />
            <div className="absolute inset-2.5 bg-blue-50 rounded-full flex items-center justify-center">
              <Search className="w-7 h-7 text-blue-600 animate-pulse" />
            </div>
            
            {/* Pulsing local map pack markers */}
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 ring-2 ring-white animate-bounce" />
            <span className="absolute bottom-1 -left-2 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
            <span className="absolute -bottom-1 -right-3 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white animate-ping" />
          </div>

          <h4 className="font-display text-xl font-bold text-slate-900 mb-2">
            Formulating Local Leak Diagnosis
          </h4>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 font-serif italic">
            Analyzing search parameters for "{formData.businessName}" in {formData.city}
          </p>

          {/* Timeline of scan events */}
          <div className="w-full max-w-xs space-y-3.5 text-left bg-slate-50/80 rounded-2xl p-4.5 border border-slate-100">
            {SCAN_STEPS.map((step, idx) => {
              const isDone = idx < activeStep;
              const isActive = idx === activeStep;
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 transition-opacity duration-300 ${
                    isDone ? 'opacity-100' : isActive ? 'opacity-100 font-medium' : 'opacity-35'
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={3} />
                  ) : isActive ? (
                    <Loader2 className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0 flex items-center justify-center text-[9px] font-mono font-bold text-slate-400">
                      {step.id}
                    </div>
                  )}
                  <span className={`text-xs ${isActive ? 'text-blue-700' : isDone ? 'text-slate-600' : 'text-slate-500'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
