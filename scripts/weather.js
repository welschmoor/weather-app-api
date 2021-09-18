// API KEY 3INk2TGKq2JtfxuxRyyuJWcy0C7VQAvm
// City Code Moscow: 294021

const api_key = 'w9tL0yb1GGJ3LPHYpIg5ky6vulU90D2A'

export const getCity = async function(city) {
    try{
        const request = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api_key}&q=${city.toLowerCase()}`)
        if (!request.ok) throw new Error('Could not get city data from server.')
        const data = await request.json()
        console.log('getCity: ', data[0])
        return data
    } catch(error) {
        console.error(error)
    }
}


export const getWeatherInfo = async function(cityCode) {
    try {
        const request = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${api_key}`)
        if (!request.ok) throw new Error('Could not get weather data from server.')
        const data = await request.json()
        console.log('getWeatherInfo', data)
        return data
    } catch(error) {
        console.error(error)
    }     
}


const weatherInfoEl = document.querySelector('.weatherinfo')
const temperatureEl = document.querySelector('.temperature')
const cityNameEl = document.querySelector('.h2heading')
const img = document.querySelector('.img')
const iconimg = document.querySelector('.iconimg')
img.src = '/img/day.svg'
iconimg.src = `/img/icons/1.svg`


export const mainApp = function(city) {
    getCity(city).then(data => {
        const cityCode = data[0].Key
        cityNameEl.textContent = data[0].EnglishName
        return getWeatherInfo(cityCode)
    }).then(data => {
        console.log('mainApp:', data)
        console.log('mainApp:', data[0].WeatherText)

        weatherInfoEl.textContent = data[0].WeatherText
        temperatureEl.textContent = `${data[0].Temperature.Metric.Value}°C`
        if (data[0].IsDayTime) {
            img.src = '/img/day.svg'
        } else {
            img.src = '/img/night.svg'
        }
        iconimg.src = `/img/icons/${data[0].WeatherIcon}.svg`

    })
}
// mainApp()


