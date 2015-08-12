var personController = {};

var Person = require('../models/person');

personController.newperson = function (req, res) {
    
    var person = Person({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        school: req.body.school
    });

    person.save(function(err) {
        if (err) throw err;
    });

    res.send('new person added');

};

module.exports = personController;
