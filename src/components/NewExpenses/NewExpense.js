import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  //this function gets user input as object from the ExpenseForm => passes it to parent
  //component (App.js) via property
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //taking passed object and creating new object with ID using rest operator
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  //toggling form
  const [showFormState, setShowFormState] = useState(false);
  const toggleForm = () => {
    setShowFormState((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!showFormState && <button onClick={toggleForm}>Add Expense</button> }
      {showFormState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm ={toggleForm}/>}
    </div>
  );
};

export default NewExpense;
