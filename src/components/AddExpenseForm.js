import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExpense({amount: Number(amount), category, date });
        setAmount('');
        setCategory('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
          <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Rent">Rent</option>
          </select>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <button type="submit">Add Expense</button>
        </form>
      );
    };
export default AddExpenseForm;