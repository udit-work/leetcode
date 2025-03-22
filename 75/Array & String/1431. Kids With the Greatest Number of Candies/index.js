/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    if (!candies.length) {
        return [];
    }
    let maxValue = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < candies.length; i++) {
        maxValue = Math.max(candies[i], maxValue);
    }
    let output = [];
    for (let i = 0; i < candies.length; i++) {
        output.push(candies[i] + extraCandies >= maxValue);
    }
    return output;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));