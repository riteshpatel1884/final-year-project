module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/predict/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/src/app/predict/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/predict/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01cen6p._.js.map