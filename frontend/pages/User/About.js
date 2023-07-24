import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";

const About = () => {
  const [userInfo, setUserInfo] = useState({
    first_name: null,
    last_name: null,
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
      <div>{userInfo.first_name || "NO NAME"}</div>
      <div>{userInfo.last_name || "NO NAME"}</div>
      <div>{userInfo.email || "NO EMAIL"}</div>
      <div> {userInfo.address || "NO ADDRESS"}</div>
      <div>
        <Link href="/User/EditInfo">EDIT INFO</Link>
        <Link href="/User/ChangePassword">CHANGE PASSWORD</Link>
      </div>
    </div>
  );
};

export default About;
