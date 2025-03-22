/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (!((str1 + str2) === (str2 + str1))) {
        return '';
    }
    const calcGCD = (num1, num2) => {
        return num2 === 0 ? num1 : calcGCD(num2, num1 % num2);
    }

    const gcd = calcGCD(str1.length, str2.length);
    return str1.substring(0, gcd);
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));

console.log(gcdOfStrings("LEET", "CODE"));