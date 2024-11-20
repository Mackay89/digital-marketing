// CampaignList.js

import React from 'react';

const CampaignList = ({ campaigns }) => {
  return (
    <div>
      <h2>Campaigns</h2>
      {campaigns.length === 0 ? (
        <p>No campaigns available</p>
      ) : (
        <ul>
          {campaigns.map((campaign) => (
            <li key={campaign.id}>{campaign.name} - {campaign.status}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampaignList;

