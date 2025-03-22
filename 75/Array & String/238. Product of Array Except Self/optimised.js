/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (!nums.length) {
        return [];
    }
    const result = Array(nums.length).fill(0);
    let prefixProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefixProduct;
        prefixProduct*= nums[i];
    }
    let suffixProduct = 1;
    for (let i = nums.length - 1; i >=0; i--) {
        result[i]*= suffixProduct;
        suffixProduct*= nums[i];
    }
    return result;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));