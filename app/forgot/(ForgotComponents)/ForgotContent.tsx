"use client";

import Logo from "@/app/(UiComponents)/Logo";
import Link from "next/link";
import React, { useState } from "react";
import { Email, Eye, Password, Remember } from "../../(UiComponents)/Icons";

type Props = {};

function ForgotContent({}: Props) {
  const [remember, setRemember] = useState(false);
  return (
    <div className="w-[90%] mx-auto bg-white h-[20rem]  rounded-xl my-auto flex flex-col items-center pt-4 md:w-[70%] lg:w-[35%] lg:ml-[58%]">
      <Logo />
      <h1 className="text-2xl font-bold mt-2 text-black md:text-3xl">
        Forgot Password
      </h1>
      <h3 className="mt-6 text-xs md:text-base mr-[80%] text-black">Email</h3>
      <div className="mt-2 bg-white rounded-lg border-black border-opacity-20 border-[1px] w-[90%] mx-auto h-[10%] flex items-center pl-2">
        <Email />
        <input
          className="w-full h-full outline-none text-black ml-3 text-sm"
          placeholder="Email Adress"
        />
      </div>
      <div className="mt-8 w-[90%] h-[15%] rounded-xl bg-[#fe0000] text-base md:text-lg text-white flex items-center justify-center cursor-pointer">
        Submit
      </div>
      <div className="w-[90%] mx-auto text-black flex items-center justify-center mt-4 md:mt-3 text-sm space-x-1">
        Do you know your password?{" "}
        <span>
          {"  "}
        </span>
        <span>
          <Link href="/signIn" className="text-[#fe0000] font-medium">Sign In</Link>
        </span>
      </div>
    </div>
  );
}

export default ForgotContent;
