/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s.length) { return true; }
    if (!t.length || s.length > t.length) { return false; }
    let nextStartingIndex = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = nextStartingIndex; j < t.length; j++) {
            if (s[i] === t[j]) {
                if (i === s.length - 1) {
                    return true;
                }
                nextStartingIndex = j+1;
                break;
            } else {
                if (j == t.length - 1) {
                    return false;
                }
            }
        }
    }
    return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));