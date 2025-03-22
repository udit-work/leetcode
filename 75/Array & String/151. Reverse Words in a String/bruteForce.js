/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (input) {
    const s = input.trim();
    if (!s.length) {
        return '';
    }
    let output = [];
    for (let i = s.length - 1; i >= 0;) {
        let word = '';
        for (let j = i; j >= 0; j--) {
            if (s[j] !== ' ' && j !== 0) {
                word = s[j] + word;
                continue;
            } else {
                if (j === 0) {
                    word = s[j] + word;
                }
                if (word.length) {
                    output.push(word);
                    i = i - (word.length + 1);
                } else {
                    i--;
                }
                break;
            }
        }
    }
    return output.join(' ');
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));