import {getCurrentWeather} from './api'

const city = document.getElementById('city') as HTMLDivElement
const cityName = city.querySelector('.city__name') as HTMLParagraphElement
const cityTemperature = city.querySelector('.city__current-temperature') as HTMLParagraphElement
const cityWeatherCode = city.querySelector('.city__weather-code') as HTMLParagraphElement
const cityMaxTemperature = city.querySelector('.city__max-t') as HTMLParagraphElement
const cityMinTemperature = city.querySelector('.city__min-t') as HTMLParagraphElement

export const showCurrentCityWeather = () => {

  getCurrentWeather().then(response => {
    cityTemperature.textContent = `${Math.round(response.current_weather.temperature)}°`
  })
}


