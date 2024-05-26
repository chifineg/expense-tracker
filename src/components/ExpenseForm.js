import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { name, amount, date, category };
    onAddExpense(newExpense);
    setName('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="expense-name">Expense Name</label>
        <input type="text" id="expense-name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="expense-amount">Amount</label>
        <input type="number" id="expense-amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="expense-date">Date</label>
        <input type="date" id="expense-date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="expense-category">Category</label>
        <select id="expense-category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Select Category</option>
          <option value="Family">Family</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
