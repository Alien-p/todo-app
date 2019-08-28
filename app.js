const express   = require('express');
const app       = express();
const port      = process.env.PORT || 8000;
const todoRoutes    = require('./routes/todos');
const bodyParser    = require('body-parser');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.set("view engine", "ejs");
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res) {
    res.render('index.html');
});

app.listen(port, function() {
    console.log("app listening on port " + port);
});