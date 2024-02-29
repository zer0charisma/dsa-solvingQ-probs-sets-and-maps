/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagrams(s1, s2) {
  // Build character maps for both strings
  const s1Map = buildCharMap(s1);
  const s2Map = buildCharMap(s2);

  // Check if the maps have the same number of keys
  if (Object.keys(s1Map).length !== Object.keys(s2Map).length) {
    return false;
  }

  // Check if the frequency of each character is the same in both maps
  for (let char in s1Map) {
    if (s1Map[char] !== s2Map[char]) {
      return false;
    }
  }

  // If the function hasn't returned false by this point, the strings are anagrams
  return true;
}

/**
 * Build character map for a given string
 * @param {string} str
 * @returns {Object} - Character map with character frequencies
 */
function buildCharMap(str) {
  // Initialize an empty object to store character frequencies
  const charMap = {};

  // Iterate through each character in the string
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    // Update the character frequency in the map
    charMap[char] = charMap[char] + 1 || 1;
  }

  // Return the character map
  return charMap;
}

// Export the 'anagrams' function for external use
module.exports = anagrams;
