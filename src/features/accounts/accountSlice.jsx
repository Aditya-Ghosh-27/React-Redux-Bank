const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
      case "account/withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "account/requestLoan":
        if (state.loan > 0) return state;
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
      case "account/payLoan":
        return {
          ...state,
          loan: 0,
          balance: state.balance - state.loan,
          loanPurpose: "",
        };
      default:
        return state;
    }
}
  
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
    return {
      type: "account/requestLoan",
      payload: {
        amount,
        purpose,
      },
    };
}
export function payLoan() {
    return { type: "account/payLoan" };
}

// So slice is basically a piece, just a part of total state
// The entire state lives in the store
// And here we basically take one slice of that state