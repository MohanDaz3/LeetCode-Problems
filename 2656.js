// 2656. Maximum Sum With Exactly K Elements
// link:https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
   nums=nums.sort((a,b)=>a-b)
  let total=0
  for(let i=0;i<k;i++){
    let m=nums[nums.length-1]
    total+=m
    nums[nums.length-1]=m+1
  }
  return total

//   or

// let sum=0
// for(let i=1;i<=k;i++){
//     let m=nums.pop()
//     sum +=m
//     nums.push(m+1)
// }
// return sum


};

console.log(maximizeSum([1,2,3,4,5],3));  //18
console.log(maximizeSum([5,5,5],2));   //11
