// 605. Can Place Flowers
// link:https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) { 
    let count=0
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]==0&&flowerbed[i+1]!=1&&flowerbed[i-1]!=1){
            flowerbed[i]=1
            count++
        }
    }
    if(count>=n){
        return true
    }
    return false
   
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));  //true
console.log(canPlaceFlowers([1,0,0,0,1], 2));  //false