import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.
    const handlechange = (value,str) => {
      if(str==="books"){
      setInv({... inv, books : inv.books+value})
      }
      if(str==="Notebooks"){
          setInv({... inv, notebooks : inv.notebooks+value})
      }
      if(str==="Pen"){
          setInv({... inv, pens : inv.pens+value})
      }
  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() =>{handlechange(1,"books")}}>+</button>
        <button className="circlularButton" onClick={() =>{ if(inv.books<=0){ return;} handlechange(-1,"books")}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() =>{handlechange(1,"Notebooks")}}>+</button>
        <button className="circlularButton" onClick={() =>{ if(inv.notebooks<=0){ return;} handlechange(-1,"Notebooks")}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() =>{handlechange(1,"Pen")}}>+</button>
        <button className="circlularButton" onClick={() =>{ if(inv.pens<=0){ return;} handlechange(-1,"Pen")}}>-</button>
        <span>{inv.pens}</span>
      </div>
     
            {/*calculate total and show it*/}
            total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};