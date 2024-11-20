// campaignApi.js

export const fetchCampaigns = async () => {
  try {
    // Simulate fetching campaigns
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve([
        { id: 1, name: "Campaign 1", status: "active" },
        { id: 2, name: "Campaign 2", status: "paused" }
      ]), 500)
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch campaigns");
  }
};

export const createCampaign = async (campaign) => {
  try {
    // Simulate campaign creation
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ id: Math.random(), ...campaign }), 500)
    );
    return response;
  } catch (error) {
    throw new Error("Failed to create campaign");
  }
};

