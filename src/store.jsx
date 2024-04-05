// We will be organizing our application now into features
// We will also organize our components into these same feature folders
import { configureStore } from "@reduxjs/toolkit"
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer : {
    account: accountReducer,
    customer: customerReducer
  }
})


export default store