import React, { useState, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const BarGraphWithMarkers = () => {
  const chartRef = useRef(null);
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch("http://localhost:8080/forecast/SLEE001/2022/06", {
          method: "GET",
        });
        const forecastData = await response.json();
  
        // Transform the fetched data into an array of objects
        const transformedData = Object.entries(forecastData).map(([category, { expense, budget }]) => ({
          category,
          expense,
          budget,
        }));
  
        setForecastData(transformedData);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };
  
    fetchForecastData();
  }, []);
  

  const [data, setData] = useState([
    {
      category: "Transportation",
      expense: 40,
      budget: 100,
    },
    {
      category: "TEST",
      expense: 70,
      budget: 100,
    },
    {
      category: "TEST",
      expense: 300,
      budget: 200,
    },
    {
      category: "TEST",
      expense: 250,
      budget: 300,
    },
    {
      category: "TEST",
      expense: 90,
      budget: 100,
    },
    {
      category: "TEST",
      expense: 350,
      budget: 400,
    },
    {
      category: "TEST",
      expense: 100,
      budget: 200,
    },
  ]);

  useEffect(() => {
    const seriesData = forecastData.map((item) => ({
      x: item.category,
      y: item.expense,
      goals: [
        {
          name: "Average Expenses",
          value: item.budget,
          strokeWidth: 2,
          strokeDashArray: 0,
          strokeColor: "#775DD0",
        },
      ],
    }));

    const options = {
      series: [
        {
          name: "Actual",
          data: seriesData,
        },
      ],
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ["#00E396"],
      dataLabels: {
        formatter: function (val, opt) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Expenses", "Average Expenses"],
        markers: {
          fillColors: ["#00E396", "#775DD0"],
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [forecastData]);

  const handleUpdateAllExpenses = () => {
    setData((prevData) => {
      const updatedData = prevData.map((item) => {
        const amount = item.amount || 0;
        const forecastItem = forecastData.find(
          (fd) => fd.category === item.category
        );
        const expense = forecastItem ? forecastItem.expense : item.expense;
        return {
          ...item,
          expense: expense + amount,
          amount: 0,
        };
      });
      return updatedData;
    });
  };

  return (
    <div>
      <div ref={chartRef} />
      <div>
        <h2>Add Expense</h2>
        {forecastData.map((item) => ( // Change data to forecastData here
          <div key={item.category}>
            <label>{item.category}:</label>
            <input
              type="number"
              value={item.amount || ""}
              onChange={(e) => {
                const amount = parseInt(e.target.value);
                setData((prevData) => {
                  const updatedData = prevData.map((dataItem) => {
                    if (dataItem.category === item.category) {
                      return {
                        ...dataItem,
                        amount: isNaN(amount) ? 0 : amount,
                      };
                    }
                    return dataItem;
                  });
                  return updatedData;
                });
              }}
            />
          </div>
        ))}
        <button onClick={handleUpdateAllExpenses}>Update All</button>
      </div>
    </div>
  );  
};

export default BarGraphWithMarkers;
