import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import React, { useState } from "react";

//props are k, v pairs
const ExpenseItem = (props) => {
  //this is a hook, can only be called inside of component functions
  //title will first be "props.title" but will be changed to "updated" when setTitle is called
  // const [title, setTitle] = useState(props.title);

  // const onButtonClick = () => {
  //   setTitle('updated');
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={onButtonClick}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
