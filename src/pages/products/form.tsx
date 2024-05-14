import axios from "axios";
import { useState } from "react";

export function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}products`,
      { name, price }
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
