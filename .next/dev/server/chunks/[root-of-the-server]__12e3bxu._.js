module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/predict/route.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // // app/api/predict/route.js
// // import { NextResponse } from "next/server";
// // import Groq from "groq-sdk";
// // const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
// // const GROQ_VISION_MODEL = "qwen/qwen3.6-27b";
// // const GROQ_TEXT_MODEL = "openai/gpt-oss-120b";
// // const KNOWN_CLASSES = [
// //   "Turmeric", "Tulsi", "Tomato", "Pumpkin", "Pomoegranate", "Pepper", "Pea", "Papaya",
// //   "Palak(Spinach)", "Padri", "Onion", "Nerale", "Neem", "Marigold", "Mango", "Lemon",
// //   "Kohlrabi", "Jasmine", "Jackfruit", "Hibiscus", "Henna", "Guava", "Globe Amarnath",
// //   "Gasagase", "Ganigale", "Eucalyptus", "Drumstick", "Doddpathre", "Curry", "Coriander",
// //   "Common rue(naagdalli)", "Coffee", "Citron lime(herelikai)", "Chakte", "Catharanthus",
// //   "Castor", "Caricature", "camphor", "Bringaraja", "Bhrami", "Betel", "Beans", "Bamboo",
// //   "Balloon_Vine", "Badipala", "Astma_weed", "ashoka", "Arali", "Amla", "Aloevera",
// // ];
// // function stripReasoning(text) {
// //   return (text || "").replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
// // }
// // function normalize(s) {
// //   return (s || "").toLowerCase().replace(/[^a-z]/g, "");
// // }
// // function snapToKnownClass(name) {
// //   if (!name) return name;
// //   const a = normalize(name);
// //   let best = null;
// //   let bestRatio = 0;
// //   for (const cls of KNOWN_CLASSES) {
// //     const b = normalize(cls);
// //     if (a === b || a.includes(b) || b.includes(a)) return cls;
// //     const ratio = similarity(a, b);
// //     if (ratio > bestRatio) {
// //       best = cls;
// //       bestRatio = ratio;
// //     }
// //   }
// //   return bestRatio >= 0.6 ? best : name;
// // }
// // // crude Levenshtein-based similarity ratio, no deps
// // function similarity(a, b) {
// //   if (!a.length && !b.length) return 1;
// //   const dist = levenshtein(a, b);
// //   return 1 - dist / Math.max(a.length, b.length);
// // }
// // function levenshtein(a, b) {
// //   const m = a.length, n = b.length;
// //   const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
// //   for (let i = 0; i <= m; i++) dp[i][0] = i;
// //   for (let j = 0; j <= n; j++) dp[0][j] = j;
// //   for (let i = 1; i <= m; i++) {
// //     for (let j = 1; j <= n; j++) {
// //       dp[i][j] =
// //         a[i - 1] === b[j - 1]
// //           ? dp[i - 1][j - 1]
// //           : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
// //     }
// //   }
// //   return dp[m][n];
// // }
// // async function llmVerifyPlant(imageDataUrl) {
// //   const classList = KNOWN_CLASSES.join(", ");
// //   const response = await groq.chat.completions.create({
// //     model: GROQ_VISION_MODEL,
// //     messages: [
// //       {
// //         role: "user",
// //         content: [
// //           {
// //             type: "text",
// //             text:
// //               `Look closely at this image. Identify the plant. It must be one of EXACTLY these classes, ` +
// //               `and nothing outside this list: ${classList}. Reply with ONLY the matching name copied exactly ` +
// //               `as it appears in the list above — no explanation, no extra words.`,
// //           },
// //           { type: "image_url", image_url: { url: imageDataUrl } },
// //         ],
// //       },
// //     ],
// //     temperature: 0.1,
// //     max_tokens: 300,
// //     reasoning_format: "hidden",
// //   });
// //   const raw = response.choices[0]?.message?.content || "";
// //   const guess = stripReasoning(raw).split("\n")[0].trim();
// //   return snapToKnownClass(guess);
// // }
// // async function llmGetProperties(plantName) {
// //   const response = await groq.chat.completions.create({
// //     model: GROQ_TEXT_MODEL,
// //     messages: [
// //       {
// //         role: "user",
// //         content:
// //           `Give a concise, well-organized overview of the medicinal plant '${plantName}'. ` +
// //           `Include: 1) Key medicinal properties, 2) Traditional/common uses and benefits, ` +
// //           `3) A brief safety note (e.g. dosage caution, allergy risk, or 'consult a professional' ` +
// //           `where relevant). Use short markdown sections with headers. Keep it under 200 words. ` +
// //           `Do not mention that you are an AI or how you know this.`,
// //       },
// //     ],
// //     temperature: 0.4,
// //     max_tokens: 700,
// //     reasoning_format: "hidden",
// //   });
// //   const raw = response.choices[0]?.message?.content || "";
// //   return stripReasoning(raw);
// // }
// // export async function POST(req) {
// //   try {
// //     const { image } = await req.json();
// //     if (!image) {
// //       return NextResponse.json({ plant: "No image provided", properties: "" }, { status: 400 });
// //     }
// //     const plant = await llmVerifyPlant(image);
// //     let properties = "";
// //     try {
// //       properties = await llmGetProperties(plant);
// //     } catch (e) {
// //       console.error("llmGetProperties failed:", e);
// //       properties = "_Properties information is temporarily unavailable._";
// //     }
// //     return NextResponse.json({ plant, properties });
// //   } catch (err) {
// //     console.error("predict route error:", err);
// //     return NextResponse.json({ plant: "Error", properties: "Something went wrong." }, { status: 500 });
// //   }
// // }
// // app/api/predict/route.js
// import { NextResponse } from "next/server";
// import Groq from "groq-sdk";
// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });
// const GROQ_VISION_MODEL = "openai/gpt-oss-120b";
// const GROQ_TEXT_MODEL = "openai/gpt-oss-20b";
// const KNOWN_CLASSES = [
//   "Turmeric",
//   "Tulsi",
//   "Tomato",
//   "Pumpkin",
//   "Pomoegranate",
//   "Pepper",
//   "Pea",
//   "Papaya",
//   "Palak(Spinach)",
//   "Padri",
//   "Onion",
//   "Nerale",
//   "Neem",
//   "Marigold",
//   "Mango",
//   "Lemon",
//   "Kohlrabi",
//   "Jasmine",
//   "Jackfruit",
//   "Hibiscus",
//   "Henna",
//   "Guava",
//   "Globe Amarnath",
//   "Gasagase",
//   "Ganigale",
//   "Eucalyptus",
//   "Drumstick",
//   "Doddpathre",
//   "Curry",
//   "Coriander",
//   "Common rue(naagdalli)",
//   "Coffee",
//   "Citron lime(herelikai)",
//   "Chakte",
//   "Catharanthus",
//   "Castor",
//   "Caricature",
//   "camphor",
//   "Bringaraja",
//   "Bhrami",
//   "Betel",
//   "Beans",
//   "Bamboo",
//   "Balloon_Vine",
//   "Badipala",
//   "Astma_weed",
//   "ashoka",
//   "Arali",
//   "Amla",
//   "Aloevera",
// ];
// function stripReasoning(text) {
//   return (text || "")
//     .replace(/<think>[\s\S]*?<\/think>/gi, "")
//     .trim();
// }
// function normalize(text) {
//   return (text || "")
//     .toLowerCase()
//     .replace(/[^a-z]/g, "");
// }
// function snapToKnownClass(name) {
//   if (!name) return name;
//   const normalizedName = normalize(name);
//   let bestClass = null;
//   let bestRatio = 0;
//   for (const plantClass of KNOWN_CLASSES) {
//     const normalizedClass = normalize(plantClass);
//     // Exact match
//     if (normalizedName === normalizedClass) {
//       return plantClass;
//     }
//     // Partial match
//     if (
//       normalizedName.includes(normalizedClass) ||
//       normalizedClass.includes(normalizedName)
//     ) {
//       return plantClass;
//     }
//     const ratio = similarity(normalizedName, normalizedClass);
//     if (ratio > bestRatio) {
//       bestClass = plantClass;
//       bestRatio = ratio;
//     }
//   }
//   return bestRatio >= 0.6 ? bestClass : name;
// }
// // Levenshtein similarity
// function similarity(a, b) {
//   if (!a.length && !b.length) {
//     return 1;
//   }
//   const distance = levenshtein(a, b);
//   return 1 - distance / Math.max(a.length, b.length);
// }
// function levenshtein(a, b) {
//   const m = a.length;
//   const n = b.length;
//   const dp = Array.from(
//     { length: m + 1 },
//     () => new Array(n + 1).fill(0)
//   );
//   for (let i = 0; i <= m; i++) {
//     dp[i][0] = i;
//   }
//   for (let j = 0; j <= n; j++) {
//     dp[0][j] = j;
//   }
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (a[i - 1] === b[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else {
//         dp[i][j] =
//           1 +
//           Math.min(
//             dp[i - 1][j],
//             dp[i][j - 1],
//             dp[i - 1][j - 1]
//           );
//       }
//     }
//   }
//   return dp[m][n];
// }
// async function llmVerifyPlant(imageDataUrl) {
//   const classList = KNOWN_CLASSES.join(", ");
//   const response = await groq.chat.completions.create({
//     model: GROQ_VISION_MODEL,
//     messages: [
//       {
//         role: "user",
//         content: [
//           {
//             type: "text",
//             text:
//               `Look closely at this image and identify the plant. ` +
//               `The answer MUST be exactly one of these supported classes: ` +
//               `${classList}. ` +
//               `Do not choose anything outside this list. ` +
//               `Reply with ONLY the matching class name exactly as written in the list. ` +
//               `Do not provide an explanation.`,
//           },
//           {
//             type: "image_url",
//             image_url: {
//               url: imageDataUrl,
//             },
//           },
//         ],
//       },
//     ],
//     temperature: 0.1,
//     max_tokens: 300,
//     reasoning_format: "hidden",
//   });
//   const raw = response.choices?.[0]?.message?.content || "";
//   const cleaned = stripReasoning(raw);
//   const guess = cleaned
//     .split("\n")[0]
//     .trim();
//   console.log("Vision model raw response:", raw);
//   console.log("Vision model guess:", guess);
//   return snapToKnownClass(guess);
// }
// async function llmGetProperties(plantName) {
//   const response = await groq.chat.completions.create({
//     model: GROQ_TEXT_MODEL,
//     messages: [
//       {
//         role: "user",
//         content:
//           `Give a concise and well-organized overview of the medicinal plant "${plantName}". ` +
//           `Include the following sections:\n\n` +
//           `## Key Medicinal Properties\n` +
//           `Mention important traditionally recognized medicinal properties.\n\n` +
//           `## Traditional Uses & Benefits\n` +
//           `Mention common traditional uses and potential benefits.\n\n` +
//           `## Safety Note\n` +
//           `Mention relevant safety concerns such as allergies, dosage caution, pregnancy concerns, ` +
//           `drug interactions, or when professional medical advice should be sought.\n\n` +
//           `Keep the response under 200 words. ` +
//           `Do not mention that you are an AI.`,
//       },
//     ],
//     temperature: 0.4,
//     max_tokens: 700,
//     reasoning_format: "hidden",
//   });
//   const raw = response.choices?.[0]?.message?.content || "";
//   return stripReasoning(raw);
// }
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { image } = body;
//     if (!image) {
//       return NextResponse.json(
//         {
//           plant: "No image provided",
//           properties: "",
//         },
//         {
//           status: 400,
//         }
//       );
//     }
//     if (!process.env.GROQ_API_KEY) {
//       console.error("GROQ_API_KEY is missing");
//       return NextResponse.json(
//         {
//           plant: "Error",
//           properties: "GROQ API key is not configured.",
//         },
//         {
//           status: 500,
//         }
//       );
//     }
//     console.log("Starting plant identification...");
//     // Step 1: Identify plant using vision model
//     const plant = await llmVerifyPlant(image);
//     console.log("Identified plant:", plant);
//     // Step 2: Generate plant information
//     let properties = "";
//     try {
//       properties = await llmGetProperties(plant);
//     } catch (error) {
//       console.error(
//         "llmGetProperties failed:",
//         error
//       );
//       properties =
//         "_Properties information is temporarily unavailable._";
//     }
//     return NextResponse.json({
//       plant,
//       properties,
//     });
//   } catch (error) {
//     console.error(
//       "Predict route error:",
//       error
//     );
//     return NextResponse.json(
//       {
//         plant: "Error",
//         properties:
//           "Something went wrong while identifying the plant.",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12e3bxu._.js.map