// Campaign.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaigns } from '../redux/actions/campaignActions';
import CampaignList from '../components/CampaignList';

const Campaign = () => {
  const dispatch = useDispatch();
  const { campaigns, loading, error } = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  return (
    <div>
      <h1>Campaigns</h1>
      {loading && <p>Loading campaigns...</p>}
      {error && <p>Error: {error}</p>}
      <CampaignList campaigns={campaigns} />
    </div>
  );
};

export default Campaign;

