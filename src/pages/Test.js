import React from 'react';
import Topbuttons from '../components/Topbuttons';
import Inputs from '../components/Inputs';
import TimeAndlocation from '../components/TimeAndlocation';
import TemparatureAndDetails from '../components/TemperatureAndDetails';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import BlogList from '../components/BlogList';

const Test = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div className='mx-auto max-w-screen-xl mt-5 py-6 px-32 bg-gradient-to-r from-sky-800 to-indigo-800" h-fit shadow-xl shadow-gray-300'>
        <Topbuttons />
        <Inputs />
        <TimeAndlocation />
        <TemparatureAndDetails />
        <Forecast title='hourly forecast' />
        <Forecast title='daily forecast' />
      </div>
    </div>
  );
};

export default Test;
