import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const  App = () => {
  const expenses = [
    {
      title: "some Insurance",
      amount: 297,
      date: new Date(2022, 9, 29),
    },
    {
      title: "Abrar's element",
      amount: 400,
      date: new Date(2001, 11, 22),
    },
  ];

  const onAddExpenseHandler = (expense) => {
    console.log(expense);
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
