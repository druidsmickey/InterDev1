const express = require('express');
const cors = require('cors');
// const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.set('jwt-secret', config.secret);

app.use('/api', require('./routes/api'));

mongoose.connect(config.mongodbUri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

app.listen(8080, () => {
  console.log('Listening o port 8080');
});

// const express = require("express");
// const app = express();
// const initRoutes = require("./routes/web");

// app.use(express.urlencoded({ extended: true }));
// initRoutes(app);

// let port = 3000;
// app.listen(port, () => {
//   console.log(`Running at localhost:${port}`);
// });