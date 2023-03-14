import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Test from './pages/Test';
import Single from './pages/Single';
import Login from './pages/Login';
import Register from './pages/Register';
import DashTest from './pages/DashTest';

const api = {
  key: '42a11fd3bfecf2a59e5faa5d5e9c5f94',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/test' element={<Test />} />
        <Route path='/single-post' element={<Single />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
				<Route path='/user' element={<DashTest />} />
      </Routes>
    </>
  );
}

export default App;
