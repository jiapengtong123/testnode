const mongoose = require("mongoose");
var mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

// create user schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});

userSchema.plugin(mongoose_fuzzy_searching, {fields: ['firstName', 'lastName']});

// compile schema into a model, last parameter is the collection name
module.exports = mongoose.model('User', userSchema, 'users');