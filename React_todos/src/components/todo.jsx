
import {useState} from "react"
import {TodoInput} from "./Todoinput"
import {TodoItem,RemoveElem} from "./todoitem"
import {nanoid} from "nanoid"
function Todo(){
    const [todosList,setTodosList]=useState([])
    const [newArray,setNewArray] =useState([])
    const getData=(todo)=>{
        const payload={
            title:todo,
            id:nanoid(5)
        }
        setTodosList([...todosList,payload])
    }
    const removeElem=(id)=>{
        const myNewArray=todosList.filter((el)=>{
         if(el.id==id){
                let removeElement=el
                console.log(removeElement)
                setNewArray([...newArray,removeElement])
         }
          return el.id!==id
        })
        setTodosList(myNewArray)
       
     }
    return (
        <div>
        <div>
           <TodoInput getData={getData} />
           <div className="todolist">
           {todosList.map((e)=>(
                <TodoItem todo={e} removeElem={removeElem}  ></TodoItem>
            ))}
           </div>
           
        </div>
        <div>
            <div></div>
            {newArray.map((e)=>(
                <RemoveElem newElem={e}/>
            ))}
        </div>
        </div>
    )
} 

export { Todo }