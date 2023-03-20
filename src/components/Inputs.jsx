import React, {useState,useEffect} from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
function Inputs({setQuery, units, setUnits}) {


  const [place, cityPlace] = useState('')

  useEffect(() => {
    fetch('https://geolocation-db.com/json/a9e48c70-8b22-11ed-8d13-bd165d1291e3')
      .then(response => response.json())
      .then(data => {
        cityPlace(data.city);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    console.log(place);
  




  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if(city!=='') setQuery({q:city})
    else setQuery({q:place})
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
  }



  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-2/4 items-center justify-center space-x-4'>
        <input
          type='text'
          value={city}
          onChange = {(e) => setCity(e.currentTarget.value)}
          placeholder='search for city...'
          className='text-xl font-light p-2 w-full shadow-lg focus:outline-none capitalize placeholder:lowercase'
          onKeyPress={handleSearchClick}
        />
        <UilSearch
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        onClick={handleSearchClick}
        //onKeyPress={handleSearchClick}
        />
       
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125'
        onClick={handleUnitsChange}>
          °C
        </button>
        <p className='text-xl text-white mx-1 mt-2.5'> |</p>
        <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125'
        onClick={handleUnitsChange}>
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
