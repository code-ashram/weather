import { CurrentWeather, DailyWeather, HourlyWeather } from './types'

const today = (new Date()).toISOString().slice(0,10)

export const getHourlyWeather = async ():Promise<HourlyWeather> => fetch('https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&hourly=temperature_2m,precipitation_probability,surface_pressure,visibility,windspeed_10m,winddirection_10m&windspeed_unit=ms&timezone=auto&past_days=1')
  .then(response => response.json())

export const getDailyWeather = async ():Promise<DailyWeather> => fetch('https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_probability_max&current_weather=true&windspeed_unit=ms&timezone=auto')
  .then(response => response.json())

export const getCurrentWeather = async ():Promise<CurrentWeather> => fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&windspeed_unit=ms&timezone=auto&start_date=${today}&end_date=${today}`)
  .then(response => response.json())
