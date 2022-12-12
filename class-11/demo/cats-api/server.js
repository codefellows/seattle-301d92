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

app.listen(PORT, () => {
  console.log('Listening on port : ' + PORT);
});
