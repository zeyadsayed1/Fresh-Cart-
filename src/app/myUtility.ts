"use server";

import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/NextAuth/NextAuth";

export async function getUserToken() {
  const session = await getServerSession(nextAuthConfig);
  if (!session) return null;
  const token = (session as any)?.user?.credentialToken as string | undefined;
  if (!token) throw new Error("Cart requires email/password login. Please sign in with your email and password.");
  return token;
}
