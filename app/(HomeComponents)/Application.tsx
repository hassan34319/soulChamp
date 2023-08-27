import Link from "next/link";
import React from "react";

type Props = {};

function Application({}: Props) {
  const backgroundImageUrl = "/signup.png";
  return (
    <main
      className="bg-cover bg-top min-h-[50vh] flex items-center "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-black bg-opacity-80 z-30 min-h-[50vh]  w-full flex flex-col  items-center pt-6 lg:pt-2">
        <h1 className="font-semibold text-2xl md:text-5xl  lg:text-4xl mt-[6vh]">
          <span className="text-white">Application </span>
          <span className="text-[#fe0000]"> Process</span>
        </h1>
        <p className="text-sm md:text-lg mt-[2vh] lg:mt-[4vh] w-[95%] text-center">
          Joining Soul Champ is easy! Simply fill out our online application
          form, providing us with your background, interests, and goals. We
          review each application carefully and select individuals who
          demonstrate a passion for both fitness and technology.
        </p>
        <Link
          href="/apply"
          className="w-[45%] lg:w-[30%] h-14 md:h-20 rounded-[40px] bg-[#fe0000] text-lg md:text-3xl text-white flex items-center justify-center cursor-pointer mt-[5vh]"
        >
          Apply Now
        </Link>
      </div>
    </main>
  );
}

export default Application;
