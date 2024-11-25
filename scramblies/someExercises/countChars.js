// 1. Zählen der Vorkommen von Zeichen in einem String:
// Aufgabe: Schreibe eine Funktion, die die Häufigkeit jedes
// Zeichens in einem String zählt und das Ergebnis als Objekt zurückgibt.
// Beispiel: countChars("hello"); // { h: 1, e: 1, l: 2, o: 1 }
// Hinweis: Du kannst ein leeres Objekt verwenden, um die Zählung der Zeichen zu speichern.

function countChars(string) {
    let count = {}
    for (let char of string) {
        count[char] = (count[char] || 0) +1
    } return count 
}
console.log(countChars("hello"))