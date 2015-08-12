var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String
    // phone: String,
    // email: String,
    // school: String,
    // year: String,
    // interests: String
});

module.exports = mongoose.model('Person', personSchema);
