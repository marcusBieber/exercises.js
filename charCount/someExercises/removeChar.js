// Aufgabe 9: Zeichen aus einem Objekt entfernen
// Schreibe eine Funktion removeChar(obj, char),
// die ein Zeichen (char) aus einem Objekt entfernt.

let charCount = { a: 2, b: 3, c: 1 };

function removeChar(obj, char) {
  if (obj[char]) {
    delete obj[char];
  }
  return obj;
}
console.log(removeChar(charCount, "b"));
