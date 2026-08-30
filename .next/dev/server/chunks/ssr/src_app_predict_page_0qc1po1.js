module.exports = [
"[project]/src/app/predict/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PredictPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import "./predict.css";
// export default function PredictPage() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [plant, setPlant] = useState("");
//   const [confidence, setConfidence] = useState(null);
//   const [properties, setProperties] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const handleImageChange = (event) => {
//     const file = event.target.files?.[0];
//     if (!file) return;
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//     // Reset previous result
//     setPlant("");
//     setConfidence(null);
//     setProperties(null);
//     setError("");
//   };
//   const handlePredict = async () => {
//     if (!image) {
//       setError("Please select a plant image first.");
//       return;
//     }
//     try {
//       setLoading(true);
//       setError("");
//       // Clear previous result
//       setPlant("");
//       setConfidence(null);
//       setProperties(null);
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         try {
//           const response = await fetch("/api/predict", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               image: reader.result,
//             }),
//           });
//           const data = await response.json();
//           if (!response.ok) {
//             throw new Error(
//               data?.error || "Prediction failed."
//             );
//           }
//           console.log("Prediction response:", data);
//           // -------------------------
//           // PLANT
//           // -------------------------
//           setPlant(data.plant || "Unknown");
//           // -------------------------
//           // CONFIDENCE
//           // -------------------------
//           if (typeof data.confidence === "number") {
//             setConfidence(data.confidence);
//           } else if (data.confidence) {
//             setConfidence(Number(data.confidence));
//           } else {
//             setConfidence(null);
//           }
//           // -------------------------
//           // PLANT INFORMATION
//           // -------------------------
//           let plantInfo = data.properties;
//           // If API returns JSON as a string
//           if (typeof plantInfo === "string") {
//             try {
//               plantInfo = JSON.parse(plantInfo);
//             } catch {
//               // Keep string if it isn't JSON
//             }
//           }
//           setProperties(plantInfo || null);
//         } catch (err) {
//           console.error("Prediction error:", err);
//           setError(
//             err.message || "Something went wrong."
//           );
//         } finally {
//           setLoading(false);
//         }
//       };
//       reader.readAsDataURL(image);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       setError(
//         err.message || "Something went wrong."
//       );
//     }
//   };
//   const resetPrediction = () => {
//     setImage(null);
//     setPreview("");
//     setPlant("");
//     setConfidence(null);
//     setProperties(null);
//     setError("");
//   };
//   return (
//     <main className="predict-page">
//       {/* =========================
//           NAVBAR
//       ========================= */}
//       <nav className="predict-navbar">
//         <Link
//           href="/"
//           className="predict-brand"
//         >
//           <span className="predict-leaf">
//             ⌁
//           </span>
//           Herbarium Lens
//         </Link>
//         <Link
//           href="/"
//           className="predict-back"
//         >
//           ← Back to home
//         </Link>
//       </nav>
//       {/* =========================
//           HERO
//       ========================= */}
//       <section className="predict-hero">
//         <h1>
//           Put your plant
//           <br />
//           <em>under the lens.</em>
//         </h1>
//         <p>
//           Upload a clear photograph of a plant leaf
//           and let our vision model identify it.
//         </p>
//       </section>
//       {/* =========================
//           PREDICTOR
//       ========================= */}
//       <section className="predict-container">
//         <div className="upload-card">
//           {/* =========================
//               UPLOAD
//           ========================= */}
//           {!preview ? (
//             <label className="upload-area">
//               <div className="upload-icon">
//                 ↑
//               </div>
//               <h2>
//                 Upload a specimen
//               </h2>
//               <p>
//                 Choose a JPG, JPEG, PNG or WEBP image.
//               </p>
//               <span className="browse-button">
//                 Choose image
//               </span>
//               <input
//                 type="file"
//                 accept="image/png,image/jpeg,image/jpg,image/webp"
//                 onChange={handleImageChange}
//                 hidden
//               />
//             </label>
//           ) : (
//             /* =========================
//                IMAGE PREVIEW
//             ========================= */
//             <div className="preview-container">
//               <img
//                 src={preview}
//                 alt="Selected plant"
//                 className="preview-image"
//               />
//               <div className="image-actions">
//                 <label className="change-button">
//                   Change image
//                   <input
//                     type="file"
//                     accept="image/png,image/jpeg,image/jpg,image/webp"
//                     onChange={handleImageChange}
//                     hidden
//                   />
//                 </label>
//                 <button
//                   onClick={resetPrediction}
//                   className="remove-button"
//                   type="button"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* =========================
//               PREDICT BUTTON
//           ========================= */}
//           {preview && (
//             <button
//               onClick={handlePredict}
//               disabled={loading}
//               className="predict-button"
//               type="button"
//             >
//               {loading ? (
//                 <>
//                   <span className="spinner" />
//                   Analyzing specimen...
//                 </>
//               ) : (
//                 <>
//                   Identify this plant
//                   <span>→</span>
//                 </>
//               )}
//             </button>
//           )}
//           {/* =========================
//               ERROR
//           ========================= */}
//           {error && (
//             <div className="error">
//               <strong>
//                 Something went wrong
//               </strong>
//               <p>
//                 {error}
//               </p>
//             </div>
//           )}
//         </div>
//         {/* =========================
//             LOADING
//         ========================= */}
//         {loading && (
//           <div className="loading-card">
//             <div className="loading-circle" />
//             <div>
//               <strong>
//                 Analysis in progress
//               </strong>
//               <p>
//                 Identifying the specimen and
//                 generating plant information...
//               </p>
//             </div>
//           </div>
//         )}
//         {/* =========================
//             RESULT
//         ========================= */}
//         {plant && !loading && (
//           <div className="result-card">
//             {/* RESULT HEADER */}
//             <div className="result-header">
//               <div>
//                 <span className="result-label">
//                   IDENTIFICATION RESULT
//                 </span>
//                 <h2>
//                   {plant}
//                 </h2>
//                 {/* CONFIDENCE */}
//                 {confidence !== null && (
//                   <p className="confidence">
//                     Confidence:{" "}
//                     <strong>
//                       {confidence.toFixed(2)}%
//                     </strong>
//                   </p>
//                 )}
//               </div>
//               <div className="success">
//                 ✓
//               </div>
//             </div>
//             <div className="result-line" />
//             {/* =========================
//                 PLANT PROFILE
//             ========================= */}
//             <div className="properties">
//               <div className="property-heading">
//                 <span>
//                   PLANT PROFILE
//                 </span>
//               </div>
//               {properties ? (
//                 <div className="property-content">
//                   {/* SCIENTIFIC NAME */}
//                   {properties.scientific_name && (
//                     <div className="plant-info-section">
//                       <h3>
//                         Scientific Name
//                       </h3>
//                       <p>
//                         <em>
//                           {properties.scientific_name}
//                         </em>
//                       </p>
//                     </div>
//                   )}
//                   {/* MEDICINAL PROPERTIES */}
//                   {Array.isArray(
//                     properties.medicinal_properties
//                   ) && (
//                     <div className="plant-info-section">
//                       <h3>
//                         Medicinal Properties
//                       </h3>
//                       <ul>
//                         {properties.medicinal_properties.map(
//                           (item, index) => (
//                             <li key={index}>
//                               {item}
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                   {/* TRADITIONAL USES */}
//                   {Array.isArray(
//                     properties.traditional_uses
//                   ) && (
//                     <div className="plant-info-section">
//                       <h3>
//                         Traditional Uses
//                       </h3>
//                       <ul>
//                         {properties.traditional_uses.map(
//                           (item, index) => (
//                             <li key={index}>
//                               {item}
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                   {/* BENEFITS */}
//                   {Array.isArray(
//                     properties.benefits
//                   ) && (
//                     <div className="plant-info-section">
//                       <h3>
//                         Benefits
//                       </h3>
//                       <ul>
//                         {properties.benefits.map(
//                           (item, index) => (
//                             <li key={index}>
//                               {item}
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                   {/* SAFETY */}
//                   {properties.safety && (
//                     <div className="plant-info-section safety-section">
//                       <h3>
//                         Safety
//                       </h3>
//                       <p>
//                         {properties.safety}
//                       </p>
//                     </div>
//                   )}
//                   {/* FALLBACK FOR STRING RESPONSE */}
//                   {typeof properties === "string" && (
//                     <p>
//                       {properties}
//                     </p>
//                   )}
//                 </div>
//               ) : (
//                 <div className="property-content">
//                   <p>
//                     No additional information available.
//                   </p>
//                 </div>
//               )}
//             </div>
//             {/* =========================
//                 DISCLAIMER
//             ========================= */}
//             <div className="disclaimer">
//               <strong>
//                 Responsible use
//               </strong>
//               <p>
//                 This information is for educational
//                 purposes only. AI identification may be
//                 incorrect, and medicinal information is
//                 not a substitute for professional medical
//                 advice.
//               </p>
//             </div>
//           </div>
//         )}
//       </section>
//       {/* =========================
//           FOOTER
//       ========================= */}
//       <footer className="predict-footer">
//         <span>
//           © 2026 Herbarium Lens
//         </span>
//         <Link href="/">
//           Herbarium Lens
//         </Link>
//       </footer>
//     </main>
//   );
// }
"use client";
;
;
;
;
const CONFIDENCE_META = {
    high: {
        label: "High confidence",
        width: "w-[90%]",
        bar: "bg-green-500",
        chip: "bg-green-50 text-green-700 border-green-200"
    },
    medium: {
        label: "Medium confidence",
        width: "w-[60%]",
        bar: "bg-amber-500",
        chip: "bg-amber-50 text-amber-700 border-amber-200"
    },
    low: {
        label: "Low confidence",
        width: "w-[25%]",
        bar: "bg-red-500",
        chip: "bg-red-50 text-red-700 border-red-200"
    }
};
function PredictPage() {
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleImageChange = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        setImage(file);
        setPreview(URL.createObjectURL(file));
        setResult(null);
        setError("");
    };
    const handlePredict = async ()=>{
        if (!image) {
            setError("Please select a plant image first.");
            return;
        }
        setLoading(true);
        setError("");
        setResult(null);
        try {
            const formData = new FormData();
            formData.append("image", image);
            const response = await fetch("/api/predict", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(friendlyError(data?.error));
            }
            setResult(data);
        } catch (err) {
            console.error("Prediction error:", err);
            setError(err.message || "Something went wrong.");
        } finally{
            setLoading(false);
        }
    };
    const resetPrediction = ()=>{
        setImage(null);
        setPreview("");
        setResult(null);
        setError("");
    };
    const confidence = result ? CONFIDENCE_META[result.confidence] || CONFIDENCE_META.low : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-50 text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "h-[72px] px-[7%] flex items-center justify-between bg-white border-b border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2.5 text-slate-900 no-underline text-[19px] font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600 text-[28px]",
                                children: "⌁"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            "MedLeafViT"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hidden sm:block text-slate-500 no-underline text-[13px] hover:text-blue-600",
                        children: "← Back to home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-center px-5 pt-20 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif font-medium leading-[0.95] tracking-[-0.06em] text-[45px] sm:text-[75px] my-4",
                        children: [
                            "Put your plant",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 674,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: "text-blue-600 not-italic",
                                children: "under the lens."
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 675,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-[520px] mx-auto text-slate-500 text-[15px] leading-relaxed",
                        children: "Upload a clear photograph of a plant leaf and let our vision model identify it."
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[92%] sm:w-[760px] mx-auto pb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 p-3 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",
                        children: [
                            !preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "min-h-[300px] sm:min-h-[350px] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center cursor-pointer transition-colors hover:border-blue-600 hover:bg-blue-50/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[60px] h-[60px] rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[28px] mb-5",
                                        children: "↑"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif font-medium text-[27px] mb-2",
                                        children: "Upload a specimen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-[13px] mb-5",
                                        children: "Choose a JPG, JPEG, PNG or WEBP image."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 695,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-slate-900 text-white px-[18px] py-3 rounded-md text-xs font-semibold",
                                        children: "Choose image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 698,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/png,image/jpeg,image/jpg,image/webp",
                                        onChange: handleImageChange,
                                        hidden: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 701,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 688,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: preview,
                                        alt: "Selected plant",
                                        className: "w-full max-h-[500px] object-contain block bg-slate-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 710,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center gap-2.5 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "border border-slate-200 bg-white px-3.5 py-2 rounded-md text-xs cursor-pointer hover:border-blue-600 hover:text-blue-600",
                                                children: [
                                                    "Change image",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/png,image/jpeg,image/jpg,image/webp",
                                                        onChange: handleImageChange,
                                                        hidden: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 718,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 716,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetPrediction,
                                                type: "button",
                                                className: "border border-slate-200 bg-white px-3.5 py-2 rounded-md text-xs cursor-pointer hover:border-red-500 hover:text-red-500",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 725,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 715,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 709,
                                columnNumber: 13
                            }, this),
                            preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePredict,
                                disabled: loading,
                                type: "button",
                                className: "w-full mt-5 border-none bg-slate-900 text-white py-[15px] rounded-md text-[13px] font-bold cursor-pointer flex justify-center items-center gap-3 hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-colors",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 rounded-full border-2 border-white/35 border-t-white animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/predict/page.js",
                                            lineNumber: 746,
                                            columnNumber: 19
                                        }, this),
                                        "Analyzing specimen..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/predict/page.js",
                                    lineNumber: 745,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Identify this plant",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/predict/page.js",
                                            lineNumber: 752,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/predict/page.js",
                                    lineNumber: 750,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 738,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 p-4 bg-red-50 border border-red-200 text-red-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[13px]",
                                        children: "Something went wrong"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 761,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 762,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 760,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 685,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 bg-white border border-slate-200 p-6 flex items-center gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[38px] h-[38px] rounded-full border-[3px] border-blue-100 border-t-blue-600 animate-spin shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 770,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-sm",
                                        children: "Analysis in progress"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 772,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-slate-500 text-xs leading-relaxed",
                                        children: "Identifying the specimen and generating plant information..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 773,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 771,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 769,
                        columnNumber: 11
                    }, this),
                    result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 bg-white border border-slate-200 p-5 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600 text-[9px] font-bold tracking-[1.5px]",
                                                children: "IDENTIFICATION RESULT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 785,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-serif font-medium text-[30px] sm:text-[38px] mt-2",
                                                children: result.name || "Unknown"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 788,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block mt-2 text-[11px] text-slate-500",
                                                children: result.classification || "Unclassified"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 791,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 784,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${result.identified === false ? "bg-slate-300" : "bg-green-500"}`,
                                        children: result.identified === false ? "?" : "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 795,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 783,
                                columnNumber: 13
                            }, this),
                            confidence && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 text-[10px] font-bold tracking-wide",
                                                children: "CONFIDENCE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 807,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[11px] font-medium px-2 py-0.5 rounded-full border ${confidence.chip}`,
                                                children: confidence.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 810,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 806,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-full bg-slate-100 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full ${confidence.width} ${confidence.bar}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/predict/page.js",
                                            lineNumber: 817,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 816,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 805,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-slate-200 my-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 822,
                                columnNumber: 13
                            }, this),
                            result.identified === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-amber-50 border border-amber-200 text-amber-800 p-4 text-[13px] leading-relaxed",
                                children: "We couldn't confidently identify this specimen. Try a clearer, closer photo of the leaf or flower."
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 825,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 text-[9px] font-bold tracking-wide",
                                        children: "PLANT PROFILE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 831,
                                        columnNumber: 17
                                    }, this),
                                    result.properties && result.properties.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 flex flex-col gap-2",
                                        children: result.properties.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2 text-slate-700 text-[13px] leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-0.5",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 842,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 843,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 838,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 836,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-slate-500 text-[13px]",
                                        children: "No additional information available."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 848,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 830,
                                columnNumber: 15
                            }, this),
                            result.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 pt-4 border-t border-dashed border-slate-200 text-slate-500 text-xs",
                                children: result.note
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 856,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 782,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 684,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-slate-200 bg-white px-[7%] sm:px-5 py-5 flex justify-between text-slate-500 text-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "© 2026 Herbarium Lens"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 867,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-blue-600 no-underline",
                        children: "Herbarium Lens"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 868,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 866,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 658,
        columnNumber: 5
    }, this);
}
function friendlyError(code) {
    switch(code){
        case "no_file":
            return "Please select an image before identifying.";
        case "server_not_configured":
            return "The identification service isn't configured yet.";
        case "upstream_error":
            return "The identification service is temporarily unavailable.";
        case "parse_error":
            return "We couldn't read a result back. Please try again.";
        default:
            return "Prediction failed. Please try again.";
    }
}
}),
];

//# sourceMappingURL=src_app_predict_page_0qc1po1.js.map