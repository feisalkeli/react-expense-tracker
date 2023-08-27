import React, { useContext } from "react";
import { AppContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { myTransactions } = useContext(AppContext);
  ///Changes text color to either expense or Income
  // const changeTextColor =
  //   myTransactions.amount < 0 ? "money-minus" : "money-plus";

  const amounts = myTransactions.map((transaction) => transaction.amount);

  //Income
  const income = amounts.filter((amount) => amount > 0);
  const netIncome = income.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  //Expense

  const expense = amounts.filter((amount) => amount < 0);
  const netExpense = expense.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money-plus">+${netIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money-minus">${netExpense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
