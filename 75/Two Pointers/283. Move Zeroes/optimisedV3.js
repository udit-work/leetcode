var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[count] = nums[i];
            count++;
        }
    }
    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
console.log(moveZeroes([1, 0]));
console.log(moveZeroes([1, 2]));