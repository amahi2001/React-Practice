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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeYear={onChangeYearHandler}
      />
      {/* displaying components dynamically using map */}
      {props.items.filter(i => i.date.getFullYear().toString().includes(filteredYear)).map((i) => (
        <ExpenseItem key = {i.id} title={i.title} amount={i.amount} date={i.date} />
      ))}
    </Card>
  );
};

export default Expenses;
