import { Sidebar } from "@/pages/components/Sidebar";
import React, { useEffect, useState } from "react";
import img from "./../img.jpg";
import { ProductMini } from "./ProductMini";
import Link from "next/link";

const Home = () => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "getProducts", {
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
        setProducts(data);
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
              <input type="search" name="" id="" />
            </li>
            <li>
              <a>Dark</a>
            </li>
            <li>
              <a href="">Bell</a>
            </li>
            <li>
              <Link href={"/components/Basket"}>Cart</Link>
            </li>
            <div>
              <Link href={"/components/About"}>
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

export default Home;
