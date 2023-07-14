import { data } from "autoprefixer";
import React from "react";

const register = () => {
  async function RegisterUser(event) {
    event.preventDefault();
    const newUserData = {
      name: event.target.name.value,
      email: event.target.email.value,
      number: event.target.number.value,
      password: event.target.password.value,
    };
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "CreateUser", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(newUserData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <form onSubmit={RegisterUser}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Number</label>
        <input type="Number" name="number" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default register;
