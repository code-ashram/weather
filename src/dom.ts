import { getCurrentWeather } from './api'
import { weatherStatus } from './weather-code'
import * as bootstrap from 'bootstrap'
import { Daily, Hourly } from './types'

const city = document.getElementById('city') as HTMLDivElement
// const cityName = city.querySelector('.city__name') as HTMLParagraphElement
const cityTemperature = city.querySelector('.city__current-temperature') as HTMLParagraphElement
const cityWeatherStatus = city.querySelector('.city__weather-status') as HTMLParagraphElement
const cityMaxTemperature = city.querySelector('.city__max-t') as HTMLParagraphElement
const cityMinTemperature = city.querySelector('.city__min-t') as HTMLParagraphElement
const dailyCardList = document.getElementById('dailyForecast') as HTMLDivElement
const hourlyCardList = document.getElementById('hourlyForecast') as HTMLDivElement

const triggerTabList = document.querySelectorAll('#myTab button')

triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

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

const editDailyDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  }
  return new Date(date).toLocaleDateString('en-GB', options)
}

const determineWeatherIco = (weatherCode: number): string => {
  let cardImg = ''

  if (weatherCode <= 9) {
    cardImg = 'src/img/sunny.png'
  } else if (weatherCode > 9 && weatherCode < 20) {
    cardImg = 'src/img/sunny_intervals.png'
  } else if (weatherCode >= 20 && weatherCode < 30) {
    cardImg = 'src/img/cloudy_with_light_snow.png'
  } else if (weatherCode >= 30 && weatherCode < 40) {
    cardImg = 'src/img/wind.png'
  } else if (weatherCode >= 40 && weatherCode < 50) {
    cardImg = 'src/img/mist.png'
  } else if (weatherCode >= 50 && weatherCode < 60) {
    cardImg = 'src/img/drizzle.png'
  } else if (weatherCode >= 60 && weatherCode < 70) {
    cardImg = 'src/img/cloudy_with_light_rain.png'
  } else if (weatherCode >= 70 && weatherCode < 80) {
    cardImg = 'src/img/cloudy_with_light_snow.png'
  } else if (weatherCode >= 80 && weatherCode < 90) {
    cardImg = 'src/img/cloudy_with_heavy_rain.png'
  } else if (weatherCode >= 90 && weatherCode < 99) {
    cardImg = 'src/img/thunderstorms.png'
  } else {
    console.log('Error!')
  }

  return cardImg
}
const createWeatherCard = (title: string, picture: string, text: string): HTMLDivElement => {

  const card = document.createElement('div') as HTMLDivElement
  card.classList.add('card', 'forecast__card')

  const cardBody = document.createElement('div') as HTMLDivElement
  cardBody.classList.add('card-body', 'forecast__card-body')

  const cardTitle = document.createElement('h5') as HTMLHeadingElement
  cardTitle.classList.add('card-title', 'forecast__card-title')
  cardTitle.textContent = title

  const cardImg = document.createElement('img') as HTMLImageElement
  cardImg.classList.add('card-img-top')
  cardImg.alt = 'weather ico'
  cardImg.src = picture

  const cardText = document.createElement('p') as HTMLParagraphElement
  cardText.classList.add('card-text', 'forecast__card-text')
  cardText.textContent = text

  cardBody.append(cardTitle, cardImg, cardText)
  card.append(cardBody)

  return card
}

export const appendDailyWeatherCard = (daily: Daily) => {
  const cards = daily.time.map((time, index) => {

    const title = editDailyDate(time)
    const picture = determineWeatherIco(daily.weathercode[index])
    const text = `${Math.round((daily.temperature_2m_max[index] + daily.temperature_2m_min[index]) / 2)}°`

    return createWeatherCard(title, picture, text)
  })
  dailyCardList.append(...cards)
}

const editHourlyDate = (hour: string): string => {
  const date = new Date(hour);

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    hour12: true
  }

  return new Intl.DateTimeFormat('en-AU', options).format(date).toUpperCase()
}

export const appendHourlyWeatherCard = (hourly: Hourly) => {
  const cards = hourly.time.map((time, index) => {

    const title = editHourlyDate(time)
    const picture = determineWeatherIco(hourly.weathercode[index])
    const text = `${Math.round(hourly.temperature_2m[index]) }°`

    return createWeatherCard(title, picture, text)
  })
  hourlyCardList.append(...cards)
}
