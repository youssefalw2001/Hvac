import React, { useState } from 'react';
import Logo from '../components/Logo';
import { AppRoute } from '../types';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  MonitorPlay, 
  Sparkles, 
  History, 
  Compass, 
  CheckCircle2,
  CalendarCheck2
} from 'lucide-react';

interface LoginProps {
  setRoute: (route: AppRoute) => void;
}

export default function Login({ setRoute }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setLoading(true);
    // Simulate immediate login, redirect to demo dashboard for a fast, responsive demo!
    setTimeout(() => {
      setLoading(false);
      setRoute('dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col md:flex-row font-sans">
      
      {/* LEFT: Structural authentic B2B client login form (7 Columns equivalent) */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 relative z-10">
        
        {/* Core Header Logo / Back Home */}
        <header className="flex items-center justify-between select-none">
          <button 
            onClick={() => setRoute('home')}
            className="flex items-center group cursor-pointer"
          >
            <Logo />
          </button>
          
          <button 
            onClick={() => setRoute('home')}
            className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Back to Overview
          </button>
        </header>

        {/* Central Credential form box */}
        <div className="max-w-md w-full mx-auto my-12 md:my-auto space-y-8">
          
          <div className="space-y-2">
            <h1 className="font-display text-3xl font-black text-slate-900 tracking-tight">
              Sign in to JobLeak
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              Enter your credential node to monitor active keyword tracks, dispatch review links, and view incoming leads.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            {errorMessage && (
              <div className="p-3.5 bg-red-50 border border-red-100 text-red-700 text-xs rounded-xl font-medium">
                {errorMessage}
              </div>
            )}

            {/* Email input line */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. owner@apexroofing.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-900"
                  required
                />
              </div>
            </div>

            {/* Password input line */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <span className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer hover:underline">
                  Forgot?
                </span>
              </div>
              
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-11 pr-11 py-3.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-hidden text-slate-900"
                  required
                />
                
                {/* Toggle Eye off Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {/* Remember Me box */}
            <div className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 bg-slate-50 border-slate-300 rounded-md focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs text-slate-500 font-medium cursor-pointer">
                Keep target session active for 30 days
              </label>
            </div>

            {/* Login button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-slate-900/10 active:scale-98 cursor-pointer flex items-center justify-center gap-2 text-sm"
            >
              {loading ? 'Authorizing Node...' : 'Sign In'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Separation line for simulated demo access */}
          <div className="relative py-4 select-none">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-mono tracking-widest font-bold">
                OR TRY SANDBOX
              </span>
            </div>
          </div>

          {/* Sandbox Demo Quick Launch CTA */}
          <div className="bg-indigo-50/50 border border-indigo-105 rounded-2xl p-5 space-y-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700 uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 animate-pulse" /> Interactive Sandbox Mode
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authentic backend sign-in integration is scheduled for delivery. Right now, bypass security gates to test complete client portal workspace features.
              </p>
            </div>

            <button
              onClick={() => setRoute('dashboard')}
              id="sandbox-demo-btn"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <MonitorPlay className="w-4 h-4 text-indigo-200" />
              Launch Active Portal Demo
            </button>
          </div>

        </div>

        {/* Legal links footer */}
        <footer className="text-center md:text-left text-[10px] font-mono text-slate-400 select-none">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span>&copy; {new Date().getFullYear()} JobLeak Inc.</span>
            <span className="hover:text-slate-600 cursor-pointer">Security Standards</span>
            <span className="hover:text-slate-600 cursor-pointer">Support Node</span>
          </div>
        </footer>

      </div>

      {/* RIGHT: Immersive graphic portal preview panel (5 Columns equivalent) */}
      <div className="hidden md:flex md:w-[380px] lg:w-[460px] bg-slate-950 text-white p-12 lg:p-16 flex-col justify-between relative overflow-hidden select-none select-none">
        {/* Glowing background matrix elements */}
        <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-20%] w-[350px] h-[350px] bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-2 mt-6">
          <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase font-black">
            PORTAL INTELLIGENCE
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-black text-white tracking-tight leading-none">
            Your Command Hub <br className="hidden lg:inline" />
            is waiting.
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed max-w-sm">
            Once inside, track your keyword maps, view the review deficits holding you back, and manage organic customer calls captured by JobLeak widget.
          </p>
        </div>

        {/* Benefits stack list */}
        <div className="space-y-6 max-w-sm pt-8 border-t border-slate-900">
          {[
            { 
              icon: Compass, 
              title: 'Automated Local Matrix Radar', 
              desc: 'Monitor week-over-week position updates across dozens of regional target terms.' 
            },
            { 
              icon: CalendarCheck2, 
              title: 'Live Review Collection Scheduler', 
              desc: 'Sync dispatcher lists to ping text triggers and close gaps with top-pack players.' 
            },
            { 
              icon: CheckCircle2, 
              title: 'Dynamic Action Checklist Fixes', 
              desc: 'Follow clear sequential tasks showing you precisely what to build or optimize next.' 
            }
          ].map((benefit, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-500 shrink-0 h-10 w-10 flex items-center justify-center">
                <benefit.icon className="w-5 h-5 shrink-0" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">{benefit.title}</h4>
                <p className="text-slate-500 text-[11px] mt-1 leading-snug">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secure badge footer area */}
        <div className="pt-8 border-t border-slate-900/50 flex items-center gap-2 text-[10px] font-mono text-slate-500">
          <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
          <span>SOC2 Compliant SLA Data Transmission</span>
        </div>

      </div>

    </div>
  );
}
