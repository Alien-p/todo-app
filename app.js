const express   = require('express');
const app       = express();
const port      = process.env.PORT || 8000;
const Todo      = require('./models/index');
const todoRoutes    = require('./routes/todos');
const bodyParser    = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get ("/", function(req, res) {
    res.send("Hello from root route");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
    console.log("app listening on port " + port);
});