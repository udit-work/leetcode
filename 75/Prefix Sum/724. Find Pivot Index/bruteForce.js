var pivotIndex = function(nums) {
    if (!nums.length) {
        return -1;
    }
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (j = 0; j < i; j++) {
            leftSum += nums[j];
        }
        for (let k = (i + 1); k < nums.length; k++) {
            rightSum += nums[k];
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));