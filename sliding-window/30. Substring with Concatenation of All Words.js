/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s.length || !words.length) return [];

  const wordLength = words[0].length;
  const numWords = words.length;
  const result = [];

  // Create a frequency map for the words
  const wordMap = {};
  for (let word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1;
  }

  // Iterate through the string with a sliding window approach
  for (let i = 0; i < wordLength; i++) {
    let left = i;
    let count = 0;
    let seenWords = {};

    // Move right pointer by wordLength each time
    for (let j = i; j <= s.length - wordLength; j += wordLength) {
      const word = s.substring(j, j + wordLength); // Get current word in the window
      // If the word is in the word map, we count it
      if (wordMap[word]) {
        seenWords[word] = (seenWords[word] || 0) + 1;
        count++;

        // If we've seen the word more times than it appears in the map, shift the window
        while (seenWords[word] > wordMap[word]) {
          const leftWord = s.substring(left, left + wordLength);
          seenWords[leftWord]--;
          count--;
          left += wordLength;
        }

        // If we've matched the exact number of words, add the index to the result
        if (count === numWords) {
          result.push(left);
        }
      } else {
        // Reset if the word is not valid
        seenWords = {};
        count = 0;
        left = j + wordLength;
      }
    }
  }

  return result;
};

console.log(
  findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
);
console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']));
