import { useRouter } from "next/router";
import React from "react";

const ProductMini = (props) => {
  const handleProductPage = () => {
    console.log("Go to product page " + props.productId);
  };
  return (
    <a href={"Products/" + props.productId} className="place-content-center">
      <img
        className="h-40 w-40"
        src={props.productImg}
        alt={props.productImg}
      />
      <div>
        <p className="my-1">{props.productTitle}</p>
        <p className="text-sm italic">{props.productTag}</p>
        <div className="font-semibold text-sm">
          <p>{props.productNewPrice + " Rs"}</p>
          <p className="text-xs line-through font-color">
            {props.productOldPrice + " Rs"}
          </p>
        </div>
      </div>
    </a>
  );
};
export default ProductMini;
