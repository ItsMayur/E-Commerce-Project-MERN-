import DesktopNav from "@/pages/components/DesktopNav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page(slug) {
  // ROUTER SETUP
  const Router = useRouter();
  // CONSTANTS USED
  const [productData, setProductData] = useState("");
  const { productID } = Router.query;
  const [quantity, setQuantity] = useState(1);
  // FUNCTION TO ADD TO CART
  async function handleAddToCart() {
    if (Boolean(productID)) {
      await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "AddToBasket", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ product_id: productID, quantity: quantity }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  }
  // FUNCTIONS TO CHANGE ITEM QUANTITY
  const handleIncreaseQuantity = () => {
    const increasedQuantity = quantity + 1;
    setQuantity(increasedQuantity);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const decreaseQuantity = quantity - 1;
      setQuantity(decreaseQuantity);
    }
  };
  // FUNCTION TO GET PRODUCT DETIALS ON LOAD
  async function getProductDetails(productID) {
    if (Boolean(productID)) {
      await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "ProductDetails", {
        method: "POST",
        body: JSON.stringify({ product_id: productID }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProductData(data);
        });
    } else {
      console.log("PROCESSING");
    }
  }

  useEffect(() => {
    getProductDetails(productID);
  }, [productID]);

  return (
    <div className="max-sm:px-7 max-sm:flex max-sm:flex-col">
      <DesktopNav />
      <div className="max-sm:flex max-sm:justify-between max-sm:align-center max-sm:text-lg max-sm:py-2 hidden">
        <Link href={"/Shopping/Shop"}>{"<"}</Link>
        <p>U</p>
      </div>

      <div>
        <p className="text-black-800 text-3xl font-bold">{productData.title}</p>
        <p className="text-green text-md font-bold">
          {productData.price_new + " Rs"}
        </p>
      </div>
      <div>
        <ul className="flex text-sm justify-between pr-10 py-2">
          <li className="text-green underline underline-offset-4">Overview</li>
          <li>Features</li>
          <li>Specifications</li>
        </ul>
      </div>
      <div className="">
        <img
          className="h-80 w-80 rounded-lg max-sm:overflow-scroll"
          src={process.env.NEXT_PUBLIC_BACKEND_URL + "product_img/" + productID}
        />
      </div>
      <p>{productData.rating}</p>
      <div className="flex  max-sm:justify-evenly text-xl max-sm:p-4 text-center">
        <p
          onClick={handleDecreaseQuantity}
          className="px-3 border-black border-2 rounded-lg"
        >
          {"-"}
        </p>
        <p>{quantity}</p>
        <p
          onClick={handleIncreaseQuantity}
          className="px-2 border-black border-2 rounded-lg"
        >
          +
        </p>
      </div>
      <div
        onClick={handleAddToCart}
        className="max-sm:flex max-sm:mx-7 py-2 rounded-xl my-1 bg-green text-white items-center justify-center"
      >
        Add to cart
      </div>
      <div
        onClick={handleAddToCart}
        className="max-sm:flex max-sm:mx-7 py-2 rounded-xl my-1 bg-green text-white items-center justify-center"
      >
        Buy now
      </div>
    </div>
  );
}
