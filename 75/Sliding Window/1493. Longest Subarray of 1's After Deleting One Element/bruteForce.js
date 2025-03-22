/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        let zeroesRemoved = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 0) {
                zeroesRemoved++;
            }
            if (zeroesRemoved > 1) {
                break;
            }
            maxCount = Math.max(maxCount, j-i);
        }
    }
    return maxCount;
};

console.log(longestSubarray([1,1,0,1]));
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
console.log(longestSubarray([1,1,1]));