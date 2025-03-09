import { stackSchema } from "@/schémas/stack-schema";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";

const openai = new OpenAI();

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
          content:
            "Tu es un assistant qui génère des stacks technologiques adaptées aux projets. Fournis une stack front-end, back-end et base de données adaptées au projet décrit",
        },
        {
          role: "user",
          content: JSON.stringify(prompt),
        },
      ],
      response_format: zodResponseFormat(stackSchema, "stack"),
    });

    const stack = completion.choices[0].message.content;
    console.log(stack)
    res.status(200).json({ stack });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "erreur lors de la complétion de la stack" });
  }
}
