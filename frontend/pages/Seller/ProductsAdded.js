import React, { useState, useEffect } from "react";
import SellerProductMini from "./SellerProduct/SellerProductMini";

const ProductsAdded = () => {
  const [products, setProducts] = useState([]);
  async function getAddedProducts() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "getAddedProducts", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length) {
          setProducts(data);
        }
      });
  }
  useEffect(() => {
    getAddedProducts();
  }, []);
  return (
    <div>
      {products.map((PRODUCT) => {
        return (
          <SellerProductMini
            key={PRODUCT.product_id}
            product_id={PRODUCT.product_id}
            title={PRODUCT.title}
            price_old={PRODUCT.price_old}
            price_new={PRODUCT.price_new}
            product_details={PRODUCT.product_details}
          />
        );
      })}
    </div>
  );
};

export default ProductsAdded;
