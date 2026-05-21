const Prompts = require("../model/promptModel");
const { GoogleGenAI } = require("@google/genai");

const sendPrompt = async (req, res) => {
  //   try {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: req.body.prompt,
  });

  await Prompts.insertOne({
    question: req.body.prompt,
    promptData: response.text,
  });

  res.status(200).json({ AIResponse: response.text });
  //   } catch (error) {
  res.status(500).json({ message: "failed to generate", err: error });
};
// };

module.exports = sendPrompt;