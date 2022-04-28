import { useState, useEffect } from "react";
// import { axios } from "axios";

export const Womens = () => {
  const [womens, setWomen] = useState([]);
  const getData =async ()=>{
    const data1=await fetch("http://52.43.72.73:5000/women").then((d)=>d.json())
    setWomen(data1)
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(womens);

  return (
    <div>
          <h1>Mens Products </h1>
    <div className="productgrid">
     
      {womens.map((e) => (
        <div className="divtag" key={e.employee_id}>
          <img className="menimage" img src={e.image2} />
          <h6 className="ProductName">{e.ProductName}</h6>
          <div className="prize">
            <span className="price">prize:₹{e.Price}&nbsp;&nbsp;&nbsp;</span>
            <span className="strikeoffPrice">
            &nbsp;&nbsp;strikeoffPrice: <del>₹{e.strikeoffPrice}</del>
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
