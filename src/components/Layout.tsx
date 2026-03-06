import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex font-sans text-zinc-900">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col min-h-screen relative">
        <div className="flex-1 p-12 lg:p-24 max-w-4xl mx-auto w-full">
          {children}
        </div>
        <footer className="border-t border-zinc-200 py-4 px-8 flex justify-between items-center text-sm text-zinc-500 bg-[#f8f9fa] w-full mt-auto">
          <a href="#" className="hover:text-zinc-900 transition-colors">Reach out →</a>
          <div>Made by Oscar | © 2026</div>
          <div>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' })}</div>
        </footer>
      </main>
    </div>
  );
}
