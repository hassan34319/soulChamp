"use client";

import Logo from "@/app/(UiComponents)/Logo";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Router, { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Email, Eye, Password, Remember } from "../../(UiComponents)/Icons";

type Props = {};

function SignInContent({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const router = useRouter();
  const signSubmit = async () => {
    const res = await signIn("sanity-login", {
      redirect: false,
      email,
      password,
    });
  };
  const handleSubmit = async () => {
    try {
      const res = await signSubmit();
      router.push("/");
      setEmail("");
      setPassword("");
    } catch {}
  };
  return (
    <div className="w-[90%] mx-auto bg-white h-[30rem]  rounded-xl my-auto flex flex-col items-center pt-4 md:w-[70%] lg:w-[35%] lg:ml-[58%]">
      <Logo />
      <h1 className="text-2xl font-bold mt-2 text-black md:text-3xl">
        Welcome Back!
      </h1>
      <h3 className="mt-6 text-xs md:text-base mr-[80%] text-black">Email</h3>
      <div className="mt-2 bg-white rounded-lg border-black border-opacity-20 border-[1px] w-[90%] mx-auto h-[8%] flex items-center pl-2">
        <Email />
        <input
          className="w-full h-full outline-none text-black ml-3 text-sm"
          placeholder="Email Adress"
          value={email} // Connect state to input value
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
        />
      </div>
      <h3 className="mt-6 text-xs md:text-base mr-[75%] text-black">
        Password
      </h3>
      <div className="mt-2 bg-white rounded-lg border-black border-opacity-20 border-[1px] w-[90%] mx-auto h-[8%] flex items-center pl-2 pr-2">
        <Password />
        <input
          className="w-full h-full outline-none text-black ml-3 text-sm"
          placeholder="Password"
          value={password} // Connect state to input value
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"} // Update state on input change
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          <Eye />
        </button>
      </div>
      <div className="flex flex-row  w-full mt-4 items-center  mr-[10%] justify-between ">
        <div className="flex flex-row ml-[10%] items-center">
          {remember ? (
            <Remember setRemember={setRemember} />
          ) : (
            <div
              className="bg-white cursor-pointer h-4 w-4 rounded-sm border-black border-opacity-60 border-[1px] "
              onClick={() => setRemember(true)}
            ></div>
          )}
          <h2 className="text-sm md:text-base text-black ml-3">Remember Me</h2>
        </div>
        <Link
          href="/forgot"
          className="text-sm md:text-base text-[#fe0000] ml-3"
        >
          Forgot Password?
        </Link>
      </div>
      <div
        onClick={handleSubmit}
        className="mt-8 md:mt-6 w-[90%] h-[10%] rounded-xl bg-[#fe0000] text-base md:text-lg text-white flex items-center justify-center cursor-pointer"
      >
        Log In
      </div>
      <div className="w-[90%] mx-auto text-black flex items-center justify-center mt-4 md:mt-2 space-x-1">
        Don't have an account? <span>{"  "}</span>
        <span>
          <Link href="/signUp" className="text-[#fe0000] font-medium">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignInContent;
