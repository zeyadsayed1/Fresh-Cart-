import { BASE_URL } from "@/constants/api";
import { NextAuthOptions } from "next-auth";
import { jwtDecode } from "jwt-decode";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const nextAuthConfig: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "signin",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async function (credentials) {
        try {
          const response = await fetch(
            `${BASE_URL}/api/v1/auth/signin`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            },
          );
          const resData = await response.json();

          if (resData.message === "success") {
            const { role, ...userData } = resData.user;
            const x: any = jwtDecode(resData.token);
            return { ...userData, id: x.id, userToken: resData.token };
          }

          console.error("Login failed:", resData.message);
          return null;
        } catch (error) {
          console.error("NextAuth Authorize Error:", error);
          return null;
        }
      },
    }),

    ...(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET ? [
      GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
      })
    ] : []),

    ...(process.env.AUTH_FACEBOOK_ID && process.env.AUTH_FACEBOOK_SECRET ? [
      FacebookProvider({
        clientId: process.env.AUTH_FACEBOOK_ID,
        clientSecret: process.env.AUTH_FACEBOOK_SECRET,
        authorization: {
          params: {
            scope: "email,public_profile",
          },
        },
      })
    ] : [])
  ],
  debug: process.env.NODE_ENV === "development" || true,
  logger: {
    error(code, metadata) {
      console.error(`[next-auth][error][${code}]`, metadata);
    },
    warn(code) {
      console.warn(`[next-auth][warn][${code}]`);
    },
    debug(code, metadata) {
      console.log(`[next-auth][debug][${code}]`, metadata);
    },
  },
  pages: { signIn: "/signin" },
  callbacks: {
    jwt: async function ({ user, token, account }: any) {
      if (user) {
        token.userId = user.id;

        if (account?.provider === "google" || account?.provider === "facebook") {
          const secretPass = "Social_Login_Secure_123!";
          try {
            let response = await fetch(`${BASE_URL}/api/v1/auth/signin`, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ email: user.email, password: secretPass }),
            });
            let resData = await response.json();

            if (resData.message !== "success") {
              const signupRes = await fetch(`${BASE_URL}/api/v1/auth/signup`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  name: user.name,
                  email: user.email,
                  password: secretPass,
                  rePassword: secretPass,
                  phone: "01012345678",
                }),
              });
              const signupData = await signupRes.json();
              if (signupData.message === "success") {
                token.credentialToken = signupData.token;
              }
            } else {
              token.credentialToken = resData.token;
            }
          } catch (e) {
            console.error("Backend sync failed:", e);
          }
        } else {
          token.credentialToken = user.userToken;
        }
      }
      return token;
    },
    session: function ({ session, token }: any) {
      if (session.user) {
        session.user.id = token.userId;
        session.user.credentialToken = token.credentialToken;
      }
      return session;
    },
  },
};
