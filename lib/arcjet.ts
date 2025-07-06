import 'server-only';

import arcjetDefault, {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
} from "@arcjet/next";
import { env } from "./env";

export const arcjet = {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
} as const;

export default arcjetDefault({
  key: env.ARCJET_KEY,
  characteristics: ["fingerprint"],
  // define base rules here, can also be empty if you don't want to have any base rules
  rules: [
    shield({
      mode: "LIVE",
    }),
  ],
});
