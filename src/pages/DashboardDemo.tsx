import React, { useState } from 'react';
import Logo from '../components/Logo';
import { AppRoute, CapturedLead, LeakingSearch, ActionPlanItem } from '../types';
import { 
  SAMPLE_COMPETITORS, 
  SAMPLE_LEAKING_SEARCHES, 
  SAMPLE_PORTAL_LEADS, 
  SAMPLE_ACTION_PLAN 
} from '../data';
import { 
  Building2, 
  PhoneCall, 
  CheckCircle, 
  MessageSquare, 
  Layers, 
  Globe, 
  LogOut, 
  ArrowLeft, 
  UserSquare2, 
  Calendar, 
  Flame, 
  Send,
  Plus, 
  Search, 
  Trash2, 
  Check, 
  Sparkles,
  ExternalLink,
  Target,
  FileCheck2,
  Bell,
  Star
} from 'lucide-react';

interface DashboardDemoProps {
  setRoute: (route: AppRoute) => void;
}

export const MOCK_LOCAL_PAGES = [
  { keyword: 'emergency roof leak repair Austin', difficulty: 'Medium', volume: 320, recommendedTitle: '24/7 Emergency Roof Leak Repair Austin | Austin Pro Roofing', recommendedH1: 'Immediate 24-Hour Emergency Roof Leak Repair in Austin, TX' },
  { keyword: 'storm damage slate inspector Austin', difficulty: 'Low', volume: 140, recommendedTitle: 'Certified Storm Damage & Slate Inspectors | Austin Pro Roofing', recommendedH1: 'Specialist Hail & Storm Damage Exterior Inspections' },
  { keyword: 'same day roof repair North Austin', difficulty: 'Low', volume: 110, recommendedTitle: 'Same Day Roof Services North Austin | Expert Repair', recommendedH1: 'Fast Residential Shingle Fixes & Same-Day Services' }
];

export default function DashboardDemo({ setRoute }: DashboardDemoProps) {
  // Portal active items state
  const [activeTab, setActiveTab] = useState<'leads' | 'leaks' | 'pages' | 'reviews'>('leads');
  const [leadsList, setLeadsList] = useState<CapturedLead[]>(SAMPLE_PORTAL_LEADS);
  const [tasks, setTasks] = useState<ActionPlanItem[]>(
    SAMPLE_ACTION_PLAN.map(t => ({ ...t, completed: false }))
  );
  
  // Custom review SMS simulator state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);
  const [inviteLogs, setInviteLogs] = useState<Array<{ name: string; phone: string; time: string; status: string }>>([
    { name: 'John Miller', phone: '512-555-9012', time: 'Just now', status: 'delivered' },
    { name: 'Clara Jenkins', phone: '512-555-1029', time: '2 hours ago', status: 'converted' }
  ]);

  // Lead dispatch status toggler
  const toggleLeadStatus = (id: string) => {
    setLeadsList(prev => prev.map(ld => {
      if (ld.id === id) {
        const nextStatus: 'new' | 'contacted' | 'booked' = 
          ld.status === 'new' ? 'contacted' : ld.status === 'contacted' ? 'booked' : 'new';
        return { ...ld, status: nextStatus };
      }
      return ld;
    }));
  };

  // Submit test review SMS pinger
  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    setSendSuccess(true);
    const newLog = {
      name: customerName,
      phone: customerPhone,
      time: 'Just now',
      status: 'sending'
    };
    
    setInviteLogs(prev => [newLog, ...prev]);

    setTimeout(() => {
      setInviteLogs(prev => prev.map(log => {
        if (log.name === customerName && log.phone === customerPhone) {
          return { ...log, status: 'delivered' };
        }
        return log;
      }));
      setSendSuccess(false);
      setCustomerName('');
      setCustomerPhone('');
    }, 1500);
  };

  // Checkbox complete handlers for action tracker
  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  // Score starts at 68, increments by 4 for each resolved
  const visibilityScore = Math.min(100, 68 + (completedCount * 4));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none select-none">
      
      {/* 1. SECURE TOP HORIZONTAL CONTROL BAR */}
      <header className="bg-slate-900 border-b border-slate-800 py-3.5 px-6 flex items-center justify-between sticky top-0 z-40 select-none">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setRoute('home')}
            className="flex items-center group cursor-pointer"
          >
            {/* Custom forced-dark Logo */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 shadow-md border border-blue-400/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5 text-white">
                  <path d="M12 2a10 10 0 0 1 10 10" className="opacity-40" />
                  <path d="M12 21c-3.1-3-7-6.5-7-10.5a7 7 0 0 1 14 0c0 4-3.9 7.5-7 10.5Z" />
                  <path d="m14 11-2-2-2 2" className="text-emerald-400" />
                  <path d="M12 15V9" className="text-emerald-400" />
                </svg>
              </div>
              <span className="font-display text-lg font-black text-white tracking-tight">
                JobLeak <span className="text-[10px] font-mono text-slate-500 tracking-normal font-semibold bg-slate-950 px-2 py-0.5 rounded border border-slate-800 uppercase ml-1.5">Sandbox Mode</span>
              </span>
            </div>
          </button>
        </div>

        {/* Global info controls */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span>Node SLA:</span>
            <span className="text-emerald-400 font-bold">Secure SOC2</span>
          </div>

          <button
            onClick={() => setRoute('home')}
            className="px-3.5 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5 text-slate-500" />
            Exit Demo
          </button>
        </div>
      </header>

      {/* 2. THREE-PANEL CORE CONTAINER */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Left Side menu system */}
        <nav className="w-full md:w-64 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-900 p-4 space-y-6 select-none shrink-0">
          
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-850">
            <h4 className="text-xs font-bold text-slate-200">Austin Pro Roofing</h4>
            <p className="text-[10px] text-blue-500 font-mono mt-0.5">austinproroofing.com</p>
            <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-slate-850 pt-2">
              <span>Plan: <b>Growth</b></span>
              <span className="text-emerald-400">$199/mo</span>
            </div>
          </div>

          <div className="space-y-1">
            {[
              { id: 'leads', icon: PhoneCall, label: 'Captured Leads Inbox', count: leadsList.length },
              { id: 'leaks', icon: Target, label: 'Market Search Gaps', count: 5 },
              { id: 'pages', icon: Layers, label: 'Service Page Blueprints', count: 3 },
              { id: 'reviews', icon: MessageSquare, label: 'Review Deficit Closer', alert: true }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900/40 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <tab.icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </div>
                {tab.count !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono ${
                    activeTab === tab.id ? 'bg-blue-700 text-white' : 'bg-slate-900 text-slate-500'
                  }`}>
                    {tab.count}
                  </span>
                )}
                {tab.alert && (
                  <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-slate-950 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Quick info card on leads */}
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-900/60 text-xs text-slate-500 space-y-2">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold font-mono text-[10px] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Demo
            </div>
            <p className="leading-relaxed text-[11px]">
              Click diagnostic pills, dispatch review texts, or log mock calls to experience immediate state sync in this client mockup!
            </p>
          </div>

        </nav>

        {/* Right workspace contents */}
        <main className="flex-1 p-5 sm:p-7 space-y-6 overflow-x-hidden">
          
          {/* Main workspace top indicator row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-2 border-b border-slate-900">
            
            {/* Scorecard Widget Gauge */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-850 flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="24" cy="24" r="21" fill="transparent" stroke="#1e293b" strokeWidth="4" />
                  <circle 
                    cx="24" 
                    cy="24" 
                    r="21" 
                    fill="transparent" 
                    stroke={visibilityScore < 70 ? "#ef4444" : visibilityScore < 85 ? "#f59e0b" : "#10b981"} 
                    strokeWidth="4" 
                    strokeDasharray={`${2 * Math.PI * 21}`}
                    strokeDashoffset={`${2 * Math.PI * 21 * (1 - visibilityScore / 100)}`}
                    className="transition-all duration-500"
                  />
                </svg>
                <span className="absolute text-xs font-mono font-bold">{visibilityScore}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">LOCAL RADAR</span>
                <span className="text-xs font-bold text-slate-200">Visibility Score</span>
              </div>
            </div>

            {/* Total leads card */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-850 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block font-bold text-emerald-400">LEADS CAPTURED</span>
                <span className="text-sm font-bold text-slate-200 font-mono">+{leadsList.length} inquiries</span>
              </div>
            </div>

            {/* Review Deficit Card */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-850 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">REVIEW DEFICIT</span>
                <span className="text-xs font-bold text-slate-350 font-mono">-148 Stars</span>
              </div>
            </div>

            {/* Tasks completed */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-850 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">RECOVERY TASKS</span>
                <span className="text-xs font-bold text-slate-350 font-mono">{completedCount} of {tasks.length} Done</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT TABBED INNER SCREEN - Displays corresponding selected detail lists (7 Columns) */}
            <section className="lg:col-span-12 xl:col-span-7 bg-slate-900/50 rounded-2xl border border-slate-850 p-5 flex flex-col justify-between">
              
              {/* Tab Title header */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase text-blue-500 tracking-wider font-bold">
                  Workspace Core
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {activeTab === 'leads' && 'Captured Leads Inbox'}
                  {activeTab === 'leaks' && 'Market Positions Leakages'}
                  {activeTab === 'pages' && 'Local Service Page blueprints'}
                  {activeTab === 'reviews' && 'Collect Review Invites'}
                </h3>
              </div>

              {/* Sub-Contents */}
              <div className="flex-1">
                
                {/* 1. Captured Leads list */}
                {activeTab === 'leads' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400">
                      The floating <b>InstaLead Widget</b> captures visitors directly before they open a competitors tab. Change lead status by clicking the status badge logic!
                    </p>

                    <div className="space-y-3">
                      {leadsList.map((ld) => (
                        <div 
                          key={ld.id} 
                          className="p-4 bg-slate-950 border border-slate-850 hover:border-slate-800 rounded-xl flex items-start justify-between relative transition-all"
                        >
                          <div className="space-y-1.5 max-w-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white">{ld.customerName}</span>
                              <span className="text-[10px] font-mono text-slate-500">• {ld.timestamp}</span>
                            </div>
                            <span className="text-[11px] text-slate-400 block font-mono">
                              Request: <strong className="text-slate-200">{ld.serviceNeeded}</strong> | {ld.phone}
                            </span>
                            {ld.details && (
                              <p className="text-[11px] text-slate-500 font-serif italic bg-slate-900/40 p-2 rounded border border-slate-850/60 mt-1">
                                "{ld.details}"
                              </p>
                            )}
                          </div>

                          {/* Status changer toggle */}
                          <button
                            onClick={() => toggleLeadStatus(ld.id)}
                            className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer ${
                              ld.status === 'new' 
                                ? 'bg-red-500/15 text-red-400 border border-red-500/20' 
                                : ld.status === 'booked' 
                                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' 
                                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            }`}
                            title="Click to cycle status"
                          >
                            {ld.status}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Leaking keywords lists */}
                {activeTab === 'leaks' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400">
                      These keywords are generating major regional volume, but local engines bypass your site due to weak GBP category claims.
                    </p>

                    <div className="border border-slate-850 rounded-xl overflow-hidden bg-slate-950">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-slate-900 border-b border-slate-850 text-slate-500">
                            <th className="p-3 font-mono uppercase text-[9px]">Leaking Keyphrase</th>
                            <th className="p-3 font-mono text-center uppercase text-[9px]">Monthly Searches</th>
                            <th className="p-3 font-mono text-right uppercase text-[9px]">Calculated Loss Size</th>
                            <th className="p-3 font-mono text-center uppercase text-[9px]">Danger</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-850">
                          {SAMPLE_LEAKING_SEARCHES.map((leak, idx) => (
                            <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                              <td className="p-3 text-slate-200 font-semibold">{leak.keyword}</td>
                              <td className="p-3 text-center text-slate-400 font-mono">{leak.monthlyVolume}/mo</td>
                              <td className="p-3 text-right text-emerald-400 font-bold font-mono">${leak.estimatedLossVal}</td>
                              <td className="p-3 text-center">
                                <span className={`px-2 py-0.5 rounded-sm uppercase text-[9.5px] font-semibold font-mono border ${
                                  leak.leakSeverity === 'critical' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-amber-400/10 text-amber-300 border-amber-400/20'
                                }`}>
                                  {leak.leakSeverity}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 3. Service Page guidelines details */}
                {activeTab === 'pages' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400">
                      Adding focused, structural landing pages forces local index vectors to rank you inside neighboring regional boundaries.
                    </p>

                    <div className="space-y-4">
                      {MOCK_LOCAL_PAGES.map((page, idx) => (
                        <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">Target Keyword: <b className="text-blue-400">"{page.keyword}"</b></span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase">Est. Difficulty: <b className="text-emerald-400">{page.difficulty}</b></span>
                          </div>
                          <div className="space-y-1 text-[11px] font-mono text-slate-400 bg-slate-900/60 p-2.5 rounded border border-slate-850">
                            <div><strong className="text-slate-500">Title Tag:</strong> {page.recommendedTitle}</div>
                            <div className="pt-1 border-t border-slate-900/50 mt-1"><strong className="text-slate-500">H1 Header:</strong> {page.recommendedH1}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. SMS invite collections simulator */}
                {activeTab === 'reviews' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      {/* Collector submit card */}
                      <form onSubmit={handleSendInvite} className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">INVITE EMITTER</span>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 font-mono uppercase block">Customer Name</label>
                          <input
                            type="text"
                            placeholder="e.g. Robert Smith"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-xs text-white focus:border-blue-500 transition-all outline-hidden"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 font-mono uppercase block">Phone (Text Invite)</label>
                          <input
                            type="tel"
                            placeholder="e.g. 512-555-0992"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-xs text-white focus:border-blue-500 transition-all outline-hidden"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={sendSuccess}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5 text-blue-200" />
                          {sendSuccess ? 'Pushing SMS invite...' : 'Send Review SMS Request'}
                        </button>
                      </form>

                      {/* Log audit trail */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">SEND LOGS</span>
                        <div className="space-y-2 bg-slate-950 rounded-xl border border-slate-850 p-3 h-[180px] overflow-y-auto">
                          {inviteLogs.map((log, lIdx) => (
                            <div key={lIdx} className="flex items-center justify-between text-[11px] border-b border-slate-900/60 pb-1.5">
                              <div>
                                <span className="text-slate-200 block font-bold">{log.name}</span>
                                <span className="text-slate-500 block font-mono text-[9px] -mt-0.5">{log.phone}</span>
                              </div>
                              <span className={`px-2 py-0.5 text-[9px] font-mono rounded uppercase font-bold ${
                                log.status === 'converted' 
                                  ? 'bg-emerald-500/10 text-emerald-400' 
                                  : log.status === 'sending' 
                                  ? 'bg-amber-400/10 text-amber-300 animate-pulse'
                                  : 'bg-blue-500/10 text-blue-400'
                              }`}>
                                {log.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>
              
            </section>

            {/* RIGHT SIDE: 30-Day Recovery check-off (5 Columns equivalent) */}
            <section className="lg:col-span-12 xl:col-span-5 bg-slate-900/50 rounded-2xl border border-slate-850 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-905 pb-3">
                  <h4 className="font-display text-sm font-bold text-slate-200 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    30-Day Recovery Checklist
                  </h4>
                  <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                    Score Generator
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  Interact with this check-matrix to mock completions. Checking off tactical tasks automatically patch leakage gaps and raises the Local Visibility KPI!
                </p>

                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div 
                      key={task.id} 
                      onClick={() => toggleTask(task.id)}
                      className={`p-3 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                        task.completed 
                          ? 'bg-emerald-950/15 border-emerald-900/50 text-slate-350' 
                          : 'bg-slate-950 border-slate-850 hover:border-slate-800 text-slate-100'
                      }`}
                    >
                      {/* Check-Circle custom graphic */}
                      <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        task.completed 
                          ? 'bg-emerald-500 border-emerald-400 text-white' 
                          : 'border-slate-700'
                      }`}>
                        {task.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </div>

                      <div className="min-w-0 flex-1 space-y-1">
                        <span className={`text-xs block leading-tight ${task.completed ? 'line-through text-slate-500' : 'font-medium'}`}>
                          {task.task}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`px-1.5 py-0.2 rounded-sm text-[8px] font-mono uppercase font-bold tracking-wider ${
                            task.impact === 'Critical' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'
                          }`}>Impact: {task.impact}</span>
                          <span className="text-[10px] font-mono text-slate-505">{task.delay}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery checklist metrics summary bar */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 mt-6 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-400 border border-blue-500/15">
                    <FileCheck2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">Tasks Resolved</span>
                    <strong className="text-slate-200 font-mono">{completedCount} of {tasks.length} Done</strong>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">Recovered Call Volume</span>
                  <strong className="text-emerald-400 font-mono">+{completedCount * 3.5} calls / week</strong>
                </div>
              </div>

            </section>

          </div>

        </main>
      </div>

    </div>
  );
}
