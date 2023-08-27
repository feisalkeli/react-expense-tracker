import React, { useContext } from "react";
import { AppContext } from "../context/GlobalState";
const Balance = () => {
  const { myTransactions } = useContext(AppContext);

  //Get total amount

  const totalAmount = myTransactions.map((transactions) => transactions.amount);
  console.log(totalAmount);

  const balance = totalAmount.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
