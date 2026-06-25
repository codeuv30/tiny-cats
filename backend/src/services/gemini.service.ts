import { GoogleGenAI } from "@google/genai";
import CONFIG from "../config/config.ts";

const ai = new GoogleGenAI({
    apiKey: CONFIG.GEMINI_API_KEY
});

export async function getAiResponse(prompt: string): Promise<string | undefined> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });

  return response.text;
}
