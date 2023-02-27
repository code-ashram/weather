// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'

import {getWeatherData} from './api'

getWeatherData().then(result => console.log(result))
