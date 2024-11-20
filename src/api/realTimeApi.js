// realTimeApi.js

export const fetchRealTimeData = async () => {
  try {
    // Simulate real-time data
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ timestamp: Date.now(), value: Math.random().toFixed(2) }), 1000)
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch real-time data");
  }
};

export const subscribeToRealTimeUpdates = (callback) => {
  const intervalId = setInterval(async () => {
    const data = await fetchRealTimeData();
    callback(data);
  }, 1000);

  return () => clearInterval(intervalId); // Unsubscribe function
};

