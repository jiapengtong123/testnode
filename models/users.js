const mongoose = require("mongoose");

// create user schema
const userSchema = new mongoose.Schema({
    name: String
});

// compile schema into a model, last parameter is the collection name
module.exports = mongoose.model('User', userSchema, 'users');