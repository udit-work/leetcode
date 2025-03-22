/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (input) {
    let left = input.length - 1;
    let right = input.length - 1;
    let output = [];
    let word = '';
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));