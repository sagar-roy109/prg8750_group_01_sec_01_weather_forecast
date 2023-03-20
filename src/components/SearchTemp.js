import React, { useEffect, useState } from 'react';

function SearchTemp() {
	const api = {
		key: "42a11fd3bfecf2a59e5faa5d5e9c5f94",
		base: "https://api.openweathermap.org/data/2.5/"
	}
	const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');



  useEffect(()=>{
	//https://geolocation-db.com/json/a9e48c70-8b22-11ed-8d13-bd165d1291e3
	fetch("https://geolocation-db.com/json/a9e48c70-8b22-11ed-8d13-bd165d1291e3")
	.then(res=>res.json())
	.then(idDetails =>{
		
		 setQuery(idDetails.city);

	})}
	,[])

	console.log(query)

	useEffect(()=>{
	
	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {

      setWeather(result);

	  console.log(result)
      
      
  })}

	, [query])
 const search = evt =>{
  if (evt.key === "Enter") {

    setQuery(evt.target.value);
  }
 }

 const dateBuilder = (d) => {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day} ${date} ${month} ${year}`
}
	return (
		<div className={(typeof weather.main != "undefined")? ((weather.main.temp>16)? 'app warm' : 'app'):'app'}>
		<main>
			<div className="search-box">
				<input
				type = "search"
				className="search-bar"
				placeholder="Search"
				//onChange={e => setQuery(e.target.value)}
				onKeyPress={search}
				/>
			</div>
			{(typeof weather.main != "undefined") ?(
		<div>
			<div className="location-box">
				<div className="location">{weather.name}, {weather.sys.country}</div>
				<div className="date">{dateBuilder(new Date())}</div>
			</div>
			<div className="weather-box">
				<div className="temp">
					{Math.round(weather.main.temp)}℃
			</div>
			<p className='feels-like'>Feels Like: {Math.round(weather.main.feels_like)}℃</p>

			</div>
		</div>
		):('')}
	</main>
</div>
	)
}
export default SearchTemp
