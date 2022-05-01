import './style.css'

var gp=document.querySelector('#app')
import { legacy_createStore as createStore } from 'redux'
const initState = {
  todos: [],
}
const ADD_TODO = 'ADD_TODO'
const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...store, todos: [...store.todos, action.payload] }
    default:
      return store
  }
}
// console.log('gaurav')
const store = createStore(reducer, initState)

const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      title: title,
      status: false,
    },
  }
}

var btn = document.getElementById('btn')
btn.addEventListener('click', myFunction)

var div = document.createElement('div')

function myFunction() {
  
  var input = document.getElementById('inputbox').value
  store.dispatch(addTodo(input))
  
  div.innerHTML = ''
 
  store.getState().todos.forEach((todo) => {
    div.innerHTML += `<div class="todo">
    <p id = "p">${todo.title}</p>
    <button id = "btn1">Done</button>

   </div>`
  })
  gp.append(div)
}




