import { useState } from "react";
import "./Inventory.css"

export const Inventory = (props) => {
  const [counter, setCounter] = useState(props.initial)
 
    // Create add and remove functions here that changes the
    // state.
    const handleChannge=(value)=>{
      setCounter(counter+value)
    }
    const handleChanngedouble=(value)=>{
      setCounter(counter*value)
    }
 
  return (
       <div>
         <h1 className={`${counter%2!==0 ? "red" : "green"}`}>{counter}</h1>
         <button className="btn" onClick={()=>handleChannge(1)}>Add</button>
         <button className="btn" onClick={()=>handleChannge(-1)}>Remove</button>
         <button className="btn" onClick={()=>handleChanngedouble(2)}>Double</button>
       </div>
  );
};