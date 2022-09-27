import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "yeee Insurance",
      amount: 297,
      date: new Date(2022, 9, 29),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      {/* <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem> */}
    </div>
  );
}

export default App;
