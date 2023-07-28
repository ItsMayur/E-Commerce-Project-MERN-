import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
          Router.push("/../Shopping/Shop");
        } else {
          console.log(data.message);
        }
      });
  }
  return (
    <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:text-center h-screen  bg-black text-white">
      <div className="max-sm:my-20">
        <h1 className="max-sm:text-3xl">Company Name</h1>
        <p>This is company headline.</p>
      </div>
      <div>
        <form
          onSubmit={LoginUser}
          className="max-sm:flex max-sm:w-96  max-sm:flex-col max-sm:text-sm"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
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
            Login
          </button>
        </form>
      </div>
      <div className="max-sm:flex max-sm:text-sm">
        <p className="mx-1">Don't have an account? </p>
        <Link
          href="/User/Signup"
          className="text-green text-decoration-line: underline"
        >
          Sign Up here
        </Link>
      </div>
    </div>
  );
};

export default login;
