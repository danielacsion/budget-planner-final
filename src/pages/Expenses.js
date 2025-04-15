import React from 'react';
import ExpenseList from '../components/ExpenseList';

const Expenses = ({ expenses, editExpense, deleteExpense, darkMode }) => {
  return (
    <div style={{ padding: '2rem', backgroundColor: darkMode ? '#2c2c2c' : '#f9f9f9' }}>
      <ExpenseList
        expenses={expenses}
        onEditExpense={editExpense}
        onDeleteExpense={deleteExpense}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Expenses;
