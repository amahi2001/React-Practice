import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    //this function gets user input as object from the ExpenseForm => passes it to parent
    //component (App.js) via property
    const saveExpenseDataHandler = (enteredExpenseData) => {
        //taking passed object and creating new object with ID using rest operator
        const expenseData = {
            ...enteredExpenseData,
        id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);   
    }

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
