const express   = require('express');
const app       = express();
const port      = process.env.PORT || 8000;
const Todo      = require('./models/index')



app.get("/", function(req, res) {
    res.send("IN future it will be TODO app");
});



app.listen(port, function() {
    console.log("app listening on port " + port);
});