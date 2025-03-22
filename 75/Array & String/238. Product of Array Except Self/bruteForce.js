/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (!nums.length) {
        return [];
    }
    const result = [];
    for (let i = 0; i< nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            product *= nums[j];
        }
        result.push(product);
    }
    return result;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));