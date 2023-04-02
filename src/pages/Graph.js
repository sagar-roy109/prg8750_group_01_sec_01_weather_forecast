import React from 'react';
import { useLocation } from 'react-router-dom';
import ChartsPage from '../components/ChartsPage';
import Header from '../components/Header';

const Graph = () => {
  const location = useLocation();
  const { data } = location.state || {}; // update to access the data property
  console.log(data);

  return (
    <>
      <Header />
      {data ? <ChartsPage data={data} /> : <p>No data available</p>}
    </>
  );
};

export default Graph;