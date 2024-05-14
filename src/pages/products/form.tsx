import axios from "axios";
import React, { useState } from "react";

export function ProductForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}products`,
      { id, name, price }
    );
    const { data } = response;
    if (data) {
      const lastProduct = data[data.length - 1];
      alert(`Product ${lastProduct.name} submitted!`);
    } else {
      alert("Error submitting product.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register Product</button>
    </form>
  );
}

export default ProductForm;
