import React, { useEffect, useState } from "react";

const ProductElaborated = () => {
  const [productData, setProductData] = useState({});
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "ProductDetails", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ ProductID: "24342" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setProductData(data);
      });
  }, []);

  const handleAddToBasket = () => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "AddToBasket", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ProductID: "24342",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => console.log(data));
  };

  const handleBuyNow = () => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "BuyNow", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ProductID: "24342",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => console.log(data));
  };

  return (
    <div>
      <img src={productData.productImg} alt={productData.productImg} />
      <div>
        <p>{productData.productTitle}</p>
        <p>{productData.productTag}</p>
        <div>
          <p>{productData.productNewPrice + " Rs"}</p>
          <p>{productData.productOldPrice + " Rs"}</p>
        </div>
      </div>
      <div>
        <div onClick={handleAddToBasket}>Add to basket</div>
        <div onClick={handleBuyNow}>Buy now</div>
      </div>
    </div>
  );
};

export default ProductElaborated;
