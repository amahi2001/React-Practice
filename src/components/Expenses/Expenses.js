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
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
    </Card>
  );
};

export default Expenses;
