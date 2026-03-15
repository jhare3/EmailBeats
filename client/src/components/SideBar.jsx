import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1a1a1a] h-screen flex flex-col border-r border-zinc-800 p-8 shrink-0">
      <div className="mb-12">
        <h2 className="text-xl font-black text-jazz-gold uppercase tracking-tighter">emailBeats</h2>
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">kingsford production suite</p>
      </div>
      
      <nav className="flex-1">
        <div className="text-[10px] uppercase text-zinc-600 font-bold mb-4 tracking-widest">Marketing</div>
        <ul className="space-y-4 text-sm text-zinc-400">
          <li className="hover:text-jazz-gold cursor-pointer transition-colors">Campaigns</li>
          <li className="hover:text-jazz-gold cursor-pointer transition-colors">Templates</li>
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-zinc-800">
        <div className="text-[10px] text-green-500 font-bold uppercase">● System Ready</div>
      </div>
    </aside>
  );
};

export default Sidebar;