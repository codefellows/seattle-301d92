'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const PORT = process.env.PORT;

// singleton
const app = express(); // what type of thing is app?
app.use(cors());

app.get('/weather', async (request, response, next) => {

  let lat = request.query.lat;
  let lon = request.query.lon;

  // what location or query to I need to make for weatherbit API?
  let url = `https://api.weatherbit.io/v2.0/current?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;

  let weatherResponse = await axios({
    method: "GET",
    url: url,
  });
  let weatherData = weatherResponse.data.data;
  response.send(weatherData);

  // what do I send back to the client.
});

class Forecast {
  constructor(weather) {
    // attach to Forecast object as necessary
  }
}

app.listen(PORT, () => {
  console.log('Server is running on port :' + PORT);
});
