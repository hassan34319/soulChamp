import React from "react";
import Logo from "../(UiComponents)/Logo";
import { Email, Eye, Password } from "../(UiComponents)/Icons";
import SignUpContent from "./(signIUpComponents)/SignUpContent";

type Props = {};

function signUp({}: Props) {
  const backgroundImageUrl = "/signup.png"; // Replace 'jpg' with the actual file extension of your image.

  return (
    <main
      className="bg-cover bg-top min-h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <SignUpContent />
    </main>
  );
}

export default signUp;
