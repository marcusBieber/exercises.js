// Aufgabe 7: Zeichen mit mehr als 2 Vorkommen
// Nutze die Funktion aus Aufgabe 6, um zu zählen,
// wie viele Zeichen in einem String mehr als 2-mal vorkommen.

function countCharsWithMoreThanTwo(str) {
  const loweredStr = str.toLowerCase();
  let countedChars = {};
  for (char of loweredStr) {
    if (countedChars[char]) {
      countedChars[char]++;
    } else {
      countedChars[char] = 1;
    }
  }
  let moreThanTwo = 0;
  for (key in countedChars) {
    if (countedChars[key] > 2) {
      moreThanTwo++;
    }
  }
  return moreThanTwo;
}

console.log(countCharsWithMoreThanTwo("Haaalllloo"));
