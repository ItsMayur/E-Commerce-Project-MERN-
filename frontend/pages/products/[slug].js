import { useRouter } from "next/router";

export default function Page(props) {
  fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/ProductDetails", {
    method: "POST",
    body: { productId: "33765" },
  });
  return (
    <div>
      <img src={props.productImg} alt={props.productImg} />
      <div>
        <p>{props.productTitle}</p>

        <p>{props.productTag}</p>
        <div>
          <p>{props.productNewPrice + " Rs"}</p>
          <p>{props.productOldPrice + " Rs"}</p>
        </div>
      </div>
    </div>
  );
}
