$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addToDos)

    $('#todoInput').keypress(function (e) { 
        if (e.which == 13) {
            createTodo();
        }
    });
    
});

function addToDos(todos) {
    todos.forEach(todo => {
        addTodo(todo)
    });
}

function addTodo(todo) {
    const newTodo = $('<li class="task">' + todo.name + '</li>');
    if (todo.completed) newTodo.addClass("done");
    $('.list').append(newTodo);
}

function createTodo() {
    let newTodoVal = $('#todoInput').val();

    $.post('/api/todos', { name: newTodoVal })
    .then( function(createdTodo) {
        addTodo(createdTodo[createdTodo.length-1]);
        $('#todoInput').val('');
    })
    .catch( (err) => {
        console.log(err);
    });

}