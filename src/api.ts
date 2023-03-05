import { CurrentWeather, DailyWeather, HourlyWeather } from './types'

export const getHourlyWeather = async ():Promise<HourlyWeather> => fetch('https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&hourly=temperature_2m,precipitation_probability,surface_pressure,visibility,windspeed_10m,winddirection_10m&windspeed_unit=ms&timezone=Europe%2FMoscow&past_days=1')
  .then(response => response.json())

export const getDailyWeather = async ():Promise<DailyWeather> => fetch('https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&daily=temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FMoscow')
  .then(response => response.json())

export const getCurrentWeather = async ():Promise<CurrentWeather> => fetch('https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&current_weather=true&windspeed_unit=ms&timezone=Europe%2FMoscow')
  .then(response => response.json())
