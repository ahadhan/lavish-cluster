// app/products/page.js
"use client";

import { useRouter } from "next/navigation";
import { useProduct } from "../../context/ProductContext.js";

const ProductsPage = () => {
  const router = useRouter();
  const { setSelectedProduct } = useProduct();

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    router.push("/product-details"); 
  };

  return (
    <div>
      {/* Example product */}
      <button onClick={() => handleViewDetails({ id: 1, title: "Sample Product" })}>
        View Product
      </button>
    </div>
  );
};

export default ProductsPage;
