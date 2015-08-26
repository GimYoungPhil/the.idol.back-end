var express = require('express');
var router  = express.Router();
var idols  = require('./idols');
var groups = require('./groups');

// database ===================================================================
var mongoose = require('mongoose');
var configDB = require('../config/database.js');

mongoose.connect(configDB.url);

router.use('/idols', idols);
router.use('/groups', groups);

module.exports = router;
