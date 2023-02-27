import {Weather} from './types'

export const getWeatherData = async ():Promise<Weather> => fetch('https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&hourly=temperature_2m,showers,visibility,windspeed_10m&windspeed_unit=ms')
  .then(response => response.json())

