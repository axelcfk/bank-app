"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter(); // useRouter hook for redirecting after successful sign-up

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      const data = await response.json();
      console.log("Success:", data);

      setSuccessMessage("You've successfully created an account!");

      //   router.push("/userpage"); // Ensure this route exists and is correctly configured in your Next.js app
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div
      className="sign-in-overlay flex flex-col  bg-cover bg-[url('/rock2.jpg')]"
      style={{ backdropFilter: "blur(40px)" }}
    >
      <div className=" fixed top-28 right-8 ">
        {" "}
        <button className=" bg-slate-200 h-8 w-8 flex text-xl justify-center items-center rounded-full border-none hover:bg-slate-300 hover:cursor-pointer font-semibold">
          <Link className="no-underline" href="/">
            {" "}
            ✕
          </Link>
        </button>
      </div>
      {successMessage === "" ? (
        <div className="px-8">
          <div className="bg-slate-200 h-96 rounded-lg px-10 text-slate-950 flex flex-col justify-center items-center mb-10 text-xl font-semibold  hover:cursor-pointer">
            <h2>One step closer to better banking</h2>
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                value={username}
                required
                placeholder="   Username"
                className="h-10 w-full rounded-xl border-none "
              />

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                required
                placeholder="   Password"
                className="h-10 my-5 w-full rounded-xl border-none "
              />
              <button
                type="submit"
                className="p-2 hover:cursor-pointer border-none h-10 w-full rounded-full text-base  text-slate-200 bg-blue-950"
              >
                Sign up
              </button>
            </form>

            <p className="text-sm text-slate-950">
              Do already have an account?{" "}
              <Link className="no-underline text-blue-700" href="/signin">
                Sign in here!
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="px-8 ">
          <div className="bg-slate-200 h-96 rounded-lg px-10 text-slate-950 flex flex-col justify-center items-center mb-10 text-xl font-semibold  hover:cursor-pointer">
            <h2 className="text-center">
              You have successfully created an account!
            </h2>
            <p className="text-sm text-slate-950">
              You can now{" "}
              <Link className="no-underline text-blue-700" href="/signin">
                sign in!
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}