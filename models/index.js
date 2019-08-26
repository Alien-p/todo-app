const mongoose = require("mongoose");
const url = "mongodb://localhost/todo";

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(function() { console.log('Connected to DB'); }).catch(err => { console.log('THE ERROR: ', err.message); });

mongoose.Promise = Promise;
module.exports.Todo = require('./todo');