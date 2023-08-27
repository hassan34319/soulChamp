import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <div className="bg-transparent flex w-[90%] mx-auto justify-between items-center h-24 md:h-32 lg:hidden">
        <Link
          href="/apply"
          className="w-[20%]  h-[30%] rounded-[40px] text-[#fe0000] text-sm md:text-base bg-white flex items-center justify-center cursor-pointer"
        >
          Apply
        </Link>
        <div className="h-full w-[28%] relative">
          <Image className="object-contain" fill src="/logo.png" alt="logo" />
        </div>
        <Link
          href="/signIn"
          className="w-[20%]  h-[30%] rounded-[40px] bg-[#fe0000] text-sm md:text-base text-white flex items-center justify-center cursor-pointer"
        >
          Login
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="bg-transparent  w-[90%] mx-auto justify-between items-center h-[7rem] hidden lg:flex">
        <div className="h-full w-[11%] relative">
          <Image className="object-contain" fill src="/logo.png" alt="logo" />
        </div>
        <div className="flex flex-1 flex-row items-center justify-start space-x-6 ml-12 text-sm">
            <Link href="#about" className="text-white">About</Link>
            <Link href="#about" className="text-white">Program</Link>
            <Link href="#about" className="text-white">Application Process</Link>
            <Link href="#about" className="text-white">Serving the Community</Link>
        </div>
        <Link
          href="/apply"
          className=" text-[#fe0000] text-sm  flex items-center justify-center cursor-pointer mr-4"
        >
          Apply Now
        </Link>
        <Link
          href="/login"
          className="w-[15%]  h-[50%] rounded-[40px] bg-[#fe0000] text-base text-white flex items-center justify-center cursor-pointer"
        >
          Login
        </Link>
      </div>
    </>
  );
}

export default Navbar;
