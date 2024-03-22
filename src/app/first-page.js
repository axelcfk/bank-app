"use client";

import { useState, useEffect } from "react";

export default function First() {
  const [signInClicked, setSignInClicked] = useState(false);
  const [bankIdClicked, setBankIdClicked] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);

  const [currentText, setCurrentText] = useState("Banking done right.");
  const [animationPhase, setAnimationPhase] = useState("erasing");
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    let timer;

    const phrases = ["Banking done right.", "Welcome to a smoother bank."];

    if (animationPhase === "erasing") {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.substring(0, prev.length - 1));
        }, 50); // Speed of erasing
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
        }, 50); // Speed of writing
      } else {
        timer = setTimeout(() => {
          setAnimationPhase("erasing");
        }, 3000); // Wait 5 seconds before starting to erase
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
          <p onClick={() => setSignInClicked(false)}>X</p>
          <div className="px-8">
            <div className="bg-slate-200 h-96 rounded-lg px-10 text-slate-950 flex flex-col justify-center items-center mb-10 text-xl font-semibold  hover:cursor-pointer">
              <h2>Welcome Back</h2>
              {!bankIdClicked ? (
                <>
                  <input
                    type="text"
                    placeholder="   Username"
                    className="h-10 w-full rounded-xl border-none "
                  />

                  <input
                    type="password"
                    placeholder="   Password"
                    className="h-10 my-5 w-full rounded-xl border-none "
                  />
                  <button
                    onClick={() => setBankIdClicked(true)}
                    className="p-2 hover:cursor-pointer border-none h-10 w-full rounded-full text-base  text-slate-200 bg-blue-950"
                  >
                    Sign in
                  </button>
                </>
              ) : (
                "Loading..."
              )}
              <p className="text-sm text-slate-950">
                Do you not yet have an account? Sign up for one here
              </p>
            </div>
          </div>
        </div>
      )}
      {signUpClicked && (
        <div className="sign-in-overlay flex flex-col">
          <p onClick={() => setSignUpClicked(false)}>X</p>
          <div className="px-8">
            <div className="bg-slate-200 h-96 rounded-lg px-10 text-slate-950 flex flex-col justify-center items-center mb-10 text-xl font-semibold  hover:cursor-pointer">
              <h2>One step closer to better baniking</h2>
              {!bankIdClicked ? (
                <>
                  <input
                    type="text"
                    placeholder="   Username"
                    className="h-10 w-full rounded-xl border-none "
                  />

                  <input
                    type="password"
                    placeholder="   Password"
                    className="h-10 my-5 w-full rounded-xl border-none "
                  />
                  <button
                    onClick={() => setBankIdClicked(true)}
                    className="p-2 hover:cursor-pointer border-none h-10 w-full rounded-full text-base  text-slate-200 bg-blue-950"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                "Loading..."
              )}
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
