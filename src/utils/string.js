export function normalizeString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
