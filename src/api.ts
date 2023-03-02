import {Weather} from './types'

export const getWeatherData = async ():Promise<Weather> => fetch('https://api.open-meteo.com/v1/forecast?latitude=52.43&longitude=30.98&hourly=temperature_2m,relativehumidity_2m,precipitation,surface_pressure,visibility,windspeed_10m,winddirection_80m')
  .then(response => response.json())

