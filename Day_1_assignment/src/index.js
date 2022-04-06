import "./index.css" ;

const container = document.getElementById("container");

const logo = document.createElement("img");
logo.src = "https://cdn.dribbble.com/users/5325964/screenshots/11432898/todo-logo1-01_4x.png";
logo.setAttribute("class","logo");

const div = document.createElement("div");
const input = document.createElement("input");
input.type = "text";
input.setAttribute("id","input");
input.placeholder = "Enter your todo here" ;


const btn = document.createElement("button");
btn.innerHTML = "Add";
btn.setAttribute("id","btn")
btn.addEventListener("click",()=>{
    appendData()
})

function appendData(){
    let p = document.getElementById("input").value ;
    const div = document.createElement("div");
    div.setAttribute("id","div")
    const p1 = document.createElement("p") ;
    p1.innerHTML = `${p}` ;
    div.append(p1)
    container.append(div)
}

div.append(input,btn);

container.append(logo,div);