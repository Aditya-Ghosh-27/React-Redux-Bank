import { applyMiddleware, combineReducers, createStore } from "redux";
// We will be organizing our application now into features
// We will also organize our components into these same feature folders
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
});

// createStore will return a store (this is a depricated function)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store

// Now we will implement the feature where the user can deposit money in a foreign currency which will then be converted using an external API.

// Now suppose let's say that the user deposits amount in their account in euros, then it needs to be converted to US dollars before dispatching the deposit action.

// So now the question arises is how do we convert that ?
// -> Using redux thunks. We will have this middleware sitting wsomewhere between dispatching the action and that action reaching the store