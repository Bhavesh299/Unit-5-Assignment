import './App.css'

// CHILD TO PARENT
// function App() {
//   const getData=(da)=>{
//    console.log(da)
//   }

//   return (
//   <div>
//    <First datafn={getData}/>

//   </div>

//   )
// }

// function First({datafn}){
//   const da="gaurav"
//   datafn(da)
// }

// export default App

// // sibling to sibling
// import {useState} from "react"
// import './App.css'
// function App() {
//   const[message,setMessage]=useState("")
//   const getData=(da)=>{
//    console.log(da)
//    setMessage(da)
//   }

//   return (
//   <div>
//    <First datafn={getData}/>
//    <Second message={message}/>
//   </div>

//   )
// }

// function First({datafn}){
//   const da="gaurav"
//   datafn(da)
// }
// function Second({message}){
//       console.log(message, "fromsibiling")
// }

// export default App

// import { useState } from 'react'
import './App.css'
import {Todo} from './components/todo.jsx'
function App() {
  return(<div className="App">
    <Todo />
  </div>) 
}

export default App
