import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardMockup from '../components/DashboardMockup';
import { getIndustrySpecificData, DEFAULT_REPORT_BUSINESS, SAMPLE_COMPETITORS, SAMPLE_PORTAL_LEADS } from '../data';
import { AppRoute, ScanInput } from '../types';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Share2, 
  Clock, 
  MapPin, 
  CheckCircle,
  FileText,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Settings
} from 'lucide-react';

interface SampleReportProps {
  currentRoute: AppRoute;
  setRoute: (route: AppRoute) => void;
  scanInput: ScanInput | null;
  onResetScan: () => void;
}

export default function SampleReport({ currentRoute, setRoute, scanInput, onResetScan }: SampleReportProps) {
  const [downloading, setDownloading] = useState(false);
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);

  // If a scan was generated, parse the input dynamically!
  const hasCustomScan = !!scanInput;
  const businessName = scanInput?.businessName || DEFAULT_REPORT_BUSINESS.name;
  const city = scanInput?.city || DEFAULT_REPORT_BUSINESS.city;
  const website = scanInput?.website || DEFAULT_REPORT_BUSINESS.website;
  const industrySelected = scanInput?.industry || 'roofing';
  
  // Fetch custom industry dataset
  const industryData = getIndustrySpecificData(industrySelected, city);

  // Trigger simulated report PDF compile & download
  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setShowDownloadSuccess(true);
      setTimeout(() => setShowDownloadSuccess(false), 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-900">
      
      {/* Sticky Navbar */}
      <Navbar 
        currentRoute={currentRoute} 
        setRoute={setRoute} 
        onScrollToSection={(id) => {
          setRoute('home');
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} 
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Diagnostic header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-205 pb-6 mb-8 select-none">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (hasCustomScan) {
                  onResetScan();
                }
                setRoute('home');
              }}
              className="p-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl transition-all cursor-pointer flex items-center justify-center text-slate-500 hover:text-slate-800 shadow-xs"
              title="Back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                  LOCAL DISCOVERY REPORT
                </span>
                {hasCustomScan && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-bold uppercase tracking-wider border border-emerald-200">
                    Live Scan Generated
                  </span>
                )}
              </div>
              <h1 className="font-display text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                {businessName} Local Audit
              </h1>
            </div>
          </div>

          {/* Action buttons (Print, Download PDF, Share) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {hasCustomScan && (
              <button
                onClick={onResetScan}
                className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-350 text-xs font-semibold text-slate-700 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                Reset Scan
              </button>
            )}

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 disabled:bg-slate-700 text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              {downloading ? (
                <>
                  <Settings className="w-3.5 h-3.5 text-blue-300 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-slate-300" />
                  Compile PDF
                </>
              )}
            </button>

            <button
              onClick={() => window.print()}
              className="p-2.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-all cursor-pointer flex items-center justify-center text-slate-600"
              title="Print Page"
            >
              <Printer className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Download Success Visual Toast */}
        {showDownloadSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 text-emerald-800 text-sm flex items-center justify-between shadow-xs max-w-lg">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>Audit compiled:</strong> White-labeled PDF prepared for "{businessName}". Save directly to disk to share with your clients.
              </span>
            </div>
          </div>
        )}

        {/* Dynamic Alert Banner block on missed targets */}
        <div className="bg-red-50 border border-red-100 rounded-2.5xl p-5 sm:p-6 mb-8 text-red-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex gap-3.5">
            <span className="p-2 bg-red-100 border border-red-200 rounded-lg shrink-0 flex items-center justify-center text-red-700">
              <AlertTriangle className="w-5.5 h-5.5" />
            </span>
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                Found {industryData.missedSearches} critical keyword search leaks costing you calls.
              </h4>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed max-w-2xl">
                Currently, your website ranking authority is weak for high-volume keywords in {city}. Traffic is routing to key competitors instead. Follow the interactive 30-Day Recovery Checklist below to patch the leaks.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById('mock-tasks-list');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="px-3.5 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-800 font-bold text-xs transition-all cursor-pointer"
            >
              Examine Fix Action Plan
            </button>
          </div>
        </div>

        {/* Main interactive Dashboard Mockup frame */}
        <div id="sample-report-panel">
          <DashboardMockup 
            businessName={businessName}
            city={city}
            website={website}
            industry={industrySelected.charAt(0).toUpperCase() + industrySelected.slice(1)}
            score={industryData.score}
            missedSearches={industryData.missedSearches}
            reviewGap={industryData.reviewGap}
            leadsCaptured={industryData.leadsCaptured}
            leakingSearches={industryData.leakingSearches}
            actionPlan={industryData.actionPlan}
            hideSidebar={false}
          />
        </div>

        {/* Supplemental Diagnostic Explainer Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
              What is a "Search Volume Leak"?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Whenever a customer in your region searches terms like "AC installation near {city}" or "clogged drain emergency", they represent an ready-to-buy client. If your business profile or municipal page doesn't secure top map or organic spots, that customer clicks away on your competitor. This is a <b>local position leakage</b>.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
              The JobLeak platform maps exactly which positions are failing, how many calls are lost, and highlights the tactical tasks to win them back.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                How to close the {industryData.reviewGap}-Review Gap
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Reviews are search signals number-one. Your core competitor averages higher rating velocities. Closing this deficit shouldn't be manual. Enable our technician feedback links to text QR reviews immediately post-operations.
              </p>
            </div>
            
            <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-1">
              <span className="text-slate-400 text-xs">Want to run a real scan on another location?</span>
              <button
                onClick={() => {
                  setRoute('home');
                  setTimeout(() => {
                    const el = document.getElementById('free-scan');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer whitespace-nowrap"
              >
                Scan Another Business
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Global Footer */}
      <Footer 
        setRoute={setRoute} 
        onScrollToSection={(id) => {
          setRoute('home');
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} 
      />

    </div>
  );
}
