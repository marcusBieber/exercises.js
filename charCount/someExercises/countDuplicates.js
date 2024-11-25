// Aufgabe 5: Nur Werte größer als 1 zählen

const charCount = { a: 2, b: 3, c: 2, d: 1 };

function countDuplicates(obj) {
  let duplicate = 0;
  for (let key in obj) {
    if (obj[key] > 1) {
      duplicate++;
    }
  }
  console.log(duplicate);
}

countDuplicates(charCount);
