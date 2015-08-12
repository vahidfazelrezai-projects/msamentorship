var mongoose = require('mongoose');
// var configDatabase = require('../config/database')
// mongoose.createConnection(configDatabase.uri)

var personSchema = mongoose.Schema({
    name: String
    // phone: String,
    // email: String,
    // school: String,
    // year: String,
    // interests: String
});

module.exports = mongoose.model('Person', personSchema);
