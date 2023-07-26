import React, { useState } from "react";

const AddProduct = () => {
  const [productImg, setProductImg] = useState(null);

  async function createProducts(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("product_img", productImg);
    formData.append("title", event.target.title.value);
    formData.append("price_old", event.target.price_old.value);
    formData.append("price_new", event.target.price_new.value);
    // formData.append("product_details", [{event.target.product_details.value}]);
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "isLogin", {
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
        if (data.message) {
          fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "createProducts", {
            method: "POST",
            credentials: "include",
            body: formData,
          })
            .then((response) => {
              response.json();
            })
            .then(console.log("PRODUCT ADDED"));
        } else {
          console.log("PLEASE LOGIN AGAIN");
        }
      });
  }
  return (
    <div>
      <form onSubmit={createProducts}>
        <input
          type="file"
          onChange={(e) => {
            setProductImg(e.target.files[0]);
          }}
        />
        <label htmlFor="">Product Name</label>
        <input type="text" name="title" id="" />
        <label htmlFor="">Product Details</label>
        <input type="text" name="product_details" id="" />
        <label htmlFor="">Old Price</label>
        <input type="number" name="price_old" id="" />
        <label htmlFor="">New Price</label>
        <input type="number" name="price_new" id="" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
