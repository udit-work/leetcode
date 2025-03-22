/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const checkIsDivisor = (actualString, subString) => {
        return actualString.length % subString.length === 0 && subString.repeat(actualString.length / subString.length) === actualString;
    };
    let shorterString = str1.length > str2.length ? str2 : str1;
    for (let i = shorterString.length; i >0; i--) {
        const currentSubString = shorterString.substring(0, i);
        if (checkIsDivisor(str1, currentSubString) && checkIsDivisor(str2, currentSubString)) {
            return currentSubString;
        }
    }
    return "";
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));

console.log(gcdOfStrings("LEET", "CODE"));