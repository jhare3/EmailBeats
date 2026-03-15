import React, { useState } from 'react';

const EmailComposer = () => {
  const [isPreview, setIsPreview] = useState(false);
  
  // Mocking the first row of your CSV
  const mockData = {
    name: 'James',
    beat_type: 'Dark Trap',
    beat_link: 'kingsfordbeats.com/dark-trap-01',
    email: 'james@example.com'
  };

  const templateText = "Yo {{name}},\n\nI saw you were looking for some new vibes. I just finished this {{beat_type}} beat and thought of your style. \n\nYou can check it out here: {{beat_link}}\n\nLet me know what you think!";

  // Simple function to "render" the tags for the preview
  const renderPreview = (text) => {
    return text
      .replace(/{{name}}/g, mockData.name)
      .replace(/{{beat_type}}/g, mockData.beat_type)
      .replace(/{{beat_link}}/g, mockData.beat_link);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Campaign Composer</h3>
          <button 
            onClick={() => setIsPreview(!isPreview)} 
            style={isPreview ? styles.activeToggle : styles.toggle}
          >
            {isPreview ? 'Editing Mode' : 'Preview with Data'}
          </button>
        </div>
        
        {!isPreview && (
          <div style={styles.tagBadgeContainer}>
            {['name', 'beat_type', 'beat_link'].map(tag => (
              <span key={tag} style={styles.tagBadge}>{`{{${tag}}}`}</span>
            ))}
          </div>
        )}
      </div>

      <div style={styles.form}>
        <input 
          type="text" 
          placeholder="Subject Line" 
          style={styles.input} 
          value={isPreview ? `Exclusive: New ${mockData.beat_type} for ${mockData.name}` : ""}
          readOnly={isPreview}
        />
        
        <div style={styles.editorContainer}>
          {isPreview ? (
            <div style={styles.previewBox}>
              {renderPreview(templateText).split('\n').map((line, i) => (
                <p key={i} style={{ margin: '0 0 10px 0' }}>{line}</p>
              ))}
            </div>
          ) : (
            <textarea 
              defaultValue={templateText}
              style={styles.textarea}
            />
          )}
        </div>

        <div style={styles.footer}>
          <div style={styles.recipientInfo}>
            Sending to: <span style={{ color: '#ffcc00' }}>{mockData.email}</span>
          </div>
          <button style={styles.sendBtn}>Save Campaign</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#1e1e1e', color: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '800px', width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' },
  header: { borderBottom: '1px solid #333', marginBottom: '1.5rem', paddingBottom: '1rem' },
  toggle: { padding: '8px 15px', backgroundColor: '#333', color: '#fff', border: '1px solid #444', borderRadius: '4px', cursor: 'pointer' },
  activeToggle: { padding: '8px 15px', backgroundColor: '#ffcc00', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  tagBadgeContainer: { display: 'flex', gap: '10px', marginTop: '15px' },
  tagBadge: { backgroundColor: '#222', color: '#ffcc00', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', border: '1px solid #444' },
  input: { width: '100%', padding: '12px', marginBottom: '1rem', backgroundColor: '#2a2a2a', border: '1px solid #444', color: '#fff', borderRadius: '4px', boxSizing: 'border-box' },
  textarea: { width: '100%', height: '250px', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: '#fff', borderRadius: '4px', resize: 'none', lineHeight: '1.6', boxSizing: 'border-box' },
  previewBox: { width: '100%', height: '250px', padding: '12px', backgroundColor: '#111', border: '1px solid #ffcc00', color: '#eee', borderRadius: '4px', overflowY: 'auto', lineHeight: '1.6', boxSizing: 'border-box' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' },
  recipientInfo: { fontSize: '0.85rem', color: '#888' },
  sendBtn: { padding: '10px 25px', backgroundColor: '#ffcc00', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer', borderRadius: '4px' }
};

export default EmailComposer;