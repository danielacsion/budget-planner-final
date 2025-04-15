import React, { useState } from 'react';

const BudgetSummary = ({ totalBudget, totalExpenses, onBudgetUpdate, darkMode }) => {
  const [newBudget, setNewBudget] = useState(totalBudget);
  const remainingBudget = totalBudget - totalExpenses;

  return (
    <div style={{
      border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
      padding: '1rem',
      borderRadius: '8px',
      margin: '1rem 0',
      backgroundColor: darkMode ? '#3a3a3a' : '#f5f9ff',
      color: darkMode ? '#eaeaea' : '#000',
    }}>
      <h3>Budget Summary</h3>
      <p>Total Budget: ${totalBudget}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p style={{ color: remainingBudget > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
        Remaining Budget: ${remainingBudget}
      </p>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="number"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
          style={{
            padding: '0.5rem',
            border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
            borderRadius: '5px',
            marginRight: '0.5rem',
            backgroundColor: darkMode ? '#555' : '#fff',
            color: darkMode ? '#eaeaea' : '#000',
          }}
        />
        <button
          onClick={() => onBudgetUpdate(Number(newBudget))}
          style={{
            backgroundColor: darkMode ? '#28a745' : '#007BFF',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Update Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetSummary;
