import './App.css'
function App() {

  var data=[
  {
    name:"Services"
  },
  {
    name:"Projects"
  },
  {
    name:"About"
  },
]
 return(
   <div className="App">
       <h1>LOGOBAKERY</h1>
        <div className="flex">
          <Links data={data}/>
        </div>
        <button className="btn">Contact</button>
   </div>
 )

}
function Links(datas){
  
  return(
    datas.data.map((e)=>(
         <p>{e.name}</p>
    ))
  )
}
export default App
