var express = require('express');
var router = express.Router();
var path = require('path');

// DATABASE
var mongoose = require('mongoose');
var configDb = require('../config/database');
mongoose.connect(configDb.uri);

// CONTROLLERS
var returnIndex = require('../controllers/returnIndex');

// ROUTES
router.get('/', returnIndex);

 // EXPORTS
module.exports = router;
