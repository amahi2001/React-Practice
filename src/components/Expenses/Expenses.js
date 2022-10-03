import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYearState] = useState("2022");
  const onChangeYearHandler = (year) => {
    setFilteredYearState(year);
  };
  
  //filtering expenses by year
  let filtered_expenses = props.items.filter(i => i.date.getFullYear().toString().includes(filteredYear));

  //if the filtered expense is empty => show no content else show content
  let exensesContent = <p>No Content available</p>;

  if (filtered_expenses.length > 0){
    exensesContent = filtered_expenses.map((i) => (
      <ExpenseItem key = {i.id} title={i.title} amount={i.amount} date={i.date} />
    ))
  }


  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeYear={onChangeYearHandler}
      />
      {exensesContent}
    </Card>
  );
};

export default Expenses;
