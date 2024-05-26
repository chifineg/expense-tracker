import React from 'react';

function ExpensesList({ expenses }) {
  // Function to group expenses by category
  const groupExpensesByCategory = () => {
    const groupedExpenses = {};
    expenses.forEach((expense) => {
      if (!groupedExpenses[expense.category]) {
        groupedExpenses[expense.category] = [];
      }
      groupedExpenses[expense.category].push(expense);
    });
    return groupedExpenses;
  };

  const groupedExpenses = groupExpensesByCategory();

  return (
    <div className="expenses-container">
      {Object.keys(groupedExpenses).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {groupedExpenses[category].map((expense, index) => (
            <div key={index} className="expense-item">
              <div><strong>{expense.name}</strong></div>
              <div>${expense.amount}</div>
              <div>{expense.date}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ExpensesList;
