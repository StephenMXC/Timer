import { useState } from "react";
import "./Weather.css";
import { getWeather } from "./getWeather.js";
import {WEATHER_API_DATA }from "./weatherConstant"

// Weather component to fetch and display weather info.
export default function Weather() {
  const [city, setCity] = useState("jeddah"); // State for the city input
  const [weatherData, setWeatherData] = useState(WEATHER_API_DATA); // State for the fetched weather weatherData

  // Fetch weather on first load only
  // useEffect(() => {
  //   const apiData = getWeather(city);
  //   setWeatherData(apiData)
  // },[]); // empty array → only runs once

  // // Fetch weather only when user clicks the button
  const handleWeatherApi = () => {
  //   const apiData = getWeather(city);
  //   setWeatherData(apiData)
  };

  console.log(WEATHER_API_DATA);

  // finally we return the JSX to render the component.
  return (
    
    <div className="component-background">
      <div className="header">
        <h1 className="header-title"></h1>
      </div>
      <div className="weather-card">
        <input
          className="weather-input"
          value={city}
          onChange={(e) => setCity(e.target.value)} // input field to enter city name. setCity takes as input "e.target.value" 
          // which is the current value of the input field. "e" is the event object that is automatically passed to the onChange handler.
          // "target" refers to the element that triggered the event (in this case, the input field),
          //  and "value" is the current text inside that input field.
          placeholder="Enter city"
        />
        <button className="weather-button" onClick={handleWeatherApi}>Get weather</button>

        {weatherData && (
          <div className="weather-info">
            <h2 className="weather-location">
              {weatherData.city}, {weatherData.country}
            </h2>

            <p className="weather-detail">Temperature: {weatherData.temperature}°C</p>
            <p className="weather-detail">Condition: {weatherData.description}</p>
            <p className="weather-detail">Humidity: {weatherData.humidity}%</p>
            <p className="weather-detail">Wind: {weatherData.windSpeed} km/h</p>
          </div>
        )}
      </div>
    </div>

  );
}
// TODO:
// 1. use "https://stitch.withgoogle.com/projects/2864440562293881545?pli=1"
// as reference to the weather app design.
// 2. Add a header and a footer.
// 3. use Cards for the body parts.
// 4. and the footer parts.
// 5. if you must, use icons from "https://react-icons.github.io/react-icons/"
// 6. use colors appropriately.
// 7. Make it conform to the json data from the weather api.
// 