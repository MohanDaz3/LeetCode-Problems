// 414. Third Maximum Number
// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let num=[...new Set(nums)].sort(function(a,b){
        return a-b
    })
    if(num.length<3){
        return num[num.length-1]
    }else{
        return num[num.length-3]
    }
    
};
console.log(thirdMax([3,2,1]));  //1
console.log(thirdMax([5,2,2])); //5
console.log(thirdMax([2,2,3,1]));//1
console.log(thirdMax([1,2])); //2