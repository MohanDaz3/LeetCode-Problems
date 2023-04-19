// 2427. Number of Common Factors
// link:https://leetcode.com/problems/number-of-common-factors/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let len
    let count=0
    if(a<b){
         len=a
    }else{
        len=b
    }
    // a<b?len=a:len=b  => terinarry operator
    for(let i=1;i<=len;i++){
        if(a%i===0 && b%i===0){

           count++
        }
    }
    return count
    
};
console.log(commonFactors(12,6));
console.log(commonFactors(30,25));