var router = require('express').Router();

var viewController = require('../controllers/view-controller');
var personController = require('../controllers/person-controller');

router.post('/newperson', personController.newperson);
router.get('/*', viewController.index);

module.exports = router;
