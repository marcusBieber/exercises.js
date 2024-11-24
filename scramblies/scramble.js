// Complete the function scramble(str1, str2) that returns
// true if a portion of str1 characters can be rearranged to match str2,
// otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z).
// No punctuation or digits will be included.
// Performance needs to be considered.

/*
function scramble(str1, str2) {
    let s1 = str1.split("")
    let s2 = str2.split("").sort()
    let charsInCommon = s1.filter(char => s2.includes(char))
    let sortedChars = charsInCommon.sort()
    if (sortedChars.length >= s2.length) {
        return true
    } else {
        return false
    }
}
console.log(scramble("rentnerin", "rentner")) // korrekt true
console.log(scramble("javscripts", "javascript")) // sollte false sein ist aber true

mein Ansatz war die Strings jeweils in ein Array zu splitten, alle Buchstaben aus
str1 herauszufiltern die auch in str2 vorkommen und das gefilterte Array mit dem Array
von str2 in gleicher Reihenfolge zu vergleichen, leider wird hier nicht die Häufigkeit
der Vorkommen der Buchstaben berücksichtigt weshalb das Ergebnis nicht in jedem Fall
korrekt ist, wenn "n" in str1 3 mal vorkommt und in str2 nur 2 mal wird "n" nach dem Filtern
trotzdem 3 mal gespeichert, daher führt der Vergleich über die Länge nicht immer zum 
korrekten Ergebnis, hierfür habe ich leider nicht die passende Lösung gefunden
*/

function scramble(str1, str2) {
  let count1 = {};
  let count2 = {};

  for (let char of str1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  for (let char of str2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  for (let char in count2) {
    if ((count1[char] || 0) < count2[char]) {
      return false;
    }
  }
  return true;
}
console.log(scramble("rentnerin", "rentner"));
console.log(scramble("javscripts", "javascript"));
