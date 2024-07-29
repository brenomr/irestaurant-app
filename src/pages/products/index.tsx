import { useState } from "react";
import { ProductForm } from "./form";
import { useProducts } from "./products.hooks";
import { ProductType } from "./type";

function Card(product: ProductType) {
  return (
    <div
      style={{
        width: "300px",
        height: "100px",
        padding: "20px",
        backgroundColor: "#690010",
      }}
    >
      <h3>
        {product.name} ({product.id})
      </h3>
      <p>R$ {product.price}</p>
    </div>
  );
}

export function Products() {
  const [showForm, setShowForm] = useState(false);
  const { products, isLoading, isError } = useProducts();

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 0fr))",
          gap: "20px",
        }}
      >
        {isError && <p>Something went wrong while loading product list.</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products?.map((product) => <Card key={product.id} {...product} />)
        )}
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
