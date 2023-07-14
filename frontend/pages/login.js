import React from "react";
import { useRouter } from "next/router";

const login = () => {
  const Router = useRouter();
  async function LoginUser(event) {
    event.preventDefault();
    const userData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "LoginUser", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        if (data.message === "Login Sucessful") {
          fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "GetSession", {
            method: "GET",
            credentials: "include",
          })
            .then((Response) => {
              return Response.json();
            })
            .then((data) => {
              console.log(data);
            });
          Router.push("/register");
        } else {
          console.log(data.message);
        }
      });
  }
  return (
    <div>
      <form onSubmit={LoginUser}>
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default login;
