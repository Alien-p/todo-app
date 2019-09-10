$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addToDos)

    $('#todoInput').keypress( function(e) { 
        if (e.which == 13) {
            createTodo();
        }
    });

    $('.list').on('click', 'i', function(event) {
        event.stopPropagation();
        deleteTodo( $(this).parent() );    
    });

    $('.list').on('click', 'li', function() {
        markTodoDone( $(this) );
    });
    
});

function addToDos(todos) {
    todos.forEach( function(todo) {
        addTodo(todo)
    });
}

function addTodo(todo) {
    let newTodo = $('<li class="task">' + todo.name + '<i class="fas fa-trash-alt"></i> </li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);

    if (todo.completed) newTodo.addClass("done");

    $('.list').append(newTodo);
}

function markTodoDone(todo) {
    let updateUrl = "/api/todos/" + todo.data('id');
    let isDone = !todo.data('completed');
    
    $.ajax( {
        type: 'PUT',
        url: updateUrl,
        data: { completed: isDone }
    })
    .then( function(data) {
        todo.data('completed', isDone);
        todo.toggleClass("done");
    })
    .catch( function(err) {
        console.log(err);
    });
    
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