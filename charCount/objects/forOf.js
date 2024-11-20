// Aufgabe 4: Alle Schlüssel und Werte durchlaufen
// Schreibe eine Schleife, die jede Schublade (jeden Schlüssel)
// und ihren Inhalt (Wert) in der Konsole ausgibt.

const charCount = { a: 2, b: 3, c: 1 };

/*
function forOf(obj) {
     for (let pair of obj) {
        console.log(`Schlüssel: ${pair}, Wert: ${pair[key]}`)
     }
}   !!!--Objekte sind nicht ohne weiteres iterabel, entweder for..in oder Object.entries() nutzen--!!! 
*/
function forOf(obj) {
    for (let [key, value] of Object.entries(obj)) {
       console.log(`Schlüssel: ${key}, Wert: ${value}`)
    }
}

//forOf(charCount)

function forIn(obj) {
    for (let key in obj) {
       console.log(`Schlüssel: ${key}, Wert: ${obj[key]}`)
    }
}

forIn(charCount)