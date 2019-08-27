const express   = require('express');
const router    = express.Router();
const db        = require('../models');
const helper    = require('../helpers/todos')

router.route('/')
    .get(helper.getTodos)
    .post(helper.postTodo);


router.route('/:todoid')
    .get(helper.getTodoById)
    .put(helper.putTodo)
    .delete(helper.deleteTodo);

module.exports = router;