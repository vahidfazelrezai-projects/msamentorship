var personController = {};

var Person = require('../models/person');

personController.newperson = function (req, res) {

    var someone = Person({
        name: 'hii',
    });

    // save the user
    someone.save(function(err) {
      if (err) throw err;

      console.log('someone created!');
    });

};

module.exports = personController;
