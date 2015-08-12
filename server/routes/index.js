var router = require('express').Router();

var viewController = require('../controllers/viewController');
var personController = require('../controllers/personController');

router.post('/newperson', personController.newperson);
router.get('/*', viewController.index);

module.exports = router;
