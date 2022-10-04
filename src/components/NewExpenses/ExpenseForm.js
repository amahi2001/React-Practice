import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {

  //form submit function
  const submitHandler = (event) => {
    event.preventDefault(); //this makes sure the page doesn't refresh on submit

    //saving the input vales as an object (using useState)
    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate.replace(/-/g, '/'))
    }
    //passing the object to parent component via property
    props.onSaveExpenseData(expenseData);
    //clearing the form
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
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
          <input onChange={titleChangeHandler} type="text" value = {EnteredTitle}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={AmountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value = {EnteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={DateChangeHandler}
            type="date"
            min="2020-01-01"
            max="2025-12-31"
            value = {EnteredDate}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
