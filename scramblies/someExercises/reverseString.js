// 4. Umkehren eines Strings:
// Aufgabe: Schreibe eine Funktion, die einen gegebenen String umkehrt.
// Beispiel: reverseString("hello"); // "olleh"
// Hinweis: Du kannst die split(), reverse() und join() Methoden verwenden.

function reverseString(string) {
    let reverse = string.split("").reverse().join("")
    return reverse
}
console.log(reverseString("hcafniErheSraWsad"))