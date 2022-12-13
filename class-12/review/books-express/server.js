'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const BooksModel = require('./models/Books.js');
const app = express();

const PORT = process.env.PORT || 3001

// this is not required to connect.
const dataBase = mongoose.connection;
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log('We are connected');
});

app.use(cors());

app.get('/books', async (request, response) => {

  // fetch all books from our DB
  let books = await BooksModel.find();
  response.send(books);

});

// use the books model to create a new book
app.post('/books', (request, response) => {

});

// use the books model to delete a book using the id.
app.delete('/books/:id', (request, response) => {

});

app.listen(PORT, () => {
  console.log('Server is listening! : ' + PORT);
});
