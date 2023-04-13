// 283. Move Zeroes
// link:https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     let left=0
     for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            [nums[i],nums[left]]=[nums[left],nums[i]]
            left++
        }
      
     }
    return nums
};
console.log(moveZeroes([0,1,0,3,12]));