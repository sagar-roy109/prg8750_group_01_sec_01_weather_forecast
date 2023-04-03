import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

import WeatherBarChart from "./WeatherBarChart";
import PrecipChart from "./PrecipChart";
import HumidityChart from "./HumidityChart";
import UvIndexChart from "./UvIndexChart";

const ChartsPage = ({ data }) => {
  const city = data.address.slice(0, 1).toUpperCase() + data.address.slice(1);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`${city} 15-day Temperature Forecast`, 10, 10);
    doc.autoTable({
      head: [
        [
          "Date",
          "Max Temperature (°C)",
          "Temperature (°C)",
          "Min Temperature (°C)",
        ],
      ],
      body: data.days.map((day) => [
        day.datetime,
        day.tempmax,
        day.temp,
        day.tempmin,
      ]),
    });
    doc.save(`${city}_temperature_forecast.pdf`);
  };

  const handleDownloadPrecipPDF = () => {
    const doc = new jsPDF();
    doc.text(`${city} 15-day Precipitation Forecast`, 10, 10);
    doc.autoTable({
      head: [
        [
          "Date",
          "Precipitation",
          "Precipitation Cover",
          "Precipitation Probability",
        ],
      ],
      body: data.days.map((day) => [
        day.datetime,
        day.precip,
        day.precipcover,
        day.precipprob,
      ]),
    });
    doc.save(`${city}_precipitation_forecast.pdf`);
  };

  const handleDownloadHumidPDF = () => {
    const doc = new jsPDF();
    doc.text(`${city} 15-day Humidity Forecast`, 10, 10);
    doc.autoTable({
      head: [["Date", "Humidity", "Pressure"]],
      body: data.days.map((day) => [day.datetime, day.humidity, day.pressure]),
    });
    doc.save(`${city}_humidity_forecast.pdf`);
  };

  const handleDownloadUVPDF = () => {
    const doc = new jsPDF();
    doc.text(`${city} 15-day UV Index Forecast`, 10, 10);
    doc.autoTable({
      head: [["Date", "UV Index"]],
      body: data.days.map((day) => [day.datetime, day.uvindex]),
    });
    doc.save(`${city}_uvindex_forecast.pdf`);
  };

  return (
    <div>
      <div className="Graphheader"> {city} 15-day Weather Forecast </div>

      <div className="conatainer">
        <div className="row">
          <div className="charts-container col-md-6">
            <WeatherBarChart data={data} />
            <button
              className="pfdbutton"
              onClick={(e) => {
                e.preventDefault();
                handleDownloadPDF();
              }}
            >
              {" "}
              Download PDF{" "}
            </button>
          </div>
          <div className="charts-container col-md-6">
            <PrecipChart data={data} />

            <button
              className="pfdbutton"
              onClick={(e) => {
                e.preventDefault();
                handleDownloadPrecipPDF();
              }}
            >
              {" "}
              Download PDF{" "}
            </button>
          </div>
          <div className="charts-container col-md-6">
            <HumidityChart data={data} />
            <button
              className="pfdbutton"
              onClick={(e) => {
                e.preventDefault();
                handleDownloadHumidPDF();
              }}
            >
              {" "}
              Download PDF{" "}
            </button>
          </div>
          <div className="charts-container col-md-6">
            <UvIndexChart data={data} />
            <button
              className="pfdbutton"
              onClick={(e) => {
                e.preventDefault();
                handleDownloadUVPDF();
              }}
            >
              {" "}
              Download PDF{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
