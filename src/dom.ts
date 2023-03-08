import { getCurrentWeather, getDailyWeather } from './api'
import { weatherStatus } from './weather-code'

const city = document.getElementById('city') as HTMLDivElement
const cityName = city.querySelector('.city__name') as HTMLParagraphElement
const cityTemperature = city.querySelector('.city__current-temperature') as HTMLParagraphElement
const cityWeatherStatus = city.querySelector('.city__weather-status') as HTMLParagraphElement
const cityMaxTemperature = city.querySelector('.city__max-t') as HTMLParagraphElement
const cityMinTemperature = city.querySelector('.city__min-t') as HTMLParagraphElement

export const showCurrentWeather = () => {

  getCurrentWeather().then(response => {
    cityTemperature.textContent = `${Math.round(response.current_weather.temperature)}°`

    weatherStatus.forEach((weather, weatherCode) => {
      if (response.current_weather.weathercode === weatherCode) {
        cityWeatherStatus.textContent = weather
      }
    })

    cityMaxTemperature.textContent = `H: ${response.daily.temperature_2m_max[0]}°`
    cityMinTemperature.textContent = `M:  ${response.daily.temperature_2m_min[0]}°`
  })
}


