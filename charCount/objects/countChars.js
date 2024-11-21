// Aufgabe 6: Zeichen aus einem String zählen
// Schreibe eine Funktion countChars(text), die ein Objekt zurückgibt,
// das die Anzahl der Vorkommen jedes Zeichens in einem gegebenen String speichert.
// Ignoriere Groß-/Kleinschreibung.

function countChars(str) {
    const loweredStr = str.toLowerCase()
    let countedChars = {} // initiieren eines leeren Objekts "countedChars"
    for (char of loweredStr) { // innerhalb der Schleife wird jeder Buchstabe des Strings
        if (countedChars[char]) { // als Schlüssel in "countedChars" gespeichert und erhält den Wert 1
            countedChars[char]++ // ist der Buchstabe bereits in "countedChars" enthalten
        } else {                // wird sein Wert um 1 erhöht
            countedChars[char] = 1
        }
    }
    return countedChars
}

console.log(countChars("Hallo"))