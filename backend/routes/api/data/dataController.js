const CCTVs = require('../../../models/cctv.js');
const Recorder = require('../../../models/recorder.js');
const Brands = require('../../../models/brands.js');

exports.brand = (req, res) => {
  Brands.find({}, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      res.json(docs);
    }
  });
}

exports.cctv = (req, res) => {
  CCTVs.find({}, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      res.json(docs);
    }
  });
}

exports.addcctvs = (req, res) => {
  var param = new CCTVs(req.body);
  param.save((err, obj) => {
    if (err) {
      console.error(err);
    } else {
      console.log('obj', obj);
      res.status(200).json(obj);
    }
  });
}

exports.recorder = (req, res) => {
  Recorder.find({}, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      res.json(docs);
    }
  });
}

exports.addrecorders = (req, res) => {
  var param = new Recorder(req.body);
  param.save((err, obj) => {
    if (err) {
      console.error(err);
    } else {
      console.log('obj', obj);
      res.status(200).json(obj);
    }
  });
}