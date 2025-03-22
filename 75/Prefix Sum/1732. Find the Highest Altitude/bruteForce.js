/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAltitude = 0;
    let output = [0];
    for (let i = 1; i <= gain.length; i++) {
        // console.log(output[i - 1], gain[i-1], gain[i]);
        const result = output[i - 1] + gain[i - 1];
        // console.log(result);
        maxAltitude = Math.max(maxAltitude, result);
        output.push(result);
    }
    return maxAltitude;
};

console.log(largestAltitude([-5,1,5,0,-7]));
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));
console.log(largestAltitude([44,32,-9,52,23,-50,50,33,-84,47,-14,84,36,-62,37,81,-36,-85,-39,67,-63,64,-47,95,91,-40,65,67,92,-28,97,100,81]));