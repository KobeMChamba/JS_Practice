import React from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

const StackedBarChart = () => {
  const data = [
    {
      "category": "Transportation",
      "expense": 50,
      "budget": 100
    },
    {
      "category": "Entertainment",
      "expense": 70,
      "budget": 100
    },
    {
      "category": "Shopping",
      "expense": 100,
      "budget": 200
    },
    {
      "category": "Food",
      "expense": 250,
      "budget": 300
    },
    {
      "category": "Health",
      "expense": 90,
      "budget": 100
    },
    {
      "category": "Home",
      "expense": 350,
      "budget": 400
    },
    {
      "category": "Education",
      "expense": 100,
      "budget": 200
    }
  ];

  const categories = data.map(item => item.category);
  const budgetData = data.map(item => (item.budget - item.expense));
  const expenseData = data.map(item => item.expense);

  const chartSeries = [];
  const chartOptions = {
    chart: {
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: 'Amount',
      },
      min: 0,
    },
    legend: {
      position: 'top',
    },
    fill: {
      opacity: 1,
    },
  };

  data.forEach(item => {
    if (item.expense <= item.budget) {
      chartSeries.push({
        name: 'Expenses within Budget',
        data: [item.expense, 0],
      });
      chartSeries.push({
        name: 'Expenses over Budget',
        data: [0, item.budget - item.expense],
      });
    } else {
      chartSeries.push({
        name: 'Expenses within Budget',
        data: [item.budget, item.expense - item.budget],
      });
      chartSeries.push({
        name: 'Expenses over Budget',
        data: [0, 0],
      });
    }
  });

  
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
        {...ApexCharts}
      />
    </div>
  );
};

export default StackedBarChart;