
import {useState} from "react"
import {TodoInput} from "./Todoinput"
import {TodoItem} from "./todoitem"
import {nanoid} from "nanoid"
function Todo(){
    const [todosList,setTodosList]=useState([])
    const getData=(todo)=>{
        console.log("received",todo)
        const payload={
            title:todo,
            status:false,
            id:nanoid(5)
        }
        setTodosList([...todosList,payload])
    }
    const handleStatus=(id)=>{
        console.log("id",id)
        setTodosList(todosList.map((e)=>(e.id===id ? {...e,status:!e.status}:e)))
        // find this id from todosList
        // toggle it is status status
        // get new array,set it again
    }
    return (
        <div>
           <TodoInput getData={getData}/>
            {todosList.map((e)=>(
                <TodoItem  handleStatus={handleStatus} todo={e}></TodoItem>
            ))}
        </div>
    )
} 

export { Todo }