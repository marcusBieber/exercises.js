// Write a function that will return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  loweredText = text.toLowerCase();

  const charCount = {};

  for (char of loweredText) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let duplicates = 0;

  for (const key in charCount) {
    if (charCount[key] > 1) {
      duplicates++;
    }
  }
  return duplicates;
}
