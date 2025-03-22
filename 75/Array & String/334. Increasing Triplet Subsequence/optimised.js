/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstEl = Number.POSITIVE_INFINITY;
    let secondEl = Number.POSITIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= firstEl) {
            firstEl = nums[i];
        } else if (nums[i] <= secondEl) {
            secondEl = nums[i];
        } else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([5,4,3,2,1]));
console.log(increasingTriplet([2,1,5,0,4,6]));