import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Chapati", amount: -20 },
    { id: 3, text: "Rice", amount: -200 },
    { id: 4, text: "Salary", amount: 10000 },
    { id: 5, text: "Camera", amount: 789 },
  ],
};
// Create Context

export const AppContext = createContext(initialState);

//Provider Components

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const myTransactions = state.transactions;

  return (
    <AppContext.Provider value={{ myTransactions }}>
      {children}
    </AppContext.Provider>
  );
};
