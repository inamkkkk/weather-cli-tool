const weatherApi = require('../utils/weatherApi');

exports.getWeather = async (city) => {
  try {
    const weatherData = await weatherApi.fetchWeather(city);
    return weatherData;
  } catch (error) {
    throw new Error(`Failed to fetch weather for ${city}: ${error.message}`);
  }
};