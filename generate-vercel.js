import fs from "fs";

// 1. Zoznam 7 Core Aplikácií
const coreApps = [
  ["uplink", "/login"],
  ["shop", "/shop"],
  ["agency", "/agency"],
  ["admin", "/admin"],
  ["operators", "/operators"],
  ["settings", "/settings"],
  ["blog", "/blog"]
];

// 2. Zoznam 15 Subdomén (SUB 00 až SUB 15)
const subdomains = [
  ["mentor", "00"], ["personal", "01"], ["work", "02"], ["finance", "03"],
  ["business", "04"], ["investments", "05"], ["study", "06"], ["professional", "07"],
  ["reader", "08"], ["player", "09"], ["home", "10"], ["recovery", "11"],
  ["codex", "12"], ["habits", "13"], ["death", "15"]
];

// 3. Konštrukcia matice 301 presmerovaní (redirects)
const redirects = [
  ...coreApps.map(([host, path]) => ({
    source: "/:path*",
    has: [{ type: "host", value: `${host}.projekt-nexus.sk` }],
    destination: `https://projekt-nexus.sk${path}${host === "uplink" ? "" : "/:path*"}`,
    permanent: true
  })),
  ...subdomains.map(([host, subId]) => ({
    source: "/:path*",
    has: [{ type: "host", value: `${host}.projekt-nexus.sk` }],
    destination: `[suspicious link removed]{subId}/:path*`,
    permanent: true
  }))
];

// 4. Finálny Vercel Manifest Objekt
const vercelConfig = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  buildCommand: "npm run build",
  outputDirectory: "apps/main-web/dist",
  cleanUrls: true,
  redirects: redirects,
  rewrites: [
    { source: "/(.*)", destination: "/index.html" }
  ]
};

// 5. Zápis do vercel.json na disku
fs.writeFileSync("vercel.json", JSON.stringify(vercelConfig, null, 2));
console.log("✅ Súbor vercel.json bol úspešne vygenerovaný (22 presmerovaní + 1 SPA rewrite)!");