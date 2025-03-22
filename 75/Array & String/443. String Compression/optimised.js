/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let charMap = {};
    for (let i = 0; i < chars.length; i++) {
        const currentChar = chars[i];
        if (!charMap[currentChar]) {
            charMap[currentChar] = 0;
        }
        charMap[currentChar]++;
    }
    let output = [];
    Object.keys(charMap).forEach(key => {
        output.push(key);
        if (charMap[key] > 1) {
            output = output.concat([...`${charMap[key]}`]);
        }
    })
    return output.length;
};

console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));