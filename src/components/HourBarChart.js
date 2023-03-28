import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const HourBarChart = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (data && data.days) {
      const labels = [];
      const datasets = [];

      const colors = [
        "#0077be",
        "#2ecc71",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#1abc9c",
      ];

      for (let i = 0; i < data.days.length; i++) {
        const day = data.days[i];
        const day_date=data.days[i].datatime;

        const dayLabel = new Date(day.date).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

        

        //labels.push(day_date);
        labels.push(dayLabel);

        const hourlyTemps = day.hours.map((hour) => hour.temp);
        const averageTemp = hourlyTemps.reduce((a, b) => a + b, 0) / hourlyTemps.length;

        datasets.push({
          label: `Day ${i + 1}`,
          data: [averageTemp],
          backgroundColor: colors[i % colors.length],
          borderColor: colors[i % colors.length],
          borderWidth: 2,
          pointRadius: 1,
          fill: false,
        });
      }

      const chartConfig = {
        type: "bar",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Temperature Forecast",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
              },
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                display:false,
                
              },
            },
            y: {
              title: {
                display: true,
                text: "Temperature (°C)",
              },
              ticks: {
                callback: function (value, index, values) {
                  return value + "°C";
                },
              },
            },
          },
          tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.formattedValue + "°C";
                const label = tooltipItem.dataset.label;
                console.log(value + label)
                return `${label}: ${value}`;
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

  return <canvas ref={chartContainer} width="800" height="400" />;
};

export default HourBarChart;
