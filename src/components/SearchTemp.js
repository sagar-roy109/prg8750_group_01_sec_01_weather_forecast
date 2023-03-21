import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WeatherBarChart from './WeatherBarChart';
import HourBarChart from './HourBarChart';

function SearchTemp() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&include=hours&key=EPHZ2R3BGFE2BPJJX9LU7MU52&contentType=json`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const dateBuilder = d => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={(typeof weather.days !== 'undefined') ? ((weather.days[0].temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.days !== 'undefined') ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.address}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.days[0].temp)}℃
              </div>
            </div>
            <Link to="/graph" state={{ data: weather }}>  15 day Weather Forecast</Link>
          </div>
        ) : ('')}
        
      </main>
    </div>
  );
}

export default SearchTemp;