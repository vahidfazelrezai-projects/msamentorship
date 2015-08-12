var router = require('express').Router();
var returnIndex = require('../controllers/returnIndex');
var Person = require('../models/person')

router.get('/', returnIndex);

module.exports = router;
