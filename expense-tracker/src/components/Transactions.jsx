import React from "react";

const Transactions = ({ transactions }) => {
  const sign = transactions.amount < 0 ? "-" : "+";
  console.log(transactions, "feisal");
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
        <button className="delete-btn">x</button>
      </li>
    </>
  );
};

export default Transactions;
