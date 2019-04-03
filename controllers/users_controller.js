let faker = require('faker');
let User = require("../models/users");
// get db automatically use it
let db = require("../models/db");

// get all users info
module.exports.all_users = function (req, res) {
    // find and send result
    User.find({}, function (err, r) {
        res.send(r);
    });
};

// create a new user
module.exports.create_user = function (req, res) {
    // random a fake_name
    let fake_name = faker.name.findName();
    // create a new user
    const new_user = new User({
        name: fake_name
    });
    // save in database
    new_user.save().then(res.send('create a new user! ' + fake_name));
};