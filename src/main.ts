// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import { getCurrentWeather, getDailyWeather, getHourlyWeather } from './api'
import { showCurrentCityWeather } from './dom'


getHourlyWeather().then(result => console.log(result))
getDailyWeather().then(result => console.log(result))
getCurrentWeather().then(result => console.log(result))

const triggerTabList = document.querySelectorAll('#myTab button')

triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

showCurrentCityWeather()
