'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
let app = express();
app.use(cors());
// const weatherData = require('./data/weather.json');
const PORT = process.env.PORT;

// const axios = require('axios');
// const theWeather = require('./modules/weather');
// const theMovie = require('./modules/movie');

let weather = require('./Weather');
app.get('/Weather', weather); // this is our API method, and endpoint,  this allows any client to make a GET to /weather, when they do we run all the code in ./Weather.js


let movie = require('./Movie');
app.get('/movies', movie);

/**
 * button.addEventListener('click', (e => console.log('button clicked')))
 */


app.get('*', (request, response, next) => {
  response.send('Invalid request'); // be default this will have a status 200, and response with "invalid request".
});


// will trigger on any method, instead of just 'get' like above.
app.use('*', (request, response) => {
  response.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
