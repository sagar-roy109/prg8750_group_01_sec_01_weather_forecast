import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const UvIndexChart = ({ data }) => {
  
  const chartContainer = useRef(null);

  useEffect(() => {
    if (data && data.days) {
      const chartConfig = {
        type: "line",
        data: {
          labels: data.days.map((day) => day.datetime),
          datasets: [
            {
              label: "UV Index",
              data: data.days.map((day) => day.uvindex),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
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
              text: "UV Index Forecast",
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
                text: "UV Index",
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

export default UvIndexChart;

