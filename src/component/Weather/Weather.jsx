import { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  async function getWeather() {
    try {
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_WEATHER_API_KEY
        }&query=${city}`
      );
      const json = await res.json();

      const structured = {
        city: json.location.name,
        country: json.location.country,
        temperature: json.current.temperature,
        description: json.current.weather_descriptions[0],
        icon: json.current.weather_icons[0],
        humidity: json.current.humidity,
        windSpeed: json.current.wind_speed,
      };

      setData(structured);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  return (
    <div className="component-background">
      <div className="weather-card">
        <input
          className="weather-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button className="weather-button" onClick={getWeather}>Get weather</button>

        {data && (
          <div className="weather-info">
            <h2 className="weather-location">
              {data.city}, {data.country}
            </h2>

            <p className="weather-detail">Temperature: {data.temperature}°C</p>
            <p className="weather-detail">Condition: {data.description}</p>
            <p className="weather-detail">Humidity: {data.humidity}%</p>
            <p className="weather-detail">Wind: {data.windSpeed} km/h</p>
          </div>
        )}
      </div>
    </div>

  );
}
