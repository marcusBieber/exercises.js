// 5. Filtern von Zahlen in einem Array:
// Aufgabe: Schreibe eine Funktion, die nur die geraden Zahlen aus einem Array zurückgibt.
// Beispiel: filterEven([1, 2, 3, 4, 5]); // [2, 4]
// Hinweis: Du kannst die filter()-Methode verwenden.

function filterEven(numArray) {
    let result = numArray.filter(num => (num % 2 == 0))
    return result
}
console.log(filterEven([1, 2, 3, 4, 5]))

/*
filter(number => number % 2 == 0); Das bedeutet: 
Wenn wir beispielsweise 4 durch 2 teilen, bleibt kein Rest übrig, 
wodurch die Zahl nur gerade sein kann. 
Mit dem Ausdruck number % 2 == 0 haben wir demnach eine Möglichkeit, 
herauszufinden, ob eine Zahl gerade oder ungerade ist.
*/