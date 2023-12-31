import {
    d01, n01,
    d02, n02,
    d03, n03,
    d04, n04,
    d09, n09,
    d10, n10,
    d11, n11,
    d13, n13,
    d50, n50,
} from "../assets"
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";

const iconMappings = {
    '01d': d01, '01n': n01,
    '02d': d02, '02n': n02,
    '03d': d03, '03n': n03,
    '04d': d04, '04n': n04,
    '09d': d09, '09n': n09,
    '10d': d10, '10n': n10,
    '11d': d11, '11n': n11,
    '13d': d13, '13n': n13,
    '50d': d50, '50n': n50,
  };

export default function CurrentWeatherCard(props){
    const {
        temp,
        humidity,
        weather,
        windSpeed,
        icon,
        name
    } = props.weather

    return (
        <div className={`bg-indigo-600/10 shadow-inner shadow-indigo-600/50 flex flex-col justify-around items-center w-3/5 p-5 rounded-lg h-2/3 sm:h-full ${name ? "" : "hidden"}`}>
            <img className="scale-150 animate-pulse drop-shadow-2xl bg-white rounded-full" src={iconMappings[icon]} alt="" />
            <div className="flex items-baseline py-2 gap-1">
            <h1 className="text-6xl font-serif sm:text-8xl">{temp}°</h1>
            <h2 className="text-lg sm:text-2xl">{weather}</h2>
            </div>
            <div className="flex gap-5 items-center sm:text-lg">
                    <div className="flex flex-col items-center">
                        <span className="flex items-center gap-1"><WiHumidity className="scale-125"/> {humidity}%</span>
                        <h3>Humidity</h3>
                    </div>               
                    <div className="flex flex-col items-center p-2">
                        <span className="flex items-center gap-1"><BiWind className="scale-125"/> {windSpeed}m/s</span>
                        <h3>Wind</h3>
                    </div>               
            </div>
        </div>
    )
}