'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authorize = require('./auth/authorize');

const PORT = process.env.PORT;

app.use(cors());
app.use(authorize);

app.get('/test', (request, response) => {

  console.log('You made it', request.user);
  response.send('Great work');

});


app.listen(PORT, () => {
  console.log('App is running on port : ' + PORT);
});
