import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'API_URL',
  cache: new InMemoryCache(),
});

import React from 'react';
import { useRouter } from 'next/router';
import fetchWeatherQuery from '../../../../graphql/queries/fetchWeatherQueries';


type Props = {
  params?: {
    city?: string;
    lat?: string;
    long?: string;
  };
};


async function ClimatePage({ params }: Props) {
  const client = new ApolloClient({
    uri: 'API_URL',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: params?.long,
      latitude: params?.lat,
      timezone: 'GMT'
    }
  });

  const results: Root = data.myQuery;

  console.log(results);

  const { city, lat, long } = params || {}; // Destructure city, lat, and long from params

  return (
    <div>
      Welcome to the climate page: {city} {lat} {long}
    </div>
  );
}

export default ClimatePage;

