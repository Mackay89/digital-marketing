// campaignReducer.js

const initialState = {
  campaigns: [],
  loading: false,
  error: null,
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CAMPAIGNS_SUCCESS':
      return {
        ...state,
        campaigns: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_CAMPAIGNS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'CREATE_CAMPAIGN_SUCCESS':
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload],
        error: null,
      };
    case 'CREATE_CAMPAIGN_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'DELETE_CAMPAIGN_SUCCESS':
      return {
        ...state,
        campaigns: state.campaigns.filter((campaign) => campaign.id !== action.payload),
      };
    case 'DELETE_CAMPAIGN_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default campaignReducer;

