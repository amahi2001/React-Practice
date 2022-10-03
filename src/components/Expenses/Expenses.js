import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [yearInputState, setYearInputState] = useState("2022");
  const onChangeYearHandler = (year) => {
    setYearInputState(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={yearInputState}
        onChangeYear={onChangeYearHandler}
      />
      {/* displaying components dynamically using map */}
      {props.items.map((i) => (
        <ExpenseItem title={i.title} amount={i.amount} date={i.date} />
      ))}
    </Card>
  );
};

export default Expenses;
