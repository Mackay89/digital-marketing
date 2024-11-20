// Header.js

import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Dashboard</h1>
      <nav>
        <a href="/dashboard" style={styles.link}>Dashboard</a>
        <a href="/campaigns" style={styles.link}>Campaigns</a>
        <a href="/reports" style={styles.link}>Reports</a>
        <a href="/settings" style={styles.link}>Settings</a>
      </nav>
    </header>
  );
};

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: '#fff' },
  logo: { margin: 0 },
  link: { margin: '0 10px', color: '#fff', textDecoration: 'none' }
};

export default Header;

