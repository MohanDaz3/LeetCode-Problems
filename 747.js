// 747. Largest Number At Least Twice of Others
// link:https://leetcode.com/problems/largest-number-at-least-twice-of-others/


/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {

    let larg=Math.max(...nums)
    for(let i=0;i<nums.length;i++){
        if(nums[i]*2>larg&&i!=nums.indexOf(larg)){
        return-1
    }
     }
    return nums.indexOf(larg)
};
console.log(dominantIndex([3,6,1,0]));  //1
console.log(dominantIndex([1,2,3,4]));  //-1