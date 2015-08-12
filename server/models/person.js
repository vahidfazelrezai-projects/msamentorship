var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    type: String,
    phone: String,
    email: String,
    school: String,
    year: String
});

module.exports = mongoose.model('Person', personSchema);
