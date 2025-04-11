import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExpense({amount: Number(amount), category, date });
        setAmount('')
        setCategory('');
        setDate('');
    }
}