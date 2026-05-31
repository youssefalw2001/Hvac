/**
 * TypeScript definitions for JobLeak SaaS
 */

export type AppRoute = 'home' | 'report' | 'login' | 'dashboard';

export interface ScanInput {
  businessName: string;
  industry: string;
  city: string;
  website: string;
  email: string;
  phone: string;
  focus: string; // What do you want more of? (calls, bookings, commercial, etc)
}

export interface MetricCardData {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  scoreColor?: 'red' | 'yellow' | 'green';
  suffix?: string;
  description: string;
}

export interface CompetitorData {
  name: string;
  score: number;
  reviews: number;
  rating: number;
  gap: string;
  isLeakSource: boolean;
}

export interface LeakingSearch {
  keyword: string;
  monthlyVolume: number;
  competitorsWinning: string[];
  estimatedLossVal: number; // Value in dollars of missed jobs
  leakSeverity: 'high' | 'critical' | 'moderate';
}

export interface ActionPlanItem {
  id: string;
  task: string;
  impact: 'High' | 'Medium' | 'Critical';
  delay: string; // "Immediate" or "Next 7 days"
  category: 'GBP' | 'Reviews' | 'Pages' | 'Conversion';
  completed?: boolean;
}

export interface CapturedLead {
  id: string;
  customerName: string;
  phone: string;
  serviceNeeded: string;
  status: 'new' | 'contacted' | 'booked';
  timestamp: string;
  details?: string;
}
