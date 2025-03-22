/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let output = [];
    for (let i = 0; i < chars.length;) {
        let count = 0;
        for (let j = i; j < chars.length; j++) {
            if (chars[i] === chars[j]) {
                count++;
            }
        }
        output.push(chars[i]);
        if (count > 1) {
            output = output.concat([...`${count}`])
        }
        i+=count;
    }
    return output.length;
};

console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));