/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s.length) { return true; }
    if (!t.length || s.length > t.length) { return false; }
    let i = 0, j = 0;
    while (j < t.length) {
        if (i < s.length && s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));