// 231. Power of Two
// link:https://leetcode.com/problems/power-of-two/


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
if(n<1){
  return false
}
while(n>1){
    if(n%2!==0){
        return false
    }
    n=n/2
}
return true
};
console.log(isPowerOfTwo(8)); 