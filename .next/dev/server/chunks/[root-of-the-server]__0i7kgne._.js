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
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

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
"[project]/src/app/api/predict/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
// import { NextResponse } from "next/server";
// import { spawn } from "child_process";
// import fs from "fs";
// import path from "path";
// import { getPlantInfo } from "../../lib/plantInfo";
// export const runtime = "nodejs";
// export async function POST(request) {
//   let tempImagePath = null;
//   try {
//     // ------------------------------------
//     // 1. Get image from request
//     // ------------------------------------
//     const body = await request.json();
//     if (!body.image) {
//       return NextResponse.json(
//         {
//           error: "No image provided.",
//         },
//         {
//           status: 400,
//         }
//       );
//     }
//     // ------------------------------------
//     // 2. Convert base64 image
//     // ------------------------------------
//     const base64Data = body.image.replace(
//       /^data:image\/\w+;base64,/,
//       ""
//     );
//     const buffer = Buffer.from(base64Data, "base64");
//     // Create temp directory
//     const tempDir = path.join(process.cwd(), "temp");
//     if (!fs.existsSync(tempDir)) {
//       fs.mkdirSync(tempDir, {
//         recursive: true,
//       });
//     }
//     // Create unique image name
//     tempImagePath = path.join(
//       tempDir,
//       `plant-${Date.now()}.jpg`
//     );
//     fs.writeFileSync(tempImagePath, buffer);
//     console.log("Image saved:", tempImagePath);
//     // ------------------------------------
//     // 3. Python configuration
//     // ------------------------------------
//     // IMPORTANT:
//     // This is the Python installation found using:
//     //
//     // where.exe python
//     //
//     // D:\python\python.exe
//     const pythonPath = "D:\\python\\python.exe";
//     // Your trained model folder
//     const modelPath =
//       "D:\\major_project\\medicinal_plant_model\\predict.py";
//     console.log("Python path:", pythonPath);
//     console.log("Model script:", modelPath);
//     console.log("Running Python model...");
//     // ------------------------------------
//     // 4. Run Python ML model
//     // ------------------------------------
//     const prediction = await new Promise(
//       (resolve, reject) => {
//         const python = spawn(
//           pythonPath,
//           [
//             modelPath,
//             tempImagePath,
//           ],
//           {
//             windowsHide: true,
//           }
//         );
//         let stdout = "";
//         let stderr = "";
//         // --------------------------------
//         // Python stdout
//         // --------------------------------
//         python.stdout.on("data", (data) => {
//           stdout += data.toString();
//         });
//         // --------------------------------
//         // Python stderr
//         // --------------------------------
//         python.stderr.on("data", (data) => {
//           stderr += data.toString();
//         });
//         // --------------------------------
//         // Python process error
//         // --------------------------------
//         python.on("error", (error) => {
//           console.error(
//             "Failed to start Python:",
//             error
//           );
//           reject(
//             new Error(
//               `Could not start Python process: ${error.message}`
//             )
//           );
//         });
//         // --------------------------------
//         // Python process finished
//         // --------------------------------
//         python.on("close", (code) => {
//           console.log(
//             "Python process exited with code:",
//             code
//           );
//           if (code !== 0) {
//             console.error(
//               "Python stderr:",
//               stderr
//             );
//             console.error(
//               "Python stdout:",
//               stdout
//             );
//             reject(
//               new Error(
//                 stderr ||
//                   stdout ||
//                   `Python process exited with code ${code}`
//               )
//             );
//             return;
//           }
//           // --------------------------------
//           // Parse Python JSON output
//           // --------------------------------
//           try {
//             const output = stdout.trim();
//             console.log(
//               "Python raw output:",
//               output
//             );
//             /*
//              * Python should return:
//              *
//              * {"plant":"Tulasi","confidence":83.8}
//              *
//              * If anything else gets printed,
//              * find the JSON line.
//              */
//             const lines = output
//               .split("\n")
//               .map((line) => line.trim())
//               .filter(Boolean);
//             let result = null;
//             for (const line of lines) {
//               try {
//                 const parsed = JSON.parse(line);
//                 if (
//                   parsed.plant ||
//                   parsed.error
//                 ) {
//                   result = parsed;
//                   break;
//                 }
//               } catch {
//                 // Ignore non-JSON lines
//               }
//             }
//             if (!result) {
//               throw new Error(
//                 "No valid JSON prediction found."
//               );
//             }
//             if (result.error) {
//               throw new Error(result.error);
//             }
//             resolve(result);
//           } catch (error) {
//             console.error(
//               "Invalid Python output:",
//               stdout
//             );
//             reject(
//               new Error(
//                 `Could not parse Python prediction: ${error.message}`
//               )
//             );
//           }
//         });
//       }
//     );
//     // ------------------------------------
//     // 5. Prediction result
//     // ------------------------------------
//     console.log(
//       "Python prediction:",
//       prediction
//     );
//     const plant = prediction.plant;
//     const confidence = prediction.confidence;
//     if (!plant) {
//       throw new Error(
//         "Python model did not return a plant name."
//       );
//     }
//     // ------------------------------------
//     // 6. Get plant information from LLM
//     // ------------------------------------
//     console.log(
//       `Getting information for ${plant}...`
//     );
//     const plantInfo = await getPlantInfo(
//       plant
//     );
//     console.log(
//       "Plant information received."
//     );
//     // ------------------------------------
//     // 7. Return result to frontend
//     // ------------------------------------
//     return NextResponse.json({
//       plant,
//       confidence,
//       properties: plantInfo,
//       provider:
//         plantInfo?.provider || "AI",
//     });
//   } catch (error) {
//     // ------------------------------------
//     // Error handling
//     // ------------------------------------
//     console.error(
//       "Prediction error:",
//       error
//     );
//     return NextResponse.json(
//       {
//         error:
//           error?.message ||
//           "Prediction failed.",
//       },
//       {
//         status: 500,
//       }
//     );
//   } finally {
//     // ------------------------------------
//     // 8. Delete temporary image
//     // ------------------------------------
//     if (
//       tempImagePath &&
//       fs.existsSync(tempImagePath)
//     ) {
//       try {
//         fs.unlinkSync(tempImagePath);
//         console.log(
//           "Temporary image deleted."
//         );
//       } catch (error) {
//         console.error(
//           "Could not delete temp image:",
//           error
//         );
//       }
//     }
//   }
// }
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
// llama-3.3-70b-versatile was retired by Groq on 2026-06-17.
// openai/gpt-oss-120b is Groq's current recommended replacement.
const GROQ_MODEL = "openai/gpt-oss-120b";
// Turns "blue-jay_003_final(1).jpg" into "blue jay 003 final 1"
function cleanFileName(rawName) {
    const withoutExt = rawName.replace(/\.[a-zA-Z0-9]+$/, "");
    return withoutExt.replace(/[_\-.]+/g, " ").replace(/\d+/g, " ").replace(/\s+/g, " ").trim();
}
const SYSTEM_PROMPT = `You are a cataloguing assistant for a specimen log.
You will be given only the file name of an uploaded image (never the image itself).
Infer the single most plausible subject the file name refers to, then describe it.

Respond with strict JSON only — no markdown fences, no commentary, no extra keys.
Schema:
{
  "identified": boolean,
  "name": string,           // best-guess common name of the subject, Title Case
  "classification": string, // short category, e.g. "Bird — Corvidae" or "Consumer electronics"
  "confidence": "low" | "medium" | "high",
  "properties": string[],   // 3 to 5 short, factual, specific properties of the subject
  "note": string            // one short, plain sentence, max 18 words
}

If the file name is too generic or unclear to infer a subject (e.g. "img001" or "photo"),
set "identified" to false, "name" to "Unidentified Specimen", give a "low" confidence,
and let "properties" briefly describe what more would be needed — do not invent a fake subject.`;
async function POST(req) {
    try {
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "server_not_configured"
            }, {
                status: 500
            });
        }
        const formData = await req.formData();
        const file = formData.get("image");
        if (!file || typeof file === "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "no_file"
            }, {
                status: 400
            });
        }
        const fileName = file.name || "unnamed";
        const hint = cleanFileName(fileName);
        const groqRes = await fetch(GROQ_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                temperature: 0.4,
                max_tokens: 400,
                messages: [
                    {
                        role: "system",
                        content: SYSTEM_PROMPT
                    },
                    {
                        role: "user",
                        content: `File name: "${fileName}"\nCleaned hint: "${hint}"`
                    }
                ]
            })
        });
        if (!groqRes.ok) {
            const errText = await groqRes.text().catch(()=>"");
            console.error(`Groq API error ${groqRes.status}: ${errText.slice(0, 500)}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "upstream_error"
            }, {
                status: 502
            });
        }
        const payload = await groqRes.json();
        const raw = payload?.choices?.[0]?.message?.content || "";
        const parsed = safeParseSpecimen(raw);
        if (!parsed) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "parse_error"
            }, {
                status: 502
            });
        }
        // Only ever return the clean, final shape — nothing about the
        // prompt, the model, or the raw completion leaves this route.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(parsed);
    } catch (err) {
        console.error("Predict route failed:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "unexpected_error"
        }, {
            status: 500
        });
    }
}
function safeParseSpecimen(raw) {
    const stripped = raw.trim().replace(/^```(json)?/i, "").replace(/```$/, "").trim();
    let data;
    try {
        data = JSON.parse(stripped);
    } catch  {
        return null;
    }
    if (typeof data !== "object" || data === null) return null;
    return {
        identified: Boolean(data.identified),
        name: typeof data.name === "string" ? data.name.slice(0, 80) : "Unknown",
        classification: typeof data.classification === "string" ? data.classification.slice(0, 80) : "Unclassified",
        confidence: [
            "low",
            "medium",
            "high"
        ].includes(data.confidence) ? data.confidence : "low",
        properties: Array.isArray(data.properties) ? data.properties.slice(0, 5).map((p)=>String(p).slice(0, 140)) : [],
        note: typeof data.note === "string" ? data.note.slice(0, 160) : ""
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0i7kgne._.js.map