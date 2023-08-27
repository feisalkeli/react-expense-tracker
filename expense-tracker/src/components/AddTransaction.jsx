import React, { useState, useContext } from "react";
import { AppContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(AppContext);
  console.log(addTransaction);
  // Prevent form from reloading
  const handleSubmit = function (e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  //Add Transaction

  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
