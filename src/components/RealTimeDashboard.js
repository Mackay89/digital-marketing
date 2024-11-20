// RealTimeDashboard.js

import React, { useState, useEffect } from 'react';

const RealTimeDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => [...prevData, Math.random().toFixed(2)]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Real-Time Dashboard</h2>
      <ul>
        {data.map((value, index) => (
          <li key={index}>Data Point: {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeDashboard;

