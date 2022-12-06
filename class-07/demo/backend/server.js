'use strict';

// loads all the express code into this file.
const express = require('express');
const cors = require('cors');
const db = require('./data/pokemon.json');

// this is a singleton, meaning there can only one!
const app = express(); // starts the framework, now we have to configure the object the framework returns.
app.use(cors());

// specify a METHOD,  provide an endpoint for the URL
app.get('/pokemon', (request, response, next) => {
  // do something in response!
  console.log(request.query, db);
  if (!request.query.name) {
    next('Please provide a pokemon name!'); // to handle an error on the server, pass any value into next.
    // specific error code
    // response.status(400).send('Bad Request');
  } else {
    // find our pokemon
    let pokemon = {};
    for (let i = 0; i < db.length; i++) {
      if (request.query.name === db[i].name) {
        pokemon = db[i];
      }
    }

    console.log(`You've hit the pokemon route! Looks like your are looking for ${request.query.name}`);
    response.send(pokemon);
  }
});

// catch all requests that don't match a METHOD or URL above.
app.use('*', (request, response, next) => {
  response.status(404).send('Invalid Request, route not found');
});

app.listen(3001);
