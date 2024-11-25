// 3. Summe der Zahlen in einem Array:
// Aufgabe: Schreibe eine Funktion, die die Summe aller Zahlen in einem Array berechnet.
// Beispiel: sumArray([1, 2, 3, 4, 5]); // 15
// Hinweis: Du kannst eine for-Schleife oder reduce verwenden, um die Summe zu berechnen.

function sumArray(numArray) {
  let sum = 0;
  for (let num of numArray) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

/*
alternativ mit .reduce()

function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

Aufbau der .reduce()-Methode:

array.reduce(callback, initialValue)

Parameter:
callback (erforderlich):
Eine Funktion, die für jedes Element im Array ausgeführt wird.
Sie hat vier Parameter:

accumulator: Der "Akkumulator", der den aktuellen Zwischenwert speichert.
currentValue: Das aktuelle Element im Array.
currentIndex (optional): Der Index des aktuellen Elements.
array (optional): Das ursprüngliche Array.
initialValue (optional):
Ein Startwert für den accumulator. Wenn kein Startwert angegeben ist, 
wird das erste Element des Arrays als Startwert verwendet, 
und die Iteration beginnt beim zweiten Element.
*/