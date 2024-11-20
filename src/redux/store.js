import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // Middleware for async actions
import { composeWithDevTools } from "@redux-devtools/extension";

import authReducer from "./reducers/authReducer";
import campaignReducer from "./reducers/campaignReducer";
import reportReducer from "./reducers/reportReducer";

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    campaign: campaignReducer,
    report: reportReducer,
});

// Create the Redux store with middleware and DevTools
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

