import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYearState] = useState("2022");
  const onChangeYearHandler = (year) => {
    setFilteredYearState(year);
  };
  
  //filtering expenses by year
  let filtered_expenses = props.items.filter(i => i.date.getFullYear().toString().includes(filteredYear));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeYear={onChangeYearHandler}
      />
      <ExpenseList items = {filtered_expenses}/>
    </Card>
  );
};

export default Expenses;
