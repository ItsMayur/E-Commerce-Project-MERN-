import React, { useEffect, useState } from "react";

const CartItem = (props) => {
  // CART ITEM BASIC TEMPLATE
  const [cartItem, setCartItem] = useState({
    product_id: props.product_id,
    quantity: props.quantity,
    updatedAt: props.createdAt,
    product_img: null,
    title: null,
    price_old: null,
    price_new: null,
  });

  async function getCartItem() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "ProductDetails", {
      method: "POST",
      body: JSON.stringify({ product_id: cartItem.product_id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartItem(data);
      });
  }
  useEffect(() => {
    getCartItem();
  }, []);
  return <div>{cartItem.price_new}</div>;
};

export default CartItem;
