/**
 * ============================================================================
 * 🌌 NEXUS CORE SCANNER V4.2 (BULLETPROOF) - MANUÁL NA POUŽITIE
 * ============================================================================
 * ÚČEL SKRIPTU:
 * Tento Node.js radar prehľadáva celý tvoj vývojársky adresár a radí súbory 
 * od najnovšie upravených po najstaršie. Ideálne na kontrolu toho, kde si 
 * naposledy robil zmeny.
 * 
 * ⚡ DETEKCIA "SPLIT-PROTOCOL":
 * Skript automaticky váži veľkosť súborov. Ak .jsx alebo .md súbor presiahne 
 * 30 KB, dostane výstražný štítok [🟥 SPLIT-PROTOCOL]. Je to vizuálne varovanie, 
 * že súbor je pre AI asistenta priveľký a pri jeho generovaní/úprave musí 
 * Architekt aplikovať "Kvartérnu Exekúciu (4-Part Split)".
 * 
 * AKO TO SPUSTIŤ:
 * V termináli (VS Code alebo PowerShell) zadaj príkaz:
 * node nexus-scanner.js
 * ============================================================================
 */

const fs = require("fs");
const path = require("path");

// 1. ZLOŽKY, KTORÉ NÁŠ SKEN ÚPLNE IGNORUJE (Pridal som sem 'src-firebase-archive')
const IGNORED_DIRS = [
  ".git",
  "node_modules",
  "build",
  ".firebase",
  ".vercel",
  "assets",
  "src-firebase-backup",
  "src-firebase-archive",
];

// 2. PRÍPONY, KTORÉ NÁS ZAUJÍMAJÚ
const ALLOWED_EXTENSIONS = [".jsx", ".js", ".md", ".json", ".html"];

function scanNexus(dir) {
  let results = [];
  let files = [];

  // ⚡ BEZPEČNOSTNÝ ŠTÍT 1: Ak zložka neexistuje alebo je zamknutá, preskočí ju
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    return results;
  }

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    let stat;

    // ⚡ BEZPEČNOSTNÝ ŠTÍT 2: Ochrana pred rozbitými súbormi a odkazmi (ENOENT fix)
    try {
      stat = fs.statSync(fullPath);
    } catch (err) {
      return; // Súbor je poškodený alebo neprístupný, ideme na ďalší
    }

    if (stat.isDirectory()) {
      if (!IGNORED_DIRS.includes(file)) {
        results = results.concat(scanNexus(fullPath));
      }
    } else {
      const ext = path.extname(file);
      if (ALLOWED_EXTENSIONS.includes(ext)) {
        const sizeKB = (stat.size / 1024).toFixed(2);

        const mtime = new Date(stat.mtime)
          .toISOString()
          .replace("T", " ")
          .substring(0, 16);
        const relativePath = fullPath
          .replace(process.cwd() + path.sep, "")
          .replace(/\\/g, "/");
        const status =
          stat.size / 1024 > 30 ? "🟥 SPLIT-PROTOCOL" : "🟩 NORMAL";

        results.push({
          path: relativePath,
          size: parseFloat(sizeKB),
          mtime: mtime,
          status: status,
        });
      }
    }
  });
  return results;
}

const tree = scanNexus(process.cwd());

tree.sort((a, b) => new Date(b.mtime) - new Date(a.mtime));

console.log(
  "=========================================================================",
);
console.log(
  `🌌 NEXUS CORE SCANNER V4.2 (BULLETPROOF) | Nájdených uzlov: ${tree.length}`,
);
console.log(
  "=========================================================================\n",
);

tree.forEach((f) => {
  const dateStr = `[${f.mtime}]`.padEnd(19, " ");
  const sizeStr = `[${f.size.toFixed(2)} KB]`.padEnd(12, " ");
  const statusStr = f.status.padEnd(20, " ");

  console.log(`${dateStr} ${sizeStr} ${statusStr} ⚡ ${f.path}`);
});