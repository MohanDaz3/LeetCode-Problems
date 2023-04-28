// 26. Remove Duplicates from Sorted Array
// link:https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let k=0 
   
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==nums[i+1]){
        nums[k]=nums[i]
        k++
    }

  }
  
  return k
    
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));