import React from "react";
import Logo from "../(UiComponents)/Logo";
import { Email, Eye, Password } from "../(UiComponents)/Icons";
import CheckContent from "./(CheckComponents)/CheckContent";

type Props = {};

function Forgot({}: Props) {
  const backgroundImageUrl = "/forgotPassword.png"; // Replace 'jpg' with the actual file extension of your image.

  return (
    <main
      className="bg-cover bg-top min-h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <CheckContent />
    </main>
  );
}

export default Forgot;