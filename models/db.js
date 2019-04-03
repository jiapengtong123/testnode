const mongoose = require("mongoose");

// connect to mongoDB
const uri = "mongodb+srv://jiapeng:6089959@cluster0-uskap.mongodb.net/test?retryWrites=true";
mongoose.connect(uri, {useNewUrlParser: true});

// get connection
let db = mongoose.connection;
// error message
db.on('error', console.error.bind(console, 'connection error:'));

// export db
module.exports = db;

