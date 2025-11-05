# Weather CLI Tool

A command-line tool that fetches and displays the weather for a given city using the OpenWeatherMap API.

## Installation

1.  Clone the repository:
   
   git clone <repository_url>
   cd weather-cli
   
2.  Install dependencies:
   
   npm install
   

## Configuration

1.  Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
2.  Create a `.env` file in the project root directory.
3.  Add your API key to the `.env` file:
   
   OPENWEATHERMAP_API_KEY=YOUR_API_KEY
   

## Usage


node server.js <city_name>


Example:


node server.js London


## Output

The tool will output the current weather conditions for the specified city, including temperature, humidity, and a description of the weather.

## File Structure


weather-cli/
├── server.js
├── routes/
│   └── weather.js
├── controllers/
│   └── weatherController.js
├── middlewares/
│   └── errorHandler.js
├── utils/
│   └── weatherApi.js
├── .env
├── package.json
├── package-lock.json
└── README.md
