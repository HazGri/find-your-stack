import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "John Doe",
      password: await bcrypt.hash("yourPassword123", 10), // Hachage du mot de passe
    },
  });
  await prisma.savedStack.create({
    data: {
      userId: user.id,
      stackData: JSON.stringify({
        frontend: "Next.js",
        backend: "Node.js",
        database: "PostgreSQL",
      }),
    },
  });

  console.log("Base de données seedée avec succès !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
