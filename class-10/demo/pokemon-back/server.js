'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const handlePokemon = require('./pokemon.js');
const PORT = process.env.PORT;

app.use(cors());

app.get('/pokemon', handlePokemon);

app.use('*', (request, response) => {
  response.status(404).send('We can only response to GET on /pokemon');
});

app.listen(PORT, () => {
  console.log('listening on port : ' + PORT);
});
