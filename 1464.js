// 1464. Maximum Product of Two Elements in an Array
// link:https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
nums=nums.sort((a,b)=>b-a)
return (nums[0]-1)*(nums[1]-1)    

};
console.log(maxProduct([3,4,5,2]));  //12
console.log(maxProduct([1,5,4,5]));  //16
console.log(maxProduct([3,7]));      //12
