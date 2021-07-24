import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function CreateProduct() {
  const history = useHistory()
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
  };

  const handleSubmit = () => {
    // e.preventDefault()
    let data = {
      name: newValue.name,
      color: newValue.color,
      price: newValue.price,
    };
    addProudct(data);
    history.goBack()
  };
  const addProudct = async (data) => {
    const res = await axios.post("http://localhost:3001/products/", data);
    console.log(res);
  };

  return (
    <div className="container">
      <h2>Add New Product</h2>
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
        Add
      </button>
      <Link to="/">Back</Link>
    </div>
  );
}

export default CreateProduct;
