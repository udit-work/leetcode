/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const output = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] !== 0) {
            output.unshift(nums[i]);
        } else {
            output.push(nums[i]);
        }
    }
    nums = output;
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));