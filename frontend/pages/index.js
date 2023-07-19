import React, { useState } from "react";
import Home from "./components/Home";
import Signup from "./Signup";
import { Sidebar } from "./components/Sidebar";

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
        <Home />
      </>
    );
  } else {
    return <Signup />;
  }
};

export default index;
