interface CommonData {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
}

type HourlyUnits = {
  time: string,
  temperature_2m: string,
  precipitation_probability: string,
  surface_pressure: string,
  visibility: string,
  windspeed_10m: string,
  winddirection_10m: string
}

export type Hourly = {
  time: string[],
  temperature_2m: number[],
  precipitation_probability: number[],
  surface_pressure: number[],
  visibility: number[],
  windspeed_10m: number[],
  winddirection_10m: number[],
  weathercode: number[],
  relativehumidity_2m: number[],
}

export interface HourlyWeather extends CommonData {
  hourly: Hourly,
  hourly_units: HourlyUnits
}

type DailyUnits = {
  time: string,
  temperature_2m_max: string,
  temperature_2m_min: string,
  uv_index_clear_sky_max: string,
  precipitation_probability_max: string,
  windspeed_10m_max: string,
  winddirection_10m_dominant: string
  weathercode: string,
}

export type Daily = {
  time: string[],
  temperature_2m_max: number[],
  temperature_2m_min: number[],
  uv_index_clear_sky_max: number[],
  precipitation_probability_max: number[],
  windspeed_10m_max: number[],
  winddirection_10m_dominant: number[],
  weathercode: number[],
  sunrise: string[],
  sunset: string[],
}

export interface DailyWeather extends CommonData {
  daily_units: DailyUnits,
  daily: Daily
}

type Current = {
  temperature: number,
  windspeed: number,
  winddirection: number,
  weathercode: number,
  time: string
}

export interface CurrentWeather extends CommonData {
  current_weather: Current
  daily: Daily
}

