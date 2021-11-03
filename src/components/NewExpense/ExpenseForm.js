import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitFormHandler = (event) => {
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate) //parses entered date to a date object
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <div>
            <form onSubmit={submitFormHandler}>
                <div className="new-Expense__controls">
                    <div className="new-Expense__control">
                        <label>Menoerän tyyppi</label>
                        <input
                            type='text'
                            value={enteredTitle}
                            onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-Expense__control">
                        <label>Menoerä</label>
                        <input
                            type='number'
                            value={enteredAmount}
                            min="0.1"
                            step="0.01"
                            onChange={priceChangeHandler}/>
                    </div>
                    <div className="new-Expense__control">
                        <label>Päiväys</label>
                        <input
                            type='date'
                            value={enteredDate}
                            min="2018-07-01"
                            max="2022-12-31"
                            onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-Expense__actions">
                    <button type="button" onClick={props.isCanceling}>Peruuta</button>
                    <button type="submit">Lisää meno</button>
                </div>
            </form>
        </div>
    )
};

export default ExpenseForm;