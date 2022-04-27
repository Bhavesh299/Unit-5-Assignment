import "./App.css";
function App() {
  let data = [
    {
      heading: "Mobile Oprating System",
      phones: [
       { name:"Android",style:"discshape"},
        {name:"Blckberry",style:"discshape"},
        {name: "iPhone",style:"discshape"},
        {name: "Windows Phone",style:"discshape"},
      ]
    },
    {
      heading: "Mobile Manufacturers",
      phones: [
        { name:"Samsung",style:"squareshape"},
         {name:"HTC",style:"squareshape"},
         {name: "Micromax",style:"discshape"},
         {name: "Apple",style:"circleshape"},
       ]
    },
  ]
  return (
    <div className="App">
     {data.map((e)=>(
    <Shop head={e.heading} array={e.phones}/>
     ))}
    </div>
  )
}
function Shop(datas){

  return(
    <div>
      <h1>{datas.head}</h1>
      <div>
       {datas.array.map((e)=>(
         <ul> <li className={e.style}>{e.name}</li></ul>
       ))}
      </div>
    </div>
  )
}

export default App;
