
export const editHourlyDate = (hour: string): string => {
  const date = new Date(hour)

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    hour12: true
  }

  return new Intl.DateTimeFormat('en-AU', options).format(date).toUpperCase()
}

export const editDailyDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  }
  return new Date(date).toLocaleDateString('en-GB', options)
}

export const determineWeatherIco = (weatherCode: number): string => {
  let cardImg = ''

  if (weatherCode <= 9) {
    cardImg = 'src/img/sunny.png'
  } else if (weatherCode > 9 && weatherCode < 20) {
    cardImg = 'src/img/sunny_intervals.png'
  } else if (weatherCode >= 20 && weatherCode < 30) {
    cardImg = 'src/img/cloudy_with_light_snow.png'
  } else if (weatherCode >= 30 && weatherCode < 40) {
    cardImg = 'src/img/wind.png'
  } else if (weatherCode >= 40 && weatherCode < 50) {
    cardImg = 'src/img/mist.png'
  } else if (weatherCode >= 50 && weatherCode < 60) {
    cardImg = 'src/img/drizzle.png'
  } else if (weatherCode >= 60 && weatherCode < 70) {
    cardImg = 'src/img/cloudy_with_light_rain.png'
  } else if (weatherCode >= 70 && weatherCode < 80) {
    cardImg = 'src/img/cloudy_with_light_snow.png'
  } else if (weatherCode >= 80 && weatherCode < 90) {
    cardImg = 'src/img/cloudy_with_heavy_rain.png'
  } else if (weatherCode >= 90 && weatherCode < 99) {
    cardImg = 'src/img/thunderstorms.png'
  } else {
    console.log('Error!')
  }

  return cardImg
}

export const determineWindDirection = (windDirection: number): string => {
  let windDir = ''

  if (windDirection >= 340 && windDirection < 20) {
    windDir = 'West'
  } else if (windDirection > 20 && windDirection < 70) {
    windDir = 'North-West'
  } else  if (windDirection > 70 && windDirection < 110) {
    windDir = "North"
  } else  if (windDirection > 110 && windDirection < 160) {
    windDir = "North-East"
  } else  if (windDirection > 160 && windDirection < 200) {
    windDir = "East"
  } else  if (windDirection > 200 && windDirection < 250) {
    windDir = "South-East"
  } else  if (windDirection > 250 && windDirection < 290) {
    windDir = "South"
  } else  if (windDirection > 290 && windDirection < 340) {
    windDir = "South-West"
  } else (console.log('Error!'))

  return windDir
}

export const editTime = (date: string): string => {
  const time = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    day: undefined,
    hour: 'numeric',
    minute: 'numeric'
  }
  return new Intl.DateTimeFormat('en-AU', options).format(time).toUpperCase()
}
