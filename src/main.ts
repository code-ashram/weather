// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import { getCurrentWeather, getDailyWeather, getHourlyWeather } from './api'
import { appendDailyWeatherCard, appendHourlyWeatherCards, showCurrentWeather } from './dom'


getHourlyWeather().then(result => console.log(result))
getDailyWeather().then(result => console.log(result))
getCurrentWeather().then(result => console.log(result))



showCurrentWeather()
getHourlyWeather().then(({hourly}) => {
  console.log('Генерал дал данные')
  appendHourlyWeatherCards(hourly)
})
getDailyWeather().then(({daily}) => appendDailyWeatherCard(daily))


