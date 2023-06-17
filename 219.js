






/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    for(let i=0;i<nums.length-1;i++){
             let j=nums.length-1
        while(i<j){
        if(nums[i]==nums[j] && Math.abs(i-j)<=k){
            return true
            
        }
        j--
    }
    }
    return false
       
   };
   console.log(containsNearbyDuplicate([1,2,3,1],3)); //true
   console.log(containsNearbyDuplicate([1,0,1,1],1)); //true
   console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));  //false