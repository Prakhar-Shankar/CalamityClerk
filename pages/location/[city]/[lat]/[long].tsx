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

function ClimatePage({ params }: Props) {
  // Ensure params is an object with default values
  const { city = 'DefaultCity', lat = 'DefaultLat', long = 'DefaultLong' } = params || {};
  
  const [results, setResults] = useState<Root | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = getClient();
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: fetchWeatherQuery,
          variables: {
            longitude: long,
            latitude: lat,
            timezone: 'GMT',
          },
        });
  
        console.log('GraphQL Response:', data);
  
        const fetchedResults: Root = data.myQuery;
        setResults(fetchedResults);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [lat, long]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      Welcome to the climate page: {city} {lat} {long}
      {results && (
        <div>
          {/* Render content using the fetched data */}
          {/* For example: <p>Temperature: {results.temperature}</p> */}
        </div>
      )}
    </div>
  );
}

export default ClimatePage;
