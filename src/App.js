import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const  App = () => {
  const initial_expenses = [
    {
      title: "some Insurance",
      amount: 297,
      date: new Date(2022, 9, 29),
      id: Math.random().toString()
    },
    {
      title: "Abrar's element",
      amount: 400,
      date: new Date(2001, 11, 22),
      id: Math.random().toString()
    },
  ];

  const [expenses, setExpenses] = useState(initial_expenses);
  const onAddExpenseHandler = (expense) => {
    //updating state when it's depending on a previous version of the state
    setExpenses(
      (prevExpenses) => {
        return [expense, ...prevExpenses];
      }
    );
  }

  return (
    <div>
      <NewExpense onAddExpense = {onAddExpenseHandler}/>
      <Expenses
        items = {expenses}
      />
    </div>
  );
}

export default App;
