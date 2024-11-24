// Complete the function scramble(str1, str2) that returns
// true if a portion of str1 characters can be rearranged to match str2,
// otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z).
// No punctuation or digits will be included.
// Performance needs to be considered.

function scramble(str1, str2) {
    let s1 = str1.split("")
    let s2 = str2.split("").sort()
    let charsInCommon = s2.filter(char => s1.includes(char))
    let sortedChars = charsInCommon.sort()
    if (sortedChars.length >= s2.length) {
        return true
    } else {
        return false
    }
}

//console.log(scramble("javscripts", "javascript")) NOCH NICHT GELÖST!!!