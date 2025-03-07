import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const users = await prisma.user.findMany(); // Récupère tous les utilisateurs
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}
