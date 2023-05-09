// 2215. Find the Difference of Two Arrays
// link:https://leetcode.com/problems/find-the-difference-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    numsToOne=new Set(nums1)
    numsToTwo=new Set(nums2)
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                numsToOne.delete(nums1[i])
                numsToTwo.delete(nums1[i])
            }
        }
    }
    ans=[[...numsToOne],[...numsToTwo]]
    return ans
};

console.log(findDifference([1,2,3],[2,4,6])); //[[1,3],[4,6]]
console.log(findDifference([1,2,3,3],[1,1,2,2])); //[[3],[]]