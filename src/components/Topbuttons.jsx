import React , {useEffect, useState} from 'react';
const URL = process.env.REACT_APP_WEBSITE_URL


function Topbuttons({setQuery}) {
	const [cities, setCities] = useState([])


	useEffect(() => {
		fetch(`${URL}/user-details`, {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
				setCities(data.data.cities)

      });
	}, [])

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'
        onClick={() => setQuery({q: city})}>
          {city}
        </button>
      ))}

    </div>


  );
}

export default Topbuttons;
