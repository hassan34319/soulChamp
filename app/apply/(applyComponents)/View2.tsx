import { useStateContext } from "@/app/context/stateContext";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  setView: (view: string) => void;
};

function View2({ setView }: Props) {
    const {
        raceEthnicity,
        setRaceEthnicity,
        gender,
        setGender,
        releaseOfInformation,
        setReleaseOfInformation,
        email,
        setEmail,
        telephone,
        setTelephone,
      } = useStateContext();
  const [formHasErrors, setFormHasErrors] = useState(true);
  const [errors, setErrors] = useState({
    raceEthnicity: "",
    gender: "",
    releaseOfInformation: "",
    email: "",
    telephone: "",
  });

  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "raceEthnicity" && !value) {
      error = "Race/Ethnicity is required";
    } else if (field === "gender" && !value) {
      error = "Gender is required";
    } else if (field === "releaseOfInformation" && !value) {
      error = "Release Of Information is required";
    } else if (field === "email" && !value) {
      error = "Email Address is required";
    } else if (field === "telephone" && !value) {
      error = "Telephone is required";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleFieldChange = (field: string, value: string) => {
    validateField(field, value);

    switch (field) {
      case "raceEthnicity":
        setRaceEthnicity(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "releaseOfInformation":
        setReleaseOfInformation(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telephone":
        setTelephone(value);
        break;
      default:
        break;
    }
  };

  const handleNextClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const validationPromises = [
      validateField("raceEthnicity", raceEthnicity),
      validateField("gender", gender),
      validateField("releaseOfInformation", releaseOfInformation),
      validateField("email", email),
      validateField("telephone", telephone),
    ];

    await Promise.all(validationPromises);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    setFormHasErrors(hasErrors);

    if (!formHasErrors) {
      setView("view3");
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto mt-10">
      <h1 className="font-semibold text-2xl text-white text-center md:text-3xl lg:text-5xl">
        Soul Champ Immersive Training Application
      </h1>
      <h3 className="text-white text-center text-xs mt-4 md:mt-6 opacity-80 font-normal md:text-lg lg:text-xl">
        Section 1 - Participant Information
      </h3>
      <div className="relative mt-3 h-8 w-[35%] md:mt-5 md:h-12 lg:w-[25%] lg:h-10">
        <svg
          width="120"
          height="18"
          className="w-[120px] h-[18px] md:w-[240px] md:h-[30px]"
          viewBox="0 0 280 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_10_578)">
            <mask id="path-1-inside-1_10_578" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 20C0 8.95431 8.95431 0 20 0C28.5831 0 35.9033 5.40666 38.7408 13H241.259C244.097 5.40666 251.417 0 260 0C271.046 0 280 8.95431 280 20C280 31.0457 271.046 40 260 40C251.417 40 244.097 34.5933 241.259 27H38.7408C35.9033 34.5933 28.5831 40 20 40C8.95431 40 0 31.0457 0 20Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 20C0 8.95431 8.95431 0 20 0C28.5831 0 35.9033 5.40666 38.7408 13H241.259C244.097 5.40666 251.417 0 260 0C271.046 0 280 8.95431 280 20C280 31.0457 271.046 40 260 40C251.417 40 244.097 34.5933 241.259 27H38.7408C35.9033 34.5933 28.5831 40 20 40C8.95431 40 0 31.0457 0 20Z"
              fill="white"
              fill-opacity="0.08"
            />
            <path
              d="M38.7408 13L37.804 13.35L38.0469 14H38.7408V13ZM241.259 13V14H241.953L242.196 13.35L241.259 13ZM241.259 27L242.196 26.65L241.953 26H241.259V27ZM38.7408 27V26H38.0469L37.804 26.65L38.7408 27ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1ZM39.6775 12.65C36.6988 4.67851 29.0138 -1 20 -1V1C28.1523 1 35.1079 6.13481 37.804 13.35L39.6775 12.65ZM241.259 12H38.7408V14H241.259V12ZM242.196 13.35C244.892 6.13481 251.848 1 260 1V-1C250.986 -1 243.301 4.67852 240.322 12.65L242.196 13.35ZM260 1C270.493 1 279 9.50659 279 20H281C281 8.40202 271.598 -1 260 -1V1ZM279 20C279 30.4934 270.493 39 260 39V41C271.598 41 281 31.598 281 20H279ZM260 39C251.848 39 244.892 33.8652 242.196 26.65L240.322 27.35C243.301 35.3215 250.986 41 260 41V39ZM38.7408 28H241.259V26H38.7408V28ZM20 41C29.0138 41 36.6988 35.3215 39.6775 27.35L37.804 26.65C35.1079 33.8652 28.1523 39 20 39V41ZM-1 20C-1 31.598 8.40202 41 20 41V39C9.50659 39 1 30.4934 1 20H-1Z"
              fill="white"
              fill-opacity="0.6"
              mask="url(#path-1-inside-1_10_578)"
            />
          </g>
          <path
            d="M20.3651 11.5455V29H18.2514V13.7614H18.1491L13.8878 16.5909V14.4432L18.2514 11.5455H20.3651Z"
            fill="white"
          />
          <path
            d="M254.041 29V27.4659L259.803 21.1591C260.479 20.4205 261.036 19.7784 261.473 19.233C261.911 18.6818 262.234 18.1648 262.445 17.6818C262.661 17.1932 262.768 16.6818 262.768 16.1477C262.768 15.5341 262.621 15.0028 262.325 14.554C262.036 14.1051 261.638 13.7585 261.132 13.5142C260.626 13.2699 260.058 13.1477 259.428 13.1477C258.757 13.1477 258.172 13.2869 257.672 13.5653C257.178 13.8381 256.794 14.2216 256.521 14.7159C256.254 15.2102 256.121 15.7898 256.121 16.4545H254.109C254.109 15.4318 254.345 14.5341 254.817 13.7614C255.288 12.9886 255.93 12.3864 256.743 11.9545C257.561 11.5227 258.479 11.3068 259.496 11.3068C260.518 11.3068 261.425 11.5227 262.214 11.9545C263.004 12.3864 263.624 12.9687 264.072 13.7017C264.521 14.4347 264.746 15.25 264.746 16.1477C264.746 16.7898 264.629 17.4176 264.396 18.0312C264.169 18.6392 263.771 19.3182 263.203 20.0682C262.641 20.8125 261.859 21.7216 260.859 22.7955L256.939 26.9886V27.125H265.053V29H254.041Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_b_10_578"
              x="0"
              y="0"
              width="360"
              height="120"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_10_578"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_10_578"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col lg:flex-wrap lg:flex-row lg:justify-between items-center gap-y-4 md:gap-y-6 w-full lg:mt-8">
        {/* Race/Ethnicity */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Race/Ethnicity:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Race/Ethnicity"
              value={raceEthnicity}
              onChange={(e) =>
                handleFieldChange("raceEthnicity", e.target.value)
              }
            />
          </div>
          {errors.raceEthnicity && (
            <p className="text-xs text-red-500 mt-1">{errors.raceEthnicity}</p>
          )}
        </div>

        {/* Gender */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">Gender:</h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Gender"
              value={gender}
              onChange={(e) => handleFieldChange("gender", e.target.value)}
            />
          </div>
          {errors.gender && (
            <p className="text-xs text-red-500 mt-1">{errors.gender}</p>
          )}
        </div>

        {/* Release Of Information */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Release Of Information:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Release Of Information"
              value={releaseOfInformation}
              onChange={(e) =>
                handleFieldChange("releaseOfInformation", e.target.value)
              }
            />
          </div>
          {errors.releaseOfInformation && (
            <p className="text-xs text-red-500 mt-1">
              {errors.releaseOfInformation}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Email Address:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Email Address"
              value={email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Telephone */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Telephone:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Telephone"
              value={telephone}
              onChange={(e) => handleFieldChange("telephone", e.target.value)}
            />
          </div>
          {errors.telephone && (
            <p className="text-xs text-red-500 mt-1">{errors.telephone}</p>
          )}
        </div>
        <div className="flex flex-row w-full items-center justify-between">
          <button
            onClick={() => setView("view1")}
            className="mt-6 mb-6 w-[40%] md:w-[40%] md:h-16 mx-auto h-12 rounded-[40px] bg-white text-base md:text-lg text-black flex items-center justify-center cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={handleNextClick}
            className="mt-6 mb-6 w-[40%] md:w-[40%] md:h-16 mx-auto h-12 rounded-[40px] bg-[#fe0000] text-base md:text-lg text-white flex items-center justify-center cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default View2;
