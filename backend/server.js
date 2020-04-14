import express from 'express';
import cors from 'cors';
// import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import CCTVs from './models/cctv.js';
import Brands from './models/brands.js';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

router.route('/brand').get((req, res) => {
  Brands.find({}, (err, docs) => {
    if (err)
      console.error(err);
    else
      res.json(docs);
  });
});

router.route('/cctv').get((req, res) => {
  CCTVs.find({}, (err, docs) => {
    if (err)
      console.error(err);
    else
      res.json(docs);
  });
});

router.route('/addcctvs').post((req, res) => {
  var param = new CCTVs(req.body);
  param.save((err, obj) => {
    if(err)
      console.error(err);
    else
      console.log('obj', obj);
      res.status(200).json(obj);
  });
});

// router.route('/*').get((req, res) => {
//   res.sendFile(__dirname + '/dist/intersky/index.html');
// });

app.use('/', router);

app.listen(8080, () => {
  console.log('Listening o port 8080');
});

// app.use('/', express.static(__dirname + '/dist/intersky'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));