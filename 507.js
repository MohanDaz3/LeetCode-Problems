// 507. Perfect Number
// link:https://leetcode.com/problems/perfect-number/description/


/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum=0;
    for(let i=0;i<=(num/2);i++){
        if(num%i==0){
            sum+=i
        }
    }
    return sum==num

};
console.log(checkPerfectNumber(28));  // true
console.log(checkPerfectNumber(7));  // false