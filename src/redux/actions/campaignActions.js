// campaignActions.js

export const fetchCampaigns = () => async (dispatch) => {
  try {
    const response = await fetch('/api/campaigns'); // Replace with your API endpoint
    const data = await response.json();
    dispatch({
      type: 'FETCH_CAMPAIGNS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_CAMPAIGNS_ERROR',
      payload: error.message,
    });
  }
};

export const createCampaign = (campaignData) => async (dispatch) => {
  try {
    const response = await fetch('/api/campaigns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaignData),
    });
    const data = await response.json();
    dispatch({
      type: 'CREATE_CAMPAIGN_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'CREATE_CAMPAIGN_ERROR',
      payload: error.message,
    });
  }
};

export const deleteCampaign = (id) => async (dispatch) => {
  try {
    await fetch(`/api/campaigns/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: 'DELETE_CAMPAIGN_SUCCESS',
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: 'DELETE_CAMPAIGN_ERROR',
      payload: error.message,
    });
  }
};

