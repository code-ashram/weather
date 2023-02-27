export type Weather = {
  'latitude': number,
  'longitude': number,
  'generationtime_ms': number,
  'utc_offset_seconds': number,
  'timezone': string,
  'timezone_abbreviation': string,
  'elevation': number,
  'hourly_units': {
    'time': string,
    'temperature_2m': string,
    'showers': string,
    'visibility': string,
    'windspeed_10m': string
  },
  'hourly': {
    'time': string[],
    'temperature_2m': number[],
    'showers': number[],
    'visibility': number[],
    'windspeed_10m': number[]
  }
}
