/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let maxCount = 0;
    let zeroEncountered = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroEncountered++;
        }
        while (zeroEncountered > 1) {
            if (nums[left] === 0) {
                zeroEncountered--;
            }
            left++;
        }
        maxCount = Math.max(maxCount, i - left );
    }
    return maxCount;
};

console.log(longestSubarray([1,1,0,1]));
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
console.log(longestSubarray([1,1,1]));