
import {mainApp, getWeatherInfo, getCity} from './weather.js'


const maindiv = document.querySelector('.main-div')
const form = document.querySelector('.form')
const weatherInfoEl = document.querySelector('.weatherinfo')
const temperatureEl = document.querySelector('.temperature')
const cityNameEl = document.querySelector('.h2heading')
const img = document.querySelector('.img')



// const updateUI = function(cityInfo, weatherData) {
//     weatherInfoEl.textContent = weatherData[0].WeatherText
//     temperatureEl.textContent = `${weatherData[0].Temperature.Metric.Value}°C`
//     cityNameEl.textContent = `${cityInfo[0].EnglishName}`
// }

// const App = async function (city) {
//     const cityInfo = await getCity(city)
//     const weatherData = await getWeatherInfo(cityInfo[0].Key)

//     return {
//         cityInfo,
//         weatherData,
//     }
// }




form.addEventListener('submit', function(e) {
    e.preventDefault()
    const city = form.location.value.trim()

    // running main app
    mainApp(city)



})