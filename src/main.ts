// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import {getDailyWeather, getHourlyWeather } from './api'
import { appendDailyWeatherCard, appendHourlyWeatherCards, showCurrentWeather } from './dom/main'


showCurrentWeather()
getHourlyWeather().then(({hourly}) => {
  // console.log('Генерал дал данные')
  appendHourlyWeatherCards(hourly)
})
getDailyWeather().then(({daily}) => appendDailyWeatherCard(daily))


