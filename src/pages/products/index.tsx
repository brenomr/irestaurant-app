import axios from "axios";
import { useEffect, useState } from "react";
import { ProductForm } from "./form";

async function fetchProducts() {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}products`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

function Card(product: ProductProps) {
  return (
    <div
      key={product.id}
      style={{
        width: "300px",
        height: "100px",
        padding: "20px",
        backgroundColor: "#690010",
      }}
    >
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
    </div>
  );
}

export function Products() {
  const [products, setProducts] = useState([{ id: 0, name: "", price: 0 }]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 0fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <Card {...product} />
        ))}
      </div>
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          marginTop: "50px",
          height: "50px",
          width: "200px",
          fontSize: "20px",
          backgroundColor: "yellow",
        }}
      >
        Add Product
      </button>
      <div
        style={{
          marginTop: "300px",
        }}
      >
        {showForm && <ProductForm />}
      </div>
    </div>
  );
}
