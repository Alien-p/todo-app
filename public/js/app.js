$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addToDos)

    $('#todoInput').keypress( function(e) { 
        if (e.which == 13) {
            createTodo();
        }
    });

    $('.list').on('click', 'i', function() {
        deleteTodo( $(this).parent() );    
    })
    
});

function addToDos(todos) {
    todos.forEach( function(todo) {
        addTodo(todo)
    });
}

function addTodo(todo) {
    let newTodo = $('<li class="task"> <i class="fas fa-trash-alt"></i>' + todo.name + '</li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);

    if (todo.completed) newTodo.addClass("done");

    $('.list').append(newTodo);
}

function deleteTodo(removeTodo) {
    let clickedId = removeTodo.data('id');
    let deleteUrl = '/api/todos/' + clickedId;

    $.ajax( {
        method: 'DELETE',
        url: deleteUrl
    })
    .then( function(data) {
        removeTodo.remove();
    })
    .catch( function(err) {
        console.log(err);
    });

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