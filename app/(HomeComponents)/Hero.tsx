import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

type Props = {};

function Hero({}: Props) {
  const backgroundImageUrl = "/signin.png";
  return (
    <main
      className="bg-cover bg-top min-h-[100vh] "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-black bg-opacity-40 z-30 min-h-[100vh] w-full flex flex-col  items-center pt-6 lg:pt-2">
        <Navbar />

        {/* Landing */}
        <div className="mt-[25vh] flex items-center flex-col  w-[95%] lg:w-[85%] mx-auto text-center md:w-[90%]">
          <h1 className="font-semibold text-2xl md:text-5xl  lg:text-4xl">
            An Immersive Fitness, Technology And Life Coaching Program For San
            Francisco Youth.
          </h1>
          <p className="mt-[2vh] lg:mt-[4vh] text-sm md:text-lg">
            At Soul Champ, we believe in innovation, empowerment, and community.
            Through our unique program, we inspire individuals to embrace their
            potential, explore cutting-edge technologies, and foster a
            supportive network.
          </p>
          <div className="flex flex-row justify-between items-center w-full mt-[3vh] lg:mt-[6vh] lg:w-[70%] font-semibold">
            <Link
              href="/apply"
              className="w-[45%] h-14 md:h-20 rounded-[40px] text-[#fe0000] text-lg md:text-3xl bg-white flex items-center justify-center cursor-pointer"
            >
              Apply Now
            </Link>
            <Link
              href="/signIn"
              className="w-[45%] h-14 md:h-20 rounded-[40px] bg-[#fe0000] text-lg md:text-3xl text-white flex items-center justify-center cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
