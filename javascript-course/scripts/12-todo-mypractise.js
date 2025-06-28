const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodo();


function renderTodo() {
  let todoListHtml = ''

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject
    const html =
      `
       <div>${name}</div>
       <div>${dueDate}</div>
       <button  class="delete-todo-button js-delete-todo-button">Delete</button> `;//generating the html
    todoListHtml += html

  })
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodo();
      })
    })
}

function addTodo() {
  const inputElement = document.querySelector('.js-todo')
  const name = inputElement.value

  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value

  todoList.push({

    name: name,
    dueDate: dueDate
  })
  inputElement.value = ''

  renderTodo();
}

