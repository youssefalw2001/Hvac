import { CompetitorData, LeakingSearch, ActionPlanItem, CapturedLead } from './types';

// Industries list supported by JobLeak
export const INDUSTRIES = [
  { value: 'roofing', label: 'Roofing & Exteriors' },
  { value: 'hvac', label: 'HVAC & Climate Control' },
  { value: 'plumbing', label: 'Plumbing & Drainage' },
  { value: 'electrical', label: 'Electrical Services' },
  { value: 'pest-control', label: 'Pest Control Services' },
  { value: 'garage-doors', label: 'Garage Door Repair & Install' },
  { value: 'water-damage', label: 'Water & Mold Restoration' }
];

// SaaS Pricing Plans
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$99',
    period: 'mo',
    description: 'Perfect for local owner-operators getting started with search tracking.',
    popular: false,
    features: [
      '1 Tracked Location',
      'Monthly Job Leak Scan',
      'Review Gap Analyzer',
      '30-Day Step-by-Step Action Plan',
      'Email Support (24hr response)',
      'Basic Local Rank Tracker'
    ]
  },
  {
    name: 'Growth',
    price: '$199',
    period: 'mo',
    description: 'Designed for scaling service businesses wanting active competitor conquesting.',
    popular: true,
    features: [
      'Up to 3 Tracked Locations',
      'Weekly Automated Leak Scans',
      'Competitor Signal Intelligence',
      'InstaLead Capture Web Widget',
      'Dedicated Competitor Move Alerts',
      'Priority Email & Chat Support'
    ]
  },
  {
    name: 'Pro',
    price: '$299',
    period: 'mo',
    description: 'The master suite for multi-location players or dominant regional brands.',
    popular: false,
    features: [
      'Up to 10 Tracked Locations',
      'Real-Time Radar Leak Scanning',
      'Advanced Local Ranking Vectors',
      'AI-Powered Local Service Page Guides',
      'White-labeled PDF Executive Reports',
      'Direct Phone Support & Account Review'
    ]
  }
];

// Sample report data for default Austin Pro Roofing
export const DEFAULT_REPORT_BUSINESS = {
  name: 'Austin Pro Roofing',
  city: 'Austin, TX',
  industry: 'Roofing & Exteriors',
  website: 'austinproroofing.com',
  score: 68,
  missedSearches: 12,
  reviewGap: 148,
  leadsCaptured: 17
};

export const SAMPLE_COMPETITORS: CompetitorData[] = [
  { name: 'Rapid Roofing Austin', score: 87, reviews: 294, rating: 4.9, gap: 'Winning 8/12 searches', isLeakSource: true },
  { name: 'Atlas Exteriors', score: 81, reviews: 184, rating: 4.8, gap: 'Strong local map pack hold', isLeakSource: true },
  { name: 'CityTop Roofing Solutions', score: 76, reviews: 145, rating: 4.6, gap: 'Optimized service sections', isLeakSource: false },
  { name: 'Austin Pro Roofing (You)', score: 68, reviews: 46, rating: 4.4, gap: 'Your business profile', isLeakSource: false }
];

export const SAMPLE_LEAKING_SEARCHES: LeakingSearch[] = [
  { keyword: 'emergency roof repair Austin', monthlyVolume: 320, competitorsWinning: ['Rapid Roofing Austin', 'Atlas Exteriors'], estimatedLossVal: 4800, leakSeverity: 'critical' },
  { keyword: 'storm damage roof repair Austin', monthlyVolume: 450, competitorsWinning: ['Atlas Exteriors', 'CityTop Roofing'], estimatedLossVal: 6200, leakSeverity: 'critical' },
  { keyword: 'roof leak repair near me', monthlyVolume: 490, competitorsWinning: ['Rapid Roofing Austin'], estimatedLossVal: 3900, leakSeverity: 'high' },
  { keyword: 'same day roofing Austin', monthlyVolume: 180, competitorsWinning: ['Rapid Roofing Austin', 'CityTop Roofing'], estimatedLossVal: 2700, leakSeverity: 'high' },
  { keyword: 'roof inspection Austin', monthlyVolume: 610, competitorsWinning: ['Atlas Exteriors'], estimatedLossVal: 1500, leakSeverity: 'moderate' }
];

export const SAMPLE_PORTAL_LEADS: CapturedLead[] = [
  { id: 'ld-001', customerName: 'Marcus V.', phone: '512-555-8392', serviceNeeded: 'Roof Leak Repair (Active Kitchen Leak)', status: 'new', timestamp: '12 mins ago', details: 'Wants to schedule evaluation asap. Water dripping in ceiling fan.' },
  { id: 'ld-002', customerName: 'Sarah Jenkins', phone: '512-555-1029', serviceNeeded: 'Free Commercial Roof Inspection', status: 'booked', timestamp: '2 hours ago', details: 'Booked job for Tuesday morning. 3,500 sq ft warehouse.' },
  { id: 'ld-003', customerName: 'David K.', phone: '512-555-3344', serviceNeeded: 'Hail Damage Inspection', status: 'contacted', timestamp: '5 hours ago', details: 'Insurance claim. Left voicemail to confirm appointment slot.' },
  { id: 'ld-004', customerName: 'Patricia G.', phone: '512-555-4921', serviceNeeded: 'Gutter Replacement Estimate', status: 'booked', timestamp: '1 day ago', details: 'Estimated at $1,850. Scheduled for fabrication next week.' }
];

export const SAMPLE_ACTION_PLAN: ActionPlanItem[] = [
  { id: 'ap-1', task: 'Add dedicated "Emergency Roof Repair" landing page to website', impact: 'Critical', delay: 'Immediate', category: 'Pages', completed: false },
  { id: 'ap-2', task: 'Reach out to top 20 past construction clients for reviews to close the 148-Review Gap', impact: 'Critical', delay: 'Immediate', category: 'Reviews', completed: false },
  { id: 'ap-3', task: 'Add local municipal page targets for North Austin, West Lake Hills & Round Rock', impact: 'High', delay: 'Next 7 days', category: 'Pages', completed: false },
  { id: 'ap-4', task: 'Update Google Business Profile description with emergency keywords & complete services list', impact: 'High', delay: 'Next 7 days', category: 'GBP', completed: false },
  { id: 'ap-5', task: 'Deploy JobLeak InstaLead widget on home and service pages to rescue bounce traffic', impact: 'Critical', delay: 'Immediate', category: 'Conversion', completed: false }
];

// Dynamic keyword generators for other chosen industries to personalize the experience!
export const getIndustrySpecificData = (industry: string, city: string) => {
  const cleanCity = city || 'Austin';
  
  switch (industry) {
    case 'plumbing':
      return {
        score: 64,
        missedSearches: 15,
        reviewGap: 182,
        leadsCaptured: 24,
        leakingSearches: [
          { keyword: `emergency plumber ${cleanCity}`, monthlyVolume: 510, competitorsWinning: ['24/7 Flow Pro', 'Cascade Plumbing'], estimatedLossVal: 2400, leakSeverity: 'critical' },
          { keyword: `water heater replacement ${cleanCity}`, monthlyVolume: 380, competitorsWinning: ['Cascade Plumbing'], estimatedLossVal: 5500, leakSeverity: 'critical' },
          { keyword: 'clogged drain repair near me', monthlyVolume: 640, competitorsWinning: ['Mr. Rooter Local', '24/7 Flow Pro'], estimatedLossVal: 1800, leakSeverity: 'high' },
          { keyword: `slab leak detection ${cleanCity}`, monthlyVolume: 190, competitorsWinning: ['Cascade Plumbing'], estimatedLossVal: 4500, leakSeverity: 'high' },
          { keyword: `backflow testing ${cleanCity}`, monthlyVolume: 220, competitorsWinning: ['Mr. Rooter Local'], estimatedLossVal: 950, leakSeverity: 'moderate' }
        ] as LeakingSearch[],
        actionPlan: [
          { id: 'ap-pl-1', task: `Create a high-speed "Water Heater Replacement" guide & landing page`, impact: 'Critical', delay: 'Immediate', category: 'Pages', completed: false },
          { id: 'ap-pl-2', task: `Claim service sub-categories on Google Business Profile for slab leaks & Hydrojetting`, impact: 'High', delay: 'Next 7 days', category: 'GBP', completed: false },
          { id: 'ap-pl-3', task: `Integrate immediate callback forms to rescue late-night emergency search bounces`, impact: 'Critical', delay: 'Immediate', category: 'Conversion', completed: false },
          { id: 'ap-pl-4', task: `Automate review collection text messages for field techs after dispatcher reports job done`, impact: 'High', delay: 'Next 7 days', category: 'Reviews', completed: false }
        ] as ActionPlanItem[]
      };
    case 'hvac':
      return {
        score: 71,
        missedSearches: 11,
        reviewGap: 95,
        leadsCaptured: 19,
        leakingSearches: [
          { keyword: `24 hour AC repair ${cleanCity}`, monthlyVolume: 720, competitorsWinning: ['AirControl Pro', 'Climate Guard Inc.'], estimatedLossVal: 3800, leakSeverity: 'critical' },
          { keyword: `emergency heating fix ${cleanCity}`, monthlyVolume: 290, competitorsWinning: ['AirControl Pro'], estimatedLossVal: 4100, leakSeverity: 'critical' },
          { keyword: 'furnace replacement near me', monthlyVolume: 340, competitorsWinning: ['Polar Heat & Air'], estimatedLossVal: 6800, leakSeverity: 'high' },
          { keyword: `commercial HVAC maintenance ${cleanCity}`, monthlyVolume: 150, competitorsWinning: ['Climate Guard Inc.'], estimatedLossVal: 8500, leakSeverity: 'high' },
          { keyword: `duct cleaning service ${cleanCity}`, monthlyVolume: 410, competitorsWinning: ['Polar Heat & Air'], estimatedLossVal: 1200, leakSeverity: 'moderate' }
        ] as LeakingSearch[],
        actionPlan: [
          { id: 'ap-hvac-1', task: `Optimize metadata around "Emergency AC Diagnostics" before summer heat index kicks in`, impact: 'Critical', delay: 'Immediate', category: 'GBP', completed: false },
          { id: 'ap-hvac-2', task: `Publish seasonal discount bundles for duct cleaning & furnace preventative maintenance`, impact: 'High', delay: 'Next 7 days', category: 'Pages', completed: false },
          { id: 'ap-hvac-3', task: `Close the 95-review gap with main competitors by enabling QR codes on technician dispatch cards`, impact: 'High', delay: 'Next 7 days', category: 'Reviews', completed: false },
          { id: 'ap-hvac-4', task: `Embed direct schedule calendar booking tool in the homepage hero to shorten booking path`, impact: 'Critical', delay: 'Immediate', category: 'Conversion', completed: false }
        ] as ActionPlanItem[]
      };
    case 'electrical':
      return {
        score: 67,
        missedSearches: 14,
        reviewGap: 110,
        leadsCaptured: 13,
        leakingSearches: [
          { keyword: `emergency electrician ${cleanCity}`, monthlyVolume: 480, competitorsWinning: ['Apex Spark Co', 'Voltage Techs'], estimatedLossVal: 2200, leakSeverity: 'critical' },
          { keyword: `ev charger installation ${cleanCity}`, monthlyVolume: 390, competitorsWinning: ['Voltage Techs'], estimatedLossVal: 3200, leakSeverity: 'critical' },
          { keyword: 'breaker panel upgrade near me', monthlyVolume: 230, competitorsWinning: ['Apex Spark Co'], estimatedLossVal: 4800, leakSeverity: 'high' },
          { keyword: `recessed lighting installer ${cleanCity}`, monthlyVolume: 310, competitorsWinning: ['Citywide Wiring'], estimatedLossVal: 1900, leakSeverity: 'high' },
          { keyword: `whole house surge protection ${cleanCity}`, monthlyVolume: 170, competitorsWinning: ['Voltage Techs'], estimatedLossVal: 2400, leakSeverity: 'moderate' }
        ] as LeakingSearch[],
        actionPlan: [
          { id: 'ap-el-1', task: `Set up panel-upgrade landing page matching regional code standards`, impact: 'Critical', delay: 'Immediate', category: 'Pages', completed: false },
          { id: 'ap-el-2', task: `Post photo updates of EV charger installations weekly to Google Profile local updates feed`, impact: 'High', delay: 'Next 7 days', category: 'GBP', completed: false },
          { id: 'ap-el-3', task: `Deploy instantly updating estimates panel for common transparent electrical jobs`, impact: 'High', delay: 'Immediate', category: 'Conversion', completed: false }
        ] as ActionPlanItem[]
      };
    case 'pest-control':
      return {
        score: 75,
        missedSearches: 9,
        reviewGap: 72,
        leadsCaptured: 31,
        leakingSearches: [
          { keyword: `emergency pest control ${cleanCity}`, monthlyVolume: 310, competitorsWinning: ['Terminid Pros', 'EcoShield Local'], estimatedLossVal: 1100, leakSeverity: 'critical' },
          { keyword: `termite treatment cost ${cleanCity}`, monthlyVolume: 420, competitorsWinning: ['Terminid Pros'], estimatedLossVal: 3900, leakSeverity: 'critical' },
          { keyword: 'wasp nest removal near me', monthlyVolume: 510, competitorsWinning: ['EcoShield Local', 'Critter Evictors'], estimatedLossVal: 850, leakSeverity: 'high' },
          { keyword: `bed bug inspection ${cleanCity}`, monthlyVolume: 260, competitorsWinning: ['Terminid Pros'], estimatedLossVal: 2900, leakSeverity: 'high' }
        ] as LeakingSearch[],
        actionPlan: [
          { id: 'ap-pest-1', task: `Structure specific "Termite Warranty" benefits clearly on pricing modules`, impact: 'High', delay: 'Next 7 days', category: 'Pages', completed: false },
          { id: 'ap-pest-2', task: `Create active local search pages detailing crawl space treatments & eco-friendly options`, impact: 'High', delay: 'Next 7 days', category: 'Pages', completed: false },
          { id: 'ap-pest-3', task: `Add termite inspection interactive quiz to generate direct high-intent residential bids`, impact: 'Critical', delay: 'Immediate', category: 'Conversion', completed: false }
        ] as ActionPlanItem[]
      };
    default: // fallback to roofing
      return {
        score: 68,
        missedSearches: 12,
        reviewGap: 148,
        leadsCaptured: 17,
        leakingSearches: SAMPLE_LEAKING_SEARCHES,
        actionPlan: SAMPLE_ACTION_PLAN
      };
  }
};
