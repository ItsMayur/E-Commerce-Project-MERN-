import React, { useEffect, useState } from "react";
import img from "./../img.jpg";
import ProductMini from "./Products/ProductMini";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  async function handleProductFind(event) {
    event.preventDefault();
    await setProductSearch(event.target.searchProduct.value);
    getProducts();
  }

  async function getProducts() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "getProducts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ searchProduct: productSearch }),
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
    getProducts();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div>
          <ul className="flex place-content-between">
            <li>
              <form onSubmit={handleProductFind}>
                <input type="search" name="searchProduct" id="" />
                <input type="submit" />
              </form>
            </li>
            <li>
              <a href="">Bell</a>
            </li>
            <li>
              <Link href={"/Shopping/Basket"}>Cart</Link>
            </li>
            <div>
              <Link href={"/User/About"}>
                {" "}
                <img className="h-10 w-10 rounded" src={img} alt="i" />
              </Link>
            </div>
          </ul>
        </div>
        <div className="flex place-content-center flex-wrap">
          {products.map((item, idx) => (
            <div className="m-6">
              <ProductMini
                productTitle={item.title}
                productNewPrice={item.price_new}
                productOldPrice={item.price_old}
                productTag={item.productTag}
                productImg={item.produce_img}
                productId={item.product_id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
