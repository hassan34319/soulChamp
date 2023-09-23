import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import course from "./sanity/course";
import {apply} from "./sanity/apply";
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";
import { user, account, verificationToken } from 'next-auth-sanity/schemas'

import { apiVersion, projectId, dataset } from "./sanity/env";
import activities from "./sanity/activities";
import applicationProcess from "./sanity/applicationProcess";
import applyBackground from "./sanity/applyBackground";
import benefits from "./sanity/benefits";
import ForgotBackground from "./sanity/ForgotBackground";
import homeBackground from "./sanity/homeBackground";
import Members from "./sanity/Members";
import programPrinciples from "./sanity/programPrinciples";
import ResetBackground from "./sanity/ResetBackground";
import serveCommunity from "./sanity/serveCommunity";
import signInBackground from "./sanity/signInBackground";
import signUpBackground from "./sanity/signUpBackground";

export default defineConfig({
  name: "default",
  title: "Soul Champ",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [course,apply,user,account,verificationToken,activities,applicationProcess,applyBackground,benefits,ForgotBackground,homeBackground,Members,programPrinciples,ResetBackground,serveCommunity,signInBackground,signUpBackground],
  },
});
