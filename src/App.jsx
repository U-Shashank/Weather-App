import { useState } from 'react'
import SearchBox from './components/SearchBox'
import CurrentWeatherCard from './components/CurrentWeatherCard'

function App() {

  const [weather, setWeather] = useState({
    temp: "",
    weather: "",
    windSpeed: "",
    humidity: "",
    icon: "",
    name: "",
    error: ""
  })

  const getWeather = async (city) => {
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
      const weatherData = await response.json()
      const {main, weather, wind, name} = weatherData
      setWeather({
        temp: main.temp,
        weather: weather[0].description,
        windSpeed: wind.speed,
        humidity: main.humidity,
        icon: weather[0].icon,
        name: name,
        error: ""
      })
    } catch(error) {
      console.log(error)
      setWeather({
        temp: "",
        weather: "",
        windSpeed: "",
        humidity: "",
        icon: "",
        name: "",
        error: error
      })
    }
  }

  return (
    <div className="text-white bg-gradient-to-tl from-sky-500/20 to-indigo-500 w-screen h-screen flex flex-col justify-around items-center py-5 sm:flex-row-reverse sm:px-5">
      <SearchBox getWeather = {getWeather} weather = {weather}/>
      <CurrentWeatherCard weather = {weather}/>
    </div>
  )
}

export default App
