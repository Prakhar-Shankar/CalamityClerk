import React from 'react';
import { useRouter } from 'next/router';

type Props = {
  params?: {
    city?: string;
    lat?: string;
    long?: string;
  };
};

function ClimatePage({ params }: Props) {
  const router = useRouter();

  // Use values from URL parameters if available, otherwise use defaults
  const { city = 'DefaultCity', lat = 'DefaultLat', long = 'DefaultLong' } = params || router.query;

  return (
    <div>
      Welcome to the climate page: {city} {lat} {long}
    </div>
  );
}

export default ClimatePage;
