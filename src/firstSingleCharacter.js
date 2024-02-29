/**
 * Return the first character in the string that occurs only once.
 * @param {string} word - The string to be analyzed
 */
function firstSingleCharacter(word) {
  // Convert the word to lowercase and split it into an array of characters
  let wordArray = word.toLowerCase().split("");

  // Create an object to count the occurrences of each letter
  let letterCount = {};

  // Initialize a variable to store the first single letter (if found)
  let firstSingleLetter = null;

  // Iterate through each letter in the word to count occurrences
  wordArray.forEach((letter) => {
    // Increment the count for the letter or initialize it to 1 if not present
    letterCount[letter] ? letterCount[letter]++ : (letterCount[letter] = 1);
  });

  // Iterate through the counts to find the first single letter
  for (let singleLetter in letterCount) {
    if (letterCount[singleLetter] === 1) {
      // Assign the first single letter found and break out of the loop
      firstSingleLetter = singleLetter;
      break;
    }
  }

  // Return the first single letter in the word (or null if none found)
  return firstSingleLetter;
}

// Example usage:
// firstSingleCharacter("bob")

module.exports = firstSingleCharacter;
