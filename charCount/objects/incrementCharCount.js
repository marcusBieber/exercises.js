// Aufgabe 8: Zeichen hinzuzählen oder initialisieren
// Schreibe eine Funktion incrementCharCount(obj, char), die:
// Wenn das Zeichen char bereits im Objekt existiert, seinen Wert um 1 erhöht.
// Wenn das Zeichen noch nicht existiert, es mit dem Wert 1 hinzufügt.

let charCount = { a: 2, b: 3 };

function incrementCharCount(obj, char) {
  if (obj[char]) {
    obj[char]++;
  } else {
    obj[char] = 1;
  }
  return obj;
}
console.log(incrementCharCount(charCount, "b"));
console.log(incrementCharCount(charCount, "c"));
