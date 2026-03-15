import React, { useState } from 'react';

const EmailComposer = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [emailBody, setEmailBody] = useState(
    "Yo {{name}},\n\nI saw you were looking for some new vibes. I just finished this {{beat_type}} beat and thought of your style. \n\nYou can check it out here: {{beat_link}}\n\nLet me know what you think!"
  );

  // Mock data for the preview
  const mockData = {
    name: 'James',
    beat_type: 'Dark Trap',
    beat_link: 'kingsfordbeats.com/dark-trap-01',
    email: 'james@example.com'
  };

  // Function to swap tags for mock data
  const renderPreview = (text) => {
    return text
      .replace(/{{name}}/g, mockData.name)
      .replace(/{{beat_type}}/g, mockData.beat_type)
      .replace(/{{beat_link}}/g, mockData.beat_link);
  };

  return (
    <div className="bg-[#1e1e1e] p-8 rounded-lg w-full shadow-2xl border border-zinc-800">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white">Email Composer</h3>
          <div className="flex gap-2 mt-2">
            {['name', 'beat_type', 'beat_link'].map(tag => (
              <span key={tag} className="text-[10px] bg-zinc-900 text-jazzGold border border-zinc-700 px-2 py-1 rounded font-mono">
                {`{{${tag}}}`}
              </span>
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => setIsPreview(!isPreview)} 
          className={`px-4 py-2 rounded text-xs font-black uppercase tracking-widest transition-all ${
            isPreview 
            ? 'bg-jazzGold text-black' 
            : 'bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-jazzGold'
          }`}
        >
          {isPreview ? '← Back to Edit' : 'Preview Live Data'}
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 ml-1">Subject Line</label>
          <input 
            type="text" 
            placeholder="e.g. New {{beat_type}} for {{name}}" 
            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded text-white outline-none focus:border-jazzGold transition-colors"
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 ml-1">Email Body</label>
          {isPreview ? (
            <div className="w-full h-64 p-4 bg-black border border-jazzGold rounded text-zinc-300 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {renderPreview(emailBody)}
            </div>
          ) : (
            <textarea 
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              className="w-full h-64 p-4 bg-zinc-900 border border-zinc-700 rounded text-white outline-none focus:border-jazzGold resize-none leading-relaxed transition-colors"
            />
          )}
        </div>

        {/* Action Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-zinc-800 mt-4">
          <div className="text-xs text-zinc-500 font-mono">
            Sending as: <span className="text-zinc-300 italic">kingsford@beats.com</span>
          </div>
          <button className="px-8 py-3 bg-jazzGold text-black font-black uppercase tracking-widest rounded shadow-lg hover:bg-yellow-400 active:scale-95 transition-all">
            Save Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailComposer;