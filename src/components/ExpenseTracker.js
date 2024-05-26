import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpensesList from './ExpensesList';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="content">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpensesList expenses={expenses} />
      </div>
      <div className="total">
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default ExpenseTracker;
