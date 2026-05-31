import React from 'react';
import Logo from './Logo';
import { AppRoute } from '../types';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setRoute: (route: AppRoute) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ setRoute, onScrollToSection }: FooterProps) {
  const handleNavClick = (sectionId: string) => {
    setRoute('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <footer id="app-footer" className="bg-slate-950 border-t border-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14">
          
          {/* Logo Column (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <button 
              onClick={() => { setRoute('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center group cursor-pointer text-left"
            >
              {/* Force dark look for footer compatibility */}
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5 text-white">
                    <path d="m14 11-2-2-2 2" strokeWidth="3" />
                    <path d="M12 15V9" strokeWidth="3" />
                    <path d="M12 21c-3.1-3-7-6.5-7-10.5a7 7 0 0 1 14 0" strokeWidth="2" className="opacity-80" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-0.5">
                    Job<span className="text-blue-500">Leak</span>
                  </span>
                  <span className="text-[8px] font-mono font-bold tracking-widest text-slate-500 uppercase -mt-1 leading-none">
                    Growth Intelligence
                  </span>
                </div>
              </div>
            </button>

            <p className="text-slate-450 text-sm leading-relaxed max-w-sm">
              JobLeak is a premium local growth intelligence platform engineering the future of local search, review management, and competitive conquesting for premium home-service brands.
            </p>

            {/* Address Contact */}
            <div className="space-y-3 pt-2 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-600 shrink-0" />
                <span>Downtown Austin Tech Hub • Austin, Texas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                <a href="mailto:intelligence@jobleak.com" className="hover:text-blue-400 text-slate-450 tracking-tight transition-colors">intelligence@jobleak.com</a>
              </div>
            </div>
          </div>

          {/* Nav Lists (8 Columns Split) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column: Platform */}
            <div className="space-y-4">
              <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-200">
                SaaS Platform
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => handleNavClick('platform')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Growth Radar
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('features')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Features Intelligence
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('pricing')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Pricing Plans
                  </button>
                </li>
                <li>
                  <button onClick={() => setRoute('report')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    See Sample Audit
                  </button>
                </li>
                <li>
                  <button onClick={() => setRoute('dashboard')} className="hover:text-emerald-400 font-semibold transition-colors cursor-pointer text-left py-0.5 flex items-center gap-1.5 text-blue-400">
                    Demo Portal
                  </button>
                </li>
              </ul>
            </div>

            {/* Column: Industries */}
            <div className="space-y-4">
              <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-200">
                Industries We Track
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => handleNavClick('industries')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Roofing & Exteriors
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('industries')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    HVAC & Cooling Gaps
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('industries')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Plumbing & Drain Leakages
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('industries')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Electrical Local Gaps
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('industries')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Water Damage & Restoration
                  </button>
                </li>
              </ul>
            </div>

            {/* Column: Portal Access */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-200">
                Portal Access
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => setRoute('login')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Client Login Portal
                  </button>
                </li>
                <li>
                  <button onClick={() => setRoute('dashboard')} className="hover:text-blue-400 transition-colors cursor-pointer text-left py-0.5">
                    Portal Interactive Sandbox
                  </button>
                </li>
                <li className="pt-2">
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-[11px] text-slate-500 font-mono flex items-center gap-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                    <span>Secure SOC2 Type II Client Node</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright line splits */}
        <div className="border-t border-slate-900 mt-14 sm:mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-600 select-none">
          <div>
            &copy; {new Date().getFullYear()} JobLeak Inc. All rights reserved. Built with pride for local craftsmen.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineering local dominance with absolute precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
