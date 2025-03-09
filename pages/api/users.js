import prisma from "@/lib/prisma"; 

export default async function handler(req,res){
  if(req.method !== "GET"){
    console.log("la methode n'est pas bonne")
    res.status(405).json({error: "la methode n'est pas la bonne"})
  }
  try{
    const users = await prisma.user.findMany();
    res.status(200).json(users)
  }
  catch(error){
    console.error(error)
    res.status(500).json({error:"erreur"})
  }
}