// 1539. Kth Missing Positive Number
// link:https://leetcode.com/problems/kth-missing-positive-number/




/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let count=0
  for (let i of arr){
    if(i<=k+count){
        count++
    }
  }
  return k+count
   
   
   };
   console.log(findKthPositive([2,3,4,7,11],5));  //9
   console.log(findKthPositive([1,2,3,4],2));  //6