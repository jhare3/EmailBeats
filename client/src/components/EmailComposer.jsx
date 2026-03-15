import React, { useState } from 'react';

const EmailComposer = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [emailBody, setEmailBody] = useState(
    "Yo {{name}},\n\nI saw you were looking for some new vibes. I just finished this {{beat_type}} beat and thought of your style. \n\nYou can check it out here: {{beat_link}}\n\nLet me know what you think!"
  );

  const mockData = {
    name: 'James',
    beat_type: 'Dark Trap',
    beat_link: 'kingsfordbeats.com/dark-trap-01',
    email: 'james@example.com'
  };

  const renderPreview = (text) => {
    if (!text) return "";
    return text
      .replace(/{{name}}/g, mockData.name)
      .replace(/{{beat_type}}/g, mockData.beat_type)
      .replace(/{{beat_link}}/g, mockData.beat_link);
  };

  return (
    <div className="bg-[#1e1e1e] p-8 rounded-lg w-full min-h-[400px] shadow-2xl border border-zinc-800 block">
      <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">Email Composer</h3>
        <button 
          onClick={() => setIsPreview(!isPreview)} 
          className={`px-4 py-2 rounded text-xs font-black uppercase tracking-widest transition-all ${
            isPreview ? 'bg-jazzGold text-black' : 'bg-zinc-800 text-zinc-400'
          }`}
        >
          {isPreview ? '← Edit' : 'Preview'}
        </button>
      </div>

      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Subject Line" 
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded text-white outline-none focus:border-jazzGold"
        />
        
        {isPreview ? (
          <div className="w-full h-64 p-4 bg-black border border-jazzGold rounded text-zinc-300 whitespace-pre-wrap">
            {renderPreview(emailBody)}
          </div>
        ) : (
          <textarea 
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            className="w-full h-64 p-4 bg-zinc-900 border border-zinc-700 rounded text-white outline-none focus:border-jazzGold resize-none"
          />
        )}

        <div className="flex justify-between items-center pt-4">
          <span className="text-xs text-zinc-500 italic">Previewing for: {mockData.email}</span>
          <button className="px-8 py-3 bg-jazzGold text-black font-black uppercase tracking-widest rounded shadow-lg">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailComposer;