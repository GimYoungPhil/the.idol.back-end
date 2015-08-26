var express = require('express');
var router  = express.Router();

// database ===================================================================
// var mongoose = require('mongoose');
// var configDB = require('../config/database.js');
var Group    = require('../models/group');

// mongoose.connect(configDB.url);

router.get('/', function(req, res, next) {
  Group.find({}, function(err, groups) {
    if (err)
      next();
    groups.sort({'stockDate': -1});
    res.status(200).jsonp(groups);
  });
});

router.get('/:id', function(req, res, next) {
  Group.findById(req.params.id, function(err, group) {
    if (err)
      next();
    res.status(200).jsonp(group);
  });
});

router.put('/:id', function(req, res, next) {
  Group.findById(req.params.id, function(err, group) {
    if (err)
      next();
    group.name         = req.body.name;
    group.company      = req.body.company;
    group.updateDate   = new Date();

    group.save(function(err) {
      if (err)
        next();
      res.status(200).jsonp(group);
    });
  });
});

router.post('/', function(req, res, next) {
  var newGroup  = new Idol({
    name:      req.body.name,
    company:   req.body.company
  });
  newGroup.save(function(err, group) {
    if (err)
      return next(err);
    res.status(200).jsonp(group);
  });
});

router.delete('/:id', function(req, res, next) {
  Group.findById(req.params.id, function(err, group) {

    group.remove(function(err) {
      if (err)
        next();
      res.status(200).jsonp({});
    });
  });
});

module.exports = router;
