
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length === 1) { return nums; }
    let firstPointer = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && firstPointer === -1) {
            firstPointer = i;
            continue;
        }
        if (nums[i] !== 0 && firstPointer !== -1) {
            [nums[firstPointer], nums[i]] = [nums[i], nums[firstPointer]];
            firstPointer++;
            while (nums[firstPointer] !== 0 && firstPointer < nums.length) {
                firstPointer++;
            }
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
console.log(moveZeroes([1, 0]));
console.log(moveZeroes([1, 2]));