import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Trending = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(json => setCountries(json))
  }, [])

  return (
    <div className='grid-container'>
      {
        countries.map((country) => (
          <div key={country.name} className='card'>
            <div className='card-flag-container'>
              <Link to={country.alpha2Code}>
                <img className='card-flag' src={country.flags.svg} />

              </Link>
            </div>
            <div className='card-info'>
              <h2>{country.name}</h2>
              <p><b>Population:</b><span>{country.population.toLocaleString()}</span></p>
              <p><b>Region:</b><span>{country.region}</span></p>
              <p><b>Capital:</b><span>{country.capital}</span></p>
              

            </div>


          </div>
        )

        )
      }
    </div>
  )
}

export default Trending