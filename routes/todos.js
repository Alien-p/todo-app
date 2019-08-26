const express   = require('express');
const router    = express.Router();
const db        = require('../models');


router.get('/', (req, res) => {
    db.Todo.find()
    .then((todos) => {
        res.send(todos);
    })
    .catch((err) => {
        Console.log(err);
    });
});

module.exports = router;