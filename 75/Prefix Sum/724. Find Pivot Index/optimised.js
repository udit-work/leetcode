var pivotIndex = function(nums) {
    if (!nums.length) {
        return -1;
    }
    let leftSumArr = new Array(nums.length);
    let rightSumArr = new Array(nums.length);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        rightSumArr[i] = rightSum;
        rightSum += nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        leftSumArr[i] = leftSum;
        if (leftSum === rightSumArr[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
console.log(pivotIndex([-1,-1,0,0,-1,-1]));