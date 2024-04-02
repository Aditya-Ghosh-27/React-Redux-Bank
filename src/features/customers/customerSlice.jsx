const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
      case "customer/createCustomer":
        return {
          ...state,
          fullName: action.payload.fullName,
          nationalID: action.payload.fullName,
          createdAt: action.payload.nationalId,
        };
      case "customer/updateCustomer":
        return { ...state, fullName: action.payload };
      default:
        return state;
    }
}

export function createCustomer(fullName, nationalID) {
    return {
      type: "customer/createCustomer",
      payload: {
        fullName,
        nationalID,
        // We could also update the createdAt inside the reducer function(computing the current state) but that would actually be a side effect. And we shouldn't have side effects inside the reducer function
        createdAt: new Date().toISOString(),
      },
    };
}
  
export function updateName(fullName) {
    return {
      type: "customer/updateName",
      payload: fullName,
    };
}  