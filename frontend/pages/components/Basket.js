import React, { useEffect, useState } from "react";
import CartItem from "./cart-item/CartItem";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);

  async function getBasketItems() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "GetBasket", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartItems(data);
      });
  }
  useEffect(() => {
    getBasketItems();
  }, []);
  return (
    <div>
      {cartItems.map((item, key) => {
        return (
          <CartItem
            product_id={item.product_id}
            quantity={item.quantity}
            updatedAt={item.updatedAt}
          />
        );
      })}
    </div>
  );
};

export default Basket;
