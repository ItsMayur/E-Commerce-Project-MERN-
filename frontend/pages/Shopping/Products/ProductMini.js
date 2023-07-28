import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductMini = (props) => {
  const handleProductPage = () => {
    console.log("Go to product page " + props.productId);
  };
  return (
    <a
      href={"Products/" + props.productId}
      className="max-sm:place-content-center flex"
    >
      <div className="max-sm:flex flex flex-col-reverse max-sm:flex-row max-sm:px-6 max-sm:py-6 max-sm:w-full max-sm:justify-between bg-white rounded-xl">
        <div className="max-sm:mx-4 max-sm:py-0 py-2">
          <p className="max-sm:my-4  text-xl font-bold">{props.productTitle}</p>
          <p className="text-sm italic">{props.productTag}</p>
          <div className="font-semibold text-sm">
            <p className="text-green">{props.productNewPrice + " RS"}</p>
            <p className="text-xs line-through font-normal italic">
              {props.productOldPrice + " RS"}
            </p>
          </div>
        </div>
        <div>
          <img
            className="max-sm:h-36 max-sm:w-36 w-48 h-48 rounded-xl"
            src={
              process.env.NEXT_PUBLIC_BACKEND_URL +
              "product_img/" +
              props.productId
            }
          />
        </div>
      </div>
    </a>
  );
};
export default ProductMini;
