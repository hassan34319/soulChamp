"use client";

import Logo from "@/app/(UiComponents)/Logo";
import { signUp } from "next-auth-sanity/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Email, Eye, Password, Remember } from "../../(UiComponents)/Icons";

type Props = {};

function SignUpContent({}: Props) {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const router = useRouter();
  const signSubmit = async () => {
    const res = await signUp({
      email,
      password,
      name: "Not available",
    });
  };
  const handleSubmit = async () => {
    if (email && password && confirmPassword && password === confirmPassword) {
      try {
        const res = await signUp({
          email,
          password,
          name: "Not available",
        });
        router.push("/signIn");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch {
        console.log("error");
      }
    } else {
      console.log("Fields are empty or passwords do not match");
    }
  };

  const [remember, setRemember] = useState(false);
  return (
    <div className="w-[90%] mx-auto bg-white h-[35rem]  rounded-xl my-auto flex flex-col items-center pt-4 md:w-[70%] lg:w-[35%] lg:ml-[58%]">
      <Logo />
      <h1 className="text-2xl font-bold mt-2 text-black md:text-3xl">
        Create Account
      </h1>
      <h3 className="mt-6 text-xs md:text-base mr-[80%] text-black">Email</h3>
      <div className="mt-2 bg-white rounded-lg border-black border-opacity-20 border-[1px] w-[90%] mx-auto h-[8%] flex items-center pl-2">
        <Email />
        <input
          className="w-full h-full outline-none text-black ml-3 text-sm"
          placeholder="Email Adress"
          value={email} // Connect state to input value
          onChange={(e) => setEmail(e.target.value)}
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
          type={showPassword ? "text" : "password"} // Use type attribute to show/hide password
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          <Eye />
        </button>
      </div>
      <h3 className="mt-6 text-xs md:text-base mr-[60%] text-black">
        Confirm Password
      </h3>
      <div className="mt-2 bg-white rounded-lg border-black border-opacity-20 border-[1px] w-[90%] mx-auto h-[8%] flex items-center pl-2 pr-2">
        <Password />
        <input
          className="w-full h-full outline-none text-black ml-3 text-sm"
          placeholder="Confirm Password"
          value={confirmPassword} // Connect state to input value
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showConfirmPassword ? "text" : "password"} // Use type attribute to show/hide password
        />
        <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
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
      </div>
      <div
        onClick={handleSubmit}
        className="mt-6  w-[90%] h-[10%] rounded-xl bg-[#fe0000] text-base md:text-lg text-white flex items-center justify-center cursor-pointer"
      >
        Sign Up
      </div>
      <div className="w-[90%] mb-2 mx-auto text-black flex items-center justify-center mt-2 space-x-1">
        Already have an account? <span>{"  "}</span>
        <span>
          <Link href="/signIn" className="text-[#fe0000] font-medium">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignUpContent;
