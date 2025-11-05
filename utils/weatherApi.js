const axios = require('axios');

const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

exports.fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = response.data;

    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    return {
      city: data.name,
      description: weatherDescription,
      temperature: temperature,
      humidity: humidity,
      windSpeed: windSpeed,
      country: data.sys.country
    };
  } catch (error) {
    throw new Error(`OpenWeatherMap API error: ${error.response ? error.response.status : error.message}`);
  }
};