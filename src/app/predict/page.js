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

import { useState } from "react";
import Link from "next/link";
import "./predict.css"

const CONFIDENCE_META = {
  high: { label: "High confidence", width: "w-[90%]", bar: "bg-green-500", chip: "bg-green-50 text-green-700 border-green-200" },
  medium: { label: "Medium confidence", width: "w-[60%]", bar: "bg-amber-500", chip: "bg-amber-50 text-amber-700 border-amber-200" },
  low: { label: "Low confidence", width: "w-[25%]", bar: "bg-red-500", chip: "bg-red-50 text-red-700 border-red-200" },
};

export default function PredictPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError("");
  };

  const handlePredict = async () => {
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
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(friendlyError(data?.error));
      }

      setResult(data);
    } catch (err) {
      console.error("Prediction error:", err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const resetPrediction = () => {
    setImage(null);
    setPreview("");
    setResult(null);
    setError("");
  };

  const confidence = result ? CONFIDENCE_META[result.confidence] || CONFIDENCE_META.low : null;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="h-[72px] px-[7%] flex items-center justify-between bg-white border-b border-slate-200">
        <Link href="/" className="flex items-center gap-2.5 text-slate-900 no-underline text-[19px] font-semibold">
          <span className="text-blue-600 text-[28px]">⌁</span>
          MedLeafViT
        </Link>
        <Link href="/" className="hidden sm:block text-slate-500 no-underline text-[13px] hover:text-blue-600">
          ← Back to home
        </Link>
      </nav>

      {/* HERO */}
      <section className="text-center px-5 pt-20 pb-12">
        <h1 className="font-serif font-medium leading-[0.95] tracking-[-0.06em] text-[45px] sm:text-[75px] my-4">
          Put your plant
          <br />
          <em className="text-blue-600 not-italic">under the lens.</em>
        </h1>
        <p className="max-w-[520px] mx-auto text-slate-500 text-[15px] leading-relaxed">
          Upload a clear photograph of a plant leaf and let our vision model
          identify it.
        </p>
      </section>

      {/* PREDICTOR */}
      <section className="w-[92%] sm:w-[760px] mx-auto pb-24">
        <div className="bg-white border border-slate-200 p-3 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          {/* UPLOAD */}
          {!preview ? (
            <label className="min-h-[300px] sm:min-h-[350px] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center cursor-pointer transition-colors hover:border-blue-600 hover:bg-blue-50/40">
              <div className="w-[60px] h-[60px] rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[28px] mb-5">
                ↑
              </div>
              <h2 className="font-serif font-medium text-[27px] mb-2">
                Upload a specimen
              </h2>
              <p className="text-slate-500 text-[13px] mb-5">
                Choose a JPG, JPEG, PNG or WEBP image.
              </p>
              <span className="bg-slate-900 text-white px-[18px] py-3 rounded-md text-xs font-semibold">
                Choose image
              </span>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleImageChange}
                hidden
              />
            </label>
          ) : (
            <div className="p-2.5">
              <img
                src={preview}
                alt="Selected plant"
                className="w-full max-h-[500px] object-contain block bg-slate-100"
              />
              <div className="flex justify-center gap-2.5 mt-4">
                <label className="border border-slate-200 bg-white px-3.5 py-2 rounded-md text-xs cursor-pointer hover:border-blue-600 hover:text-blue-600">
                  Change image
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                    onChange={handleImageChange}
                    hidden
                  />
                </label>
                <button
                  onClick={resetPrediction}
                  type="button"
                  className="border border-slate-200 bg-white px-3.5 py-2 rounded-md text-xs cursor-pointer hover:border-red-500 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          )}

          {/* PREDICT BUTTON */}
          {preview && (
            <button
              onClick={handlePredict}
              disabled={loading}
              type="button"
              className="w-full mt-5 border-none bg-slate-900 text-white py-[15px] rounded-md text-[13px] font-bold cursor-pointer flex justify-center items-center gap-3 hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white/35 border-t-white animate-spin" />
                  Analyzing specimen...
                </>
              ) : (
                <>
                  Identify this plant
                  <span>→</span>
                </>
              )}
            </button>
          )}

          {/* ERROR */}
          {error && (
            <div className="mt-5 p-4 bg-red-50 border border-red-200 text-red-800">
              <strong className="text-[13px]">Something went wrong</strong>
              <p className="mt-1 text-xs">{error}</p>
            </div>
          )}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="mt-5 bg-white border border-slate-200 p-6 flex items-center gap-5">
            <div className="w-[38px] h-[38px] rounded-full border-[3px] border-blue-100 border-t-blue-600 animate-spin shrink-0" />
            <div>
              <strong className="text-sm">Analysis in progress</strong>
              <p className="mt-1 text-slate-500 text-xs leading-relaxed">
                Identifying the specimen and generating plant information...
              </p>
            </div>
          </div>
        )}

        {/* RESULT */}
        {result && !loading && (
          <div className="mt-6 bg-white border border-slate-200 p-5 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-blue-600 text-[9px] font-bold tracking-[1.5px]">
                  IDENTIFICATION RESULT
                </span>
                <h2 className="font-serif font-medium text-[30px] sm:text-[38px] mt-2">
                  {result.name || "Unknown"}
                </h2>
                <span className="inline-block mt-2 text-[11px] text-slate-500">
                  {result.classification || "Unclassified"}
                </span>
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${
                  result.identified === false ? "bg-slate-300" : "bg-green-500"
                }`}
              >
                {result.identified === false ? "?" : "✓"}
              </div>
            </div>

            {confidence && (
              <div className="mt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-500 text-[10px] font-bold tracking-wide">
                    CONFIDENCE
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${confidence.chip}`}
                  >
                    {confidence.label}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${confidence.width} ${confidence.bar}`} />
                </div>
              </div>
            )}

            <div className="h-px bg-slate-200 my-6" />

            {result.identified === false ? (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 text-[13px] leading-relaxed">
                We couldn't confidently identify this specimen. Try a
                clearer, closer photo of the leaf or flower.
              </div>
            ) : (
              <div>
                <span className="text-slate-500 text-[9px] font-bold tracking-wide">
                  PLANT PROFILE
                </span>

                {result.properties && result.properties.length > 0 ? (
                  <ul className="mt-3 flex flex-col gap-2">
                    {result.properties.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-slate-700 text-[13px] leading-relaxed"
                      >
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-slate-500 text-[13px]">
                    No additional information available.
                  </p>
                )}
              </div>
            )}

            {result.note && (
              <p className="mt-5 pt-4 border-t border-dashed border-slate-200 text-slate-500 text-xs">
                {result.note}
              </p>
            )}

          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-[7%] sm:px-5 py-5 flex justify-between text-slate-500 text-[10px]">
        <span>© 2026 Herbarium Lens</span>
        <Link href="/" className="text-blue-600 no-underline">
          Herbarium Lens
        </Link>
      </footer>
    </main>
  );
}

function friendlyError(code) {
  switch (code) {
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