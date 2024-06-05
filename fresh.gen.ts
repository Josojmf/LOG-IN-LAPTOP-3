// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $register from "./routes/register.tsx";
import * as $secret from "./routes/secret.tsx";
import * as $Button from "./islands/Button.tsx";
import * as $ButtonApi from "./islands/ButtonApi.tsx";
import * as $Character from "./islands/Character.tsx";
import * as $LogInForm from "./islands/LogInForm.tsx";
import * as $Number from "./islands/Number.tsx";
import * as $RegisterForm from "./islands/RegisterForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.tsx": $_middleware,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/register.tsx": $register,
    "./routes/secret.tsx": $secret,
  },
  islands: {
    "./islands/Button.tsx": $Button,
    "./islands/ButtonApi.tsx": $ButtonApi,
    "./islands/Character.tsx": $Character,
    "./islands/LogInForm.tsx": $LogInForm,
    "./islands/Number.tsx": $Number,
    "./islands/RegisterForm.tsx": $RegisterForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;