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

personController.allfirstnames = function (req, res) {
    
    Person.find({}, 'firstname', function (err, people) {
        if (err) throw err;
        names = [];
        for (i = 0; i < people.length; i++) {
            names.push(people[i]['firstname']);
        }
        res.send(names);
    })

};

module.exports = personController;
