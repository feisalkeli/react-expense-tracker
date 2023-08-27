import React, { useContext } from "react";
import { AppContext } from "../context/GlobalState";
import Transactions from "./Transactions";
const TransactionList = () => {
  const { myTransactions } = useContext(AppContext);
  console.log(myTransactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {myTransactions.map((transactions) => (
          <Transactions transactions={transactions} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
