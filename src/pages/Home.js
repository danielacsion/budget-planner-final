import React from 'react';
import BudgetSummary from '../components/BudgetSummary';
import AddExpenseForm from '../components/AddExpenseForm';
import SpendingChart from '../components/SpendingChart';

const Home = ({ totalBudget, totalExpenses, addExpense, handleBudgetUpdate, expenses, resetExpenses, exportExpensesToCSV, darkMode }) => {
  return (
    <div style={{ padding: '2rem', backgroundColor: darkMode ? '#2c2c2c' : '#f9f9f9' }}>
      <BudgetSummary
        totalBudget={totalBudget}
        totalExpenses={totalExpenses}
        onBudgetUpdate={handleBudgetUpdate}
        darkMode={darkMode}
      />
      <AddExpenseForm onAddExpense={addExpense} darkMode={darkMode} />
      <SpendingChart expenses={expenses} darkMode={darkMode} />
      <button
        onClick={resetExpenses}
        style={{
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '1rem',
        }}
      >
        Reset Expenses
      </button>
      <button
        onClick={exportExpensesToCSV}
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '1rem',
        }}
      >
        Export to CSV
      </button>
    </div>
  );
};

export default Home;
