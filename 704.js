// 704. Binary Search
// link:https://leetcode.com/problems/binary-search/
// submitted not pushed git

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftIndex=0
    let rightIndex=nums.length-1
    while(leftIndex <= rightIndex){
        middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target==nums[middleIndex]){
            return middleIndex
        }
        if(target<nums[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],9));
console.log(search([-1,0,3,5,9,12],2));