import React, { useState } from 'react';
import { LeakingSearch, CompetitorData, ActionPlanItem, CapturedLead } from '../types';
import { 
  SAMPLE_COMPETITORS, 
  SAMPLE_LEAKING_SEARCHES, 
  SAMPLE_ACTION_PLAN, 
  SAMPLE_PORTAL_LEADS 
} from '../data';
import { 
  TrendingUp, 
  Search, 
  Star, 
  PhoneCall, 
  Eye, 
  Check, 
  ShieldAlert, 
  Layers, 
  Building2, 
  Compass, 
  MessageSquare, 
  MousePointerClick, 
  Timer, 
  FileCheck2, 
  ExternalLink,
  ChevronRight,
  Flame,
  X,
  Target
} from 'lucide-react';

interface DashboardMockupProps {
  businessName?: string;
  city?: string;
  industry?: string;
  website?: string;
  score?: number;
  missedSearches?: number;
  reviewGap?: number;
  leadsCaptured?: number;
  competitors?: CompetitorData[];
  leakingSearches?: LeakingSearch[];
  actionPlan?: ActionPlanItem[];
  leads?: CapturedLead[];
  hideSidebar?: boolean;
}

export default function DashboardMockup({
  businessName = "Austin Pro Roofing",
  city = "Austin, TX",
  industry = "Roofing",
  website = "austinproroofing.com",
  score = 68,
  missedSearches = 12,
  reviewGap = 148,
  leadsCaptured = 17,
  competitors = SAMPLE_COMPETITORS,
  leakingSearches = SAMPLE_LEAKING_SEARCHES,
  actionPlan = SAMPLE_ACTION_PLAN,
  leads = SAMPLE_PORTAL_LEADS,
  hideSidebar = false
}: DashboardMockupProps) {
  // Let states control interactivity inside the mockup!
  const [tasks, setTasks] = useState<ActionPlanItem[]>(
    actionPlan.map(t => ({ ...t, completed: false }))
  );
  const [activeTab, setActiveTab] = useState<'leaks' | 'competitors' | 'leads'>('leaks');
  const [selectedLeak, setSelectedLeak] = useState<LeakingSearch | null>(leakingSearches[0] || null);

  // Compute live score adjustments based on completed mockup tasks
  const completedCount = tasks.filter(t => t.completed).length;
  const liveScore = Math.min(100, score + (completedCount * 4));

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-indigo-950/20 overflow-hidden font-sans text-slate-100 flex flex-col md:flex-row min-h-[600px]">
      
      {/* 1. MOCK SIDEBAR (Hidden on mobile or when requested) */}
      {!hideSidebar && (
        <aside className="w-full md:w-60 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 p-4.5 flex flex-col shrink-0">
          {/* Business Label Card */}
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 mb-6 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs uppercase text-white shadow-xs">
              {businessName.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <h5 className="text-xs font-bold truncate text-slate-200">{businessName}</h5>
              <p className="text-[10px] text-slate-500 font-mono truncate">{website}</p>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="space-y-1.5 flex-1 select-none">
            {[
              { id: 'radar', icon: Compass, label: 'Growth Radar', active: true },
              { id: 'leaks', icon: Target, label: 'Search Leaks Scanner', pill: `${missedSearches}` },
              { id: 'reviews', icon: MessageSquare, label: 'Review Gap Analyzer', alert: true },
              { id: 'leads', icon: PhoneCall, label: 'Lead Rescue Inbox', pill: 'New' },
              { id: 'pages', icon: Layers, label: 'Local Page Builder' }
            ].map((menuItem) => (
              <div
                key={menuItem.id}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  menuItem.active 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/15' 
                    : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <menuItem.icon className={`w-4 h-4 ${menuItem.active ? 'text-blue-400' : 'text-slate-500'}`} />
                  <span>{menuItem.label}</span>
                </div>
                {menuItem.pill && (
                  <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-slate-800 text-slate-300">
                    {menuItem.pill}
                  </span>
                )}
                {menuItem.alert && (
                  <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-slate-950 animate-pulse" />
                )}
              </div>
            ))}
          </nav>

          {/* System Badge */}
          <div className="mt-auto pt-4 border-t border-slate-850/80 text-[10px] text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>JobLeak Signal: Stable</span>
            </div>
          </div>
        </aside>
      )}

      {/* 2. CORE WORKSPACE */}
      <main className="flex-1 p-5 sm:p-7 space-y-6 bg-slate-900/95 overflow-x-hidden">
        
        {/* Header Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/60 pb-4.5">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
              <span>Client Dashboard</span>
              <span>/</span>
              <span className="text-blue-400">{city} Market Profile</span>
            </div>
            <h4 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
              {businessName}
              <span className="text-xs bg-slate-800 text-slate-400 border border-slate-700/60 px-2 py-0.5 rounded-full font-sans font-medium">
                {industry} Edition
              </span>
            </h4>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Scan Status:</span>
            <span className="px-2 py-1 bg-red-950/60 border border-red-800/60 text-red-400 rounded-md flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Leaks Detected
            </span>
          </div>
        </div>

        {/* 4 Dashboard Scorecards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Main Visibility Factor Scorecard */}
          <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-820 flex items-center gap-3">
            <div className="relative shrink-0 w-12 h-12 flex items-center justify-center">
              {/* Circular gauge */}
              <svg className="w-full h-full -rotate-90">
                <circle cx="24" cy="24" r="21" fill="transparent" stroke="#1e293b" strokeWidth="4" />
                <circle 
                  cx="24" 
                  cy="24" 
                  r="21" 
                  fill="transparent" 
                  stroke={liveScore < 70 ? "#ef4444" : liveScore < 85 ? "#f59e0b" : "#10b981"} 
                  strokeWidth="4" 
                  strokeDasharray={`${2 * Math.PI * 21}`}
                  strokeDashoffset={`${2 * Math.PI * 21 * (1 - liveScore / 100)}`}
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <span className="absolute text-xs font-mono font-bold text-slate-200">
                {liveScore}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Local Score</p>
              <p className="text-xs font-bold text-slate-200">Visibility: {liveScore < 75 ? 'Weak' : 'Solid'}</p>
            </div>
          </div>

          {/* Missed Positions Card */}
          <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-820 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Missed Searches</p>
              <p className="text-sm font-bold text-slate-100 font-mono">{missedSearches} Keyphrases</p>
            </div>
          </div>

          {/* Review Deficit Card */}
          <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-820 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/15 flex items-center justify-center shrink-0 w-10">
              <Star className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Review Gap</p>
              <p className="text-sm font-bold text-slate-100 font-mono">-{reviewGap} Stars Needed</p>
            </div>
          </div>

          {/* Captured Leads Card */}
          <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-820 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Leads Captured</p>
              <p className="text-sm font-bold text-slate-100 font-mono">+{leadsCaptured} This Month</p>
            </div>
          </div>

        </div>

        {/* Central visual panel structure (Main leaks and actions split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT: Tabbed View (Leaks / Competitors / Leads Workspace) (7 Columns) */}
          <section className="lg:col-span-7 bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
            
            {/* Tabs Header */}
            <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-4 py-2 select-none">
              <div className="flex gap-2">
                {[
                  { id: 'leaks', label: 'Top Search Leaks' },
                  { id: 'competitors', label: 'Competitor Gaps' },
                  { id: 'leads', label: 'Captured Leads' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">
                Live Data Feed
              </span>
            </header>

            {/* Tab Body Contents */}
            <div className="p-4 flex-1">
              {activeTab === 'leaks' && (
                <div className="space-y-4">
                  <div className="text-slate-400 text-xs mb-1">
                    These search terms represent customers actively trying to book services in your city, but search engines are routing them to competitors.
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs min-w-[340px]">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-500">
                          <th className="pb-2 font-mono uppercase text-[9px]">Leaking Keyword</th>
                          <th className="pb-2 font-mono uppercase text-[9px] text-center">Volume</th>
                          <th className="pb-2 font-mono uppercase text-[9px] text-right">Lost Value</th>
                          <th className="pb-2 font-mono uppercase text-[9px] text-center">Threat</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-850">
                        {leakingSearches.map((leak, idx) => (
                          <tr 
                            key={idx} 
                            onClick={() => setSelectedLeak(leak)}
                            className={`group cursor-pointer hover:bg-slate-900/60 transition-colors ${
                              selectedLeak?.keyword === leak.keyword ? 'bg-slate-900/80 border-l border-blue-500 pl-2' : ''
                            }`}
                          >
                            <td className="py-2.5 font-semibold text-slate-200">
                              <div className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${leak.leakSeverity === 'critical' ? 'bg-red-500 animate-pulse' : leak.leakSeverity === 'high' ? 'bg-amber-400' : 'bg-blue-400'}`} />
                                <span className="group-hover:text-blue-400 transition-colors">{leak.keyword}</span>
                              </div>
                            </td>
                            <td className="py-2.5 text-center font-mono text-slate-400">{leak.monthlyVolume}/mo</td>
                            <td className="py-2.5 text-right font-mono text-emerald-400 font-bold">${leak.estimatedLossVal.toLocaleString()}</td>
                            <td className="py-2.5 text-center">
                              <span className={`px-2 py-0.5 rounded-sm uppercase text-[9px] font-semibold tracking-wider font-mono ${
                                leak.leakSeverity === 'critical' 
                                  ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                                  : leak.leakSeverity === 'high' 
                                  ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20' 
                                  : 'bg-blue-400/10 text-blue-300 border border-blue-400/20'
                              }`}>
                                {leak.leakSeverity}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Selected Leak Sidebar Details Card */}
                  {selectedLeak && (
                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-400 mt-4.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-200">Leak Diagnostics: "{selectedLeak.keyword}"</span>
                        <span className="text-[10px] font-mono text-slate-500">Estimated value: <b className="text-emerald-400">${selectedLeak.estimatedLossVal}/mo</b></span>
                      </div>
                      <p className="leading-relaxed">
                        Currently, <strong className="text-slate-300">{selectedLeak.competitorsWinning.join(' and ')}</strong> dominate the top screen positions. Implementing a high-speed local page targeting this keyphrase can pull matching calls to you instead of leaking them.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'competitors' && (
                <div className="space-y-4">
                  <div className="text-slate-400 text-xs mb-1">
                    Your key competitors in {city}. Review count, estimated GBP score, and their specific advantages.
                  </div>

                  <div className="space-y-3">
                    {competitors.map((comp, idx) => (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                          comp.isLeakSource 
                            ? 'bg-red-950/20 border-red-900/40 text-slate-200' 
                            : comp.name.includes('(You)')
                            ? 'bg-blue-950/20 border-blue-900/40 text-slate-200'
                            : 'bg-slate-900/40 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                            comp.name.includes('(You)') ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-100'
                          }`}>
                            {idx + 1}
                          </div>
                          <div>
                            <span className="text-xs font-bold block">{comp.name}</span>
                            <span className="text-[10px] text-slate-500 font-mono block mt-0.5">{comp.gap}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-5 sm:text-right">
                          <div>
                            <span className="text-[10px] font-mono uppercase text-slate-500 block">Rating / Reviews</span>
                            <span className="text-xs font-bold text-slate-300 flex items-center gap-1 mt-0.5">
                              {comp.rating} <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-450" />
                              <span className="text-slate-500 font-normal">({comp.reviews})</span>
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase text-slate-500 block">Local Score</span>
                            <span className={`text-xs block font-bold mt-0.5 ${
                              comp.score >= 80 ? 'text-emerald-400' : comp.score >= 70 ? 'text-amber-400' : 'text-red-400'
                            }`}>{comp.score}/100</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'leads' && (
                <div className="space-y-4">
                  <div className="text-slate-400 text-xs mb-1">
                    Simulated view of the <b>InstaLead Widget</b> inbox. This lightweight tool grabs bounce visitors from pages before they call a competitor.
                  </div>

                  <div className="space-y-3">
                    {leads.map((uLead) => (
                      <div key={uLead.id} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 relative hover:border-slate-700 transition-all">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-slate-200">{uLead.customerName}</span>
                          <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                            <Timer className="w-3 h-3 text-blue-500" /> {uLead.timestamp}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-300 mb-1">
                          Requested: <strong className="text-slate-100">{uLead.serviceNeeded}</strong> • {uLead.phone}
                        </div>
                        {uLead.details && (
                          <div className="text-[10px] text-slate-500 font-sans italic bg-slate-950/40 p-2 rounded-md border border-slate-900/40 mt-1.5">
                            "{uLead.details}"
                          </div>
                        )}
                        
                        {/* Status badge */}
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                            uLead.status === 'new' 
                              ? 'bg-red-500/10 text-red-400' 
                              : uLead.status === 'booked' 
                              ? 'bg-emerald-500/15 text-emerald-400' 
                              : 'bg-blue-500/10 text-blue-400'
                          }`}>
                            {uLead.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
          </section>

          {/* RIGHT: 30-Day Tactical Recovery Action Plan (5 Columns) */}
          <section className="lg:col-span-5 bg-slate-950/50 rounded-xl border border-slate-800 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 select-none">
                <h5 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
                  30-Day Recovery Checklist
                </h5>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 border border-blue-900/60 px-2 py-0.5 rounded-full">
                  Interactive Preview
                </span>
              </div>
              
              <p className="text-slate-400 text-xs mb-4">
                Check tasks off as you complete them to see how they impact your regional authority and grow your Visibility Score.
              </p>

              <div id="mock-tasks-list" className="space-y-3">
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    onClick={() => toggleTask(task.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                      task.completed 
                        ? 'bg-emerald-950/15 border-emerald-900/50 text-slate-300' 
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-100'
                    }`}
                  >
                    {/* Tick Checkbox */}
                    <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      task.completed 
                        ? 'bg-emerald-500 border-emerald-400 text-white' 
                        : 'border-slate-600 group-hover:border-slate-500'
                    }`}>
                      {task.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className={`text-xs block leading-tight ${task.completed ? 'line-through text-slate-500' : 'font-medium'}`}>
                        {task.task}
                      </span>
                      
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className={`px-1.5 py-0.5 rounded-sm text-[8px] font-mono uppercase font-bold ${
                          task.impact === 'Critical' 
                            ? 'bg-red-500/15 text-red-400 border border-red-500/20' 
                            : 'bg-blue-500/10 text-blue-400'
                        }`}>
                          Impact: {task.impact}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">
                          {task.delay}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Check all completion alert block */}
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-850/80 mt-5 flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-400 border border-blue-500/15">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">Plan Completion</span>
                  <span className="text-xs font-bold text-slate-200 font-mono">{completedCount} of {tasks.length} Resolved</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Projected Gained Calls</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">+{completedCount * 3} calls/mo</span>
              </div>
            </div>
          </section>

        </div>
        
      </main>
    </div>
  );
}
