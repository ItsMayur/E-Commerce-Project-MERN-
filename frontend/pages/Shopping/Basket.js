import React, { useEffect, useState } from "react";
import CartItem from "./cart-item/CartItem";
import Link from "next/link";
import DesktopNav from "../components/DesktopNav";
import DesktopFooter from "../components/DesktopFooter";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);

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
          setItemQuantity(data.length);
        }
      });
  }
  useEffect(() => {
    getBasketItems();
  }, []);
  return (
    <div className="h-screen max-sm:flex max-sm:flex-col max-sm:justify-between">
      <DesktopNav />
      <div className="max-sm:hidden text-center py-12 ">
        <p className="text-2xl font-bold mb-4">Your cart items</p>
        <Link href={"/Shopping/Shop"} className="underline text-green">
          Back to Shopping
        </Link>
      </div>
      <div>
        <div className="max-sm:flex max-sm:justify-between max-sm:text-lg max-sm:py-2 max-sm:justify-self-start hidden">
          <Link href={"/Shopping/Shop"} className="max-sm:ml-7">
            {"<"}
          </Link>
          <h1>Shopping Cart</h1>
          <p className="max-sm:mr-7">U</p>
        </div>
        <div className="flex justify-center max-sm:hidden">
          <div className="flex mr-60">
            <p className="mx-1">Product</p>
          </div>
          <div className="flex ">
            <p>Price</p>
            <p className="ml-20">Quantity</p>
            <p className="ml-8">Remove</p>
            <p className="ml-12">Total</p>
          </div>
        </div>
        <div className=" max-sm:overflow-auto">
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
      </div>
      <div className=" flex max-sm:block justify-center py-8 ">
        <div className="max-sm:px-7 flex max-sm:justify-center  items-center space-x-40">
          <p>Total {itemQuantity} items</p>
          <p> 123 RS</p>
        </div>
        <div className=" max-sm:flex max-sm:mx-7 py-2 px-2 ml-36 rounded-xl my-3 bg-green text-white items-center justify-center">
          Porceed to checkout
        </div>
      </div>
      <DesktopFooter />
    </div>
  );
};

export default Basket;
