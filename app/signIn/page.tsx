import React from "react";
import Logo from "../(UiComponents)/Logo";
import { Email, Eye, Password } from "../(UiComponents)/Icons";
import SignInContent from "./(signInComponents)/SignInContent";
import { signUp } from 'next-auth-sanity/client';
import { signIn } from 'next-auth/react';

type Props = {};

async function signInPage({}: Props) {
  
  const backgroundImageUrl = "/signIn.png"; // Replace 'jpg' with the actual file extension of your image.

  return (
    <main
      className="bg-cover bg-top min-h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <SignInContent />
    </main>
  );
}

export default signInPage;
