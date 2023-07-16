import { Sidebar } from "@/pages/components/Sidebar";
import React from "react";
import img from "./../img.jpg";
import { ProductMini } from "./ProductMini";

const Home = () => {
  const testData = [
    {
      productTitle: "Product 1",
      productNewPrice: "13121",
      productOldPrice: "321314",
      productTag: "#goodNew",
      productImg: "this is a img",
      productId: "343324",
    },
    {
      productTitle: "Product 1",
      productNewPrice: "13121",
      productOldPrice: "321314",
      productTag: "#goodNew",
      productImg: "this is a img",
      productId: "16456234",
    },
    {
      productTitle: "Product 1",
      productNewPrice: "13121",
      productOldPrice: "321314",
      productTag: "#goodNew",
      productImg: "this is a img",
      productId: "54745",
    },
    {
      productTitle: "Product 1",
      productNewPrice: "13121",
      productOldPrice: "321314",
      productTag: "#goodNew",
      productImg: "this is a img",
      productId: "354366",
    },
    {
      productTitle: "Product 1",
      productNewPrice: "13121",
      productOldPrice: "321314",
      productTag: "#goodNew",
      productImg: "this is a img",
      productId: "0988324",
    },
    {
      productTitle: "Product 1",
      productNewPrice: "13121",
      productOldPrice: "321314",
      productTag: "#goodNew",
      productImg: "this is a img",
      productId: "030475",
    },
  ];

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
              <a href="">Cart</a>
            </li>
            <div>
              <img className="h-10 w-10 rounded" src={img} alt="i" />
            </div>
          </ul>
        </div>
        <div className="flex place-content-center flex-wrap">
          {testData.map((item, idx) => (
            <div className="m-6">
              <ProductMini
                productTitle={item.productTitle}
                productNewPrice={item.productNewPrice}
                productOldPrice={item.productOldPrice}
                productTag={item.productTag}
                productImg={item.productImg}
                productId={item.productId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
