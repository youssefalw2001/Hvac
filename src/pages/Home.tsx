import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FreeScanForm from '../components/FreeScanForm';
import DashboardMockup from '../components/DashboardMockup';
import { PRICING_PLANS } from '../data';
import { AppRoute, ScanInput } from '../types';
import { 
  ShieldAlert, 
  ArrowRight, 
  Flame, 
  MapPin, 
  CheckCircle, 
  Eye, 
  Star, 
  PhoneCall, 
  Laptop, 
  BarChart4, 
  Bot, 
  Sparkles, 
  Users, 
  Zap,
  ChevronRight,
  TrendingUp,
  Files,
  Wrench,
  Construction,
  Coins,
  Search
} from 'lucide-react';

interface HomeProps {
  currentRoute: AppRoute;
  setRoute: (route: AppRoute) => void;
  onScanComplete: (input: ScanInput) => void;
}

export default function Home({ currentRoute, setRoute, onScanComplete }: HomeProps) {
  
  // Custom scroll anchor handling
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 100; // Header cushion offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-900">
      
      {/* Sticky Header Nav */}
      <Navbar 
        currentRoute={currentRoute} 
        setRoute={setRoute} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* Hero Section Container */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-32">
        {/* Modern radial visual gradients */}
        <div className="absolute inset-0 bg-radial-at-t from-blue-50/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-indigo-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 left-[5%] w-[350px] h-[350px] bg-blue-200/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Soft high-trust badge overlay */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/40 shadow-xs mb-6 select-none uppercase tracking-wider animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Growth Intelligence
            </span>

            {/* Core Promise Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-center">
              Stop leaking <span className="text-blue-600 block sm:inline">local jobs</span> <br className="hidden sm:inline" />
              to your competitors.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans font-medium text-balance">
              We surface the missed searches and competitor gaps costing you calls—then give you a 30-day action plan to win them back.
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleScrollToSection('free-scan')}
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Generate Free Scan
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setRoute('report')}
                className="w-full sm:w-auto px-6 py-3.5 border border-slate-200 bg-white text-slate-700 rounded-full font-bold text-sm shadow-xs hover:bg-slate-50 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                See Sample Report
              </button>
            </div>

            {/* Horizontal Trust Badges list */}
            <div className="mt-10 pt-8 border-t border-slate-200/60 max-w-lg sm:max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> No setup fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Fast first report
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Dedicated Service Edition
              </span>
            </div>

          </div>

          {/* Interactive Hero Dashboard Mockup Showcase */}
          <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
            <div className="p-3 bg-slate-100 rounded-3xl border border-slate-200/80 shadow-md">
              <DashboardMockup />
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4.5 flex items-center justify-center gap-2 font-mono">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Interactive Preview: Try checking off items in the <i>30-Day Recovery Checklist</i> to see the Visibility score adapt live!
            </p>
          </div>

        </div>
      </section>

      {/* Stats strip section */}
      <section className="bg-slate-900 border-y border-slate-850 text-white select-none relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {[
              { id: 'st-1', label: 'Surfaced searches', val: '12+ Key Gaps', desc: 'High-intent buyer searches' },
              { id: 'st-2', label: 'Average review gap', val: '148 reviews', desc: 'Competitors holding packs' },
              { id: 'st-3', label: 'Captured leads average', val: '17/mo per client', desc: 'Rescued click-away bounce visitors' },
              { id: 'st-4', label: 'Predictable growth plan', val: '$199 / mo', desc: 'Core platform tracking access' }
            ].map((stat, idx) => (
              <div key={stat.id} className={`flex flex-col items-center text-center p-3 ${idx > 0 ? 'pt-6 md:pt-3' : ''}`}>
                <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">{stat.label}</span>
                <span className="text-2xl sm:text-3xl font-display font-black text-white mt-1">{stat.val}</span>
                <span className="text-slate-400 text-xs mt-1 text-balance max-w-[190px]">{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview section */}
      <section id="platform" className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
              The Growth Command Center
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
              A growth command center, <br className="hidden sm:inline" />
              not another SEO dashboard.
            </h2>
            <p className="mt-4 text-slate-500 text-base leading-relaxed">
              Home-service owners do not want hundreds of complex SEO metrics, graphs, or index lists. You want to know exactly where jobs are leaking, who is taking them, and what to fix first to win back calls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Search, 
                title: 'Google Profile Check', 
                desc: 'Audit weak Google Business Profile signals. Map exactly what services your competitors claimed that you missed.' 
              },
              { 
                icon: Star, 
                title: 'Review Gap Report', 
                desc: 'Map the deficit volume of reviews currently blocking your site from winning the highly visible local Map Pack positions.' 
              },
              { 
                icon: ShieldAlert, 
                title: 'Competitor Pages', 
                desc: 'Trace competitor-specific advantages. Spot missing city landing landing pages and service breakdowns instantly.' 
              },
              { 
                icon: PhoneCall, 
                title: 'InstaLead Response Widget', 
                desc: 'Deploy a floating callback module to lock down customers before they can navigate away to other open tabs.' 
              },
              { 
                icon: Zap, 
                title: 'Service Area Ideas', 
                desc: 'Identify profitable surrounding municipal tags and sub-regions lacking strong ranking services.' 
              },
              { 
                icon: Files, 
                title: 'Monthly Owner PDF Brief', 
                desc: 'Get highly actionable local threat briefings containing key instructions, ready to hand off directly to website handlers.' 
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="group p-7 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-150 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-white rounded-xl border border-slate-200/80 text-blue-600 flex items-center justify-center shadow-xs mb-5 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                  <card.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-slate-900 font-display text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2.5 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Features section in detail */}
      <section id="features" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left explanatory text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
                System Capabilities
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Surveillance and recovery, engineered for service ops.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                JobLeak tracks your service footprint continuously, monitoring surrounding locations and keyword search maps. Stop guessing what is wrong with your rankings. Follow real-time instructions that reclaim the highest-value calls.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  'Automated weekly regional search radar sweeps',
                  'One-click website callback capture script setup',
                  'Easy step-by-step competitor review map analysis',
                  'Instant download white-labeled client diagnostic PDFs'
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right feature block visual grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { 
                  title: 'Missed Job Scan', 
                  desc: 'Run a granular, street-level rank check on valuable high-intent long-tail phrases.',
                  badge: 'Radar Scan'
                },
                { 
                  title: 'Competitor Intelligence', 
                  desc: 'Track and alarm whenever regional players adjust service descriptions or claim new markets.',
                  badge: 'Threat Matrix'
                },
                { 
                  title: 'Review Gap Engine', 
                  desc: 'Determine the exact star weight deficiency blocking entry to top-pack maps.',
                  badge: 'Rating Analyzer'
                },
                { 
                  title: 'Lead Capture Widget', 
                  desc: 'Lock in customers with rapid response call options instantly before tab switches.',
                  badge: 'InstaLead Module'
                }
              ].map((feat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden group hover:border-blue-500/40 transition-all">
                  <div className="absolute top-0 right-0 py-1 px-2.5 bg-slate-100 text-slate-500 font-mono text-[9px] uppercase tracking-wider rounded-bl-lg">
                    {feat.badge}
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base mt-2">
                    {feat.title}
                  </h4>
                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Industries section with gorgeous visual panels */}
      <section id="industries" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
              Tailored Verticals
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
              Custom intelligence built for your trade.
            </h2>
            <p className="mt-4 text-slate-500 text-base leading-relaxed">
              Generics won't cut it. Search triggers vary tremendously by season and service. JobLeak matches search behaviors directly to your specific home-service trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Roofing */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl text-white border border-slate-800 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 min-h-[420px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <Construction className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">Roofing & Exteriors</h4>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Capture high-intent searches during storm damage spikes, claim immediate emergency leak repair keywords, and bridge review gaps.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-5 mt-6 space-y-2.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Priority Search Vectors:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['storm damage repair', 'roof leak emergency', 'hail inspection Austin'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-850 border border-slate-800/60 rounded text-[9px] font-mono text-slate-350">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* HVAC */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl text-white border border-slate-800 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 min-h-[420px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">HVAC & Heat-Cool</h4>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Dominate highly seasonal cooling breakdowns, handle preventative maintenance triggers, and establish local search visibility across multiple sub-municipalities.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-5 mt-6 space-y-2.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Priority Search Vectors:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['AC diagnostic 24hr', 'compressor replacement', 'furnace swap near me'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-850 border border-slate-800/60 rounded text-[9px] font-mono text-slate-350">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Plumbing */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl text-white border border-slate-800 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 min-h-[420px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">Plumbing & Drainage</h4>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Route urgent leak emergency traffic directly into callback channels. Win main replacement tickets, drain cleaning, and hot water replacement business.
                </p>
              </div>

              <div className="border-t border-slate-800 pt-5 mt-6 space-y-2.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Priority Search Vectors:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['water heater supply pack', 'slab leak inspection', 'emergency drain clog'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-850 border border-slate-800/60 rounded text-[9px] font-mono text-slate-350">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Free Scan Form block */}
      <section id="free-scan" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Form Left pitch text */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
                Scan Your Business
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Find the search positions your competitors are stealing today.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect your business profile and location pointers. Our scanner analyzes surrounding maps, compares your review velocities, audits structural service categories, and returns a tailored 30-day plan.
              </p>

              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-105 inline-flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-600">
                  <strong className="text-slate-900 block font-bold">Generates a live report:</strong> Our custom mock engine outputs an actual responsive portal audit layout matching your chosen categories!
                </p>
              </div>
            </div>

            {/* Form Component right */}
            <div className="lg:col-span-7">
              <FreeScanForm onScanComplete={onScanComplete} />
            </div>

          </div>

        </div>
      </section>

      {/* Pricing lists block */}
      <section id="pricing" className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
              Pricing Plans
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
              Transparent scaling for growing trades.
            </h2>
            <p className="mt-4 text-slate-500 text-base leading-relaxed">
              All plans include complete action step outlines. Upgrade anytime to unlock active competitor matrices and lead rescue callback widgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 relative flex flex-col justify-between ${
                  plan.popular 
                    ? 'border-2 border-blue-600 bg-slate-950 text-white shadow-xl shadow-blue-900/10' 
                    : 'border border-slate-200 bg-white text-slate-850'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded-full border border-blue-500 shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <h4 className="font-display text-lg font-bold uppercase tracking-wider">
                    {plan.name}
                  </h4>
                  <p className={`text-xs mt-2 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-display font-black leading-none">{plan.price}</span>
                    <span className={`text-xs font-mono uppercase ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                      / {plan.period}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3.5 text-xs font-medium">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-5 border-t border-slate-800">
                  <button
                    onClick={() => handleScrollToSection('free-scan')}
                    className={`w-full py-3.5 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-slate-900 text-white hover:bg-blue-600'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA container */}
      <section className="bg-slate-950 text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-b from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none max-w-3xl mx-auto">
            Stop losing local jobs. <br />
            Start winning more.
          </h2>
          <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Get the scan, map the leaks, and turn the action items into your first customer conversation. Secure your backyard territory now.
          </p>

          <div className="mt-10">
            <button
              onClick={() => handleScrollToSection('free-scan')}
              className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-900/20 active:scale-98 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              Get Free Growth Scan
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer setRoute={setRoute} onScrollToSection={handleScrollToSection} />

    </div>
  );
}
