// Aufgabe 10: Erstelle ein komplettes Zeichen-Zählprogramm
// Kombiniere die Aufgaben:

// Nimm einen String und zähle die Zeichen mit der Funktion countChars.
// Gib alle Schlüssel und Werte in der Konsole aus.
// Zähle, wie viele Zeichen mehr als 1-mal vorkommen.

function countChars(string) {
  const loweredString = string.toLowerCase();
  const countedChars = {};

  for (let char of loweredString) {
    if (countedChars[char]) {
      countedChars[char]++;
    } else {
      countedChars[char] = 1;
    }
  }

  let duplicate = 0;

  for (let key in countedChars) {
    if (countedChars[key] > 1) {
      duplicate++;
    }
  }
  return [countedChars, duplicate]; //um meherere Werte auszugeben Array[] oder Objekt{} verwenden
}
console.log(
  countChars("IchHabeJavaScriptGelerntUndBeherrscheObjekteNunOhneHilfe")
);
