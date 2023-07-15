// 2455. Average Value of Even Numbers That Are Divisible by Three
// link:https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let count=0
    let num=0
    let avg=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%3===0 && nums[i]%2===0){
            num+=nums[i]
            count++
        }
    }
    if(num){
        avg= Math.floor(num/count)
    }
    return avg
};
console.log(averageValue([1,3,6,10,12,15]));  //9
console.log(averageValue([1,2,4,7,10]));  //0