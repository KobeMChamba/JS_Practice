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
  const budgetData = data.map(item => (item.budget-item.expense));
  const expenseData = data.map(item => item.expense);

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

  const chartSeries = [
    {
      name: 'Expense',
      data: expenseData,
    },
    {
        name: 'Remaining Budget',
        data: budgetData,
      },
  ];

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
