import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "mauvaise méthode" });
  }
  const { name, email, userPassword } = req.body;
  if (!name || !email || !userPassword) {
    return res.status(500).json({ error: "tous les champs sont requis!" });
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return res.status(400).json({ error: "email existant" });
  }
  const password = await bcrypt.hash(userPassword, 10);
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status().json({ error: "erreur lors de la création de l'user" });
  } finally {
    await prisma.$disconnect();
  }
}
