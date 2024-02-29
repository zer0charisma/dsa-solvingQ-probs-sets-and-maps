/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words - Words to be grouped
 */
function anagramGroups(words) {
  // Create a Map to store the groups of anagrams
  const results = new Map();

  // Iterate through each word in the input array
  words.forEach((werd) => {
    // Clean the word by converting to lowercase, sorting characters, and joining
    const cleanWerd = werd.toLowerCase().split('').sort().join('');
    
    // Retrieve the current group associated with the cleaned word from the Map
    const group = results.get(cleanWerd);

    // Update the Map with the word added to its corresponding group
    results.set(cleanWerd, group ? [...group, werd] : [werd]);
  });

  // Convert the Map to an object using Object.fromEntries
  const anagramObj = Object.fromEntries(results);
  
  // Extract the values (groups of anagrams) from the object
  const groupedWerds = Object.values(anagramObj);

  // Return the grouped words
  return groupedWerds;
}

module.exports = anagramGroups;
