// 217. Contains Duplicate
// link:https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let num=new Set()
   for(let i=0;i<nums.length;i++){
    if(num.has(nums[i])){
        return true
    }else{
        num.add(nums[i])
    }
   }
   return false
    
    
};
console.log(containsDuplicate([1,2,3,1]));  //true
console.log(containsDuplicate([1,2,3,4]));  //false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));  //true