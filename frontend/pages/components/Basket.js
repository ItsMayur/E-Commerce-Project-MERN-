import React, { useEffect, useState } from "react";
import CartItem from "./cart-item/CartItem";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemHeading, setCartItemHeading] = useState(null);
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
        if (data.message == "NO ITEMS IN CART") {
          setCartItemHeading(`YOUR CART HAS NO ITEMS`);
        } else {
          setCartItems(data);
          setCartItemHeading(`YOUR CART HAS ${data.length} ITEMS`);
        }
      });
  }
  useEffect(() => {
    getBasketItems();
  }, []);
  return (
    <div>
      <h1>{cartItemHeading}</h1>
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
