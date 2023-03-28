import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Test from './pages/Test';
import Single from './pages/Single';
import Donate from './pages/Donate';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDash from './pages/UserDash';
import Reset from './pages/Reset';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Delete from './pages/Delete';
import EditPost from './components/EditPost';
import Graph from './pages/Graph';
import Landing from './pages/Landing';
import Footer from './components/Footer';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedin');
  const admin = window.localStorage.getItem('admin');
  const UserPath = () => {
    if (isLoggedIn === 'true' && admin === 'true') {
      return (
        <Route
          path='/user'
          element={
            isLoggedIn === 'true' ? (
              <Dashboard />
            ) : (
              <Navigate replace to={'/login'} />
            )
          }
        />
      );
    } else if (isLoggedIn === 'true' && admin === 'false') {
      return (
        <Route
          path='/user'
          element={
            isLoggedIn === 'true' ? (
              <UserDash />
            ) : (
              <Navigate replace to={'/login'} />
            )
          }
        />
      );
    }
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/test' element={<Test />} />
        <Route path='/single-post' element={<Single />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/single-post/:id' element={<Single />} />
        <Route
          path='/login'
          element={
            isLoggedIn !== 'true' ? (
              <Login />
            ) : (
              <Navigate replace to={'/user'} />
            )
          }
        />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/user' element={UserPath} /> */}
        {UserPath()}

        <Route path='/reset' element={<Reset></Reset>} />
        <Route
          path='/login'
          element={
            isLoggedIn !== 'true' ? (
              <Login />
            ) : (
              <Navigate replace to={'/user'} />
            )
          }
        />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/user' element={UserPath} /> */}
        {UserPath()}

        <Route path='/reset' element={<Reset></Reset>} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/add' element={<Add />} />
        <Route path='/delete' element={<Delete />} />
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path='/graph' element={<Graph />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
