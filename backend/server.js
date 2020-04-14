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

// app.use('/', express.static(__dirname + '/dist/intersky'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));