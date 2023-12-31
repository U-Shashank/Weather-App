import { useRef, useEffect } from "react"
import { CiSearch } from "react-icons/ci";

export default function SearchBox(props) {
    const { getWeather, weather } = props
    const inputRef = useRef(null)

    useEffect(() => {
        weather.name ? inputRef.current.value = "" : inputRef.current.focus()
    }, [weather])

    const handleClick = () => {
        let city = inputRef.current.value
        getWeather(city)
    }



    return (
        <div className=" flex flex-col justify-between items-center p-5 h-1/4 w-3/4">
            <div className="flex justify-between items-center hover:shadow-xl p-2 bg-white rounded-full sm:w-[300px]">
                <input className="bg-trasparent text-gray-600 font-bold text-md z-1 p-1 text-center focus:outline-none w-full"
                    type="text"
                    ref={inputRef}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleClick()
                    }}
                />
                <CiSearch onClick={handleClick} className="text-gray-600 font-bold scale-150 rounded-full cursor-pointer" />
            </div>
            {
                weather.error
                    ?
                    <h1 className="text-2xl font-serif">Please check for any typos</h1>
                    :
                    <h1 className="text-6xl font-monospace">{weather.name.toUpperCase()}</h1>
            }
        </div>
    )
}