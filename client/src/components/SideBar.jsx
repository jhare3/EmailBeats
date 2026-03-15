import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <h2 style={styles.logo}>emailBeats</h2>
        <p style={styles.tagline}>kingsford production suite</p>
      </div>
      
      <nav style={styles.nav}>
        <div style={styles.sectionLabel}>Marketing</div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Campaigns</li>
          <li style={styles.navItem}>Templates</li>
          <li style={styles.navItem}>Recipients</li>
        </ul>

        <div style={styles.sectionLabel}>Library</div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>All Beats</li>
          <li style={styles.navItem}>Lease Types</li>
          <li style={styles.navItem}>Stats</li>
        </ul>
      </nav>

      <div style={styles.footer}>
        <div style={styles.statusIndicator}>● System Ready</div>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '260px',
    backgroundColor: '#1a1a1a',
    color: '#f5f5f5',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #333',
    padding: '2rem 1rem',
  },
  logoContainer: {
    marginBottom: '3rem',
    paddingLeft: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '800',
    letterSpacing: '-1px',
    margin: 0,
    color: '#ffcc00', // Vintage Gold
  },
  tagline: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    margin: '5px 0 0 0',
    color: '#666',
  },
  nav: {
    flex: 1,
  },
  sectionLabel: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#444',
    marginBottom: '10px',
    marginTop: '20px',
    paddingLeft: '1rem',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    padding: '10px 1rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    borderRadius: '4px',
    transition: 'background 0.2s',
    color: '#bbb',
    // Hover effect would be handled with a state or CSS file
  },
  footer: {
    marginTop: 'auto',
    paddingLeft: '1rem',
  },
  statusIndicator: {
    fontSize: '0.7rem',
    color: '#4caf50', // Success green
  }
};

export default Sidebar;