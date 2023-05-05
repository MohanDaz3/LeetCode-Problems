// 485. Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0
    let max=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++
            if(i==nums.length-1&&max<count){
              max=count
            }
        }else if(nums[i]===0){
            if(max<count){
                max=count
            }
            count=0
        }

        
    }
  return max
    

};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));