import { getCurrentWeather, getDailyWeather } from './api'
import { weatherStatus } from './weather-code'
import * as bootstrap from 'bootstrap'

const city = document.getElementById('city') as HTMLDivElement
const cityName = city.querySelector('.city__name') as HTMLParagraphElement
const cityTemperature = city.querySelector('.city__current-temperature') as HTMLParagraphElement
const cityWeatherStatus = city.querySelector('.city__weather-status') as HTMLParagraphElement
const cityMaxTemperature = city.querySelector('.city__max-t') as HTMLParagraphElement
const cityMinTemperature = city.querySelector('.city__min-t') as HTMLParagraphElement

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

// const date = new Date("2023-03-12");

const editDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  }
  return new Date(date).toLocaleDateString('en-GB', options)
}

const createWeatherCard = (title: string, picture: string, text: string) : HTMLDivElement => {

  const cardList = document.getElementById('dailyForecast') as HTMLDivElement

  const card = document.createElement('div') as HTMLDivElement
  card.classList.add('card', 'forecast__card')

  const cardBody = document.createElement('div') as HTMLDivElement
  cardBody.classList.add('card-body', 'forecast__card-body')

  const cardTitle = document.createElement('h5') as HTMLHeadingElement
  cardTitle.classList.add('card-title', 'forecast__card-title')
  cardTitle.textContent = title

  const cardImg = document.createElement('img') as HTMLImageElement
  cardImg.classList.add('card-img-top')
  cardImg.src = picture
  cardImg.alt = 'weather ico'

  const cardText = document.createElement('p') as HTMLParagraphElement
  cardText.classList.add('card-text', 'forecast__card-text')
  cardText.textContent = text

  cardBody.append(cardTitle, cardImg, cardText)
  card.append(cardBody)
  cardList.append(card)

  return card
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

export const appendWeatherCard = (): void => {
  getDailyWeather().then((response) => {
    for (let i = 0; i < response.daily.time.length; i++) {

      const cardTitle = editDate(response.daily.time[i])
      const cardImg = determineWeatherIco(response.daily.weathercode[i])
      const cardText = `${Math.round((response.daily.temperature_2m_max[i] + response.daily.temperature_2m_min[i]) / 2)}`

      createWeatherCard(cardTitle, cardImg, cardText)
    }
  })
}
