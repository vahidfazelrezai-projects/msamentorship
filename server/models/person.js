var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    school: String
});

module.exports = mongoose.model('Person', personSchema);
