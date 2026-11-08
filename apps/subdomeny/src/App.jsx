const getSubIdFromHostname = () => {
  if (typeof window === "undefined") return null;
  const host = window.location.hostname.toLowerCase();
  const port = window.location.port;

  if (host === "localhost" || host === "127.0.0.1") {
    if (port === "5171") return null; // Main-web port -> Homepage
    if (port === "51800") return "SUB 00";
    if (port === "51801") return "SUB 01";
    if (port === "51802") return "SUB 02";
    if (port === "51803") return "SUB 03";
    if (port === "51804") return "SUB 04";
    if (port === "51805") return "SUB 05";
    if (port === "51806") return "SUB 06";
    if (port === "51807") return "SUB 07";
    if (port === "51808") return "SUB 08";
    if (port === "51809") return "SUB 09";
    if (port === "51810") return "SUB 10";
    if (port === "51811") return "SUB 11";
    if (port === "51812") return "SUB 12";
    if (port === "51813") return "SUB 13";
    if (port === "51814") return "SUB 14";
    if (port === "51815") return "SUB 15";
    return null;
  }

  if (host === "projekt-nexus.sk" || host === "www.projekt-nexus.sk") return null;

  if (host.includes("personal")) return "SUB 01";
  if (host.includes("work")) return "SUB 02";
  if (host.includes("finance")) return "SUB 03";
  if (host.includes("business")) return "SUB 04";
  if (host.includes("investments")) return "SUB 05";
  if (host.includes("study")) return "SUB 06";
  if (host.includes("professional")) return "SUB 07";
  if (host.includes("reader")) return "SUB 08";
  if (host.includes("player")) return "SUB 09";
  if (host.includes("home")) return "SUB 10";
  if (host.includes("recovery")) return "SUB 11";
  if (host.includes("codex")) return "SUB 12";
  if (host.includes("habits")) return "SUB 13";
  if (host.includes("blog")) return "SUB 14";
  if (host.includes("death")) return "SUB 15";
  if (host.includes("mentor")) return "SUB 00";

  return null; // ZÁKAZ NATVRDO FALLBACKU "SUB 00"
};