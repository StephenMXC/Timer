  export const getWeather = async ({city}) => {
    // Using a try-catch block for error handling because fetch can fail and throw an error. (e.g., network issues)
    try {     
      // here there's an await keyword, which does the following:
      // It pauses the execution of the getWeather function until the fetch promise resolves. This is because fetch is an 
      // asynchronous operation that takes time to complete. So our code needs to wait for the response before proceeding.
      // we cannot use fetch without await inside an async function because fetch returns a "promise" which is 
      // a placeholder for a future value, and we need to wait for that promise to resolve to get the actual response data. 
      // It is resolved when the data is fully fetched from the API. When it is fetched, the promise resolves to a Response object.
      // This is the object that contains the data we requested from the API.
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_WEATHER_API_KEY
        }&query=${city}`
      );
      const json = await res.json(); // this is also asynchronous, so we use await again to wait for the JSON parsing to complete.

      // Structure the data we need from the API response

      const structured = {
        city: json.location.name, // taking the city name from the response
        country: json.location.country, // country name
        temperature: json.current.temperature, // temperature....
        description: json.current.weather_descriptions[0], 
        icon: json.current.weather_icons[0],
        humidity: json.current.humidity,
        windSpeed: json.current.wind_speed,
      }; // the current keyword means we are accessing the current weather data from the API response. the specific 
         // fields like temperature, weather_descriptions, weather_icons, humidity, and wind_speed are all part of the
         // current weather data provided by the API.

      return structured; // then we set the structured data to our state
    } // now to catch any errors that might occur during the fetch operation. 
     catch (err) {
      console.error("Fetch error:", err); // this just logs the error to the console for debugging purposes. Prevents
      alert ("Error: ", err.message)
      // the app from crashing and helps identify issues. very basic error handling.
    } 
  }