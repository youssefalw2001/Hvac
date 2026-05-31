import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import SampleReport from './pages/SampleReport';
import Login from './pages/Login';
import DashboardDemo from './pages/DashboardDemo';
import { AppRoute, ScanInput } from './types';

export default function App() {
  const [route, setRouteState] = useState<AppRoute>('home');
  const [scanInput, setScanInput] = useState<ScanInput | null>(null);

  // Sync state route with browser URL hash for real browser forward/back history support!
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'report', 'login', 'dashboard'].includes(hash)) {
        setRouteState(hash as AppRoute);
        // Scroll to top on route change
        window.scrollTo({ top: 0 });
      } else if (!hash) {
        setRouteState('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial mounting

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when React state route updates
  const setRoute = (newRoute: AppRoute) => {
    window.location.hash = `/${newRoute}`;
    setRouteState(newRoute);
  };

  // Handler for custom scan trigger
  const handleScanComplete = (input: ScanInput) => {
    setScanInput(input);
    setRoute('report');
  };

  // Reset custom scan (clears custom reports back to Austin Pro Roofing standard presets)
  const handleResetScan = () => {
    setScanInput(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased font-sans flex flex-col justify-between">
      
      {/* Dynamic route render node router */}
      <main className="flex-grow">
        {route === 'home' && (
          <Home 
            currentRoute={route} 
            setRoute={setRoute} 
            onScanComplete={handleScanComplete} 
          />
        )}
        
        {route === 'report' && (
          <SampleReport 
            currentRoute={route} 
            setRoute={setRoute} 
            scanInput={scanInput}
            onResetScan={handleResetScan}
          />
        )}
        
        {route === 'login' && (
          <Login 
            setRoute={setRoute} 
          />
        )}
        
        {route === 'dashboard' && (
          <DashboardDemo 
            setRoute={setRoute} 
          />
        )}
      </main>

    </div>
  );
}
