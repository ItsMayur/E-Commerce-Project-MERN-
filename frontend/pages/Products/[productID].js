import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page(slug) {
  const Router = useRouter();
  const [productData, setProductData] = useState("");
  const { productID } = Router.query;
  const [quantity, setQuantity] = useState(1);
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
    <div>
      <img src={productData.productImg} alt={productData.productImg} />
      <div>
        <p>{productData.title}</p>

        <p>{productData.rating}</p>
        <p onClick={handleDecreaseQuantity}>Less</p>
        <p>{quantity}</p>
        <p onClick={handleIncreaseQuantity}>More</p>
        <div>
          <p>{productData.price_new + " Rs"}</p>
          <p>{productData.price_old + " Rs"}</p>
        </div>
      </div>
      <div onClick={handleAddToCart}>ADD TO CART</div>
    </div>
  );
}
