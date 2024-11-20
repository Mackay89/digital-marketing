// ReportChart.js

import React from 'react';

const ReportChart = ({ reports }) => {
  return (
    <div>
      <h2>Report Chart</h2>
      {reports && reports.length > 0 ? (
        <p>Chart data will be displayed here.</p>
      ) : (
        <p>No report data available.</p>
      )}
    </div>
  );
};

export default ReportChart;

