import React, { useState } from "react";
import Signup from "./User/Signup";
import Community from "./Community/Community";
import AddArt from "./Community/AddArt";

const index = () => {
  const [boolIsLogIn, setIsLogIn] = useState(null);
  const isLogIn = () => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "isLogIn", {
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
        setIsLogIn(data.message);
      });
  };
  isLogIn();
  if (boolIsLogIn) {
    return (
      <>
        {/* <Community /> */}
        <AddArt />
        {/* <Shopping /> */}
      </>
    );
  } else {
    return <Signup />;
  }
};

export default index;
