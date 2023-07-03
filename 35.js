// 35. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let leftIndex=0
    let rightIndex=nums.lenght-1
    let len=nums.lenght-1
    
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target===nums[middleIndex]){
            return middleIndex
        }
        if(target<nums[middleIndex]){
            rightIndex=middleIndex-1
            
        }else{
            leftIndex=middleIndex+1
        }
    }
    
};
console.log(searchInsert([1,3,5,6], 5)); //2
console.log(searchInsert([1,3,5,6], 2)); //1
console.log(searchInsert([1,3,5,6], 7)); //4