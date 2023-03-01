// @ts-ignore
import * as bootstrap from 'bootstrap'
import './style.scss'
import { Carousel } from 'bootstrap'
import {getWeatherData} from './api'



getWeatherData().then(result => console.log(result))

const myCarouselElement = new Carousel('#forecastSlider')

let carouselWidth = $('.carousel-inner')[0].scrollWidth
let cardWidth = $('.carousel-item').width()

let scrollPosition = 0

$('.carousel').carousel({
  touch: true // default
})
$('.carousel-control-next').on('click', function() {
  if(scrollPosition < carouselWidth - (cardWidth * 5)) {
    console.log('next')
    scrollPosition = scrollPosition + cardWidth
    $('.carousel-inner').animate({scrollLeft: scrollPosition}, 300)
  }
})

$('.carousel-control-prev').on('click', function() {
  if(scrollPosition > 0) {
    console.log('prev')
    scrollPosition = scrollPosition - cardWidth
    $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600)
  }
})


