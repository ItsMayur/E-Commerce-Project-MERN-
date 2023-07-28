import React, { useEffect, useState } from "react";

const CartItem = (props) => {
  // CART ITEM BASIC TEMPLATE
  const [cartItem, setCartItem] = useState({
    product_id: props.product_id,
    quantity: props.quantity,
    updatedAt: props.createdAt,
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
  return (
    <div className="flex px-5 py-5 justify-center max-sm:justify-start items-center">
      <div className="mr-10">
        <img
          className="h-24 w-24  max-sm:rounded-xl"
          src={
            process.env.NEXT_PUBLIC_BACKEND_URL +
            "product_img/" +
            props.product_id
          }
        />
      </div>
      <div className="flex max-sm:flex-col max-sm:justify-between max-sm:space-x-0 space-x-16 max-sm:h-24 ">
        <div className="max-sm:block flex max-sm:space-x-0 space-x-16 items-center">
          <p>{cartItem.title}</p>
          <p className="text-green text-sm">{cartItem.price_new} RS</p>
        </div>
        <div className="flex justify-between ">
          <p className="border-2 px-2 mr-2 rounded-md border-gray">-</p>
          <p>{props.quantity}</p>
          <p className="border-2 px-2 ml-2 rounded-md border-gray">+</p>
          <p className="ml-14 text-gray">U</p>
          <p className="ml-14 text-sm text-green  max-sm:hidden">
            {props.quantity * cartItem.price_new} RS
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
