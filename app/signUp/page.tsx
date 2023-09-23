import React from "react";
import Logo from "../(UiComponents)/Logo";
import { Email, Eye, Password } from "../(UiComponents)/Icons";
import SignUpContent from "./(signIUpComponents)/SignUpContent";
import { client } from "../utils/client";
import { urlFor } from "../utils/urlFor";

type Props = {};
export const revalidate =60
async function signUp({}: Props) {
  const signUpBackground = await client.fetch(`
  *[_type == "signUpBackground"] {
    ...
  }
`);

  const backgroundImageUrl = urlFor(signUpBackground[0].image).url(); // Replace 'jpg' with the actual file extension of your image.

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
