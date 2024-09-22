import React from 'react';

const ExpenseList = ({ expenses, dispatch, setEditingExpense }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length > 0 ? (
        <ul className="expense-list">
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div className="expense-details">
                <strong>Date:</strong> {expense.date} | 
                <strong> Category:</strong> {expense.category} | 
                <strong> Amount:</strong> ${expense.amount.toFixed(2)}
              </div>
              <div className="expense-actions">
                <button
                  className="blue-btn"
                  onClick={() => setEditingExpense({ ...expense, index })}
                >
                  Edit
                </button>
                <button 
                  className="red-btn" 
                  onClick={() => dispatch({ type: 'DELETE_EXPENSE', payload: index })}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses added yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
