import './ExpenseItems.css'

function ExpenseItem() {

    const expenseDate = new Date(2022, 9, 29);
    const expenseTitle = 'Car insurance'; 
    const expenseAmount = 294.67;


    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;