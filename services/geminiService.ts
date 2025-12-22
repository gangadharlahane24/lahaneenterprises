import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PRODUCTS, SERVICES } from "../constants";

const getSystemInstruction = () => {
  const serviceList = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
  const productList = PRODUCTS.map(p => `- ${p.name} ($${p.price}): ${p.description}`).join('\n');

  return `
    You are 'SafeNet Assistant', a helpful and professional sales and support agent for 'SafeNet Solutions'.
    
    Our Services:
    ${serviceList}
    
    Our Products for Sale:
    ${productList}
    
    Your goals:
    1. Answer questions about Invisible Grills (emphasize safety, 316 SS material, unblocked views).
    2. Explain Bird Netting solutions (HDPE material, humane).
    3. Suggest pest control advice (safety for pets/kids).
    4. Help customers choose products from our catalog.
    
    Tone: Professional, safety-conscious, helpful, and concise.
    If asked about pricing for services (installation), say "Pricing depends on square footage. Please request a quote."
    If asked about product prices, use the catalog provided.
    Do not invent products we don't have.
  `;
};

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const streamChatResponse = async (
  history: { role: 'user' | 'model'; parts: { text: string }[] }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  const ai = initGemini();
  if (!ai) {
    onChunk("I'm sorry, I cannot connect to the AI service right now. Please check the API Key configuration.");
    return;
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
        temperature: 0.7,
      },
      history: history
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        onChunk(c.text);
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    onChunk("\n[System: Sorry, I encountered an error processing your request.]");
  }
};