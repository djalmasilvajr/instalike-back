import { GoogleGenerativeAI } from "@google/generative-ai";

// https://ai.google.dev/gemini-api/docs/quickstart?hl=pt-br&lang=node
// https://ai.google.dev/gemini-api/docs/vision?hl=pt-br&lang=node

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// depois incluir outro parâmetro: texto, para que a função gere o texto que for necessário
export default async function gerarDescricaoComGemini(imageBuffer) {
  const prompt =
    "Gere uma descrição em português do brasil para a seguinte imagem";
  // "Gere uma alt text em português do brasil para a seguinte imagem";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Alt-text não disponível.";
  } catch (erro) {
    console.error("Erro ao obter alt-text:", erro.message, erro);
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}