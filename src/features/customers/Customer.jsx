import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;

// In order to read data from the Redux store, all we have to use is the useSelector hook that is provided by React-redux

// Now this useSelector hook takes a callback function and this function takes as the single arguement, the entire redux store.
// So we usually call that store, we can simply get the data that we want 

// Now this .customer is exactly the name that we provided in the store.jsx file. Then we need to store that into any variable

// Now we want to get the customer's name here from the store and we should really do as much data manipulation, so to say here in this selector function

// Inside this arrow function, we could do all other kinds of computation

// This useSelector basically creates a subscription to the store
// Just like we are used to, whenever the store changes, then this component that is subscribed to that store, will re-render
