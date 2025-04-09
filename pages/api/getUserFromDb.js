// import prisma from "@/lib/prisma";
// import bcrypt from 'bcryptjs';


// async function getUserFromDb(email, passwordHash) {
//   const user = await prisma.user.findUnique({
//     where: { email: email },
//   });

//   if (user && bcrypt.compareSync(passwordHash, user.password)) {
//     return user;
//   }
//   return null; // Aucun utilisateur trouvé ou mot de passe incorrect
// }

// export default getUserFromDb