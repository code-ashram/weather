import { getCurrentWeather } from '../api'
import { weatherStatus } from './weather-code'
import {cityTemperature, cityWeatherStatus, cityMaxTemperature, cityMinTemperature, dailyTabBtn, dailyCardList, hourlyCardList, details, triggerTabList} from './constants'
import * as bootstrap from 'bootstrap'
import { Daily, Hourly } from '../types'
import { determineWeatherIco, determineWindDirection, editDailyDate, editHourlyDate, editTime } from './utils'

triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()

    const firstDailyCard = dailyCardList.firstChild as HTMLDivElement
    event.target === dailyTabBtn
      ? firstDailyCard.click()
      : scrollToPresentHour()
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

    cityMaxTemperature.textContent = `H: ${Math.round(response.daily.temperature_2m_max[0])}°`
    cityMinTemperature.textContent = `M:  ${Math.round(response.daily.temperature_2m_min[0])}°`
  })
}

const scrollToPresentHour = () => {
  const now = document.getElementById('now') as HTMLDivElement
  now.scrollIntoView({ inline: 'center' })
  now.click()
}

const createListItem = (text: string): HTMLLIElement => {
  const li = document.createElement('li') as HTMLLIElement
  li.classList.add('list-group-item', 'weather__info')
  li.textContent = text
  return li
}

const createWeatherCard = (title: string, picture: string, text: string, ...weatherData: string[]): HTMLDivElement => {
  // console.log('Капитан получил данные')
  const card = document.createElement('div') as HTMLDivElement
  card.classList.add('card', 'forecast__card')

  card.addEventListener('click', () => {
    const li = weatherData.map((parameter) => createListItem(parameter))

    document.querySelectorAll('.forecast__card').forEach((card) => {
      if (card.classList.contains('active')) {
        card.classList.remove('active')
      }
    })
    card.classList.add('active')

    details.replaceChildren(...li)
  })

  const cardBody = document.createElement('div') as HTMLDivElement
  cardBody.classList.add('card-body', 'forecast__card-body')

  const cardTitle = document.createElement('h5') as HTMLHeadingElement
  cardTitle.classList.add('card-title', 'forecast__card-title')
  cardTitle.textContent = title

  if (title === editHourlyDate(`${new Date()}`)) {
    card.id = 'now'
    cardTitle.textContent = 'Now'
    card.classList.add('active')
  }

  const cardImg = document.createElement('img') as HTMLImageElement
  cardImg.classList.add('card-img-top')
  cardImg.alt = 'weather ico'
  cardImg.src = picture

  const cardText = document.createElement('p') as HTMLParagraphElement
  cardText.classList.add('card-text', 'forecast__card-text')
  cardText.textContent = text

  cardBody.append(cardTitle, cardImg, cardText)
  card.append(cardBody)
  // console.log('Капитан вернул карточку с данными')
  return card
}

export const appendHourlyWeatherCards = (hourly: Hourly) => {
  // console.log('Полковник получил данные')
  const cards = hourly.time.map((time, index) => {
    // console.log(`${index} Майор получил папку с данными`)
    const title = editHourlyDate(time)
    const picture = determineWeatherIco(hourly.weathercode[index])
    const text = `${Math.round(hourly.temperature_2m[index])}`
    const precipitations = `Precipitations: ${hourly.precipitation_probability[index]} mm`
    const pressure = `Atmospheric pressure: ${hourly.surface_pressure[index]} Pha`
    const visibility = `Visibility: ${hourly.visibility[index]} m`
    const wind = `Wind: ${hourly.windspeed_10m[index]} M/h, ${hourly.winddirection_10m[index]} degree`
    const humidity = `Humidity: ${hourly.relativehumidity_2m[index]} %`

    return createWeatherCard(title, picture, text, precipitations, pressure, visibility, wind, humidity)
    // console.log(`${index} Майор вернул карточку с данными`)
  })
  hourlyCardList.append(...cards)
  scrollToPresentHour()
  // console.log('Полковник добавил данные')
}

export const appendDailyWeatherCard = (daily: Daily) => {
  const cards = daily.time.map((time, index) => {

    const title = editDailyDate(time)
    const picture = determineWeatherIco(daily.weathercode[index])
    const text = `${Math.round((daily.temperature_2m_max[index] + daily.temperature_2m_min[index]) / 2)}°`
    let status = ''

    weatherStatus.forEach((weather, weatherCode) => {
      if (daily.weathercode[index] === weatherCode) {
        status = weather
      }
    })

    const temperature = `Max t°: ${Math.round(daily.temperature_2m_max[index])}, Min t°: ${Math.round(daily.temperature_2m_min[index])}`
    const wind = `Wind: ${daily.windspeed_10m_max[index]} M/s, ${determineWindDirection(daily.winddirection_10m_dominant[index])}`
    const precipitation = `Precipitation probability: ${daily.precipitation_probability_max[index]} mm`
    const sun = `Sunrise: ${editTime(daily.sunrise[index])}, Sunset: ${editTime(daily.sunset[index])}`

    return createWeatherCard(title, picture, text, status, temperature, wind, precipitation, sun)
  })
  dailyCardList.append(...cards)
}
