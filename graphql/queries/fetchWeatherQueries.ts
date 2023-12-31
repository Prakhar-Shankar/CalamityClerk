import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
  query MyQuery($hourly: String = "cloud_cover_high,cloud_cover,cloud_cover_low,cloud_cover_mid,rain,relative_humidity_2m,showers,snow_depth,snowfall,temperature_120m,temperature_180m,temperature_2m,temperature_80m,time,visibility,wind_speed_120m", $latitude: String!, $longitude: String!, $timezone: String!) {
    myQuery(hourly: $hourly, latitude: $latitude, longitude: $longitude, timezone: $timezone) {
      elevation
      generationtime_ms
      hourly {
        cloud_cover
        cloud_cover_high
        cloud_cover_low
        cloud_cover_mid
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        temperature_120m
        temperature_180m
        temperature_2m
        temperature_80m
        time
        visibility
        wind_speed_120m
      }
      hourly_units {
        cloud_cover_high
        cloud_cover
        cloud_cover_low
        cloud_cover_mid
        relative_humidity_2m
        rain
        showers
        snow_depth
        snowfall
        temperature_120m
        temperature_180m
        temperature_2m
        temperature_80m
        time
        visibility
        wind_speed_120m
      }
    }
  }
    
     
  
`;

export default fetchWeatherQuery;
