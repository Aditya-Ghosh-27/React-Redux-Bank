import { combineReducers, createStore } from "redux";
// We will be organizing our application now into features
// We will also organize our components into these same feature folders
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
});

// createStore will return a store (this is a depricated function)
const store = createStore(rootReducer);

export default store