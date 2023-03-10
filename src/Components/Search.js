import React, { useState } from 'react'


function Search({ state, send }) {
  const [flight, setFlight] = useState('');

  const goToPassengers = () => {
    send('CONTINUE', { selectedCountry: flight })
  }

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const countriess = state.context.countries;
  return (
    // <div class="flex space-x-20 bg-steplayout p-4 rounded-b-lg items-center w-full max-w-[420px]">
    <div className="flex flex-col bg-steplayout p-4 rounded-b-lg justify-center w-full max-w-[420px] bg-opacity-90 sm:max-w-[310px]">
      <p className='m-0 text-base sm:text-[18px]'>Find your destination 📍</p>
      <select id="country" value={flight} onChange={handleSelectChange} className='my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' >
        <option value="" disabled defaultValue>Select a country</option>
        {/* {countriess.map((pais) => console.log(pais.capital))} */}
        {countriess.map((country, idx) => <option value={country.capital} key={idx}>{country.capital}</option>)}
      </select>
      <div className='flex flex-row justify-end'>
        <button onClick={goToPassengers} disabled={flight === ''} className='bg-blue-500 hover:bg-blue-700 text-white font-bold  py-1 px-4 rounded-md shadow w-max text-center sm:text-[15px]'>Continue</button>
      </div>

    </div>
  )
}

export { Search }
