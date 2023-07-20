import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React from "react";

const register = () => {
  const Router = useRouter();
  async function RegisterUser(event) {
    event.preventDefault();
    const newUserData = {
      first_name: event.target.fname.value,
      last_name: event.target.lname.value,
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
        if (data.message == "USER CREATED") {
          console.log("USER CREATED");
          Router.push("/login");
        } else {
          console.log("PLEASE TRY AGAIN");
        }
      });
    navigator;
  }

  return (
    <div>
      <form onSubmit={RegisterUser}>
        <label>First Name</label>
        <input type="text" name="fname" />
        <label>Last Name</label>
        <input type="text" name="lname" />
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
