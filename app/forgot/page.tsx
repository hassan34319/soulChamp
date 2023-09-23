import React from "react";
import Logo from "../(UiComponents)/Logo";
import { Email, Eye, Password } from "../(UiComponents)/Icons";
import ForgotContent from "./(ForgotComponents)/ForgotContent";
import { urlFor } from "../utils/urlFor";
import { client } from "../utils/client";

type Props = {};
export const revalidate =60
async function Forgot({}: Props) {
  const forgotBackground = await client.fetch(`
  *[_type == "forgotBackground"] {
    ...
  }
`);

  const backgroundImageUrl = urlFor(forgotBackground[0].image).url();  // Replace 'jpg' with the actual file extension of your image.

  return (
    <main
      className="bg-cover bg-top min-h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <ForgotContent />
    </main>
  );
}

export default Forgot;
