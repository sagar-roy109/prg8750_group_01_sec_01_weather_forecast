import React from 'react';

function Forecast({ title }) {
  return (
    <div>
      <div className='flex items-center justify-start my-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        <div className='flex flex-col items-center justify-between'>
          <p className='font-light text-sm'>11:30 AM</p>
          <img
            src='http://openweathermap.org/img/wn/02d@2x.png'
            alt='temparature img'
            className='w-12 my-1'
          />
          <p className='font-medium'>5°</p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <p className='font-light text-sm'>11:30 AM</p>
          <img
            src='http://openweathermap.org/img/wn/02d@2x.png'
            alt='temparature img'
            className='w-12 my-1'
          />
          <p className='font-medium'>5°</p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <p className='font-light text-sm'>11:30 AM</p>
          <img
            src='http://openweathermap.org/img/wn/02d@2x.png'
            alt='temparature img'
            className='w-12 my-1'
          />
          <p className='font-medium'>5°</p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <p className='font-light text-sm'>11:30 AM</p>
          <img
            src='http://openweathermap.org/img/wn/02d@2x.png'
            alt='temparature img'
            className='w-12 my-1'
          />
          <p className='font-medium'>5°</p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <p className='font-light text-sm'>11:30 AM</p>
          <img
            src='http://openweathermap.org/img/wn/02d@2x.png'
            alt='temparature img'
            className='w-12 my-1'
          />
          <p className='font-medium'>5°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
