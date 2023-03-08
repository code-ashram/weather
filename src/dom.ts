import { getCurrentWeather } from './api'

const city = document.getElementById('city') as HTMLDivElement
const cityName = city.querySelector('.city__name') as HTMLParagraphElement
const cityTemperature = city.querySelector('.city__current-temperature') as HTMLParagraphElement
const cityWeatherStatus = city.querySelector('.city__weather-status') as HTMLParagraphElement
const cityMaxTemperature = city.querySelector('.city__max-t') as HTMLParagraphElement
const cityMinTemperature = city.querySelector('.city__min-t') as HTMLParagraphElement

export const showCurrentCityWeather = () => {

  getCurrentWeather().then(response => {
    cityTemperature.textContent = `${Math.round(response.current_weather.temperature)}°`

    switch (response.current_weather.weathercode) {
      case 0:
        cityWeatherStatus.textContent = 'Cloud development not observed or not observable'
        break
      case 1:
        cityWeatherStatus.textContent = 'Clouds generally dissolving or becoming less developed'
        break
      case 2:
        cityWeatherStatus.textContent = 'State of sky on the whole unchanged'
        break
      case 3:
        cityWeatherStatus.textContent = 'Clouds generally forming or developing'
        break
      case 4:
        cityWeatherStatus.textContent = 'Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke or volcanic ashes'
        break
      case 5:
        cityWeatherStatus.textContent = 'Haze'
        break
      case 6:
        cityWeatherStatus.textContent = 'Widespread dust in suspension in the air, not raised by wind at or near the station at the time of observation'
        break
      case 7:
        cityWeatherStatus.textContent = 'Dust or sand raised by wind at or near the station at the time of observation, but no well developed dust whirl(s) or sand whirl(s), and no duststorm or sandstorm seen'
        break
      case 8:
        cityWeatherStatus.textContent = 'Well developed dust whirl(s) or sand whirl(s) seen at or near the station during the preceding hour or at the time ot observation, but no duststorm or sandstorm'
        break
      case 9:
        cityWeatherStatus.textContent = 'Duststorm or sandstorm within sight at the time of observation, or at the station during the preceding hour'
        break
      case 10:
        cityWeatherStatus.textContent = 'Mist'
        break
      case 11:
        cityWeatherStatus.textContent = 'Patches of shallow fog or ice fog at the station, whether on land or sea, not deeper than about 2 metres on land or 10 metres at sea'
        break
      case 12:
        cityWeatherStatus.textContent = 'More or less continuous shallow fog or ice fog at the station, whether on land or sea, not deeper than about 2 metres on land or 10 metres at sea'
        break
      case 13:
        cityWeatherStatus.textContent = 'Lightning visible, no thunder heard'
        break
      case 14:
        cityWeatherStatus.textContent = 'Precipitation within sight, not reaching the ground or the surface of the sea'
        break
      case 15:
        cityWeatherStatus.textContent = 'Precipitation within sight, reaching the ground or the surface of the sea, but distant (i.e. estimated to be more than 5 km) from the station'
        break
      case 16:
        cityWeatherStatus.textContent = 'Precipitation within sight, reaching the ground or the surface of the sea, near to, but not at the station'
        break
      case 17:
        cityWeatherStatus.textContent = 'Thunderstorm, but no precipitation at the time of observation'
        break
      case 18:
        cityWeatherStatus.textContent = 'Squalls at or within sight of the station during the preceding hour or at the time of observation'
        break
      case 19:
        cityWeatherStatus.textContent = 'Funnel cloud(s)** at or within sight of the station during the preceding hour or at the time of observation'
        break
      case 20:
        cityWeatherStatus.textContent = 'Drizzle (not freezing) or snow grains not falling as shower(s)'
        break
      case 21:
        cityWeatherStatus.textContent = 'Rain (not freezing) not falling as shower(s)'
        break
      case 22:
        cityWeatherStatus.textContent = 'Snow not falling as shower(s)'
        break
      case 23:
        cityWeatherStatus.textContent = 'Rain and snow or ice pellets, type (a) not falling as shower(s)'
        break
      case 24:
        cityWeatherStatus.textContent = 'Freezing drizzle or freezing rain not falling as shower(s)'
        break
      case 25:
        cityWeatherStatus.textContent = 'tShower(s) of rain'
        break
      case 26:
        cityWeatherStatus.textContent = 'Shower(s) of snow, or of rain and snow'
        break
      case 27:
        cityWeatherStatus.textContent = 'Shower(s) of hail*, or of rain and hail*'
        break
      case 28:
        cityWeatherStatus.textContent = 'Fog or ice fog'
        break
      case 29:
        cityWeatherStatus.textContent = 'Thunderstorm (with or without precipitation)'
        break
      case 30:
        cityWeatherStatus.textContent = 'Slight or moderate duststorm or sandstorm - has decreased during the preceding hour'
        break
      case 31:
        cityWeatherStatus.textContent = 'Slight or moderate duststorm or sandstorm - no appreciable change during the preceding hour'
        break
      case 32:
        cityWeatherStatus.textContent = 'Slight or moderate duststorm or sandstorm - has begun or has increased during the preceding hour'
        break
      case 33:
        cityWeatherStatus.textContent = 'Severe duststorm or sandstorm - has decreased during the preceding hour'
        break
      case 34:
        cityWeatherStatus.textContent = 'Severe duststorm or sandstorm - no appreciable change during the preceding hour'
        break
      case 35:
        cityWeatherStatus.textContent = 'Severe duststorm or sandstorm - has begun or has increased during the preceding hour'
        break
      case 36:
        cityWeatherStatus.textContent = 'Slight or moderate blowing snow generally low (below eye level)'
        break
      case 37:
        cityWeatherStatus.textContent = 'Heavy drifting snow generally low (below eye level)'
        break
      case 38:
        cityWeatherStatus.textContent = 'Slight or moderate blowing snow generally high (above eye level)'
        break
      case 39:
        cityWeatherStatus.textContent = 'Heavy drifting snow generally high (above eye level)'
        break
      case 40:
        cityWeatherStatus.textContent = 'Fog or ice fog at a distance at the time of observation, but not at the station during the preceding hour, the fog or ice fog extending to a level above that of the observer'
        break
      case 41:
        cityWeatherStatus.textContent = 'Fog or ice fog in patches'
        break
      case 42:
        cityWeatherStatus.textContent = 'Fog or ice fog, sky visible has become thinner during the preceding hour'
        break
      case 43:
        cityWeatherStatus.textContent = 'Fog or ice fog, sky invisible has become thinner during the preceding hour'
        break
      case 44:
        cityWeatherStatus.textContent = 'Fog or ice fog, sky visible no appreciable change during the preceding hour'
        break
      case 45:
        cityWeatherStatus.textContent = 'Fog or ice fog, sky invisible no appreciable change during the preceding hour'
        break
      case 46:
        cityWeatherStatus.textContent = 'Fog or ice fog, sky visible has begun or has become thicker during the preceding hour'
        break
      case 47:
        cityWeatherStatus.textContent = 'Fog or ice fog, sky invisible has begun or has become thicker during the preceding hour'
        break
      case 48:
        cityWeatherStatus.textContent = 'Fog, depositing rime, sky visible'
        break
      case 49:
        cityWeatherStatus.textContent = 'Fog, depositing rime, sky invisible'
        break
      case 50:
        cityWeatherStatus.textContent = 'Drizzle, not freezing, intermittent slight at time of observation'
        break
      case 51:
        cityWeatherStatus.textContent = 'Drizzle, not freezing, continuous slight at time of observation'
        break
      case 52:
        cityWeatherStatus.textContent = 'Drizzle, not freezing, intermittent moderate at time of observation'
        break
      case 53:
        cityWeatherStatus.textContent = 'Drizzle, not freezing, continuous moderate at time of observation'
        break
      case 54:
        cityWeatherStatus.textContent = 'Drizzle, not freezing, intermittent heavy (dence) at time of observation'
        break
      case 55:
        cityWeatherStatus.textContent = 'Drizzle, not freezing, continuous heavy (dence) at time of observation'
        break
      case 56:
        cityWeatherStatus.textContent = 'Drizzle, freezing, slight'
        break
      case 57:
        cityWeatherStatus.textContent = 'Drizzle, freezing, moderate or heavy (dence)'
        break
      case 58:
        cityWeatherStatus.textContent = 'Drizzle and rain, slight'
        break
      case 59:
        cityWeatherStatus.textContent = 'Drizzle and rain, moderate or heavy'
        break
      case 60:
        cityWeatherStatus.textContent = 'Rain, not freezing, intermittent slight at time of observation'
        break
      case 61:
        cityWeatherStatus.textContent = 'Rain, not freezing, continous slight at time of observation'
        break
      case 62:
        cityWeatherStatus.textContent = 'Rain, not freezing, intermittent moderate at time of observation'
        break
      case 63:
        cityWeatherStatus.textContent = 'Rain, not freezing, continuous moderate at time of observation'
        break
      case 64:
        cityWeatherStatus.textContent = 'Rain, not freezing, intermittent heavy at time of observation'
        break
      case 65:
        cityWeatherStatus.textContent = 'Rain, not freezing, continuous heavy at time of observation'
        break
      case 66:
        cityWeatherStatus.textContent = 'Rain, freezing, slight'
        break
      case 67:
        cityWeatherStatus.textContent = 'Rain, freezing, moderate or heavy'
        break
      case 68:
        cityWeatherStatus.textContent = 'Rain, or drizzle and snow, slight'
        break
      case 69:
        cityWeatherStatus.textContent = 'Rain, or drizzle and snow, moderate or heavy'
        break
      case 70:
        cityWeatherStatus.textContent = 'Intermittent fall of snow flakes slight at time of observation'
        break
      case 71:
        cityWeatherStatus.textContent = 'Continuous fall of snow flakes slight at time of observation'
        break
      case 72:
        cityWeatherStatus.textContent = 'Intermittent fall of snow flakes moderate at time of observation'
        break
      case 73:
        cityWeatherStatus.textContent = 'Continuous fall of snow flakes moderate at time of observation'
        break
      case 74:
        cityWeatherStatus.textContent = 'Intermittent fall of snow flakes heavy at time of observation'
        break
      case 75:
        cityWeatherStatus.textContent = 'Continuous fall of snow flakes heavy at time of observation'
        break
      case 76:
        cityWeatherStatus.textContent = 'Ice prisms (with or without fog)'
        break
      case 77:
        cityWeatherStatus.textContent = 'Snow grains (with or without fog)'
        break
      case 78:
        cityWeatherStatus.textContent = 'Isolated starlike snow crystals (with or without fog)'
        break
      case 79:
        cityWeatherStatus.textContent = 'Ice pellets, type (a)'
        break
      case 80:
        cityWeatherStatus.textContent = 'Rain shower(s), slight'
        break
      case 81:
        cityWeatherStatus.textContent = 'Rain shower(s), moderate or heavy'
        break
      case 82:
        cityWeatherStatus.textContent = 'Rain shower(s), violent'
        break
      case 83:
        cityWeatherStatus.textContent = 'Shower(s) of rain and snow mixed, slight'
        break
      case 84:
        cityWeatherStatus.textContent = 'Shower(s) of rain and snow mixed, moderate or heavy'
        break
      case 85:
        cityWeatherStatus.textContent = 'Snow shower(s), slight'
        break
      case 86:
        cityWeatherStatus.textContent = 'Snow shower(s), moderate or heavy'
        break
      case 87:
        cityWeatherStatus.textContent = 'Shower(s) of snow pellets or ice pellets, type (b), with or without rain or rain and snow mixed - slight'
        break
      case 88:
        cityWeatherStatus.textContent = 'Shower(s) of snow pellets or ice pellets, type (b), with or without rain or rain and snow mixed - moderate or heavy'
        break
      case 89:
        cityWeatherStatus.textContent = 'Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder - slight'
        break
      case 90:
        cityWeatherStatus.textContent = 'Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder - moderate or heavy'
        break
      case 91:
        cityWeatherStatus.textContent = 'Slight rain at time of observation - thunderstorm during the preceding hour but not at time of observation'
        break
      case 92:
        cityWeatherStatus.textContent = 'Moderate or heavy rain at time of observation - thunderstorm during the preceding hour but not at time of observation'
        break
      case 93:
        cityWeatherStatus.textContent = 'Slight snow, or rain and snow mixed or hail** at time of observation - thunderstorm during the preceding hour but not at time of observation'
        break
      case 94:
        cityWeatherStatus.textContent = 'Moderate or heavy snow, or rain and snow mixed or hail** at time of observation - thunderstorm during the preceding hour but not at time of observation'
        break
      case 95:
        cityWeatherStatus.textContent = 'Thunderstorm, slight or moderate, without hail**, but with rain and/or snow at time of observation - thunderstorm at time of observation'
        break
      case 96:
        cityWeatherStatus.textContent = 'Thunderstorm, slight or moderate, with hail** at time of observation - thunderstorm at time of observation'
        break
      case 97:
        cityWeatherStatus.textContent = 'Thunderstorm, heavy, without hail**, but with rain and/or snow at time of observation - thunderstorm at time of observation'
        break
      case 98:
        cityWeatherStatus.textContent = 'Thunderstorm combined with duststorm or sandstorm at time of observation - thunderstorm at time of observation'
        break
      case 99:
        cityWeatherStatus.textContent = ''
        break
    }

  })

}


