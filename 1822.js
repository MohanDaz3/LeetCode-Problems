// 1822. Sign of the Product of an Array
// link:https://leetcode.com/problems/sign-of-the-product-of-an-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product=1
    for(let i=0;i<nums.length;i++){
        product=product*nums[i]
    }
    if(product<0){
        return -1
    }else if(product>0){
        return 1
    }else{
        return 0
    }
    
};

console.log(arraySign([-1,-2,-3,-4,3,2,1])); //1
console.log(arraySign([1,5,0,2,-3]));  //0
console.log(arraySign([-1,1,-1,1,-1]));  //-1
