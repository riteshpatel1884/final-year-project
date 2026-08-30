module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/predict/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$plantInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/plantInfo.js [app-route] (ecmascript)");
;
;
;
;
;
const runtime = "nodejs";
async function POST(request) {
    let tempImagePath = null;
    try {
        const body = await request.json();
        if (!body.image) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No image provided."
            }, {
                status: 400
            });
        }
        // ------------------------------------
        // 1. Convert base64 image
        // ------------------------------------
        const base64Data = body.image.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, "base64");
        const tempDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "temp");
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(tempDir)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(tempDir, {
                recursive: true
            });
        }
        tempImagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(tempDir, `plant-${Date.now()}.jpg`);
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(tempImagePath, buffer);
        console.log("Image saved:", tempImagePath);
        // ------------------------------------
        // 2. Run Python ML model
        // ------------------------------------
        const pythonPath = "D:\\python\\python.exe";
        const modelPath = "D:\\major_project\\medicinal_plant_model\\predict.py";
        console.log("Running Python model...");
        const prediction = await new Promise((resolve, reject)=>{
            const python = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["spawn"])(pythonPath, [
                modelPath,
                tempImagePath
            ]);
            let stdout = "";
            let stderr = "";
            python.stdout.on("data", (data)=>{
                stdout += data.toString();
            });
            python.stderr.on("data", (data)=>{
                stderr += data.toString();
            });
            python.on("error", (error)=>{
                reject(error);
            });
            python.on("close", (code)=>{
                if (code !== 0) {
                    console.error("Python error:", stderr);
                    reject(new Error(stderr || `Python process exited with code ${code}`));
                    return;
                }
                try {
                    // Python transformers prints loading information
                    // to stderr, while JSON comes from stdout.
                    const result = JSON.parse(stdout.trim());
                    resolve(result);
                } catch (error) {
                    console.error("Invalid Python output:", stdout);
                    reject(new Error("Could not parse Python prediction."));
                }
            });
        });
        console.log("Python prediction:", prediction);
        const plant = prediction.plant;
        const confidence = prediction.confidence;
        // ------------------------------------
        // 3. Get plant information from LLM
        // ------------------------------------
        console.log(`Getting information for ${plant}...`);
        const plantInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$plantInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPlantInfo"])(plant);
        // ------------------------------------
        // 4. Return everything to frontend
        // ------------------------------------
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            plant,
            confidence,
            properties: plantInfo,
            provider: plantInfo.provider
        });
    } catch (error) {
        console.error("Prediction error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Prediction failed."
        }, {
            status: 500
        });
    } finally{
        // ------------------------------------
        // 5. Delete temporary image
        // ------------------------------------
        if (tempImagePath && __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(tempImagePath)) {
            try {
                __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(tempImagePath);
            } catch (error) {
                console.error("Could not delete temp image:", error);
            }
        }
    }
}
}),
"[project]/src/app/lib/plantInfo.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPlantInfo",
    ()=>getPlantInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/groq-sdk/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Groq__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/groq-sdk/client.mjs [app-route] (ecmascript) <export Groq as default>");
(()=>{
    const e = new Error("Cannot find module '@google/genai'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const groq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Groq__as__default$3e$__["default"]({
    apiKey: process.env.GROQ_API_KEY
});
const gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});
const systemPrompt = `
You are a knowledgeable botanical information assistant.

The user will provide the name of a plant identified by an image classification model.

Return ONLY valid JSON in this exact format:

{
  "scientific_name": "string",
  "medicinal_properties": ["string"],
  "traditional_uses": ["string"],
  "benefits": ["string"],
  "safety": "string"
}

Rules:
- Give scientifically responsible information.
- Do not invent specific medical claims.
- Clearly distinguish traditional uses from scientifically established effects.
- Do not diagnose or recommend treatment.
- Keep the information concise.
- If the plant has limited medicinal evidence, say so.
`;
async function getFromGroq(plantName) {
    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.2,
        response_format: {
            type: "json_object"
        },
        messages: [
            {
                role: "system",
                content: systemPrompt
            },
            {
                role: "user",
                content: `Provide botanical and medicinal information for: ${plantName}`
            }
        ]
    });
    const content = response.choices[0]?.message?.content;
    if (!content) {
        throw new Error("Groq returned an empty response.");
    }
    return JSON.parse(content);
}
async function getFromGemini(plantName) {
    const response = await gemini.models.generateContent({
        model: "gemini-3.7-flash",
        contents: `
${systemPrompt}

Provide information for this plant:

${plantName}
`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "object",
                properties: {
                    scientific_name: {
                        type: "string"
                    },
                    medicinal_properties: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    traditional_uses: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    benefits: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    safety: {
                        type: "string"
                    }
                },
                required: [
                    "scientific_name",
                    "medicinal_properties",
                    "traditional_uses",
                    "benefits",
                    "safety"
                ]
            }
        }
    });
    if (!response.text) {
        throw new Error("Gemini returned an empty response.");
    }
    return JSON.parse(response.text);
}
async function getPlantInfo(plantName) {
    // Try Groq first
    try {
        console.log("Getting plant information from Groq...");
        const data = await getFromGroq(plantName);
        return {
            ...data,
            provider: "Groq"
        };
    } catch (groqError) {
        console.error("Groq failed:", groqError.message);
    }
    // Fallback to Gemini
    try {
        console.log("Groq failed. Switching to Gemini...");
        const data = await getFromGemini(plantName);
        return {
            ...data,
            provider: "Gemini"
        };
    } catch (geminiError) {
        console.error("Gemini failed:", geminiError.message);
        throw new Error("Unable to retrieve plant information from Groq or Gemini.");
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0dwmxha._.js.map