import { getCurrentWeather, getDailyWeather } from './api'
import { weatherStatus } from './weather-code'
import * as bootstrap from 'bootstrap'
import { Daily, DailyWeather } from './types'

const city = document.getElementById('city') as HTMLDivElement
// const cityName = city.querySelector('.city__name') as HTMLParagraphElement
const cityTemperature = city.querySelector('.city__current-temperature') as HTMLParagraphElement
const cityWeatherStatus = city.querySelector('.city__weather-status') as HTMLParagraphElement
const cityMaxTemperature = city.querySelector('.city__max-t') as HTMLParagraphElement
const cityMinTemperature = city.querySelector('.city__min-t') as HTMLParagraphElement
const cardList = document.getElementById('dailyForecast') as HTMLDivElement

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

const editDate = (date: string): string => {
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

const formCardList = () => getDailyWeather().then(response => response.daily.time.map((time, index) => {
  const title = editDate(time)
  const picture = determineWeatherIco(response.daily.weathercode[index])
  const text = `${Math.round((response.daily.temperature_2m_max[index] + response.daily.temperature_2m_min[index]) / 2)}`
  return createWeatherCard(title, picture, text)
}))

export const appendCardList = async () => {
  const cards = await formCardList()
  cards.forEach((card) => cardList.append(card))
}

export const appendCard = (daily: Daily) => {
  const cards = daily.time.map((time, index) => {

    const title = editDate(time)
    const picture = determineWeatherIco(daily.weathercode[index])
    const text = `${Math.round((daily.temperature_2m_max[index] + daily.temperature_2m_min[index]) / 2)}`

    return createWeatherCard(title, picture, text)
  })
  cardList.append(...cards)
}
