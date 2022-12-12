'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
// use our Cats model to create a couple cats
const Cats = require('./models/Cats.js');
const MONGODB_URL = process.env.MONGODB_URL;

// provide a connection string, connect before we try and perform CRUD.
mongoose.connect(MONGODB_URL);

// "map" a js Object to our mongo db, this performs the "create" in CRUD.
Cats.create({
  name: 'Mark',
  age: 2,
  color: "black",
  gender: 'male',
  favoriteActivity: 'Eating Lasagna'
})// this is async
.then(result => {
  console.log('Heres our cat!', result);
})
.catch(err => {
  console.log('Ugh oh, ', err);
});
