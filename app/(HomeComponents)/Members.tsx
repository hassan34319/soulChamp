"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ImageArray } from "../types";
import { urlFor } from "../utils/urlFor";

type Props = {
  members: ImageArray[];
};

function Members({members}: Props) {
  const images = members[0].images.map((memb)=> {
    return urlFor(memb).url()
  }) // Add more image URLs as needed

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex: number) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
  };
  return (
    <main className="bg-black h-[60vh] md:h-[70vh] flex  flex-col lg:flex-row  lg:h-[60vh] lg:items-center lg:justify-between lg:w-[95%] lg:mx-auto">
      <div className="lg:w-[45%]">
        <h1 className="font-semibold text-2xl md:text-5xl  lg:text-4xl mt-[6vh] lg:mt-0 lg:w-full w-[90%] mx-auto">
          <span className="text-white">Team </span>
          <span className="text-[#fe0000]">Members</span>
        </h1>
        <p className="text-sm md:text-lg mt-[2vh] lg:mt-[4vh] w-[90%] text-start mx-auto lg:mx-0">
          Our dedicated team of trainers, tech experts, and industry
          professionals are here to guide and support you on your Soul Champ
          journey. With their expertise and mentorship, you'll gain invaluable
          knowledge and skills to thrive in the digital world.
        </p>
      </div>
      <div className="flex flex-row justify-between w-[95%] mx-auto h-[60%] lg:h-[100%] lg:w-[45%] lg:mx-0 lg:space-x-6 mt-[4vh]">
        <div className="relative w-[48%] h-full">
          <div
            className="relative h-6 w-6 md:h-12 md:w-12 z-30 mt-[15vh] md:mt-[20vh] lg:mt-[30vh] ml-[5%]"
            onClick={handlePrevClick}
          >
            <Image src="/left.png" alt="left" fill className="object-cover" />
          </div>
          <Image
            src={images[currentIndex]}
            alt={`image${currentIndex}`}
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[48%] h-full">
          <Image
            src={images[(currentIndex + 1) % images.length]}
            alt={`image${(currentIndex + 1) % images.length}`}
            fill
            className="object-contain"
          />
          <div
            className="relative h-6 w-6 md:h-12 md:w-12 z-30 mt-[15vh] md:mt-[20vh] ml-[80%] lg:mt-[30vh]"
            onClick={handleNextClick}
          >
            <Image src="/right.png" alt="right" fill className="object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Members;
