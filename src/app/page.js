
"use client";

import Link from "next/link";
import { useState } from "react";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

function LeafMark({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20C4 11 10 4 20 4C20 14 13 20 4 20Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M4 20L14 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8.5C4 7.67 4.67 7 5.5 7H8L9.2 5H14.8L16 7H18.5C19.33 7 20 7.67 20 8.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="13"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L13.6 9.4L20 11L13.6 12.6L12 19L10.4 12.6L4 11L10.4 9.4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11.5C19 16.2 16.1 19.2 12 21C7.9 19.2 5 16.2 5 11.5V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} page ${
        theme === "dark" ? "theme-dark" : ""
      }`}
    >
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="navbar">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">
              <LeafMark />
            </span>

            <span className="brand-name">
              Herbarium Lens
            </span>
          </Link>

          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#technology">Technology</a>
          </nav>

          <div className="nav-actions">
            

            <button
              className="theme-button"
              onClick={() =>
                setTheme((current) =>
                  current === "light"
                    ? "dark"
                    : "light"
                )
              }
              aria-label="Toggle theme"
            >
              {theme === "light"
                ? "☾ Dark"
                : "☀ Light"}
            </button>

            <Link
              href="/predict"
              className="nav-cta"
            >
              Try it
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
         

            <h1>
              Give every
              <br />
              <em>leaf a name.</em>
            </h1>

            <p className="hero-description">
              Herbarium Lens uses computer vision to
              identify plant specimens from photographs
              and provide useful information about their
              medicinal properties, traditional uses, and
              safety considerations.
            </p>

            <div className="hero-buttons">
              <Link
                href="/predict"
                className="primary-button"
              >
                Identify a plant
                <ArrowIcon />
              </Link>

              <a
                href="#how-it-works"
                className="secondary-button"
              >
                See how it works
              </a>
            </div>

            
          </div>

          <div className="hero-visual">
            <div className="specimen-card">
              <div className="specimen-top">
                <span>HERBARIUM LENS</span>
                <span>SPECIMEN / 001</span>
              </div>

              <div className="specimen-image">
                <div className="botanical-ring">
                  <LeafMark size={115} />
                </div>

                <div className="scan-line" />
              </div>

              <div className="specimen-info">
                <div>
                  <span className="mini-label">
                     ANALYSIS
                  </span>

                  <h3>
                    Ready for identification
                  </h3>
                </div>

                <span className="specimen-arrow">
                  ↗
                </span>
              </div>
            </div>


            <div className="floating-card floating-two">
              <span className="check">✓</span>

              <div>
                <strong>49 classes</strong>
                <small>Known plant species</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / ABOUT
      ========================================================= */}

      <section
        id="about"
        className="section about-section"
      >
        <div className="section-label">
          <span>01</span>
          About the project
        </div>

        <div className="about-content">
          <h2>
            From a photograph
            <br />
            to a <em>plant profile.</em>
          </h2>

          <div className="about-text">
            <p>
              Herbarium Lens is an AI-assisted plant
              identification application designed to
              recognize plant specimens from images.
            </p>

            <p>
              Instead of manually searching through
              botanical references, users can upload a
              photograph and receive an identification
              generated by a vision model.
            </p>

            <p>
              Once the plant has been identified, a
              second language model generates a concise
              overview covering medicinal properties,
              traditional uses, benefits, and relevant
              safety considerations.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE GRID
      ========================================================= */}

      <section
        id="features"
        className="section features-section"
      >
        <div className="section-label">
          <span>02</span>
          Core capabilities
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-number">
              01
            </div>

            <div className="feature-icon">
              <CameraIcon />
            </div>

            <h3>
              Single image identification
            </h3>

            <p>
              Upload a photograph of a leaf and send
              the specimen directly to the vision
              prediction system.
            </p>

            <div className="feature-footer">
              JPG / PNG
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-number">
              02
            </div>

            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="4"
                  y="4"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="14"
                  y="4"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="4"
                  y="14"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="14"
                  y="14"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <h3>
              Collection folder support
            </h3>

            <p>
              Select an entire image collection and
              browse its sub-folders and individual
              specimens from the prediction interface.
            </p>

            <div className="feature-footer">
              COLLECTION MODE
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-number">
              03
            </div>

            <div className="feature-icon">
              <SparkIcon />
            </div>

            <h3>
              AI-powered classification
            </h3>

            <p>
              The submitted image is analyzed by a
              vision model and matched against the
              project's known plant classes.
            </p>

            <div className="feature-footer">
              COMPUTER VISION
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-number">
              04
            </div>

            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 4H18V20H6V4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 8H15M9 12H15M9 16H13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3>
              Medicinal information
            </h3>

            <p>
              After identification, the application
              generates a concise overview of medicinal
              properties and traditional or common uses.
            </p>

            
          </article>

          <article className="feature-card">
            <div className="feature-number">
              05
            </div>

            <div className="feature-icon">
              <ShieldIcon />
            </div>

            <h3>
              Safety information
            </h3>

            <p>
              Generated plant information includes a
              brief safety note covering relevant
              cautions, allergies, dosage concerns, or
              professional consultation.
            </p>

            <div className="feature-footer">
              SAFETY NOTE
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-number">
              06
            </div>

            <div className="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3>
              Simple specimen workflow
            </h3>

            <p>
              Upload, analyze, identify. The interface
              keeps the workflow focused instead of
              overwhelming the user with unnecessary
              steps.
            </p>

            <div className="feature-footer">
              SIMPLE WORKFLOW
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section
        id="how-it-works"
        className="section process-section"
      >
        <div className="section-label">
          <span>03</span>
          How it works
        </div>

        <div className="process-content">
          <h2>
            Three steps.
            <br />
            <em>One identification.</em>
          </h2>

          <div className="process-list">
            <div className="process-item">
              <div className="process-number">
                01
              </div>

              <div>
                <h3>Upload a specimen</h3>

                <p>
                  Choose a single plant photograph or
                  select a collection folder containing
                  multiple images.
                </p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-number">
                02
              </div>

              <div>
                <h3>Analysis</h3>

                <p>
                  The image is sent to the prediction
                  API, where the vision model examines
                  the specimen and selects the closest
                  supported plant class.
                </p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-number">
                03
              </div>

              <div>
                <h3>Plant information</h3>

                <p>
                  A text model generates a concise
                  plant overview covering medicinal
                  properties, traditional uses,
                  benefits, and safety considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      

      {/* =========================================================
          SUPPORTED PLANTS
      ========================================================= */}

      <section className="section plants-section">
        <div className="section-label">
          <span>05</span>
          Supported classes
        </div>

        <div className="plants-content">
          <div>
            <h2>
              Built around a
              <br />
              <em>defined plant set.</em>
            </h2>

            <p>
              The current prediction system is
              constrained to a known collection of plant
              classes rather than allowing unrestricted
              classification.
            </p>
          </div>

          <div className="plant-tags">
            {[
              "Turmeric",
              "Tulsi",
              "Tomato",
              "Pumpkin",
              "Pomegranate",
              "Pepper",
              "Pea",
              "Papaya",
              "Spinach",
              "Onion",
              "Neem",
              "Marigold",
              "Mango",
              "Lemon",
              "Jasmine",
              "Jackfruit",
              "Hibiscus",
              "Henna",
              "Guava",
              "Eucalyptus",
              "Drumstick",
              "Coriander",
              "Coffee",
              "Castor",
              "Bhrami",
              "Betel",
              "Bamboo",
              "Amla",
              "Aloevera",
            ].map((plant) => (
              <span
                key={plant}
                className="plant-tag"
              >
                {plant}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSIBLE USE
      ========================================================= */}

      <section className="responsible-section">
        <div className="responsible-inner">
          <div className="responsible-icon">
            <ShieldIcon />
          </div>

          <div>
            <span className="eyebrow">
              Responsible use
            </span>

            <h2>
              Identification is not
              <br />
              medical diagnosis.
            </h2>

            <p>
              Herbarium Lens provides AI-assisted
              identification and informational summaries.
              The generated medicinal information should
              not be treated as professional medical
              advice, diagnosis, or a substitute for
              consultation with a qualified healthcare
              professional.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="cta-section">
        <div className="cta-inner">
          <span className="eyebrow">
            Ready to explore?
          </span>

          <h2>
            Put your specimen
            <br />
            <em>under the lens.</em>
          </h2>

          <p>
            Upload a plant photograph and see what
            Herbarium Lens can identify.
          </p>

          <Link
            href="/predict"
            className="primary-button large"
          >
            Start identification
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark">
              <LeafMark />
            </span>

            <div>
              <div className="footer-name">
                Herbarium Lens
              </div>

             
            </div>
          </div>

          <div className="footer-links">
            <div>
              <span>PRODUCT</span>

              <Link href="/predict">
                Plant prediction
              </Link>

              <a href="#features">
                Features
              </a>

              <a href="#how-it-works">
                How it works
              </a>
            </div>

            <div>
              <span>PROJECT</span>

              <a href="#about">
                About
              </a>

              <a href="#technology">
                Technology
              </a>

              <a href="#features">
                Capabilities
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Herbarium Lens
          </span>

         
          <Link href="/predict">
            Open predictor →
          </Link>
        </div>
      </footer>

      {/* =========================================================
          STYLES
      ========================================================= */}

    
    </div>
  );
}