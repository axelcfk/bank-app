"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function First() {
  const [signInClicked, setSignInClicked] = useState(false);
  const [bankIdClicked, setBankIdClicked] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [currentText, setCurrentText] = useState("Banking done right.");
  const [animationPhase, setAnimationPhase] = useState("erasing");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);

    try {
      const response = await fetch("https://localhost:5000/users", {
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
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let timer;

    const phrases = ["Banking done right.", "Welcome to a smoother bank."];

    if (animationPhase === "erasing") {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.substring(0, prev.length - 1));
        }, 50); // hastighet
      } else {
        setAnimationPhase("writing");
        setCurrentPhrase((prev) => (prev === 0 ? 1 : 0)); // Toggle between phrases
      }
    } else if (animationPhase === "writing") {
      if (currentText !== phrases[currentPhrase]) {
        timer = setTimeout(() => {
          setCurrentText((prev) =>
            phrases[currentPhrase].substring(0, prev.length + 1)
          );
        }, 50); // hastighet
      } else {
        timer = setTimeout(() => {
          setAnimationPhase("erasing");
        }, 3000); //vänta 3 sek innan radera
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, animationPhase, currentPhrase]);

  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute w-screen h-screen bg-cover bg-[url('/rock2.jpg')] opacity-100"
        style={{ zIndex: -1 }}
      ></div>
      <div className="absolute top-0 right-0 pt-5 px-8"></div>
      <div className="flex flex-col h-full ">
        <div className="flex-grow flex flex-col justify-center items-start text-gray-950 px-8">
          <h1 className=" font-shippori text-5xl md:text-8xl font-thin text-left text-slate-50 -mb-2 mt-40">
            Step into <br />
            the future <br />
            of banking
          </h1>

          <div className="h-5">
            <p className="text-2xl text-slate-50">{currentText}</p>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 p-4 text-slate-50  h-32 flex flex-col justify-evenly items-start">
          <button
            onClick={() => setSignUpClicked(true)}
            className="border-none bg-transparent flex justify-center text-slate-200 rounded-full  text-xl hover:cursor-pointer hover:font-bold"
          >
            {" "}
            Open an account &rarr;
          </button>
          <button
            onClick={() => setSignInClicked(true)}
            className="border-none bg-transparent  text-slate-200 rounded-full  text-xl hover:cursor-pointer hover:font-bold"
          >
            Sign in &rarr;
          </button>
        </div>
      </div>
      {signInClicked && (
        <div className="sign-in-overlay flex flex-col">
          <div className=" fixed top-28 right-8 ">
            {" "}
            <button
              className="bg-slate-200 h-8 w-8 flex justify-center items-center rounded-full border-none hover:bg-slate-300 hover:cursor-pointer"
              onClick={() => setSignInClicked(false)}
            >
              ✕
            </button>
          </div>
          <div className="px-8">
            <div className="bg-slate-200 h-96 rounded-lg px-10 text-slate-950 flex flex-col justify-center items-center mb-10 text-xl font-semibold  hover:cursor-pointer">
              <h2>Welcome Back</h2>
              <form>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  value={username}
                  placeholder="   Username"
                  required
                  className="h-10 w-full rounded-xl border-none "
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="   Password"
                  required
                  className="h-10 my-5 w-full rounded-xl border-none "
                />
                <button
                  onClick={() => setBankIdClicked(true)}
                  className="p-2 hover:cursor-pointer border-none h-10 w-full rounded-full text-base  text-slate-200 bg-blue-950 hover:bg-blue-900"
                >
                  <Link
                    className="no-underline text-slate-200"
                    href={"/account-userpage"}
                  >
                    Sign in
                  </Link>{" "}
                </button>
              </form>

              <p className="text-sm text-slate-950">
                Do you not yet have an account? Sign up for one here
              </p>
            </div>
          </div>
        </div>
      )}
      {signUpClicked && (
        <div className="sign-in-overlay flex flex-col ">
          <div className=" fixed top-28 right-8 ">
            {" "}
            <button
              className="bg-slate-200 h-8 w-8 flex justify-center items-center rounded-full border-none hover:bg-slate-300 hover:cursor-pointer font-semibold"
              onClick={() => setSignUpClicked(false)}
            >
              ✕
            </button>
          </div>
          <div className="px-8">
            <div className="bg-slate-200 h-96 rounded-lg px-10 text-slate-950 flex flex-col justify-center items-center mb-10 text-xl font-semibold  hover:cursor-pointer">
              <h2>One step closer to better baniking</h2>
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
                <button className="p-2 hover:cursor-pointer border-none h-10 w-full rounded-full text-base  text-slate-200 bg-blue-950">
                  Sign up
                </button>
              </form>

              <p className="text-sm text-slate-950">
                Do already have an account? Sign up for one here
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
