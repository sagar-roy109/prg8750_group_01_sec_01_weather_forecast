import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilWater,
} from '@iconscout/react-unicons';
function TemperatureAndDetails() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p> Cloudy </p>
      </div>
      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img
          src='http://openweathermap.org/img/wn/02d@2x.png'
          alt='temparature img'
          className='w-20'
        />
        <p className='text-5xl'>6°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-Light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            Real Feel:
            <span className='font-medium ml-1'>2°</span>
          </div>
          <div className='flex font-Light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1' />
            Humidity:
            <span className='font-medium ml-1'>89%</span>
          </div>
          <div className='flex font-Light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1' />
            Wind:
            <span className='font-medium ml-1'>5km/h</span>
          </div>
          <div className='flex font-Light text-sm items-center justify-center'>
            <UilWater size={18} className='mr-1' />
            precipitation:
            <span className='font-medium ml-1'>5%/h</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light'>
          Rise:<span className='font-medium ml-1'>06:15 AM </span>
        </p>
        <p className='font-light'>|</p>
        <UilSunset />
        <p className='font-light'>
          Set:<span className='font-medium ml-1'>05:15 PM </span>
        </p>
        <p className='font-light'>|</p>
        <UilSun />
        <p className='font-light'>
          High:<span className='font-medium ml-1'> 8°</span>
        </p>
        <p className='font-light'>|</p>
        <UilSun />
        <p className='font-light'>
          Low:<span className='font-medium ml-1'> -3° </span>
        </p>
        <p className='font-light'>|</p>
      </div>
    </div>
  );
}
export default TemperatureAndDetails;
