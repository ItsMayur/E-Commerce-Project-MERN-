import { useRouter } from "next/router";
import React from "react";

const SellerProductMini = (props) => {
  const Router = useRouter();
  const product_id = props.product_id;
  async function deleteProduct() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "deleteProduct", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ product_id: product_id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Router.reload();
      });
  }

  async function editProduct(params) {}

  return (
    <div>
      product_id= {props.product_id}
      title = {props.title}
      price_new = {props.price_new}
      price_old = {props.price_old}
      product_details = {props.product_details}
      <div onClick={deleteProduct}>Delete Product</div>
      <div onClick={editProduct}>Edit Product</div>
    </div>
  );
};

export default SellerProductMini;
