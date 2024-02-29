/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  // Create a map to count the frequency of each character
  const charCount = new Map();

  // Iterate through each character in the word
  for (let char of word) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Count how many characters have an odd frequency
  let oddCount = 0;
  for (let count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // If there is at most one character with an odd frequency, it's a permutation of a palindrome
  return oddCount <= 1;
}

module.exports = permutationPalindrome;

