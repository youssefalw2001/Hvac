import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic graphic logo container */}
      <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4.5 h-4.5 text-white"
        >
          {/* Active Growth indicator / upward arrow */}
          <path d="m14 11-2-2-2 2" className="text-white" strokeWidth="3" />
          <path d="M12 15V9" className="text-white" strokeWidth="3" />
          <path d="M12 21c-3.1-3-7-6.5-7-10.5a7 7 0 0 1 14 0" strokeWidth="2" className="opacity-80" />
        </svg>
      </div>
      
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-tight text-slate-900 flex items-center gap-0.5">
            Job<span className="text-blue-600">Leak</span>
          </span>
          <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase -mt-1 leading-none">
            Growth Intelligence
          </span>
        </div>
      )}
    </div>
  );
}
