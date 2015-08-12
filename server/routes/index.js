var router = require('express').Router();

var viewController = require('../controllers/viewController');
var personController = require('../controllers/personController');

router.get('/', viewController.index);
router.get('/test', personController.test);

module.exports = router;
