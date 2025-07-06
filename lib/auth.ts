
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env";
import { admin, emailOTP } from "better-auth/plugins";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_GITHUB_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        // Implement sending the email to the user
        await resend.emails.send({
          from: "MESHLMS <onboarding@resend.dev>",
          to: [email],
          subject: "MeshLMS - Verify your email",
          html: `
  <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
    <p>Hi there,</p>
    <p>Your one-time password (OTP) is:</p>
    <p style="font-size: 20px; font-weight: bold; color: #000;">${otp}</p>
    <p>This code will expire in 5 minutes. Please do not share it with anyone.</p>
    <p>Thanks,<br>The MESHLMS Team</p>
  </div>
`,
        });
      },
    }),
    admin()
  ],
});