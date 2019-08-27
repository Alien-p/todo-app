const db = require('../models');

exports.getTodos = function (req, res) {
    db.Todo.find().then((todos) => {
        res.status(201).json(todos);
    }).catch((err) => {
        Console.log(err);
    });
};

exports.postTodo = function (req, res) {
    db.Todo.create(req.body).then( (newTodo) => {
        res.redirect('/api/todos') 
    }).catch( (err) => { 
        res.send(err) 
    });
};

exports.getTodoById = function (req, res) {
    db.Todo.findById(req.params.todoid).then( (todo) => {
        res.json(todo);
    }).catch((err) => {
        res.send(err);
    });
}

exports.putTodo =  function (req, res) {
    db.Todo.findByIdAndUpdate({ _id: req.params.todoid}, req.body, {new: true}).then( (todo) => {
        res.json(todo);
    }).catch( (err) => {
        res.send(err);
    });
}

exports.deleteTodo = function (req, res) {
    db.Todo.remove( {_id: req.params.todoid} ).then( () => {
        res.send("Todo deleted!");
    }).catch( (err) => {
        res.send(err);
    });
}


module.exports = exports;
