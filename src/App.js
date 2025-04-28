import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Papa from 'papaparse'; 

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalBudget, setTotalBudget] = useState(2000);
  const [darkMode, setDarkMode] = useState(false);

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const editExpense = (index, updatedExpense) => {
    const updatedExpenses = expenses.map((expense, i) =>
      i === index ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const resetExpenses = () => {
    setExpenses([]);
  };

  const handleBudgetUpdate = (updatedBudget) => {
    setTotalBudget(updatedBudget);
  };

  const exportExpensesToCSV = () => {
    const csvData = Papa.unparse(expenses);

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'expenses.csv';
    link.click();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div
        style={{
          backgroundColor: darkMode ? '#2c2c2c' : '#f9f9f9',
          color: darkMode ? '#eaeaea' : '#000',
          minHeight: '100vh',
        }}
      >
        <Header />
        <button
          onClick={toggleDarkMode}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: darkMode ? '#fff' : '#333',
            color: darkMode ? '#333' : '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                totalBudget={totalBudget}
                totalExpenses={totalExpenses}
                addExpense={addExpense}
                handleBudgetUpdate={handleBudgetUpdate}
                expenses={expenses}
                resetExpenses={resetExpenses}
                exportExpensesToCSV={exportExpensesToCSV}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/expenses"
            element={
              <Expenses
                expenses={expenses}
                editExpense={editExpense}
                deleteExpense={deleteExpense}
                darkMode={darkMode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
