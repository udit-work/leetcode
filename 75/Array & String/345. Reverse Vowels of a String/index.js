/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const checkIsVowel = (input) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes(input.toLowerCase());
    }
    const strArr = s.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (checkIsVowel(strArr[left]) && checkIsVowel(strArr[right])) {
            [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        } else if (checkIsVowel(strArr[left])) {
            right--;
            continue;
        } else if (checkIsVowel(strArr[right])) {
            left++;
            continue;
        }
        left++;
        right--;
    }
    return strArr.join('');
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));