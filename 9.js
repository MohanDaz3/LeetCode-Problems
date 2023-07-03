// 9. Palindrome Number
// link:https://leetcode.com/problems/palindrome-number/
// 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     x=String(x)
     reverse=''
    for(let i=x.length-1;i>=0;i--){
        reverse+=x[i]
    }
    if(x==reverse){
        return true
    }else{
        return false
    }
    
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));