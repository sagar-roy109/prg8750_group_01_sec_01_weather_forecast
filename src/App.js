import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Test from './pages/Test';
import Single from './pages/Single';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Update from './pages/Update';
import Delete from './pages/Delete';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

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
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Header> </Header>
      <Sidebar>
        <Routes>
          <Route
            path='/dashboard'
            element={<Dashboard  />}
          />
          <Route path='/add' element={<Add />} />
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
