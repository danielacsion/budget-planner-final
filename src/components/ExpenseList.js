import React, { useState } from 'react';

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense, darkMode }) => {
  const [editedExpense, setEditedExpense] = useState(null);
  const [sortOrder, setSortOrder] = useState('amount-asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortOrder === 'amount-asc') return a.amount - b.amount;
    if (sortOrder === 'amount-desc') return b.amount - a.amount;
    if (sortOrder === 'date-asc') return new Date(a.date) - new Date(b.date);
    return new Date(b.date) - new Date(a.date);
  });

  const handleEditChange = (key, value) => {
    if (editedExpense) {
      setEditedExpense({ ...editedExpense, [key]: value });
    }
  };

  const saveEdit = (index) => {
    if (editedExpense) {
      onEditExpense(index, {
        amount: Number(editedExpense.amount),
        category: editedExpense.category,
        date: editedExpense.date,
      });
      setEditedExpense(null); 
    }
  };

  return (
    <div>
      <h3 style={{ color: darkMode ? '#eaeaea' : '#000' }}>Expenses</h3>
      <div style={{ marginBottom: '1rem' }}>
        {}
        <input
          type="text"
          placeholder="Search by category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
            borderRadius: '5px',
            backgroundColor: darkMode ? '#555' : '#fff',
            color: darkMode ? '#eaeaea' : '#000',
            width: '100%',
            marginBottom: '1rem',
          }}
        />

        {}
        <label style={{ marginRight: '1rem', color: darkMode ? '#eaeaea' : '#000' }}>
          Sort By:
        </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{
            padding: '0.5rem',
            border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
            borderRadius: '5px',
            backgroundColor: darkMode ? '#555' : '#fff',
            color: darkMode ? '#eaeaea' : '#000',
          }}
        >
          <option value="amount-asc">Amount (Asc)</option>
          <option value="amount-desc">Amount (Desc)</option>
          <option value="date-asc">Date (Asc)</option>
          <option value="date-desc">Date (Desc)</option>
        </select>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sortedExpenses.map((expense, index) => (
          <li
            key={index}
            style={{
              border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
              borderRadius: '5px',
              padding: '1rem',
              margin: '0.5rem 0',
              backgroundColor: darkMode ? '#3a3a3a' : '#fdfdfd',
              color: darkMode ? '#eaeaea' : '#000',
            }}
          >
            {editedExpense && editedExpense.index === index ? (
              <>
                <input
                  type="number"
                  value={editedExpense.amount || ''}
                  onChange={(e) => handleEditChange('amount', e.target.value)}
                  style={{
                    padding: '0.5rem',
                    border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
                    borderRadius: '5px',
                    backgroundColor: darkMode ? '#555' : '#fff',
                    color: darkMode ? '#eaeaea' : '#000',
                  }}
                  placeholder="Amount"
                />
                <input
                  type="text"
                  value={editedExpense.category || ''}
                  onChange={(e) => handleEditChange('category', e.target.value)}
                  style={{
                    padding: '0.5rem',
                    border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
                    borderRadius: '5px',
                    backgroundColor: darkMode ? '#555' : '#fff',
                    color: darkMode ? '#eaeaea' : '#000',
                  }}
                  placeholder="Category"
                />
                <input
                  type="date"
                  value={editedExpense.date || ''}
                  onChange={(e) => handleEditChange('date', e.target.value)}
                  style={{
                    padding: '0.5rem',
                    border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
                    borderRadius: '5px',
                    backgroundColor: darkMode ? '#555' : '#fff',
                    color: darkMode ? '#eaeaea' : '#000',
                  }}
                />
                <button
                  onClick={() => saveEdit(index)}
                  style={{
                    backgroundColor: darkMode ? '#007BFF' : '#28a745',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setEditedExpense(null)} 
                  style={{
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    marginLeft: '0.5rem',
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>${expense.amount} | {expense.category} | {expense.date}</span>
                <div>
                  <button
                    onClick={() => setEditedExpense({ ...expense, index })}
                    style={{
                      marginRight: '1rem',
                      backgroundColor: darkMode ? '#007BFF' : '#28a745',
                      color: '#fff',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteExpense(index)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
