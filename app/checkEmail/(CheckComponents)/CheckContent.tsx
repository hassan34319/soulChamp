"use client";

import Logo from "@/app/(UiComponents)/Logo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Email, Eye, Password, Remember } from "../../(UiComponents)/Icons";

type Props = {};

function CheckContent({}: Props) {
  const [remember, setRemember] = useState(false);
  return (
    <div className="w-[90%] mx-auto bg-white h-[30rem]  rounded-xl my-auto flex flex-col items-center pt-4 md:w-[70%] lg:w-[35%] lg:ml-[58%]">
      <Logo />
      <h1 className="text-2xl font-bold mt-2 text-black md:text-3xl">
        Check Your Email 
      </h1>
      <div className="relative w-[90%] h-[14rem]">
        <Image src="/emailChecker.png" alt="Check Email" className="object-contain" fill/>
      </div>
      <div className="mt-8 md:mt-6 w-[90%] h-[10%] rounded-xl bg-[#fe0000] text-base md:text-lg text-white flex items-center justify-center cursor-pointer">
        Go Back
      </div>
    </div>
  );
}

export default CheckContent;