
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyAgg7r6CCqZawmGSfiGan0JpWluRNJhh0o");


export async function api(topic, count = 5) {
  try {
    const prompt = `
You are an MCQ generator.
Generate exactly ${count} multiple-choice questions on the topic "${topic}".
Each question MUST have:
- a "question" (string)
- an "options" array of exactly 4 strings
- an "answer" (must exactly match one of the options)

Output ONLY valid JSON.
Do NOT include explanations, backticks, markdown, or extra text.
Format as a JSON array, like this:

[
  {
    "question": "Sample question?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": "Option B"
  }
]

Random seed: ${Math.floor(Math.random() * 10000)}
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.9,      // for variety
        topP: 0.95,
        maxOutputTokens: 1200  // enough for 20+ MCQs
      },
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Safely parse JSON
    let questions;
    try {
      questions = JSON.parse(text);
    } catch {
      questions = [{ error: "Invalid JSON", raw: text }];
    }

    // Log generated questions
    console.log("📝 Generated Questions:", questions);

    return questions;
  } catch (err) {
    console.error("❌ Gemini error:", err);
    return [];
  }
}
