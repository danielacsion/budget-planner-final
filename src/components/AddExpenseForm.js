import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense, darkMode }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date) {
      onAddExpense({ amount: Number(amount), category, date });
      setAmount('');
      setCategory('');
      setDate('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: darkMode ? '#3a3a3a' : '#f9f9f9',
        border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
        borderRadius: '8px',
      }}
    >
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount ($)"
        style={{
          padding: '0.5rem',
          border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
          borderRadius: '5px',
          backgroundColor: darkMode ? '#555' : '#fff',
          color: darkMode ? '#eaeaea' : '#000',
        }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: '0.5rem',
          border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
          borderRadius: '5px',
          backgroundColor: darkMode ? '#555' : '#fff',
          color: darkMode ? '#eaeaea' : '#000',
        }}
      >
        <option value="">Select Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: '0.5rem',
          border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
          borderRadius: '5px',
          backgroundColor: darkMode ? '#555' : '#fff',
          color: darkMode ? '#eaeaea' : '#000',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: darkMode ? '#007BFF' : '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
