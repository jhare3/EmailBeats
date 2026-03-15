import React from 'react';
import Sidebar from './components/SideBar.jsx';
import EmailComposer from './components/EmailComposer.jsx';

function App() {
  return (
    <div className="flex min-h-screen bg-charcoal text-white font-sans">
      {/* Sidebar - Fixed width, stays on the left */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-10 flex flex-col items-center">
        
        {/* Top Bar / Header Info */}
        <div className="w-full max-w-4xl mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-jazzGold">
              Campaign Manager
            </h1>
            <p className="text-zinc-500 text-sm mt-1">
              Drafting personalized outreach for your latest beats.
            </p>
          </div>
          
          <div className="text-right">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Project</span>
            <span className="text-sm font-bold text-zinc-300">EmailBeats v1.0</span>
          </div>
        </div>

        {/* The Main Compose Tool */}
        <div className="w-full max-w-4xl">
          <EmailComposer />
        </div>

        {/* Quick Help / Instructions Footer */}
        <footer className="mt-auto pt-10 text-zinc-600 text-[11px] uppercase tracking-[0.2em]">
          Built for kingsfordbeats • {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}

export default App;