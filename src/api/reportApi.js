// reportApi.js

export const fetchReports = async () => {
  try {
    // Simulate fetching reports
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve([
        { id: 1, title: "Weekly Report", data: [10, 20, 30] },
        { id: 2, title: "Monthly Report", data: [15, 25, 35] }
      ]), 500)
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch reports");
  }
};

export const generateReport = async (parameters) => {
  try {
    // Simulate generating a report
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ id: Math.random(), ...parameters, data: [5, 10, 15] }), 500)
    );
    return response;
  } catch (error) {
    throw new Error("Failed to generate report");
  }
};

