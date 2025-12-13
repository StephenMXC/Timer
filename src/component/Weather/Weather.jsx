import { useState } from "react";
import "./Weather.css";
import { getWeather } from "./getWeather.js";
import { WEATHER_API_DATA } from "./weatherConstant"
import { FaSearch } from "react-icons/fa";
import { GiFog } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";

// Weather component to fetch and display weather info.
export default function Weather() {
  const [city, setCity] = useState("jeddah"); // State for the city input
  const [weatherData, setWeatherData] = useState(null); // State for the fetched weather weatherData

  // Fetch weather on first load only
  // useEffect(() => {
  //   const apiData = getWeather(city);
  //   setWeatherData(apiData)
  // }, []); // empty array → only runs once

  // Get current date and time in the specified city's timezone
  const getCityTime = (timezoneOffset) => {
    const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
    return new Date(utc + timezoneOffset * 1000);
  };

  // // Fetch weather only when user clicks the button
  const handleWeatherApi = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    } //the following is embedded in a try-catch block to handle potential errors during the async operation.
    try {
      const apiData = await getWeather(city);// getWeather(city) holds a promise, which is resolved and held in apiData.
      if (apiData) setWeatherData(apiData); // Then we set the weatherData state with the result.
    } catch (error) {
      alert("Failed to fetch the weather.");
    }
  };

  console.log(WEATHER_API_DATA);

  // finally we return the JSX to render the component.
  return (
    <div className="component-background"> {/* Overall background for the component. It's the parent element, as needed by jsx. */}
      <header className="header">
        <h1 className="header-title"><GiFog size={28} color="#ffff00" /> Cyberweather</h1>
        <div className="header-controls">
          <input
            className="weather-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <button className="weather-button" onClick={handleWeatherApi}>
            <FaSearch size={16} color="#110186ff" />
            <p>Get Weather</p>
          </button>
        </div>
      </header>

      <main className="body">
        <div className="weather-grid">

          <div className="top-row">

            <div className="temperature-card">
              {weatherData && (
                <div className="weather-info">
                  <h2 className="weather-location">
                    {weatherData.city}, {weatherData.country}
                  </h2>
                  <h2 className="time">
                    {weatherData.time}
                  </h2>

                  <h2 className="weather-temp"> <FaTemperatureHigh color= "#03aad7ed"/> {weatherData.temperature}°C</h2>

                </div>
              )}
            </div>

            <div className="right-column">
              <div className="humidity-card">
                {weatherData && (
                  <div className="weather-info">

                    <h2 className="weather-location">Humidity: {weatherData.humidity}%</h2>
                  </div>
                )}
              </div>

              <div className="feelslike-card">
                {weatherData && (
                  <div className="weather-info">

                    <h2 className="weather-location">Feels like {weatherData.feelslike}°C</h2>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div className="bottom-row">

            <div className="conditions-card">
              {weatherData && (
                <div className="weather-info">

                  <h2 className="weather-detail">Condition: {weatherData.description}</h2>

                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Cyberweather. All rights reserved.</p>
      </footer>
    </div>
  );
}
