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


};

export default App;
