import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import authConfig from "./auth.config"; // Importer la configuration de `auth.config.js`

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Utilisation de JWT pour la gestion de session
  },
  ...authConfig, // Ajouter la configuration de `auth.config.js`
});
