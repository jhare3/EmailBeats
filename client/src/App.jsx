import React from 'react';
import Sidebar from './components/SideBar.jsx';
import EmailComposer from './components/EmailComposer.jsx';

function App() {
  return (
    <div className="flex min-h-screen bg-charcoal text-zinc-100 font-sans selection:bg-jazzGold selection:text-black">
      
      {/* 1. Fixed Sidebar */}
      <Sidebar />

      {/* 2. Main Scrollable Content Area */}
      <main className="flex-1 h-screen overflow-y-auto bg-[#0f0f0f] flex flex-col items-center">
        
        {/* Top Header Section */}
        <header className="w-full max-w-5xl px-10 pt-10 pb-6 flex justify-between items-end">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-jazzGold animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                Project: EmailBeats
              </span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-white">
              Campaign <span className="text-jazzGold">Drafts</span>
            </h1>
          </div>

          <div className="flex flex-col items-end border-l border-zinc-800 pl-6">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Workspace</span>
            <span className="text-sm font-medium text-zinc-300">Kingsford Beats Studio</span>
          </div>
        </header>

        {/* 3. The Central Workspace (Email Composer) */}
        <section className="w-full max-w-5xl px-10 pb-20">
          <div className="w-full">
            <EmailComposer />
          </div>

          {/* Optional: Future home of the Recipient Table */}
          <div className="mt-8 p-6 border border-dashed border-zinc-800 rounded-lg flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
             <p className="text-zinc-500 text-xs uppercase tracking-widest">Upcoming Feature</p>
             <p className="text-zinc-400 text-sm mt-1 font-medium">Recipient Data Grid (CSV/Google Sheets)</p>
          </div>
        </section>

        {/* Branding Footer */}
        <footer className="mt-auto py-8 text-zinc-700 text-[10px] uppercase tracking-[0.4em] font-bold">
          &copy; 2026 Kingsford Audio Labs. Built for Scale.
        </footer>
      </main>
    </div>
  );
}

export default App;