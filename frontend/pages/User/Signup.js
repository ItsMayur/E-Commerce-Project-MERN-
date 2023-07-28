import Link from "next/link";
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
          Router.push("/../Shopping/Shop");
        } else {
          console.log(data.message);
        }
      });
  }

  return (
    <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:text-center h-screen bg-black text-white">
      <div className="max-sm:my-20">
        <h1 className="max-sm:text-3xl">Company Name</h1>
        <p>This is company headline.</p>
      </div>
      <div>
        <form
          onSubmit={RegisterUser}
          className="max-sm:flex max-sm:w-96  max-sm:flex-col max-sm:text-sm"
        >
          <input
            type="text"
            name="fname"
            placeholder="First name"
            className="max-sm:h-10 rounded-xl my-2"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            className="max-sm:h-10 rounded-xl my-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="max-sm:h-10 rounded-xl my-2"
          />
          <input
            type="Number"
            name="number"
            placeholder="Number"
            className="max-sm:h-10 rounded-xl my-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="max-sm:h-10 rounded-xl my-2"
          />
          <button
            type="submit"
            className="max-sm:h-10 rounded-xl text-white bg-green my-10"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="max-sm:flex max-sm:text-sm">
        <p className="mx-1">If you have an account? </p>
        <Link
          href="/User/login"
          className="text-green text-decoration-line: underline"
        >
          Sign In here
        </Link>
      </div>
    </div>
  );
};

export default register;
