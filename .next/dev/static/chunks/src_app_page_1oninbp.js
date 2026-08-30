(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/cjs/lucide-react.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
// const display = Fraunces({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   style: ["normal", "italic"],
//   variable: "--font-display",
// });
// const body = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-body",
// });
// const mono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// });
// function LeafMark({ size = 22 }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M4 20C4 11 10 4 20 4C20 14 13 20 4 20Z"
//         stroke="currentColor"
//         strokeWidth="1.4"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M4 20L14 10"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }
// function ArrowIcon() {
//   return (
//     <svg
//       width="15"
//       height="15"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M5 12H19M13 6L19 12L13 18"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
// function CameraIcon() {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M4 8.5C4 7.67 4.67 7 5.5 7H8L9.2 5H14.8L16 7H18.5C19.33 7 20 7.67 20 8.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V8.5Z"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       />
//       <circle
//         cx="12"
//         cy="13"
//         r="3.2"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }
// function SparkIcon() {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M12 3L13.6 9.4L20 11L13.6 12.6L12 19L10.4 12.6L4 11L10.4 9.4L12 3Z"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
// function ShieldIcon() {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M12 3L19 6V11.5C19 16.2 16.1 19.2 12 21C7.9 19.2 5 16.2 5 11.5V6L12 3Z"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M9 12L11 14L15 10"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
// export default function Home() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <div
//       className={`${display.variable} ${body.variable} ${mono.variable} page ${
//         theme === "dark" ? "theme-dark" : ""
//       }`}
//     >
//       {/* =========================================================
//           NAVBAR
//       ========================================================= */}
//       <header className="navbar">
//         <div className="nav-inner">
//           <Link href="/" className="brand">
//             <span className="brand-mark">
//               <LeafMark />
//             </span>
//             <span className="brand-name">
//               Herbarium Lens
//             </span>
//           </Link>
//           <nav className="desktop-nav">
//             <a href="#about">About</a>
//             <a href="#features">Features</a>
//             <a href="#how-it-works">How it works</a>
//             <a href="#technology">Technology</a>
//           </nav>
//           <div className="nav-actions">
//             <button
//               className="theme-button"
//               onClick={() =>
//                 setTheme((current) =>
//                   current === "light"
//                     ? "dark"
//                     : "light"
//                 )
//               }
//               aria-label="Toggle theme"
//             >
//               {theme === "light"
//                 ? "☾ Dark"
//                 : "☀ Light"}
//             </button>
//             <Link
//               href="/predict"
//               className="nav-cta"
//             >
//               Try it
//               <ArrowIcon />
//             </Link>
//           </div>
//         </div>
//       </header>
//       {/* =========================================================
//           HERO
//       ========================================================= */}
//       <section className="hero">
//         <div className="hero-inner">
//           <div className="hero-copy">
//             <h1>
//               Give every
//               <br />
//               <em>leaf a name.</em>
//             </h1>
//             <p className="hero-description">
//               Herbarium Lens uses computer vision to
//               identify plant specimens from photographs
//               and provide useful information about their
//               medicinal properties, traditional uses, and
//               safety considerations.
//             </p>
//             <div className="hero-buttons">
//               <Link
//                 href="/predict"
//                 className="primary-button"
//               >
//                 Identify a plant
//                 <ArrowIcon />
//               </Link>
//               <a
//                 href="#how-it-works"
//                 className="secondary-button"
//               >
//                 See how it works
//               </a>
//             </div>
//           </div>
//           <div className="hero-visual">
//             <div className="specimen-card">
//               <div className="specimen-top">
//                 <span>HERBARIUM LENS</span>
//                 <span>SPECIMEN / 001</span>
//               </div>
//               <div className="specimen-image">
//                 <div className="botanical-ring">
//                   <LeafMark size={115} />
//                 </div>
//                 <div className="scan-line" />
//               </div>
//               <div className="specimen-info">
//                 <div>
//                   <span className="mini-label">
//                      ANALYSIS
//                   </span>
//                   <h3>
//                     Ready for identification
//                   </h3>
//                 </div>
//                 <span className="specimen-arrow">
//                   ↗
//                 </span>
//               </div>
//             </div>
//             <div className="floating-card floating-two">
//               <span className="check">✓</span>
//               <div>
//                 <strong>49 classes</strong>
//                 <small>Known plant species</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* =========================================================
//           INTRO / ABOUT
//       ========================================================= */}
//       <section
//         id="about"
//         className="section about-section"
//       >
//         <div className="section-label">
//           <span>01</span>
//           About the project
//         </div>
//         <div className="about-content">
//           <h2>
//             From a photograph
//             <br />
//             to a <em>plant profile.</em>
//           </h2>
//           <div className="about-text">
//             <p>
//               Herbarium Lens is an AI-assisted plant
//               identification application designed to
//               recognize plant specimens from images.
//             </p>
//             <p>
//               Instead of manually searching through
//               botanical references, users can upload a
//               photograph and receive an identification
//               generated by a vision model.
//             </p>
//             <p>
//               Once the plant has been identified, a
//               second language model generates a concise
//               overview covering medicinal properties,
//               traditional uses, benefits, and relevant
//               safety considerations.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* =========================================================
//           FEATURE GRID
//       ========================================================= */}
//       <section
//         id="features"
//         className="section features-section"
//       >
//         <div className="section-label">
//           <span>02</span>
//           Core capabilities
//         </div>
//         <div className="features-grid">
//           <article className="feature-card">
//             <div className="feature-number">
//               01
//             </div>
//             <div className="feature-icon">
//               <CameraIcon />
//             </div>
//             <h3>
//               Single image identification
//             </h3>
//             <p>
//               Upload a photograph of a leaf and send
//               the specimen directly to the vision
//               prediction system.
//             </p>
//             <div className="feature-footer">
//               JPG / PNG
//             </div>
//           </article>
//           <article className="feature-card">
//             <div className="feature-number">
//               02
//             </div>
//             <div className="feature-icon">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <rect
//                   x="4"
//                   y="4"
//                   width="6"
//                   height="6"
//                   rx="1"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <rect
//                   x="14"
//                   y="4"
//                   width="6"
//                   height="6"
//                   rx="1"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <rect
//                   x="4"
//                   y="14"
//                   width="6"
//                   height="6"
//                   rx="1"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <rect
//                   x="14"
//                   y="14"
//                   width="6"
//                   height="6"
//                   rx="1"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//               </svg>
//             </div>
//             <h3>
//               Collection folder support
//             </h3>
//             <p>
//               Select an entire image collection and
//               browse its sub-folders and individual
//               specimens from the prediction interface.
//             </p>
//             <div className="feature-footer">
//               COLLECTION MODE
//             </div>
//           </article>
//           <article className="feature-card">
//             <div className="feature-number">
//               03
//             </div>
//             <div className="feature-icon">
//               <SparkIcon />
//             </div>
//             <h3>
//               AI-powered classification
//             </h3>
//             <p>
//               The submitted image is analyzed by a
//               vision model and matched against the
//               project's known plant classes.
//             </p>
//             <div className="feature-footer">
//               COMPUTER VISION
//             </div>
//           </article>
//           <article className="feature-card">
//             <div className="feature-number">
//               04
//             </div>
//             <div className="feature-icon">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M6 4H18V20H6V4Z"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <path
//                   d="M9 8H15M9 12H15M9 16H13"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//             <h3>
//               Medicinal information
//             </h3>
//             <p>
//               After identification, the application
//               generates a concise overview of medicinal
//               properties and traditional or common uses.
//             </p>
//           </article>
//           <article className="feature-card">
//             <div className="feature-number">
//               05
//             </div>
//             <div className="feature-icon">
//               <ShieldIcon />
//             </div>
//             <h3>
//               Safety information
//             </h3>
//             <p>
//               Generated plant information includes a
//               brief safety note covering relevant
//               cautions, allergies, dosage concerns, or
//               professional consultation.
//             </p>
//             <div className="feature-footer">
//               SAFETY NOTE
//             </div>
//           </article>
//           <article className="feature-card">
//             <div className="feature-number">
//               06
//             </div>
//             <div className="feature-icon">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M5 12H19"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M12 5L19 12L12 19"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             <h3>
//               Simple specimen workflow
//             </h3>
//             <p>
//               Upload, analyze, identify. The interface
//               keeps the workflow focused instead of
//               overwhelming the user with unnecessary
//               steps.
//             </p>
//             <div className="feature-footer">
//               SIMPLE WORKFLOW
//             </div>
//           </article>
//         </div>
//       </section>
//       {/* =========================================================
//           HOW IT WORKS
//       ========================================================= */}
//       <section
//         id="how-it-works"
//         className="section process-section"
//       >
//         <div className="section-label">
//           <span>03</span>
//           How it works
//         </div>
//         <div className="process-content">
//           <h2>
//             Three steps.
//             <br />
//             <em>One identification.</em>
//           </h2>
//           <div className="process-list">
//             <div className="process-item">
//               <div className="process-number">
//                 01
//               </div>
//               <div>
//                 <h3>Upload a specimen</h3>
//                 <p>
//                   Choose a single plant photograph or
//                   select a collection folder containing
//                   multiple images.
//                 </p>
//               </div>
//             </div>
//             <div className="process-item">
//               <div className="process-number">
//                 02
//               </div>
//               <div>
//                 <h3>Analysis</h3>
//                 <p>
//                   The image is sent to the prediction
//                   API, where the vision model examines
//                   the specimen and selects the closest
//                   supported plant class.
//                 </p>
//               </div>
//             </div>
//             <div className="process-item">
//               <div className="process-number">
//                 03
//               </div>
//               <div>
//                 <h3>Plant information</h3>
//                 <p>
//                   A text model generates a concise
//                   plant overview covering medicinal
//                   properties, traditional uses,
//                   benefits, and safety considerations.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* =========================================================
//           TECHNOLOGY
//       ========================================================= */}
//       {/* =========================================================
//           SUPPORTED PLANTS
//       ========================================================= */}
//       <section className="section plants-section">
//         <div className="section-label">
//           <span>05</span>
//           Supported classes
//         </div>
//         <div className="plants-content">
//           <div>
//             <h2>
//               Built around a
//               <br />
//               <em>defined plant set.</em>
//             </h2>
//             <p>
//               The current prediction system is
//               constrained to a known collection of plant
//               classes rather than allowing unrestricted
//               classification.
//             </p>
//           </div>
//           <div className="plant-tags">
//             {[
//               "Turmeric",
//               "Tulsi",
//               "Tomato",
//               "Pumpkin",
//               "Pomegranate",
//               "Pepper",
//               "Pea",
//               "Papaya",
//               "Spinach",
//               "Onion",
//               "Neem",
//               "Marigold",
//               "Mango",
//               "Lemon",
//               "Jasmine",
//               "Jackfruit",
//               "Hibiscus",
//               "Henna",
//               "Guava",
//               "Eucalyptus",
//               "Drumstick",
//               "Coriander",
//               "Coffee",
//               "Castor",
//               "Bhrami",
//               "Betel",
//               "Bamboo",
//               "Amla",
//               "Aloevera",
//             ].map((plant) => (
//               <span
//                 key={plant}
//                 className="plant-tag"
//               >
//                 {plant}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* =========================================================
//           RESPONSIBLE USE
//       ========================================================= */}
//       <section className="responsible-section">
//         <div className="responsible-inner">
//           <div className="responsible-icon">
//             <ShieldIcon />
//           </div>
//           <div>
//             <span className="eyebrow">
//               Responsible use
//             </span>
//             <h2>
//               Identification is not
//               <br />
//               medical diagnosis.
//             </h2>
//             <p>
//               Herbarium Lens provides AI-assisted
//               identification and informational summaries.
//               The generated medicinal information should
//               not be treated as professional medical
//               advice, diagnosis, or a substitute for
//               consultation with a qualified healthcare
//               professional.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* =========================================================
//           CTA
//       ========================================================= */}
//       <section className="cta-section">
//         <div className="cta-inner">
//           <span className="eyebrow">
//             Ready to explore?
//           </span>
//           <h2>
//             Put your specimen
//             <br />
//             <em>under the lens.</em>
//           </h2>
//           <p>
//             Upload a plant photograph and see what
//             Herbarium Lens can identify.
//           </p>
//           <Link
//             href="/predict"
//             className="primary-button large"
//           >
//             Start identification
//             <ArrowIcon />
//           </Link>
//         </div>
//       </section>
//       {/* =========================================================
//           FOOTER
//       ========================================================= */}
//       <footer className="footer">
//         <div className="footer-top">
//           <div className="footer-brand">
//             <span className="brand-mark">
//               <LeafMark />
//             </span>
//             <div>
//               <div className="footer-name">
//                 Herbarium Lens
//               </div>
//             </div>
//           </div>
//           <div className="footer-links">
//             <div>
//               <span>PRODUCT</span>
//               <Link href="/predict">
//                 Plant prediction
//               </Link>
//               <a href="#features">
//                 Features
//               </a>
//               <a href="#how-it-works">
//                 How it works
//               </a>
//             </div>
//             <div>
//               <span>PROJECT</span>
//               <a href="#about">
//                 About
//               </a>
//               <a href="#technology">
//                 Technology
//               </a>
//               <a href="#features">
//                 Capabilities
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <span>
//             © {new Date().getFullYear()} Herbarium Lens
//           </span>
//           <Link href="/predict">
//             Open predictor →
//           </Link>
//         </div>
//       </footer>
//       {/* =========================================================
//           STYLES
//       ========================================================= */}
//     </div>
//   );
// }
"use client";
;
;
const STATUS = {
    IDLE: "idle",
    READY: "ready",
    WORKING: "working",
    DONE: "done",
    ERROR: "error"
};
const LEVEL_COLOR = {
    high: "var(--accent)",
    medium: "var(--amber)",
    low: "var(--danger)"
};
const DEMO_RESULTS = [
    {
        name: "Golden Retriever",
        classification: "Animal / Dog",
        confidencePercent: 92,
        properties: [
            "Warm golden-blonde coat, medium-long length",
            "Relaxed stance, tail level with the back",
            "Outdoor natural light, shallow depth of field"
        ],
        note: "Simulated result — connect this panel to /api/predict for live predictions."
    },
    {
        name: "Ceramic Pour-Over Kettle",
        classification: "Object / Kitchenware",
        confidencePercent: 78,
        properties: [
            "Matte glaze finish, gooseneck spout",
            "Single-serve capacity, stovetop-safe base",
            "Studio lighting on a neutral backdrop"
        ],
        note: "Simulated result — connect this panel to /api/predict for live predictions."
    },
    {
        name: "Weathered Lighthouse",
        classification: "Structure / Coastal",
        confidencePercent: 54,
        properties: [
            "Cast-iron tower, red-and-white banding",
            "Overcast sky, high horizon line",
            "Some lens glare partially obscures the base"
        ],
        note: "Match confidence is lower than usual — try a straighter angle or better light."
    }
];
function levelFromPercent(pct) {
    if (pct >= 75) return "high";
    if (pct >= 45) return "medium";
    return "low";
}
function Page() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(STATUS.IDLE);
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const acceptFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[acceptFile]": (f)=>{
            if (!f || !f.type.startsWith("image/")) return;
            setFile(f);
            setPreviewUrl(URL.createObjectURL(f));
            setResult(null);
            setErrorMessage("");
            setStatus(STATUS.READY);
        }
    }["Page.useCallback[acceptFile]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setDragActive(false);
            const f_0 = e.dataTransfer.files?.[0];
            acceptFile(f_0);
        }
    }["Page.useCallback[handleDrop]"], [
        acceptFile
    ]);
    const handleAnalyze = async ()=>{
        if (!file) return;
        setStatus(STATUS.WORKING);
        setErrorMessage("");
        try {
            const formData = new FormData();
            formData.append("image", file);
            const res = await fetch("/api/predict", {
                method: "POST",
                body: formData
            });
            if (!res.ok) throw new Error("lookup_failed");
            const data = await res.json();
            setResult(data);
            setStatus(STATUS.DONE);
        } catch (err) {
            // No live endpoint in this preview. Name a file with "fail" in it
            // to see the error state — otherwise we fall back to a sample
            // reading so the result panel can be reviewed end to end.
            if (file.name.toLowerCase().includes("fail")) {
                setErrorMessage("Couldn't reach the analyzer. Try again in a moment.");
                setStatus(STATUS.ERROR);
                return;
            }
            await new Promise((r)=>setTimeout(r, 1300));
            const demo = DEMO_RESULTS[Math.floor(Math.random() * DEMO_RESULTS.length)];
            setResult(demo);
            setStatus(STATUS.DONE);
        }
    };
    const reset = ()=>{
        setFile(null);
        setPreviewUrl(null);
        setResult(null);
        setErrorMessage("");
        setStatus(STATUS.IDLE);
        if (inputRef.current) inputRef.current.value = "";
    };
    const pct = result?.confidencePercent ?? 0;
    const level = levelFromPercent(pct);
    const filledSegments = Math.round(pct / 10);
    const statusMeta = {
        [STATUS.IDLE]: {
            label: "STANDBY",
            dot: "dot--idle"
        },
        [STATUS.READY]: {
            label: "READY",
            dot: "dot--ready"
        },
        [STATUS.WORKING]: {
            label: "SCANNING",
            dot: "dot--working"
        },
        [STATUS.DONE]: {
            label: "COMPLETE",
            dot: "dot--done"
        },
        [STATUS.ERROR]: {
            label: "ERROR",
            dot: "dot--error"
        }
    }[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lucida-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .lucida-root {
          --bg: #121316;
          --panel: #1a1c20;
          --panel-raised: #202227;
          --border: #2b2e34;
          --border-strong: #3a3e46;
          --ink: #eef0f3;
          --ink-soft: #9ca1ab;
          --ink-faint: #63676f;
          --accent: #4fd8c4;
          --accent-dim: rgba(79, 216, 196, 0.14);
          --amber: #f0a63a;
          --amber-dim: rgba(240, 166, 58, 0.14);
          --danger: #f0616b;
          --danger-dim: rgba(240, 97, 107, 0.14);

          background: var(--bg);
          min-height: 100vh;
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .lucida-root .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }

        .lucida-root .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .lucida-root .topbar {
          border-bottom: 1px solid var(--border);
          background: rgba(26, 28, 32, 0.75);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .lucida-root .brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          border: 1px solid var(--border-strong);
          background: linear-gradient(160deg, var(--panel-raised), var(--panel));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }

        .lucida-root .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot--idle { background: var(--ink-faint); }
        .dot--ready { background: var(--accent); }
        .dot--working { background: var(--accent); animation: pulseGlow 1.1s ease-in-out infinite; }
        .dot--done { background: var(--accent); }
        .dot--error { background: var(--danger); }

        .lucida-root .panel {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 20px;
          box-shadow: 0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 60px -30px rgba(0,0,0,0.6);
        }

        .lucida-root .viewfinder {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #0c0d0f;
          border: 1px solid var(--border);
          cursor: pointer;
        }

        .lucida-root .viewfinder.is-empty {
          background:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 26px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 26px),
            #0c0d0f;
        }

        .lucida-root .viewfinder.drag-active {
          border-color: var(--accent);
          background: var(--accent-dim);
        }

        .lucida-root .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: var(--accent);
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }
        .lucida-root .corner.tl { top: 10px; left: 10px; border-top: 2px solid; border-left: 2px solid; border-radius: 3px 0 0 0; }
        .lucida-root .corner.tr { top: 10px; right: 10px; border-top: 2px solid; border-right: 2px solid; border-radius: 0 3px 0 0; }
        .lucida-root .corner.bl { bottom: 10px; left: 10px; border-bottom: 2px solid; border-left: 2px solid; border-radius: 0 0 0 3px; }
        .lucida-root .corner.br { bottom: 10px; right: 10px; border-bottom: 2px solid; border-right: 2px solid; border-radius: 0 0 3px 0; }

        .lucida-root .scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          box-shadow: 0 0 14px 2px var(--accent);
          animation: scanSweep 1.7s linear infinite;
        }

        .lucida-root .segment {
          width: 14px;
          height: 7px;
          border-radius: 1px;
          background: var(--border);
          transition: background 0.25s ease;
        }

        .lucida-root .chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.02em;
          padding: 4px 9px;
          border-radius: 5px;
          border: 1px solid var(--border-strong);
          background: var(--panel-raised);
          color: var(--ink-soft);
        }

        .lucida-root .btn-primary {
          background: var(--accent);
          color: #08201c;
          font-weight: 600;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
          box-shadow: 0 8px 24px -10px rgba(79, 216, 196, 0.55);
        }
        .lucida-root .btn-primary:hover:not(:disabled) {
          background: #6ce4d3;
          transform: translateY(-1px);
        }
        .lucida-root .btn-primary:disabled {
          opacity: 0.35;
          box-shadow: none;
          cursor: not-allowed;
        }

        .lucida-root .btn-secondary {
          border: 1px solid var(--border-strong);
          color: var(--ink);
          background: transparent;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .lucida-root .btn-secondary:hover {
          border-color: var(--ink-faint);
          background: var(--panel-raised);
        }

        .lucida-root .focus-ring {
          animation: rotateRing 6s linear infinite;
        }

        .lucida-root .alert-box {
          background: var(--danger-dim);
          border: 1px solid rgba(240, 97, 107, 0.35);
          color: #ffb3b8;
          border-radius: 10px;
        }

        .lucida-root .shimmer {
          background: linear-gradient(90deg, var(--panel-raised) 25%, var(--border-strong) 37%, var(--panel-raised) 63%);
          background-size: 400% 100%;
          animation: shimmer 1.4s ease infinite;
        }

        .lucida-root .fade-up {
          animation: fadeUp 0.4s ease both;
        }

        @keyframes scanSweep {
          0% { top: -5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; box-shadow: 0 0 0 0 rgba(79,216,196,0.4); }
          50% { opacity: 1; box-shadow: 0 0 0 4px rgba(79,216,196,0); }
        }
        @keyframes rotateRing {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .lucida-root .scan-line,
          .lucida-root .dot--working,
          .lucida-root .focus-ring,
          .lucida-root .shimmer {
            animation: none !important;
          }
        }

        .lucida-root :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 980,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "brand-mark",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aperture"], {
                                        className: "w-4 h-4",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 1208,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-display font-semibold text-[15px]",
                                            style: {
                                                color: "var(--ink)"
                                            },
                                            children: "Lucida"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[10px] tracking-wide",
                                            style: {
                                                color: "var(--ink-faint)"
                                            },
                                            children: "OPTICAL ANALYSIS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1216,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-mono text-[11px] tracking-wide flex items-center gap-2",
                            style: {
                                color: "var(--ink-soft)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `status-dot ${statusMeta.dot}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1226,
                                    columnNumber: 13
                                }, this),
                                statusMeta.label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-6 py-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-3xl sm:text-[2.35rem] font-semibold tracking-tight leading-[1.1]",
                                style: {
                                    color: "var(--ink)"
                                },
                                children: "See what's really there."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[15px] leading-relaxed",
                                style: {
                                    color: "var(--ink-soft)"
                                },
                                children: "Drop a photo in the frame. Lucida reads it back to you — what it is, what kind, and what stands out."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 sm:p-8",
                                    style: {
                                        borderRight: "1px solid var(--border)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onDragOver: (e_0)=>{
                                                e_0.preventDefault();
                                                setDragActive(true);
                                            },
                                            onDragLeave: ()=>setDragActive(false),
                                            onDrop: handleDrop,
                                            onClick: ()=>inputRef.current?.click(),
                                            onKeyDown: (e_1)=>{
                                                if (e_1.key === "Enter" || e_1.key === " ") inputRef.current?.click();
                                            },
                                            role: "button",
                                            tabIndex: 0,
                                            "aria-label": "Upload an image to analyze",
                                            className: `viewfinder aspect-[4/3] w-full flex items-center justify-center ${previewUrl ? "" : "is-empty"} ${dragActive ? "drag-active" : ""}`,
                                            children: [
                                                previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: previewUrl,
                                                            alt: "Selected upload",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1263,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner tl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1264,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner tr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner bl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1266,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner br"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1267,
                                                            columnNumber: 21
                                                        }, this),
                                                        status === STATUS.WORKING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "scan-line"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1269,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex flex-col items-center justify-center gap-2.5",
                                                                    style: {
                                                                        background: "rgba(12,13,15,0.45)"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-mono text-[11px] tracking-wide px-2.5 py-1 rounded",
                                                                        style: {
                                                                            background: "rgba(18,19,22,0.8)",
                                                                            color: "var(--accent)",
                                                                            border: "1px solid var(--border-strong)"
                                                                        },
                                                                        children: "READING FRAME…"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.js",
                                                                        lineNumber: 1273,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1270,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1268,
                                                            columnNumber: 51
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1261,
                                                    columnNumber: 31
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center gap-3 px-6 text-center relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Crosshair"], {
                                                            className: "w-8 h-8 focus-ring",
                                                            strokeWidth: 1.25,
                                                            style: {
                                                                color: dragActive ? "var(--accent)" : "var(--ink-faint)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1283,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    style: {
                                                                        color: "var(--ink)"
                                                                    },
                                                                    children: dragActive ? "Release to load" : "Drop an image to focus"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1287,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-mono text-[11px] mt-1",
                                                                    style: {
                                                                        color: "var(--ink-faint)"
                                                                    },
                                                                    children: "or click to browse · JPG, PNG up to 10MB"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1292,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1286,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner tl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1298,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner tr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1299,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner bl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1300,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "corner br"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1301,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1282,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: inputRef,
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "hidden",
                                                    onChange: (e_2)=>acceptFile(e_2.target.files?.[0])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1304,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1255,
                                            columnNumber: 15
                                        }, this),
                                        file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center gap-2 font-mono text-[11px] fade-up",
                                            style: {
                                                color: "var(--ink-soft)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileText"], {
                                                    className: "w-3.5 h-3.5 shrink-0",
                                                    style: {
                                                        color: "var(--ink-faint)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1310,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1313,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1307,
                                            columnNumber: 24
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex gap-3",
                                            children: status !== STATUS.DONE ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAnalyze,
                                                disabled: !file || status === STATUS.WORKING,
                                                className: "btn-primary inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg",
                                                children: status === STATUS.WORKING ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshCw"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1319,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Analyzing"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1318,
                                                    columnNumber: 50
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1322,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Analyze image"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1321,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 1317,
                                                columnNumber: 43
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: reset,
                                                className: "btn-secondary inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshCw"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 1326,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Analyze another"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 1325,
                                                columnNumber: 31
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1316,
                                            columnNumber: 15
                                        }, this),
                                        status === STATUS.ERROR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "alert-box mt-4 px-3.5 py-3 flex items-start gap-2.5 text-[13px] fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTriangle"], {
                                                    className: "w-4 h-4 shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: errorMessage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1333,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1331,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 sm:p-8 flex flex-col",
                                    style: {
                                        background: "var(--panel-raised)"
                                    },
                                    children: [
                                        status === STATUS.WORKING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2.5 w-24 rounded shimmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1343,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-5 w-40 rounded shimmer mt-2.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1344,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1342,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-6 w-28 rounded shimmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1347,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-6 w-20 rounded shimmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2.5 w-28 rounded shimmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1351,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-3.5 w-full rounded shimmer mt-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1352,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-3.5 w-5/6 rounded shimmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1353,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-3.5 w-2/3 rounded shimmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1354,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1350,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1341,
                                            columnNumber: 45
                                        }, this),
                                        status === STATUS.DONE && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-5 fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] tracking-wider",
                                                            style: {
                                                                color: "var(--ink-faint)"
                                                            },
                                                            children: "TARGET IDENTIFIED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1360,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "font-display text-xl font-semibold mt-1",
                                                            style: {
                                                                color: "var(--ink)"
                                                            },
                                                            children: result.name || "Unresolved"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1365,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1359,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "chip",
                                                        children: [
                                                            "[ ",
                                                            (result.classification || "Unclassified").toUpperCase(),
                                                            " ]"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 1373,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1372,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[10px] tracking-wider",
                                                                    style: {
                                                                        color: "var(--ink-faint)"
                                                                    },
                                                                    children: "MATCH CONFIDENCE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1378,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[12px] font-medium",
                                                                    style: {
                                                                        color: LEVEL_COLOR[level]
                                                                    },
                                                                    children: [
                                                                        pct,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1383,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1377,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: Array.from({
                                                                length: 10
                                                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "segment",
                                                                    style: i < filledSegments ? {
                                                                        background: LEVEL_COLOR[level]
                                                                    } : undefined
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1392,
                                                                    columnNumber: 36
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1389,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1376,
                                                    columnNumber: 19
                                                }, this),
                                                result.properties && result.properties.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] tracking-wider",
                                                            style: {
                                                                color: "var(--ink-faint)"
                                                            },
                                                            children: "KEY PROPERTIES"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1399,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-2 flex flex-col gap-1.5",
                                                            children: result.properties.map((p, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start gap-2 text-sm",
                                                                    style: {
                                                                        color: "var(--ink)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                                                            className: "w-3.5 h-3.5 mt-0.5 shrink-0",
                                                                            style: {
                                                                                color: "var(--accent)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.js",
                                                                            lineNumber: 1408,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: p
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.js",
                                                                            lineNumber: 1411,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, i_0, true, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 1405,
                                                                    columnNumber: 60
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 1404,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1398,
                                                    columnNumber: 73
                                                }, this),
                                                result.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs pt-3",
                                                    style: {
                                                        color: "var(--ink-faint)",
                                                        borderTop: "1px dashed var(--border-strong)"
                                                    },
                                                    children: result.note
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1416,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1358,
                                            columnNumber: 52
                                        }, this),
                                        status !== STATUS.WORKING && !(status === STATUS.DONE && result) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col items-center justify-center text-center py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$cjs$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Crosshair"], {
                                                    className: "w-8 h-8 mb-3",
                                                    strokeWidth: 1.25,
                                                    style: {
                                                        color: "var(--ink-faint)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1425,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[11px] tracking-wide",
                                                    style: {
                                                        color: "var(--ink-soft)"
                                                    },
                                                    children: "AWAITING INPUT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1428,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-1.5 max-w-[220px]",
                                                    style: {
                                                        color: "var(--ink-faint)"
                                                    },
                                                    children: "Load an image and run the scan to see what Lucida finds."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 1433,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1424,
                                            columnNumber: 84
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1338,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1250,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[10px] text-center mt-6 tracking-wide",
                        style: {
                            color: "var(--ink-faint)"
                        },
                        children: "READINGS ARE INFERRED AND MAY NOT ALWAYS BE ACCURATE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1443,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 979,
        columnNumber: 10
    }, this);
}
_s(Page, "3yo/nVpE9LfMEi4KkN7fzXvvkg4=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_1oninbp.js.map