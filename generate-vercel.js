import fs from "fs";

// 1. Zoznam 6 Core Aplikácií
const coreApps = [
  ["uplink", "https://projekt-nexus.sk/login"],
  ["shop", "[suspicious link removed]*"],
  ["agency", "[suspicious link removed]*"],
  ["admin", "[suspicious link removed]*"],
  ["operators", "[suspicious link removed]*"],
  ["settings", "[suspicious link removed]*"]
];

// 2. Zoznam 16 Subdomén OS Genesis (SUB 00 až SUB 15)
const subdomains = [
  ["mentor", "00"], ["personal", "01"], ["work", "02"], ["finance", "03"],
  ["business", "04"], ["investments", "05"], ["study", "06"], ["professional", "07"],
  ["reader", "08"], ["player", "09"], ["home", "10"], ["recovery", "11"],
  ["codex", "12"], ["habits", "13"], ["blog", "14"], ["death", "15"]
];

// 3. Konštrukcia matice 301 presmerovaní (redirects)
const redirects = [
  ...coreApps.map(([host, dest]) => ({
    source: "/:path*",
    has: [{ type: "host", value: host + ".projekt-nexus.sk" }],
    destination: dest,
    permanent: true
  })),
  ...subdomains.map(([host, subId]) => ({
    source: "/:path*",
    has: [{ type: "host", value: host + ".projekt-nexus.sk" }],
    destination: "https://projekt-nexus.sk/sub-" + subId + "/:path*",
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
console.log("✅ Súbor vercel.json bol úspešne vygenerovaný s reálnymi subId bez zacyklenia!");