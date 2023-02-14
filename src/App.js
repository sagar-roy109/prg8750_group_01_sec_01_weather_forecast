import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchTemp from './components/SearchTemp';
import Header from './components/Header';




const api = {
  key: "42a11fd3bfecf2a59e5faa5d5e9c5f94",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {


  return (
    <>
			<Header></Header>
			<SearchTemp></SearchTemp>
		</>
)};


export default App;
