import Image from "next/image";
import React from "react";
import { ImageArray } from "../types";
import { urlFor } from "../utils/urlFor";

type Props = {
  community : ImageArray[]
};

function Community({community}: Props) {
  return (
    <main className="bg-black h-[50vh] flex  flex-col items-center ">
      <h1 className="font-semibold text-2xl md:text-5xl  lg:text-4xl mt-[6vh]">
        <span className="text-white">Serving The </span>
        <span className="text-[#fe0000]"> Community</span>
      </h1>
      <p className="text-sm md:text-lg mt-[2vh] lg:mt-[4vh] w-[95%] text-center">
        At Soul Champ, we believe in innovation, empowerment, and community.
        Through our unique program, we inspire individuals to embrace their
        potential, explore cutting-edge technologies, and foster a supportive
        network.
      </p>
      <div className="flex flex-row h-[26%] md:h-[45%] justify-between mx-auto w-[95%] mt-[5vh] ">
      {community[0].images.map((comm)=> {
        return (
<div className=" relative lg:w-[24%] w-[45%] h-full">
              <Image
                src={urlFor(comm).url()}
                alt="yoga2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
        )
      })}
      </div>
    </main>
  );
}

export default Community;
