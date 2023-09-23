import Image from "next/image";
import React from "react";
import { ImageArray } from "../types";
import { urlFor } from "../utils/urlFor";

type Props = {
  activities: ImageArray[];
};

function Activities({activities}: Props) {
  return (
    <main className="bg-[#fe0000] h-[60vh] lg:h-[70vh] flex  flex-col items-center ">
      <h1 className="font-semibold text-2xl md:text-5xl  lg:text-4xl mt-[3vh]">
        <span className="text-white">Program </span>
        <span className="text-white"> Activities</span>
      </h1>
      <p className="text-sm md:text-lg mt-[2vh] lg:mt-[4vh] w-[95%] text-center">
        Get ready for an exciting array of activities at Soul Champ. From
        immersive fitness classes that blend high-intensity workouts with
        interactive technology to workshops on digital arts and coding, our
        program offers a dynamic learning experience like no other. In
        additiona, we offer training in financial literacy to keep you on top of
        your goals and financial health!
      </p>
      <div className="flex flex-row h-[35%] lg:h-[50%] md:h-[40%] justify-center lg:justify-between mx-auto w-[95%] mt-[5vh] space-x-4 ">
      {activities[0].images.map((activity)=> {
        return (
        <div className="relative lg:w-[24%] w-[45%] h-full">
          <Image src={urlFor(activity).url()} alt="yoga2" fill className="object-contain" />
        </div>
        )
      })}
      </div>
    </main>
  );
}

export default Activities;
