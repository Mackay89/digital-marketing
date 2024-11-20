// Dashboard.js

import React from 'react';
import RealTimeDashboard from '../components/RealTimeDashboard';
import ReportChart from '../components/ReportChart';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <RealTimeDashboard />
      <ReportChart />
    </div>
  );
};

export default Dashboard;

