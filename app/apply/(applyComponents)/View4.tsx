import { useStateContext } from "@/app/context/stateContext";
import React, { useState } from "react";

type Props = {
  setView: (view: string) => void;
};

function View4({ setView }: Props) {
  const {
    emergencyFirstName,
    setEmergencyFirstName,
    emergencyLastName,
    setEmergencyLastName,
    emergencyMailingAddress,
    setEmergencyMailingAddress,
    emergencyHomeTelephone,
    setEmergencyHomeTelephone,
    emergencyWorkTelephone,
    setEmergencyWorkTelephone,
    relationshipToParticipant,
    setRelationshipToParticipant,
  } = useStateContext();

  const [formHasErrors, setFormHasErrors] = useState(true);
  const [errors, setErrors] = useState({
    emergencyFirstName: "",
    emergencyLastName: "",
    emergencyMailingAddress: "",
    emergencyHomeTelephone: "",
    emergencyWorkTelephone: "",
    relationshipToParticipant: "",
  });

  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "emergencyFirstName" && !value) {
      error = "Emergency First Name is required";
    } else if (field === "emergencyLastName" && !value) {
      error = "Emergency Last Name is required";
    } else if (field === "emergencyMailingAddress" && !value) {
      error = "Emergency Mailing Address is required";
    } else if (field === "emergencyHomeTelephone" && !value) {
      error = "Emergency Home Telephone is required";
    } else if (field === "emergencyWorkTelephone" && !value) {
      error = "Emergency Work Telephone is required";
    } else if (field === "relationshipToParticipant" && !value) {
      error = "Relationship to Participant is required";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleFieldChange = (field: string, value: string) => {
    validateField(field, value);

    switch (field) {
      case "emergencyFirstName":
        setEmergencyFirstName(value);
        break;
      case "emergencyLastName":
        setEmergencyLastName(value);
        break;
      case "emergencyMailingAddress":
        setEmergencyMailingAddress(value);
        break;
      case "emergencyHomeTelephone":
        setEmergencyHomeTelephone(value);
        break;
      case "emergencyWorkTelephone":
        setEmergencyWorkTelephone(value);
        break;
      case "relationshipToParticipant":
        setRelationshipToParticipant(value);
        break;
      default:
        break;
    }
  };

  const handleNextClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const validationPromises = [
      validateField("emergencyFirstName", emergencyFirstName),
      validateField("emergencyLastName", emergencyLastName),
      validateField("emergencyMailingAddress", emergencyMailingAddress),
      validateField("emergencyHomeTelephone", emergencyHomeTelephone),
      validateField("emergencyWorkTelephone", emergencyWorkTelephone),
      validateField("relationshipToParticipant", relationshipToParticipant),
    ];

    await Promise.all(validationPromises);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    setFormHasErrors(hasErrors);

    if (!formHasErrors) {
      setView('view5')
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto mt-10">
      <h1 className="font-semibold text-2xl text-white text-center md:text-3xl lg:text-5xl">
        Soul Champ Immersive Training Application
      </h1>
      <h3 className="text-white text-center text-xs mt-4 md:mt-6 opacity-80 font-normal md:text-lg lg:text-xl">
        Section 3 - Emergency Contact Information
      </h3>
      <div className="flex flex-col lg:flex-wrap lg:flex-row lg:justify-between items-center gap-y-4 md:gap-y-6 w-full mt-8">
        {/* Emergency First Name */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Emergency First Name:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Emergency First Name"
              value={emergencyFirstName}
              onChange={(e) =>
                handleFieldChange("emergencyFirstName", e.target.value)
              }
            />
          </div>
          {errors.emergencyFirstName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.emergencyFirstName}
            </p>
          )}
        </div>

        {/* Emergency Last Name */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Emergency Last Name:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Emergency Last Name"
              value={emergencyLastName}
              onChange={(e) =>
                handleFieldChange("emergencyLastName", e.target.value)
              }
            />
          </div>
          {errors.emergencyLastName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.emergencyLastName}
            </p>
          )}
        </div>

        {/* Emergency Mailing Address */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Emergency Mailing Address:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Emergency Mailing Address"
              value={emergencyMailingAddress}
              onChange={(e) =>
                handleFieldChange("emergencyMailingAddress", e.target.value)
              }
            />
          </div>
          {errors.emergencyMailingAddress && (
            <p className="text-xs text-red-500 mt-1">
              {errors.emergencyMailingAddress}
            </p>
          )}
        </div>

        {/* Emergency Home Telephone */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Emergency Home Telephone:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Emergency Home Telephone"
              value={emergencyHomeTelephone}
              onChange={(e) =>
                handleFieldChange("emergencyHomeTelephone", e.target.value)
              }
            />
          </div>
          {errors.emergencyHomeTelephone && (
            <p className="text-xs text-red-500 mt-1">
              {errors.emergencyHomeTelephone}
            </p>
          )}
        </div>

        {/* Emergency Work Telephone */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Emergency Work Telephone:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Emergency Work Telephone"
              value={emergencyWorkTelephone}
              onChange={(e) =>
                handleFieldChange("emergencyWorkTelephone", e.target.value)
              }
            />
          </div>
          {errors.emergencyWorkTelephone && (
            <p className="text-xs text-red-500 mt-1">
              {errors.emergencyWorkTelephone}
            </p>
          )}
        </div>

        {/* Relationship to Participant */}
        <div className="w-full lg:w-[47%]">
          <h1 className="text-sm text-white font-normal md:text-lg">
            Relationship to Participant:
          </h1>
          <div className="h-12 bg-transparent border-white border-opacity-60 border-[1px] rounded-lg w-full mt-2 md:mt-4 md:h-16">
            <input
              className="outline-none w-[90%] overflow-hidden h-full text-xs text-white bg-transparent ml-2 md:ml-4 md:text-base"
              placeholder="Relationship to Participant"
              value={relationshipToParticipant}
              onChange={(e) =>
                handleFieldChange("relationshipToParticipant", e.target.value)
              }
            />
          </div>
          {errors.relationshipToParticipant && (
            <p className="text-xs text-red-500 mt-1">
              {errors.relationshipToParticipant}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-row w-full items-center justify-between">
          <button
            onClick={() => setView("view3")}
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

export default View4;
