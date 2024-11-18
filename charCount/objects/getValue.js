// Aufgabe 2: Wert mit einem Schlüssel abrufen
// Gegeben ist das folgende Objekt:
const charCount = { a: 2, b: 3, c: 1 };
// Schreibe eine Funktion getValue(key), die den Wert für einen bestimmten Schlüssel zurückgibt.
// Wenn der Schlüssel nicht existiert, gib "Schlüssel nicht gefunden" zurück.

function getValue(key) {
  if (charCount[key]) {
    console.log(charCount[key]);
  } else {
    console.log("Schlüssel nicht gefunden");
  }
}
console.log(getValue("a"));
console.log(getValue("b"));
console.log(getValue("x"));
