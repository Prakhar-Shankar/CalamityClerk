import React from 'react'
import cities from '../lib/city.list.json'
import Link from 'next/link';

function SearchBox() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  const onChange = (e) => {
    const {value} = e.target;

    setQuery(value);

    let matchingCities = [];

    if(value.length > 3){
      for (let city of cities) {
        if(matchingCities.length >= 5){
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match){
          const cityData = {
            ...city, 
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`
          }
          matchingCities.push(cityData);
        }
      }
    }
    return setResults(matchingCities);
  };

  return (
   <div className="search flex items-center justify-center h-screen">
    <input type="text" value={query} onChange={onChange} placeholder='Search for any location' 
    className='border-2 border-green-500 p-2 w-[48rem] rounded-2xl'/>

    {query.length > 3 &&(
      <ul>
        {results.length > 0 ? (
          results.map((city) =>(
            <li key={city.slug}>
              <Link href={`/location/${city.slug}`}>
              <a>
                {city.name}
                {city.state ? `, ${city.state}`: ''}
                <span>{city.country}</span>
              </a>
              </Link>
            </li>
          ))
        ) : (
          <li className='search__no-results'>
            No Results
          </li>
        )}
      </ul>
    )}
   </div>
  )
}

export default SearchBox