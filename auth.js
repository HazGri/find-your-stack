import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import GitHub from "next-auth/providers/github";

const gitHubId = process.env.AUTH_GITHUB_ID;
const gitHubSecret = process.env.AUTH_GITHUB_SECRET;

if (!gitHubId || !gitHubSecret) {
  throw new Error("missing githubid or githubsecret");
}
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Github({ clientId: gitHubId, clientSecret: gitHubSecret })],
});
