// reportReducer.js

const initialState = {
  reports: [],
  loading: false,
  error: null,
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REPORTS_SUCCESS':
      return {
        ...state,
        reports: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_REPORTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'GENERATE_REPORT_SUCCESS':
      return {
        ...state,
        reports: [...state.reports, action.payload],
        error: null,
      };
    case 'GENERATE_REPORT_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;

