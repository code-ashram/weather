// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import { Carousel } from 'bootstrap'
import {getWeatherData} from './api'



getWeatherData().then(result => console.log(result))

const carousel = new Carousel('#forecastSlider')

