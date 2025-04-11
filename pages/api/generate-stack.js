import { stackSchema } from "@/schémas/stack-schema";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Utilisation de la variable d'environnement
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Bad method request" });
  }
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "prompt nécessaire" });
  }
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
          Tu es un assistant qui génère des stacks technologiques adaptées aux projets (réponds en français ou en anglais selon la langue utilisé par le prompt de l'utilisateur). 
          Pour chaque partie de la stack (front-end, back-end, base de données), 
          fournis une stack technologique avec une alternative pour chaque choix, et explique pourquoi cette alternative pourrait être une bonne option.
          Assure-toi de fournir une explication pour chaque section de la stack ainsi qu'une alternative avec son explication :
          - Front-end (framework, gestion d'état, etc.)
          - Back-end (framework, services, etc.)
          - Base de données (type, choix de base, etc.)
        `,
        },
        {
          role: "user",
          content: JSON.stringify(prompt),
        },
      ],
      response_format: zodResponseFormat(stackSchema, "stack"),
    });

    const stack = completion.choices[0].message.content;
    res.status(200).json({ stack });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "erreur lors de la complétion de la stack" });
  }
}
