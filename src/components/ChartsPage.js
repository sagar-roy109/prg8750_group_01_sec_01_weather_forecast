
import React from 'react';
import WeatherBarChart from './WeatherBarChart';
import HourBarChart from './HourBarChart';
import PrecipChart from './PrecipChart';
import HumidityChart from './HumidityChart';
import UvIndexChart from './UvIndexChart';


const ChartsPage = ({ data }) => {
    const city=data.address.slice(0, 1).toUpperCase() + data.address.slice(1);
  return (

   
     <div >
       <div className="Graphheader">  15-day Weather Forecast </div>


   
      <div className="charts-container">
        <WeatherBarChart data={data} />
       
        
      </div>

      <div className="charts-container">
       
        <PrecipChart data={data} />
        
      </div>

      <div className="charts-container">
       
        <HumidityChart data={data} />
        
      </div>

      <div className="charts-container">
       
        <UvIndexChart data={data} />
        
      </div>
    </div>
  );
};

export default ChartsPage;



