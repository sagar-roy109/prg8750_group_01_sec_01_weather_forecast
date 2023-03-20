import React from 'react';
import cityName from '../components/Inputs'
import Topbuttons from '../components/Topbuttons';
import Inputs from '../components/Inputs';
import TimeAndlocation from '../components/TimeAndlocation';
import TemparatureAndDetails from '../components/TemperatureAndDetails';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import getWeatherData from '../services/weatherService';
import getFormattedWeatherData from '../services/weatherService';
import { useState, useEffect } from 'react';

const Test = () => {





const [query, setQuery] = useState({q:''})  
const [units, setUnits] = useState('metric')
const [weather, setWeather] = useState(null)



useEffect(()=>{
  const fetchWeather = async() => {
    await getFormattedWeatherData({...query, units}).then(
      (data) => {
        setWeather(data);
      });
  };

  fetchWeather();
}, [query, units]);


   useEffect(() => {
    fetch('https://geolocation-db.com/json/a9e48c70-8b22-11ed-8d13-bd165d1291e3')
      .then(response => response.json())
      .then(data => {
        setQuery({q:data.city});
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    




const formatBackground = () => {
  if(!weather) return "from-cyan-700 to-blue-700";
  const threshold = units === 'metric' ? 20 : 60;
  if(weather.temp <= threshold) return "from-cyan-700 to-blue-700";

  return "from-yellow-700 to-orange-700";
}


  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div className={`mx-auto max-w-screen-xl mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400  ${formatBackground()}` }>
        <Topbuttons setQuery = {setQuery}/>
        <Inputs setQuery = {setQuery} units={units} setUnits={setUnits}/>
        {weather && (
          <div>
            <TimeAndlocation  weather = {weather}/>
            <TemparatureAndDetails weather = {weather}/>

            <Forecast title='hourly forecast' items={weather.hourly} />
            <Forecast title='daily forecast' items={weather.daily} />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Test;
