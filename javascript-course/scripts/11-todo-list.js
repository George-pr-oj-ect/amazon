//steps to create the to do list is
//1. create an array to store todos
//2. when we click button we are going t0
//3. get text from textbox
//4. add text to array
//5. display todos in the console.log()

//to use a query selector add a class  to the button

//steps
//1. create an array to store todos
//save it in a variable to use later
const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},                        //in the second example where we add a delete button we save the date and the due date in an object
{
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name; //get the name of the todo which is in the object
    // const dueDate = todoObject.dueDate
    const { name, dueDate } = todoObject

    const html =

      `<div>${name}</div>
      <div>${dueDate}</div>
    <button onclick="
        todoList.splice(${i},1);
       renderTodoList();
      "class="delete-todo-button">delete</button>
    `
      ;
    todoListHTML += html //at the top there in the paragraph we created a delete button using the .splice in order to remove the index

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;


  }
}

// explanation
//create a variable to store the result
let todoListHTML = '';

//looping through array
for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];

  //create some html code using the todo 
  const html = `<p>${todo}</p>`;

  // to combine html together use accumulator pattern
  todoListHTML += html//this combines all the html code together
}



document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;



//button when you click this is the function it will run
function addTodo() {
  //save this in a variable
  const inputElement = document.querySelector('.js-name-input');
  //to get text out we use .value
  //save in a variable to use later
  const name = inputElement.value;

  // add name to array which is the todo list, we can use .push() which
  //adds value to end of array
  const dateInputElement = document.querySelector('.js-due-date-input')

  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  }

  );

  //console .log the entire array


  //this will make the text in the text box empty
  inputElement.value = '';

  renderTodoList();
}
//steps we are going to use to make the array visible on the webpage
//loop through the array
//create some HTML code for each to do
//put the HTML on the webpage




//important notes
//when creating websites with js we follow a three step process
//save the data(in this case we saved it as an array)
//use data to generate html which we did like this:
/* let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const html = `<p>${todo}</p>`;
  todoListHTML += html

  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
*/

// finally make the website interactive
