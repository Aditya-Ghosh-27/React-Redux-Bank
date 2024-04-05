import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    fullName: "",
    nationalID: "",
    createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID){
        return {
          payload: {
            fullName, nationalID,
            createdAt: new Date().toISOString()
          }
        }
      },
      reducer(state, action){
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.fullName;
      state.createdAt = action.payload.nationalID;
    }},
    updateCustomer(state, action){
      state.fullName = action.payload;
    }
  }
})
export const { createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;
// export default function customerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//       case "customer/createCustomer":
//         return {
//           ...state,
//           fullName: action.payload.fullName,
//           nationalID: action.payload.fullName,
//           createdAt: action.payload.nationalId,
//         };
//       case "customer/updateCustomer":
//         return { ...state, fullName: action.payload };
//       default:
//         return state;
//     }
// }

// export function createCustomer(fullName, nationalID) {
//     return {
//       type: "customer/createCustomer",
//       payload: {
//         fullName,
//         nationalID,
//         // We could also update the createdAt inside the reducer function(computing the current state) but that would actually be a side effect. And we shouldn't have side effects inside the reducer function
//         createdAt: new Date().toISOString(),
//       },
//     };
// }
  
// export function updateName(fullName) {
//     return {
//       type: "customer/updateName",
//       payload: fullName,
//     };
// }  