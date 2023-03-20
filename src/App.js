import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Test from './pages/Test';
import Single from './pages/Single';
import Login from './pages/Login';
import Register from './pages/Register';
import DashTest from './pages/DashTest';
import Reset from './pages/Reset';

const api = {
  key: '42a11fd3bfecf2a59e5faa5d5e9c5f94',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
	const isLoggedIn = window.localStorage.getItem("loggedin")
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/test' element={<Test />} />
        <Route path='/single-post' element={<Single />} />
        <Route path='/login' element={isLoggedIn !== "true" ? <Login /> : <Navigate replace to={"/user"} />} />
        <Route path='/register' element={<Register />} />
				<Route path='/user' element={isLoggedIn == "true" ? <DashTest /> : <Navigate replace to={"/login"} />} />
				<Route path= '/reset' element = {<Reset></Reset>} />
			</Routes>
    </>
  );
}

export default App;
