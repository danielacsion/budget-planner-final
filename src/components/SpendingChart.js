import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const SpendingChart = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const found = acc.find((item) => item.category === expense.category);
    if (found) {
      found.value += expense.amount;
    } else {
      acc.push({ category: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default SpendingChart;
