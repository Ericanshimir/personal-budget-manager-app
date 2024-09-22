// BudgetAlerts.js
import React from 'react';

const BudgetAlerts = ({ expenses, budgetLimits }) => {
  const categoryTotals = expenses.reduce(
    (totals, expense) => {
      totals[expense.category] += expense.amount;
      return totals;
    },
    { food: 0, entertainment: 0, others: 0 }
  );

  return (
    <div>
      <h2>Budget Alerts</h2>
      {Object.keys(budgetLimits).map((category) => (
        <p key={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}: Budget limit ${budgetLimits[category]}, Spent: ${categoryTotals[category].toFixed(2)}{' '}
          {categoryTotals[category] > budgetLimits[category] && <span style={{ color: 'red' }}>Exceeded!</span>}
        </p>
      ))}
    </div>
  );
};

export default BudgetAlerts;
