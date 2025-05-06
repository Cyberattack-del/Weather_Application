### Weather Dashboard

A Modern weather dashboard built with React.js and the Openweather API. This app allows users to search for the weather a city, view air quality index (AQI) ,a 5-dat weather forecast, and explore the location on an interactive map.

## Features

Weather Information: Displays the current weather conditions (temperature, humidity, weather description, and weather icon).

Air Quality Index (AQI): Displays the air quality status based on the location.

5-Day Weather Forecast: Displays temperature forecasts for the upcoming 7 days.

Interactive Map: Displays the location on a map with a custom marker.

Search Functionality: Users can search for the weather of any city.

### Technologies Used

React.js: Frontend framework for building the UI.

Chart.js: Used for displaying the 7-day weather forecast.

React-Leaflet: Used for displaying the interactive map.

Axios: HTTP client for fetching weather and AQI data from the Open Weather API.

OpenWeather API: Provides weather and air quality data.

### Installation

Clone the repository
git clone https://github.com/your-username/weather -dashboard.git

Install dependencies
npm install

Start the development server
npm start

Visit http://localhost:3000 to view the application.

## How It Works

1. Search for a City: Use the search bar to enter a city name, and the app will fetch the weather data and display it.

2. Weather Info: The app shows temperature, humidity, description, and an icon representing the weather condition.

3. Forecast: A 7-day forecast is displayed as a line chart, showing the daily temperature trend.

4. Air Quality Index: AQI is fetched based on the city's geographical coordinates and displayed with color-coded status (Good, Fair, Moderate, Poor, Very Poor).

5. Weather Map: The map displays the location of the searched city with a custom marker.

## Components

App: Main component that renders the Weather Dashboard UI.

SearchBar: Input field for searching a city.

WeatherInfo: Displays the current weather data.

AQI: Displays the Air Quality Index status.

WeatherMap: Displays a map showing the location of the city.

Forecast: Displays a 7-day temperature forecast using a line chart.

### API Usage

The app makes use of the Open Weather API. You can get your own API key by signing up at OpenWeather.

# API Endpoints Used

Current Weather:

https://api.openweathermap.org/data /2.5/weather?q={city}&appid={API _KEY}&units=metric

Forecast:

https://api.openweathermap.org/data /2.5/forecast?q={city}&appid={API _KEY}&units=metric

Air Quality:

https://api.openweathermap.org/data /2.5/air_pollution?lat={lat}&lon= {lon}&appid={API_KEY}

## Contributing

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Commit your changes.

4. Push your changes to your fork.

5. Submit a pull request.

License

This project is licensed under the MIT License.