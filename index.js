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
        if ( todoInput.value && e.target.value.length < 29) {
            addTodo(todoInput.value);
        }
    }
    
    document.addEventListener('click',function(e){
        if (e.target && e.target.className === 'list-item-close'){
            const key = e.target.getAttribute("data-key");
            todos.splice(key, 1);
            render();
         }
    });
}

const addTodo = value => {
    todos.push(value);
    todoInput.value = '';
    render();
}

const render = () => {
    const listOfTodos = todos.map((todo, key) => {
        return `
            <div class="list-item">
                <span class="list-item-text">${todo}</span>
                <span class="list-item-close" data-key="${key}">X</span>
            </div>
        `
    });

    todoList.innerHTML = listOfTodos.join(" ");
}

events();
