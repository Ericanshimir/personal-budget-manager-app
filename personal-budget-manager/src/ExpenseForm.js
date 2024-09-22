import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ dispatch, editingExpense, setEditingExpense }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !date || !category) {
      alert('Please fill all fields.');
      return;
    }

    const expense = { amount: parseFloat(amount), date, category };

    if (editingExpense) {
      dispatch({
        type: 'EDIT_EXPENSE',
        payload: { index: editingExpense.index, newExpense: expense },
      });
      setEditingExpense(null);
    } else {
      dispatch({ type: 'ADD_EXPENSE', payload: expense });
    }

    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <div>
      <h2>{editingExpense ? 'Edit Expense' : 'Add Expense'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />

        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="others">Others</option>
        </select>

        <button type="submit" className="green-btn">
          {editingExpense ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
