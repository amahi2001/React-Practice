import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
//props are k, v pairs
function ExpenseItem(props){
  return (
    <div className="expense-item">
      <ExpenseDate
        date = {props.date}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
