// import Groq from "groq-sdk";
// import { GoogleGenAI } from "@google/genai";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// const gemini = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// const SYSTEM_PROMPT = `
// You are a botanical information assistant.

// The user will provide the name of a plant.

// Return ONLY valid JSON.
// Do not use markdown.
// Do not wrap the JSON in backticks.

// Use exactly this structure:

// {
//   "scientific_name": "",
//   "medicinal_properties": [],
//   "traditional_uses": [],
//   "benefits": [],
//   "safety": ""
// }

// Rules:

// - scientific_name must contain the botanical/scientific name.
// - medicinal_properties should contain 3 concise points.
// - traditional_uses should contain 3 concise points.
// - benefits should contain 2-3 concise points.
// - safety should contain a responsible safety note.
// - Do not provide medical diagnosis.
// - Do not provide dosage recommendations.
// - Use cautious wording such as "may support" or "traditionally used".
// - Keep the information concise and useful.
// `;

// function cleanJson(text) {
//   if (!text) {
//     throw new Error("Empty response from AI.");
//   }

//   let cleaned = text.trim();

//   // Remove markdown code fences if model returns them
//   cleaned = cleaned.replace(/^```json\s*/i, "");
//   cleaned = cleaned.replace(/^```\s*/i, "");
//   cleaned = cleaned.replace(/\s*```$/i, "");

//   // Find JSON object if there is extra text
//   const start = cleaned.indexOf("{");
//   const end = cleaned.lastIndexOf("}");

//   if (start !== -1 && end !== -1) {
//     cleaned = cleaned.substring(start, end + 1);
//   }

//   return JSON.parse(cleaned);
// }


// /* =========================================================
//    GROQ
// ========================================================= */

// async function getFromGroq(plantName) {
//   console.log("Getting plant information from Groq...");

//   const response = await groq.chat.completions.create({
//     model: "openai/gpt-oss-120b",

//     temperature: 0.2,

//     max_tokens: 800,

//     messages: [
//       {
//         role: "system",
//         content: SYSTEM_PROMPT,
//       },
//       {
//         role: "user",
//         content: `Provide botanical information for: ${plantName}`,
//       },
//     ],
//   });

//   const text =
//     response?.choices?.[0]?.message?.content;

//   console.log("Groq response received.");

//   return cleanJson(text);
// }


// /* =========================================================
//    GEMINI
// ========================================================= */

// async function getFromGemini(plantName) {
//   console.log("Getting plant information from Gemini...");

//   const response = await gemini.models.generateContent({
//     model: "gemini-3.6-flash",

//     contents: `
// ${SYSTEM_PROMPT}

// Provide botanical information for:

// ${plantName}
// `,
//   });

//   const text = response?.text;

//   console.log("Gemini response received.");

//   return cleanJson(text);
// }


// /* =========================================================
//    MAIN FUNCTION
// ========================================================= */

// export async function getPlantInfo(plantName) {
//   if (!plantName) {
//     throw new Error("Plant name is required.");
//   }

//   console.log(`Getting information for ${plantName}...`);

//   // ------------------------------------------
//   // TRY GROQ FIRST
//   // ------------------------------------------

//   try {
//     const groqResult = await getFromGroq(plantName);

//     console.log("Plant information generated using Groq.");

//     return {
//       ...groqResult,
//       provider: "Groq",
//     };

//   } catch (groqError) {

//     console.error(
//       "Groq failed:",
//       groqError?.message || groqError
//     );

//     console.log(
//       "Groq failed. Switching to Gemini..."
//     );
//   }


//   // ------------------------------------------
//   // FALLBACK TO GEMINI
//   // ------------------------------------------

//   try {
//     const geminiResult =
//       await getFromGemini(plantName);

//     console.log(
//       "Plant information generated using Gemini."
//     );

//     return {
//       ...geminiResult,
//       provider: "Gemini",
//     };

//   } catch (geminiError) {

//     console.error(
//       "Gemini failed:",
//       geminiError?.message || geminiError
//     );

//     throw new Error(
//       "Unable to retrieve plant information from Groq or Gemini."
//     );
//   }
// }