import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { SEO_REGISTRY } from "./data/seoRegistry";

// ============================================================================
// ⚡ NEXUS OMEGA INJEKTOR (Kaskádový SEO & Open Graph Router)
// Core Version: INDEX-BOOT V20.80
// ============================================================================
const injectSEO = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const path = window.location.pathname; // Získa čistú cestu bez ?parametrov

  // 🧠 Logika Dedičnosti (Fallback Router)
  const getSeoData = (currentPath) => {
    // 1. Skús exaktnú zhodu (napr. "/", "/login", "/ID01")
    if (SEO_REGISTRY[currentPath]) return SEO_REGISTRY[currentPath];

    // 2. Kaskádový Bypass pre vnorené uzly
    const matchingNodes = Object.keys(SEO_REGISTRY)
      .filter((key) => currentPath.startsWith(key) && key !== "/")
      .sort((a, b) => b.length - a.length);

    // 🛑 FIX: Pridaný index pre najpresnejší uzol z poľa
    if (matchingNodes.length > 0) return SEO_REGISTRY[matchingNodes];

    // 3. Extrémny Fallback: Záchranná brzda pre 404 a iné anomálie
    return SEO_REGISTRY["/"] || {};
  };

  const seo = getSeoData(path) || {}; // Ochrana voči 'undefined'

  // 🎯 INJEKCIA DÁT DO DOM STROMU
  if (seo.title) document.title = seo.title;

  const setMeta = (name, content, isProperty = false) => {
    if (!content) return;
    const attr = isProperty ? "property" : "name";
    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  // 🔮 ZÁKLADNÉ SEO
  setMeta("description", seo.description);
  setMeta("theme-color", seo.themeColor);

  // 🌐 OPEN GRAPH
  setMeta("og:url", seo.ogUrl || window.location.href, true);
  setMeta("og:type", seo.ogType || "website", true);
  setMeta("og:title", seo.ogTitle || seo.title, true);
  setMeta("og:description", seo.ogDescription || seo.description, true);
  setMeta("og:image", seo.ogImage, true);

  // 🔖 TWITTER / X CARD
  setMeta("twitter:card", seo.twitterCard || "summary_large_image");
  setMeta("twitter:title", seo.twitterTitle || seo.title);
  setMeta("twitter:description", seo.twitterDescription || seo.description);
  setMeta("twitter:image", seo.twitterImage || seo.ogImage);

  console.log(
    `[NEXUS_OS]: SEO Injektor úspešne nabootoval matriku pre uzol: ${path}`,
  );
};

// ⚡ EXEKÚCIA INJEKTORA PRED RENDEROM REACTU
injectSEO();

// ============================================================================
// 🚀 BOOT SEQUENCE (Spustenie Jadra)
// ============================================================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
