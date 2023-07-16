import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const Router = useRouter();
  const [productData, setProductData] = useState("");
  const productID = Router.query.productID;

  fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "ProductDetails", {
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

  return (
    <div>
      <img src={productData.productImg} alt={productData.productImg} />
      <div>
        <p>{productData.title}</p>

        <p>{productData.rating}</p>
        <div>
          <p>{productData.price_new + " Rs"}</p>
          <p>{productData.price_old + " Rs"}</p>
        </div>
      </div>
    </div>
  );
}
