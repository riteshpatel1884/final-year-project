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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$plants$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/plants.json.[json].cjs [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const { plant } = body;
        if (!plant) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Plant name is required."
            }, {
                status: 400
            });
        }
        /*
    |--------------------------------------------------------------------------
    | Find plant in local JSON
    |--------------------------------------------------------------------------
    */ const plantKey = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$plants$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]).find((key)=>key.toLowerCase() === plant.toLowerCase());
        if (!plantKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                plant,
                properties: null,
                error: "Plant information not found."
            }, {
                status: 404
            });
        }
        const plantData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$plants$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"][plantKey];
        /*
    |--------------------------------------------------------------------------
    | Return plant information
    |--------------------------------------------------------------------------
    */ return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            plant: plantKey,
            properties: plantData
        });
    } catch (error) {
        console.error("Predict API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Something went wrong."
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/app/data/plants.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"Turmeric\":{\"scientific_name\":\"Curcuma longa\",\"medicinal_properties\":[\"Anti-inflammatory properties\",\"Antioxidant properties\",\"May support digestive health\"],\"traditional_uses\":[\"Used traditionally for minor inflammation\",\"Used in traditional preparations for digestive discomfort\",\"Commonly used in food and herbal preparations\"],\"benefits\":[\"May help support general antioxidant defenses\",\"May support healthy inflammatory response\"],\"safety\":\"Large amounts or concentrated supplements may cause stomach discomfort. People taking certain medications should consult a healthcare professional before using concentrated turmeric supplements.\"},\"Tulsi\":{\"scientific_name\":\"Ocimum tenuiflorum\",\"medicinal_properties\":[\"Antioxidant properties\",\"Traditionally associated with respiratory support\",\"May have antimicrobial properties\"],\"traditional_uses\":[\"Traditionally used for coughs and colds\",\"Used in herbal teas and preparations\",\"Traditionally used for general wellness\"],\"benefits\":[\"May support respiratory comfort\",\"May provide antioxidant compounds\"],\"safety\":\"Generally used as a culinary and traditional herb, but concentrated preparations may interact with medications. Consult a healthcare professional if using medicinal doses.\"},\"Tomato\":{\"scientific_name\":\"Solanum lycopersicum\",\"medicinal_properties\":[\"Rich in antioxidants\",\"Contains lycopene\",\"Contains vitamin C\"],\"traditional_uses\":[\"Commonly consumed as a food\",\"Used in traditional diets for nutritional support\"],\"benefits\":[\"Supports normal nutrition\",\"Provides antioxidant compounds\",\"Provides vitamins and minerals\"],\"safety\":\"Generally safe as food. Some people may experience allergy or digestive discomfort.\"},\"Pumpkin\":{\"scientific_name\":\"Cucurbita spp.\",\"medicinal_properties\":[\"Rich in carotenoids\",\"Contains antioxidants\",\"Provides dietary fiber\"],\"traditional_uses\":[\"Used as a nutritious food\",\"Seeds are traditionally consumed as food\"],\"benefits\":[\"Supports dietary nutrition\",\"Provides fiber and micronutrients\"],\"safety\":\"Generally safe as food. Allergies are possible in sensitive individuals.\"},\"Pomegranate\":{\"scientific_name\":\"Punica granatum\",\"medicinal_properties\":[\"Antioxidant properties\",\"Contains polyphenolic compounds\",\"May support cardiovascular health\"],\"traditional_uses\":[\"Fruit commonly consumed for nutrition\",\"Traditionally used in various herbal preparations\"],\"benefits\":[\"Provides antioxidant compounds\",\"Supports general nutritional health\"],\"safety\":\"Generally safe as food. Concentrated extracts may interact with some medicines, so consult a healthcare professional when using medicinal preparations.\"},\"Pepper\":{\"scientific_name\":\"Piper nigrum\",\"medicinal_properties\":[\"Contains piperine\",\"Antioxidant properties\",\"Traditionally associated with digestive support\"],\"traditional_uses\":[\"Used as a culinary spice\",\"Traditionally used in digestive preparations\"],\"benefits\":[\"Supports normal digestion\",\"Provides antioxidant compounds\"],\"safety\":\"Large amounts may cause gastrointestinal irritation. Use cautiously in concentrated preparations.\"},\"Pea\":{\"scientific_name\":\"Pisum sativum\",\"medicinal_properties\":[\"Good source of dietary fiber\",\"Provides plant protein\",\"Contains antioxidants\"],\"traditional_uses\":[\"Commonly consumed as a nutritious vegetable\",\"Used in traditional diets\"],\"benefits\":[\"Supports dietary nutrition\",\"Provides fiber and plant protein\"],\"safety\":\"Generally safe as food. People with pea allergies should avoid it.\"},\"Papaya\":{\"scientific_name\":\"Carica papaya\",\"medicinal_properties\":[\"Contains vitamin C\",\"Contains carotenoids\",\"Papain enzyme is present in the fruit\"],\"traditional_uses\":[\"Fruit commonly consumed for nutrition\",\"Traditionally used in digestive preparations\"],\"benefits\":[\"Supports nutritional health\",\"Provides antioxidant compounds\"],\"safety\":\"Unripe papaya and concentrated preparations may not be appropriate during pregnancy. Consult a healthcare professional when using medicinal preparations.\"},\"Palak(Spinach)\":{\"scientific_name\":\"Spinacia oleracea\",\"medicinal_properties\":[\"Rich in iron and folate\",\"Contains antioxidants\",\"Provides dietary fiber\"],\"traditional_uses\":[\"Commonly consumed as a leafy vegetable\",\"Used in nutritional diets\"],\"benefits\":[\"Supports normal nutrition\",\"Provides vitamins and minerals\"],\"safety\":\"Generally safe as food. People with certain kidney conditions may need to monitor high-oxalate foods.\"},\"Onion\":{\"scientific_name\":\"Allium cepa\",\"medicinal_properties\":[\"Contains sulfur compounds\",\"Antioxidant properties\",\"May support cardiovascular health\"],\"traditional_uses\":[\"Commonly used as food and seasoning\",\"Traditionally used in various home remedies\"],\"benefits\":[\"Provides antioxidant compounds\",\"Supports general nutrition\"],\"safety\":\"Generally safe as food. Large amounts may cause digestive discomfort.\"},\"Neem\":{\"scientific_name\":\"Azadirachta indica\",\"medicinal_properties\":[\"Traditionally associated with antimicrobial properties\",\"Contains antioxidant compounds\",\"Traditionally used for skin-related preparations\"],\"traditional_uses\":[\"Used traditionally in skin and hygiene preparations\",\"Neem leaves have been used in traditional herbal practices\"],\"benefits\":[\"Traditionally used for skin care\",\"Used in various traditional herbal preparations\"],\"safety\":\"Neem oil and concentrated neem preparations can be toxic if swallowed and may be unsafe for children and during pregnancy. Avoid internal medicinal use without professional guidance.\"},\"Marigold\":{\"scientific_name\":\"Tagetes spp.\",\"medicinal_properties\":[\"Contains antioxidant compounds\",\"Some species have traditionally been associated with antimicrobial activity\"],\"traditional_uses\":[\"Used traditionally in herbal preparations\",\"Flowers are commonly used for decorative purposes\"],\"benefits\":[\"Provides plant-derived antioxidant compounds\"],\"safety\":\"Some people may experience skin irritation or allergic reactions.\"},\"Mango\":{\"scientific_name\":\"Mangifera indica\",\"medicinal_properties\":[\"Rich in vitamin C\",\"Contains carotenoids\",\"Contains antioxidant compounds\"],\"traditional_uses\":[\"Fruit commonly consumed as food\",\"Various plant parts have been used traditionally\"],\"benefits\":[\"Supports nutritional health\",\"Provides vitamins and antioxidants\"],\"safety\":\"Generally safe as food. People with mango or latex-related allergies may experience reactions.\"},\"Lemon\":{\"scientific_name\":\"Citrus limon\",\"medicinal_properties\":[\"Rich in vitamin C\",\"Contains antioxidant compounds\",\"May support normal immune function\"],\"traditional_uses\":[\"Used as food and beverage ingredient\",\"Traditionally used in various home remedies\"],\"benefits\":[\"Provides vitamin C\",\"Supports general nutrition\"],\"safety\":\"Frequent consumption of acidic lemon juice may contribute to tooth enamel erosion or stomach irritation.\"},\"Jasmine\":{\"scientific_name\":\"Jasminum spp.\",\"medicinal_properties\":[\"Aromatic plant compounds\",\"Traditionally associated with calming properties\"],\"traditional_uses\":[\"Used traditionally in aromatic preparations\",\"Jasmine flowers are commonly used in teas and fragrances\"],\"benefits\":[\"Traditionally used for relaxation and aromatherapy\"],\"safety\":\"Concentrated oils may cause skin irritation or allergic reactions.\"},\"Hibiscus\":{\"scientific_name\":\"Hibiscus spp.\",\"medicinal_properties\":[\"Rich in antioxidant compounds\",\"May support healthy blood pressure\",\"Contains polyphenols\"],\"traditional_uses\":[\"Used in herbal teas\",\"Traditionally consumed as a beverage\"],\"benefits\":[\"Provides antioxidant compounds\",\"May support cardiovascular health\"],\"safety\":\"Hibiscus preparations may lower blood pressure and could interact with blood-pressure medications.\"},\"Guava\":{\"scientific_name\":\"Psidium guajava\",\"medicinal_properties\":[\"Rich in vitamin C\",\"Contains antioxidants\",\"Good source of dietary fiber\"],\"traditional_uses\":[\"Fruit commonly consumed as food\",\"Leaves have been used traditionally in herbal preparations\"],\"benefits\":[\"Supports nutritional health\",\"Provides vitamin C and fiber\"],\"safety\":\"Generally safe as food. Concentrated leaf preparations should be used cautiously.\"},\"Eucalyptus\":{\"scientific_name\":\"Eucalyptus spp.\",\"medicinal_properties\":[\"Contains aromatic compounds such as eucalyptol\",\"Traditionally associated with respiratory support\"],\"traditional_uses\":[\"Used in aromatic preparations\",\"Traditionally used for respiratory comfort\"],\"benefits\":[\"May provide a cooling sensation\",\"Traditionally used for respiratory comfort\"],\"safety\":\"Eucalyptus oil should not be swallowed and can be toxic in concentrated amounts. Keep essential oils away from children.\"},\"Coriander\":{\"scientific_name\":\"Coriandrum sativum\",\"medicinal_properties\":[\"Contains antioxidant compounds\",\"Traditionally associated with digestive support\"],\"traditional_uses\":[\"Used as a culinary herb and spice\",\"Seeds and leaves are used in traditional preparations\"],\"benefits\":[\"Supports dietary nutrition\",\"Traditionally used to support digestion\"],\"safety\":\"Generally safe as food. Allergic reactions are possible.\"},\"Coffee\":{\"scientific_name\":\"Coffea spp.\",\"medicinal_properties\":[\"Contains caffeine\",\"Contains antioxidant compounds\",\"May improve alertness\"],\"traditional_uses\":[\"Commonly consumed as a beverage\",\"Used traditionally for its stimulating effects\"],\"benefits\":[\"May increase alertness and concentration\",\"Provides antioxidant compounds\"],\"safety\":\"Excessive caffeine can cause insomnia, anxiety, increased heart rate, or digestive discomfort.\"},\"Amla\":{\"scientific_name\":\"Phyllanthus emblica\",\"medicinal_properties\":[\"Rich in vitamin C\",\"Strong antioxidant properties\",\"Traditionally associated with digestive support\"],\"traditional_uses\":[\"Widely used in Ayurvedic preparations\",\"Consumed as food and herbal preparations\"],\"benefits\":[\"Provides antioxidant compounds\",\"Supports general nutritional health\"],\"safety\":\"Generally safe as food. Concentrated preparations may interact with medications.\"},\"Aloevera\":{\"scientific_name\":\"Aloe vera\",\"medicinal_properties\":[\"Aloe gel is traditionally used for skin soothing\",\"Contains various plant compounds\",\"May provide moisturizing effects when applied topically\"],\"traditional_uses\":[\"Used traditionally for minor skin irritation\",\"Aloe gel is commonly used in topical preparations\"],\"benefits\":[\"May soothe and moisturize skin\",\"Commonly used in topical skincare products\"],\"safety\":\"Aloe latex taken orally can cause diarrhea and electrolyte disturbances. Avoid oral medicinal use without professional guidance.\"},\"Bamboo\":{\"scientific_name\":\"Bambusoideae\",\"medicinal_properties\":[\"Some species contain antioxidant compounds\",\"Traditional medicinal uses vary by species\"],\"traditional_uses\":[\"Used in traditional medicine in some regions\",\"Young shoots are consumed as food after proper preparation\"],\"benefits\":[\"Provides dietary fiber when consumed as properly prepared food\"],\"safety\":\"Raw bamboo shoots may contain cyanogenic compounds and require proper cooking before consumption.\"},\"Betel\":{\"scientific_name\":\"Piper betle\",\"medicinal_properties\":[\"Contains aromatic plant compounds\",\"Traditionally associated with antimicrobial activity\"],\"traditional_uses\":[\"Leaves have been used in traditional practices\",\"Used in various cultural and herbal preparations\"],\"benefits\":[\"Traditionally used in oral and digestive preparations\"],\"safety\":\"Betel leaf should not be confused with betel quid containing areca nut and tobacco, which carry significant health risks.\"},\"Bhrami\":{\"scientific_name\":\"Bacopa monnieri\",\"medicinal_properties\":[\"Traditionally associated with cognitive support\",\"Contains bacosides\",\"Antioxidant properties\"],\"traditional_uses\":[\"Used in Ayurvedic medicine\",\"Traditionally used to support memory and concentration\"],\"benefits\":[\"May support memory and cognitive function\"],\"safety\":\"May cause digestive upset in some people and may interact with medications. Consult a healthcare professional before medicinal use.\"},\"Castor\":{\"scientific_name\":\"Ricinus communis\",\"medicinal_properties\":[\"Castor oil has traditionally been used as a laxative\",\"Castor oil is also used in topical preparations\"],\"traditional_uses\":[\"Castor oil has been used traditionally for constipation\",\"Used in some topical preparations\"],\"benefits\":[\"Castor oil may provide short-term laxative effects\"],\"safety\":\"Castor seeds contain highly toxic ricin. Never consume raw castor seeds. Medicinal castor oil should be used according to professional guidance.\"}}");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12ggsec._.js.map