$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addToDos);
});

function addToDos(todos) {
    todos.forEach(todo => {
        const newTodo = $('<li class="task">' + todo.name + '</li>');
        $('.list').append(newTodo);
    });
}