// Settings.js

import React from 'react';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Configure your application preferences here.</p>
      <form>
        <div>
          <label htmlFor="theme">Theme: </label>
          <select id="theme" name="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label htmlFor="language">Language: </label>
          <select id="language" name="language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;

