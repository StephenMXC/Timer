  export const getWeather = async (city) => {
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
      const json = await res.json(); 
      // we use await with fetch to wait for the data to be fetched from the API, and then we use await again to wait for that
      // data to be parsed into JSON format.

      // Structure the data we need from the API response.
      // So this is a varible named "structured" that holds an object with specific weather details extracted from the API response. Is it
      // a dictionary, you may ask? Yes, it is! Because in JavaScript, objects are collections of key-value pairs, similar to dictionaries in other programming languages, like Python.
      // So it is an object that contains key-value pairs representing weather information.
      const structured = {
        city: json.location.name, // taking the city name from the response of the API.
        country: json.location.country, // country name
        temperature: json.current.temperature, // temperature....
        description: json.current.weather_descriptions[0], 
        icon: json.current.weather_icons[0],
        humidity: json.current.humidity,
        windSpeed: json.current.wind_speed,
        time: json.location.localtime,
        feelslike: json.current.feelslike,
      }; // the current keyword means we are accessing the current weather data from the API response. the specific 
         // fields like temperature, weather_descriptions, weather_icons, humidity, and wind_speed are all part of the
         // current weather data provided by the API.

      return structured; // then we set the structured data to our state

      // In summary, this try block attempts to fetch weather data from an external API, processes
      // the response to extract relevant weather information, and returns it in a structured format.
    } // now to catch any errors that might occur during the fetch operation. 
     catch (err) {
      console.error("Fetch error:", err); // this just logs the error to the console for debugging purposes. Prevents
      alert ("Error: ", err.message)
      // the app from crashing and helps identify issues. very basic error handling.
    } // This catch block simply logs any errors that occur during the fetch operation to the console.
  }// so when this function is called, it will return a promise that resolves to the structured weather data object. Without this function, 
  // we would have to write the fetch logic directly in our component, which would make the component code more complex and harder to read. But the
  // main function of this function is to fetch weather data from an external API, process that data
  // to extract relevant information, and return it in a structured format for use in the application.