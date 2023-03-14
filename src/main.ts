// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import { getCurrentWeather, getDailyWeather, getHourlyWeather } from './api'
import { appendCard, showCurrentWeather } from './dom'


getHourlyWeather().then(result => console.log(result))
getDailyWeather().then(result => console.log(result))
getCurrentWeather().then(result => console.log(result))



showCurrentWeather()
getDailyWeather().then(({daily}) => appendCard(daily))

