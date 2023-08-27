import React, { useContext } from "react";
import { AppContext } from "../context/GlobalState";

const Transactions = ({ transactions }) => {
  //delete transaction context
  const { deleteTransaction } = useContext(AppContext);
  const sign = transactions.amount < 0 ? "-" : "+";

  ///Changes the border color to green or red
  const changeColorBorder = transactions.amount < 0 ? "minus" : "plus";
  return (
    <>
      <li className={changeColorBorder} key={transactions.id}>
        {transactions.text}{" "}
        <span>
          {/* Math Abs makes the Values positive */}
          {sign}${Math.abs(transactions.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transactions.id)}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transactions;
