"use client"
import React, { createContext, useContext, useState } from 'react';

const FormFieldsContext = createContext();

export const useFormFieldsContext = () => {
  const context = useContext(FormFieldsContext);
  if (!context) {
    throw new Error('useFormFieldsContext must be used within a FormFieldsContextProvider');
  }
  return context;
};

export const FormFieldsContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [youth, setYouth] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [age, setAge] = useState("");
  const [district, setDistrict] = useState("");
  const [raceEthnicity, setRaceEthnicity] = useState("");
  const [gender, setGender] = useState("");
  const [releaseOfInformation, setReleaseOfInformation] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  
  // Additional fields for guardian information
  const [guardianFirstName, setGuardianFirstName] = useState("");
  const [guardianLastName, setGuardianLastName] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const [homeTelephone, setHomeTelephone] = useState("");
  const [workTelephone, setWorkTelephone] = useState("");
  const [guardianEmailAddress, setGuardianEmailAddress] = useState("");
  
  // Additional fields for emergency contact information
  const [emergencyFirstName, setEmergencyFirstName] = useState("");
  const [emergencyLastName, setEmergencyLastName] = useState("");
  const [emergencyMailingAddress, setEmergencyMailingAddress] = useState("");
  const [emergencyHomeTelephone, setEmergencyHomeTelephone] = useState("");
  const [emergencyWorkTelephone, setEmergencyWorkTelephone] = useState("");
  const [relationshipToParticipant, setRelationshipToParticipant] = useState("");

  // New fields for Questionnaire section
  const [willingToParticipate, setWillingToParticipate] = useState("");
  const [personalWeakness, setPersonalWeakness] = useState("");
  const [personalStrength, setPersonalStrength] = useState("");
  const [challengesInCommunity, setChallengesInCommunity] = useState("");
  const [goalsForNext12Months, setGoalsForNext12Months] = useState("");
  const [victimOfCrime, setVictimOfCrime] = useState("");
  const [incarcerated, setIncarcerated] = useState("");
  const [lifeSkillsToImproveUpon, setLifeSkillsToImproveUpon] = useState("");
  const [activitiesToTry, setActivitiesToTry] = useState("");
  const [resourcesForGoals, setResourcesForGoals] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");

  const contextValue = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    youth,
    setYouth,
    streetAddress,
    setStreetAddress,
    zipCode,
    setZipCode,
    age,
    setAge,
    district,
    setDistrict,
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
    willingToParticipate,
    setWillingToParticipate,
    personalWeakness,
    setPersonalWeakness,
    personalStrength,
    setPersonalStrength,
    challengesInCommunity,
    setChallengesInCommunity,
    goalsForNext12Months,
    setGoalsForNext12Months,
    victimOfCrime,
    setVictimOfCrime,
    incarcerated,
    setIncarcerated,
    lifeSkillsToImproveUpon,
    setLifeSkillsToImproveUpon,
    activitiesToTry,
    setActivitiesToTry,
    resourcesForGoals,
    setResourcesForGoals,
    additionalInformation,
    setAdditionalInformation,
  };

  return (
    <FormFieldsContext.Provider value={contextValue}>
      {children}
    </FormFieldsContext.Provider>
  );
};

export default FormFieldsContextProvider;

export const useStateContext = () => useContext(FormFieldsContext);
