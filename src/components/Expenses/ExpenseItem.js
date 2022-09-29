import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const onButtonClick = () => {
  console.log('Clicked!')
}

//props are k, v pairs
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onButtonClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
