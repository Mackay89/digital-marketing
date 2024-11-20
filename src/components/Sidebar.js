// Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.list}>
        <li><a href="/dashboard" style={styles.link}>Dashboard</a></li>
        <li><a href="/campaigns" style={styles.link}>Campaigns</a></li>
        <li><a href="/reports" style={styles.link}>Reports</a></li>
        <li><a href="/settings" style={styles.link}>Settings</a></li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: { width: '200px', background: '#f4f4f4', padding: '15px', height: '100vh' },
  list: { listStyle: 'none', padding: 0 },
  link: { textDecoration: 'none', color: '#333', display: 'block', padding: '10px 0' }
};

export default Sidebar;

