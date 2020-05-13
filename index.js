const todos = [];
const todoInput = document.querySelector('.create-item-input');
const todoList = document.querySelector('.list');
const todoButton = document.querySelector('.create-item-button');

const events = () => {
    todoInput.onkeyup = e => {
        if ( e.key === 'Enter' &&  e.target.value && e.target.value.length < 29) {
            addTodo(e.target.value);
        } 
        
        if (e.target.value.length > 28) {
            todoInput.classList.add('error');
        } else if (todoInput.classList.contains('error')) {
            todoInput.classList.remove('error');
        }
    }
    
    todoButton.onclick = e => {
        if ( todoInput.value && todoInput.value.length < 29) {
            addTodo(todoInput.value);
        }
    }
}

const addTodo = value => {
    const id = Math.random() * 10000;
    todos.push({id, value, completed: false});
    todoInput.value = '';
    render();
}

const toggleTask = key => {
    const index = todos.findIndex(todo => key === todo.id);
    if(index > -1) {
        todos[index].completed = !todos[index].completed;
        render();
    }
}

const removeTodo = key => {
    const index = todos.findIndex(todo => key === todo.id);
    todos.splice(index, 1);
    render();
}

const render = () => {
    const listOfTodos = todos.map(todo => {
        return `
            <li class="list-item ${todo.completed? 'list-item-completed':''}" onclick="toggleTask(${todo.id})">
                <span class="list-item-text">${todo.value}</span>
                <span class="list-item-close" onclick="removeTodo(${todo.id})">X</span>
            </li>
        `
    });

    todoList.innerHTML = listOfTodos.join(" ");
}

events();
