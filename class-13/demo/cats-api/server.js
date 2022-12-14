'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Cats = require('./models/Cats.js');
const app = express();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

app.use(express.json()); // allows clients to attach JSON data to the request.
app.use(cors());

app.get('/cats', async (request, response) => {

  let results = [];

  if (request.query.name) {
    let name = request.query.name;
    results = await Cats.find({ name: name });
  } else {
    results = await Cats.find();
  }

  response.send(results);
});

// client(React Application) should send the request
app.post('/cats', async (request, response) => {

  console.log(request.body); // any JSON (or urlencoded data).
  let newCat = await Cats.create(request.body);

  response.send(newCat);
});

// client should send a request, with a catID on the request object
app.delete('/cats/:id', async (request, response) => {

  // request parameter (variable that you define here ion the route)
  let id = request.params.id; // this property should match whatever is after your colon in the route endpoint.
  console.log('Here is the value of id: ', id);

  let deletedCat = await Cats.findByIdAndDelete(id);

  response.send(deletedCat);
});

app.put('/cats/:id', async (request, response) => {

  let id = request.params.id;
  // find a cat in the database, and update it's values
  let updatedCat = await Cats.findOneAndUpdate({ _id: id}, request.body);
  console.log(updatedCat);
  response.send(updatedCat);
});

app.listen(PORT, () => {
  console.log('Listening on port : ' + PORT);
});
