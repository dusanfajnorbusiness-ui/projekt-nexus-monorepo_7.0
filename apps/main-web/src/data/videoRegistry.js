/**
 * 🎬 NEXUS GLOBAL VIDEO REGISTRY
 * -------------------------------
 * Databáza všetkých vizuálnych záznamov, rozdelená podľa dimenzií.
 * Z tohto súboru sa automaticky generuje VideoGallery.jsx.
 */

export const videoRegistry = [
  {
    dimId: "ID10",
    dimName: "ID10 - HOME CORE (Domov)",
    color: "#FFFFFF",
    sections: [
      {
        sectionId: "S01",
        sectionName: "Sekcia 01: Inicializácia a Definícia Bytia",
        videos: [
          {
            id: "S07jv9ONY1Q",
            title: "ID 10 NODE 01 – [DOMOV]",
            subtitle: "Vnútorné UI Space: Úvod a zadefinovanie Bytia",
            desc: "Domov nie je fyzická adresa v Matrixe. Domov je ten jediný prázdny bod v nepriestore, kde končí hluk mysle a začína absolútne bytie. Inštalácia ultimátneho firewallu (Tichý svedok), ukončenie vojny vo vlastnej hlave a očista RAM pamäte od cudzích programov.",
            tier: "FREE",
            duration: "14:28",
            date: "02.04.2026",
          },
          // Tu môžeš pridávať ďalšie videá do Sekcie 01...
        ],
      },
      {
        sectionId: "S02",
        sectionName: "Sekcia 02: Defragmentácia Matrixu",
        videos: [
          // Prázdna sekcia pre budúce videá (Akordeón zostane prázdny)
        ],
      },
    ],
  },
  {
    dimId: "MENTORING",
    dimName: "ARCHITECT SERVICES (Stream Archív)",
    color: "#FFD700", // Zlatá OMEGA farba
    sections: [
      {
        sectionId: "STR01",
        sectionName: "Záznamy z Mentoringu a Konferencií",
        videos: [],
      },
    ],
  },
];
