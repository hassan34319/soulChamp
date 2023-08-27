import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import course from "./sanity/course";
import {apply} from "./sanity/apply";
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";
import { user, account, verificationToken } from 'next-auth-sanity/schemas'

import { apiVersion, projectId, dataset } from "./sanity/env";

export default defineConfig({
  name: "default",
  title: "Soul Champ",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [course,apply,user,account,verificationToken],
  },
});
