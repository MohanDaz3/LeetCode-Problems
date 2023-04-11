// 1470. Shuffle the Array
// link:https://leetcode.com/problems/shuffle-the-array/
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    arr1=nums.slice(0,n)
    arr2=nums.slice(n)
    reslt=[]
    for(let i=0;i<n;i++){
        reslt.push(arr1[i],arr2[i])
        
    }
    return reslt
};
console.log(shuffle([2,5,1,3,4,7],3));
console.log(shuffle([1,2,3,4,4,3,2,1],4));