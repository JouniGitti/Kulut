import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const KuluListaa = [
  {
    id: 'a1',
    title: 'Kirjat',
    amount: 45,
    date: new Date(2021, 4, 15),
  },
  {
    id: 'a2',
    title: 'Moottoripyörävaatteet',
    amount: 70,
    date: new Date(2020, 5, 16),
  },
  {
    id: 'a3',
    title: 'Ruuat',
    amount: 35,
    date: new Date(2020, 6, 17),
  },
  {
    id: 'a4',
    title: 'Moottoripyörän tarvikkeet',
    amount: 100,
    date: new Date(2019, 7, 18),
  },
  {
    id: 'a5',
    title: 'Moottoripyörän tarvikkeet',
    amount: 17,
    date: new Date(2019, 8, 18),
  },
  {
    id: 'a6',
    title: 'Moottoripyörän tarvikkeet',
    amount: 90,
    date: new Date(2019, 9, 18),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(KuluListaa);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
