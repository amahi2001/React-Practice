import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {

  //form
  const submitHandler = (event) => {
    event.preventDefault(); //this makes sure the page doesn't refresh on submit

    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate)
    }
    console.log(expenseData)
  };  
  //title
  const [EnteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [EnteredAmount, setEnteredAmount] = useState("");

  //amount
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [EnteredDate, setEnteredDate] = useState("");

  //date
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={AmountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={DateChangeHandler}
            type="date"
            min="2020-01-01"
            max="2025-12-31"
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
