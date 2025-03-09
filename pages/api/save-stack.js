import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "la methode n'est pas bonne" });
  }
  const { userId, stackData } = req.body;
  if (!userId || !stackData) {
    return res.status(400).json({ error: "userId et stackData sont attendu" });
  }
  try {
    const newData = await prisma.savedStack.create({
      data: {
        userId: userId,
        stackData: JSON.stringify(stackData),
      },
    });
    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "erreur rencontré" });
  }
}
