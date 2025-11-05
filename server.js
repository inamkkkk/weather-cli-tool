require('dotenv').config();
const weatherController = require('./controllers/weatherController');

const city = process.argv[2];

if (!city) {
  console.error('Please provide a city name as an argument.');
  process.exit(1);
}

weatherController.getWeather(city)
  .then(weatherData => {
    console.log(JSON.stringify(weatherData, null, 2));
  })
  .catch(error => {
    console.error(JSON.stringify({ error: error.message }, null, 2));
    process.exit(1);
  });