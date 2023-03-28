import React from 'react';

function Topbuttons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: 'Kitchener',
    },
    {
      id: 2,
      title: 'Waterloo',
    },
    {
      id: 3,
      title: 'Cambridge',
    },
    {
      id: 4,
      title: 'Brantford',
    },
    {
      id: 5,
      title: 'Guelph',
    },
  ];
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'
        onClick={() => setQuery({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default Topbuttons;
