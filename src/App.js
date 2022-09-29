import Expenses from "./components/Expenses/Expenses";
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses
        items = {expenses}
      />
    </div>
  );
}

export default App;
