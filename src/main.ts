// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import { getCurrentWeather, getDailyWeather, getHourlyWeather } from './api'
import { appendWeatherCard, showCurrentWeather } from './dom'


getHourlyWeather().then(result => console.log(result))
getDailyWeather().then(result => console.log(result))
getCurrentWeather().then(result => console.log(result))



showCurrentWeather()
appendWeatherCard()
