// Reports.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../redux/actions/reportActions';
import ReportChart from '../components/ReportChart';

const Reports = () => {
  const dispatch = useDispatch();
  const { reports, loading, error } = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  return (
    <div>
      <h1>Reports</h1>
      {loading && <p>Loading reports...</p>}
      {error && <p>Error: {error}</p>}
      <ReportChart reports={reports} />
    </div>
  );
};

export default Reports;

