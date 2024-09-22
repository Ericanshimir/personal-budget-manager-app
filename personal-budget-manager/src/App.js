import React, { useReducer, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import BudgetAlerts from './BudgetAlerts';
import './App.css';

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'DELETE_EXPENSE':
      return state.filter((_, index) => index !== action.payload);
    case 'EDIT_EXPENSE':
      const updatedExpenses = [...state];
      updatedExpenses[action.payload.index] = action.payload.newExpense;
      return updatedExpenses;
    default:
      return state;
  }
};

const App = () => {
  const [expenses, dispatch] = useReducer(expenseReducer, []);
  const [editingExpense, setEditingExpense] = useState(null);
  const [budgetLimits] = useState({
    food: 200,
    entertainment: 150,
    others: 300,
  });

  return (
    <div className="container">
      <h1>Personal Budget Manager</h1>
      <div className="section">
        <ExpenseForm 
          dispatch={dispatch} 
          editingExpense={editingExpense} 
          setEditingExpense={setEditingExpense}
        />
      </div>
      <div className="section">
        <ExpenseList 
          expenses={expenses} 
          dispatch={dispatch} 
          setEditingExpense={setEditingExpense} 
        />
      </div>
      <div className="section">
        <ExpenseSummary expenses={expenses} />
      </div>
      <div className="section">
        <BudgetAlerts expenses={expenses} budgetLimits={budgetLimits} />
      </div>
    </div>
  );
};

export default App;
