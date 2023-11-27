interface Hourly {
    cloud_cover: [number];
  cloud_cover_high: [number];
  cloud_cover_low: [number];
  cloud_cover_mid: [number];
  rain: [number];
  relative_humidity_2m: [number];
  showers: [number];
  snow_depth: [number];
  snowfall: [number];
  temperature_120m: [number];
  temperature_180m: [number];
  temperature_2m: [number];
  temperature_80m: [number];
  time: [string];
  visibility: [number];
  wind_speed_120m: [number];
}

interface HourlyUnits {
    cloud_cover: String
    cloud_cover_high: String
    cloud_cover_low: String
    cloud_cover_mid: String
    rain: String
    relative_humidity_2m: String
    showers: String
    snow_depth: String
    snowfall: String
    temperature_120m: String
    temperature_180m: String
    temperature_2m: String
    temperature_80m: String
    time: String
    visibility: String
    wind_speed_120m: String
  }

  interface Root {
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: String;
    timezone_abbreviation: String;
    utc_offset_seconds: number
  }

