var express = require('express');
var router  = express.Router();

// database ===================================================================
// var mongoose = require('mongoose');
// var configDB = require('../config/database.js');
var Idol     = require('../models/idol');

// mongoose.connect(configDB.url);

router.get('/', function(req, res, next) {
  Idol.find({}, function(err, idols) {
    if (err)
      next();
    idols.sort({'stockDate': -1});
    res.status(200).jsonp(idols);
  });
});

router.get('/:id', function(req, res, next) {
  Idol.findById(req.params.id, function(err, idol) {
    if (err)
      next();
    res.status(200).jsonp(idol);
  });
});

router.put('/:id', function(req, res, next) {
  Idol.findById(req.params.id, function(err, idol) {
    if (err)
      next();
    idol.name          = req.body.name;
    idol.height        = req.body.height;
    idol.weight        = req.body.weight;
    idol.group         = req.body.group;
    idol.imageLink     = req.body.imageLink;
    idol.birthDate     = req.body.birthDate;
    idol.updateDate    = new Date();

    idol.save(function(err) {
      if (err)
        next();
      res.status(200).jsonp(idol);
    });
  });
});

router.post('/', function(req, res, next) {
  var newIdol  = new Idol({
    name:      req.body.name,
    height:    req.body.height,
    weight:    req.body.weight,
    group:     req.body.group,
    imageLink: req.body.imageLink,
    birthDate: req.body.birthDate
  });
  newIdol.save(function(err, idol) {
    if (err)
      return next(err);
    res.status(200).jsonp(idol);
  });
});

router.delete('/:id', function(req, res, next) {
  Idol.findById(req.params.id, function(err, idol) {

    idol.remove(function(err) {
      if (err)
        next();
      res.status(200).jsonp({});
    });
  });
});

module.exports = router;
