// Schreibe eine Funktion charCount(word), die einen String word als Argument erhält.
// Die Funktion soll für jeden Buchstaben zählen, wie oft er vorkommt, und das Ergebnis als Objekt zurückgeben.
// BONUS:Schreibe die Funktion so, dass sie Groß- und Kleinschreibung ignoriert
// (z. B. charCount("Hello") sollte { h: 1, e: 1, l: 2, o: 1 } ergeben).

function charCount(word) {
  if (word == "") {
    return {};
  }

  const result = {};

  for (let char of word.toLowerCase()) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("Hello"));
