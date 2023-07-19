import { useEffect, useState } from "react";
import React from "react";

const About = () => {
  const [userInfo, setUserInfo] = useState({
    name: null,
    email: null,
    number: null,
    address: null,
  });
  async function getUserDetails() {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "UserDetails", {
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
        setUserInfo(data[0]);
      });
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div>
      <div>{userInfo.name || "NO NAME"}</div>
      <div>{userInfo.email || "NO EMAIL"}</div>
      {userInfo.address || "NO ADDRESS"}
    </div>
  );
};

export default About;
