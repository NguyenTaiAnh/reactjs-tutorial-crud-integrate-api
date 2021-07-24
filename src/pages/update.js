import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const history = useHistory();
  const [newValue, setNewValue] = useState({
    name: "",
    color: "",
    price: "",
  });
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    setNewValue({
      ...newValue,
      [target.name]: value,
    });
    console.log(newValue)
  };
  const handleSubmit = () => {
    let data = {
      ...newValue,
      name: newValue.name,
      color: newValue.color,
      price: newValue.price
    }
    update(id,data)
    history.push('/')
  };
  const update = async (id,data)=>{
    const res = await axios.put(`http://localhost:3001/products/${id}`,data)
    console.log(res)
  }

  const detail = async (id) => {
    await axios.get(`http://localhost:3001/products/${id}`)
    .then(res=> setNewValue(res.data))
  };
  useEffect(() => {
    detail(id)
  }, [id])
  return (
    <div>
      <button onClick={history.goBack}>go back</button>
      <h1>Update id {id}</h1>

      <div className="container">
        <h2>Update Product</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name of product"
            onChange={handleChange}
            value={newValue.name}
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter color of product"
            name="color"
            onChange={handleChange}
            value={newValue.color}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price of product"
            name="price"
            onChange={handleChange}
            value={newValue.price}
          />
        </div>

        <button
          type="submit"
          style={{ marginRight: 5 + "px" }}
          className="btn btn-default"
          onClick={handleSubmit}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
