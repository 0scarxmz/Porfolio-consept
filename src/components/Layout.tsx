import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';

function RealTimeClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' })}</div>;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex font-sans text-zinc-900">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen relative w-full">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 border-b border-zinc-200 bg-[#f4f4f5] flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-300 overflow-hidden">
              <img src="/OscarLogo.png" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-medium text-sm">Oscar</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-zinc-200 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        <div className="flex-1 p-6 md:p-16 max-w-[960px] w-full mx-auto shrink-0 flex flex-col justify-center">
          {children}
        </div>
        <footer className="border-t border-zinc-200 py-4 px-6 md:px-8 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-black bg-[#f8f9fa] w-full mt-auto sticky bottom-0 z-40">
          <Link to="/contact" className="hover:opacity-70 transition-opacity">Reach out →</Link>
          <div className="text-center">Made by Oscar | © 2026</div>
          <RealTimeClock />
        </footer>
      </main>
    </div>
  );
}
