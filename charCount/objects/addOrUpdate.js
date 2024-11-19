// Aufgabe 3: Einen Schlüssel-Wert-Paar hinzufügen
// Erstelle eine Funktion addOrUpdate(charCount, key, value), die:

// Ein Schlüssel-Wert-Paar (key und value) zu einem gegebenen Objekt charCount hinzufügt.
// Wenn der Schlüssel bereits existiert, aktualisiere seinen Wert auf value.

let charCount = { a: 2, b: 3 };

function addOrUpdate(obj, key, value) {
    obj[key] = value
}

addOrUpdate(charCount, "c", 8)
console.log(charCount) // { a: 2, b: 3, c: 8 }