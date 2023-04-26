// 136. Single Number
// link:https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let num=nums.sort()
    
    let i=0
    while(i<num.length){
        if(num[i]!==num[i+1]){
            return num[i]
        }
        i=i+2
    }
    
   
    
};
console.log(singleNumber([2,2,1])); //1
console.log(singleNumber([4,1,2,1,2]));  //4
console.log(singleNumber([1]));  //1