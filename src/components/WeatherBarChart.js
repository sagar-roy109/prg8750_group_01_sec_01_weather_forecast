import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const WeatherBarChart = ({ data }) => {
  
  const chartContainer = useRef(null);

  useEffect(() => {
    if (data && data.days) {
      const chartConfig = {
        type: "bar",
        data: {
          labels: data.days.map((day) => day.datetime),
          datasets: [
            {
              label: "Max Temperature (°C)",
              data: data.days.map((day) => day.tempmax),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            
            {
              label: "Temperature (°C)",
              data: data.days.map((day) => day.temp),
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderColor: "rgba(255, 206, 86, 1)",
              borderWidth: 1,
            },

            {
              label: "Min Temperature (°C)",
              data: data.days.map((day) => day.tempmin),
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Temperature Forecast",
              font: {
                size: 24
              }
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
            y: {
              title: {
                display: true,
                text: "Temperature (°C)",
              },
            },
          },
        },
      };

      const chartInstance = new Chart(chartContainer.current, chartConfig);

      return () => {
        chartInstance.destroy();
      };
    }
  }, [data]);

  return <canvas ref={chartContainer} width={600} height={400} />;
};

export default WeatherBarChart;

