import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isModifying, setIsModifying] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.addExpense(expenseData);
        setIsModifying(false);
    };

    const startEditingHandler = () => {
        setIsModifying(true);
    };

    const cancelEditingHandler = () => {
        setIsModifying(false);
    };

    return (
        <div className='new-Expense'>
            {!isModifying &&
                <button onClick={startEditingHandler}>Lisää uusi kulu</button>}
            {isModifying && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    isCanceling={cancelEditingHandler}/>
            )}
        </div>
    );
};

export default NewExpense;