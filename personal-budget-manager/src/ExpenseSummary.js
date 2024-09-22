// ExpenseSummary.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseSummary = ({ expenses }) => {
  const categoryTotals = expenses.reduce(
    (totals, expense) => {
      totals[expense.category] += expense.amount;
      return totals;
    },
    { food: 0, entertainment: 0, others: 0 }
  );

  const data = {
    labels: ['Food', 'Entertainment', 'Others'],
    datasets: [
      {
        data: [categoryTotals.food, categoryTotals.entertainment, categoryTotals.others],
        backgroundColor: ['#333', '#888', '#ccc'],
      },
    ],
  };

  return (
    <div>
      <h2>Expense Summary</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseSummary;
