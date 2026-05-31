import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { AppRoute } from '../types';
import { Menu, X, ArrowRight, ShieldAlert, MonitorPlay, LogIn } from 'lucide-react';

interface NavbarProps {
  currentRoute: AppRoute;
  setRoute: (route: AppRoute) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ currentRoute, setRoute, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentRoute !== 'home') {
      setRoute('home');
      // Delay-scroll to allow homepage to mount
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    } else {
      onScrollToSection(sectionId);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm shadow-slate-100/10 py-3'
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo and home link */}
          <button 
            id="nav-logo"
            onClick={() => { setRoute('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center group cursor-pointer transition-transform"
          >
            <Logo />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              id="nav-link-platform"
              onClick={() => handleNavClick('platform')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === 'home' 
                  ? 'text-slate-650 hover:text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Platform
            </button>
            <button
              id="nav-link-features"
              onClick={() => handleNavClick('features')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === 'home' 
                  ? 'text-slate-650 hover:text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Features
            </button>
            <button
              id="nav-link-industries"
              onClick={() => handleNavClick('industries')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === 'home' 
                  ? 'text-slate-650 hover:text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Industries
            </button>
            <button
              id="nav-link-pricing"
              onClick={() => handleNavClick('pricing')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === 'home' 
                  ? 'text-slate-650 hover:text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Pricing
            </button>
            <button
              id="nav-link-sample"
              onClick={() => setRoute('report')}
              className={`text-sm font-semibold transition-colors cursor-pointer underline-offset-4 ${
                currentRoute === 'report'
                  ? 'text-blue-600 font-bold underline decoration-blue-650 decoration-2'
                  : 'text-slate-650 hover:text-blue-600'
              }`}
            >
              Sample Report
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-5">
            <button
              id="nav-btn-demo"
              onClick={() => setRoute('dashboard')}
              className={`text-[12px] font-mono font-bold text-blue-650 bg-blue-50/70 hover:bg-blue-100/80 transition-all rounded-lg px-3 py-1.5 flex items-center gap-1.5 cursor-pointer`}
            >
              <MonitorPlay className="w-3.5 h-3.5" />
              Demo Portal
            </button>

            <button
              id="nav-btn-login"
              onClick={() => setRoute('login')}
              className={`text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentRoute === 'login'
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <LogIn className="w-4 h-4 text-slate-400" />
              Login
            </button>

            <button
              id="nav-btn-cta"
              onClick={() => handleNavClick('free-scan')}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all cursor-pointer flex items-center gap-1.5"
            >
              Get Free Scan
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="mobile-nav-demo-btn"
              onClick={() => setRoute('dashboard')}
              className="p-2 text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 cursor-pointer"
              title="Demo Portal"
            >
              <MonitorPlay className="w-4 h-4" />
            </button>
            
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-xl transition-all duration-300">
          <div className="px-4 py-6 space-y-3">
            <button
              id="mobile-nav-platform"
              onClick={() => handleNavClick('platform')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer block"
            >
              Platform
            </button>
            <button
              id="mobile-nav-features"
              onClick={() => handleNavClick('features')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer block"
            >
              Features
            </button>
            <button
              id="mobile-nav-industries"
              onClick={() => handleNavClick('industries')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer block"
            >
              Industries
            </button>
            <button
              id="mobile-nav-pricing"
              onClick={() => handleNavClick('pricing')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer block"
            >
              Pricing
            </button>
            <button
              id="mobile-nav-sample"
              onClick={() => { setRoute('report'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer block"
            >
              Sample Report (Austin Pro)
            </button>
            
            <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
              <button
                id="mobile-nav-login"
                onClick={() => { setRoute('login'); setMobileMenuOpen(false); }}
                className="w-full justify-center text-center px-4 py-2.5 rounded-xl border border-slate-200 text-base font-medium text-slate-700 hover:bg-slate-50 transition-all cursor-pointer flex items-center gap-2"
              >
                <LogIn className="w-4 h-4 text-slate-400" />
                Login
              </button>
              
              <button
                id="mobile-nav-cta"
                onClick={() => handleNavClick('free-scan')}
                className="w-full text-center px-4 py-3 rounded-xl bg-slate-900 text-white text-base font-semibold hover:bg-blue-600 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Get Free Scan
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
