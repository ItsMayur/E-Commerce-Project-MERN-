import React, { useEffect, useState } from "react";
import img from "./../img.jpg";
import ProductMini from "./Products/ProductMini";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import DesktopNav from "../components/DesktopNav";
import DesktopFooter from "../components/DesktopFooter";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  async function handleProductFind(event) {
    event.preventDefault();
    await setProductSearch(event.target.searchProduct.value);
    getProducts();
  }
  const handleSettingSidebar = () => {
    if (document.getElementById("SettingSidebar").style.display === "none") {
      document.getElementById("SettingSidebar").style.display === "block";
    } else {
      document.getElementById("SettingSidebar").style.display == "none";
    }
  };

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
    <div>
      <DesktopNav />
      <div className="max-sm:h-screen hidden" id="SettingSidebar">
        <div>
          <ul className="max-sm:flex max-sm:justify-between max-sm:text-lg max-sm:py-2 max-sm:justify-self-start  max-sm:mx-7">
            <li>{"<"}</li>
            <li>Company name</li>
            <li>U</li>
          </ul>
          <div>
            <p className="text-gray text-sm py-4  max-sm:px-7">General</p>
            <div className="max-sm:flex max-sm:flex-col">
              <Link href={""} className="py-4 border-b-[1px]  max-sm:px-7">
                See profile
              </Link>
              <Link href={""} className="py-4 border-b-[1px]  max-sm:px-7">
                Edit profile
              </Link>
              <Link href={""} className="py-4 border-b-[1px]  max-sm:px-7">
                Change password
              </Link>
            </div>
            <p className="text-gray text-sm py-4  max-sm:px-7">Legal</p>
            <div className="max-sm:flex max-sm:flex-col">
              <Link href={""} className="py-4 border-b-[1px]  max-sm:px-7">
                Terms of Use
              </Link>
              <Link href={""} className="py-4 border-b-[1px]  max-sm:px-7">
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray text-sm py-4  max-sm:px-7">Personal</p>
            <div className="max-sm:flex max-sm:flex-col">
              <Link href={""} className="py-4 border-b-[1px]  max-sm:px-7">
                Report a bug
              </Link>
              <Link href={""} className="py-4 border-b-[1px]  max-sm:px-7">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:my-2">
        <ul className="max-sm:flex max-sm:justify-between max-sm:text-lg hidden">
          <li onClick={handleSettingSidebar} className="mx-7 ">
            =
          </li>
          <li>FilterName</li>
          <li className="mx-7">
            <Link href={"/Shopping/Basket"}>Cart</Link>
          </li>
          {/* <div>
              <Link href={"/User/About"}>
                {" "}
                <img className="h-10 w-10 rounded" src={img} alt="i" />
              </Link>
            </div> */}
        </ul>
      </div>
      <div className="max-sm:mx-7 max-sm:my-8 flex justify-center items-center h-96 flex-col max-sm:block max-sm:h-full ">
        <p className="max-sm:text-lg text-3xl">Hey Mayur ..!</p>
        <h2 className="text-2xl">What are you looking for today ?</h2>
        <form
          onSubmit={handleProductFind}
          className="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:py-0 py-8"
        >
          <input
            type="search"
            name="searchProduct"
            id=""
            className="max-sm:h-10 max-sm:my-5 max-sm:w-full max-sm:rounded-lg py-3 text-center max-sm:text-left border-0 border-b-[1px]  max-sm:border-2 border-black "
            placeholder="Search for products"
          />
        </form>
      </div>

      <div className="max-sm:bg-gray-light-1 max-sm:rounded-t-3xl">
        <ul className="max-sm:flex max-sm:items-center  max-sm:overflow-auto max-sm:py-4 max-sm:mx-2   hidden">
          <li className="max-sm:mx-6 text-sm bg-green text-white rounded-xl py-1 px-5">
            Catagory
          </li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
          <li className="max-sm:mx-4 text-sm py-1 px-5">Catagory</li>
        </ul>
        <div className="pt-10">
          <p className="text-center text-3xl ">Products</p>
          <p className="text-center text-lg">
            Order it for you and your beloved once
          </p>
        </div>
        <div className="max-sm:block flex flex-wrap justify-evenly py-10">
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
      <DesktopFooter />
    </div>
  );
};

export default Shop;
