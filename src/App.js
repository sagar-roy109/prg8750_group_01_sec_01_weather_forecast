import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Test from './pages/Test';
import Single from './pages/Single';
import Graph from './pages/Graph';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/test' element={<Test />} />
				<Route path='/single-post' element={<Single />} />
        <Route path='/graph' element={<Graph />} />
      </Routes>
    </>
  );
}

export default App;
