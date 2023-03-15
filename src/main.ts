// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import { getCurrentWeather, getDailyWeather, getHourlyWeather } from './api'
import { appendDailyWeatherCard, appendHourlyWeatherCard, showCurrentWeather } from './dom'


getHourlyWeather().then(result => console.log(result))
getDailyWeather().then(result => console.log(result))
getCurrentWeather().then(result => console.log(result))



showCurrentWeather()
getDailyWeather().then(({daily}) => appendDailyWeatherCard(daily))

getHourlyWeather().then(({hourly}) => appendHourlyWeatherCard(hourly))
