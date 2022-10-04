import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
  //if the filtered expense is empty => show no content else show content 

  if (props.items.length <= 0) {
    return <h2 className="expenses-list__fallback">Didn't Find any Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((i) => (
        <ExpenseItem
          key={i.id}
          title={i.title}
          amount={i.amount}
          date={i.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
