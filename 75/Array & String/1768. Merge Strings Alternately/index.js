/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let outputString = '';
    const maxLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) {
            outputString += word1[i];
        }
        if (word2[i]) {
            outputString += word2[i];
        }
    }
    return outputString;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));