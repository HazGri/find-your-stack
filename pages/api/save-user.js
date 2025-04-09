// import { signIn } from "@/auth";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     try {
//       const result = await signIn("credentials", { email, password });
//       if (result.error) {
//         return res.status(401).json({ error: result.error });
//       }
//       return res.status(200).json({ message: "Success" });
//     } catch (error) {
//       return res.status(500).json({ error: "Authentication failed." });
//     }
//   } else {
//     return res.status(405).json({ error: "Method not allowed" });
//   }
// }
