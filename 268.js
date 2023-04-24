// 268. Missing Number
// link:https://leetcode.com/problems/missing-number/



/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let total=0
  let count=0
  for(let i=0;i<nums.length;i++){
    total+=nums[i]
    count+=i
  }  
  count+=nums.length
  return count - total
};
console.log(missingNumber([3,0,1]));  //2
console.log(missingNumber([0,1])); //2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));  //8