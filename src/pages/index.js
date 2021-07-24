import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetData() {
  const [data, setData] = useState([]);
  const deleteProduct = async(id) =>{
    await axios.delete(`http://localhost:3001/products/${id}`)
    .then(res => {
      console.log('delete ', res)
      getData()
    })
  }
  const getData = async =>{
    try {
       axios
        .get("http://localhost:3001/products/")
        .then((res) => setData(res.data));
    } catch (err) {
      console.log("error :", err);
    }
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      <Link to="/create">Create</Link>
      <div style={{ padding: 10 }}>
        {data.map((ite, key) => {
          return (
            <li key={key}>
              <span>{ite.id}</span> {'--'}
              name: {ite.name} || color:{" "}
              <span
                style={{ background: ite.color, width: "20%", height: "20%" }}
              >
                {ite.color}
              </span>{" "}
              || price: {ite.price}
              <Link to={"/update/"+ ite.id}>update</Link>
              <button onClick={()=> deleteProduct(ite.id)}>delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default GetData;
