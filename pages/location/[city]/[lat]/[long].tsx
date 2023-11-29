import React, { useEffect, useState } from 'react';
import { getClient } from '../../../../apollo-client';
import fetchWeatherQuery from '../../../../graphql/queries/fetchWeatherQueries';

type Props = {
  params?: {
    city?: string;
    lat?: string;
    long?: string;
  };
};

async function fetchData(lat: string, long: string) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      lat: lat,
      long: long,
      timezone: 'GMT',
    },
  });
  return data.myQuery;
}

function ClimatePage({ params }: Props) {
  // Ensure params is an object with default values
  const { city = 'DefaultCity', lat = 'DefaultLat', long = 'DefaultLong' } = params || {};
  const [results, setResults] = useState<Root | null>(null);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const data = await fetchData(lat, long);
        console.log(data);
        setResults(data);
        console.log(results)  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchDataAsync();
  }, [lat, long]);

  return (
    <div>
      Welcome to the climate page: {city} {lat} {long}
      {results && (
        <div>
          {/* Render your results here */}
        </div>
      )}
    </div>
  );
}

export default ClimatePage;
