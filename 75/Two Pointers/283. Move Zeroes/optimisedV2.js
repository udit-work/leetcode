var moveZeroes = function (nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
console.log(moveZeroes([1, 0]));
console.log(moveZeroes([1, 2]));