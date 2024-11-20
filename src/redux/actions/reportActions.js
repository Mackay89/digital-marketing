// reportActions.js

export const fetchReports = () => async (dispatch) => {
  try {
    const response = await fetch('/api/reports'); // Replace with your API endpoint
    const data = await response.json();
    dispatch({
      type: 'FETCH_REPORTS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_REPORTS_ERROR',
      payload: error.message,
    });
  }
};

export const generateReport = (reportData) => async (dispatch) => {
  try {
    const response = await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData),
    });
    const data = await response.json();
    dispatch({
      type: 'GENERATE_REPORT_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GENERATE_REPORT_ERROR',
      payload: error.message,
    });
  }
};

