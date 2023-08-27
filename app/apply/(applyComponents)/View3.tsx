import { useStateContext } from "@/app/context/stateContext";
import React, { useState } from "react";

type Props = {
  setView: (view: string) => void;
};

function View3({ setView }: Props) {
  const {
    guardianFirstName,
    setGuardianFirstName,
    guardianLastName,
    setGuardianLastName,
    mailingAddress,
    setMailingAddress,
    homeTelephone,
    setHomeTelephone,
    workTelephone,
    setWorkTelephone,
    guardianEmailAddress,
    setGuardianEmailAddress,
  } = useStateContext();

  const [formHasErrors, setFormHasErrors] = useState(true);
  const [errors, setErrors] = useState({
    guardianFirstName: "",
    guardianLastName: "",
    mailingAddress: "",
    homeTelephone: "",
    workTelephone: "",
    guardianEmailAddress: "",
  });

  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "guardianFirstName" && !value) {
      error = "Guardian First Name is required";
    } else if (field === "guardianLastName" && !value) {
      error = "Guardian Last Name is required";
    } else if (field === "mailingAddress" && !value) {
      error = "Mailing Address is required";
    } else if (field === "homeTelephone" && !value) {
      error = "Home Telephone is required";
    } else if (field === "workTelephone" && !value) {
      error = "Work Telephone is required";
    } else if (field === "guardianEmailAddress" && !value) {
      error = "Guardian Email Address is required";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleFieldChange = (field: string, value: string) => {
    validateField(field, value);

    switch (field) {
      case "guardianFirstName":
        setGuardianFirstName(value);
        break;
      case "guardianLastName":
        setGuardianLastName(value);
        break;
      case "mailingAddress":
        setMailingAddress(value);
        break;
      case "homeTelephone":
        setHomeTelephone(value);
        break;
      case "workTelephone":
        setWorkTelephone(value);
        break;
      case "guardianEmailAddress":
        setGuardianEmailAddress(value);
        break;
      default:
        break;
    }
  };

  const handleNextClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const validationPromises = [
      validateField("guardianFirstName", guardianFirstName),
      validateField("guardianLastName", guardianLastName),
      validateField("mailingAddress", mailingAddress),
      validateField("homeTelephone", homeTelephone),
      validateField("workTelephone", workTelephone),
      validateField("guardianEmailAddress", guardianEmailAddress),
    ];

    await Promise.all(validationPromises);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    setFormHasErrors(hasErrors);

    if (!formHasErrors) {
      setView('view4')
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto mt-10">
      <h1 className="font-semibold text-2xl text-white text-center md:text-3xl lg:text-5xl">
        Soul Champ Immersive Training Application
      </h1>
      <h3 className="text-white text-center text-xs mt-4 md:mt-6 opacity-80 font-normal md:text-lg lg:text-xl">
        Section 2 - Parent/Guardian/Legal Representative 1 (if participant is a
        minor)
      </h3>
      <div className="flex flex-col lg:flex-wrap lg:flex-row lg:justify-between items-center gap-y-4 md:gap-y-6 w-full mt-8">
        {/* Guardian First Name */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Guardian First Name:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Guardian First Name"
              value={guardianFirstName}
              onChange={(e) =>
                handleFieldChange("guardianFirstName", e.target.value)
              }
            />
          </div>
          {errors.guardianFirstName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.guardianFirstName}
            </p>
          )}
        </div>

        {/* Guardian Last Name */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Guardian Last Name:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Guardian Last Name"
              value={guardianLastName}
              onChange={(e) =>
                handleFieldChange("guardianLastName", e.target.value)
              }
            />
          </div>
          {errors.guardianLastName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.guardianLastName}
            </p>
          )}
        </div>

        {/* Mailing Address */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Mailing Address:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Mailing Address"
              value={mailingAddress}
              onChange={(e) =>
                handleFieldChange("mailingAddress", e.target.value)
              }
            />
          </div>
          {errors.mailingAddress && (
            <p className="text-xs text-red-500 mt-1">{errors.mailingAddress}</p>
          )}
        </div>

        {/* Home Telephone */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Home Telephone:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Home Telephone"
              value={homeTelephone}
              onChange={(e) =>
                handleFieldChange("homeTelephone", e.target.value)
              }
            />
          </div>
          {errors.homeTelephone && (
            <p className="text-xs text-red-500 mt-1">{errors.homeTelephone}</p>
          )}
        </div>

        {/* Work Telephone */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Work Telephone:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Work Telephone"
              value={workTelephone}
              onChange={(e) =>
                handleFieldChange("workTelephone", e.target.value)
              }
            />
          </div>
          {errors.workTelephone && (
            <p className="text-xs text-red-500 mt-1">{errors.workTelephone}</p>
          )}
        </div>

        {/* Guardian Email Address */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Guardian Email Address:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Guardian Email Address"
              value={guardianEmailAddress}
              onChange={(e) =>
                handleFieldChange("guardianEmailAddress", e.target.value)
              }
            />
          </div>
          {errors.guardianEmailAddress && (
            <p className="text-xs text-red-500 mt-1">
              {errors.guardianEmailAddress}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-row w-full items-center justify-between">
          <button
            onClick={() => setView("view2")}
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

export default View3;
