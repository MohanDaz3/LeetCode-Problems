// 448. Find All Numbers Disappeared in an Array
// link:https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len=nums.length
     nums=new Set(nums)
    let ar=[]
    for(let i=1;i<=len;i++){
        if(!nums.has(i)){
            ar.push(i)
        }
    }
    return ar;
    
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));  //[5,6]
console.log(findDisappearedNumbers([1,1]));  //[2]