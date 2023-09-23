import React from "react";
import Logo from "../(UiComponents)/Logo";
import { Email, Eye, Password } from "../(UiComponents)/Icons";
import CheckContent from "./(CheckComponents)/CheckContent";
import { urlFor } from "../utils/urlFor";
import { client } from "../utils/client";

type Props = {};
export const revalidate =60
async function Reset({}: Props) {
  const resetBackground = await client.fetch(`
  *[_type == "resetBackground"] {
    ...
  }
`);

  const backgroundImageUrl = urlFor(resetBackground[0].image).url();  // Replace 'jpg' with the actual file extension of your image.

  return (
    <main
      className="bg-cover bg-top min-h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <CheckContent />
    </main>
  );
}

export default Reset;