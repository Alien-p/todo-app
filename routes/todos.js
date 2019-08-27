const express   = require('express');
const router    = express.Router();
const db        = require('../models');


router.get('/', (req, res) => {
    db.Todo.find().then((todos) => {
        res.status(201).json(todos);
    }).catch((err) => {
        Console.log(err);
    });
});

router.get('/:todoid', (req, res) => {
    db.Todo.findById(req.params.todoid).then( (todo) => {
        res.json(todo);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/', (req, res) => {
    const todo = req.body;

    db.Todo.create(todo)
    .then( (newTodo) => { res.redirect('/api/todos') })
    .catch( (err) => { res.send(err) });
});

module.exports = router;