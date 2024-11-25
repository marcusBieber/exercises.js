// 2. Zeichen in einem String finden:
// Aufgabe: Schreibe eine Funktion, die überprüft,
// ob ein bestimmtes Zeichen in einem String vorhanden ist.
// Gib true zurück, wenn das Zeichen gefunden wird,
// und false, wenn es nicht gefunden wird.
// Beispiel: containsChar("hello", "e"); // true, containsChar("hello", "z"); // false
// Hinweis: Du kannst die indexOf-Methode oder eine Schleife verwenden.

function containsChar(string, qChar) {
    for (let char of string) {
        if (char === qChar)
            return true
    }
    return false
}
console.log(containsChar("hello", "e"))
console.log(containsChar("hello", "z"))

/*
alternativ mit indexOf

function containsChar(string, qChar) {
    return string.indexOf(qChar) !== -1
}
console.log(containsChar("hello", "e"))
console.log(containsChar("hello", "z"))

str.indexOf(char)

Die Methode indexOf sucht im String str nach dem ersten Vorkommen des Zeichens char.
Wenn das Zeichen gefunden wird, gibt indexOf die Position (Index) zurück, an der es gefunden wurde (z. B. 0, 1, usw.).
Wenn das Zeichen nicht gefunden wird, gibt die Methode -1 zurück.
Vergleich mit -1:

Wir prüfen mit !== -1, ob das Zeichen im String vorkommt.
Wenn der Rückgabewert nicht -1 ist, bedeutet das, dass das Zeichen gefunden wurde, und wir geben true zurück.
Andernfalls geben wir false zurück.
*/