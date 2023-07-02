import { createStore } from 'redux';

const initialState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings"
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts"
    },
    {
      id: 3,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts"
    },
    {
      id: 4,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts"
    }
  ]
};

const reducer = (state = initialState, action) => {
  // You can add logic here to handle different actions if needed
  return state;
};

const store = createStore(reducer);

export default store;
